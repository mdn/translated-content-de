---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Schnittstelle **`PerformanceElementTiming`** enthält Informationen zum Rendering-Zeitpunkt von Bild- und Textknotenelementen, die Entwickler mit einem [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut zur Beobachtung gekennzeichnet haben.

`PerformanceElementTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle definiert direkt die folgenden Eigenschaften:

- [`PerformanceElementTiming.element`](/de/docs/Web/API/PerformanceElementTiming/element) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element repräsentiert, über das Informationen zurückgegeben werden.
- [`PerformanceElementTiming.id`](/de/docs/Web/API/PerformanceElementTiming/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenfolge mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements.
- [`PerformanceElementTiming.identifier`](/de/docs/Web/API/PerformanceElementTiming/identifier) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenfolge mit dem Wert des [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/for)-Attributs des Elements.
- [`PerformanceElementTiming.intersectionRect`](/de/docs/Web/API/PerformanceElementTiming/intersectionRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das Rechteck des Elements innerhalb des Viewports beschreibt.
- [`PerformanceElementTiming.loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Ladezeit des Elements.
- [`PerformanceElementTiming.naturalHeight`](/de/docs/Web/API/PerformanceElementTiming/naturalHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine vorzeichenlose 32-Bit-Ganzzahl (unsigned long), die bei einem Bild dessen intrinsische Höhe angibt; bei Text ist der Wert `0`.
- [`PerformanceElementTiming.naturalWidth`](/de/docs/Web/API/PerformanceElementTiming/naturalWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine vorzeichenlose 32-Bit-Ganzzahl (unsigned long), die bei einem Bild dessen intrinsische Breite angibt; bei Text ist der Wert `0`.
- [`PerformanceElementTiming.paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.
- [`PerformanceElementTiming.presentationTime`](/de/docs/Web/API/PerformanceElementTiming/presentationTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem das Element tatsächlich auf dem Bildschirm gezeichnet wurde.
- [`PerformanceElementTiming.renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Rendering-Zeit des Elements.
- [`PerformanceElementTiming.url`](/de/docs/Web/API/PerformanceElementTiming/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenfolge mit der ursprünglichen URL der Ressourcenanforderung für Bilder; bei Text ist der Wert `0`.

Sie erweitert außerdem die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und präzisiert beziehungsweise beschränkt sie wie beschrieben:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` für diese Schnittstelle nicht gilt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"element"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt für Bilder `"image-paint"` und für Text `"text-paint"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieses Eintrags zurück, sofern er nicht `0` ist; andernfalls den Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags.

## Instanzmethoden

- [`PerformanceElementTiming.toJSON()`](/de/docs/Web/API/PerformanceElementTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `PerformanceElementTiming`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

Die Element Timing API soll Webentwicklern und Analysetools ermöglichen, die Rendering-Zeitpunkte wichtiger Elemente auf einer Seite zu messen.

Die API unterstützt Zeitinformationen für die folgenden Elemente:

- {{htmlelement("img")}}-Elemente,
- {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}},
- [Poster](/de/docs/Web/HTML/Reference/Elements/video#poster)-Bilder von {{htmlelement("video")}}-Elementen,
- Elemente mit einer inhaltstragenden {{cssxref("background-image")}}-Eigenschaft, deren URL-Wert auf eine tatsächlich verfügbare Ressource verweist, und
- Gruppen von Textknoten, etwa ein {{htmlelement("p")}}.

Um ein Element zur Beobachtung zu kennzeichnen, fügt der Autor dem Element das Attribut [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) hinzu.

## Beispiele

### Rendering-Zeit bestimmter Elemente beobachten

In diesem Beispiel werden zwei Elemente beobachtet, indem ihnen das Attribut [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge vom Typ `"element"` zu erhalten. Das Flag `buffered` ermöglicht den Zugriff auf Daten, die vor der Erstellung des Observers erfasst wurden.

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

Zwei Einträge werden auf der Konsole ausgegeben. Der erste enthält Details zum Bild, der zweite Details zum Textknoten.

### Getrennte Paint- und Darstellungszeitpunkte beobachten

Mit den Eigenschaften `paintTime` und `presentationTime` können Sie die Zeitpunkte ermitteln, zu denen die Paint-Phase beginnt beziehungsweise das Element auf dem Bildschirm gezeichnet wird. `paintTime` ist weitgehend browserübergreifend nutzbar, während `presentationTime` von der jeweiligen Implementierung abhängt.

In diesem Beispiel beobachtet ein `PerformanceObserver` alle Performance-Einträge vom Typ `"element"`. Beachten Sie, dass Elemente nur beobachtet werden können, wenn für sie das Attribut `elementtiming` gesetzt ist. Wir prüfen, ob `paintTime` und `presentationTime` unterstützt werden, und lesen ihre Werte aus, falls sie verfügbar sind. In Browsern ohne entsprechende Unterstützung liest der Code je nach Verfügbarkeit `renderTime` oder `loadTime` aus.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    if (entry.presentationTime) {
      console.log(
        "Element paintTime:",
        entry.paintTime,
        "Element presentationTime:",
        entry.presentationTime,
      );
    } else if (entry.paintTime) {
      console.log("Element paintTime:", entry.paintTime);
    } else if (entry.renderTime) {
      console.log("Element renderTime:", entry.renderTime);
    } else {
      console.log("Element loadTime", entry.loadTime);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
