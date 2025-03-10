---
title: "HIDDevice: collections-Eigenschaft"
short-title: collections
slug: Web/API/HIDDevice/collections
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`collections`**-Eigenschaft der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt ein Array von Berichtsformaten zurück. Diese Eigenschaft ist schreibgeschützt.

## Wert

Ein Array von Berichtsformaten. Jeder Eintrag enthält Folgendes:

- `usagePage`

  - : Eine ganze Zahl, die die Usage Page-Komponente der HID-Nutzung darstellt, die mit dieser Sammlung verbunden ist. Die Nutzung einer obersten Sammlungsebene wird verwendet, um den Gerätetyp zu identifizieren.

    Standardwerte für HID-Nutzungen finden Sie im Dokument [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-16)

- `usage`
  - : Eine ganze Zahl, die die Usage ID-Komponente der HID-Nutzung darstellt, die mit dieser Sammlung verbunden ist.
- `type`

  - : Ein 8-Bit-Wert, der den Sammlungstyp darstellt und eine unterschiedliche Beziehung zwischen den gruppierten Elementen beschreibt. Einer der folgenden:

    - `0x00`
      - : Physisch (Gruppe von Achsen)
    - `0x01`
      - : Anwendung (Maus, Tastatur)
    - `0x02`
      - : Logisch (zusammenhängende Daten)
    - `0x03`
      - : Bericht
    - `0x04`
      - : Benannte Anordnung
    - `0x05`
      - : Gebrauchsschalter
    - `0x06`
      - : Nutzungsmodifikator
    - `0x07` bis `0x7F`
      - : Für zukünftige Verwendung reserviert
    - `0x80` bis `0xFF`
      - : Vom Hersteller definiert

    Weitere Informationen zu diesen Typen finden Sie im Dokument [Device Class Definition](https://www.usb.org/document-library/device-class-definition-hid-111).

- `children`
  - : Ein Array von Unterkollektionen, das dasselbe Format wie eine oberste Sammlungsebene aufweist.
- `inputReports`
  - : Ein Array von `inputReport`-Elementen, die einzelne Eingabereporte darstellen, die in dieser Sammlung beschrieben werden.
- `outputReports`
  - : Ein Array von `outputReport`-Elementen, die einzelne Ausgabereporte darstellen, die in dieser Sammlung beschrieben werden.
- `featureReports`
  - : Ein Array von `featureReport`-Elementen, die einzelne Feature-Reporte darstellen, die in dieser Sammlung beschrieben werden.

## Beispiele

Das folgende Beispiel zeigt, wie auf die verschiedenen Elemente zugegriffen werden kann, nachdem die `collections`-Eigenschaft zurückgegeben wurde. Sie können weitere Beispiele und Live-Demos im Artikel [Verbinden mit ungewöhnlichen HID-Geräten](https://developer.chrome.com/docs/capabilities/hid) sehen.

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
