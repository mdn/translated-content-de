---
title: Werte
slug: Web/SVG/Attribute/values
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das Attribut `values` hat je nach Kontext, in dem es verwendet wird, unterschiedliche Bedeutungen. Entweder definiert es eine Sequenz von Werten, die im Verlauf einer Animation verwendet werden, oder es ist eine Liste von Zahlen für eine Farbmatrix, die je nach Art der durchzuführenden Farbänderung unterschiedlich interpretiert wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}

## animate, animateMotion, animateTransform

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}} und {{SVGElement("animateTransform")}} ist `values` eine Liste von Werten, die die Sequenz der Werte im Verlauf der Animation definiert. Wenn dieses Attribut angegeben ist, werden alle auf dem Element gesetzten Werte der Attribute {{SVGAttr("from")}}, {{SVGAttr("to")}} und {{SVGAttr("by")}} ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#list-of-ts"
            >&#x3C;list-of-values></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<list-of-values>`
  - : Der Wert enthält eine durch Semikolon getrennte Liste von einem oder mehreren Werten. Der Typ der Werte wird durch die Attribute {{SVGAttr("href")}} und {{SVGAttr("attributeName")}} definiert.

## feColorMatrix

Für das Element {{SVGElement("feColorMatrix")}} ist `values` eine Liste von Zahlen, die je nach Wert des Attributes {{SVGAttr("type")}} unterschiedlich interpretiert wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#list-of-ts"
            >&#x3C;list-of-numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        <em
          >Wenn <code>type="matrix"</code>, Identitätsmatrix,<br />wenn
          <code>type="saturate"</code>, <code>1</code>, was zu einer
          Identitätsmatrix führt,<br />wenn <code>type="hueRotate"</code>,
          <code>0</code>, was zu einer Identitätsmatrix führt</em
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<list-of-numbers>`

  - : Der Wert ist eine Liste von Zahlen, die je nach Wert des `type`-Attributes unterschiedlich interpretiert wird:

    - Für `type="matrix"` ist `values` eine Liste von 20 Matrixwerten (a00 a01 a02 a03 a04 a10 a11 … a34), getrennt durch Leerzeichen und/oder Kommas.
    - Für `type="saturate"` ist `values` ein einzelner reeller Zahlenwert (0 bis 1).
    - Für `type="hueRotate"` ist `values` ein einzelner reeller Zahlenwert (Grad).
    - Für `type="luminanceToAlpha"` ist `values` nicht anwendbar.

## Spezifikationen

{{Specifications}}
