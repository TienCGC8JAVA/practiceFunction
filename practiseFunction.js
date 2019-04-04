function task1()
{
    alert("Xin chào");
}

function task2(x)
{
    var x = parseInt(prompt("Nhập 1 số: "));
    x++;
    document.getElementById("demo").innerHTML = "Số mới : " + x;
    return x;
}

function  task3(a,b)
{
    var a = Number(prompt("Nhập vào tham số thứ 1: "));
    var b = Number(prompt("Nhập vào tham số thứ 2: "));
    var sum;
        if ( a > b)
        {
            document.getElementById("demo").innerHTML = a + " lớn hơn " + b;
        }
        else
        {
            sum = a + b;
            document.getElementById("demo").innerHTML = "Tổng của 2 số là: " + sum;
        }
    return sum;
}

function Task4()
{
    document.getElementById("demo").innerHTML = "Đã kiểm tra";
}
function  task5() {
    let star = prompt("Nhập ngôi sao trong 12 chòm sao");
    let arr1 =[ "Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let arr2 =["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
    let j = 0;
    for (let i = 0; i < arr1.length; i++)
    {
        if (star === arr1[i])
        {
            document.getElementById("demo").innerHTML = arr1[i] + " chòm sao tương ứng là " + arr2[i];
            j++;
        }
    }
    if (j != 1)
    {
        document.getElementById("demo").innerHTML = "Không tìm thấy";
    }
}