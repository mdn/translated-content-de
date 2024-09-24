---
title: "HTML-Attribut: elementtiming"
short-title: elementtiming
slug: Web/HTML/Attributes/elementtiming
l10n:
  sourceCommit: b138fb464010633f2d80093211465195cd2d4a28
---

{{HTMLSidebar}}

Das **`elementtiming`**-Attribut wird verwendet, um anzugeben, dass ein Element zur Verfolgung durch {{domxref("PerformanceObserver")}}-Objekte mit dem Typ `"element"` gekennzeichnet ist. Weitere Details finden Sie in der {{domxref("PerformanceElementTiming")}}-Schnittstelle.

Dieses Attribut kann auf {{htmlelement("img")}}, {{SVGElement("image")}}-Elemente innerhalb eines {{SVGElement("svg")}}, Vorschaubilder von {{htmlelement("video")}}-Elementen, Elemente mit einem {{cssxref("background-image")}} und Elemente, die Textknoten enthalten, wie beispielsweise ein {{htmlelement("p")}}, angewendet werden.

Im DOM wird dieses Attribut als {{domxref("Element.elementTiming")}} widergespiegelt.

## Verwendung

Der für `elementtiming` angegebene Wert wird zu einem Bezeichner für das beobachtete Element.

```html
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

Gute Kandidaten für Elemente, die Sie beobachten möchten, sind:

- Das Hauptbild eines Artikels.
- Der Titel eines Blogbeitrags
- Bilder in einem Karussell für eine Shopping-Seite.
- Das Vorschaubild für das Hauptvideo auf einer Seite.

## Beispiele

```html
<img
  alt="Alt für ein Hauptbild eines Blogbeitrags"
  src="my-massive-image.jpg"
  elementtiming="Hauptbild" />

<p elementtiming="important-text">Einige sehr wichtige Informationen.</p>
```

## Siehe auch

- {{domxref("PerformanceElementTiming")}}
- {{domxref("Element.elementTiming")}}
