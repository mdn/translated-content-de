---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das **`PerformanceElementTiming`** Interface enthält Rendertiming-Informationen für Bild- und Textknotenelemente, die der Entwickler mit einem [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut zur Beobachtung versehen hat.

## Beschreibung

Das Ziel der Element Timing API ist es, Webentwicklern oder Analysetools die Möglichkeit zu geben, die Rendering-Zeitstempel kritischer Elemente auf einer Seite zu messen.

Die API unterstützt Timing-Informationen für die folgenden Elemente:

- {{htmlelement("img")}} Elemente,
- {{SVGElement("image")}} Elemente innerhalb eines {{SVGElement("svg")}},
- [poster](/de/docs/Web/HTML/Reference/Elements/video#poster)-Bilder von {{htmlelement("video")}}-Elementen,
- Elemente, die eine inhaltsvolle {{cssxref("background-image")}} Eigenschaft mit einem URL-Wert für eine tatsächlich verfügbare Ressource haben, und
- Gruppen von Textknoten, wie ein {{htmlelement("p")}}.

Der Autor markiert ein Element zur Beobachtung, indem er das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut am Element hinzufügt.

`PerformanceElementTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Event-Timing-Performance-Entry-Typen, indem sie wie folgt qualifiziert werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` auf dieses Interface nicht zutrifft.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"element"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"image-paint"` für Bilder und `"text-paint"` für Text zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieses Eintrags zurück, wenn er nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceElementTiming.element`](/de/docs/Web/API/PerformanceElementTiming/element) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element darstellt, über das wir Informationen zurückgeben.
- [`PerformanceElementTiming.id`](/de/docs/Web/API/PerformanceElementTiming/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements ist.
- [`PerformanceElementTiming.identifier`](/de/docs/Web/API/PerformanceElementTiming/identifier) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/for) Attributs am Element darstellt.
- [`PerformanceElementTiming.intersectionRect`](/de/docs/Web/API/PerformanceElementTiming/intersectionRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), der das Rechteck des Elements innerhalb des Ansichtsfensters darstellt.
- [`PerformanceElementTiming.loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Ladezeit des Elements.
- [`PerformanceElementTiming.naturalHeight`](/de/docs/Web/API/PerformanceElementTiming/naturalHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Höhe des Bildes darstellt, wenn dies auf ein Bild angewendet wird, 0 für Text.
- [`PerformanceElementTiming.naturalWidth`](/de/docs/Web/API/PerformanceElementTiming/naturalWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Breite des Bildes darstellt, wenn dies auf ein Bild angewendet wird, 0 für Text.
- [`PerformanceElementTiming.renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.
- [`PerformanceElementTiming.url`](/de/docs/Web/API/PerformanceElementTiming/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die anfängliche URL der Ressourcenanforderung für Bilder ist, 0 für Text.

## Instanz-Methoden

- [`PerformanceElementTiming.toJSON()`](/de/docs/Web/API/PerformanceElementTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Repräsentation des `PerformanceElementTiming` Objekts zurück.

## Beispiele

### Beobachten der Renderzeit spezifischer Elemente

In diesem Beispiel werden zwei Elemente beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered` Flag wird genutzt, um auf Daten vor der Erstellung des Observers zuzugreifen.

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

Zwei Einträge werden in die Konsole ausgegeben. Der erste enthält Details des Bildes, der zweite Details des Textknotens.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) HTML-Attribut
