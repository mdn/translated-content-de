---
title: "HIDDevice: collections-Eigenschaft"
short-title: collections
slug: Web/API/HIDDevice/collections
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`collections`** schreibgeschützte Eigenschaft des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces gibt ein Array von Berichtformaten zurück.

## Wert

Ein Array von Berichtformaten. Jeder Eintrag enthält Folgendes:

- `usagePage`

  - : Eine Ganzzahl, die die "usage page"-Komponente der HID-Nutzung darstellt, die mit dieser Sammlung verbunden ist. Die Nutzung für eine Top-Level-Sammlung wird verwendet, um den Gerätetyp zu identifizieren.

    Standard-HID-Nutzungswerte finden Sie im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-15).

- `usage`
  - : Eine Ganzzahl, die die Nutzungs-ID-Komponente der HID-Nutzung darstellt, die mit dieser Sammlung verbunden ist.
- `type`

  - : Ein 8-Bit-Wert, der den Sammlungstyp darstellt, der eine unterschiedliche Beziehung zwischen den gruppierten Elementen beschreibt. Einer von:

    - `0x00`
      - : Physisch (Gruppe von Achsen)
    - `0x01`
      - : Anwendung (Maus, Tastatur)
    - `0x02`
      - : Logisch (zusammenhängende Daten)
    - `0x03`
      - : Bericht
    - `0x04`
      - : Benanntes Array
    - `0x05`
      - : Nutzungsschalter
    - `0x06`
      - : Nutzung modifiziert
    - `0x07` bis `0x7F`
      - : Für zukünftige Verwendung reserviert
    - `0x80` bis `0xFF`
      - : Vom Verkäufer definiert

    Weitere Informationen zu diesen Typen finden Sie im Dokument [Device Class Definition](https://www.usb.org/document-library/device-class-definition-hid-111).

- `children`
  - : Ein Array von Unterkollektionen, die das gleiche Format wie eine Top-Level-Sammlung verwenden.
- `inputReports`
  - : Ein Array von `inputReport`-Elementen, die einzelne Eingabereports darstellen, die in dieser Sammlung beschrieben sind.
- `outputReports`
  - : Ein Array von `outputReport`-Elementen, die einzelne Ausgabereports darstellen, die in dieser Sammlung beschrieben sind.
- `featureReports`
  - : Ein Array von `featureReport`-Elementen, die einzelne Funktionsreports darstellen, die in dieser Sammlung beschrieben sind.

## Beispiele

Das folgende Beispiel zeigt, wie auf die verschiedenen Elemente zugegriffen werden kann, sobald die `collections`-Eigenschaft zurückgegeben wurde. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

```js
for (const collection of device.collections) {
  // A HID collection includes usage, usage page, reports, and subcollections.
  console.log(`Usage: ${collection.usage}`);
  console.log(`Usage page: ${collection.usagePage}`);

  for (const inputReport of collection.inputReports) {
    console.log(`Input report: ${inputReport.reportId}`);
    // Loop through inputReport.items
  }

  for (const outputReport of collection.outputReports) {
    console.log(`Output report: ${outputReport.reportId}`);
    // Loop through outputReport.items
  }

  for (const featureReport of collection.featureReports) {
    console.log(`Feature report: ${featureReport.reportId}`);
    // Loop through featureReport.items
  }

  // Loop through subcollections with collection.children
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
