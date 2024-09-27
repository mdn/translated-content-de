---
title: SVG-Bildelement
slug: Web/SVG/Tutorial/SVG_Image_Tag
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}

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

Es gibt einige wichtige Dinge zu beachten (referenziert aus den [W3 Spezifikationen](https://www.w3.org/TR/SVG/struct.html#ImageElement)):

- Wenn Sie die `x`- oder `y`-Attribute nicht setzen, werden sie auf `0` gesetzt.
- Wenn Sie die `height`- oder `width`-Attribute nicht setzen, werden sie auf `0` gesetzt.
- Ein `height`- oder `width`-Attribut von `0` wird die Darstellung des Bildes deaktivieren.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}
