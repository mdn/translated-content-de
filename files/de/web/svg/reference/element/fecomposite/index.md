---
title: <feComposite>
slug: Web/SVG/Reference/Element/feComposite
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Das **`<feComposite>`** [SVG](/de/docs/Web/SVG) Filter-Primitive führt die Kombination von zwei Eingabebildern pixelweise im Bildraum mit einer der Porter-Duff-Kompositionstechniken aus: `over`, `in`, `atop`, `out`, `xor`, `lighter` oder `arithmetic`.

Wie andere Filter-Primitiven verarbeitet es die Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

Die folgende Tabelle zeigt jede dieser Operationen mit einem Bild des MDN-Logos, das mit einem roten Kreis kombiniert wird:

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Operation</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td>
        <p>over <img src="operation_over.png" alt="over operator" /></p>
      </td>
      <td>
        Die Quellgrafik, die durch das {{SVGAttr("in")}} Attribut definiert ist
        (das MDN-Logo), wird über die Zielgrafik platziert, die durch das
        {{SVGAttr("in2")}} Attribut (der Kreis) definiert ist.
        <p>
          Dies ist die <em>Standardoperation</em>, die verwendet wird, wenn keine
          Operation oder eine nicht unterstützte Operation angegeben ist.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>in <img src="operation_in.png" alt="in operator" /></p>
      </td>
      <td>
        Die Teile der Quellgrafik, die durch das <code>in</code>-Attribut definiert sind
        und die die Zielgrafik überschneiden, die im
        <code>in2</code>-Attribut definiert ist, ersetzen die Zielgrafik.
      </td>
    </tr>
    <tr>
      <td>
        <p>out <img src="operation_out.png" alt="out operator" /></p>
      </td>
      <td>
        Die Teile der Quellgrafik, die durch das <code>in</code>-Attribut definiert sind
        und außerhalb der Zielgrafik fallen, die im
        <code>in2</code>-Attribut definiert ist, werden angezeigt.
      </td>
    </tr>
    <tr>
      <td>
        <p>atop <img src="operation_atop.png" alt="atop operator" /></p>
      </td>
      <td>
        Die Teile der Quellgrafik, die im
        <code>in</code>-Attribut definiert sind und die Zielgrafik überschneiden, die im
        <code>in2</code>-Attribut definiert ist, ersetzen die Zielgrafik. Die
        Teile der Zielgrafik, die nicht mit der Quellgrafik überlappen, bleiben unberührt.
      </td>
    </tr>
    <tr>
      <td>
        <p>xor <img src="operation_xor.png" alt="xor operator" /></p>
      </td>
      <td>
        Die nicht-überlappenden Regionen der Quellgrafik, die im
        <code>in</code>-Attribut definiert sind, und der Zielgrafik, die im
        <code>in2</code>-Attribut definiert ist, werden kombiniert.
      </td>
    </tr>
    <tr>
      <td>
        <p>
          lighter <img src="operation_lighter.png" alt="lighter operator" />
        </p>
      </td>
      <td>
        Die Summe der Quellgrafik, die im <code>in</code>-Attribut definiert ist,
        und der Zielgrafik, die im <code>in2</code>-Attribut definiert ist, wird
        angezeigt.
      </td>
    </tr>
    <tr>
      <td>
        <p>
          arithmetic
          <img src="operation_arithmetic.png" alt="arithmetic operator" />
        </p>
      </td>
      <td>
        <p>
          Die <code>arithmetic</code>-Operation ist nützlich, um die Ausgabe der
          {{SVGElement("feDiffuseLighting")}} und
          {{SVGElement("feSpecularLighting")}} Filter mit Texturdaten
          zu kombinieren. Wenn die <code>arithmetic</code>-Operation gewählt ist, wird jedes Resultat-
          Pixel mit der folgenden Formel berechnet:
        </p>
        <pre class="brush: plain">result = k1*i1*i2 + k2*i1 + k3*i2 + k4</pre>
        <p>wo:</p>
        <ul>
          <li>
            <code>i1</code> und <code>i2</code> die entsprechenden Pixelkanal-
            werte des Eingabebildes bezeichnen, die zu
            {{SVGAttr("in")}} und {{SVGAttr("in2")}} zugeordnet sind
          </li>
          <li>
            {{SVGAttr("k1")}}, {{SVGAttr("k2")}},
            {{SVGAttr("k3")}}, und {{SVGAttr("k4")}} die
            Werte der Attribute mit demselben Namen bezeichnen.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}: Erstes Eingabewert für das gegebene Filter-Primitive.
- {{SVGAttr("in2")}}: Zweites Eingabewert für das gegebene Filter-Primitive (funktioniert wie das `in`-Attribut).
- {{SVGAttr("operator")}}: `over` | `in` | `out` | `atop` | `xor` | `lighter` | `arithmetic`
- {{SVGAttr("k1")}}, {{SVGAttr("k2")}}, {{SVGAttr("k3")}}, {{SVGAttr("k4")}}: Werte, die zur Berechnung des Ergebnis-Pixels in `arithmetic` {{SVGAttr("operator")}}-Filter-Primitiven verwendet werden.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement) Schnittstelle.

## Beispiel

Dieses Beispiel definiert Filter für jede der unterstützten Operationen (`over`, `atop`, `lighter`, etc.), die eine Eingabe `SourceGraphic` mit einem Bild des MDN-Logos zusammensetzen. Die Filter werden jeweils auf ein Kreiselement angewendet, das dann als `SourceGraphic` verwendet wird.

> [!NOTE] > `BackgroundImage` kann in modernen Browsern nicht als Zusammensetzungsquelle verwendet werden, daher können wir keinen Filter definieren, der mit beliebigen Pixeln, die zufällig unter dem Filter liegen, als eine der Quellen zusammensetzt. Der hier gewählte Ansatz ist eine [Umgehungslösung, da wir `BackgroundImage` nicht verwenden können](/de/docs/Web/SVG/Reference/Attribute/in#workaround_for_backgroundimage).

### SVG

```html
<svg
  style="width:800px; height:400px; display: inline;"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="imageOver">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="over" />
    </filter>
    <filter id="imageIn">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="in" />
    </filter>
    <filter id="imageOut">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="out" />
    </filter>
    <filter id="imageAtop">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="atop" />
    </filter>
    <filter id="imageXor">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="xor" />
    </filter>
    <filter id="imageArithmetic">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite
        in2="SourceGraphic"
        operator="arithmetic"
        k1="0.1"
        k2="0.2"
        k3="0.3"
        k4="0.4" />
    </filter>
    <filter id="imageLighter">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="lighter" />
    </filter>
  </defs>
  <g transform="translate(0,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#c00"
      style="filter:url(#imageOver)" />
    <text x="80" y="-5">over</text>
  </g>
  <g transform="translate(200,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#c00"
      style="filter:url(#imageIn)" />
    <text x="80" y="-5">in</text>
  </g>
  <g transform="translate(400,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#c00"
      style="filter:url(#imageOut)" />
    <text x="80" y="-5">out</text>
  </g>
  <g transform="translate(600,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#c00"
      style="filter:url(#imageAtop)" />
    <text x="80" y="-5">atop</text>
  </g>
  <g transform="translate(0,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#c00"
      style="filter:url(#imageXor)" />
    <text x="80" y="-5">xor</text>
  </g>
  <g transform="translate(200,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#c00"
      style="filter:url(#imageArithmetic)" />
    <text x="70" y="-5">arithmetic</text>
  </g>
  <g transform="translate(400,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#c00"
      style="filter:url(#imageLighter)" />
    <text x="80" y="-5">lighter</text>
  </g>
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 100, 450)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
