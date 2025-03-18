---
title: SVG-Image-Element
slug: Web/SVG/Tutorials/SVG_from_scratch/Image_element
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

Das SVG-{{ SVGElement("image") }}-Element ermöglicht es, Rasterbilder innerhalb eines SVG-Objekts darzustellen.

In diesem einfachen Beispiel wird ein .jpg-Bild, das durch ein {{ SVGAttr("href") }}-Attribut referenziert wird, innerhalb eines SVG-Objekts dargestellt:

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

Es gibt einige wichtige Punkte zu beachten (referenziert von den [W3 Spezifikationen](https://www.w3.org/TR/SVG/struct.html#ImageElement)):

- Wenn Sie die Attribute `x` oder `y` nicht setzen, werden sie auf `0` gesetzt.
- Wenn Sie die Attribute `height` oder `width` nicht setzen, werden sie auf `0` gesetzt.
- Wenn eines der Attribute `height` oder `width` den Wert `0` hat, wird die Darstellung des Bildes deaktiviert.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}
