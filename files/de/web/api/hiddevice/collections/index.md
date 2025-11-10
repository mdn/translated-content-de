---
title: "HIDDevice: collections-Eigenschaft"
short-title: collections
slug: Web/API/HIDDevice/collections
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`collections`**-Eigenschaft des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces, die schreibgeschützt ist, gibt ein Array von Berichtsformaten zurück.

## Wert

Ein Array von Berichtsformaten. Jedes Element enthält Folgendes:

- `usagePage`

  - : Ein Integer, der die "Usage Page"-Komponente der HID-Nutzung darstellt, die mit dieser Sammlung verbunden ist. Die Nutzung eines obersten Sammelobjekts wird verwendet, um den Gerätetyp zu identifizieren.

    Standardwerte für HID-Nutzungen finden Sie im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-16).

- `usage`
  - : Ein Integer, der die Nutzungs-ID-Komponente der HID-Nutzung darstellt, die mit dieser Sammlung verbunden ist.
- `type`

  - : Ein 8-Bit-Wert, der den Sammlungstyp darstellt, welcher eine unterschiedliche Beziehung zwischen den gruppierten Elementen beschreibt. Einer der folgenden:

    - `0x00`
      - : Physikalisch (Gruppe von Achsen)
    - `0x01`
      - : Anwendung (Maus, Tastatur)
    - `0x02`
      - : Logisch (verknüpfte Daten)
    - `0x03`
      - : Bericht
    - `0x04`
      - : Benannte Anordnung
    - `0x05`
      - : Nutzungsumschaltung
    - `0x06`
      - : Veränderte Nutzung
    - `0x07` bis `0x7F`
      - : Für zukünftige Verwendung reserviert
    - `0x80` bis `0xFF`
      - : Vom Hersteller definiert

    Weitere Informationen zu diesen Typen finden Sie im Dokument [Device Class Definition](https://www.usb.org/document-library/device-class-definition-hid-111).

- `children`
  - : Ein Array von Unter-Sammlungen, die dasselbe Format wie eine oberste Sammlung haben.
- `inputReports`
  - : Ein Array von `inputReport`-Elementen, die einzelne Eingabemeldungen darstellen, die in dieser Sammlung beschrieben sind.
- `outputReports`
  - : Ein Array von `outputReport`-Elementen, die einzelne Ausgabemeldungen darstellen, die in dieser Sammlung beschrieben sind.
- `featureReports`
  - : Ein Array von `featureReport`-Elementen, die einzelne Merkmalberichte darstellen, die in dieser Sammlung beschrieben sind.

## Beispiele

Das folgende Beispiel zeigt, wie Sie auf die verschiedenen Elemente zugreifen können, nachdem die `collections`-Eigenschaft zurückgegeben wurde. Weitere Beispiele und Live-Demos finden Sie im Artikel [Anschluss an ungewöhnliche HID-Geräte](https://developer.chrome.com/docs/capabilities/hid).

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
