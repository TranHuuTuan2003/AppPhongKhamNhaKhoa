import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import logo from '../assets/svgviewer-png-output.png';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import styles from '../css/stylesTrangchu';
import imgnen from '../assets/anhnen.jpg'
import request from '../utils/httpRequest';

export default function HospitalApp({ navigation }) {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [doctorData, setDoctorData] = useState([]);
     const [newData, setNewData] = useState([]);
     const [services, setServices] = useState([]);

    useEffect(() => {
       
        const fetchDoctors = async () => {
            try {
                const response = await request.get('get-top-6-doctor'); // Gửi request
                const result = response.data; // Lấy dữ liệu từ response
        
                if (result.success) {
                    // Kiểm tra thành công và cập nhật state với dữ liệu bác sĩ
                    setDoctorData(result.data);
                } else {
                    console.error('Failed to fetch doctors:', result.error);
                }
            } catch (error) {
                // Bắt lỗi khi gửi request hoặc gặp vấn đề khác
                console.error('Error fetching doctors:', error.message);
            }
        };
        

        const fetchServices = async () => {
            try {
                const response = await request.get('get-all-services-top');
                const result = response.data; // Lấy dữ liệu từ axios
        
                if (result.success) {
                    const formattedServices = result.data.map(service => ({
                        name: service.name,
                        avatar: service.avatar,
                    }));
                    setServices(formattedServices); // Cập nhật state với dữ liệu format
                } else {
                    console.error('Error fetching services:', result.error);
                }
            } catch (error) {
                console.error('Fetch error:', error.message); // Hiển thị lỗi
            }
        };

        const fetchData = async () => {
            try {
                const response = await request.get('get-top-6-news');
                const result = response.data; // Lấy dữ liệu từ axios
        
                if (result.success) {
                    const formattedData = result.data.map(news => ({
                        ...news,
                        created_at: new Date(news.created_at).toISOString().split('T')[0], // Lấy YYYY-MM-DD
                    }));
                    setNewData(formattedData); // Cập nhật state với dữ liệu đã format
                } else {
                    console.error('Failed to fetch news:', result.error);
                }
            } catch (error) {
                console.error('Error fetching news:', error.message); // Hiển thị lỗi
            }
        };
        

        fetchServices();
        fetchData();
        fetchDoctors();
    }, []);

    const handleOutsidePress = () => {
        if (isNavbarVisible) {
            setIsNavbarVisible(false);
        }
    };

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={imgnen} style={styles.background} resizeMode="cover">
                <LinearGradient colors={['rgba(255, 255, 255, 0)', '#FFFFFF']} style={styles.overlay} />
                <ScrollView>
                    <Image source={logo} style={styles.logo_plus} />
                    <View style={styles.services}>
                        {servicesData.map((service, index) => (
                            <View style={styles.serviceItem} key={index}>
                                <Image style={styles.imageIcon} source={{ uri: service.icon }} />

                                <Text style={styles.serviceText}>{service.label}</Text>
                            </View>
                        ))}
                    </View>

                    <View>
                        <Text style={styles.title2}>ĐƯỢC TIN TƯỞNG HỢP TÁC VÀ ĐỒNG HÀNH</Text>
                        <View style={styles.partners}>
                            {partnersData.map((partner, index) => (
                                <View style={styles.partner} key={index}>
                                    <Image
                                        source={{ uri: partner.logo }}
                                        style={styles.partnerImage}
                                        alt={partner.name}
                                    />
                                    <Text style={styles.partnerName}>{partner.name}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={[styles.doctor, { flexDirection: 'row' }]}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#003366' }}>Bác sĩ tư vấn</Text>
                        <Text style={{ fontSize: 15, marginLeft: 159, marginTop: 8, color: '#00B5F1' }}>
                            Xem tất cả <Icon2 name="angle-double-right" size={16} color="#00B5F1" />
                        </Text>
                    </View>

                    <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.horizontalScrollContainer}
        >
            <View style={styles.cardContainer}>
                {doctorData.map((doctor, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.banner}>
                            <Text style={styles.bannerText}>Mới nhất</Text>
                        </View>
                        <Image style={styles.image} source={{ uri: doctor.image }} />
                        <Text style={styles.title3}>{doctor.name}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => alert('Scheduling appointment...')}
                        >
                            <Text style={styles.buttonText}>Đặt lịch bệnh viện</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>

                    <View style={[styles.doctor, { flexDirection: 'row' }]}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#003366' }}>Tin tức nổi bật</Text>
                        <Text style={{ fontSize: 15, marginLeft: 147, marginTop: 8, color: '#00B5F1' }}>
                            Xem tất cả <Icon2 name="angle-double-right" size={16} color="#00B5F1" />
                        </Text>
                    </View>

                    <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.horizontalScrollContainer}
        >
            {newData.map((news, index) => (
                <View key={index} style={styles.cardNew}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Nổi bật</Text>
                    </View>
                    <Image source={{ uri: news.avatar }} style={styles.cardImage} />
                    <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">
                        {news.name}
                    </Text>
                    <Text style={styles.cardDescription}>
                        <Icon name="calendar" size={13} color="#2F363D" /> {news.created_at}
                    </Text>
                    <Text style={styles.cardDescription}>
                        <Icon name="eye" size={13} color="#2F363D" /> {news.view}
                    </Text>
                    <View style={{ padding: 10 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Xem ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
                    <View style={[styles.doctor, { flexDirection: 'row' }]}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#003366' }}>Dịch vụ cung cấp</Text>
                        <Text style={{ fontSize: 15, marginLeft: 121, marginTop: 8, color: '#00B5F1' }}>
                            Xem tất cả <Icon2 name="angle-double-right" size={16} color="#00B5F1" />
                        </Text>
                    </View>

                    <View style={styles.scrollContainer}>
                                {services.map((service, index) => (
                            <View key={index} style={styles.serviceBox}>
                                <Image source={{ uri: service.avatar }} style={styles.icon} />
                                <Text style={styles.textservice}>{service.name}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.navbar}>
                    <View style={styles.navbarItem}>
                        <Icon
                            name="home"
                            size={24}
                            color="#00B5F1"
                            onPress={() => {
                                navigation.navigate('Trangchu');
                            }}
                        />
                        <Text style={styles.navbarText2}>Trang chủ</Text>
                    </View>
                    <View style={styles.navbarItem}>
                        <Icon
                            name="user-plus"
                            size={24}
                            color="#2F363D"
                            onPress={() => {
                                navigation.navigate('BacSi');
                            }}
                        />
                        <Text style={styles.navbarText}>Bác sĩ</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginLeft: 65 }}>
                        <Icon name="search" size={24} color="#2F363D"  onPress={() => {
                                navigation.navigate('DanhSachLichKham');
                            }}/>
                        <Text style={styles.navbarText}>Theo dõi</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.navbarItem}
                        onPress={() => {
                            navigation.navigate('Profile');
                        }}
                    >
                        <Icon name="user" size={24} color="#2F363D" />
                        <Text style={styles.navbarText}>Tài khoản</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.floatingButton}
                    onPress={() => {
                        navigation.navigate('DatLichKham');
                    }}
                >
                    <Icon2 name="calendar" size={30} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatIcon} onPress={toggleNavbar}>
                    <Image
                        style={styles.chatIcon}
                        source={{ uri: 'https://cdn.bookingcare.vn/fo/w640/2024/03/27/151956-chatboticon.png' }}
                    />
                </TouchableOpacity>

                {isNavbarVisible && (
                    <>
                        <TouchableOpacity
                            style={styles.overlayBackground}
                            onPress={handleOutsidePress}
                        ></TouchableOpacity>
                        <View style={styles.navbarchat}>
                            <Text style={styles.header}>Chăm sóc khách hàng</Text>

                            <TouchableOpacity style={styles.item}>
                                <Image
                                    source={{
                                        uri: 'https://hapotravel.com/wp-content/uploads/2023/04/tong-hop-25-logo-dien-thoai-dep-nhat-nam-2023_26.jpg'
                                    }}
                                    style={styles.iconImage}
                                />
                                <View style={styles.text}>
                                    <Text style={styles.title}>ĐẶT KHÁM</Text>
                                    <Text style={styles.subtitle}>19002115</Text>
                                </View>
                                <Icon name="arrow-right" size={19} color="#00B5F1" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.item}>
                                <Image
                                    source={{
                                        uri: 'https://static-00.iconduck.com/assets.00/messenger-icon-1024x1024-wsuio165.png'
                                    }}
                                    style={styles.iconImage}
                                />
                                <View style={styles.text}>
                                    <Text style={styles.title}>MESSENGER</Text>
                                </View>
                                <Icon name="arrow-right" size={19} color="#00B5F1" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.item}>
                                <Image
                                    source={{
                                        uri: 'https://giaiphapzalo.com/wp-content/uploads/2021/10/logo-transperant.png'
                                    }}
                                    style={styles.iconImage}
                                />
                                <View style={styles.text}>
                                    <Text style={styles.title}>ZALO</Text>
                                </View>
                                <Icon name="arrow-right" size={19} color="#00B5F1" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleOutsidePress}>
                                <Text style={styles.footer}>Đóng</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </ImageBackground>
        </View>
    );
}

const partnersData = [
    {
        name: 'Phòng khám Dental Care',
        logo: 'https://media.loveitopcdn.com/3807/logo-benh-vien-trung-uong-hue-compressed.jpg'
    },
    {
        name: 'Phòng khám Kim Cương',
        logo: 'https://storage.googleapis.com/a1aa/image/oHWIIK7mr962PtZeB1UgPqvx0HxPyFEeVw9NWVrVZHe7dobnA.jpg'
    },
    {
        name: 'Phòng khám Cilinic',
        logo: 'https://benhvienphoihaiduong.vn/source/logo%20benh%20phoi%20hd%20.png'
    }
];

const servicesData = [
    {
        icon: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F488715df-05ff-42ef-bf6b-27d91d132158-bacsi.png&w=128&q=75',
        label: 'Đặt khám theo bác sĩ'
    },
    {
        icon: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F9fdd77eb-9baa-4f3b-a108-d91e136a0bf9-tele.png&w=128&q=75',
        label: 'Tư vấn trực tuyến'
    },
    {
        icon: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2Fb4181f19-f965-40b8-a4c5-2996cb960104-goi_kham.png&w=128&q=75',
        label: 'Gói khám sức khỏe'
    },
    {
        icon: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F0640985d-4280-4e8c-8ec6-939f9a4cf44b-thanhtoanvp.png&w=128&q=75',
        label: 'Thanh toán trực tuyến'
    },
    {
        icon: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2Ffa0b00be-d554-404a-bf9a-4a5f216ee978-chaam_saac_taaoa_i_nhaa.png&w=128&q=75',
        label: 'Y tế tại nhà'
    },
    {
        icon: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2Fc193937f-8c0f-479e-be31-5610db6f7df1-dat-lich-xet-nghiem.png&w=128&q=75',
        label: 'Hướng dẫn đặt khám'
    },
    {
        icon: 'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2Ff141b109-2daa-4953-ad55-5a395f900d46-tiaaam_chaaang.png&w=128&q=75',
        label: 'Đặt lịch tiêm chủng'
    },
    {
        icon: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161350-iconkham-tong-quan.png&w=128&q=75',
        label: 'Hướng dẫn đặt khám'
    }
];
