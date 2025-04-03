---
title: panose-1
slug: Web/SVG/Reference/Attribute/panose-1
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{Deprecated_Header}}

Das **`panose-1`** Attribut zeigt die Panose-1-Nummer einer Schriftart an.

Panose-1 ist ein Industriestandard für TrueType-Schriftklassifikation und Abgleichtechnologie. Das PANOSE-System besteht aus einem Satz von zehn Zahlen, die die Schlüsselmöglichkeiten einer lateinischen Schriftart kategorisieren, einem Klassifikationsverfahren zur Erstellung dieser Zahlen und einer Mapper-Software, die die nächstgelegene Schriftübereinstimmung bestimmt, basierend auf einem Satz von Schriftarten.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#integer">&#x3C;integer></a
          >{10}</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0 0 0 0 0 0 0 0 0 0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<integer>{10}`
  - : Dieser Wert gibt eine Panose-1-Nummer an und besteht aus zehn Dezimalzahlen, getrennt durch Leerzeichen. Der Anfangswert null für jede PANOSE-Ziffer bedeutet "beliebig", d.h. alle Schriftarten werden mit der Panose-Nummer übereinstimmen, wenn dieser Wert verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
