---
title: "HID: Methode requestDevice()"
short-title: requestDevice()
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`requestDevice()`**-Methode der [`HID`](/de/docs/Web/API/HID)-Schnittstelle fordert den Zugriff auf ein HID-Gerät an.

Der User Agent präsentiert ein Berechtigungsdialogfenster, das eine Liste der verbundenen Geräte enthält, und bittet den Benutzer, eines dieser Geräte auszuwählen und die Berechtigung zu erteilen.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`

  - : Ein Objekt, das ein Array von Filterobjekten für mögliche Geräte enthält, mit denen eine Paarung erfolgen soll. Jedes Filterobjekt kann die folgenden Eigenschaften haben:

    - `vendorId` {{optional_inline}}
      - : Eine ganze Zahl, die die vendorId des angeforderten HID-Geräts darstellt.
    - `productId` {{optional_inline}}
      - : Eine ganze Zahl, die die productId des angeforderten HID-Geräts darstellt.
    - `usagePage` {{optional_inline}}

      - : Eine ganze Zahl, die die Nutzerseite-Komponente der HID-Nutzung des angeforderten Geräts darstellt. Die Nutzung für eine oberste Sammlung wird verwendet, um den Gerätetyp zu identifizieren.

        Standard-HID-Nutzungswerte sind im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-16) zu finden.

    - `usage` {{optional_inline}}
      - : Eine ganze Zahl, die die Usage-ID-Komponente der HID-Nutzung des angeforderten Geräts darstellt.

> [!NOTE]
> Die Gerätefilter werden verwendet, um die Liste der dem Benutzer angezeigten Geräte einzugrenzen. Wenn keine Filter vorhanden sind, werden alle verbundenen Geräte angezeigt. Wenn ein oder mehrere Filter eingeschlossen sind, wird ein Gerät eingeschlossen, wenn ein Filter passt. Um einen Filter zu erfüllen, müssen alle in diesem Filter enthaltenen Regeln übereinstimmen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von verbundenen [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Objekten aufgelöst wird, die mit den übergebenen Filtern übereinstimmen.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Seite keinen Zugriff auf die HID-Funktion erlaubt.

## Sicherheit

[Eingeschränkte Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Übereinstimmung mit einem Gerät mit allen vier Filterregeln

Im folgenden Beispiel wird ein HID-Gerät angefordert, das eine Anbieter-ID von `0xABCD`, eine Produkt-ID von `0x1234`, eine Nutzungsseite `0x0C` und eine Nutzungs-ID von `0x01` hat. Nur Geräte, die alle diese Regeln erfüllen, werden angezeigt.

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
