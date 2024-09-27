---
title: LayoutShift
slug: Web/API/LayoutShift
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `LayoutShift` Interface der [Performance API](/de/docs/Web/API/Performance_API) bietet Einblicke in die Layout-Stabilität von Webseiten basierend auf der Bewegung der Elemente auf der Seite.

## Beschreibung

Ein Layout-Verschiebung erfolgt, wenn ein beliebiges Element, das im Sichtbereich sichtbar ist, seine Position zwischen zwei Frames ändert. Diese Elemente werden als **instabil** beschrieben, was auf einen Mangel an visueller Stabilität hinweist.

Die Layout Instability API bietet eine Möglichkeit, diese Layout-Verschiebungen zu messen und zu berichten. Alle Werkzeuge zur Fehlerbehebung bei Layout-Verschiebungen, einschließlich derjenigen in den Entwicklerwerkzeugen des Browsers, verwenden diese API. Die API kann auch verwendet werden, um Layout-Verschiebungen zu beobachten und zu debuggen, indem die Informationen in die Konsole geloggt, die Daten an einen Server-Endpunkt gesendet oder zu Webseiten-Analysen hinzugefügt werden.

Performance-Tools können diese API verwenden, um einen [CLS](/de/docs/Glossary/CLS)-Score zu berechnen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften, indem es sie wie folgt qualifiziert:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück (das Konzept der Dauer ist auf Layout-Verschiebungen nicht anwendbar).
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"layout-shift"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"layout-shift"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit repräsentiert, in der die Layout-Verschiebung begann.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`LayoutShift.value`](/de/docs/Web/API/LayoutShift/value) {{Experimental_Inline}}
  - : Gibt den Layout-Verschiebungs-Score zurück, der als Wirkungsteil (Bruchteil des verschobenen Sichtbereichs) multipliziert mit dem Distanzteil (zurückgelegte Distanz als Bruchteil des Sichtbereichs) berechnet wird.
- [`LayoutShift.hadRecentInput`](/de/docs/Web/API/LayoutShift/hadRecentInput) {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn [`lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) weniger als 500 Millisekunden zurückliegt.
- [`LayoutShift.lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) {{Experimental_Inline}}
  - : Gibt die Zeit der neuesten Eingabe-Protokollierung (Benutzereingabe, die diesen Eintrag als Mitwirkender zum CLS-Score ausschließen würde) zurück oder `0`, wenn keine ausschließende Eingabe stattgefunden hat.
- [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) {{Experimental_Inline}}
  - : Gibt ein Array von [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution) Objekten mit Informationen zu den verschobenen Elementen zurück.

## Instanz-Methoden

- [`LayoutShift.toJSON()`](/de/docs/Web/API/LayoutShift/toJSON) {{Experimental_Inline}}
  - : Konvertiert die Eigenschaften in JSON.

## Beispiele

### Loggen von Layout-Verschiebungswerten

Das folgende Beispiel zeigt, wie Layout-Verschiebungen erfasst und in der Konsole protokolliert werden.

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
- [CLS](/de/docs/Glossary/CLS)
