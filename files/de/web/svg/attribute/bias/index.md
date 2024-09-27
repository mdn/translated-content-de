---
title: bias
slug: Web/SVG/Attribute/bias
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}

Das **`bias`**-Attribut verschiebt den Bereich des Filters. Nach Anwendung der {{SVGAttr("kernelMatrix")}} des {{SVGElement("feConvolveMatrix")}}-Elements auf das Eingabebild, um eine Zahl zu erhalten, und nach Anwendung des {{SVGAttr("divisor")}}-Attributs, wird das `bias`-Attribut zu jeder Komponente hinzugefügt. Dies ermöglicht die Darstellung von Werten, die sonst auf 0 oder 1 geklammert würden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}

## Anmerkungen zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a>
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

Eine Anwendung von `bias` ist, wenn es wünschenswert ist, dass ein Grauwert von 0,5 die Nullreaktion des Filters darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
