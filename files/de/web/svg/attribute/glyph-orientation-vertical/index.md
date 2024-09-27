---
title: glyph-orientation-vertical
slug: Web/SVG/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`glyph-orientation-vertical`** Attribut beeinflusst die Menge, um die sich die aktuelle Textposition verschiebt, während jedes [Glyph](/de/docs/Glossary/glyph) gerendert wird.

Wenn die Inline-Fortschrittsrichtung vertikal ist und die `glyph-orientation-vertical` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition entsprechend den vertikalen Metriken des Glyphs erhöht. Andernfalls, wenn der Winkel kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den horizontalen Metriken des Glyphs erhöht.

Dieses Attribut wird nur auf Text angewendet, der in einem vertikalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut kann `glyph-orientation-vertical` als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Kontextnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> |
        <code
          ><a href="/de/docs/Web/SVG/Content_type#angle"
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

  - : Vollbreite [ideographische](/de/docs/Glossary/ideographic) und vollbreite lateinische Texte werden mit einer Glyphorientierung von 0 Grad gesetzt. Ideographische Satzzeichen und andere ideographische Zeichen, die alternative horizontale und vertikale Formen haben, verwenden die vertikale Form des Glyphs. Text, der nicht vollbreit ist, wird mit einer Glyphorientierung von 90 Grad gesetzt.

    Diese Neuausrichtungsregel gilt nur für den ersten Level nicht-ideographischen Text. Alle weiteren Einbettungen von Schreibmodi oder bidirektionale Verarbeitungen basieren auf der ersten Drehungsebene.

    > [!NOTE]
    > Text, der auf diese "gedrehte" Weise gesetzt ist, kann Ligaturen oder andere Glyphkombinationen und -umordnungen enthalten, die für die Sprache und Schrift üblich sind. (Diese Präsentationsform deaktiviert nicht die automatische Ligaturbildung oder ähnliche kontextgesteuerte Variationen.)

    Die Bestimmung, welche Zeichen automatisch gedreht werden sollten, kann je nach Benutzeragent variieren. Die Bestimmung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schrift, Zeicheneigenschaften, Schriftart und Zeichenkontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächstgelegenen der erlaubten Werte gerundet. Ein Wert von `0deg` gibt an, dass alle Glyphen mit der Oberseite der Glyphen in Richtung der Referenzorientierung gesetzt werden. Ein Wert von `90deg` gibt eine Orientierung von 90 Grad im Uhrzeigersinn von der Referenzorientierung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
