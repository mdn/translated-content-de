---
title: panose-1
slug: Web/SVG/Attribute/panose-1
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das **`panose-1`** Attribut gibt die Panose-1 Nummer eines Schriftbildes an.

Panose-1 ist eine branchenspezifische TrueType Schriftklassifizierungs- und Abgleichstechnologie. Das PANOSE-System besteht aus einer Reihe von zehn Zahlen, die die Hauptmerkmale eines lateinischen Schriftsatzes kategorisieren, einem Klassifizierungsverfahren zur Erstellung dieser Zahlen, und einer Zuordnungssoftware, die das am besten passende Schriftbild aus einer Reihe von Schriftsätzen ermittelt.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Nutzungshinweise

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
  - : Dieser Wert gibt eine Panose-1 Nummer an und besteht aus zehn Dezimalzahlen, die durch Leerzeichen getrennt sind. Der anfängliche Wert von Null für jede PANOSE-Ziffer bedeutet "beliebig", d.h. alle Schriften passen zur Panose-Nummer, wenn dieser Wert verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
