---
title: type
slug: Web/SVG/Reference/Attribute/type
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Das Attribut `type` ist ein generisches Attribut, dessen Bedeutung je nach Kontext, in dem es verwendet wird, unterschiedlich ist.

- Für das Element {{SVGElement("animateTransform")}} definiert es die Art der Transformation, deren Werte sich im Laufe der Zeit ändern.
- Für das Element {{SVGElement("feColorMatrix")}} gibt es die Art der Matrixoperation an. Das Schlüsselwort `matrix` zeigt an, dass eine vollständige 5x4-Matrix von Werten bereitgestellt wird. Die anderen Schlüsselwörter stellen bequeme Abkürzungen dar, um häufig genutzte Farboperationen durchführen zu können, ohne eine vollständige Matrix anzugeben.
- Für die Elemente {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} und {{SVGElement("feFuncA")}} zeigt es die Art der Komponentenübertragungsfunktion an.
- Für das Element {{SVGElement("feTurbulence")}} gibt es an, ob die Filterprimitive eine Rausch- oder Turbulenzfunktion ausführen soll.
- Für die Elemente {{SVGElement("style")}} und {{SVGElement("script")}} definiert es den Inhaltstyp des Elements.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feTurbulence")}}
- {{SVGElement("script")}}
- {{SVGElement("style")}}

## Verwendungskontext

### Für die &lt;animateTransform&gt;-Elemente

SVG-Element: {{SVGElement("animateTransform")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong><code>translate</code></strong> | <code>scale</code> |
        <code>rotate</code> | <code>skewX</code> | <code>skewY</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://svgwg.org/specs/animations/#AnimateTransformElementTypeAttribute"
          >Scalable Vector Graphics (SVG) 2</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für das &lt;feColorMatrix&gt;-Element

SVG-Element: {{SVGElement("feColorMatrix")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong><code>matrix</code></strong> | <code>saturate</code> |
        <code>hueRotate</code> | <code>luminanceToAlpha</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://drafts.fxtf.org/filter-effects/#element-attrdef-fecolormatrix-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für die &lt;feFuncR&gt;, &lt;feFuncG&gt;, &lt;feFuncB&gt; und &lt;feFuncA&gt;-Elemente

SVG-Elemente: {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>identity</code> | <code>table</code> | <code>discrete</code> |
        <code>linear</code> | <code>gamma</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://drafts.fxtf.org/filter-effects/#element-attrdef-fecomponenttransfer-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für das &lt;feTurbulence&gt;-Element

SVG-Element: {{SVGElement("feTurbulence")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>fractalNoise</code> | <strong><code>turbulence</code></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://drafts.fxtf.org/filter-effects/#element-attrdef-feturbulence-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für die &lt;style&gt; und &lt;script&gt;-Elemente

SVG-Elemente: {{SVGElement("style")}}, {{SVGElement("script")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>&#x3C;media-type></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://svgwg.org/svg2-draft/interact.html#ScriptElementTypeAttribute"
          rel="external"
          >Scalable Vector Graphics (SVG) 2</a
        ><br /><a
          href="https://svgwg.org/svg2-draft/styling.html#StyleElementTypeAttribute"
          rel="external"
          >Scalable Vector Graphics (SVG) 2</a
        >
      </td>
    </tr>
  </tbody>
</table>
