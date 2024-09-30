---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das **`PerformanceElementTiming`**-Interface enthält Render-Timing-Informationen für Bild- und Textknotenelemente, die der Entwickler mit einem [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut zur Beobachtung versehen hat.

## Beschreibung

Das Ziel der Element Timing API ist es, Webentwicklern oder Analysen-Tools die Möglichkeit zu geben, die Rendering-Zeitstempel kritischer Elemente auf einer Seite zu messen.

Die API unterstützt Timing-Informationen der folgenden Elemente:

- {{htmlelement("img")}}-Elemente,
- {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}},
- [poster](/de/docs/Web/HTML/Element/video#poster)-Bilder von {{htmlelement("video")}}-Elementen,
- Elemente, die ein {{cssxref("background-image")}} haben, und
- Gruppen von Textknoten, wie z.B. ein {{htmlelement("p")}}.

Der Autor markiert ein Element zur Beobachtung, indem er das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut auf dem Element hinzufügt.

`PerformanceElementTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Leistungseintragstypen von Ereignissen, indem es sie wie folgt qualifiziert:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` für dieses Interface nicht zutrifft.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"element"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"image-paint"` für Bilder und `"text-paint"` für Text zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieses Eintrags zurück, wenn er nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime).

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceElementTiming.element`](/de/docs/Web/API/PerformanceElementTiming/element) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element darstellt, über das wir Informationen zurückgeben.
- [`PerformanceElementTiming.id`](/de/docs/Web/API/PerformanceElementTiming/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Zeichenfolgenwert, der die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Elements ist.
- [`PerformanceElementTiming.identifier`](/de/docs/Web/API/PerformanceElementTiming/identifier) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Zeichenfolgenwert, der den Wert des [`elementtiming`](/de/docs/Web/HTML/Attributes/for)-Attributs auf dem Element darstellt.
- [`PerformanceElementTiming.intersectionRect`](/de/docs/Web/API/PerformanceElementTiming/intersectionRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), der das Rechteck des Elements innerhalb des Ansichtsfensters darstellt.
- [`PerformanceElementTiming.loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der `loadTime` des Elements.
- [`PerformanceElementTiming.naturalHeight`](/de/docs/Web/API/PerformanceElementTiming/naturalHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein ungezeichnetes 32-Bit-Ganzzahlformat (unsigned long), das die intrinsische Höhe des Bildes angibt, wenn es sich um ein Bild handelt, 0 für Text.
- [`PerformanceElementTiming.naturalWidth`](/de/docs/Web/API/PerformanceElementTiming/naturalWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein ungezeichnetes 32-Bit-Ganzzahlformat (unsigned long), das die intrinsische Breite des Bildes angibt, wenn es sich um ein Bild handelt, 0 für Text.
- [`PerformanceElementTiming.renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der `renderTime` des Elements.
- [`PerformanceElementTiming.url`](/de/docs/Web/API/PerformanceElementTiming/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Zeichenfolgenwert, der die initiale URL der Ressourcenanforderung für Bilder darstellt, 0 für Text.

## Instanz-Methoden

- [`PerformanceElementTiming.toJSON()`](/de/docs/Web/API/PerformanceElementTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceElementTiming`-Objekts zurück.

## Beispiele

### Beobachtung der Renderzeit spezifischer Elemente

In diesem Beispiel werden zwei Elemente beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ist registriert, um alle Leistungseinträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers entstanden sind.

```html
<img src="image.jpg" elementtiming="big-image" />
<p elementtiming="text" id="text-id">text here</p>
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});
observer.observe({ type: "element", buffered: true });
```

Zwei Einträge werden in die Konsole ausgegeben. Der erste enthält Details zum Bild, der zweite Details zum Textknoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) HTML-Attribut
