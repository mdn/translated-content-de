---
title: LayoutShift
slug: Web/API/LayoutShift
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `LayoutShift`-Interface der [Performance API](/de/docs/Web/API/Performance_API) bietet Einblicke in die Layoutstabilität von Webseiten, basierend auf Bewegungen der Elemente auf der Seite.

## Beschreibung

Ein Layout-Verschiebung tritt auf, wenn sich ein sichtbares Element im Ansichtsfenster zwischen zwei Frames verschiebt. Diese Elemente werden als **instabil** beschrieben, was auf einen Mangel an visueller Stabilität hinweist.

Die Layout Instability API bietet eine Möglichkeit, diese Layout-Verschiebungen zu messen und zu berichten. Alle Werkzeuge zur Fehlerbehebung bei Layout-Verschiebungen, einschließlich der Entwicklerwerkzeuge des Browsers, verwenden diese API. Die API kann auch genutzt werden, um Layout-Verschiebungen zu beobachten und zu debuggen, indem die Informationen in die Konsole protokolliert, an einen Server-Endpunkt gesendet oder in die Webseitenanalyse einbezogen werden.

Performance-Tools können diese API verwenden, um einen {{glossary("CLS")}}-Wert zu berechnen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden {{domxref("PerformanceEntry")}}-Eigenschaften, indem sie wie folgt qualifiziert werden:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück (das Konzept der Dauer ist auf Layout-Verschiebungen nicht anwendbar).
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"layout-shift"` zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"layout-shift"` zurück.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit angibt, zu der die Layout-Verschiebung begann.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- {{domxref("LayoutShift.value")}} {{Experimental_Inline}}
  - : Gibt den Layout-Verschiebungswert zurück, der als das Produkt der Einfluss-Fraktion (der Anteil des Ansichtsfensters, der verschoben wurde) und der Distanz-Fraktion (der als Bruchteil des Ansichtsfensters verschobene Abstand) berechnet wird.
- {{domxref("LayoutShift.hadRecentInput")}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} weniger als 500 Millisekunden in der Vergangenheit liegt.
- {{domxref("LayoutShift.lastInputTime")}} {{Experimental_Inline}}
  - : Gibt die Zeit der letzten ausschließenden Eingabe zurück (Benutzereingaben, die diesen Eintrag als Mitwirkender zum CLS-Wert ausschließen würden) oder `0`, wenn keine ausschließende Eingabe stattgefunden hat.
- {{domxref("LayoutShift.sources")}} {{Experimental_Inline}}
  - : Gibt ein Array von {{domxref("LayoutShiftAttribution")}}-Objekten mit Informationen zu den verschobenen Elementen zurück.

## Instanz-Methoden

- {{domxref("LayoutShift.toJSON()")}} {{Experimental_Inline}}
  - : Konvertiert die Eigenschaften in JSON.

## Beispiele

### Protokollierung von Layout-Verschiebungswerten

Das folgende Beispiel zeigt, wie Layout-Verschiebungen erfasst und in die Konsole protokolliert werden.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Zählt nur Layout-Verschiebungen ohne kürzliche Benutzereingaben
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

- {{domxref("LayoutShiftAttribution")}}
- {{glossary("CLS")}}
