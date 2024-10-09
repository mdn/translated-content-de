---
title: "USB: `requestDevice()` Methode"
short-title: requestDevice()
slug: Web/API/USB/requestDevice
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`** Methode des [`USB`](/de/docs/Web/API/USB)
Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von
[`USBDevice`](/de/docs/Web/API/USBDevice) aufgelöst wird, wenn das angegebene Gerät gefunden wird. Durch das Aufrufen dieser Funktion wird der Kopplungsfluss des Benutzers ausgelöst.

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

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Das folgende Beispiel sucht nach einem von zwei USB-Geräten. Beachten Sie, dass zwei Produkt-IDs angegeben sind. Beide werden an `requestDevice()` übergeben. Dies löst einen Benutzer-Agenten-Fluss aus, der den Benutzer auffordert, ein Gerät zur Kopplung auszuwählen. Nur das ausgewählte Gerät wird an `then()` übergeben.

Die Anzahl der Filter gibt nicht die Anzahl der vom Benutzer-Agenten angezeigten Geräte an. Wenn beispielsweise nur ein USB-Gerät mit der Produkt-ID `0xa800` gefunden wird, wird nur ein Gerät vom Benutzer-Agenten aufgelistet. Wenn der Benutzer-Agent jedoch zwei der zuerst aufgeführten Geräte und eines des zweiten findet, werden alle drei Geräte aufgelistet.

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
