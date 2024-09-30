---
title: Verlinken
slug: Web/SVG/Linking
l10n:
  sourceCommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

{{SVGRef}}

Das Attribut {{SVGAttr("target")}} im SVG-Element {{SVGElement("a")}} funktioniert in Mozilla Firefox 1.5 nicht. Wenn SVG-Dokumente innerhalb eines übergeordneten HTML-Dokuments mithilfe des Tags eingebettet werden:

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

Die Spezifikation besagt, dass der Browser zum HTML-Dokument page2.html navigieren sollte, wenn die Buttongrafik angeklickt wird. Jedoch funktioniert `target` mit Mozillas Implementierung des SVG-`<a>`-Elements in Firefox 1.5 nicht. (Das Problem wird in Firefox 2.0 behoben sein.)

Die resultierende Verhalten in Moz SVG ist jedoch, dass page2.html in den Rahmen geladen wird, in dem sich der SVG-Button befand (d.h. Sie hätten nun page2.html in einem 100x50-Pixel-Rahmen innerhalb von page1.html eingebettet).

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

Ein Beispiel für diese Lösung in Aktion finden Sie auf [www.codedread.com](https://www.codedread.com/).
