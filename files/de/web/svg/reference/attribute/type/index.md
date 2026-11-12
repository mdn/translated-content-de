---
title: type
slug: Web/SVG/Reference/Attribute/type
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut `type` ist ein allgemeines Attribut, dessen Bedeutung vom jeweiligen Verwendungskontext abhängt.

- Beim Element {{SVGElement("animateTransform")}} legt es den Typ der Transformation fest, deren Werte sich im Laufe der Zeit ändern.
- Beim Element {{SVGElement("feColorMatrix")}} gibt es den Typ der Matrixoperation an. Das Schlüsselwort `matrix` gibt an, dass eine vollständige 5×4-Matrix mit Werten bereitgestellt wird. Die anderen Schlüsselwörter sind Kurzformen, mit denen sich häufig verwendete Farboperationen ohne Angabe einer vollständigen Matrix ausführen lassen.
- Bei den Elementen {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} und {{SVGElement("feFuncA")}} gibt es den Typ der Komponentenübertragungsfunktion an.
- Beim Element {{SVGElement("feTurbulence")}} gibt es an, ob das Filterprimitiv eine Rausch- oder eine Turbulenzfunktion ausführen soll.
- Bei den Elementen {{SVGElement("style")}} und {{SVGElement("script")}} legt es den Inhaltstyp des Elements fest.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feTurbulence")}}
- {{SVGElement("script")}}
- {{SVGElement("style")}}

## Verwendungshinweise

### Für das Element &lt;animateTransform&gt;

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

### Für das Element &lt;feColorMatrix&gt;

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
          href="https://drafts.csswg.org/filter-effects-1/#element-attrdef-fecolormatrix-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für die Elemente &lt;feFuncR&gt;, &lt;feFuncG&gt;, &lt;feFuncB&gt; und &lt;feFuncA&gt;

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
          href="https://drafts.csswg.org/filter-effects-1/#element-attrdef-fecomponenttransfer-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für das Element &lt;feTurbulence&gt;

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
          href="https://drafts.csswg.org/filter-effects-1/#element-attrdef-feturbulence-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für die Elemente &lt;style&gt; und &lt;script&gt;

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
          href="https://w3c.github.io/svgwg/svg2-draft/interact.html#ScriptElementTypeAttribute"
          rel="external"
          >Scalable Vector Graphics (SVG) 2</a
        ><br /><a
          href="https://w3c.github.io/svgwg/svg2-draft/styling.html#StyleElementTypeAttribute"
          rel="external"
          >Scalable Vector Graphics (SVG) 2</a
        >
      </td>
    </tr>
  </tbody>
</table>
