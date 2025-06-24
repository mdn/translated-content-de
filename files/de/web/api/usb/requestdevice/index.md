---
title: "USB: `requestDevice()`-Methode"
short-title: requestDevice()
slug: Web/API/USB/requestDevice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`**-Methode des [`USB`](/de/docs/Web/API/USB)
Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von
[`USBDevice`](/de/docs/Web/API/USBDevice) aufgelöst wird, wenn das angegebene Gerät gefunden wird. Der Aufruf dieser Funktion löst den Kopplungsvorgang des User-Agents aus.

## Syntax

```js-nolint
requestDevice(filters)
```

### Parameter

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

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

Im folgenden Beispiel wird nach einem von zwei USB-Geräten gesucht. Beachten Sie, dass zwei Produkt-IDs angegeben sind. Beide werden an `requestDevice()` übergeben. Dies löst einen User-Agent-Vorgang aus, der den Benutzer dazu auffordert, ein Gerät zur Kopplung auszuwählen. Nur das ausgewählte Gerät wird an `then()` übergeben.

Die Anzahl der Filter bestimmt nicht die Anzahl der vom User-Agent angezeigten Geräte. Wenn z.B. nur ein USB-Gerät mit der Produkt-ID `0xa800` gefunden wird, wird nur ein Gerät vom User-Agent aufgelistet. Wenn der User-Agent hingegen zwei der zuerst aufgelisteten Geräte und eines des zweiten findet, werden alle drei Geräte aufgelistet.

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
