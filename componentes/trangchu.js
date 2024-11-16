import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import logo from '../assets/svgviewer-png-output.png';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import styles from '../css/stylesTrangchu';

// Hình ảnh nền
const backgroundImage = {
    uri: 'https://anhdepfree.com/wp-content/uploads/2018/11/Blue-Wallpaper-hinh-nen-mau-xanh-27.jpg'
};

export default function HospitalApp({ navigation }) {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

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
            <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
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
                        style={styles.horizontalScrollContainer2}
                    >
                        <View style={styles.cardContainer}>
                            {doctorData.map((doctor, index) => (
                                <View key={index} style={styles.card}>
                                    <View style={styles.banner}>
                                        <Text style={styles.bannerText}>Mới nhất</Text>
                                    </View>
                                    <Image style={styles.image} source={{ uri: doctor.logo }} />
                                    <Text style={styles.title3}>{doctor.name}</Text>

                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {
                                            alert('Scheduling appointment...');
                                        }}
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
                                <Image source={{ uri: news.logo }} style={styles.cardImage} />
                                <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">
                                    {news.name}
                                </Text>
                                <Text style={styles.cardDescription}>
                                    <Icon name="calendar" size={13} color="#2F363D" /> {news.date}
                                </Text>
                                <Text style={styles.cardDescription}>
                                    <Icon name="eye" size={13} color="#2F363D" /> {news.View}
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
                                <Image source={{ uri: service.icon }} style={styles.icon} />
                                <Text style={styles.textservice}>{service.title}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.navbar}>
                    <View style={styles.navbarItem}>
                        <Icon
                            name="home"
                            size={24}
                            color="#2F363D"
                            onPress={() => {
                                navigation.navigate('Trangchu');
                            }}
                        />
                        <Text style={styles.navbarText}>Trang chủ</Text>
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
                        <Icon name="search" size={24} color="#2F363D" />
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
const doctorData = [
    {
        name: 'Thạc sĩ, Bác sĩ Nguyễn Quang Tiến',
        logo: 'https://cdn1.youmed.vn/tin-tuc/wp-content/uploads/2022/08/BS-Nguyen-Tan-Phuoc-Thinh-scaled.jpg'
    },
    {
        name: 'Thạc sĩ, Bác sĩ Phan Bảo Mỹ',
        logo: 'https://nguoinoitieng.tv/images/nnt/102/0/bga5.jpg'
    },
    {
        name: 'Thạc sĩ, Bác sĩ Nguyễn Quang Hùng',
        logo: 'http://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/052023/image001_20230511082556.png'
    },
    {
        name: 'Thạc sĩ, Bác sĩ Phạm Bảo Trung',
        logo: 'https://taimuihongsg.com/wp-content/uploads/2019/01/Trinh-Tan-Lap_taimuihongsg.jpg'
    }
];

const services = [
    {
        title: 'Trồng răng sứ Veneer',
        icon: 'https://nhakhoakim.com/wp-content/uploads/2019/05/icon-nho-rang-khon-1.png'
    },
    {
        title: 'Bọc răng sứ',
        icon: 'https://nhakhoakim.com/wp-content/uploads/2019/05/icon-boc-rang-su-1.png'
    },
    {
        title: 'Điều trị tủy',
        icon: 'https://nhakhoakim.com/wp-content/uploads/2019/05/dieu-tri-tuy.png'
    },
    {
        title: 'Cấy ghép Implant',
        icon: 'https://nhakhoakim.com/wp-content/uploads/2019/05/trong-rang-implant.png'
    }
];

const newData = [
    {
        name: '7 địa chỉ căng chỉ da mặt uy tín Hà Nội: Được cấp phép',
        logo: 'https://i1-suckhoe.vnecdn.net/2024/03/08/image003-1709871326-5896-1709871386.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=T8BLEIChVhXZHubhMcfihA',
        date: '23/04/2021',
        View: '23,445'
    },
    {
        name: 'DR.REJU - địa chỉ tin cậy với 5 năm chuyên sâu điều trị sẹo',
        logo: 'https://i1-suckhoe.vnecdn.net/2023/12/13/image-extractword-2-out-9017-1-1905-3088-1702459519.png?w=500&h=300&q=100&dpr=2&fit=crop&s=qr89eeMw9t-m2yvygOs4EQ',
        date: '23/04/2021',
        View: '23,445'
    },
    {
        name: 'Răng sứ thẩm mỹ tại S-Dental - Lựa chọn tiết kiệm cho bạn',
        logo: 'https://i1-suckhoe.vnecdn.net/2018/04/12/rngkhn-1523513607.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=buabr-jZ1EjWP0SJqf8GHg',
        date: '23/04/2021',
        View: '23,445'
    }
];

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
