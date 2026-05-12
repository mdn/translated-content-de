---
title: glyph-orientation-vertical
slug: Web/SVG/Reference/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

{{Deprecated_Header}}

Das **`glyph-orientation-vertical`** Attribut beeinflusst die Menge, um die die aktuelle Textposition voranschreitet, während jedes {{Glossary("glyph", "Glyph")}} gerendert wird.

Wenn die Inline-Progressionsrichtung vertikal ist und `glyph-orientation-vertical` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den vertikalen Metriken des Glyphs inkrementiert. Andernfalls, wenn der Winkel kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den horizontalen Metriken des Glyphs inkrementiert.

Dieses Attribut wird nur auf Text angewendet, der in einem vertikalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut hat `glyph-orientation-vertical` auch ein entsprechendes CSS-Property: {{cssxref("glyph-orientation-vertical")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Volle Breite ideografischer und Volle Breite lateinischer Text wird mit einer Glyphenorientierung von 0 Grad gesetzt. Ideografische Interpunktionen und andere ideografische Zeichen mit alternativen horizontalen und vertikalen Formen verwenden die vertikale Form des Glyphs. Text, der nicht von voller Breite ist, wird mit einer Glyphenorientierung von 90 Grad gesetzt.

    Diese Neuorientierungsregel gilt nur für den erstemaligen nicht-ideografischen Text. Alle weiteren Einbettungen von Schreibmodi oder bidirektionaler Verarbeitung basieren auf der erstemaligen Rotation.

    > [!NOTE]
    > Text, der auf diese "gedrehte" Weise gesetzt ist, kann Ligaturen oder andere kombinierte und neu geordnete Glyphen enthalten, die für die Sprache und Schrift üblich sind. (Diese Präsentationsform deaktiviert nicht die automatische Ligaturenbildung oder ähnliche kontextgesteuerte Variationen.)

    Die Bestimmung, welche Zeichen automatisch gedreht werden sollen, kann je nach Benutzeragent variieren. Die Bestimmung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schrift, Zeichenmerkmalen, Schriftart und Zeichenkontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächstgelegenen der erlaubten Werte gerundet. Ein Wert von `0deg` gibt an, dass alle Zeichen mit der Oberseite der Zeichen in Richtung der Referenzorientierung gesetzt werden. Ein Wert von `90deg` gibt eine Orientierung von 90 Grad im Uhrzeigersinn von der Referenzorientierung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
