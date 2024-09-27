---
title: spacing
slug: Web/SVG/Attribute/spacing
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`spacing`**-Attribut gibt an, wie der User Agent den Abstand zwischen typografischen Zeichen bestimmen soll, die entlang eines Pfades dargestellt werden sollen.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("textPath")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>auto</code> | <code>exact</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>exact</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Dieser Wert gibt an, dass der User Agent Layout-Algorithmen für Text-auf-einem-Pfad verwenden soll, um den Abstand zwischen den typografischen Zeichen visuell ansprechend anzupassen.
- `exact`
  - : Dieser Wert gibt an, dass die typografischen Zeichen genau gemäß den Abstandsregeln dargestellt werden sollen, wie sie in den Layoutregeln für Text-auf-einem-Pfad festgelegt sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
