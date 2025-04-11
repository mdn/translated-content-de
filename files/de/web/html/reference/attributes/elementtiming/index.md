---
title: "HTML-Attribut: elementtiming"
short-title: elementtiming
slug: Web/HTML/Reference/Attributes/elementtiming
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`elementtiming`**-Attribut wird verwendet, um anzuzeigen, dass ein Element zum Tracking durch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekte mit dem Typ `"element"` markiert ist. Weitere Details finden Sie in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle.

Dieses Attribut kann auf {{htmlelement("img")}}, {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}}, Posterbilder von {{htmlelement("video")}}-Elementen, Elemente mit einem {{cssxref("background-image")}} und auf Elemente, die Textknoten enthalten, wie ein {{htmlelement("p")}}, angewendet werden.

Im DOM wird dieses Attribut als [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) widergespiegelt.

## Verwendung

Der Wert, der für `elementtiming` angegeben wird, wird zu einem Bezeichner für das beobachtete Element.

```html
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

Gute Kandidaten für Elemente, die Sie möglicherweise beobachten möchten, sind:

- Das Hauptbild für einen Artikel.
- Der Titel eines Blogbeitrags.
- Bilder in einem Karussell für eine Shopping-Seite.
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
