---
title: refX
slug: Web/SVG/Reference/Attribute/refX
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

Das **`refX`** Attribut definiert die x-Koordinate des Bezugspunkts eines Elements.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refX` die x-Koordinate des Bezugspunkts des Markers, der genau an der Position des Markers auf der Form platziert werden soll.

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
  - : Längen werden interpretiert als im Koordinatensystem des Marker-Inhalts, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentwert der {{SVGAttr("viewBox")}}-Breite interpretiert.

- `<number>`
  - : Zahlen werden interpretiert als im Koordinatensystem des Marker-Inhalts, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `left`
  - : Der Bezugspunkt des Markers wird am linken Rand der Form platziert.
- `center`
  - : Der Bezugspunkt des Markers wird im horizontalen Zentrum der Form platziert.
- `right`
  - : Der Bezugspunkt des Markers wird am rechten Rand der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refX` die x-Koordinate des Symbols, die durch die kumulative Wirkung des Attributes {{SVGAttr("x")}} und jede Transformation auf das {{SVGElement("symbol")}} und sein Host-{{SVGElement("use")}} Element bestimmt wird.

Anders als bei anderen Positionierungsattributen wird `refX` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}. Wenn das Attribut nicht angegeben wird, erfolgt keine horizontale Anpassung, und die linke Seite des symbolischen rechteckigen Anzeigebereichs (unabhängig von den `viewBox`-Koordinaten) wird an der x-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität ist das Verhalten, wenn `refX` nicht auf einem `<symbol>` Element angegeben ist, anders als wenn es mit einem Wert von `0` angegeben ist, und daher unterschiedlich von dem Verhalten, wenn ein gleichwertiges Attribut nicht auf einem {{SVGElement("marker")}} Element angegeben ist.

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
  - : Längen werden interpretiert als im Koordinatensystem des Marker-Inhalts, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentwert der {{SVGAttr("viewBox")}}-Breite interpretiert.

- `<number>`
  - : Zahlen werden interpretiert als im Koordinatensystem des Marker-Inhalts, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `left`
  - : Der Bezugspunkt des Markers wird am linken Rand der Form platziert.
- `center`
  - : Der Bezugspunkt des Markers wird im horizontalen Zentrum der Form platziert.
- `right`
  - : Der Bezugspunkt des Markers wird am rechten Rand der Form platziert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refY")}}
