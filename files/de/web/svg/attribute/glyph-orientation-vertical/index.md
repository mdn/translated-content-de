---
title: glyph-orientation-vertical
slug: Web/SVG/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`glyph-orientation-vertical`**-Attribut beeinflusst, wie stark die aktuelle Textposition voranschreitet, während jedes {{Glossary("glyph", "Glyph")}} gerendert wird.

Wenn die **inline-progression-direction** vertikal ist und die `glyph-orientation-vertical` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition entsprechend den vertikalen Metriken des Glyphs erhöht. Ist der Winkel hingegen kein Vielfaches von 180 Grad, so wird die Textposition entsprechend den horizontalen Metriken des Glyphs erhöht.

Dieses Attribut wird nur auf Text angewendet, der in einer vertikalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut hat `glyph-orientation-vertical` auch ein entsprechendes CSS-Property: {{cssxref("glyph-orientation-vertical")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

  - : Vollbreite {{Glossary("ideographic", "ideographische")}} und lateinische Vollbreiten-Textzeichen werden mit einer Glyphausrichtung von 0 Grad gesetzt. Ideographische Satzzeichen und andere ideographische Zeichen mit alternativen horizontalen und vertikalen Formen verwenden die vertikale Form des Glyphs. Text, der nicht in Vollbreite ist, wird mit einer Glyphausrichtung von 90 Grad gesetzt.

    Diese Regel zur Neuausrichtung gilt nur für den erststufigen nicht-ideographischen Text. Jegliche weitere Einbettung von Schreibmodi oder bidirektionaler Verarbeitung basiert auf der erststufigen Rotation.

    > [!NOTE]
    > In dieser "rotierenden" Darstellung gesetzter Text kann Ligaturen oder andere Glyphkombinierungen und Anordnungen enthalten, die für die Sprache und das Schriftsystem üblich sind. (Diese Darstellungsform deaktiviert nicht die automatische Ligaturbildung oder ähnliche kontextabhängige Variationen.)

    Die Bestimmung, welche Zeichen automatisch gedreht werden sollen, kann je nach Benutzeragent variieren. Die Entscheidung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schrift, Zeichenattributen, Schriftart und Zeichenkontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkelwert angegeben wird, wird er auf den nächstgelegenen zulässigen Wert gerundet.
    Ein Wert von `0deg` gibt an, dass alle Glyphs so ausgerichtet werden, dass ihre Oberseite zur Referenzorientierung zeigt. Ein Wert von `90deg` weist auf eine Orientierung von 90 Grad im Uhrzeigersinn von der Referenzorientierung hin.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
