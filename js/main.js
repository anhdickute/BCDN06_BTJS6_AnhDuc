/** TÌM SỐ NGYÊN DƯƠNG
 * Khối 1: số nguyên dương x,n
 * 
 * Khối 2 :
 *      +tạo hàm và gắn sự kiện cho button
 *      nhập x,n từ form
 *      count = 0;
 *      Dùng vòng lặp  // n chạy từ 1 tới 10000
 *         for(var n=0 ; n < 10000 ; n++){
        count += n; // count = count + n
        if(count > 10000){  // count > 10000 dừng vòng lặp 
            break;
        }
    }
 *     Xuất kết quả ra màn hình : n
 * Khối 3 : N thoả : 1 + 2 + … + n > 10000
 */
function timSoNguyenDuong(){
    var count = 0;
    for(var n=0 ; n < 10000 ; n++){
        count += n;
        if(count > 10000){
            break;
        }
    }
    document.getElementById("result").innerHTML = "Số nguyên dương nhỏ nhất: " + n;
}
document.getElementById("btnTimSo").onclick = timSoNguyenDuong;



/** TÍNH TỔNG
 * Khối 1: số nguyên dương x,n
 * 
 * Khối 2 :
 *      +tạo hàm và gắn sự kiện cho button
 *      nhập x,n từ form
 *      tong = 0;
 *      Dùng vòng lặp // i chạy từ 1 tới n
 *         for(var i = 1; i <= n; i++){
        tong += Math.pow(x, i); // tổng = tổng + x^i
         }
 *     Xuất kết quả ra màn hình : tong
 * Khối 3 : TỔNG S(n) = x + x^2+ x^3 + … + x^n
 */
function tinhTong(){
    var x = Number(document.getElementById("edge1").value);
    var n = Number(document.getElementById("edge2").value);
    var tong = 0;
    for(var i = 1; i <= n; i++){
        tong += Math.pow(x, i);
    }

    document.getElementById("kqua").innerHTML ="Tổng: " +tong;

}

document.getElementById("btnTinhTong").onclick = tinhTong;


/** TÍNH GIAI THỪA
 * Khối 1: số nguyên dương n
 * 
 * Khối 2 :
 *      +tạo hàm và gắn sự kiện cho button
 *      nhập n từ form
 *      giaithua = 1;
 *      Dùng vòng lặp  // i chạy từ 1 tới n
 *         for(var i = 1; i <= n; i++){
              giaithua *= i;    // giaithua = giaithua * i;
             }
 *     Xuất kết quả ra màn hình : giaithua
 * Khối 3 : giai thừa của n
 */
function tinhGiaiThua(){
    var n = Number(document.getElementById("num1").value);
    var giaithua = 1;
    for(var i = 1; i <= n; i++){
        giaithua *= i;
    }
    document.getElementById("txtTinh").innerHTML ="Giai thừa: " +giaithua ;

}

document.getElementById("btnTinh").onclick = tinhGiaiThua;



/** IN THẺ DIV
 * Khối 1: Div rỗng
 * 
 * Khối 2 :
 *      +tạo hàm và gắn sự kiện cho button
 *      conten = "";
 *      vòng lặp chạy từ 1 -> 10
 *              kiểm tra phân loại chẵn lẻ
 *                  Nếu chẳn : content += div chẵn : bg đỏ
 *                  Ngược lại : content += div lẻ   : bg xanh
 *      
 *      - Xuất kết quả ra màn hình : content
 * Khối 3 : In ra các div chẵn, lẻ từ 1 -> 10
 */
function inTheDiv(){

    var content = "";

    for(var i = 1; i <= 10; i++){
        if(i%2 == 0){
            content += '<div style="background:red; padding: 5px;  color:#FFF">'+"Div chẵn "+i+'</div>';
        }else{
            content += '<div style="background:blue; padding: 5px; color:#FFF">'+"Div lẻ "+i+'</div>';
        }
    }
    document.getElementById("theDiv").innerHTML =content;
}

document.getElementById("btnInDiv").onclick = inTheDiv;