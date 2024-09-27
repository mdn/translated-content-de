---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`PerformanceElementTiming`**-Schnittstelle enthält Rendertiming-Informationen für Bild- und Textknoten-Elemente, die der Entwickler mit einem [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut zur Beobachtung gekennzeichnet hat.

## Beschreibung

Das Ziel der Element Timing API ist es, Webentwicklern oder Analysetools die Möglichkeit zu geben, Renderzeitstempel von kritischen Elementen auf einer Seite zu messen.

Die API unterstützt Timing-Informationen für die folgenden Elemente:

- {{htmlelement("img")}}-Elemente,
- {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}},
- [poster](/de/docs/Web/HTML/Element/video#poster)-Bilder von {{htmlelement("video")}}-Elementen,
- Elemente, die ein {{cssxref("background-image")}} haben, und
- Gruppen von Textknoten, wie ein {{htmlelement("p")}}.

Der Autor kennzeichnet ein Element für die Beobachtung, indem er das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut auf dem Element hinzufügt.

`PerformanceElementTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ereignistiming-Performance-Eintragstypen, indem sie wie folgt qualifiziert werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` auf diese Schnittstelle nicht zutrifft.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"element"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"image-paint"` für Bilder und `"text-paint"` für Text zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieser Eintragung zurück, wenn er nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime).

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceElementTiming.element`](/de/docs/Web/API/PerformanceElementTiming/element) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element repräsentiert, über das wir Informationen zurückgeben.
- [`PerformanceElementTiming.id`](/de/docs/Web/API/PerformanceElementTiming/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Elements ist.
- [`PerformanceElementTiming.identifier`](/de/docs/Web/API/PerformanceElementTiming/identifier) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des [`elementtiming`](/de/docs/Web/HTML/Attributes/for)-Attributes auf dem Element darstellt.
- [`PerformanceElementTiming.intersectionRect`](/de/docs/Web/API/PerformanceElementTiming/intersectionRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das Rechteck des Elements innerhalb des Viewports angibt.
- [`PerformanceElementTiming.loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Ladezeit des Elements.
- [`PerformanceElementTiming.naturalHeight`](/de/docs/Web/API/PerformanceElementTiming/naturalHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Höhe des Bildes darstellt, falls dies auf ein Bild angewendet wird, 0 für Text.
- [`PerformanceElementTiming.naturalWidth`](/de/docs/Web/API/PerformanceElementTiming/naturalWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Breite des Bildes darstellt, falls dies auf ein Bild angewendet wird, 0 für Text.
- [`PerformanceElementTiming.renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.
- [`PerformanceElementTiming.url`](/de/docs/Web/API/PerformanceElementTiming/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die ursprüngliche URL der Ressourcenanfrage für Bilder ist, 0 für Text.

## Instanz-Methoden

- [`PerformanceElementTiming.toJSON()`](/de/docs/Web/API/PerformanceElementTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceElementTiming`-Objekts zurück.

## Beispiele

### Beobachtung der Renderzeit spezifischer Elemente

In diesem Beispiel werden zwei Elemente beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten von vor der Erzeugung des Observers zuzugreifen.

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

Zwei Einträge werden in der Konsole ausgegeben. Der erste enthält Details des Bildes, der zweite Details des Textknotens.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) HTML-Attribut
