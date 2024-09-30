---
title: refX
slug: Web/SVG/Attribute/refX
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`refX`**-Attribut definiert die x-Koordinate des Bezugspunkts eines Elements.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refX` die x-Koordinate des Bezugspunkts des Markers, der genau an der Position des Markers auf der Form platziert wird.

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

  - : Längen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der {{SVGAttr("viewBox")}}-Breite interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `left`
  - : Der Bezugspunkt des Markers wird an der linken Kante der Form platziert.
- `center`
  - : Der Bezugspunkt des Markers wird im horizontalen Zentrum der Form platziert.
- `right`
  - : Der Bezugspunkt des Markers wird an der rechten Kante der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refX` die x-Koordinate des Symbols, die durch den kumulativen Effekt des {{SVGAttr("x")}}-Attributs und aller Transformationen auf das {{SVGElement("symbol")}} und sein zugehöriges {{SVGElement("use")}}-Element festgelegt wird.

Anders als bei anderen Positionierungsattributen wird `refX` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}. Wenn das Attribut nicht angegeben ist, erfolgt keine horizontale Anpassung, und die linke Seite des symbolischen rechteckigen Ansichtsbereichs (unabhängig von den `viewBox`-Koordinaten) wird an der x-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Rückwärtskompatibilität unterscheidet sich das Verhalten, wenn `refX` auf einem `<symbol>`-Element nicht angegeben ist, von dem, wenn es mit einem Wert von `0` angegeben wird, und daher unterschiedlich vom Verhalten, wenn ein gleichwertiges Attribut auf einem {{SVGElement("marker")}}-Element nicht angegeben ist.

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
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`

  - : Längen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der {{SVGAttr("viewBox")}}-Breite interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `left`
  - : Der Bezugspunkt des Markers wird an der linken Kante der Form platziert.
- `center`
  - : Der Bezugspunkt des Markers wird im horizontalen Zentrum der Form platziert.
- `right`
  - : Der Bezugspunkt des Markers wird an der rechten Kante der Form platziert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refY")}}
