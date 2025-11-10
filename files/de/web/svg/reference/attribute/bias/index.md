---
title: bias
slug: Web/SVG/Reference/Attribute/bias
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`bias`**-Attribut verschiebt den Bereich des Filters. Nachdem die {{SVGAttr("kernelMatrix")}} des {{SVGElement("feConvolveMatrix")}}-Elements auf das Eingabebild angewendet wurde, um eine Zahl zu erzeugen, und das {{SVGAttr("divisor")}}-Attribut angewendet wurde, wird das `bias`-Attribut zu jeder Komponente hinzugefügt. Dies ermöglicht die Darstellung von Werten, die andernfalls auf 0 oder 1 begrenzt würden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feConvolveMatrix")}}

## Gebrauchshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a>
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

Eine Anwendung des bias ist, wenn es wünschenswert ist, dass ein Grauwert von 0,5 die Nullantwort des Filters darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
