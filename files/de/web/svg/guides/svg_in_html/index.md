---
title: Einführung in SVG in HTML
slug: Web/SVG/Guides/SVG_in_HTML
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Dieser Artikel und das zugehörige Beispiel zeigen, wie man eingebettetes [SVG](/de/docs/Web/SVG) verwendet.

## Einfaches Beispiel

Um ein eingebettetes SVG in einer HTML-Datei zu verwenden, fügen Sie die gesamte SVG-Datei in die HTML-Datei ein.

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
      <rect x="0" y="0" width="100" height="100" fill="url(#gradient)" />
      <circle cx="50" cy="50" r="30" fill="url(#gradient)" />
    </svg>
  </body>
</html>
```

## Diskussion

Die Seite besteht aus regulärem HTML und CSS mit einem einzigen SVG. Der einzige interessante Teil ist das `<svg>`-Element, das es enthält. Dieses Element und seine Kinder sind im SVG-Namespace deklariert. Das Element enthält einen Farbverlauf und zwei Formen, die mit dem Farbverlauf gefüllt sind. Die Farben der Farbverlaufsstops werden durch CSS festgelegt.

Es gibt drei Attribute und ein verschachteltes Element, die beachtet werden sollten:

1. Das [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut legt ein logisches Koordinatensystem fest, auf das sich die Koordinaten des SVG-Bildes beziehen. In diesem Fall wird unser Bild in einem Ansichtsbereich von 100 mal 100 angeordnet.

2. Das [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio)-Attribut gibt an, dass das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten werden muss, indem das Bild in der verfügbaren Größe zentriert wird, in der maximalen Höhe oder Breite skaliert wird und dann überstehender Bereich abgeschnitten wird.

3. Durch das Hinzufügen von [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) wird sichergestellt, dass unterstützende Technologien das SVG als Bild behandeln.

4. Ein [`<title>`](/de/docs/Web/SVG/Reference/Element/title) innerhalb eines SVG bietet die zugängliche, kurze Textbeschreibung der Grafik. Der Titeltext wird nicht gerendert, aber Browser können ihn als Tooltip anzeigen, wenn das SVG überfahren wird. Das `<title>` sollte das erste Element nach dem `<svg>` öffnenden Tag sein.

## Best Practices

Wenn ein SVG über ein {{HTMLElement('img')}}-Element eingebunden wird, bietet das `alt`-Attribut alternativen Text, der das Bild zugänglich macht. Eingebettetes SVG unterstützt das `alt`-Attribut nicht. Es unterstützt jedoch mehrere andere Möglichkeiten, es zugänglich zu machen. Bei eingebetteten SVGs ist der Quellcode im DOM verfügbar, was bedeutet, dass der gesamte Markup innerhalb einer eingebetteten SVG-Datei dem Accessibility Object Model oder AOM zugänglich ist. Mit dem `<title>`-Element wird dieser alternative Text bereitgestellt.

Wenn das Bild mehr als einen kurzen Titel vermittelt, fügen Sie eine längere Beschreibung mit dem [`<desc>`](/de/docs/Web/SVG/Reference/Element/desc)-Element ein. Das `<desc>`-Element bietet eine zugängliche, langtextige Beschreibung. Ähnlich wie der `<title>`-Text wird der Text innerhalb des `<desc>` nicht auf dem Bildschirm angezeigt.

Wenn das SVG durch sichtbaren Text beschriftet werden kann, verweisen Sie mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut auf diesen Text. Alternativ enthalten Sie das `aria-labelledby`-Attribut mit der [`id`](/de/docs/Web/SVG/Reference/Attribute/id) des `<title>`.

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
        stroke: #666666;
        transform-origin: top;
      }
    </style>
  </defs>

  <rect width="36" height="60" x="13" y="18" ry="2" transform="skewy(24deg)" />
  <rect width="39" height="60" x="11" y="20" ry="2" transform="skewY(18deg)" />
  <rect width="42" height="90" x="8" y="22" ry="2" transform="skewY(12deg)" />
  <rect width="36" height="60" x="50" y="18" ry="2" transform="skewY(-24deg)" />
  <rect width="39" height="60" x="50" y="20" ry="2" transform="skewY(-18deg)" />
  <rect width="42" height="90" x="50" y="22" ry="2" transform="skewY(-12deg)" />
</svg>
```

Wenn das SVG durch sichtbaren Text beschrieben werden kann, kann dieser Text mit dem [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut referenziert werden. Wenn aria-describedby genutzt wird, hat es Vorrang vor `<desc>`.

In unserem Beispiel haben wir sowohl die Beschreibung als auch den Titel in unser `aria-labelledby`-Attribut aufgenommen, da es eine bessere Unterstützung durch unterstützende Technologien bietet als `aria-describedby`.

## Siehe auch

- [Erste Schritte mit SVG](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started)
