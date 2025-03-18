---
title: Werte
slug: Web/SVG/Reference/Attribute/values
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das `values`-Attribut hat unterschiedliche Bedeutungen, abhängig vom Kontext, in dem es verwendet wird. Entweder definiert es eine Sequenz von Werten, die im Laufe einer Animation verwendet werden, oder es ist eine Liste von Zahlen für eine Farbmatrix, die unterschiedlich interpretiert wird, je nachdem, welcher Farbwechsel ausgeführt werden soll.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}

## animate, animateMotion, animateTransform

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}} und {{SVGElement("animateTransform")}} ist `values` eine Liste von Werten, die die Sequenz von Werten im Verlauf der Animation definiert. Wenn dieses Attribut angegeben ist, werden alle {{SVGAttr("from")}}, {{SVGAttr("to")}} und {{SVGAttr("by")}} Attributwerte, die am Element gesetzt sind, ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#list-of-ts"
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

Für das {{SVGElement("feColorMatrix")}}-Element ist `values` eine Liste von Zahlen, die unterschiedlich interpretiert wird, abhängig vom Wert des {{SVGAttr("type")}}-Attributs.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#list-of-ts"
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

  - : Der Wert ist eine Liste von Zahlen, die unterschiedlich interpretiert wird, abhängig vom Wert des `type`-Attributs:

    - Für `type="matrix"` ist `values` eine Liste von 20 Matrixwerten (a00 a01 a02 a03 a04 a10 a11 … a34), getrennt durch Leerzeichen und/oder ein Komma.
    - Für `type="saturate"` ist `values` ein einzelner reeller Zahlenwert (0 bis 1).
    - Für `type="hueRotate"` ist `values` ein einzelner reeller Zahlenwert (Grad).
    - Für `type="luminanceToAlpha"` ist `values` nicht anwendbar.

## Spezifikationen

{{Specifications}}
