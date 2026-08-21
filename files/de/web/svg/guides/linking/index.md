---
title: Verlinken
slug: Web/SVG/Guides/Linking
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Das {{SVGAttr("target")}}-Attribut im SVG-{{SVGElement("a")}}-Element funktioniert in Mozilla Firefox 1.5 nicht. Wenn SVG-Dokumente innerhalb eines übergeordneten HTML-Dokuments mit dem Tag eingebettet werden:

page1.html:

```html
<html lang="en">
  <body>
    <p>This is an SVG button:</p>
    <object
      width="100"
      height="50"
      type="image/svg+xml"
      data="button.svg"></object>
  </body>
</html>
```

button.svg:

```xml
<?xml version="1.1" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <a href="page2.html" target="_top">
    <g>
      <!-- button graphical elements here -->
    </g>
  </a>
</svg>
```

Laut Spezifikation sollte der Browser zur HTML-Dokumentseite page2.html navigieren, wenn auf die Schaltflächengrafik geklickt wird. Allerdings funktioniert `target` in Mozillas Implementierung des SVG-`<a>`-Elements in Firefox 1.5 nicht. (Das Problem wird in Firefox 2.0 behoben sein.)

Das resultierende Verhalten in Moz SVG ist jedoch, dass page2.html in den Rahmen geladen wird, in dem sich die SVG-Schaltfläche befand (d.h. Sie würden jetzt page2.html in einem 100x50-Pixel-Rahmen innerhalb von page1.html eingebettet haben).

Um dies zu umgehen, ist ein wenig unschönes JavaScript-Hacking erforderlich:

button.svg:

```xml
<?xml version="1.1" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <g onclick="top.document.href='page2.html'" cursor="pointer">
    <!-- button graphical elements here -->
  </g>
</svg>
```

## Beispiel

Für ein Beispiel, wie diese Lösung funktioniert, siehe [www.codedread.com](https://www.codedread.com/).
