---
title: "HID: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`requestDevice()`** Methode der [`HID`](/de/docs/Web/API/HID) Schnittstelle beantragt den Zugriff auf ein HID-Gerät.

Der Benutzeragent zeigt ein Berechtigungsdialogfeld mit einer Liste verbundener Geräte an und bittet den Benutzer, eines dieser Geräte auszuwählen und die Berechtigung zu erteilen.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`

  - : Ein Objekt, das ein Array von Filterobjekten für mögliche zu koppelnde Geräte enthält. Jedes Filterobjekt kann die folgenden Eigenschaften aufweisen:

    - `vendorId` {{optional_inline}}
      - : Eine ganze Zahl, die die vendorId des angeforderten HID-Geräts darstellt.
    - `productId` {{optional_inline}}
      - : Eine ganze Zahl, die die productId des angeforderten HID-Geräts darstellt.
    - `usagePage` {{optional_inline}}

      - : Eine ganze Zahl, die die Komponente der Verwendungstabelle des angeforderten Geräts darstellt. Die Nutzung für eine oberste Sammlung wird verwendet, um den Gerätetyp zu identifizieren.

        Standard-HID-Nutzungswerte finden Sie im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-15).

    - `usage` {{optional_inline}}
      - : Eine ganze Zahl, die die usage ID-Komponente der Verwendung des angeforderten Geräts darstellt.

> [!NOTE]
> Die Gerätefilter werden verwendet, um die Liste der dem Benutzer präsentierten Geräte einzugrenzen. Wenn keine Filter vorhanden sind, werden alle verbundenen Geräte angezeigt. Wenn ein oder mehrere Filter enthalten sind, wird ein Gerät aufgenommen, wenn ein Filter übereinstimmt. Um mit einem Filter übereinzustimmen, müssen alle in diesem Filter enthaltenen Regeln übereinstimmen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von verbundenen [`HIDDevice`](/de/docs/Web/API/HIDDevice) Objekten aufgelöst wird, die mit den übergebenen Filtern übereinstimmen.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Seite den Zugriff auf die HID-Funktion nicht zulässt.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Übereinstimmung eines Geräts mit allen vier Filterregeln

Im folgenden Beispiel wird ein HID-Gerät angefordert, das eine Hersteller-ID von `0xABCD`, eine Produkt-ID von `0x1234`, eine Verwendungsseite `0x0C` und eine Verwendungs-ID `0x01` hat. Es werden nur Geräte angezeigt, die mit allen diesen Regeln übereinstimmen.

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
