---
title: <feComposite>
slug: Web/SVG/Reference/Element/feComposite
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Der **`<feComposite>`** [SVG](/de/docs/Web/SVG) Filter-Primitive kombiniert zwei Eingabebilder pixelweise im Bildraum unter Verwendung einer der Porter-Duff-Kompositionsoperationen: `over`, `in`, `atop`, `out`, `xor`, `lighter` oder `arithmetic`.

Wie andere Filter-Primitive verarbeitet es Farbbestandteile standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu nutzen.

Die folgende Tabelle zeigt jede dieser Operationen anhand eines Bildes des MDN-Logos, das mit einem roten Kreis zusammengesetzt wird:

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Operation</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td>
        <p>over <img src="operation_over.png" alt="über Operator" /></p>
      </td>
      <td>
        Die durch das {{SVGAttr("in")}} Attribut definierte Ausgangsgrafik
        (das MDN-Logo) wird über die durch das
        {{SVGAttr("in2")}} Attribut definierte Zielgrafik (der Kreis) gelegt.
        <p>
          Dies ist die <em>Standardoperation</em>, die verwendet wird, wenn
          keine Operation oder eine nicht unterstützte Operation angegeben wird.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>in <img src="operation_in.png" alt="in Operator" /></p>
      </td>
      <td>
        Die Teile der durch das `in` Attribut definierten Ausgangsgrafik,
        die die in dem `in2` Attribut definierte Zielgrafik überlappen,
        ersetzen die Zielgrafik.
      </td>
    </tr>
    <tr>
      <td>
        <p>out <img src="operation_out.png" alt="out Operator" /></p>
      </td>
      <td>
        Die Teile der durch das `in` Attribut definierten Ausgangsgrafik,
        die außerhalb der in dem `in2` Attribut definierten Zielgrafik liegen,
        werden angezeigt.
      </td>
    </tr>
    <tr>
      <td>
        <p>atop <img src="operation_atop.png" alt="atop Operator" /></p>
      </td>
      <td>
        Die Teile der im `in` Attribut definierten Ausgangsgrafik, die die
        in dem `in2` Attribut definierte Zielgrafik überlappen, ersetzen die
        Zielgrafik. Die Teile der Zielgrafik, die nicht mit der
        Ausgangsgrafik überlappen, bleiben unberührt.
      </td>
    </tr>
    <tr>
      <td>
        <p>xor <img src="operation_xor.png" alt="xor Operator" /></p>
      </td>
      <td>
        Die nicht überlappenden Regionen der im `in` Attribut definierten
        Ausgangsgrafik und der im `in2` Attribut definierten Zielgrafik
        werden kombiniert.
      </td>
    </tr>
    <tr>
      <td>
        <p>
          lighter <img src="operation_lighter.png" alt="lighter Operator" />
        </p>
      </td>
      <td>
        Die Summe der im `in` Attribut definierten Ausgangsgrafik und der
        im `in2` Attribut definierten Zielgrafik wird angezeigt.
      </td>
    </tr>
    <tr>
      <td>
        <p>
          arithmetic
          <img src="operation_arithmetic.png" alt="arithmetic Operator" />
        </p>
      </td>
      <td>
        <p>
          Die `arithmetic` Operation ist nützlich, um die Ausgabe der
          {{SVGElement("feDiffuseLighting")}} und
          {{SVGElement("feSpecularLighting")}} Filter mit Texturdaten zu
          kombinieren. Wenn die `arithmetic` Operation gewählt wird, wird
          jedes Ergebnis-Pixel mit der folgenden Formel berechnet:
        </p>
        <pre class="brush: plain">result = k1*i1*i2 + k2*i1 + k3*i2 + k4</pre>
        <p>wobei:</p>
        <ul>
          <li>
            `i1` und `i2` die entsprechenden Pixelkanalwerte des Eingabebildes
            darstellen, die jeweils auf {{SVGAttr("in")}} und {{SVGAttr("in2")}} abgebildet
            werden
          </li>
          <li>
            {{SVGAttr("k1")}}, {{SVGAttr("k2")}},
            {{SVGAttr("k3")}}, und {{SVGAttr("k4")}} die
            Werte der Attribute mit dem gleichen Namen angeben.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}: Erste Eingabe für das gegebene Filter-Primitive.
- {{SVGAttr("in2")}}: Zweite Eingabe für das gegebene Filter-Primitive (funktioniert gleich wie das `in` Attribut).
- {{SVGAttr("operator")}}: `over` | `in` | `out` | `atop` | `xor` | `lighter` | `arithmetic`
- {{SVGAttr("k1")}}, {{SVGAttr("k2")}}, {{SVGAttr("k3")}}, {{SVGAttr("k4")}}: Werte, die zur Berechnung des Ergebnis-Pixels in `arithmetic` {{SVGAttr("operator")}} Filter-Primitiven verwendet werden.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement) Schnittstelle.

## Beispiel

Dieses Beispiel definiert Filter für jede der unterstützten Operationen (`over`, `atop`, `lighter`, usw.), die ein Eingabe-`SourceGraphic` mit einem Bild des MDN-Logos zusammensetzen. Die Filter werden jeweils auf ein Kreiselement angewendet, das dann als `SourceGraphic` dient.

> [!NOTE]
> `BackgroundImage` kann nicht als Kompositionsquelle in modernen Browsern verwendet werden, daher können wir keinen Filter definieren, der mit beliebigen Pixeln unterhalb des Filters als eine der Quellen arbeitet. Der hier gewählte Ansatz ist ein [Workaround, weil wir `BackgroundImage` nicht verwenden können](/de/docs/Web/SVG/Reference/Attribute/in#workaround_for_backgroundimage).

### SVG

```html
<svg
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
      fill="#cc0000"
      filter="url(#imageOver)" />
    <text x="80" y="-5">over</text>
  </g>
  <g transform="translate(200,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageIn)" />
    <text x="80" y="-5">in</text>
  </g>
  <g transform="translate(400,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageOut)" />
    <text x="80" y="-5">out</text>
  </g>
  <g transform="translate(600,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageAtop)" />
    <text x="80" y="-5">atop</text>
  </g>
  <g transform="translate(0,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageXor)" />
    <text x="80" y="-5">xor</text>
  </g>
  <g transform="translate(200,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageArithmetic)" />
    <text x="70" y="-5">arithmetic</text>
  </g>
  <g transform="translate(400,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageLighter)" />
    <text x="80" y="-5">lighter</text>
  </g>
</svg>
```

```css hidden
svg {
  width: 800px;
  height: 400px;
  display: inline;
}
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
