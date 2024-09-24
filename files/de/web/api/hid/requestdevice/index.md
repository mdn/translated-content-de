---
title: "HID: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`requestDevice()`** Methode der {{domxref("HID")}} Schnittstelle fordert den Zugriff auf ein HID-Gerät an.

Der Benutzeragent wird ein Berechtigungsdialogfeld anzeigen, das eine Liste der verbundenen Geräte enthält, und den Benutzer bitten, eines dieser Geräte auszuwählen und die Berechtigung dafür zu erteilen.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`

  - : Ein Objekt, das ein Array von Filterobjekten für mögliche Geräte enthält, mit denen eine Verbindung hergestellt werden kann. Jedes Filterobjekt kann die folgenden Eigenschaften haben:

    - `vendorId` {{optional_inline}}
      - : Eine Ganzzahl, die die vendorId des angeforderten HID-Geräts darstellt.
    - `productId` {{optional_inline}}
      - : Eine Ganzzahl, die die productId des angeforderten HID-Geräts darstellt.
    - `usagePage` {{optional_inline}}

      - : Eine Ganzzahl, die den Usage-Page-Komponent der HID-Nutzung des angeforderten Geräts darstellt. Die Nutzung für eine Top-Level-Sammlung wird verwendet, um den Gerätetyp zu identifizieren.

        Standard-HID-Nutzungswerte finden Sie im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-15).

    - `usage` {{optional_inline}}
      - : Eine Ganzzahl, die die Usage-ID-Komponente der HID-Nutzung des angeforderten Geräts darstellt.

> [!NOTE]
> Die Gerätefilter werden verwendet, um die Liste der dem Benutzer angezeigten Geräte einzuschränken. Wenn keine Filter vorhanden sind, werden alle verbundenen Geräte angezeigt. Wenn ein oder mehrere Filter enthalten sind, wird ein Gerät einbezogen, wenn ein Filter übereinstimmt. Um mit einem Filter übereinzustimmen, müssen alle in diesem Filter enthaltenen Regeln übereinstimmen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von verbundenen {{domxref("HIDDevice")}} Objekten aufgelöst wird, die den übergebenen Filtern entsprechen.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Seite der Zugriff auf die HID-Funktion nicht gestattet ist.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Übereinstimmung eines Geräts mit allen vier Filterregeln

Im folgenden Beispiel wird ein HID-Gerät angefordert, das eine Hersteller-ID von `0xABCD`, eine Produkt-ID von `0x1234`, eine Usage-Page von `0x0C` und eine Usage-ID von `0x01` hat. Es werden nur Geräte angezeigt, die mit all diesen Regeln übereinstimmen.

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
// Filter für Geräte mit den USB-Hersteller-/Produkt-IDs des Nintendo Switch Joy-Con.
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

// Benutzer auffordern, ein Joy-Con-Gerät auszuwählen.
const [device] = await navigator.hid.requestDevice({ filters });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
