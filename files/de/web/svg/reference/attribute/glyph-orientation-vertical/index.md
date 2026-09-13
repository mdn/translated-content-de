---
title: glyph-orientation-vertical
slug: Web/SVG/Reference/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das Attribut **`glyph-orientation-vertical`** beeinflusst den Betrag, um den die aktuelle Textposition voranschreitet, während jedes {{Glossary("glyph", "glyph")}} gerendert wird.

Wenn die inline-progression-direction vertikal ist und die `glyph-orientation-vertical` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß der vertikalen Metriken des Glyphen inkrementiert. Andernfalls, wenn der Winkel kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß der horizontalen Metriken des Glyphen inkrementiert.

Dieses Attribut wird nur auf Text angewendet, der in einem vertikalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut hat `glyph-orientation-vertical` auch ein entsprechendes CSS-Property: {{cssxref("glyph-orientation-vertical")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tspan")}}

## Kontextnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> |
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#angle"
            >&#x3C;angle></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Vollbreite ideografische und vollbreite lateinische Schriftarten werden mit einer Glyphen-Orientierung von 0 Grad gesetzt. Ideografische Satzzeichen und andere ideografische Zeichen mit alternativen horizontalen und vertikalen Formen verwenden die vertikale Form des Glyphen. Text, der nicht vollbreit ist, wird mit einer Glyphen-Orientierung von 90 Grad gesetzt.

    Diese Neuausrichtungsregel gilt nur für den ersten nicht-ideografischen Text. Alle weiteren Einbettungen von Schreibmodi oder bidirektionalen Verarbeitungen basieren auf der ersten Drehung.

    > [!NOTE]
    > Text, der auf diese "gedrehte" Weise gesetzt wird, kann Ligaturen oder andere Glyphen-Kombinationen und Umordnungen enthalten, die für die Sprache und Schrift typisch sind. (Diese Präsentationsform deaktiviert nicht die automatische Ligaturbildung oder ähnliche kontextgesteuerte Variationen.)

    Die Bestimmung, welche Zeichen automatisch gedreht werden sollen, kann je nach Nutzeragent variieren. Diese Bestimmung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schrift, Zeichen-Eigenschaften, Schriftart und Zeichenkontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächstgelegenen der zulässigen Werte gerundet.
    Ein Wert von `0deg` zeigt an, dass alle Glyphen mit der Oberseite der Glyphen zur Referenzorientierung gesetzt werden. Ein Wert von `90deg` zeigt eine Orientierung von 90 Grad im Uhrzeigersinn von der Referenzorientierung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
