---
title: SVG in HTML Einführung
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
l10n:
  sourceCommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{SVGRef}}

## Übersicht

Dieser Artikel und das dazugehörige Beispiel zeigen, wie Sie eingebettetes [SVG](/de/docs/Web/SVG) verwenden können.

## Einfaches Beispiel

Um ein eingebettetes SVG in eine HTML-Datei einzufügen, platzieren Sie die gesamte SVG-Datei in der HTML-Datei.

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

Die Seite ist reguläres HTML und CSS mit einem einzelnen SVG. Der einzige interessante Teil ist das `<svg>`-Element, das es enthält. Dieses Element und seine Kinder sind im SVG-Namensraum deklariert. Das Element enthält einen Farbverlauf und zwei mit dem Farbverlauf gefüllte Formen. Die Farbverlauf-Farbstopps haben ihre Farben durch CSS gesetzt.

Es gibt drei Attribute und ein verschachteltes Element, die beachtenswert sind:

1. Das [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox)-Attribut etabliert ein logisches Koordinatensystem, auf das sich die Koordinaten des SVG-Bildes beziehen. In diesem Fall ist unser Bild in einem 100 x 100 Ansichtsfenster angelegt.

2. Das [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio)-Attribut gibt an, dass das {{glossary("Seitenverhältnis")}} beibehalten werden muss, indem das Bild in der verfügbaren Größe zentriert wird, es auf die maximale Höhe oder Breite skaliert wird und dann ein Überlauf abgeschnitten wird.

3. Die Einbeziehung von [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) sorgt dafür, dass unterstützende Technologien das SVG als Bild behandeln.

4. Ein [`<title>`](/de/docs/Web/SVG/Element/title) innerhalb eines SVG bietet die zugängliche, kurze Textbeschreibung der Grafik. Der Titeltext wird nicht gerendert, aber Browser können ihn als Tooltip anzeigen, wenn das SVG mit der Maus überfahren wird. Das `<title>` sollte das erste Element nach dem `<svg>`-Öffnungstag sein.

## Beste Praktiken

Wenn ein SVG über ein {{HTMLElement('img')}}-Element eingefügt wird, bietet das `alt`-Attribut alternativen Text, der das Bild zugänglich macht. Eingebettetes SVG unterstützt das `alt`-Attribut nicht. Es unterstützt jedoch mehrere andere Möglichkeiten, um es zugänglich zu machen. Bei eingebetteten SVGs ist die Quelle im DOM verfügbar, was bedeutet, dass die gesamte Markup innerhalb einer eingebetteten SVG-Datei für das Accessibility Object Model, oder AOM, zugänglich ist. Die Aufnahme des `<title>`-Elements bietet diesen alternativen Text.

Wenn das Bild mehr als einen kurzen Titel vermittelt, fügen Sie eine längere Beschreibung mit dem [`<desc>`](/de/docs/Web/SVG/Element/desc)-Element hinzu. Das `<desc>`-Element bietet eine zugängliche, ausführliche Textbeschreibung. Ähnlich wie `<title>`-Text wird der Text innerhalb von `<desc>` nicht auf dem Bildschirm gerendert.

Wenn das SVG über sichtbaren Text beschriftet werden kann, verweisen Sie auf diesen Text mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut. Alternativ schließen Sie das `aria-labelledby`-Attribut mit der [`id`](/de/docs/Web/SVG/Attribute/id) des `<title>` ein.

```html
<svg viewBox="0 0 100 125" role="img" aria-labelledby="svgTitle svgDescription">
  <title id="svgTitle">Handbuch</title>
  <desc id="svgDescription">
    Ein unspezifiziertes zwölfseitiges Heft, geöffnet auf der mittleren Seite.
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

In unserem Beispiel haben wir sowohl die Beschreibung als auch den Titel in unser `aria-labelledby`-Attribut aufgenommen, da es eine bessere Unterstützung der unterstützenden Technologien bietet als `aria-describedby`.

## Siehe auch

- [Einführung in SVG](/de/docs/Web/SVG/Tutorial/Getting_Started)
