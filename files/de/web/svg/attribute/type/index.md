---
title: type
slug: Web/SVG/Attribute/type
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das Attribut `type` ist ein generisches Attribut und hat je nach Verwendungskontext eine unterschiedliche Bedeutung.

- Für das {{SVGElement("animateTransform")}}-Element definiert es den Typ der Transformation, deren Werte sich im Laufe der Zeit ändern.
- Für das {{SVGElement("feColorMatrix")}}-Element gibt es den Typ der Matrixoperation an. Das Schlüsselwort `matrix` zeigt an, dass eine vollständige 5x4-Matrix von Werten bereitgestellt wird. Die anderen Schlüsselwörter stellen bequeme Abkürzungen dar, die es ermöglichen, gängige Farboperationen durchzuführen, ohne eine vollständige Matrix anzugeben.
- Für die Elemente {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} und {{SVGElement("feFuncA")}} gibt es den Typ der Komponentenübertragungsfunktion an.
- Für das {{SVGElement("feTurbulence")}}-Element wird angegeben, ob die Filterprimitive eine Rausch- oder Turbulenzfunktion ausführen soll.
- Für die Elemente {{SVGElement("style")}} und {{SVGElement("script")}} definiert es den Inhaltstyp des Elements.

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

## Nutzungskontext

### Für die `<animateTransform>`-Elemente

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
          >SVG 1.1 (2. Ausgabe)</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für das `<feColorMatrix>`-Element

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
          >SVG 1.1 (2. Ausgabe)</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für die `<feFuncR>`, `<feFuncG>`, `<feFuncB>` und `<feFuncA>`-Elemente

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
          >SVG 1.1 (2. Ausgabe)</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für das `<feTurbulence>`-Element

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
          >SVG 1.1 (2. Ausgabe)</a
        >
      </td>
    </tr>
  </tbody>
</table>

### Für die `<style>` und `<script>`-Elemente

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
          >SVG 1.1 (2. Ausgabe) : script</a
        ><br /><a
          href="https://www.w3.org/TR/SVG11/styling.html#StyleElementTypeAttribute"
          rel="external"
          >SVG 1.1 (2. Ausgabe) : style</a
        >
      </td>
    </tr>
  </tbody>
</table>
