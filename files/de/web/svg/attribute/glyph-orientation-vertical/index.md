---
title: glyph-orientation-vertical
slug: Web/SVG/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{SVGRef}}{{Deprecated_Header}}

Das Attribut **`glyph-orientation-vertical`** beeinflusst den Fortschritt der aktuellen Textposition, während jedes {{Glossary("glyph")}} gerendert wird.

Wenn die inline-progression-direction vertikal ist und `glyph-orientation-vertical` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den vertikalen Metriken des Glyphs inkrementiert. Andernfalls, wenn der Winkel kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den horizontalen Metriken des Glyphs inkrementiert.

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

  - : Fullwidth-{{Glossary("ideographic")}} und Fullwidth-Lateinischer Text wird mit einer Glyph-Orientierung von 0 Grad gesetzt. Ideographische Satzzeichen und andere ideographische Zeichen mit alternativen horizontalen und vertikalen Formen verwenden die vertikale Form des Glyphs. Text, der nicht fullwidth ist, wird mit einer Glyph-Orientierung von 90 Grad gesetzt.

    Diese Neuausrichtungsregel gilt nur für den ersten nicht-ideographischen Text. Alle weiteren Einbettungen von Schreibmodi oder bidirektionale Verarbeitung basieren auf der ersten Rotationsebene.

    > [!NOTE]
    > Text, der in dieser "rotierten" Weise gesetzt ist, kann Ligaturen oder andere Glyph-Kombinationen und Umordnungen enthalten, die in Sprache und Schrift üblich sind. (Diese Präsentationsform deaktiviert nicht die automatische Bildung von Ligaturen oder ähnliche kontextabhängige Variationen.)

    Die Bestimmung, welche Zeichen automatisch rotiert werden sollen, kann je nach Benutzeragent variieren. Die Bestimmung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schrift, Zeichen-Eigenschaften, Schriftart und Zeichen-Kontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächstgelegenen erlaubten Wert gerundet. Ein Wert von `0deg` gibt an, dass alle Glyphen mit der Oberseite der Glyphen zur Referenzorientierung ausgerichtet werden. Ein Wert von `90deg` gibt eine Orientierung von 90 Grad im Uhrzeigersinn von der Referenzorientierung an.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
