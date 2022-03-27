class Account {
    username;
    password;

    constructor(u, p) {
        this.username = u;
        this.password = p;
    }
}

let arr1 = new Account("Admin", "123456");
let arr2 = new Account("Chuong", "123");
arr = [arr1, arr2];
let tk = document.getElementById("taiKhoan");
let mk = document.getElementById("pass");

function dangKy() {
    let taiKhoan = tk.value;
    let matKhau = mk.value;
    let acc = new Account(taiKhoan, matKhau);
    arr.push(acc);
    if (taiKhoan === null) {
        alert("Vui lòng nhập thông tin")
    } else {
        alert("Đăng ký Thành công");
    }


}

function dangNhap() {
    let taiKhoan = tk.value;
    let matKhau = mk.value;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].username === taiKhoan && arr[i].password === matKhau) {
            alert("Đăng Nhap thành công")
            window.location = "qlsp.html";
        }
    }
}