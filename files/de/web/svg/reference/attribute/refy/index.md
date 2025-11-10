---
title: refY
slug: Web/SVG/Reference/Attribute/refY
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`refY`**-Attribut definiert die y-Koordinate des Referenzpunktes eines Elements.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refY` die y-Koordinate des Referenzpunktes des Markers, der genau an der Position des Markers auf der Form platziert wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}} | <code>top</code> | <code>center</code> |
        <code>bottom</code>
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

  - : Längen werden als im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Höhe des {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden als im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `top`
  - : Der Referenzpunkt des Markers wird an der oberen Kante der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird im vertikalen Zentrum der Form platziert.
- `bottom`
  - : Der Referenzpunkt des Markers wird an der unteren Kante der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refY` die y-Koordinate des Symbols, die durch die kumulative Wirkung des {{SVGAttr("y")}}-Attributs und aller Transformationen auf das {{SVGElement("symbol")}} und sein Host-{{SVGElement("use")}}-Element definiert wird.

Im Gegensatz zu anderen Positionierungsattributen wird `refY` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}. Wenn das Attribut nicht angegeben ist, wird keine vertikale Anpassung vorgenommen, und die obere Seite des rechteckigen Ansichtsbereichs des Symbols (unabhängig von der `viewBox`-Koordinate) wird an der y-Koordinate positioniert.

> [!NOTE]
> Zur Wahrung der Abwärtskompatibilität unterscheidet sich das Verhalten, wenn `refY` auf einem `<symbol>`-Element nicht angegeben ist, von dem, wenn es mit einem Wert von `0` angegeben ist, und daher von dem Verhalten, wenn ein gleichwertiges Attribut auf einem {{SVGElement("marker")}}-Element nicht angegeben wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length")}} | <code>top</code> | <code>center</code> |
        <code>bottom</code>
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

  - : Längen werden als im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Höhe des {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden als im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `top`
  - : Der Referenzpunkt des Markers wird an der oberen Kante der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird im vertikalen Zentrum der Form platziert.
- `bottom`
  - : Der Referenzpunkt des Markers wird an der unteren Kante der Form platziert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refX")}}
