---
title: LayoutShift
slug: Web/API/LayoutShift
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `LayoutShift`-Interface der [Performance-API](/de/docs/Web/API/Performance_API) bietet Einblicke in die Layout-Stabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.

## Beschreibung

Ein Layout-Shift tritt auf, wenn ein sichtbares Element im Ansichtsfenster seine Position zwischen zwei Frames ändert. Diese Elemente werden als **instabil** beschrieben, was auf eine mangelnde visuelle Stabilität hinweist.

Die Layout-Instabilitäts-API bietet eine Möglichkeit zur Messung und Berichterstattung dieser Layout-Shifts. Alle Werkzeuge zur Fehlersuche bei Layout-Shifts, einschließlich der Entwicklertools des Browsers, nutzen diese API. Die API kann auch verwendet werden, um Layout-Shifts zu beobachten und zu debuggen, indem Informationen in die Konsole geloggt, die Daten an einen Server-Endpunkt gesendet oder in die Webseitenanalytik einbezogen werden.

Leistungswerkzeuge können diese API verwenden, um einen {{Glossary("CLS", "CLS")}}-Wert zu berechnen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie sie wie folgt qualifiziert:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück (das Konzept der Dauer gilt nicht für Layout-Shifts).
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"layout-shift"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"layout-shift"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit repräsentiert, zu der der Layout-Shift begann.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`LayoutShift.value`](/de/docs/Web/API/LayoutShift/value) {{Experimental_Inline}}
  - : Gibt den Layout-Shift-Wert zurück, berechnet als Wirkungsbruchteil (Bruchteil des verschobenen Ansichtsfensters) multipliziert mit dem Distanzbruchteil (verschobene Entfernung als Bruchteil des Ansichtsfensters).
- [`LayoutShift.hadRecentInput`](/de/docs/Web/API/LayoutShift/hadRecentInput) {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn [`lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) weniger als 500 Millisekunden in der Vergangenheit liegt.
- [`LayoutShift.lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) {{Experimental_Inline}}
  - : Gibt die Zeit der jüngsten ausschließenden Eingabe zurück (Benutzereingabe, die diesen Eintrag als Beitrag zum CLS-Wert ausschließt) oder `0`, wenn keine ausschließende Eingabe erfolgt ist.
- [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) {{Experimental_Inline}}
  - : Gibt ein Array von [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution)-Objekten mit Informationen zu den verschobenen Elementen zurück.

## Instanz-Methoden

- [`LayoutShift.toJSON()`](/de/docs/Web/API/LayoutShift/toJSON) {{Experimental_Inline}}
  - : Konvertiert die Eigenschaften in JSON.

## Beispiele

### Logging von Layout-Shift-Werten

Das folgende Beispiel zeigt, wie Layout-Shifts erfasst und in die Konsole geloggt werden.

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
