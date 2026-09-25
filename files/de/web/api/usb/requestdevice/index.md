---
title: "USB: Methode requestDevice()"
short-title: requestDevice()
slug: Web/API/USB/requestDevice
l10n:
  sourceCommit: a49976f8a055175d39d1806a1646de3824cf9edf
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`requestDevice()`** des Interfaces [`USB`](/de/docs/Web/API/USB) gibt eine {{jsxref("Promise")}} zurück, die mit einer Instanz von [`USBDevice`](/de/docs/Web/API/USBDevice) erfüllt wird, wenn das angegebene Gerät gefunden wird. Der Aufruf dieser Methode startet den Kopplungsablauf des User Agents.

## Syntax

```js-nolint
requestDevice(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen zur Auswahl eines geeigneten Geräts festlegt. Die verfügbaren Optionen sind:
    - `filters`
      - : Ein Array von Filterobjekten für mögliche Geräte, die Sie koppeln möchten. Jedes Filterobjekt kann die folgenden Eigenschaften haben:
        - `vendorId`
        - `productId`
        - `classCode`
        - `subclassCode`
        - `protocolCode`
        - `serialNumber`
    - `exclusionFilters` {{optional_inline}}
      - : Ein Array von Filterobjekten für Geräte, die vom Kopplungsablauf ausgeschlossen werden sollen. Diese Objekte haben dieselben Eigenschaften wie die Objekte in `filters`. Der Ausschluss hat Vorrang vor der Aufnahme.

### Rückgabewert

Eine {{JSxRef("Promise")}}, die mit einer Instanz von [`USBDevice`](/de/docs/Web/API/USBDevice) erfüllt wird.

## Sicherheit

Eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Damit diese Funktion verwendet werden kann, muss der Benutzer mit der Seite oder einem UI-Element interagieren.

## Beispiele

### Bestimmte USB-Geräte anfordern

Das folgende Beispiel sucht nach einem von zwei USB-Geräten. Beachten Sie, dass zwei Produkt-IDs angegeben sind. Beide werden an `requestDevice()` übergeben. Dadurch wird ein Ablauf des User Agents gestartet, der den Benutzer auffordert, ein Gerät zum Koppeln auszuwählen. Nur das ausgewählte Gerät wird an `then()` übergeben.

Die Anzahl der Filter bestimmt nicht die Anzahl der Geräte, die der User Agent anzeigt. Wenn beispielsweise nur ein USB-Gerät mit der Produkt-ID `0xa800` gefunden wird, listet der User Agent nur ein Gerät auf. Findet der User Agent dagegen zwei Exemplare des zuerst aufgeführten Geräts und eines des zweiten, werden alle drei Geräte aufgelistet.

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

### Geräte ausschließen

Das folgende Beispiel fordert ein Gerät mit der Hersteller-ID `0x1209` an. Geräte mit dieser Hersteller-ID und der Produkt-ID `0xa850` werden ausgeschlossen:

```js
navigator.usb
  .requestDevice({
    filters: [{ vendorId: 0x1209 }],
    exclusionFilters: [{ vendorId: 0x1209, productId: 0xa850 }],
  })
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
