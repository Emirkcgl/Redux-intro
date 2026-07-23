<div align="center">

# Redux Öğrenme Projesi

### Bankacılık senaryosu üzerinden Redux ve React-Redux pratiği

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Odak-Redux%20%C3%96%C4%9Frenimi-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
[![Dil](https://img.shields.io/badge/Aray%C3%BCz-T%C3%BCrk%C3%A7e-E30A17)](#proje-hakkında)
[![Durum](https://img.shields.io/badge/Durum-%C3%96%C4%9Frenme%20A%C5%9Famas%C4%B1nda-F59E0B)](#mevcut-durum)

</div>

---

## Proje hakkında

Bu repoyu **Redux öğrenme sürecimi uygulamalı olarak ilerletmek ve öğrendiğim kavramları kalıcı hâle getirmek** amacıyla oluşturdum. Proje, gerçek bir bankacılık ürünü geliştirme hedefi taşımaz; bankacılık işlemleri yalnızca Redux'un merkezi durum yönetimini anlamak için kullanılan örnek bir senaryodur.

Müşteri oluşturma, para yatırma, para çekme ve kredi işlemleri gibi birbiriyle ilişkili veriler sayesinde aşağıdaki sorulara pratik yaparak cevap arıyorum:

- Uygulama durumu tek bir merkezden nasıl yönetilir?
- Bir kullanıcı işlemi Redux store'u nasıl günceller?
- Bileşenler ihtiyaç duydukları veriyi store'dan nasıl okur?
- Action, reducer ve dispatch arasındaki veri akışı nasıl çalışır?
- Asenkron işlemler Redux mimarisine nasıl eklenir?
- Klasik Redux yaklaşımı ile Redux Toolkit arasındaki farklar nelerdir?

> [!NOTE]
> Bu proje bir öğrenme alanıdır. Kod yapısı, Redux konularında ilerledikçe bilinçli olarak değişecek ve geliştirilecektir.

## Öğrenme hedeflerim

- [ ] Redux'un temel çalışma mantığını anlamak
- [ ] Store, action, reducer ve dispatch kavramlarını uygulamak
- [ ] Birden fazla reducer ile durum alanlarını ayırmak
- [ ] React uygulamasını `Provider` ile Redux store'a bağlamak
- [ ] `useSelector` ile store'dan veri okumak
- [ ] `useDispatch` ile bileşenlerden action göndermek
- [ ] Redux Toolkit ile `configureStore` ve `createSlice` kullanmak
- [ ] Thunk yapısıyla asenkron işlemleri yönetmek
- [ ] Redux DevTools üzerinden state değişimlerini takip etmek
- [ ] Redux mantığını otomatik testlerle doğrulamak

## Neden bankacılık senaryosu?

Bankacılık arayüzü, Redux öğrenmek için birbiriyle bağlantılı fakat farklı sorumluluklara sahip durum alanları sunar:

| Uygulama bölümü | Yönetilecek durum | Pratik yapılacak Redux konusu |
| --- | --- | --- |
| Müşteri oluşturma | Ad, kimlik numarası, oluşturulma zamanı | Customer state ve action yapısı |
| Bakiye | Güncel hesap bakiyesi | Merkezi state okuma ve güncelleme |
| Para yatırma | Tutar ve para birimi | Payload ile action gönderme |
| Para çekme | Çekilecek tutar | Reducer kuralları ve state güncelleme |
| Kredi talebi | Kredi tutarı ve amacı | Birbiriyle ilişkili state alanları |
| Kredi ödemesi | Aktif kredi bakiyesi | Koşullu state değişimi |
| Döviz işlemleri | Kur ve dönüştürülmüş tutar | Asenkron action ve thunk kullanımı |

Bu yapı, yalnızca sayaç veya yapılacaklar listesi gibi küçük örneklerden farklı olarak Redux veri akışını daha gerçekçi birden fazla senaryo üzerinde deneyimlememi sağlıyor.

## Redux veri akışı

Projede ulaşmak istediğim temel veri akışı şöyledir:

```text
Kullanıcı etkileşimi
        ↓
Action oluşturulması
        ↓
dispatch(action)
        ↓
Reducer'ın mevcut state ve action'ı işlemesi
        ↓
Redux Store'un güncellenmesi
        ↓
useSelector kullanan bileşenlerin yeniden çizilmesi
```

Redux'un temel ilkelerini bu proje üzerinde gözlemlemeyi hedefliyorum:

1. Uygulama durumu merkezi bir store içerisinde tutulur.
2. State doğrudan değiştirilmez; değişiklik isteği bir action ile ifade edilir.
3. Reducer, mevcut state ve action üzerinden yeni durumu belirler.
4. Aynı action aynı state üzerinde çalıştığında öngörülebilir bir sonuç üretir.

## Mevcut durum

Proje şu anda **React arayüzü ve yerel form durumu** aşamasındadır. Form alanları `useState` ile kontrol edilmektedir. Redux henüz bağımlılıklara eklenmemiş, işlem butonları reducer veya store'a bağlanmamıştır.

| Aşama | Durum |
| --- | :---: |
| React bileşenlerinin hazırlanması | ✅ Tamamlandı |
| Türkçe kullanıcı arayüzü | ✅ Tamamlandı |
| Kontrollü form alanları | ✅ Tamamlandı |
| Redux store kurulumu | ⏳ Sırada |
| Customer reducer | ⏳ Sırada |
| Account reducer | ⏳ Sırada |
| React-Redux bağlantısı | ⏳ Sırada |
| Redux Toolkit dönüşümü | ⏳ Planlandı |
| Asenkron döviz işlemleri | ⏳ Planlandı |
| Redux testleri | ⏳ Planlandı |

## Öğrenme planı

### 1. Arayüz ve yerel durum

Öncelikle uygulamanın bileşenlerini ve form alanlarını hazırlamak. Hangi verilerin yerel, hangilerinin global olması gerektiğini gözlemlemek.

### 2. Temel Redux kurulumu

Store, action type, action creator ve reducer yapılarını doğrudan Redux API'siyle kurmak. Böylece Redux Toolkit'in çözdüğü problemleri kullanmadan önce temel mekanizmayı anlamak.

### 3. React-Redux entegrasyonu

Uygulamayı `Provider` ile store'a bağlamak; bileşenlerde `useSelector` ve `useDispatch` kullanarak yerel durum ile global durumun sorumluluklarını ayırmak.

### 4. Asenkron işlemler

Döviz kuru gibi dış kaynaklardan gelen verileri thunk middleware üzerinden yönetmek; yükleniyor ve hata durumlarını state içerisinde modellemek.

### 5. Redux Toolkit'e geçiş

Mevcut reducer ve action yapılarını `configureStore` ve `createSlice` kullanarak sadeleştirmek. Klasik Redux ile Redux Toolkit arasındaki kod ve geliştirici deneyimi farklarını karşılaştırmak.

### 6. Test ve iyileştirme

Reducer'ları saf fonksiyon olarak test etmek, kullanıcı işlemlerinin store üzerindeki etkisini doğrulamak ve Redux DevTools ile veri akışını incelemek.

## Bileşen yapısı

```text
App
├── CreateCustomer      Müşteri bilgilerini alan form
├── Customer            Aktif müşteriyi gösteren alan
├── AccountOperations   Para ve kredi işlemleri
└── BalanceDisplay      Hesap bakiyesi görünümü
```

Redux entegrasyonundan sonra hedeflenen sorumluluk dağılımı:

```text
src/
├── features/
│   ├── accounts/       Hesap state'i, reducer ve action'lar
│   └── customers/      Müşteri state'i, reducer ve action'lar
├── store.js            Merkezi Redux store yapılandırması
├── App.js              Ana uygulama bileşeni
└── index.js            Provider ve uygulama başlangıcı
```

> Bu dizin yapısı hedeflenen mimariyi gösterir. Redux dosyaları öğrenme adımları tamamlandıkça projeye eklenecektir.

## Kullanılan teknolojiler

| Teknoloji | Projedeki rolü |
| --- | --- |
| [React](https://react.dev/) | Bileşen tabanlı kullanıcı arayüzü |
| React Hooks | Form alanlarının mevcut yerel durum yönetimi |
| [Redux](https://redux.js.org/) | Öğrenilmesi hedeflenen merkezi durum yönetimi |
| [React-Redux](https://react-redux.js.org/) | React bileşenleri ile Redux store arasındaki bağlantı |
| [Redux Toolkit](https://redux-toolkit.js.org/) | İlerleyen aşamalarda modern Redux geliştirme yaklaşımı |
| Testing Library | Kullanıcı davranışlarına odaklanan test altyapısı |

Redux, React-Redux ve Redux Toolkit tabloda öğrenme hedefi olarak yer almaktadır; mevcut proje bağımlılıklarına henüz eklenmemiştir.

## Kurulum ve çalıştırma

Projeyi yerel ortamda çalıştırmak için Node.js ve npm gereklidir.

```bash
# Bağımlılıkları kur
npm ci

# Geliştirme sunucusunu başlat
npm start
```

Uygulama varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde açılır.

### Kullanılabilir komutlar

| Komut | Açıklama |
| --- | --- |
| `npm start` | Geliştirme sunucusunu başlatır. |
| `npm test` | Testleri etkileşimli izleme modunda çalıştırır. |
| `npm run build` | Optimize edilmiş üretim derlemesi oluşturur. |
| `npm run eject` | CRA yapılandırmasını dışarı çıkarır; geri alınamaz. |

## Öğrenme notları

Bu bölüm, proje geliştikçe karşılaştığım önemli noktaları kaydetmek için kullanılacaktır:

- Yerel component state, yalnızca ilgili bileşenin ihtiyaç duyduğu geçici form verileri için uygundur.
- Birden fazla bileşenin okuduğu veya değiştirdiği veriler global state için daha güçlü adaylardır.
- Redux, tüm state'i global yapmak için değil; paylaşılan ve öngörülebilir biçimde yönetilmesi gereken state için kullanılmalıdır.
- Reducer içerisinde yan etki gerçekleştirilmemeli; asenkron işlemler middleware katmanında yönetilmelidir.

## Projenin kapsamı

Bu çalışma:

- Redux öğrenmek ve tekrar yapmak,
- kavramları çalışan kod üzerinde görmek,
- ilerlemeyi commit geçmişiyle belgelemek,
- klasik Redux ile Redux Toolkit'i karşılaştırmak

için geliştirilmektedir.

Bu çalışma gerçek müşteri verisi saklamak, gerçek para transferi yapmak veya üretim ortamında kullanılacak bir finans sistemi oluşturmak için tasarlanmamıştır.

---

<div align="center">

**Amaç yalnızca çalışan bir uygulama oluşturmak değil, Redux'un neden ve nasıl çalıştığını anlayabilmektir.**

</div>
