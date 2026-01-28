---
title: "HIDDevice: collections-Eigenschaft"
short-title: collections
slug: Web/API/HIDDevice/collections
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`collections`**-Eigenschaft der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt ein Array von Berichtsformaten zurück.

## Wert

Ein Array von Berichtsformaten. Jedes Element enthält Folgendes:

- `usagePage`
  - : Ein Integer, der die Usage Page-Komponente des HID-Usage repräsentiert, die mit dieser Sammlung verbunden ist. Die Verwendung für eine oberste Sammlungsebene wird verwendet, um den Gerätetyp zu identifizieren.

    Standard-HID-Usage-Werte finden Sie im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-17)

- `usage`
  - : Ein Integer, der die Usage-ID-Komponente des HID-Usage repräsentiert, die mit dieser Sammlung verbunden ist.
- `type`
  - : Ein 8-Bit-Wert, der den Sammlungstyp repräsentiert, welcher eine unterschiedliche Beziehung zwischen den gruppierten Elementen beschreibt. Einer von:
    - `0x00`
      - : Physikalisch (Gruppe von Achsen)
    - `0x01`
      - : Anwendung (Maus, Tastatur)
    - `0x02`
      - : Logisch (zusammenhängende Daten)
    - `0x03`
      - : Bericht
    - `0x04`
      - : Benanntes Array
    - `0x05`
      - : Usage-Schalter
    - `0x06`
      - : Verwendung modifiziert
    - `0x07` bis `0x7F`
      - : Für zukünftige Nutzung reserviert
    - `0x80` bis `0xFF`
      - : Vom Anbieter definiert

    Weitere Informationen zu diesen Typen finden Sie im Dokument [Device Class Definition](https://www.usb.org/document-library/device-class-definition-hid-111).

- `children`
  - : Ein Array von Unter-Sammlungen, das dasselbe Format wie eine Sammlung auf oberster Ebene hat.
- `inputReports`
  - : Ein Array von `inputReport`-Elementen, die einzelne Eingabereports darstellen, die in dieser Sammlung beschrieben werden.
- `outputReports`
  - : Ein Array von `outputReport`-Elementen, die einzelne Ausgabereports darstellen, die in dieser Sammlung beschrieben werden.
- `featureReports`
  - : Ein Array von `featureReport`-Elementen, die einzelne Feature-Reports darstellen, die in dieser Sammlung beschrieben werden.

## Beispiele

Das folgende Beispiel zeigt, wie Sie auf die verschiedenen Elemente zugreifen können, nachdem die `collections`-Eigenschaft zurückgegeben wurde. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

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
