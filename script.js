function register() {
    const name = document.getElementById("registerName").value;
    const dob = document.getElementById("registerDob").value;
    const squashLevel = document.getElementById("registerSquashLevel").value;
    const phone = document.getElementById("registerPhone").value;
    const email = document.getElementById("registerEmail").value;
    const hand = document.getElementById("registerHand").value;
    const password = document.getElementById("registerPass").value;

    if (!name || !dob || !squashLevel || !phone || !email || !hand || !password) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const user = {
        name,
        dob,
        squashLevel,
        phone,
        email,
        hand,
        password
    };

    if (localStorage.getItem(email)) {
        alert("Bu e-posta adresi zaten kayıtlı!");
    } else {
        localStorage.setItem(email, JSON.stringify(user));
        alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
    }
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPass").value;

    if (!email || !password) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert("Giriş başarılı! Hoş geldin, " + user.name);
        window.location.href = "dashboard.html"; // Kullanıcı giriş yaptıktan sonra yönlendirilecek sayfa
    } else {
        alert("Hatalı e-posta veya şifre!");
    }
}