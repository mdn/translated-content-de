---
title: "HID: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`requestDevice()`** Methode der [`HID`](/de/docs/Web/API/HID) Schnittstelle fordert den Zugriff auf ein HID-Gerät an.

Der Benutzeragent wird einen Berechtigungsdialog anzeigen, der eine Liste der angeschlossenen Geräte enthält, und den Nutzer bitten, ein Gerät auszuwählen und die Berechtigung zu erteilen.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`

  - : Ein Objekt, das ein Array von Filterobjekten für mögliche Geräte, mit denen eine Kopplung hergestellt werden soll, enthält. Jedes Filterobjekt kann die folgenden Eigenschaften haben:

    - `vendorId` {{optional_inline}}
      - : Eine ganze Zahl, die die vendorId des angeforderten HID-Geräts darstellt.
    - `productId` {{optional_inline}}
      - : Eine ganze Zahl, die die productId des angeforderten HID-Geräts darstellt.
    - `usagePage` {{optional_inline}}

      - : Eine ganze Zahl, die die Komponente des verwendeten Bereichs der HID-Nutzung des angeforderten Geräts darstellt. Die Nutzung einer oberster Ebene Sammlung wird verwendet, um den Gerätetyp zu identifizieren.

        Standard-HID-Nutzungswerte finden Sie im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-16).

    - `usage` {{optional_inline}}
      - : Eine ganze Zahl, die die Nutzungs-ID Komponente der HID-Nutzung des angeforderten Geräts darstellt.

> [!NOTE]
> Die Gerätefilter werden verwendet, um die Liste der dem Benutzer angezeigten Geräte einzugrenzen. Wenn keine Filter vorhanden sind, werden alle angeschlossenen Geräte angezeigt. Wenn ein oder mehrere Filter enthalten sind, wird ein Gerät einbezogen, wenn ein Filter übereinstimmt. Um einem Filter zu entsprechen, müssen alle in diesem Filter enthaltenen Regeln übereinstimmen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von verbundenen [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Objekten aufgelöst wird, die den übermittelten Filtern entsprechen.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Seite keinen Zugriff auf die HID-Funktion zulässt.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Ein Gerät mit allen vier Filterregeln abgleichen

Im folgenden Beispiel wird ein HID-Gerät angefordert, das eine vendor ID von `0xABCD`, eine product ID von `0x1234`, eine usage page von `0x0C` und eine usage ID von `0x01` hat. Nur Geräte, die alle diese Regeln erfüllen, werden angezeigt.

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
