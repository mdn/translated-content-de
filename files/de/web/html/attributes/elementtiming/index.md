---
title: "HTML-Attribut: elementtiming"
short-title: elementtiming
slug: Web/HTML/Attributes/elementtiming
l10n:
  sourceCommit: b138fb464010633f2d80093211465195cd2d4a28
---

{{HTMLSidebar}}

Das **`elementtiming`**-Attribut wird verwendet, um anzuzeigen, dass ein Element für die Nachverfolgung durch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekte mit dem Typ `"element"` markiert ist. Für weitere Details siehe die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle.

Dieses Attribut kann auf {{htmlelement("img")}}, {{SVGElement("image")}} Elemente innerhalb eines {{SVGElement("svg")}}, Vorschaubilder von {{htmlelement("video")}}-Elementen, Elemente mit einem {{cssxref("background-image")}} und Elemente, die Textknoten enthalten, wie zum Beispiel ein {{htmlelement("p")}}, angewendet werden.

Im DOM wird dieses Attribut als [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) widergespiegelt.

## Verwendung

Der für `elementtiming` angegebene Wert wird zu einem Bezeichner für das beobachtete Element.

```html
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

Gute Kandidaten für Elemente, die Sie beobachten könnten, sind:

- Das Hauptbild eines Artikels.
- Der Titel eines Blogeintrags
- Bilder in einem Karussell für eine Shopping-Website.
- Das Vorschaubild für das Hauptvideo auf einer Seite.

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
