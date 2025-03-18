---
title: panose-1
slug: Web/SVG/Reference/Attribute/panose-1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`panose-1`** Attribut gibt die Panose-1 Nummer eines Schriftschnitts an.

Panose-1 ist ein Industriestandard für TrueType-Schriftklassifikation und Zuordnungstechnologie. Das PANOSE-System besteht aus einem Satz von zehn Zahlen, die die wichtigsten Merkmale einer lateinischen Schriftart kategorisieren, einem Klassifikationsverfahren zur Erstellung dieser Zahlen und einer Zuordnungssoftware, die die möglichst nächste Übereinstimmung einer Schriftart bestimmt, basierend auf einem Satz von Schriftarten.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Verwendungshinweise

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
  - : Dieser Wert gibt eine Panose-1 Nummer an und besteht aus zehn Dezimalzahlen, die durch Leerzeichen getrennt sind. Der anfängliche Wert Null für jede PANOSE-Ziffer bedeutet "beliebig", d.h. alle Schriftarten stimmen mit der Panose-Nummer überein, wenn dieser Wert verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
