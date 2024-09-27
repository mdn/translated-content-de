---
title: requiredFeatures
slug: Web/SVG/Attribute/requiredFeatures
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{SVGRef}}{{Deprecated_Header}}

Das **`requiredFeatures`** Attribut nimmt eine Liste von Merkmal-Strings an, wobei die einzelnen Strings durch Leerzeichen getrennt sind. Es bestimmt, ob alle angegebenen Merkmale vom Browser unterstützt werden; wenn alle unterstützt werden, wird das Attribut zu `true` ausgewertet und das Element wird gerendert; andernfalls wird das Attribut zu `false` ausgewertet und das aktuelle Element sowie seine Kinder werden übersprungen und somit nicht gerendert. Dies bietet eine Möglichkeit, SVG so zu gestalten, dass es sich anpasst, wenn Merkmale nicht verfügbar sind.

Wenn das Attribut nicht vorhanden ist, wird dessen impliziter Wert zu `true` ausgewertet. Wird ein leerer oder Null-Stringwert dem Attribut `requiredFeatures` zugewiesen, wird das Attribut zu `false` ausgewertet.

`requiredFeatures` wird häufig in Verbindung mit dem {{SVGElement("switch")}}-Element verwendet. Wenn `requiredFeatures` in anderen Situationen verwendet wird, stellt es einen einfachen Schalter dar, ob das gegebene Element gerendert wird oder nicht.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("cursor")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("mask")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("set")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  fill: white;
}
```

```html
<svg viewBox="0 0 250 45" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect fill="forestgreen" x="10" y="10" height="25" width="230" />
    <text x="20" y="27">requiredFeatures supported</text>
  </g>
  <g requiredFeatures="">
    <rect fill="crimson" x="10" y="10" height="25" width="230" />
    <text x="20" y="27">requiredFeatures not supported</text>
  </g>
</svg>
```

{{EmbedLiveSample("Example", "250", "100")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#list-of-ts"
            >&#x3C;list-of-features></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        <code>true</code>, wenn nicht definiert, <code>false</code>, wenn Null
        oder leerer String als Wert
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<list-of-features>`
  - : Dies ist eine Liste von Merkmal-Strings, getrennt durch Leerzeichen. Bestimmt, ob alle angegebenen _Merkmale_ vom Browser unterstützt werden. Siehe [Merkmal-Strings](#merkmal-strings) unten für eine Liste der zulässigen Werte.

## Merkmal-Strings

Die folgenden sind die Merkmal-Strings für das `requiredFeatures`-Attribut. Diese gleichen Merkmal-Strings gelten auch für den [`hasFeature`](/de/docs/Web/API/DOMImplementation/hasFeature)-Methodenaufruf, der Teil der SVG-DOM-Unterstützung für das [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interface ist. In einigen Fällen korrespondieren die Merkmal-Strings direkt mit einer Reihe von Attributen, Eigenschaften oder Elementen, in anderen repräsentieren sie bestimmte Funktionalitäten des Browsers. Beachten Sie, dass sich das Format und die Benennung von Merkmal-Strings von SVG 1.0 zu SVG 1.1 geändert haben. Die SVG 1.0-Merkmal-Strings sind hier nicht aufgelistet, können aber in der [SVG-Spezifikation](https://www.w3.org/TR/SVG/feature.html) gefunden werden. Einige Browser unterstützen die SVG 1.0-Merkmal-Strings aus Kompatibilitätsgründen. Jedoch gelten die SVG 1.0-Merkmal-Strings als veraltet.

- `http://www.w3.org/TR/SVG11/feature#SVG`

  - : Mindestens eines der folgenden Merkmale wird unterstützt:

    - `http://www.w3.org/TR/SVG11/feature#SVG-static`
    - `http://www.w3.org/TR/SVG11/feature#SVG-animation`
    - `http://www.w3.org/TR/SVG11/feature#SVG-dynamic`
    - `http://www.w3.org/TR/SVG11/feature#SVGDOM`

- `http://www.w3.org/TR/SVG11/feature#SVGDOM`

  - : Mindestens eines der folgenden Merkmale wird unterstützt:

    - `http://www.w3.org/TR/SVG11/feature#SVGDOM-static`
    - `http://www.w3.org/TR/SVG11/feature#SVGDOM-animation`
    - `http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic`

- `http://www.w3.org/TR/SVG11/feature#SVG-static`

  - : Der Browser unterstützt alle folgenden Merkmale:

    - `http://www.w3.org/TR/SVG11/feature#CoreAttribute`
    - `http://www.w3.org/TR/SVG11/feature#Structure`
    - `http://www.w3.org/TR/SVG11/feature#ContainerAttribute`
    - `http://www.w3.org/TR/SVG11/feature#ConditionalProcessing`
    - `http://www.w3.org/TR/SVG11/feature#Image`
    - `http://www.w3.org/TR/SVG11/feature#Style`
    - `http://www.w3.org/TR/SVG11/feature#ViewportAttribute`
    - `http://www.w3.org/TR/SVG11/feature#Shape`
    - `http://www.w3.org/TR/SVG11/feature#Text`
    - `http://www.w3.org/TR/SVG11/feature#PaintAttribute`
    - `http://www.w3.org/TR/SVG11/feature#OpacityAttribute`
    - `http://www.w3.org/TR/SVG11/feature#GraphicsAttribute`
    - `http://www.w3.org/TR/SVG11/feature#Marker`
    - `http://www.w3.org/TR/SVG11/feature#ColorProfile`
    - `http://www.w3.org/TR/SVG11/feature#Gradient`
    - `http://www.w3.org/TR/SVG11/feature#Pattern`
    - `http://www.w3.org/TR/SVG11/feature#Clip`
    - `http://www.w3.org/TR/SVG11/feature#Mask`
    - `http://www.w3.org/TR/SVG11/feature#Filter`
    - `http://www.w3.org/TR/SVG11/feature#XlinkAttribute`
    - `http://www.w3.org/TR/SVG11/feature#Font`
    - `http://www.w3.org/TR/SVG11/feature#Extensibility`

- `http://www.w3.org/TR/SVG11/feature#SVGDOM-static`
  - : Der Browser unterstützt alle DOM-Interfaces und Methoden zu den Sprachmerkmalen für `http://www.w3.org/TR/SVG11/feature#SVG-static`.
- `http://www.w3.org/TR/SVG11/feature#SVG-animation`
  - : Der Browser unterstützt alle Sprachmerkmale von `http://www.w3.org/TR/SVG11/feature#SVG-static` plus das Merkmal `http://www.w3.org/TR/SVG11/feature#Animation`.
- `http://www.w3.org/TR/SVG11/feature#SVGDOM-animation`
  - : Der Browser unterstützt alle DOM-Interfaces und Methoden, die den Sprachmerkmalen für `http://www.w3.org/TR/SVG11/feature#SVG-animation` entsprechen.
- `http://www.w3.org/TR/SVG11/feature#SVG-dynamic`

  - : Der Browser unterstützt alle Sprachmerkmale von `http://www.w3.org/TR/SVG11/feature#SVG-animation` plus die folgenden Merkmale:

    - `http://www.w3.org/TR/SVG11/feature#Hyperlinking`
    - `http://www.w3.org/TR/SVG11/feature#Scripting`
    - `http://www.w3.org/TR/SVG11/feature#View`
    - `http://www.w3.org/TR/SVG11/feature#Cursor`
    - `http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute`
    - `http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute`
    - `http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute`

- `http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic`
  - : Der Browser unterstützt alle DOM-Interfaces und Methoden zu den Sprachmerkmalen für `http://www.w3.org/TR/SVG11/feature#SVG-dynamic`.
- `http://www.w3.org/TR/SVG11/feature#CoreAttribute`
  - : Der Browser unterstützt die {{SVGAttr("id")}}, {{SVGAttr("xml:lang")}} und {{SVGAttr("xml:space")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#Structure`
  - : Der Browser unterstützt die {{SVGElement("svg")}}, {{SVGElement("g")}}, {{SVGElement("defs")}}, {{SVGElement("desc")}}, {{SVGElement("title")}}, {{SVGElement("metadata")}}, {{SVGElement("symbol")}} und {{SVGElement("use")}} Elemente.
- `http://www.w3.org/TR/SVG11/feature#BasicStructure`
  - : Der Browser unterstützt die {{SVGElement("svg")}}, {{SVGElement("g")}}, {{SVGElement("defs")}}, {{SVGElement("desc")}}, {{SVGElement("title")}}, {{SVGElement("metadata")}} und {{SVGElement("use")}} Elemente.
- `http://www.w3.org/TR/SVG11/feature#ContainerAttribute`
  - : Der Browser unterstützt das {{SVGAttr("enable-background")}} Attribut
- `http://www.w3.org/TR/SVG11/feature#ConditionalProcessing`
  - : Der Browser unterstützt das {{SVGElement("switch")}} Element und die `requiredFeatures`, {{SVGAttr("requiredExtensions")}}, {{SVGAttr("systemLanguage")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#Image`
  - : Der Browser unterstützt das {{SVGElement("image")}} Element.
- `http://www.w3.org/TR/SVG11/feature#Style`
  - : Der Browser unterstützt das {{SVGElement("style")}} Element.
- `http://www.w3.org/TR/SVG11/feature#ViewportAttribute`
  - : Der Browser unterstützt die {{SVGAttr("clip")}} und {{SVGAttr("overflow")}} Attribute.
- `http://www.w3.org/TR/SVG11/feature#Shape`
  - : Der Browser unterstützt die {{SVGElement("rect")}}, {{SVGElement("circle")}}, {{SVGElement("line")}}, {{SVGElement("polyline")}}, {{SVGElement("polygon")}}, {{SVGElement("ellipse")}} und {{SVGElement("path")}} Elemente.
- `http://www.w3.org/TR/SVG11/feature#Text`
  - : Der Browser unterstützt die {{SVGElement("text")}}, {{SVGElement("tspan")}}, {{SVGElement("tref")}}, {{SVGElement("textPath")}}, und {{SVGElement("glyphRef")}} Elemente.
- `http://www.w3.org/TR/SVG11/feature#BasicText`
  - : Der Browser unterstützt das {{SVGElement("text")}} Element
- `http://www.w3.org/TR/SVG11/feature#PaintAttribute`
  - : Der Browser unterstützt die {{SVGAttr("color")}}, {{SVGAttr("fill")}}, {{SVGAttr("fill-rule")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stroke-dasharray")}}, {{SVGAttr("stroke-dashoffset")}}, {{SVGAttr("stroke-linecap")}}, {{SVGAttr("stroke-linejoin")}}, {{SVGAttr("stroke-miterlimit")}}, {{SVGAttr("stroke-width")}}, {{SVGAttr("color-interpolation")}} und {{SVGAttr("color-rendering")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute`
  - : Der Browser unterstützt die {{SVGAttr("color")}}, {{SVGAttr("fill")}}, {{SVGAttr("fill-rule")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stroke-dasharray")}}, {{SVGAttr("stroke-dashoffset")}}, {{SVGAttr("stroke-linecap")}}, {{SVGAttr("stroke-linejoin")}}, {{SVGAttr("stroke-miterlimit")}}, {{SVGAttr("stroke-width")}} und {{SVGAttr("color-rendering")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#OpacityAttribute`
  - : Der Browser unterstützt die {{SVGAttr("opacity")}}, {{SVGAttr("stroke-opacity")}} und {{SVGAttr("fill-opacity")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#GraphicsAttribute`
  - : Der Browser unterstützt die {{SVGAttr("display")}}, {{SVGAttr("image-rendering")}}, {{SVGAttr("pointer-events")}}, {{SVGAttr("shape-rendering")}}, {{SVGAttr("text-rendering")}} und {{SVGAttr("visibility")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute`
  - : Der Browser unterstützt die {{SVGAttr("display")}} und {{SVGAttr("visibility")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#Marker`
  - : Der Browser unterstützt das {{SVGElement("marker")}} Element
- `http://www.w3.org/TR/SVG11/feature#Gradient`
  - : Der Browser unterstützt die {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}} und {{SVGElement("stop")}} Elemente
- `http://www.w3.org/TR/SVG11/feature#Pattern`
  - : Der Browser unterstützt das {{SVGElement("pattern")}} Element
- `http://www.w3.org/TR/SVG11/feature#Clip`
  - : Der Browser unterstützt das {{SVGElement("clipPath")}} Element und die {{SVGAttr("clip-path")}}, {{SVGAttr("clip-rule")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#BasicClip`
  - : Der Browser unterstützt das {{SVGElement("clipPath")}} Element und das {{SVGAttr("clip-path")}} Attribut
- `http://www.w3.org/TR/SVG11/feature#Mask`
  - : Der Browser unterstützt das {{SVGElement("mask")}} Element
- `http://www.w3.org/TR/SVG11/feature#Filter`
  - : Der Browser unterstützt die {{SVGElement("filter")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMergeNode")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, {{SVGElement("feDistantLight")}}, {{SVGElement("fePointLight")}}, {{SVGElement("feSpotLight")}}, {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} und {{SVGElement("feFuncA")}} Elemente
- `http://www.w3.org/TR/SVG11/feature#BasicFilter`
  - : Der Browser unterstützt die {{SVGElement("filter")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMergeNode")}}, {{SVGElement("feOffset")}}, {{SVGElement("feTile")}}, {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} und {{SVGElement("feFuncA")}} Elemente
- `http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute`
  - : Der Browser unterstützt die `onunload`, `onabort`, `onerror`, `onresize`, `onscroll` und `onzoom` [Ereignis-Attribute](/de/docs/Web/SVG/Attribute#event_attributes)
- `http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute`
  - : Der Browser unterstützt die `onfocusin`, `onfocusout`, `onactivate`, `onclick`, `onmousedown`, `onmouseup`, `onmouseover`, `onmousemove`, `onmouseout` und `onload` [Ereignis-Attribute](/de/docs/Web/SVG/Attribute#event_attributes)
- `http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute`
  - : Der Browser unterstützt die `onbegin`, `onend`, `onrepeat` und `onload` [Ereignis-Attribute](/de/docs/Web/SVG/Attribute#event_attributes)
- `http://www.w3.org/TR/SVG11/feature#Cursor`
  - : Der Browser unterstützt das {{SVGElement("cursor")}} Element
- `http://www.w3.org/TR/SVG11/feature#Hyperlinking`
  - : Der Browser unterstützt das {{SVGElement("a")}} Element
- `http://www.w3.org/TR/SVG11/feature#XlinkAttribute`
  - : Der Browser unterstützt die {{SVGAttr("xlink:type")}}, {{SVGAttr("xlink:href")}}, {{SVGAttr("xlink:role")}}, {{SVGAttr("xlink:arcrole")}}, {{SVGAttr("xlink:title")}}, {{SVGAttr("xlink:show")}} und {{SVGAttr("xlink:actuate")}} Attribute
- `http://www.w3.org/TR/SVG11/feature#View`
  - : Der Browser unterstützt das {{SVGElement("view")}} Element
- `http://www.w3.org/TR/SVG11/feature#Script`
  - : Der Browser unterstützt das {{SVGElement("script")}} Element
- `http://www.w3.org/TR/SVG11/feature#Animation`
  - : Der Browser unterstützt die {{SVGElement("animate")}}, {{SVGElement("set")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("mpath")}} Elemente
- `http://www.w3.org/TR/SVG11/feature#Font`
  - : Der Browser unterstützt die {{SVGElement("font")}}, {{SVGElement("font-face")}}, {{SVGElement("glyph")}}, {{SVGElement("missing-glyph")}}, {{SVGElement("hkern")}}, {{SVGElement("vkern")}}, {{SVGElement("font-face-src")}}, {{SVGElement("font-face-uri")}}, {{SVGElement("font-face-format")}} und {{SVGElement("font-face-name")}} Elemente
- `http://www.w3.org/TR/SVG11/feature#BasicFont`
  - : Der Browser unterstützt die {{SVGElement("font")}}, {{SVGElement("font-face")}}, {{SVGElement("glyph")}}, {{SVGElement("missing-glyph")}}, {{SVGElement("hkern")}}, {{SVGElement("font-face-src")}} und {{SVGElement("font-face-name")}} Elemente
- `http://www.w3.org/TR/SVG11/feature#Extensibility`
  - : Der Browser unterstützt das {{SVGElement("foreignObject")}} Element

## Unterstützung von Merkmalen testen

### SVG

```html
<svg width="450" height="1170" xmlns="http://www.w3.org/2000/svg">
  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVG -->
  <rect class="ko" x="10" y="10" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="10"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG" />
  <text x="20" y="27">http://www.w3.org/TR/SVG11/feature#SVG</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVGDOM -->
  <rect class="ko" x="10" y="35" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="35"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVGDOM" />
  <text x="20" y="52">http://www.w3.org/TR/SVG11/feature#SVGDOM</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVG-static -->
  <rect class="ko" x="10" y="60" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="60"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-static" />
  <text x="20" y="77">http://www.w3.org/TR/SVG11/feature#SVG-static</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVGDOM-static -->
  <rect class="ko" x="10" y="85" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="85"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVGDOM-static" />
  <text x="20" y="102">http://www.w3.org/TR/SVG11/feature#SVGDOM-static</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVG-animation -->
  <rect class="ko" x="10" y="110" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="110"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-animation" />
  <text x="20" y="127">http://www.w3.org/TR/SVG11/feature#SVG-animation</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVGDOM-animation -->
  <rect class="ko" x="10" y="135" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="135"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVGDOM-animation" />
  <text x="20" y="152">
    http://www.w3.org/TR/SVG11/feature#SVGDOM-animation
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVG-dynamic -->
  <rect class="ko" x="10" y="160" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="160"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-dynamic" />
  <text x="20" y="177">http://www.w3.org/TR/SVG11/feature#SVG-dynamic</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic -->
  <rect class="ko" x="10" y="185" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="185"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic" />
  <text x="20" y="202">http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#CoreAttribute -->
  <rect class="ko" x="10" y="210" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="210"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#CoreAttribute" />
  <text x="20" y="227">http://www.w3.org/TR/SVG11/feature#CoreAttribute</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Structure -->
  <rect class="ko" x="10" y="235" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="235"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Structure" />
  <text x="20" y="252">http://www.w3.org/TR/SVG11/feature#Structure</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicStructure -->
  <rect class="ko" x="10" y="260" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="260"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicStructure" />
  <text x="20" y="277">http://www.w3.org/TR/SVG11/feature#BasicStructure</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#ContainerAttribute -->
  <rect class="ko" x="10" y="285" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="285"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#ContainerAttribute" />
  <text x="20" y="302">
    http://www.w3.org/TR/SVG11/feature#ContainerAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#ConditionalProcessing -->
  <rect class="ko" x="10" y="310" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="310"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#ConditionalProcessing" />
  <text x="20" y="327">
    http://www.w3.org/TR/SVG11/feature#ConditionalProcessing
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Image -->
  <rect class="ko" x="10" y="335" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="335"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Image" />
  <text x="20" y="352">http://www.w3.org/TR/SVG11/feature#Image</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Style -->
  <rect class="ko" x="10" y="360" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="360"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Style" />
  <text x="20" y="377">http://www.w3.org/TR/SVG11/feature#Style</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#ViewportAttribute -->
  <rect class="ko" x="10" y="385" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="385"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#ViewportAttribute" />
  <text x="20" y="402">
    http://www.w3.org/TR/SVG11/feature#ViewportAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Shape -->
  <rect class="ko" x="10" y="410" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="410"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Shape" />
  <text x="20" y="427">http://www.w3.org/TR/SVG11/feature#Shape</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Text -->
  <rect class="ko" x="10" y="435" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="435"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Text" />
  <text x="20" y="452">http://www.w3.org/TR/SVG11/feature#Text</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicText -->
  <rect class="ko" x="10" y="460" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="460"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicText" />
  <text x="20" y="477">http://www.w3.org/TR/SVG11/feature#BasicText</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#PaintAttribute -->
  <rect class="ko" x="10" y="485" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="485"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#PaintAttribute" />
  <text x="20" y="502">http://www.w3.org/TR/SVG11/feature#PaintAttribute</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute -->
  <rect class="ko" x="10" y="510" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="510"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute" />
  <text x="20" y="527">
    http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#OpacityAttribute -->
  <rect class="ko" x="10" y="535" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="535"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#OpacityAttribute" />
  <text x="20" y="552">
    http://www.w3.org/TR/SVG11/feature#OpacityAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#GraphicsAttribute -->
  <rect class="ko" x="10" y="560" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="560"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#GraphicsAttribute" />
  <text x="20" y="577">
    http://www.w3.org/TR/SVG11/feature#GraphicsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute -->
  <rect class="ko" x="10" y="585" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="585"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute" />
  <text x="20" y="602">
    http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Marker -->
  <rect class="ko" x="10" y="610" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="610"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Marker" />
  <text x="20" y="627">http://www.w3.org/TR/SVG11/feature#Marker</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#ColorProfile -->
  <rect class="ko" x="10" y="635" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="635"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#ColorProfile" />
  <text x="20" y="652">http://www.w3.org/TR/SVG11/feature#ColorProfile</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Gradient -->
  <rect class="ko" x="10" y="660" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="660"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Gradient" />
  <text x="20" y="677">http://www.w3.org/TR/SVG11/feature#Gradient</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Pattern -->
  <rect class="ko" x="10" y="685" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="685"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Pattern" />
  <text x="20" y="702">http://www.w3.org/TR/SVG11/feature#Pattern</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Clip -->
  <rect class="ko" x="10" y="710" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="710"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Clip" />
  <text x="20" y="727">http://www.w3.org/TR/SVG11/feature#Clip</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicClip -->
  <rect class="ko" x="10" y="735" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="735"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicClip" />
  <text x="20" y="752">http://www.w3.org/TR/SVG11/feature#BasicClip</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Mask -->
  <rect class="ko" x="10" y="760" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="760"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Mask" />
  <text x="20" y="777">http://www.w3.org/TR/SVG11/feature#Mask</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Filter -->
  <rect class="ko" x="10" y="785" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="785"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Filter" />
  <text x="20" y="802">http://www.w3.org/TR/SVG11/feature#Filter</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicFilter -->
  <rect class="ko" x="10" y="810" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="810"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicFilter" />
  <text x="20" y="827">http://www.w3.org/TR/SVG11/feature#BasicFilter</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute -->
  <rect class="ko" x="10" y="835" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="835"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute" />
  <text x="20" y="852">
    http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute -->
  <rect class="ko" x="10" y="860" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="860"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute" />
  <text x="20" y="877">
    http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute -->
  <rect class="ko" x="10" y="885" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="885"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute" />
  <text x="20" y="902">
    http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Cursor -->
  <rect class="ko" x="10" y="910" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="910"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Cursor" />
  <text x="20" y="927">http://www.w3.org/TR/SVG11/feature#Cursor</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Hyperlinking -->
  <rect class="ko" x="10" y="935" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="935"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Hyperlinking" />
  <text x="20" y="952">http://www.w3.org/TR/SVG11/feature#Hyperlinking</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#XlinkAttribute -->
  <rect class="ko" x="10" y="960" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="960"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#XlinkAttribute" />
  <text x="20" y="977">http://www.w3.org/TR/SVG11/feature#XlinkAttribute</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#View -->
  <rect class="ko" x="10" y="1010" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1010"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#View" />
  <text x="20" y="1027">http://www.w3.org/TR/SVG11/feature#View</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Script -->
  <rect class="ko" x="10" y="1035" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1035"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Script" />
  <text x="20" y="1052">http://www.w3.org/TR/SVG11/feature#Script</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Animation -->
  <rect class="ko" x="10" y="1060" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1060"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Animation" />
  <text x="20" y="1077">http://www.w3.org/TR/SVG11/feature#Animation</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Font -->
  <rect class="ko" x="10" y="1085" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1085"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Font" />
  <text x="20" y="1102">http://www.w3.org/TR/SVG11/feature#Font</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicFont -->
  <rect class="ko" x="10" y="1110" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1110"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicFont" />
  <text x="20" y="1127">http://www.w3.org/TR/SVG11/feature#BasicFont</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Extensibility -->
  <rect class="ko" x="10" y="1135" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1135"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
  <text x="20" y="1152">http://www.w3.org/TR/SVG11/feature#Extensibility</text>
</svg>
```

### CSS

```css
.ko {
  fill: #900;
}

.ok {
  fill: #060;
}

rect {
  stroke: #000;
  stroke-width: 2px;
}

text {
  fill: #fff;
  font: 12px sans-serif;
}
```

### Ergebnis

{{EmbedLiveSample("Testing feature support", "400", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
