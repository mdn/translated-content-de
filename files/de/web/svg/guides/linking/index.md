---
title: Verlinkung
slug: Web/SVG/Guides/Linking
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das {{SVGAttr("target")}}-Attribut des SVG {{SVGElement("a")}}-Elements funktioniert nicht in Mozilla Firefox 1.5. Wenn SVG-Dokumente innerhalb eines übergeordneten HTML-Dokuments eingebettet werden, verwenden Sie den Tag:

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

Die Spezifikation besagt, dass der Browser zur HTML-Dokumentseite page2.html navigieren sollte, wenn auf die Schaltflächengrafik geklickt wird. Allerdings funktioniert `target` nicht mit Mozillas Implementierung des SVG `<a>`-Elements in Firefox 1.5. (Das Problem wird in Firefox 2.0 behoben.)

Das resultierende Verhalten in Moz SVG ist jedenfalls, dass page2.html in den Rahmen geladen wird, in dem die SVG-Schaltfläche sich befand (d.h. Sie hätten nun page2.html eingebettet in einen 100x50 Pixel großen Rahmen innerhalb von page1.html).

Um dies zu umgehen, bedarf es ein wenig unschönem JavaScript-Hack:

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

Ein Beispiel dafür, wie diese Lösung funktioniert, finden Sie unter [www.codedread.com](https://www.codedread.com/).
