<div align="center">

# Redux Banka Uygulaması

### Klasik Redux'tan Redux Toolkit'e uzanan uygulamalı öğrenme projesi

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux-Klasik%20Redux-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
[![React Redux](https://img.shields.io/badge/React--Redux-Hooks-764ABC?logo=redux&logoColor=white)](https://react-redux.js.org/)
[![Language](https://img.shields.io/badge/Arayüz-Türkçe-E30A17)](#proje-hakkında)
[![Status](https://img.shields.io/badge/Durum-Aktif%20Öğrenme-F59E0B)](#mevcut-ilerleme)

Bu proje; Redux'un temel veri akışını, React entegrasyonunu, asenkron işlemleri ve Redux Toolkit'e geçiş sürecini bankacılık senaryosu üzerinden uygulamalı olarak öğrenmek için geliştirilmektedir.

</div>

---

## Proje hakkında

Bu repository, Redux öğrenme sürecinde edinilen bilgileri çalışan bir uygulama üzerinde pekiştirmek amacıyla oluşturulmuştur.

Projede müşteri oluşturma, para yatırma, para çekme, kredi talep etme ve kredi ödeme gibi işlemler üzerinden aşağıdaki yapıların nasıl birlikte çalıştığı incelenmektedir:

- Redux store
- Reducer fonksiyonları
- Action ve action creator yapıları
- `dispatch`
- `Provider`
- `useSelector`
- `useDispatch`
- Middleware ve thunk
- Redux Toolkit

> [!IMPORTANT]
> Bu uygulama gerçek bir bankacılık sistemi değildir. Bankacılık işlemleri yalnızca Redux'un durum yönetimi yaklaşımını anlamak için örnek senaryo olarak kullanılmaktadır.

---

## Mevcut ilerleme

Proje şu anda **klasik Redux ile React entegrasyonu** aşamasındadır.

Redux store oluşturulmuş, hesap ve müşteri durumları ayrı reducer'lara bölünmüş, action creator'lar hazırlanmış ve React bileşenleri store'a bağlanmıştır. Kullanıcı işlemleri artık bileşenlerden `dispatch` edilerek merkezi state'i güncelleyebilmektedir.

| Konu | Durum |
| --- | :---: |
| Redux'a giriş ve temel kavramlar | ✅ |
| Account reducer oluşturulması | ✅ |
| Redux store kurulumu | ✅ |
| Action creator kullanımı | ✅ |
| Customer state eklenmesi | ✅ |
| State slice dosya yapısı | ✅ |
| React uygulamasının `Provider` ile bağlanması | ✅ |
| `useSelector` ile state okunması | ✅ |
| `useDispatch` ile action gönderilmesi | ✅ |
| Legacy `connect` yaklaşımı | ⏳ |
| Redux middleware ve thunk | ⏳ |
| Thunk ile API isteği | ⏳ |
| Redux DevTools | ⏳ |
| Redux Toolkit kurulumu | ⏳ |
| `configureStore` kullanımı | ⏳ |
| `createSlice` ile account slice | ⏳ |
| Redux Toolkit ile thunk kullanımı | ⏳ |
| `createSlice` ile customer slice | ⏳ |
| Redux ve Context API karşılaştırması | ⏳ |
| Otomatik testler | ⏳ |

---

## Öğrenme hedefleri

- [x] Redux'un tek yönlü veri akışını anlamak
- [x] Store, reducer, action ve dispatch ilişkisini uygulamak
- [x] State'i sorumluluklarına göre ayrı reducer'lara bölmek
- [x] Action creator kullanarak action üretmek
- [x] React uygulamasını `Provider` ile Redux store'a bağlamak
- [x] `useSelector` ile global state okumak
- [x] `useDispatch` ile kullanıcı işlemlerini store'a göndermek
- [ ] Middleware'in Redux veri akışındaki rolünü anlamak
- [ ] Thunk ile asenkron işlemler gerçekleştirmek
- [ ] Döviz kuru API isteğini Redux üzerinden yönetmek
- [ ] Redux DevTools ile action ve state geçmişini incelemek
- [ ] Klasik Redux yapısını Redux Toolkit'e dönüştürmek
- [ ] `configureStore` ve `createSlice` kullanmak
- [ ] Reducer ve kullanıcı akışlarını otomatik testlerle doğrulamak

---

## Uygulama özellikleri

### Müşteri yönetimi

- Müşteri adı ve kimlik numarası alınır.
- Müşteri oluşturma işlemi bir action üzerinden Redux store'a gönderilir.
- Oluşturulan müşteri bilgileri merkezi state içerisinde saklanır.
- Müşteri oluşturulma zamanı state içerisinde tutulur.

### Hesap işlemleri

- Para yatırma
- Para çekme
- Kredi talep etme
- Kredi ödeme
- Hesap bakiyesini görüntüleme

### Planlanan asenkron işlem

Farklı para birimleriyle yapılan para yatırma işlemlerinde:

1. Güncel döviz kuru API üzerinden alınacak.
2. İstek durumu Redux state içerisinde yönetilecek.
3. Tutar ana para birimine dönüştürülecek.
4. Sonuç thunk üzerinden store'a gönderilecek.

---

## Redux veri akışı

Projede kullanılan temel veri akışı:

```text
Kullanıcı bir işlem gerçekleştirir
                ↓
Bileşen action creator'ı çağırır
                ↓
dispatch(action)
                ↓
Action Redux store'a gönderilir
                ↓
İlgili reducer action'ı işler
                ↓
Yeni state oluşturulur
                ↓
Store aboneleri bilgilendirir
                ↓
useSelector kullanan bileşen yeniden render edilir
```

Örnek kullanım:

```js
function handleDeposit() {
  if (!depositAmount) return;

  dispatch(deposit(Number(depositAmount), currency));
}
```

Bu işlemde bileşen state'i doğrudan değiştirmez. Yalnızca gerçekleşen işlemi ifade eden action'ı Redux store'a gönderir.

---

## State yapısı

Uygulamanın global state'i iki ana bölüme ayrılmıştır:

```js
{
  account: {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false
  },
  customer: {
    fullName: "",
    nationalId: "",
    createdAt: ""
  }
}
```

Bu ayrım sayesinde her reducer yalnızca kendi sorumluluğundaki state alanını yönetir.

| State alanı | Sorumluluk |
| --- | --- |
| `account` | Bakiye, para yatırma, para çekme ve kredi işlemleri |
| `customer` | Müşteri bilgileri ve oluşturulma zamanı |

---

## Proje mimarisi

```text
src/
├── features/
│   ├── accounts/
│   │   ├── AccountOperations.jsx
│   │   └── accountSlice.js
│   └── customers/
│       ├── CreateCustomer.jsx
│       ├── Customer.jsx
│       └── customerSlice.js
├── ui/
│   └── BalanceDisplay.jsx
├── App.jsx
├── index.js
└── store.js
```

> [!NOTE]
> Dosya adlarında `slice` ifadesi kullanılsa da mevcut aşamada yapı klasik Redux reducer ve action creator yaklaşımını içerebilir. Redux Toolkit bölümünde bu dosyalar gerçek `createSlice` yapısına dönüştürülecektir.

### Sorumluluk dağılımı

| Dosya / klasör | Sorumluluk |
| --- | --- |
| `store.js` | Root reducer ve Redux store yapılandırması |
| `accountSlice.js` | Account reducer ve account action creator'ları |
| `customerSlice.js` | Customer reducer ve customer action creator'ları |
| `CreateCustomer.jsx` | Müşteri formunun yerel state'i ve create action dispatch işlemi |
| `AccountOperations.jsx` | Hesap işlemlerinin kullanıcı etkileşimleri |
| `BalanceDisplay.jsx` | Redux store'daki bakiyenin gösterimi |

---

## Yerel state ve global state ayrımı

Projede bütün veriler Redux'a taşınmamaktadır.

Form alanlarına yazılan geçici değerler bileşen içerisinde `useState` ile tutulur. Kullanıcı işlemi onayladığında gerekli veri Redux action'ı ile global state'e gönderilir.

```text
Form input değeri        → Yerel component state
Oluşturulmuş müşteri     → Redux global state
Deposit input değeri     → Yerel component state
Güncel hesap bakiyesi    → Redux global state
```

Bu yaklaşım Redux store'un gereksiz ve geçici UI verileriyle doldurulmasını önler.

---

## Temel Redux kavramları

### Store

Uygulamanın global state'ini tutan merkezi yapıdır.

### Action

Uygulamada ne olduğunu açıklayan düz JavaScript nesnesidir.

```js
{
  type: "account/deposit",
  payload: 500
}
```

### Action creator

Action nesnesi oluşturan fonksiyondur.

```js
export function deposit(amount, currency) {
  return {
    type: "account/deposit",
    payload: { amount, currency },
  };
}
```

### Reducer

Mevcut state ve action değerini alarak yeni state'i belirleyen saf fonksiyondur.

```js
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
}
```

### Dispatch

Bir action'ı Redux store'a gönderen fonksiyondur.

```js
dispatch(withdraw(250));
```

### Selector

Store içerisinden ihtiyaç duyulan state alanını seçer.

```js
const balance = useSelector((state) => state.account.balance);
```

---

## Reducer kuralları

Reducer fonksiyonlarında aşağıdaki kurallara dikkat edilmektedir:

1. Reducer aynı state ve action için öngörülebilir sonuç üretmelidir.
2. Reducer içerisinde API isteği yapılmamalıdır.
3. Reducer içerisinde zamanlayıcı veya DOM işlemi çalıştırılmamalıdır.
4. Klasik Redux kullanılırken mevcut state doğrudan değiştirilmemelidir.
5. Bilinmeyen action durumunda mevcut state geri döndürülmelidir.

```js
function reducer(state = initialState, action) {
  switch (action.type) {
    case "example/action":
      return { ...state, value: action.payload };

    default:
      return state;
  }
}
```

---

## Kullanılan teknolojiler

| Teknoloji | Projedeki rolü |
| --- | --- |
| [React](https://react.dev/) | Kullanıcı arayüzü ve bileşen yapısı |
| React Hooks | Yerel form state'i ve React yaşam döngüsü |
| [Redux](https://redux.js.org/) | Merkezi ve öngörülebilir global state yönetimi |
| [React-Redux](https://react-redux.js.org/) | React bileşenleri ile Redux store arasındaki bağlantı |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Bir sonraki aşamada modern Redux geliştirme yaklaşımı |
| Redux Thunk | Planlanan asenkron işlem yönetimi |
| Redux DevTools | Action ve state değişimlerini inceleme |
| Testing Library | Planlanan kullanıcı davranışı testleri |

---

## Kurulum

Projeyi yerel ortamda çalıştırmak için Node.js ve npm gereklidir.

```bash
git clone <repository-url>
cd <project-directory>
npm install
npm start
```

Uygulama varsayılan olarak aşağıdaki adreste çalışır:

```text
http://localhost:3000
```

### Kullanılabilir komutlar

| Komut | Açıklama |
| --- | --- |
| `npm start` | Geliştirme sunucusunu başlatır |
| `npm test` | Testleri izleme modunda çalıştırır |
| `npm run build` | Production için optimize edilmiş build oluşturur |
| `npm run eject` | CRA yapılandırmasını dışarı çıkarır; geri alınamaz |

---

## Yol haritası

### Aşama 1 — Klasik Redux temelleri

- [x] Reducer oluşturma
- [x] Store oluşturma
- [x] Action type tanımlama
- [x] Action creator oluşturma
- [x] Birden fazla reducer kullanma
- [x] State slice dosya yapısı oluşturma

### Aşama 2 — React-Redux entegrasyonu

- [x] Uygulamayı `Provider` ile sarmalama
- [x] `useSelector` ile veri okuma
- [x] `useDispatch` ile action gönderme
- [x] Yerel state ve global state sorumluluklarını ayırma
- [ ] Legacy `connect` yaklaşımını inceleme

### Aşama 3 — Asenkron Redux

- [ ] Middleware kavramını öğrenme
- [ ] Redux Thunk kullanma
- [ ] API üzerinden döviz kuru alma
- [ ] Loading durumunu yönetme
- [ ] Hata durumunu modelleme

### Aşama 4 — Redux Toolkit

- [ ] `configureStore` ile store oluşturma
- [ ] `createSlice` ile account slice oluşturma
- [ ] `createSlice` ile customer slice oluşturma
- [ ] Reducer ve action boilerplate kodunu azaltma
- [ ] Thunk yapısını Redux Toolkit ile kullanma

### Aşama 5 — Geliştirici araçları ve test

- [ ] Redux DevTools kullanma
- [ ] Reducer testleri yazma
- [ ] Action creator testleri yazma
- [ ] Kullanıcı işlemlerini entegrasyon testleriyle doğrulama

---

## Öğrenme notları

- Redux state'i doğrudan değiştirilmez; değişiklik isteği action ile ifade edilir.
- `dispatch`, action'ı reducer'a doğrudan göndermez; Redux store'a gönderir.
- Store, action'ı ilgili reducer'lara iletir ve yeni state'i saklar.
- `useSelector`, yalnızca seçilen state değeri değiştiğinde bileşenin yeniden render edilmesini sağlar.
- `useDispatch`, bileşenin store'a action gönderebilmesini sağlar.
- Form input değerlerinin tamamını Redux'a taşımak gerekli değildir.
- Birden fazla bileşenin kullandığı kalıcı uygulama verileri global state için daha güçlü adaylardır.
- Reducer içerisinde asenkron işlem veya başka bir yan etki gerçekleştirilmemelidir.
- Klasik Redux'u öğrenmek, Redux Toolkit'in hangi tekrarları ve zorlukları çözdüğünü anlamayı kolaylaştırır.

---

## Öğrenme yaklaşımı

Bu projede konular doğrudan Redux Toolkit ile başlanarak değil, önce klasik Redux yapısı kurularak ilerletilmektedir.

Bu yaklaşım sayesinde:

- Redux'un temel mekanizması görünür hâle gelir.
- Action creator ve reducer arasındaki ilişki daha net anlaşılır.
- Boilerplate kodun neden oluştuğu görülür.
- Redux Toolkit'in sunduğu kolaylıklar daha bilinçli değerlendirilir.
- Modern Redux yapısına geçiş yalnızca sözdizimi değişikliği olarak değil, mimari iyileştirme olarak anlaşılır.

---

## Proje kapsamı dışında kalanlar

Bu uygulama aşağıdaki amaçlarla geliştirilmemektedir:

- Gerçek müşteri verisi saklamak
- Gerçek banka hesaplarına bağlanmak
- Para transferi gerçekleştirmek
- Kimlik doğrulama veya yetkilendirme sunmak
- Finansal işlem güvenliği sağlamak
- Production ortamında kullanılacak bankacılık altyapısı oluşturmak

---

## Katkı ve geliştirme yaklaşımı

Bu repository kişisel bir öğrenme projesidir. Kod yapısı, Redux eğitimindeki ilerlemeye paralel olarak düzenli biçimde güncellenecektir.

Commit geçmişi aşağıdaki gelişimi görünür kılmayı amaçlar:

```text
Yerel React state
        ↓
Klasik Redux
        ↓
React-Redux entegrasyonu
        ↓
Middleware ve thunk
        ↓
Redux Toolkit
        ↓
Test ve iyileştirme
```

---

<div align="center">

### Temel hedef

**Yalnızca çalışan bir uygulama geliştirmek değil, Redux'un neden ve nasıl çalıştığını anlayabilmek.**

</div>
