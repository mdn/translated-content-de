---
title: refY
slug: Web/SVG/Attribute/refY
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`refY`**-Attribut definiert die y-Koordinate des Referenzpunktes eines Elements.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

Für {{SVGElement("marker")}} definiert `refY` die y-Koordinate des Referenzpunktes des Markers, welcher genau an der Position des Markers auf der Form platziert werden soll.

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

  - : Längen werden im Koordinatensystem des Marker-Inhalts interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Höhe des {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem des Marker-Inhalts interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `top`
  - : Der Referenzpunkt des Markers wird am oberen Rand der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird in der vertikalen Mitte der Form platziert.
- `bottom`
  - : Der Referenzpunkt des Markers wird am unteren Rand der Form platziert.

## symbol

Für {{SVGElement("symbol")}} definiert `refY` die y-Koordinate des Symbols, die durch die kumulative Wirkung des Attributes {{SVGAttr("y")}} und jeglicher Transformationen auf das {{SVGElement("symbol")}} und seinem Host-{{SVGElement("use")}}-Element bestimmt wird.

Im Gegensatz zu anderen Positionierungsattributen wird `refY` im Koordinatensystem der Symbolinhalte interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}. Wenn das Attribut nicht angegeben ist, erfolgt keine vertikale Anpassung, und die obere Seite des rechteckigen Ansichtsbereichs des Symbols (unabhängig von der `viewBox`-Koordinate) wird auf die y-Koordinate positioniert.

> [!NOTE]
> Aus Gründen der Rückwärtskompatibilität unterscheidet sich das Verhalten, wenn `refY` für ein `<symbol>`-Element nicht angegeben ist, von dem, wenn es mit einem Wert von `0` angegeben wird, und daher auch von dem Verhalten, wenn ein gleichwertiges Attribut bei einem {{SVGElement("marker")}}-Element nicht angegeben ist.

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

  - : Längen werden im Koordinatensystem des Marker-Inhalts interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.

    Prozentwerte werden als Prozentsatz der Höhe des {{SVGAttr("viewBox")}} interpretiert.

- `<number>`
  - : Zahlen werden im Koordinatensystem des Marker-Inhalts interpretiert, nach Anwendung der Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}}.
- `top`
  - : Der Referenzpunkt des Markers wird am oberen Rand der Form platziert.
- `center`
  - : Der Referenzpunkt des Markers wird in der vertikalen Mitte der Form platziert.
- `bottom`
  - : Der Referenzpunkt des Markers wird am unteren Rand der Form platziert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("refX")}}
