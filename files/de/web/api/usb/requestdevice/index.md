---
title: "USB: requestDevice()-Methode"
short-title: requestDevice()
slug: Web/API/USB/requestDevice
l10n:
  sourceCommit: e522944060c9b7b17c1a9f373ecf4503b8d14445
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`**-Methode der [`USB`](/de/docs/Web/API/USB)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`USBDevice`](/de/docs/Web/API/USBDevice) aufgelöst wird, wenn das angegebene Gerät gefunden wird. Der Aufruf dieser Funktion löst den Pairing-Prozess des Benutzeragenten aus.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Auswahl eines geeigneten Geräts festlegt. Die verfügbaren Optionen sind:
    - `filters`
      - : Ein Array von Filterobjekten für mögliche Geräte, mit denen Sie eine Verbindung herstellen möchten. Jedes Filterobjekt kann die folgenden Eigenschaften haben:
        - `vendorId`
        - `productId`
        - `classCode`
        - `subclassCode`
        - `protocolCode`
        - `serialNumber`

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einer Instanz von [`USBDevice`](/de/docs/Web/API/USBDevice) aufgelöst wird.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Das folgende Beispiel sucht nach einem von zwei USB-Geräten. Beachten Sie, dass zwei Produkt-IDs angegeben sind. Beide werden an `requestDevice()` übergeben. Dies löst einen Benutzeragenten-Prozess aus, der den Benutzer auffordert, ein Gerät zur Kopplung auszuwählen. Nur das ausgewählte Gerät wird an `then()` übergeben.

Die Anzahl der Filter gibt nicht die Anzahl der vom Benutzeragenten angezeigten Geräte an. Wenn beispielsweise nur ein USB-Gerät mit der Produkt-ID `0xa800` gefunden wird, wird nur ein Gerät vom Benutzeragenten aufgelistet. Wenn der Benutzeragent jedoch zwei der zuerst gelisteten Geräte und eines des zweiten findet, werden alle drei Geräte aufgelistet.

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
