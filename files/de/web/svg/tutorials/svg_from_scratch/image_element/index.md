---
title: SVG image-Element
slug: Web/SVG/Tutorials/SVG_from_scratch/Image_element
l10n:
  sourceCommit: 8d0c8728f49f2a0577ca17910f2149d6dd36b37e
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

Das SVG-{{ SVGElement("image") }}-Element ermöglicht es, Rasterbilder innerhalb eines SVG-Objekts zu rendern.

In diesem einfachen Beispiel wird ein .jpg-Bild, das durch ein {{ SVGAttr("href") }}-Attribut referenziert wird, innerhalb eines SVG-Objekts gerendert:

```xml
<svg width="5cm" height="4cm"
     xmlns="http://www.w3.org/2000/svg">
  <image href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

Es gibt einige wichtige Punkte zu beachten:

- Wenn Sie die Attribute `x` oder `y` nicht festlegen, werden sie auf `0` gesetzt.
- Wenn Sie die Attribute `height` oder `width` nicht festlegen, werden sie auf `0` gesetzt.
- Wenn die Attribute `height` oder `width` den Wert `0` haben, wird das Rendering des Bildes deaktiviert.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}
