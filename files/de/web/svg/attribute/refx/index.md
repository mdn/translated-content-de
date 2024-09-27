---
title: refX
slug: Web/SVG/Attribute/refX
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`refX`**-Attribut definiert die x-Koordinate des Referenzpunktes eines Elements.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refX` die x-Koordinate des Referenzpunktes des Markers, der genau an der Position des Markers auf der Form platziert werden soll.

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

  - : Längen werden im Koordinatensystem der Marker-Inhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute.

    Prozentwerte werden als Prozentsatz der Breite der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem der Marker-Inhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute.
- `left`
  - : Der Referenzpunkt des Markers wird an der linken Kante der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird am horizontalen Zentrum der Form platziert.
- `right`
  - : Der Referenzpunkt des Markers wird an der rechten Kante der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refX` die x-Koordinate des Symbols, die durch den kumulativen Effekt des {{SVGAttr("x")}}-Attributs und aller Transformationen auf das {{SVGElement("symbol")}} und sein Host-{{SVGElement("use")}}-Element bestimmt wird.

Im Gegensatz zu anderen Positionierungsattributen wird `refX` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute. Wenn das Attribut nicht angegeben ist, wird keine horizontale Anpassung vorgenommen, und die linke Seite des rechteckigen Ansichtsbereichs des Symbols (unabhängig von der `viewBox`-Koordinate) wird an der x-Koordinate positioniert.

> [!NOTE]
> Aus Kompatibilitätsgründen verhält sich das Fehlen des `refX`-Attributs auf einem `<symbol>`-Element anders als wenn es mit einem Wert von `0` angegeben wird, und somit anders als wenn ein ähnliches Attribut auf einem {{SVGElement("marker")}}-Element nicht angegeben wird.

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

  - : Längen werden im Koordinatensystem der Marker-Inhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute.

    Prozentwerte werden als Prozentsatz der Breite der {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem der Marker-Inhalte interpretiert, nach Anwendung der {{SVGAttr("viewBox")}}- und {{SVGAttr("preserveAspectRatio")}}-Attribute.
- `left`
  - : Der Referenzpunkt des Markers wird an der linken Kante der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird am horizontalen Zentrum der Form platziert.
- `right`
  - : Der Referenzpunkt des Markers wird an der rechten Kante der Form platziert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refY")}}
