---
title: SVG in HTML Einführung
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
l10n:
  sourceCommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{SVGRef}}

## Übersicht

Dieser Artikel und das dazugehörige Beispiel zeigen, wie man inline [SVG](/de/docs/Web/SVG) verwendet.

## Einfaches Beispiel

Um ein inline SVG in eine HTML-Datei einzubinden, fügen Sie die gesamte SVG-Datei in die HTML-Datei ein.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>SVG Demo</title>
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" role="img">
      <title>A gradient</title>
      <linearGradient id="gradient">
        <stop class="begin" offset="0%" stop-color="red" />
        <stop class="end" offset="100%" stop-color="black" />
      </linearGradient>
      <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
      <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
    </svg>
  </body>
</html>
```

## Diskussion

Die Seite besteht aus regulärem HTML und CSS mit einem einzigen SVG. Der einzige interessante Teil ist das `<svg>`-Element, das es enthält. Dieses Element und seine Kinder sind im SVG-Namespace deklariert. Das Element enthält einen Verlauf und zwei mit dem Verlauf gefüllte Formen. Die Farbe der Verlaufsstopps wird durch CSS festgelegt.

Es gibt drei Attribute und ein geschachteltes Element, die beachtet werden sollten:

1. Das [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox)-Attribut etabliert ein logisches Koordinatensystem, auf das sich die Koordinaten des SVG-Bildes beziehen. In diesem Fall ist unser Bild in einem 100-mal-100-Ansichtsfenster angeordnet.

2. Das [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio)-Attribut legt fest, dass das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beibehalten werden muss, indem das Bild in der verfügbaren Größe zentriert wird. Es wird auf die maximale Höhe oder Breite skaliert, wobei jeder Überlauf abgeschnitten wird.

3. Das Einfügen von [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) stellt sicher, dass unterstützende Technologien das SVG als Bild behandeln.

4. Ein [`<title>`](/de/docs/Web/SVG/Element/title) innerhalb eines SVG bietet die zugängliche, kurztextige Beschreibung der Grafik. Der Titeltext wird nicht gerendert, aber Browser können ihn als Tooltip anzeigen, wenn das SVG gehovt wird. Das `<title>` sollte das erste Element nach dem öffnenden `<svg>`-Tag sein.

## Beste Praktiken

Wenn ein SVG über ein {{HTMLElement('img')}}-Element eingebunden wird, bietet das `alt`-Attribut alternativen Text, der das Bild zugänglich macht. Inline-SVG unterstützt das `alt`-Attribut nicht. Es unterstützt jedoch mehrere andere Möglichkeiten, es zugänglich zu machen. Mit Inline-SVGs steht der Quelltext im DOM zur Verfügung, was bedeutet, dass der gesamte Markup innerhalb einer Inline-SVG-Datei dem Accessibility Object Model oder AOM zugänglich ist. Das Einfügen des `<title>`-Elements bietet diesen alternativen Text.

Wenn das Bild mehr als einen kurzen Titel vermittelt, fügen Sie eine längere Beschreibung mit dem [`<desc>`](/de/docs/Web/SVG/Element/desc)-Element ein. Das `<desc>`-Element bietet eine zugängliche, langtextliche Beschreibung. Ähnlich wie `<title>`-Text wird der Text im `<desc>` nicht auf dem Bildschirm angezeigt.

Wenn das SVG durch sichtbaren Text beschriftet werden kann, verweisen Sie auf diesen Text mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut. Alternativ fügen Sie das `aria-labelledby`-Attribut mit der [`id`](/de/docs/Web/SVG/Attribute/id) des `<title>` hinzu.

```html
<svg viewBox="0 0 100 125" role="img" aria-labelledby="svgTitle svgDescription">
  <title id="svgTitle">Manual</title>
  <desc id="svgDescription">
    A non-descript twelve page booklet opened to the middle page
  </desc>
  <defs>
    <style>
      rect {
        fill: #cccccc;
        stroke: #666;
        transform-origin: top;
      }
    </style>
  </defs>

  <rect
    width="36"
    height="60"
    x="13"
    y="18"
    ry="2"
    style="transform: skewy(24deg)" />
  <rect
    width="39"
    height="60"
    x="11"
    y="20"
    ry="2"
    style="transform: skewy(18deg)" />
  <rect
    width="42"
    height="90"
    x="8"
    y="22"
    ry="2"
    style="transform: skewy(12deg)" />
  <rect
    width="36"
    height="60"
    x="50"
    y="18"
    ry="2"
    style="transform: skewy(-24deg)" />
  <rect
    width="39"
    height="60"
    x="50"
    y="20"
    ry="2"
    style="transform: skewy(-18deg)" />
  <rect
    width="42"
    height="90"
    x="50"
    y="22"
    ry="2"
    style="transform: skewy(-12deg)" />
</svg>
```

Wenn das SVG durch sichtbaren Text beschrieben werden kann, kann dieser Text mit dem [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut referenziert werden. Wenn aria-describedby verwendet wird, hat es Vorrang vor `<desc>`.

In unserem Beispiel haben wir sowohl die Beschreibung als auch den Titel in unser `aria-labelledby`-Attribut aufgenommen, da es eine bessere Unterstützung durch unterstützende Technologien hat als `aria-describedby`.

## Siehe auch

- [Erste Schritte mit SVG](/de/docs/Web/SVG/Tutorial/Getting_Started)
