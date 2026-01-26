---
title: "HID: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`requestDevice()`** Methode der [`HID`](/de/docs/Web/API/HID) Schnittstelle fordert den Zugriff auf ein HID-Gerät an.

Der Benutzeragent zeigt ein Berechtigungsdialogfenster mit einer Liste der angeschlossenen Geräte an und fordert den Benutzer auf, ein Gerät auszuwählen und die Erlaubnis zu erteilen.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`
  - : Ein Objekt, das ein Array von Filterobjekten für mögliche Geräte zum Verbinden enthält. Jedes Filterobjekt kann die folgenden Eigenschaften haben:
    - `vendorId` {{optional_inline}}
      - : Eine ganze Zahl, die die vendorId des angeforderten HID-Geräts darstellt.
    - `productId` {{optional_inline}}
      - : Eine ganze Zahl, die die productId des angeforderten HID-Geräts darstellt.
    - `usagePage` {{optional_inline}}
      - : Eine ganze Zahl, die die usage page Komponente der HID-Nutzung des angeforderten Geräts darstellt. Die Nutzung für eine oberste Sammlungsebene wird verwendet, um den Gerätetyp zu identifizieren.

        Standard-HID-Nutzungswerte können im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-16) gefunden werden

    - `usage` {{optional_inline}}
      - : Eine ganze Zahl, die die usage ID Komponente der HID-Nutzung des angeforderten Geräts darstellt.

> [!NOTE]
> Die Gerätefilter werden verwendet, um die Liste der dem Benutzer präsentierten Geräte einzugrenzen. Wenn keine Filter vorhanden sind, werden alle angeschlossenen Geräte angezeigt. Wenn ein oder mehrere Filter enthalten sind, wird ein Gerät eingeschlossen, wenn ein Filter übereinstimmt. Damit ein Filter übereinstimmt, müssen alle in diesem Filter enthaltenen Regeln übereinstimmen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von verbundenen [`HIDDevice`](/de/docs/Web/API/HIDDevice) Objekten erfüllt wird, die den übergebenen Filtern entsprechen.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Seite keinen Zugriff auf die HID-Funktion erlaubt.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Übereinstimmung eines Geräts mit allen vier Filterregeln

Im folgenden Beispiel wird ein HID-Gerät angefordert, das eine vendor ID von `0xABCD`, eine product ID von `0x1234`, eine usage page `0x0C` und eine usage ID `0x01` hat. Es werden nur Geräte angezeigt, die alle diese Regeln erfüllen.

```js
let requestButton = document.getElementById("request-hid-device");
requestButton.addEventListener("click", async () => {
  let device;
  try {
    const devices = await navigator.hid.requestDevice({
      filters: [
        {
          vendorId: 0xabcd,
          productId: 0x1234,
          usagePage: 0x0c,
          usage: 0x01,
        },
      ],
    });
    device = devices[0];
  } catch (error) {
    console.log("An error occurred.");
  }

  if (!device) {
    console.log("No device was selected.");
  } else {
    console.log(`HID: ${device.productName}`);
  }
});
```

### Ein Beispiel mit zwei Filtern

Dieses nächste Beispiel enthält zwei Filter. Geräte werden angezeigt, wenn sie mit einem dieser Filter übereinstimmen.

```js
// Filter on devices with the Nintendo Switch Joy-Con USB Vendor/Product IDs.
const filters = [
  {
    vendorId: 0x057e, // Nintendo Co., Ltd
    productId: 0x2006, // Joy-Con Left
  },
  {
    vendorId: 0x057e, // Nintendo Co., Ltd
    productId: 0x2007, // Joy-Con Right
  },
];

// Prompt user to select a Joy-Con device.
const [device] = await navigator.hid.requestDevice({ filters });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
