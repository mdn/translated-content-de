---
title: baseProfile
slug: Web/SVG/Attribute/baseProfile
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`baseProfile`**-Attribut beschreibt das minimale SVG-Sprachprofil, das der Autor für notwendig hält, um den Inhalt korrekt darzustellen. Das Attribut legt keine Verarbeitungsbeschränkungen fest; es kann als Metadaten betrachtet werden.

Zum Beispiel könnte der Wert des Attributs von einem Autorenwerkzeug verwendet werden, um den Benutzer zu warnen, wenn er das Dokument über den Umfang des angegebenen Basisprofils hinaus ändert.

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