---
title: LayoutShift
slug: Web/API/LayoutShift
l10n:
  sourceCommit: 301b898e198a5e3afa058b3d0717f0caa6776663
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die `LayoutShift`-Schnittstelle der [Performance API](/de/docs/Web/API/Performance_API) gibt Aufschluss über die Layout-Stabilität von Webseiten anhand der Bewegungen von Elementen auf der Seite.

## Beschreibung

Eine Layout-Verschiebung tritt auf, wenn ein im Viewport sichtbares Element seine Position zwischen zwei Frames ändert. Solche Elemente gelten als **instabil**, da es ihnen an visueller Stabilität mangelt.

Die Layout Instability API ermöglicht es, diese Layout-Verschiebungen zu messen und zu erfassen. Alle Werkzeuge zum Debuggen von Layout-Verschiebungen, einschließlich der Entwicklertools des Browsers, verwenden diese API. Sie können die API auch nutzen, um Layout-Verschiebungen zu beobachten und zu debuggen: indem Sie Informationen in der Konsole protokollieren, Daten an einen Server-Endpunkt senden oder sie für die Webseitenanalyse verwenden.

Performance-Tools können mit dieser API einen {{Glossary("CLS", "CLS")}}-Wert berechnen.

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) mit den jeweils angegebenen Rückgabewerten:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück (das Konzept einer Dauer ist auf Layout-Verschiebungen nicht anwendbar).
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"layout-shift"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer eine leere Zeichenfolge zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Layout-Verschiebung begann.

Diese Schnittstelle unterstützt außerdem die folgenden Eigenschaften:

- [`LayoutShift.value`](/de/docs/Web/API/LayoutShift/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert der Layout-Verschiebung zurück. Er wird berechnet, indem der Anteil des von der Verschiebung betroffenen Viewports mit der Verschiebungsdistanz als Anteil am Viewport multipliziert wird.
- [`LayoutShift.hadRecentInput`](/de/docs/Web/API/LayoutShift/hadRecentInput) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn [`lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) weniger als 500 Millisekunden zurückliegt.
- [`LayoutShift.lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Zeitpunkt der letzten ausschließenden Eingabe zurück (einer Nutzereingabe, aufgrund derer dieser Eintrag nicht zum CLS-Wert beiträgt), oder `0`, wenn keine solche Eingabe erfolgt ist.
- [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)-Objekten mit Informationen über die verschobenen Elemente zurück.

## Instanzmethoden

- [`LayoutShift.toJSON()`](/de/docs/Web/API/LayoutShift/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `LayoutShift`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

### Werte von Layout-Verschiebungen protokollieren

Das folgende Beispiel zeigt, wie Sie Layout-Verschiebungen erfassen und in der Konsole protokollieren.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      console.log("LayoutShift value:", entry.value);
      if (entry.sources) {
        for (const { node, currentRect, previousRect } of entry.sources)
          console.log("LayoutShift source:", node, {
            currentRect,
            previousRect,
          });
      }
    }
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)
- {{Glossary("CLS", "CLS")}}
