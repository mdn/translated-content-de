---
title: baseProfile
slug: Web/SVG/Reference/Attribute/baseProfile
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{Deprecated_Header}}

Das **`baseProfile`** Attribut beschreibt das minimale SVG-Sprachprofil, das der Autor für notwendig hält, um den Inhalt korrekt darzustellen. Das Attribut legt keine Verarbeitungsbeschränkungen fest; es kann als Metadaten betrachtet werden.

Zum Beispiel könnte der Wert des Attributs von einem Autorentool verwendet werden, um den Benutzer zu warnen, wenn er das Dokument über den Umfang des angegebenen Basisprofils hinaus ändert.

Jedes SVG-Profil sollte den für dieses Attribut geeigneten Text definieren.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
