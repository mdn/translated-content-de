---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: 6e96f90bcaf87173bae82bde6f04c61d0bb21119
---

{{APIRef("Performance API")}}

Das `LargestContentfulPaint`-Interface bietet Timing-Informationen über das größte Bild oder den größten Textblock, der vor Nutzereingaben auf einer Webseite gerendert wird.

## Beschreibung

Der Schlüsselmoment, den diese API liefert, ist die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) Metrik. Sie gibt die Renderzeit des größten Bildes oder Textblocks an, der innerhalb des Viewports sichtbar ist, und wird ab dem Zeitpunkt aufgezeichnet, wenn die Seite zu laden beginnt. Die folgenden Elemente werden bei der Bestimmung der LCP berücksichtigt:

- {{HTMLElement("img")}} Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image) Elemente innerhalb eines SVG.
- Die Poster-Bilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie z.B. {{HTMLElement("p")}}.

Um Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API.

Zusätzliche wichtige Render-Momente werden durch die [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeit, zu der etwas gerendert wird. Beachten Sie, dass das Markieren des ersten Paint optional ist; nicht alle Benutzeragenten melden es.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeit, zu der das erste Stück DOM-Text oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Um eine genaue Messung der Renderzeit für ressourcenfremde Ressourcen zu erhalten, setzen Sie den {{httpheader("Timing-Allow-Origin")}}-Header.

Entwickler sollten `startTime` anstelle von `renderTime` als LCP-Wert verwenden, da `renderTime` in einigen Browsern möglicherweise nicht gesetzt ist.

Siehe [Cross-origin image render time](/de/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) und [Use startTime over renderTime](/de/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime) für weitere Details.

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es die Eigenschaften wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags zurück, wenn er nicht `0` ist, ansonsten den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` für dieses Interface nicht zutreffend ist.

Unterstützt außerdem die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das das derzeit größte Inhaltselement ist.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf dem Bildschirm gerendert wurde. Kann ein grob abgeschätzter Wert oder `0` sein, wenn das Element ein fremdes Bild ist, das ohne den `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anforderungs-URL des Bildes.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)._

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beispiele

### Beobachten des größten Inhaltselements

Im folgenden Beispiel wird ein Beobachter registriert, um das größte Inhaltselement zu erfassen, während die Seite geladen wird. Das `buffered`-Flag wird verwendet, um auf Daten von vor der Erstellung des Beobachters zuzugreifen.

Die LCP-API analysiert alle Inhalte, die sie findet (einschließlich Inhalte, die aus dem DOM entfernt werden). Wenn neue größere Inhalte gefunden werden, erstellt sie einen neuen Eintrag. Die Suche nach größeren Inhalten wird beendet, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neue Inhalte auf der Website einführen. Daher ist die LCP der letzte von dem Beobachter gemeldete Performance-Eintrag.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
- {{Glossary("First_Paint", "First Paint")}}
