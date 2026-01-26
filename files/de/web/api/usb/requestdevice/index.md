---
title: "USB: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/USB/requestDevice
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`** Methode des [`USB`](/de/docs/Web/API/USB)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`USBDevice`](/de/docs/Web/API/USBDevice) aufgelöst wird, wenn das angegebene Gerät gefunden wird. Das Aufrufen dieser Funktion löst den Kopplungsablauf des Benutzeragents aus.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen zum Auswählen eines geeigneten Geräts festlegt. Die verfügbaren Optionen sind:
    - `filters`
      - : Ein Array von Filterobjekten für mögliche Geräte, die Sie koppeln möchten. Jedes Filterobjekt kann die folgenden Eigenschaften haben:
        - `vendorId`
        - `productId`
        - `classCode`
        - `subclassCode`
        - `protocolCode`
        - `serialNumber`

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einer Instanz von [`USBDevice`](/de/docs/Web/API/USBDevice) aufgelöst wird.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Im folgenden Beispiel wird nach einem von zwei USB-Geräten gesucht. Beachten Sie, dass zwei Produkt-IDs angegeben sind. Beide werden an `requestDevice()` übergeben. Dies löst einen Benutzeragentenablauf aus, der den Benutzer auffordert, ein Gerät zur Kopplung auszuwählen. Nur das ausgewählte Gerät wird an `then()` übergeben.

Die Anzahl der Filter bestimmt nicht die Anzahl der vom Benutzeragenten angezeigten Geräte. Zum Beispiel, wenn nur ein USB-Gerät mit der Produkt-ID `0xa800` gefunden wird, dann wird nur ein Gerät vom Benutzeragenten aufgelistet. Andererseits, wenn der Benutzeragent zwei Geräte des ersten gelisteten und eines des zweiten findet, dann werden alle drei Geräte aufgelistet.

```js
const filters = [
  { vendorId: 0x1209, productId: 0xa800 },
  { vendorId: 0x1209, productId: 0xa850 },
];
navigator.usb
  .requestDevice({ filters })
  .then((usbDevice) => {
    console.log(`Product name: ${usbDevice.productName}`);
  })
  .catch((e) => {
    console.error(`There is no device. ${e}`);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
