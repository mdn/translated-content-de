---
title: spacing
slug: Web/SVG/Reference/Attribute/spacing
l10n:
  sourceCommit: 73f93cb9449dc42059d2f8835338e8674b3d8bdd
---

Das **`spacing`**-Attribut gibt an, wie das Benutzerprogramm den Abstand zwischen typografischen Zeichen bestimmen soll, die entlang eines Pfades gerendert werden.

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
  - : Dieser Wert gibt an, dass das Benutzerprogramm Text-auf-einem-Pfad-Layout-Algorithmen verwenden soll, um den Abstand zwischen typografischen Zeichen anzupassen, um visuell ansprechende Ergebnisse zu erzielen.
- `exact`
  - : Dieser Wert gibt an, dass die typografischen Zeichen genau nach den Abstandsregeln gerendert werden sollen, wie sie von den Layoutregeln für Text-auf-einem-Pfad angegeben sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPathElement.spacing`](/de/docs/Web/API/SVGTextPathElement/spacing)
