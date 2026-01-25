---
title: baseProfile
slug: Web/SVG/Reference/Attribute/baseProfile
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{Deprecated_Header}}

Das **`baseProfile`** Attribut beschreibt das minimale SVG-Sprachprofil, das nach Ansicht des Autors notwendig ist, um den Inhalt korrekt darzustellen. Das Attribut legt keine Verarbeitungseinschränkungen fest; es kann als Metadaten betrachtet werden.

Zum Beispiel könnte der Wert des Attributs von einem Autorentool verwendet werden, um den Benutzer zu warnen, wenn er das Dokument über den Umfang des angegebenen Basisprofils hinaus verändert.

Jedes SVG-Profil sollte den Text definieren, der für dieses Attribut geeignet ist.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("svg")}}

## Kontexthinweise

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
