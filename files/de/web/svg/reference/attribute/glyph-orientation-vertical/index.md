---
title: glyph-orientation-vertical
slug: Web/SVG/Reference/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{Deprecated_Header}}

Das **`glyph-orientation-vertical`** Attribut beeinflusst, um wie viel die aktuelle Textposition voranschreitet, während jedes {{Glossary("glyph", "glyph")}} gerendert wird.

Wenn die `inline-progression-direction` vertikal ist und die `glyph-orientation-vertical` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, dann wird die aktuelle Textposition entsprechend den vertikalen Metriken des Glyphe inkrementiert. Ist der Winkel kein Vielfaches von 180 Grad, dann wird die aktuelle Textposition entsprechend den horizontalen Metriken des Glyphe inkrementiert.

Dieses Attribut wird nur auf Text angewendet, der in einem vertikalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut hat `glyph-orientation-vertical` auch eine entsprechende CSS-Eigenschaft: {{cssxref("glyph-orientation-vertical")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

  - : Vollbreite {{Glossary("ideographic", "ideographic")}} und vollbreiter lateinischer Text wird mit einer Glyphenorientierung von 0 Grad gesetzt. Ideografische Interpunktion und andere ideografische Zeichen, die alternative horizontale und vertikale Formen haben, verwenden die vertikale Form der Glyphe. Text, der nicht vollbreit ist, wird mit einer Glyphenorientierung von 90 Grad gesetzt.

    Diese Reorientierungsregel gilt nur für den erste Ebene nicht-ideografischen Text. Alle weiteren Einbettungen von Schreibweisen oder bidirektionaler Verarbeitung basieren auf der erste Ebene Rotation.

    > [!NOTE]
    > Text, der in dieser "gedrehten" Weise gesetzt wird, kann Ligaturen oder andere Glyphe-Kombinationen und Neuanordnungen enthalten, die in der jeweiligen Sprache und Schrift üblich sind. (Diese Präsentationsform deaktiviert nicht die automatische Ligaturbildung oder ähnliche kontextgesteuerte Variationen.)

    Die Bestimmung, welche Zeichen automatisch gedreht werden sollen, kann bei verschiedenen Benutzeragenten variieren. Die Bestimmung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schrift, Zeichenmerkmalen, Schriftart und Zeichenkontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächsten der erlaubten Werte gerundet.
    Ein Wert von `0deg` bedeutet, dass alle Zeichen mit der Oberseite der Zeichen zur Referenzorientierung hin ausgerichtet sind. Ein Wert von `90deg` bedeutet eine Orientierung von 90 Grad im Uhrzeigersinn von der Referenzorientierung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
