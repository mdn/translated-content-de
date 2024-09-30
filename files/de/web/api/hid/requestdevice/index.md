---
title: "HID: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`requestDevice()`** Methode des [`HID`](/de/docs/Web/API/HID) Interfaces fordert den Zugriff auf ein HID-Gerät an.

Der User-Agent wird ein Berechtigungsdialogfeld präsentieren, das eine Liste der verbundenen Geräte enthält, und den Benutzer bitten, eines dieser Geräte auszuwählen und die Berechtigung zu erteilen.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`

  - : Ein Objekt, das ein Array von Filterobjekten für mögliche Geräte enthält, mit denen verbunden werden kann. Jedes Filterobjekt kann die folgenden Eigenschaften haben:

    - `vendorId` {{optional_inline}}
      - : Eine Ganzzahl, die die vendorId des angeforderten HID-Geräts darstellt.
    - `productId` {{optional_inline}}
      - : Eine Ganzzahl, die die productId des angeforderten HID-Geräts darstellt.
    - `usagePage` {{optional_inline}}

      - : Eine Ganzzahl, die die Usage Page-Komponente der HID-Nutzung des angeforderten Geräts darstellt. Die Nutzung für eine oberste Sammlungsebene wird verwendet, um den Gerätetyp zu identifizieren.

        Standard-HID-Verwendungswerte sind im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-15) zu finden.

    - `usage` {{optional_inline}}
      - : Eine Ganzzahl, die die Usage ID-Komponente der HID-Nutzung des angeforderten Geräts darstellt.

> [!NOTE]
> Die Gerätefilter werden verwendet, um die dem Benutzer präsentierte Geräteliste einzuschränken. Wenn keine Filter vorhanden sind, werden alle verbundenen Geräte angezeigt. Wenn ein oder mehrere Filter eingeschlossen sind, wird ein Gerät eingeschlossen, wenn ein Filter übereinstimmt. Um mit einem Filter übereinzustimmen, müssen alle in diesem Filter enthaltenen Regeln übereinstimmen.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem Array von verbundenen [`HIDDevice`](/de/docs/Web/API/HIDDevice) Objekten aufgelöst wird, die den übergebenen Filtern entsprechen.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Seite keinen Zugriff auf die HID-Funktion erlaubt.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Ein Gerät mit allen vier Filterregeln abgleichen

Im folgenden Beispiel wird ein HID-Gerät angefordert, das eine Hersteller-ID von `0xABCD`, eine Produkt-ID von `0x1234`, eine Usage Page von `0x0C` und eine Usage ID von `0x01` hat. Es werden nur Geräte angezeigt, die alle diese Regeln erfüllen.

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

Dieses nächste Beispiel enthält zwei Filter. Geräte werden angezeigt, wenn sie einem dieser Filter entsprechen.

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
