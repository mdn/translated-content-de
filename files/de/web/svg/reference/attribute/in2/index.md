---
title: in2
slug: Web/SVG/Reference/Attribute/in2
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`in2`**-Attribut identifiziert den zweiten Eingang für die gegebene Filterprimitive. Es funktioniert genau wie das {{SVGAttr("in")}}-Attribut.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feBlend")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feDisplacementMap")}}

## feBlend

Für {{SVGElement("feBlend")}} definiert `in2` das zweite Eingabebild für die Mischoperation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        <code>SourceGraphic</code> für die erste Filterprimitive, ansonsten das Ergebnis der vorherigen Filterprimitive
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feComposite

Für {{SVGElement("feComposite")}} definiert `in2` das zweite Eingabebild für die Kompositionsoperation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        <code>SourceGraphic</code> für die erste Filterprimitive, ansonsten das Ergebnis der vorherigen Filterprimitive
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feDisplacementMap

Für {{SVGElement("feDisplacementMap")}} definiert `in2` das zweite Eingabebild, das verwendet wird, um die Pixel in dem Bild zu verschieben, das im {{SVGAttr("in")}}-Attribut definiert ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        <code>SourceGraphic</code> für die erste Filterprimitive, ansonsten das Ergebnis der vorherigen Filterprimitive
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}
