---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das **`PerformanceElementTiming`** Interface enthält Informationen zur Rendering-Zeit für Bild- und Textknotenelemente, die der Entwickler zur Beobachtung mit einem [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut versehen hat.

## Beschreibung

Das Ziel der Element Timing API ist es, Webentwicklern oder Analysetools die Möglichkeit zu geben, Rendering-Zeitstempel von kritischen Elementen auf einer Seite zu messen.

Die API unterstützt Timing-Informationen für die folgenden Elemente:

- {{htmlelement("img")}} Elemente,
- {{SVGElement("image")}} Elemente innerhalb eines {{SVGElement("svg")}},
- [poster](/de/docs/Web/HTML/Reference/Elements/video#poster) Bilder von {{htmlelement("video")}} Elementen,
- Elemente, die eine inhaltliche {{cssxref("background-image")}} Eigenschaft mit einem URL-Wert für eine Ressource haben, die tatsächlich verfügbar ist, und
- Gruppen von Textknoten, wie beispielsweise ein {{htmlelement("p")}}.

Der Autor kennzeichnet ein Element zur Beobachtung, indem er das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut auf das Element setzt.

`PerformanceElementTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceElementTiming.element`](/de/docs/Web/API/PerformanceElementTiming/element) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element repräsentiert, über das wir Informationen zurückgeben.
- [`PerformanceElementTiming.id`](/de/docs/Web/API/PerformanceElementTiming/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements ist.
- [`PerformanceElementTiming.identifier`](/de/docs/Web/API/PerformanceElementTiming/identifier) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/for) Attributs auf dem Element darstellt.
- [`PerformanceElementTiming.intersectionRect`](/de/docs/Web/API/PerformanceElementTiming/intersectionRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das Rechteck des Elements innerhalb des Viewports ist.
- [`PerformanceElementTiming.loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Ladezeit des Elements.
- [`PerformanceElementTiming.naturalHeight`](/de/docs/Web/API/PerformanceElementTiming/naturalHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Höhe des Bildes ist, wenn dies auf ein Bild angewendet wird, 0 für Text.
- [`PerformanceElementTiming.naturalWidth`](/de/docs/Web/API/PerformanceElementTiming/naturalWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Breite des Bildes ist, wenn dies auf ein Bild angewendet wird, 0 für Text.
- [`PerformanceElementTiming.paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime) {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als die Rendering-Phase endete und die Mal-Phase begann.
- [`PerformanceElementTiming.presentationTime`](/de/docs/Web/API/PerformanceElementTiming/presentationTime) {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als das Element tatsächlich auf dem Bildschirm gezeichnet wurde.
- [`PerformanceElementTiming.renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Rendering-Zeit des Elements.
- [`PerformanceElementTiming.url`](/de/docs/Web/API/PerformanceElementTiming/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die ursprüngliche URL der Ressourcenanfrage für Bilder ist, 0 für Text.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften, qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` auf dieses Interface nicht zutrifft.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"element"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"image-paint"` für Bilder und `"text-paint"` für Text zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von `renderTime` dieses Eintrags zurück, wenn er nicht `0` ist, andernfalls den Wert von `loadTime` dieses Eintrags.

## Instanz-Methoden

- [`PerformanceElementTiming.toJSON()`](/de/docs/Web/API/PerformanceElementTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceElementTiming` Objekts zurück.

## Beispiele

### Beobachtung der Rendering-Zeit von spezifischen Elementen

In diesem Beispiel werden zwei Elemente beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Leistungseinträge des Typs `"element"` zu erhalten, und das `buffered` Flag wird verwendet, um auf Daten vor der Erstellung des Beobachters zuzugreifen.

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

### Beobachtung separater Mal- und Präsentationszeiten

Die Eigenschaften `paintTime` und `presentationTime` ermöglichen es Ihnen, spezifische Timing-Werte für den Beginn der Malphase und das Zeichnen des Elements auf dem Bildschirm abzurufen. Die `paintTime` ist weitgehend interoperabel, während die `presentationTime` von der Implementierung abhängt.

Dieses Beispiel nutzt einen `PerformanceObserver`, um alle Leistungseinträge des Typs `"element"` zu beobachten (denken Sie daran, dass Elemente `elementtiming` Attribute haben müssen, um beobachtet zu werden). Wir überprüfen die Unterstützung für `paintTime` und `presentationTime` und rufen diese Werte ab, wenn sie verfügbar sind. In nicht unterstützenden Browsern ruft der Code die `renderTime` oder `loadTime` ab, je nach dem, was unterstützt wird.

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

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) HTML-Attribut
