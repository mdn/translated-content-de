---
title: refY
slug: Web/SVG/Reference/Attribute/refY
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

Das **`refY`**-Attribut definiert die y-Koordinate des Referenzpunkts eines Elements.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refY` die y-Koordinate des Referenzpunkts des Markers, der genau an der Position des Markers auf der Form platziert wird.

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
  - : Längen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Höhe der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `top`
  - : Der Referenzpunkt des Markers wird an der oberen Kante der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird im vertikalen Zentrum der Form platziert.
- `bottom`
  - : Der Referenzpunkt des Markers wird an der unteren Kante der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refY` die y-Koordinate des Symbols, die durch den kumulativen Effekt des Attributs {{SVGAttr("y")}} und aller Transformationen auf das {{SVGElement("symbol")}} und dessen Host-{{SVGElement("use")}}-Element bestimmt wird.

Im Gegensatz zu anderen Positionierungsattributen wird `refY` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}. Wenn das Attribut nicht angegeben ist, wird keine vertikale Anpassung vorgenommen, und die obere Seite des rechteckigen Ansichtsbereichs des Symbols (unabhängig von der `viewBox`-Koordinate) wird an der y-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Rückwärtskompatibilität unterscheidet sich das Verhalten, wenn `refY` bei einem `<symbol>`-Element nicht spezifiziert ist, von dem, wenn es mit einem Wert von `0` angegeben wird, und somit von dem Verhalten, wenn ein gleichwertiges Attribut bei einem {{SVGElement("marker")}}-Element nicht spezifiziert wird.

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
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Längen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Höhe der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem der Markerinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
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
