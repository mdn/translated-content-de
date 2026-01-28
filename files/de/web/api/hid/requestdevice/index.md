---
title: "HID: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`requestDevice()`** Methode der [`HID`](/de/docs/Web/API/HID) Schnittstelle fordert den Zugriff auf ein HID-Gerät an.

Der Benutzeragent wird einen Berechtigungsdialog präsentieren, der eine Liste der verbundenen Geräte enthält, und den Benutzer bitten, eines dieser Geräte auszuwählen und die Erlaubnis zu erteilen.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`
  - : Ein Objekt, das ein Array von Filterobjekten für mögliche Geräte enthält, mit denen eine Verbindung hergestellt werden soll. Jedes Filterobjekt kann die folgenden Eigenschaften haben:
    - `vendorId` {{optional_inline}}
      - : Eine ganze Zahl, die die vendorId des angeforderten HID-Geräts darstellt.
    - `productId` {{optional_inline}}
      - : Eine ganze Zahl, die die productId des angeforderten HID-Geräts darstellt.
    - `usagePage` {{optional_inline}}
      - : Eine ganze Zahl, die die usage page Komponente der HID-Nutzung des angeforderten Geräts darstellt. Die Nutzung für eine Top-Level-Sammlung wird verwendet, um den Gerätetyp zu identifizieren.

        Standard-HID-Nutzungswerte sind im [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-17) Dokument zu finden.

    - `usage` {{optional_inline}}
      - : Eine ganze Zahl, die die usage ID Komponente der HID-Nutzung des angeforderten Geräts darstellt.

> [!NOTE]
> Die Gerätefilter werden verwendet, um die Liste der dem Benutzer angezeigten Geräte einzugrenzen. Wenn keine Filter vorhanden sind, werden alle verbundenen Geräte angezeigt. Wenn ein oder mehrere Filter enthalten sind, wird ein Gerät eingeschlossen, wenn einer der Filter übereinstimmt. Um einen Filter zu erfüllen, müssen alle in diesem Filter enthaltenen Regeln übereinstimmen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von verbundenen [`HIDDevice`](/de/docs/Web/API/HIDDevice) Objekten aufgelöst wird, die den übergebenen Filtern entsprechen.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Seite keinen Zugriff auf die HID-Funktion erlaubt.

## Sicherheit

[Transiente Benutzeraktion](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Ein Gerät mit allen vier Filterregeln anfordern

Im folgenden Beispiel wird ein HID-Gerät angefordert, das eine Vendor-ID von `0xABCD`, eine Produkt-ID von `0x1234`, eine Usage Page `0x0C` und eine Usage ID `0x01` hat. Nur Geräte, die alle diese Regeln erfüllen, werden angezeigt.

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

Dieses nächste Beispiel enthält zwei Filter. Geräte werden angezeigt, wenn sie einen dieser Filter erfüllen.

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
