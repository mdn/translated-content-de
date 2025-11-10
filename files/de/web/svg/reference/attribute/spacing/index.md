---
title: spacing
slug: Web/SVG/Reference/Attribute/spacing
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`spacing`**-Attribut gibt an, wie der Benutzeragent den Abstand zwischen typografischen Zeichen bestimmen soll, die entlang eines Pfads gerendert werden sollen.

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
  - : Dieser Wert gibt an, dass der Benutzeragent Text-auf-einem-Pfad-Layout-Algorithmen verwenden sollte, um den Abstand zwischen typografischen Zeichen anzupassen, um visuell ansprechende Ergebnisse zu erzielen.
- `exact`
  - : Dieser Wert gibt an, dass die typografischen Zeichen genau gemäß den Abstandsregeln gerendert werden sollen, wie sie durch die Layoutregeln für Text-auf-einem-Pfad festgelegt sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
