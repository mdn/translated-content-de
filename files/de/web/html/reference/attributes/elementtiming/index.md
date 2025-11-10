---
title: "HTML-Attribut: elementtiming"
short-title: elementtiming
slug: Web/HTML/Reference/Attributes/elementtiming
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`elementtiming`**-Attribut wird verwendet, um anzugeben, dass ein Element für die Überwachung durch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekte mit dem Typ "element" markiert ist. Für weitere Details siehe die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle.

Dieses Attribut kann auf {{htmlelement("img")}}, {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}}, Posterbilder von {{htmlelement("video")}}-Elementen, Elemente mit einem {{cssxref("background-image")}} und Elemente, die Textknoten enthalten, wie ein {{htmlelement("p")}}, angewendet werden.

Im DOM wird dieses Attribut als [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) widergespiegelt.

## Anwendungshinweise

Der für `elementtiming` angegebene Wert wird zu einem Bezeichner für das beobachtete Element.

```html
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

Gute Kandidaten für Elemente, die Sie beobachten möchten, sind:

- Das Hauptbild für einen Artikel.
- Ein Blogpost-Titel
- Bilder in einem Karussell für eine Einkaufsseite.
- Das Posterbild für das Hauptvideo auf einer Seite.

## Beispiele

```html
<img
  alt="Alt for a main blog post image"
  src="my-massive-image.jpg"
  elementtiming="Main image" />

<p elementtiming="important-text">Some very important information.</p>
```

## Siehe auch

- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming)
