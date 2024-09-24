---
title: refX
slug: Web/SVG/Attribute/refX
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`refX`** Attribut definiert die x-Koordinate des Referenzpunkts eines Elements.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refX` die x-Koordinate des Referenzpunkts des Markers, der genau an der Position des Markers auf der Form platziert wird.

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

  - : Längen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} Attribute.

    Prozentuale Werte werden als Anteil der Breite der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} Attribute.
- `left`
  - : Der Referenzpunkt des Markers befindet sich am linken Rand der Form.
- `center`
  - : Der Referenzpunkt des Markers befindet sich in der horizontalen Mitte der Form.
- `right`
  - : Der Referenzpunkt des Markers befindet sich am rechten Rand der Form.

## symbol

Für {{SVGElement("symbol")}} definiert `refX` die x-Koordinate des Symbols, die durch die kumulative Wirkung des {{SVGAttr("x")}} Attributs und aller Transformationen auf das {{SVGElement("symbol")}} sowie dessen Host-{{SVGElement("use")}}-Element bestimmt wird.

Im Gegensatz zu anderen Positionierungsattributen wird `refX` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} Attribute. Wenn das Attribut nicht angegeben ist, erfolgt keine horizontale Anpassung, und die linke Seite des rechteckigen Ansichtsbereichs des Symbols (unabhängig von der `viewBox`-Koordinate) wird an der x-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität unterscheidet sich das Verhalten, wenn `refX` bei einem `<symbol>`-Element nicht angegeben ist, von dem, wenn es mit einem Wert von `0` angegeben ist, und somit von dem Verhalten, wenn ein gleichwertiges Attribut bei einem {{SVGElement("marker")}}-Element nicht angegeben ist.

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

  - : Längen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} Attribute.

    Prozentuale Werte werden als Anteil der Breite der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} Attribute.
- `left`
  - : Der Referenzpunkt des Markers befindet sich am linken Rand der Form.
- `center`
  - : Der Referenzpunkt des Markers befindet sich in der horizontalen Mitte der Form.
- `right`
  - : Der Referenzpunkt des Markers befindet sich am rechten Rand der Form.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refY")}}
