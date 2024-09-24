---
title: Abstand
slug: Web/SVG/Attribute/spacing
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`spacing`**-Attribut gibt an, wie der Benutzeragent den Abstand zwischen den typografischen Zeichen bestimmen soll, die entlang eines Pfads gerendert werden sollen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Dieser Wert gibt an, dass der Benutzeragent Text-auf-einem-Pfad-Layoutalgorithmen verwenden soll, um den Abstand zwischen typografischen Zeichen anzupassen, um visuell ansprechende Ergebnisse zu erzielen.
- `exact`
  - : Dieser Wert gibt an, dass die typografischen Zeichen genau entsprechend den Abstandregeln gerendert werden sollen, wie durch die Layoutregeln für Text-aufeinem-Pfad spezifiziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
