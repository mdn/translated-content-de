---
title: Verlinkung
slug: Web/SVG/Guides/Linking
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das {{SVGAttr("target")}}-Attribut auf dem SVG-Element {{SVGElement("a")}} funktioniert in Mozilla Firefox 1.5 nicht. Wenn SVG-Dokumente innerhalb eines übergeordneten HTML-Dokuments mit dem Tag eingebettet werden:

page1.html:

```html
<html lang="en">
  <body>
    <p>This is a SVG button:</p>
    <object width="100" height="50" type="image/svg+xml" data="button.svg" />
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

Gemäß der Spezifikation sollte der Browser zur HTML-Dokumentseite page2.html navigieren, wenn die Schaltflächengrafik angeklickt wird. Allerdings funktioniert `target` nicht mit der Implementierung des SVG-`<a>`-Elements in Mozilla Firefox 1.5. (Das Problem wird in Firefox 2.0 behoben sein.)

Das resultierende Verhalten im Moz SVG ist jedoch, dass page2.html in den Frame geladen wird, in dem sich der SVG-Knopf befand (d.h. Sie hätten nun page2.html innerhalb eines 100x50 Pixel großen Frames in page1.html eingebettet).

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

Ein Beispiel für diese Lösung in Aktion finden Sie unter [www.codedread.com](https://www.codedread.com/).
