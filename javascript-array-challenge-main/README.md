# Javascript: Array Challenge

Tugasmu disini adalah memodifikasi file-file berikut:

- [`scripts/filterCarByAvailability.js`](./scripts/filterCarByAvailability.js)
- [`scripts/sortCarByYearAscendingly.js`](./scripts/sortCarByYearAscendingly.js)
- [`scripts/sortCarByYearDecendingly.js`](./scripts/sortCarByYearDecendingly.js)

Dimana masing-masing file tersebut terdapat sebuah fungsi. Penjelasan terkait fungsi-fungsi tersebut dapat dilihat pada bagian selanjutnya.

## `filterCarByAvailability`

Disini kamu akan membuat sebuah fungsi yang berguna untuk menyaring daftar mobil,
yang mana dari daftar mobil tersebut ketika sudah disaring,
akan menyisakan daftar mobil yang mana dapat disewa.

### Input

Input dari fungsi ini kita panggil `cars`, dimana tipe datanya adalah array of object. Untuk type signature dari input tersebut dapat dilihat pada definisi tipe di bawah ini:

```typescript
type Car = {
  id: string;
  plate: string;
  transmission: string;
  manufacture: string;
  model: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
};

type Cars = Array<Car>;
```

Contoh input:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  }
]
```

### Output

Ketika data `cars` dimasukkan ke dalam fungsi `filterCarByAvailability`,
maka hasil dari fungsi tersebut harus berupa `Array<Car>`
juga yang mana tiap item-nya memiliki atribut `available` yang bernilai `true`.

Contoh output:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  }
]
```

## `sortCarByYearAscendingly`

Disini kamu akan membuat sebuah fungsi yang berguna untuk mensortir daftar mobil,
dimana setelah fungsi ini dijalankan maka daftar mobil yang telah diurutkan dari umur mobil paling tua akan menjadi hasil dari fungsi tersebut.

### Input

Input dari fungsi ini kita panggil `cars`, dimana tipe datanya adalah array of object.
Untuk type signature dari input tersebut dapat dilihat pada definisi tipe di bawah ini:

```typescript
type Car = {
  id: string;
  plate: string;
  transmission: string;
  manufacture: string;
  model: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
};

type Cars = Array<Car>;
```

Contoh input:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  }
]
```

### Output

Ketika data `cars` dimasukkan ke dalam fungsi `sortCarByYearAscendingly`,
maka hasil dari fungsi tersebut harus berupa `Array<Car>` juga,
yang mana tiap item harus memiliki atribut year paling tua dibanding item-item berikutnya di dalam daftar tersebut.

Contoh output:

```json
[
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  },
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  }
]
```

## `sortCarByYearDescendingly`

Disini kamu akan membuat sebuah fungsi yang berguna untuk mensortir daftar mobil,
dimana setelah fungsi ini dijalankan maka daftar mobil yang telah diurutkan dari umur mobil paling muda akan menjadi hasil dari fungsi tersebut.

### Input

Input dari fungsi ini kita panggil `cars`, dimana tipe datanya adalah array of object.
Untuk type signature dari input tersebut dapat dilihat pada definisi tipe di bawah ini:

```typescript
type Car = {
  id: string;
  plate: string;
  transmission: string;
  manufacture: string;
  model: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
};

type Cars = Array<Car>;
```

Contoh input:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  }
]
```

### Output

Ketika data `cars` dimasukkan ke dalam fungsi `sortCarByYearDescendingly`,
maka hasil dari fungsi tersebut harus berupa `Array<Car>` juga,
yang mana tiap item harus memiliki atribut `year` paling muda dibanding item-item berikutnya di dalam daftar tersebut.

Contoh output:

```json
[
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "plate": "DBH-3491",
    "transmission": "Automatic",
    "manufacture": "Ford",
    "model": "F150",
    "available": true,
    "type": "Sedan",
    "year": 2022,
    "options": [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    "specs": [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "plate": "OSL-4224",
    "transmission": "Automanual",
    "manufacture": "Lincoln",
    "model": "MKZ",
    "available": true,
    "type": "Sedan",
    "year": 2021,
    "options": [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    "specs": [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "plate": "WXB-3984",
    "transmission": "Automatic",
    "manufacture": "BMW",
    "model": "X5",
    "available": false,
    "type": "Convertible",
    "year": 2019,
    "options": [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    "specs": [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  }
]
```

# Tips

Happy coding!
