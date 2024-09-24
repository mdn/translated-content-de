---
title: "HIDDevice: collections Eigenschaft"
short-title: collections
slug: Web/API/HIDDevice/collections
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`collections`** der {{domxref("HIDDevice")}}-Schnittstelle gibt ein Array von Berichtformaten zurück.

## Wert

Ein Array von Berichtformaten. Jedes Element enthält Folgendes:

- `usagePage`

  - : Eine Ganzzahl, die die Usage Page-Komponente der HID-Nutzung darstellt, die mit dieser Sammlung verbunden ist. Die Nutzung für eine oberste Ebene wird verwendet, um den Gerätetyp zu identifizieren.

    Standard-HID-Nutzungswerte finden Sie im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-15).

- `usage`
  - : Eine Ganzzahl, die die ID-Komponente der HID-Nutzung darstellt, die mit dieser Sammlung verbunden ist.
- `type`

  - : Ein 8-Bit-Wert, der den Sammlungstyp darstellt, der eine andere Beziehung zwischen den gruppierten Elementen beschreibt. Einer von:

    - `0x00`
      - : Physikalisch (Gruppe von Achsen)
    - `0x01`
      - : Anwendung (Maus, Tastatur)
    - `0x02`
      - : Logisch (zusammenhängende Daten)
    - `0x03`
      - : Bericht
    - `0x04`
      - : Benannte Anordnung
    - `0x05`
      - : Nutzungsschalter
    - `0x06`
      - : Nutzung modifiziert
    - `0x07` bis `0x7F`
      - : Für zukünftige Verwendung reserviert
    - `0x80` bis `0xFF`
      - : Vom Hersteller definiert

    Weitere Informationen zu diesen Typen finden Sie im Dokument [Device Class Definition](https://www.usb.org/document-library/device-class-definition-hid-111).

- `children`
  - : Ein Array von Unterkollektionen, das dasselbe Format wie eine oberste Sammlung hat.
- `inputReports`
  - : Ein Array von `inputReport`-Elementen, die einzelne Eingabemeldungen darstellen, die in dieser Sammlung beschrieben sind.
- `outputReports`
  - : Ein Array von `outputReport`-Elementen, die einzelne Ausgabemeldungen darstellen, die in dieser Sammlung beschrieben sind.
- `featureReports`
  - : Ein Array von `featureReport`-Elementen, die einzelne Funktionsberichte darstellen, die in dieser Sammlung beschrieben sind.

## Beispiele

Das folgende Beispiel zeigt, wie auf die verschiedenen Elemente zugegriffen werden kann, sobald die `collections`-Eigenschaft zurückgegeben wurde. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

```js
for (const collection of device.collections) {
  // Eine HID-Sammlung umfasst Nutzung, Usage Page, Berichte und Unterkollektionen.
  console.log(`Usage: ${collection.usage}`);
  console.log(`Usage page: ${collection.usagePage}`);

  for (const inputReport of collection.inputReports) {
    console.log(`Input report: ${inputReport.reportId}`);
    // Schleife durch inputReport.items
  }

  for (const outputReport of collection.outputReports) {
    console.log(`Output report: ${outputReport.reportId}`);
    // Schleife durch outputReport.items
  }

  for (const featureReport of collection.featureReports) {
    console.log(`Feature report: ${featureReport.reportId}`);
    // Schleife durch featureReport.items
  }

  // Schleife durch Unterkollektionen mit collection.children
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
