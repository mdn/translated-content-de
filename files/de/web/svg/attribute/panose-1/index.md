---
title: panose-1
slug: Web/SVG/Attribute/panose-1
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das **`panose-1`** Attribut gibt die Panose-1-Nummer eines Font-Gesichts an.

Panose-1 ist ein Industriestandard für die Klassifizierung und das Matching von TrueType-Schriften. Das PANOSE-System besteht aus einer Reihe von zehn Zahlen, die die wesentlichen Merkmale einer lateinischen Schriftart kategorisieren, einem Klassifizierungsverfahren zur Erstellung dieser Zahlen und einem Mapper-Software, das die nächstgelegene mögliche Schriftart bestimmt, wenn eine Reihe von Schriftarten vorliegt.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font-face")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#integer">&#x3C;integer></a
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
  - : Dieser Wert spezifiziert eine Panose-1-Nummer und besteht aus zehn Dezimalzahlen, getrennt durch Leerzeichen. Der Anfangswert Null für jede PANOSE-Ziffer bedeutet "beliebig", d.h. alle Schriften stimmen mit der Panose-Nummer überein, wenn dieser Wert verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
