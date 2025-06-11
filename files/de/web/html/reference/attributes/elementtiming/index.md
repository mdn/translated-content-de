---
title: "HTML-Attribut: elementtiming"
short-title: elementtiming
slug: Web/HTML/Reference/Attributes/elementtiming
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Das **`elementtiming`**-Attribut wird verwendet, um anzugeben, dass ein Element zur Verfolgung durch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekte mit dem Typ `"element"` markiert ist. Weitere Details finden Sie in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle.

Dieses Attribut kann auf {{htmlelement("img")}}, {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}}, Posterbilder von {{htmlelement("video")}}-Elementen, Elemente mit einem {{cssxref("background-image")}} und Elemente, die Textknoten enthalten, wie z.B. ein {{htmlelement("p")}}, angewendet werden.

Im DOM wird dieses Attribut als [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) widergespiegelt.

## Hinweise zur Verwendung

Der für `elementtiming` angegebene Wert wird zu einem Bezeichner für das beobachtete Element.

```html
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

Gute Kandidaten für Elemente, die Sie beobachten möchten, sind:

- Das Hauptbild eines Artikels.
- Ein Blog-Beitragstitel
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
