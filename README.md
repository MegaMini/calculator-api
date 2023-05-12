Türkçe:

## Node.js Hesap Makinesi API

Bu GitHub repo, Node.js ile geliştirilen bir hesap makinesi API'sini içermektedir. Bu API, temel matematiksel işlemleri gerçekleştirmek için kullanılırken aynı zamanda ek özellikler de sunmaktadır.

### Özellikler

- Toplama, Çıkarma, Bölme, Çarpma gibi basit matematik işlemleri
- API Key oluşturma
- En fazla 2 sayı (toplama, çıkarma, bölme ve çarpma) işlemlerini kullanabilmek

### Başlarken

1. Projeyi bilgisayarınıza kopyalayın; `git clone https://github.com/MegaMini/calculator-api`
2. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. API Key oluşturmak için; `/admin/apikey/create/:ownerkey` ownerkey'i `.env` dosyasından düzenleyiniz ve giriniz.

### API Endpoints

- `/add/:num1/:num2`: num1 ve num2 olarak girilen iki sayıyı birbiriyle toplar.
- `/subtract/:num1/:num2`: num1 ve num2 olarak girilen iki sayıyı birbirinden çıkarır.
- `/multiply/:num1/:num2`: num1 ve num2 olarak girilen iki sayıyı birnbirine çarpar.
- `/divide/:num1/:num2`: num1 ve num2 olarak girilen iki sayıyı birbirine böler.
- `/admin/apikey/create/:ownerkey`: 16 karakter uzunluğunda bir API key oluşturur ve `apiKeys.json` dosyasına kayıt eder. `ownerkey` değişkeni `.env` dosyasından değiştirilebilir. `default: MegaMini`

### Eklenecekler

+ API Key kullanarak erişimi kontrol etme
+ API Key'lerin silinmesi, düzenlenmesi ve kullanılma süresinin belirlenmesi
+ API Key süresinin ayarlanabilir olması (30 gün, 15 gün vb.)
+ MYSQL veya MongoDB entegrasyonu
+ Karmaşık matematik işlemlerinin eklenmesi

Detaylı kullanım talimatları ve API dokümantasyonu için lütfen [Wiki](https://github.com/MegaMini/calculator-api/wiki/) sayfasını ziyaret edin.

---

English:

## Node.js Calculator API

This GitHub repo contains a calculator API developed with Node.js. This API is used for performing basic mathematical operations and also provides additional features.

### Features

- Simple math operations such as Addition, Subtraction, Division, Multiplication
- Generate API Key
- Use at most 2 number operations (addition, subtraction, division and multiplication)

### Getting Started

1. Copy the project to your computer; `git clone https://github.com/MegaMini/calculator-api`
2. Run `npm install` to install the required dependencies.
3. To create API Key; `/admin/apikey/create/:ownerkey` edit ownerkey from `.env` file and enter it.

### API Endpoints

- `/add/:num1/:num2`: Adds the two numbers num1 and num2 together.
- `/subtract/:num1/:num2`: subtracts two numbers entered as num1 and num2.
- `/multiply/:num1/:num2`: multiplies two numbers entered as num1 and num2 by each other.
- `/divide/:num1/:num2`: divides two numbers entered as num1 and num2.
- `/admin/apikey/create/:ownerkey`: Creates a 16 character long API key and saves it in `apiKeys.json`. The `ownerkey` variable can be modified from the `.env` file. `default: `MegaMini`

#### Additions

+ Control access using API Key
+ Deleting, editing and determining the expiration time of API Keys
+ Adjustable API Key duration (30 days, 15 days, etc.)
+ MYSQL or MongoDB integration
+ Addition of complex math operations

For detailed usage instructions and API documentation, please visit [Wiki](https://github.com/MegaMini/calculator-api/wiki/).
