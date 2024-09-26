---
title: Typ
slug: Web/SVG/Attribute/type
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das `type`-Attribut ist ein allgemeines Attribut und hat je nach Kontext, in dem es verwendet wird, unterschiedliche Bedeutungen.

- Für das {{SVGElement("animateTransform")}}-Element definiert es die Art der Transformation, deren Werte sich im Laufe der Zeit ändern.
- Für das {{SVGElement("feColorMatrix")}}-Element gibt es die Art der Matrixoperation an. Das Schlüsselwort `matrix` gibt an, dass eine vollständige 5x4-Matrix von Werten bereitgestellt wird. Die anderen Schlüsselwörter stellen praktische Abkürzungen dar, um häufig verwendete Farboperationen ohne vollständige Matrizenspezifikation durchzuführen.
- Für die {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} und {{SVGElement("feFuncA")}} Elemente gibt es die Art der Komponentenübertragungsfunktion an.
- Für das {{SVGElement("feTurbulence")}}-Element gibt es an, ob die Filterprimitive eine Rausch- oder Turbulenzfunktion ausführen soll.
- Für die {{SVGElement("style")}} und {{SVGElement("script")}} Elemente definiert es den Inhaltstyp des Elements.

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
          href="https://www.w3.org/TR/SVG11/animate.html#AnimateTransformElementTypeAttribute"
          >SVG 1.1 (2. Auflage)</a
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
          href="https://www.w3.org/TR/SVG11/filters.html#feColorMatrixTypeAttribute"
          rel="external"
          >SVG 1.1 (2. Auflage)</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für die &lt;feFuncR&gt;, &lt;feFuncG&gt;, &lt;feFuncB&gt; und &lt;feFuncA&gt; Elemente

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
          href="https://www.w3.org/TR/SVG11/filters.html#feComponentTransferTypeAttribute"
          rel="external"
          >SVG 1.1 (2. Auflage)</a
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
          href="https://www.w3.org/TR/SVG11/filters.html#feTurbulenceTypeAttribute"
          rel="external"
          >SVG 1.1 (2. Auflage)</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für die &lt;style&gt; und &lt;script&gt; Elemente

SVG-Elemente: {{SVGElement("style")}}, {{SVGElement("script")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>&#x3C;content-type></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/script.html#ScriptElementTypeAttribute"
          rel="external"
          >SVG 1.1 (2. Auflage) : script</a
        ><br /><a
          href="https://www.w3.org/TR/SVG11/styling.html#StyleElementTypeAttribute"
          rel="external"
          >SVG 1.1 (2. Auflage) : style</a
        >
      </td>
    </tr>
  </tbody>
</table>