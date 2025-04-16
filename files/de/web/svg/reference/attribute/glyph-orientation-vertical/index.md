---
title: glyph-orientation-vertical
slug: Web/SVG/Reference/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{Deprecated_Header}}

Das **`glyph-orientation-vertical`** Attribut beeinflusst die Menge, um die die aktuelle Textposition fortschreitet, während jedes {{Glossary("glyph", "Glyph")}} gerendert wird.

Wenn die Inline-Progressionsrichtung vertikal ist und `glyph-orientation-vertical` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den vertikalen Metriken des Glyphs inkrementiert. Andernfalls, wenn der Winkel kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den horizontalen Metriken des Glyphs inkrementiert.

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

  - : Vollbreite {{Glossary("ideographic", "ideografische")}} und vollbreite lateinische Texte werden mit einer Glyphenorientierung von 0 Grad eingestellt. Ideografische Satzzeichen und andere ideografische Zeichen mit alternativen horizontalen und vertikalen Formen verwenden die vertikale Form des Glyphs. Text, der nicht in Vollbreite ist, wird mit einer Glyphenorientierung von 90 Grad eingestellt.

    Diese Umorientierungsregel gilt nur für Erststufen-nichtideografischen Text. Alle weiteren Einbettungen von Schreibmodi oder bidirektionale Verarbeitung basieren auf der Erststufenrotation.

    > [!NOTE]
    > Text, der auf diese "rotierte" Weise gesetzt wird, kann Ligaturen oder andere übliche Glyph-Kombinationen und Neuanordnungen der Sprache und Schrift enthalten. (Diese Präsentationsform deaktiviert nicht die automatische Ligaturbildung oder ähnliche kontextgesteuerte Variationen.)

    Die Bestimmung, welche Zeichen automatisch rotiert werden sollten, kann je nach Benutzeragent variieren. Die Bestimmung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schrift, Zeichenmerkmalen, Schriftart und Zeichenkontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächsten der zulässigen Werte gerundet.
    Ein Wert von `0deg` zeigt an, dass alle Glyphen mit der Oberseite der Glyphen zur Referenzorientierung eingestellt sind. Ein Wert von `90deg` zeigt eine Orientierung von 90 Grad im Uhrzeigersinn zur Referenzorientierung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
