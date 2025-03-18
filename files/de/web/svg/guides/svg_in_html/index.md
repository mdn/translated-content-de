---
title: Einführung in SVG in HTML
slug: Web/SVG/Guides/SVG_in_HTML
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Dieser Artikel und das dazugehörige Beispiel zeigen, wie Sie eingebettetes [SVG](/de/docs/Web/SVG) verwenden können.

## Einfaches Beispiel

Um ein eingebettetes SVG in eine HTML-Datei einzufügen, kopieren Sie die gesamte SVG-Datei in die HTML-Datei.

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

Die Seite ist reguläres HTML und CSS mit einem einzelnen SVG. Der einzige interessante Teil ist das `<svg>`-Element, das es enthält. Dieses Element und seine Kinder sind im SVG-Namespace deklariert. Das Element enthält einen Verlauf und zwei Formen, die mit dem Verlauf gefüllt sind. Die Farbstopps des Verlaufs haben ihre Farben durch CSS festgelegt.

Es gibt drei Attribute und ein verschachteltes Element, die beachtenswert sind:

1. Das [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut schafft ein logisches Koordinatensystem, das relativ zu den Koordinaten des SVG-Bildes ist. In diesem Fall ist unser Bild in einem 100x100-Anzeigefenster angeordnet.

2. Das [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio)-Attribut legt fest, dass das {{Glossary("aspect_ratio", "Seitenverhältnis")}} erhalten bleiben muss, indem das Bild in der verfügbaren Größe zentriert wird, auf die maximale Höhe oder Breite skaliert und dann etwaiger Überlauf abgeschnitten wird.

3. Die Einbindung von [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) stellt sicher, dass unterstützende Technologien das SVG als Bild behandeln.

4. Ein [`<title>`](/de/docs/Web/SVG/Reference/Element/title) innerhalb eines SVGs bietet die zugängliche, kurze Textbeschreibung der Grafik. Der Titeltext wird nicht gerendert, aber Browser können ihn als Tooltip anzeigen, wenn das SVG überfahren wird. Das `<title>` sollte das erste Element nach dem Öffnungstag des `<svg>` sein.

## Beste Praktiken

Wenn ein SVG über ein {{HTMLElement('img')}}-Element eingebunden wird, bietet das `alt`-Attribut alternativen Text, der das Bild zugänglich macht. Eingebettetes SVG unterstützt das `alt`-Attribut nicht. Aber es unterstützt mehrere andere Möglichkeiten, es zugänglich zu machen. Bei eingebetteten SVGs ist der Quellcode im DOM verfügbar, was bedeutet, dass der gesamte Markup innerhalb einer eingebetteten SVG-Datei für das Accessibility Object Model (AOM) zugänglich ist. Die Einbindung des `<title>`-Elements bietet diesen alternativen Text.

Wenn das Bild mehr als einen kurzen Titel vermittelt, fügen Sie eine längere Beschreibung mit dem [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Element ein. Das `<desc>`-Element bietet eine zugängliche, lange Textbeschreibung. Ähnlich wie beim `<title>`-Text wird der Text innerhalb des `<desc>` nicht auf dem Bildschirm gerendert.

Wenn das SVG durch sichtbaren Text benannt werden kann, verweisen Sie auf diesen Text mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut. Alternativ fügen Sie das `aria-labelledby`-Attribut mit der [`id`](/de/docs/Web/SVG/Reference/Attribute/id) des `<title>` ein.

```html
<svg viewBox="0 0 100 125" role="img" aria-labelledby="svgTitle svgDescription">
  <title id="svgTitle">Manual</title>
  <desc id="svgDescription">
    A nondescript twelve page booklet opened to the middle page
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

Wenn das SVG durch sichtbaren Text beschrieben werden kann, kann dieser Text mit dem [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut referenziert werden. Wenn aria-describedby verwendet wird, hat es Vorrang vor `<desc>`.

In unserem Beispiel haben wir sowohl die Beschreibung als auch den Titel in unserem `aria-labelledby`-Attribut aufgenommen, da es eine bessere Unterstützung von unterstützenden Technologien als `aria-describedby` hat.

## Siehe auch

- [Erste Schritte mit SVG](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started)
