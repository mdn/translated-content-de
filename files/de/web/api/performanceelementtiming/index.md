---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das **`PerformanceElementTiming`** Interface enthält Informationen zur Renderzeit für Bild- und Textknotenelemente, die der Entwickler mit einem [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut zur Beobachtung markiert hat.

## Beschreibung

Das Ziel der Element Timing API ist es, Webentwicklern oder Analysetools die Fähigkeit zu geben, die Rendering-Zeitstempel von kritischen Elementen auf einer Seite zu messen.

Die API unterstützt Zeitinformationen für die folgenden Elemente:

- {{htmlelement("img")}} Elemente,
- {{SVGElement("image")}} Elemente innerhalb eines {{SVGElement("svg")}},
- [Poster](/de/docs/Web/HTML/Element/video#poster)-Bilder von {{htmlelement("video")}} Elementen,
- Elemente, die ein {{cssxref("background-image")}} haben, und
- Gruppen von Textknoten, wie z.B. ein {{htmlelement("p")}}.

Der Autor markiert ein Element zur Beobachtung, indem er das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut auf dem Element hinzufügt.

`PerformanceElementTiming` erbt von {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden {{domxref("PerformanceEntry")}} Eigenschaften für Leistungseintragstypen durch Qualifizierung:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` auf dieses Interface nicht zutrifft.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"element"` zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"image-paint"` für Bilder und `"text-paint"` für Text zurück.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von {{domxref("PerformanceElementTiming.renderTime", "renderTime")}} dieses Eintrags zurück, wenn er nicht `0` ist, andernfalls den Wert von {{domxref("PerformanceElementTiming.loadTime", "loadTime")}} dieses Eintrags.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- {{domxref("PerformanceElementTiming.element")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("Element")}}, das das Element repräsentiert, über das wir Informationen zurückgeben.
- {{domxref("PerformanceElementTiming.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Elements ist.
- {{domxref("PerformanceElementTiming.identifier")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des [`elementtiming`](/de/docs/Web/HTML/Attributes/for) Attributs auf dem Element ist.
- {{domxref("PerformanceElementTiming.intersectionRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMRectReadOnly")}}, der das Rechteck des Elements innerhalb des Ansichtsfensters ist.
- {{domxref("PerformanceElementTiming.loadTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} mit der Ladezeit des Elements.
- {{domxref("PerformanceElementTiming.naturalHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein 32-Bit-Ganzzahlwert (unsigned long), der die intrinsische Höhe des Bildes ist, wenn es auf ein Bild angewendet wird, 0 für Text.
- {{domxref("PerformanceElementTiming.naturalWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein 32-Bit-Ganzzahlwert (unsigned long), der die intrinsische Breite des Bildes ist, wenn es auf ein Bild angewendet wird, 0 für Text.
- {{domxref("PerformanceElementTiming.renderTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} mit der Renderzeit des Elements.
- {{domxref("PerformanceElementTiming.url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die ursprüngliche URL der Ressourcenanforderung für Bilder ist, 0 für Text.

## Instanz-Methoden

- {{domxref("PerformanceElementTiming.toJSON()")}} {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceElementTiming` Objekts zurück.

## Beispiele

### Beobachtung der Renderzeit spezifischer Elemente

In diesem Beispiel werden zwei Elemente durch das Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attributs beobachtet. Ein {{domxref("PerformanceObserver")}} wird registriert, um alle Leistungseinträge des Typs `"element"` zu erhalten, und das `buffered` Flag wird verwendet, um auf Daten von vor der Erstellung des Observers zuzugreifen.

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

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) HTML Attribut
