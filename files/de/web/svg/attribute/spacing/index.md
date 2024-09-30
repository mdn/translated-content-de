---
title: spacing
slug: Web/SVG/Attribute/spacing
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das Attribut **`spacing`** gibt an, wie der Benutzeragent den Abstand zwischen typografischen Zeichen bestimmen soll, die auf einem Pfad gerendert werden sollen.

Sie können dieses Attribut mit folgenden SVG-Elementen verwenden:

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
  - : Dieser Wert zeigt an, dass der Benutzeragent Algorithmen zur Text-auf-einem-Pfad-Anordnung verwenden sollte, um den Abstand zwischen typografischen Zeichen anzupassen, um optisch ansprechende Ergebnisse zu erzielen.
- `exact`
  - : Dieser Wert bedeutet, dass die typografischen Zeichen genau entsprechend den Abstandsregeln rendert werden sollen, wie sie durch die Layoutregeln für Text-auf-einem-Pfad festgelegt sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
