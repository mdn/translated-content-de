---
title: Verlinkung
slug: Web/SVG/Linking
l10n:
  sourceCommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

{{SVGRef}}

Das Attribut {{SVGAttr("target")}} auf dem SVG-Element {{SVGElement("a")}} funktioniert in Mozilla Firefox 1.5 nicht. Wenn SVG-Dokumente innerhalb eines übergeordneten HTML-Dokuments mit dem Tag eingebettet werden:

page1.html:

```html
<html lang="en">
  <body>
    <p>Dies ist ein SVG-Button:</p>
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

Die Spezifikation besagt, dass der Browser zum HTML-Dokument page2.html navigieren sollte, wenn auf die Button-Grafiken geklickt wird. Allerdings funktioniert `target` nicht mit Mozillas Implementierung des SVG `<a>`-Elements in Firefox 1.5. (Das Problem wird in Firefox 2.0 behoben sein.)

Das resultierende Verhalten in Moz SVG ist jedoch, dass page2.html in den Frame geladen wird, in dem sich der SVG-Button befand (d.h. page2.html wird jetzt innerhalb eines 100x50 Pixel großen Frames in page1.html eingebettet).

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

Ein Beispiel für diese Lösung finden Sie unter [www.codedread.com](https://www.codedread.com/).
