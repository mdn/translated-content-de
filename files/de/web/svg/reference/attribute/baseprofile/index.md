---
title: baseProfile
slug: Web/SVG/Reference/Attribute/baseProfile
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das Attribut **`baseProfile`** beschreibt das minimale SVG-Sprachprofil, das der Autor für notwendig hält, um den Inhalt korrekt darzustellen. Das Attribut spezifiziert keine Verarbeitungseinschränkungen; es kann als Metadaten betrachtet werden.

Zum Beispiel könnte der Wert des Attributs von einem Autorentool verwendet werden, um den Nutzer zu warnen, wenn er das Dokument über den Umfang des angegebenen Basisprofils hinaus bearbeitet.

Jedes SVG-Profil sollte den für dieses Attribut geeigneten Text definieren.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("svg")}}

## Kontextnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Profilname</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Beispiel

```svg
<svg width="120" height="120" version="1.1"
 xmlns="http://www.w3.org/2000/svg" baseProfile="full">

  ...

</svg>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
