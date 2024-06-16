// BÀI 1: QUẢN LÝ TUYỂN SINH
//     Cho người dùng nhập vào điểm trúng tuyển, điểm 3 môn, cho phép chọn 
//     khu vực và đối tượng thí sinh để xác định điểm cộng thêm, xuất ra
//     kết quả điểm trung bình 3 môn và cho biết thí sinh đó có trúng tuyển
//     hay không

getID('tinhDiem').onclick = function() {

    // input: diemChuan, khuVuc, doiTuong,
    // điểm từng môn
    var diemChuan = Number(getID('diemChuan').value);
    var khuVuc = Number(getID('khuVuc').value);
    var doiTuong = Number(getID('doiTuong').value);
    var diemMon1 = Number(getID('diemMon1').value);
    var diemMon2 = Number(getID('diemMon2').value);
    var diemMon3 = Number(getID('diemMon3').value);

    // output: điểm tổng thí sinh
    // = điểm cả 3 môn + điểm ưu tiên
    var diemTong = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;

    // progress: Bắt lỗi nếu các ô điểm < 0
    // Nếu điểm chuẩn > điểm tổng thì đánh rớt
    // Còn lại cho đậu
    if (getError('diemChuan') || getError('khuVuc')
        || getError('doiTuong') || getError('diemMon1')
        || getError('diemMon2') || getError('diemMon3')) {
        getID('ketQua').className = 'text-danger';
        getID('ketQua').innerHTML = "Lỗi! Thông số không hợp lệ";
    }
    else if (diemChuan > diemTong) {
        getID('ketQua').innerHTML = "Điểm thí sinh: " + diemTong + ". Kết quả: Rớt!"
        getID('ketQua').className = 'text-warning';
    }
    else {
        getID('ketQua').innerHTML = "Điểm thí sinh: " + diemTong + ". Kết quả: Đậu!"
        getID('ketQua').className = 'text-success';
    }
}

// BÀI 2: TÍNH TIỀN DIỆN 
//       Nhập vào tên và tổng số điện tiêu thu (kW) 
//       Xuất ra tên khách và tổng tiền phải trả

getID('tinhTienDien').onclick = function() {

    // input: tenKH, tong_kW
    var tenKH = getID('tenKH').value;
    var tong_kW = Number(getID('tong_kW').value);

    // output: tenKH vừa nhập, tiền điện
    var tienDien = 0;

    // progress:
    // Bước 1: set giá trị tiền điện dựa vào lượng điện tiêu thụ
    if (tong_kW <= 50) {
        tienDien = tong_kW * 500;
    }
    else if (tong_kW <= 100) {
        tienDien = 50 * 500 + (tong_kW - 50) * 650;
    }
    else if (tong_kW <= 150) {
        tienDien = 50 * 500 + 50 * 650 + (tong_kW - 100) * 850;
    }
    else if (tong_kW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (tong_kW - 150) * 1100;
    }
    else {
        tienDien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (tong_kW - 200) * 1300;
    }

    // Bước 2: Tính tiền điện
    // nếu bỏ trống tenKH hoặc tổng ký điện bỏ trống hoặc âm
    // thì bắt lỗi
    // còn lại xuất ra tên khách hàng và số tiền điện
    if (tenKH == "" || getError('tong_kW')) {
        getID('tienDien').className = 'text-danger';
        getID('tienDien').innerHTML = "Lỗi! Thông tin không hợp lệ";    
    }
    else {
        getID('tienDien').innerHTML = "Khách hàng: " + tenKH + ". Số tiền điện: " + tienDien.toLocaleString() + " VNĐ";
        getID('tienDien').className = 'text-success';
    }
}

// BẢI 3: TÍNH THUẾ THU NHẬP CÁ NHÂN 
//     Nhập vào họ tên, tổng thu nhập năm, số người phụ thuộc
//     Tính thuế thu nhập cá nhân phải trả

getID('tinhTienThue').onclick = function() {

    // input: hoTen, tongThuNhapNam
    // soNguoiPhuThuoc
    var hoTen = getID('hoTen').value;
    var tongThuNhapNam = Number(getID('tongThuNhapNam').value);
    var soNguoiPhuThuoc = Number(parseInt(getID('soNguoiPhuThuoc').value));

    // output: tên cá nhân chịu thuế + tiền thuế
    var tienThue = 0;

    // cách tính thu nhập thuế phải chịu
    var thuNhapChiuThue = tongThuNhapNam - 4000000 - (soNguoiPhuThuoc * 1600000);

    // progress: 
    // Bước 1: set tiền thuế dựa vào thu nhập chịu thuế cho trước
    if(thuNhapChiuThue <= 60000000) {
        tienThue = thuNhapChiuThue * .05;
    }
    else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        tienThue = thuNhapChiuThue * .1;
    }
    else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        tienThue = thuNhapChiuThue * .15;
    }
    else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        tienThue = thuNhapChiuThue * .2;
    }
    else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        tienThue = thuNhapChiuThue * .25;
    }
    else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        tienThue = thuNhapChiuThue * .3;
    }
    else if (thuNhapChiuThue > 960000000) {
        tienThue = thuNhapChiuThue * .35;
    }

    // Bước 2: Tính tiền thuế
    // nếu họ tên bỏ trống hoặc tổng thu nhập để trống
    // thì bắt lỗi
    // Còn lại tính thuế và xuất ra tên cá nhân và tiền thuế
    if (hoTen == "" || getError('tongThuNhapNam') || getError('soNguoiPhuThuoc')) {
        getID('tienThue').className = 'text-danger';
        getID('tienThue').innerHTML = "Lỗi! Thông tin không hợp lệ";    
    }
    else {
        getID('tienThue').innerHTML = "Khách hàng: " + hoTen + ". Thuế thu nhập: " + tienThue.toLocaleString() + " VNĐ";
        getID('tienThue').className = 'text-success';
    }
}

// BÀI 4: TÍNH TIỀN CÁP
//     Tính hóa đơn khách hàng của một công ty cáp. Phân chia ra nhà dân
//     và doanh nghiệp. Với mức giá tương ứng ở bảng bên dưới:

// Nếu khách hàng là doanh nghiệp, enabled ô số kết nối
// còn lại disabled
getID('loaiKH').onchange = function() {
    var loaiKH = Number(getID('loaiKH').value);
    if(loaiKH == '75') {
        getID('soKetNoi').disabled = false;
    }
    else {
        getID('soKetNoi').disabled = true;
    }
}

// function tính tiền cáp
getID('tinhTienCap').onclick = function() {

    // input: maKH, loaiKH, soKN, soKCC
    var maKH = getID('maKH').value;
    var loaiKH = getID('loaiKH').value;
    var soKN = Number(parseInt(getID('soKetNoi').value));
    var soKCC = Number(parseInt(getID('soKenhCaoCap').value));

    // output: tên khách hàng + tiền cáp
    var tienCap = 0;

    // progress: 
    // Bắt lỗi trong 1 số trường hợp
    // mã KH bỏ trống, không chọn loại KH
    // số kết nối hoặc số kênh cao cấp bỏ trống
    if(maKH == '' || getError('loaiKH') || soKN < 0 
        || soKCC < 0) {
        getID('tienCap').innerHTML = "Lỗi! Thông tin không hợp lệ";
        getID('tienCap').className = 'text-danger';
    }
    // 2 loại hình nhà dân và doanh nghiệp có cách tính khác nhau
    // Nhà dân chịu phí dịch vụ cố định
    else if (loaiKH == 20.5) {
        tienCap = 4.5 + 20.5 + (7.5 * soKCC);
        getID('tienCap').innerHTML = "Mã số: " + maKH + 
        ". Số tiền cáp: " + tienCap.toLocaleString() + "$";
        getID('tienCap').className = 'text-success';
    }
    // Doanh nghiệp chịu phí dịch vụ dựa vào số lượng kết nối
    else {
        if (soKN < 1) {
            getID('tienCap').innerHTML = "Lỗi! Thông tin không hợp lệ";
            getID('tienCap').className = 'text-danger';
        }
        else if (soKN <= 10) {
            tienCap = 4.5 + 75 + (50 * soKCC);
            getID('tienCap').innerHTML = "Mã số: " + maKH + 
            ". Số tiền cáp: " + tienCap.toLocaleString() + "$";
            getID('tienCap').className = 'text-success';
        }
        else {
            tienCap = 4.5 + 75 + ((soKN - 10) * 5) + (50 * soKCC);
            getID('tienCap').innerHTML = "Mã số: " + maKH + 
            ". Số tiền cáp: " + tienCap.toLocaleString() + "$";
            getID('tienCap').className = 'text-success';
        }
    }
}

// funtion rút gọn lệnh
function getID(thamSo) {
    var outPut = document.getElementById(thamSo);
    return outPut;
}

// function bắt lỗi số
function getError(eNum) {
    var outPut = Number(getID(eNum).value);
    if (outPut < 0 || outPut.toString() == '' || outPut.toString() == 'NaN') {
        return true;
    }
    else {
        return false;
    }
}