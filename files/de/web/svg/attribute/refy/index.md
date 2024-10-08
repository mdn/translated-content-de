---
title: refY
slug: Web/SVG/Attribute/refY
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`refY`**-Attribut definiert die y-Koordinate eines Referenzpunktes eines Elements.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refY` die y-Koordinate des Referenzpunktes des Markers, der genau an der Position des Markers auf der Form platziert werden soll.

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

  - : Längen werden als Teil des Koordinatensystems der Marker-Inhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Höhe der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden als Teil des Koordinatensystems der Marker-Inhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `top`
  - : Der Referenzpunkt des Markers wird an der oberen Kante der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird im vertikalen Zentrum der Form platziert.
- `bottom`
  - : Der Referenzpunkt des Markers wird an der unteren Kante der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refY` die y-Koordinate des Symbols, die durch den kumulierten Effekt des {{SVGAttr("y")}}-Attributs und jegliche Transformationen auf dem {{SVGElement("symbol")}} und seinem Host-{{SVGElement("use")}}-Element definiert wird.

Im Gegensatz zu anderen Positionierungsattributen wird `refY` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}. Wenn das Attribut nicht angegeben ist, wird keine vertikale Anpassung vorgenommen, und die obere Seite der rechteckigen Ansichtsbereichregion des Symbols (unabhängig von der `viewBox`-Koordinate) wird an der y-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität ist das Verhalten, wenn `refY` bei einem `<symbol>`-Element nicht angegeben ist, anders als wenn es mit einem Wert von `0` angegeben ist, und daher anders als das Verhalten, wenn ein entsprechendes Attribut bei einem {{SVGElement("marker")}}-Element nicht angegeben ist.

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

  - : Längen werden als Teil des Koordinatensystems der Marker-Inhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Höhe der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden als Teil des Koordinatensystems der Marker-Inhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
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
