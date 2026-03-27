---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das **`PerformanceElementTiming`**-Interface enthält Render-Zeitinformationen für Bild- und Textknoten-Elemente, die der Entwickler mit einem [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut zur Beobachtung versehen hat.

## Beschreibung

Das Ziel der Element Timing API ist es, Webentwicklern oder Analysetools die Möglichkeit zu geben, Rendering-Zeitstempel von kritischen Elementen auf einer Seite zu messen.

Die API unterstützt Zeitinformationen für folgende Elemente:

- {{htmlelement("img")}}-Elemente,
- {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}},
- [poster](/de/docs/Web/HTML/Reference/Elements/video#poster)-Bilder von {{htmlelement("video")}}-Elementen,
- Elemente, die eine inhaltsreiche {{cssxref("background-image")}}-Eigenschaft mit einem URL-Wert für eine tatsächlich verfügbare Ressource haben, und
- Gruppen von Textknoten, wie ein {{htmlelement("p")}}.

Der Autor markiert ein Element zur Beobachtung, indem er das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut am Element hinzufügt.

`PerformanceElementTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceElementTiming.element`](/de/docs/Web/API/PerformanceElementTiming/element) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element repräsentiert, über das Informationen zurückgegeben werden.
- [`PerformanceElementTiming.id`](/de/docs/Web/API/PerformanceElementTiming/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements ist.
- [`PerformanceElementTiming.identifier`](/de/docs/Web/API/PerformanceElementTiming/identifier) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/for)-Attributs am Element darstellt.
- [`PerformanceElementTiming.intersectionRect`](/de/docs/Web/API/PerformanceElementTiming/intersectionRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das Rechteck des Elements im Ansichtsbereich ist.
- [`PerformanceElementTiming.loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Ladezeit des Elements.
- [`PerformanceElementTiming.naturalHeight`](/de/docs/Web/API/PerformanceElementTiming/naturalHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Höhe des Bildes ist, wenn es auf ein Bild angewendet wird, 0 für Text.
- [`PerformanceElementTiming.naturalWidth`](/de/docs/Web/API/PerformanceElementTiming/naturalWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Breite des Bildes ist, wenn es auf ein Bild angewendet wird, 0 für Text.
- [`PerformanceElementTiming.paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als die Rendering-Phase endete und die Malphase begann.
- [`PerformanceElementTiming.presentationTime`](/de/docs/Web/API/PerformanceElementTiming/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als das Element tatsächlich auf dem Bildschirm gezeichnet wurde.
- [`PerformanceElementTiming.renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.
- [`PerformanceElementTiming.url`](/de/docs/Web/API/PerformanceElementTiming/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die initiale URL der Ressourcenanfrage für Bilder ist, 0 für Text.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es diese qualifiziert und einschränkt, wie beschrieben:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` auf dieses Interface nicht anwendbar ist.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"element"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"image-paint"` für Bilder und `"text-paint"` für Text zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieser Eintragung zurück, wenn er nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieser Eintragung.

## Instanz-Methoden

- [`PerformanceElementTiming.toJSON()`](/de/docs/Web/API/PerformanceElementTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceElementTiming`-Objekts zurück.

## Beispiele

### Beobachten der Renderzeit spezifischer Elemente

In diesem Beispiel werden zwei Elemente durch Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributs beobachtet. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge vom Typ `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten von vor der Erzeugung des Observers zuzugreifen.

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

Zwei Einträge werden an die Konsole ausgegeben. Der erste enthält Details zu dem Bild, der zweite Details zum Textknoten.

### Beobachtung separater Mal- und Präsentationszeiten

Die Eigenschaften `paintTime` und `presentationTime` ermöglichen es Ihnen, spezifische Zeiten für den Beginn der Malphase und das Zeichnen des Elements auf dem Bildschirm zu ermitteln. Die `paintTime` ist weitgehend interoperabel, während die `presentationTime` implementierungsabhängig ist.

Dieses Beispiel verwendet einen `PerformanceObserver`, um alle Performance-Einträge vom Typ `"element"` zu beobachten (denken Sie daran, dass Elemente, um beobachtet zu werden, `elementtiming`-Attribute gesetzt haben müssen). Wir prüfen die Unterstützung von `paintTime` und `presentationTime` und ermitteln diese Werte, wenn sie verfügbar sind. In Browsern, die dies nicht unterstützen, ruft der Code je nach Unterstützung die `renderTime` oder `loadTime` ab.

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
