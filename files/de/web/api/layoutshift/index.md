---
title: LayoutShift
slug: Web/API/LayoutShift
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die `LayoutShift`-Schnittstelle der [Performance API](/de/docs/Web/API/Performance_API) liefert Einblicke in die Layoutstabilität von Webseiten anhand der Bewegungen von Elementen auf der Seite.

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), indem sie sie wie folgt festlegt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück (das Konzept der Dauer gilt nicht für Layoutverschiebungen).
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"layout-shift"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer eine leere Zeichenfolge zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Layoutverschiebung begann.

Diese Schnittstelle unterstützt außerdem die folgenden Eigenschaften:

- [`LayoutShift.value`](/de/docs/Web/API/LayoutShift/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert der Layoutverschiebung zurück. Er wird berechnet, indem der Anteil des betroffenen Viewports mit dem Anteil der zurückgelegten Strecke am Viewport multipliziert wird.
- [`LayoutShift.hadRecentInput`](/de/docs/Web/API/LayoutShift/hadRecentInput) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn [`lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) weniger als 500 Millisekunden zurückliegt.
- [`LayoutShift.lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Zeitpunkt der letzten ausschließenden Eingabe zurück (einer Benutzereingabe, aufgrund derer dieser Eintrag nicht zum CLS-Wert beiträgt), oder `0`, wenn keine solche Eingabe stattgefunden hat.
- [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)-Objekten mit Informationen zu den verschobenen Elementen zurück.

## Instanzmethoden

- [`LayoutShift.toJSON()`](/de/docs/Web/API/LayoutShift/toJSON) {{Experimental_Inline}}
  - : Gibt ein als JSON serialisierbares einfaches Objekt zurück, das das `LayoutShift`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beschreibung

Eine Layoutverschiebung tritt auf, wenn ein im Viewport sichtbares Element zwischen zwei Frames seine Position ändert. Solche Elemente werden als **instabil** bezeichnet, was auf mangelnde visuelle Stabilität hinweist.

Die Layout Instability API ermöglicht es, diese Layoutverschiebungen zu messen und darüber zu berichten. Alle Werkzeuge zur Fehlersuche bei Layoutverschiebungen, einschließlich der Entwicklertools des Browsers, verwenden diese API. Sie können die API auch nutzen, um Layoutverschiebungen zu beobachten und zu untersuchen, indem Sie Informationen in der Konsole protokollieren, Daten an einen Server-Endpunkt senden oder sie für die Webseitenanalyse verwenden.

Performance-Werkzeuge können mit dieser API einen {{Glossary("CLS", "CLS")}}-Wert berechnen.

{{InheritanceDiagram}}

## Beispiele

### Werte von Layoutverschiebungen protokollieren

Das folgende Beispiel zeigt, wie Sie Layoutverschiebungen erfassen und in der Konsole protokollieren.

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
