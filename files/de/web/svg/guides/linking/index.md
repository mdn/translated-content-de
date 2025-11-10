---
title: Verlinkung
slug: Web/SVG/Guides/Linking
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

Das {{SVGAttr("target")}} Attribut auf dem SVG {{SVGElement("a")}} Element funktioniert in Mozilla Firefox 1.5 nicht. Wenn SVG-Dokumente innerhalb eines übergeordneten HTML-Dokuments mit dem Tag eingebettet werden:

page1.html:

```html
<html lang="en">
  <body>
    <p>This is a SVG button:</p>
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

Die Spezifikation besagt, dass der Browser zum HTML-Dokument page2.html navigieren sollte, wenn auf die Schaltflächengrafiken geklickt wird. Allerdings funktioniert `target` nicht mit Mozillas Implementierung des SVG `<a>` Elements in Firefox 1.5. (Das Problem wird in Firefox 2.0 behoben.)

Das resultierende Verhalten in Moz SVG ist, dass page2.html in dem Frame geladen wird, in dem sich die SVG-Schaltfläche befand (d.h. Sie hätten jetzt page2.html eingebettet in einem 100x50 Pixel großen Frame innerhalb von page1.html).

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
