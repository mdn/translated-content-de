---
title: refY
slug: Web/SVG/Reference/Attribute/refY
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`refY`**-Attribut definiert die y-Koordinate des Bezugspunkts eines Elements.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refY` die y-Koordinate des Bezugspunkts des Markers, der genau an der Position des Markers auf der Form platziert wird.

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

  - : Längen werden als im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute.

    Prozentuale Werte werden als Prozentwert der Höhe der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden als im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute.
- `top`
  - : Der Bezugspunkt des Markers wird an der oberen Kante der Form platziert.
- `center`
  - : Der Bezugspunkt des Markers wird im vertikalen Zentrum der Form platziert.
- `bottom`
  - : Der Bezugspunkt des Markers wird an der unteren Kante der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refY` die y-Koordinate des Symbols, die durch den kumulativen Effekt des {{SVGAttr("y")}}-Attributs und jeglicher Transformationen auf dem {{SVGElement("symbol")}} und dessen Host-{{SVGElement("use")}}-Element bestimmt wird.

Im Gegensatz zu anderen Positionierungsattributen wird `refY` als im Koordinatensystem der Symbolinhalte interpretiert, nach der Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute. Wenn das Attribut nicht angegeben ist, erfolgt keine vertikale Anpassung, und die obere Seite der rechteckigen Ansichtsbereichs des Symbols (unabhängig von den `viewBox`-Koordinaten) wird an der y-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität unterscheidet sich das Verhalten, wenn `refY` auf einem `<symbol>`-Element nicht angegeben ist, von dem, wenn es mit einem Wert von `0` angegeben ist, und somit auch von dem Verhalten, wenn ein gleichwertiges Attribut nicht auf einem {{SVGElement("marker")}}-Element angegeben ist.

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

  - : Längen werden als im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute.

    Prozentuale Werte werden als Prozentwert der Höhe der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden als im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute.
- `top`
  - : Der Bezugspunkt des Markers wird an der oberen Kante der Form platziert.
- `center`
  - : Der Bezugspunkt des Markers wird im vertikalen Zentrum der Form platziert.
- `bottom`
  - : Der Bezugspunkt des Markers wird an der unteren Kante der Form platziert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refX")}}
