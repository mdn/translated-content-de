---
title: SVG image-Element
slug: Web/SVG/Tutorials/SVG_from_scratch/Image_element
l10n:
  sourceCommit: a988fe7e721539634bad936da7259ffbad37d0e5
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

Das SVG-{{ SVGElement("image") }}-Element ermöglicht das Rendern von Rasterbildern innerhalb eines SVG-Objekts.

In diesem einfachen Beispiel wird ein .jpg-Bild, das durch ein {{ SVGAttr("href") }}-Attribut referenziert wird, innerhalb eines SVG-Objekts gerendert:

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg">
  <image href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

Es gibt einige wichtige Punkte zu beachten:

- Wenn Sie die Attribute `x` oder `y` nicht setzen, werden diese auf `0` gesetzt.
- Wenn Sie die Attribute `height` oder `width` nicht setzen, werden diese auf `0` gesetzt.
- Ein `height`- oder `width`-Attribut von `0` wird das Rendern des Bildes deaktivieren.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}
