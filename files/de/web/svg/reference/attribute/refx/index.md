---
title: refX
slug: Web/SVG/Reference/Attribute/refX
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

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

  - : Längen werden im Koordinatensystem des Marker-Inhalts interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Breite der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem des Marker-Inhalts interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `left`
  - : Der Referenzpunkt des Markers wird am linken Rand der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird im horizontalen Zentrum der Form platziert.
- `right`
  - : Der Referenzpunkt des Markers wird am rechten Rand der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refX` die x-Koordinate des Symbols, die durch den kumulativen Effekt des {{SVGAttr("x")}} Attributs und alle Transformationen auf das {{SVGElement("symbol")}} und sein host {{SVGElement("use")}} Element definiert wird.

Im Gegensatz zu anderen Positionierungsattributen wird `refX` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}. Falls das Attribut nicht angegeben ist, wird keine horizontale Anpassung vorgenommen, und die linke Seite des rechteckigen Ansichtsbereichs des Symbols (unabhängig von der `viewBox`-Koordinate) wird an der x-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität unterscheidet sich das Verhalten, wenn `refX` bei einem `<symbol>` Element nicht angegeben ist, von dem, wenn es mit einem Wert von `0` angegeben ist, und somit vom Verhalten, wenn ein gleichwertiges Attribut bei einem {{SVGElement("marker")}} Element nicht angegeben ist.

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

  - : Längen werden im Koordinatensystem des Marker-Inhalts interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Breite der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem des Marker-Inhalts interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `left`
  - : Der Referenzpunkt des Markers wird am linken Rand der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird im horizontalen Zentrum der Form platziert.
- `right`
  - : Der Referenzpunkt des Markers wird am rechten Rand der Form platziert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refY")}}
