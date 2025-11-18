---
title: refX
slug: Web/SVG/Reference/Attribute/refX
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`refX`**-Attribut definiert die x-Koordinate des Referenzpunkts eines Elements.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refX` die x-Koordinate des Referenzpunkts des Markers, der genau an der Position des Markers auf der Form platziert werden soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}} | <code>left</code> | <code>center</code> |
        <code>right</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Längen werden im Koordinatensystem des Marker-Inhalts interpretiert, nachdem die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angewendet wurden.

    Prozentwerte werden als Prozentsatz der Breite der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem des Marker-Inhalts interpretiert, nachdem die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angewendet wurden.
- `left`
  - : Der Referenzpunkt des Markers wird am linken Rand der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird in der horizontalen Mitte der Form platziert.
- `right`
  - : Der Referenzpunkt des Markers wird am rechten Rand der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refX` die x-Koordinate des Symbols, die durch den kumulativen Effekt des Attributs {{SVGAttr("x")}} und aller Transformationen auf das {{SVGElement("symbol")}} und dessen Host-{{SVGElement("use")}}-Element festgelegt wird.

Anders als bei anderen Positionierungsattributen wird `refX` im Koordinatensystem der Symbolinhalte interpretiert, nachdem die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angewendet wurden. Wenn das Attribut nicht angegeben ist, wird keine horizontale Anpassung vorgenommen, und die linke Seite des rechteckigen Anzeigebereichs des Symbols (unabhängig von der `viewBox`-Koordinate) wird an der x-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Rückwärtskompatibilität unterscheidet sich das Verhalten, wenn `refX` auf einem `<symbol>`-Element nicht angegeben ist, von dem, wenn es mit einem Wert von `0` angegeben ist, und daher vom Verhalten, wenn ein gleichwertiges Attribut auf einem {{SVGElement("marker")}}-Element nicht angegeben ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length")}} | <code>left</code> | <code>center</code> |
        <code>right</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Keiner</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Längen werden im Koordinatensystem des Marker-Inhalts interpretiert, nachdem die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angewendet wurden.

    Prozentwerte werden als Prozentsatz der Breite der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem des Marker-Inhalts interpretiert, nachdem die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angewendet wurden.
- `left`
  - : Der Referenzpunkt des Markers wird am linken Rand der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird in der horizontalen Mitte der Form platziert.
- `right`
  - : Der Referenzpunkt des Markers wird am rechten Rand der Form platziert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refY")}}
