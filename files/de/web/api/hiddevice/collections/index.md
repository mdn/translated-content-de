---
title: "HIDDevice: collections-Eigenschaft"
short-title: collections
slug: Web/API/HIDDevice/collections
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`collections`** schreibgeschützte Eigenschaft der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt ein Array von Berichtformaten zurück.

## Wert

Ein Array von Berichtformaten. Jeder Eintrag enthält Folgendes:

- `usagePage`

  - : Ein Integer, der die Usage Page-Komponente des HID-Usages repräsentiert, die mit dieser Sammlung verbunden ist. Der Usage für eine Top-Level-Sammlung wird verwendet, um den Gerätetyp zu identifizieren.

    Standard-HID-Usage-Werte können im [HID Usage Tables](https://usb.org/document-library/hid-usage-tables-15)-Dokument gefunden werden.

- `usage`
  - : Ein Integer, der die Usage ID-Komponente des HID-Usages repräsentiert, die mit dieser Sammlung verbunden ist.
- `type`

  - : Ein 8-Bit-Wert, der den Sammlungstyp repräsentiert und eine andere Beziehung zwischen den gruppierten Elementen beschreibt. Einer von:

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
      - : Usage-Schalter
    - `0x06`
      - : Usage-Modifikation
    - `0x07` bis `0x7F`
      - : Für zukünftige Verwendung reserviert
    - `0x80` bis `0xFF`
      - : Vom Hersteller definiert

    Weitere Informationen zu diesen Typen finden Sie im [Device Class Definition](https://www.usb.org/document-library/device-class-definition-hid-111)-Dokument.

- `children`
  - : Ein Array von Unterkollektionen, das dasselbe Format wie eine oberste Sammlung hat.
- `inputReports`
  - : Ein Array von `inputReport`-Elementen, die einzelne Input-Berichte repräsentieren, die in dieser Sammlung beschrieben sind.
- `outputReports`
  - : Ein Array von `outputReport`-Elementen, die einzelne Output-Berichte repräsentieren, die in dieser Sammlung beschrieben sind.
- `featureReports`
  - : Ein Array von `featureReport`-Elementen, die einzelne Feature-Berichte repräsentieren, die in dieser Sammlung beschrieben sind.

## Beispiele

Das folgende Beispiel zeigt, wie Sie auf die verschiedenen Elemente zugreifen können, sobald die `collections`-Eigenschaft zurückgegeben wurde. Weitere Beispiele und Live-Demos finden Sie im Artikel [Verbindung zu ungewöhnlichen HID-Geräten herstellen](https://developer.chrome.com/docs/capabilities/hid).

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
