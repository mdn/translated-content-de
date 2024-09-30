---
title: values
slug: Web/SVG/Attribute/values
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das `values`-Attribut hat je nach Kontext, in dem es verwendet wird, unterschiedliche Bedeutungen. Entweder definiert es eine Sequenz von Werten im Laufe einer Animation, oder es handelt sich um eine Liste von Zahlen für eine Farbmatrix, die je nach Art der Farbänderung unterschiedlich interpretiert wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}

## animate, animateMotion, animateTransform

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}} und {{SVGElement("animateTransform")}} ist `values` eine Liste von Werten, die die Sequenz von Werten im Laufe der Animation definiert. Wenn dieses Attribut angegeben ist, werden alle Werte der Attribute {{SVGAttr("from")}}, {{SVGAttr("to")}} und {{SVGAttr("by")}}, die für das Element festgelegt sind, ignoriert.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<list-of-values>`
  - : Der Wert enthält eine durch Semikolons getrennte Liste von einem oder mehreren Werten. Der Typ der Werte wird durch die Attribute {{SVGAttr("href")}} und {{SVGAttr("attributeName")}} definiert.

## feColorMatrix

Für das {{SVGElement("feColorMatrix")}}-Element ist `values` eine Liste von Zahlen, die unterschiedlich interpretiert werden, abhängig vom Wert des {{SVGAttr("type")}}-Attributs.

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
          <code>type="saturate"</code>, <code>1</code>, was in einer Identitätsmatrix
          resultiert,<br />wenn <code>type="hueRotate"</code>, <code>0</code>,
          was in einer Identitätsmatrix resultiert</em
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

  - : Der Wert ist eine Liste von Zahlen, die abhängig vom Wert des `type`-Attributs unterschiedlich interpretiert wird:

    - Für `type="matrix"` ist `values` eine Liste von 20 Matrixwerten (a00 a01 a02 a03 a04 a10 a11 … a34), getrennt durch Leerzeichen und/oder ein Komma.
    - Für `type="saturate"` ist `values` ein einzelner realer Zahlenwert (0 bis 1).
    - Für `type="hueRotate"` ist `values` ein einziger realer Zahlenwert (Grad).
    - Für `type="luminanceToAlpha"` ist `values` nicht zutreffend.

## Spezifikationen

{{Specifications}}
