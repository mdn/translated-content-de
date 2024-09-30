---
title: glyph-orientation-vertical
slug: Web/SVG/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`glyph-orientation-vertical`** Attribut beeinflusst den Fortschritt der aktuellen Textposition, während jedes [Glyph](/de/docs/Glossary/glyph) gerendert wird.

Wenn die Inline-Progressionsrichtung vertikal ist und `glyph-orientation-vertical` einen Orientierungswinkel ergibt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den vertikalen Metriken des Glyphs inkrementiert. Andernfalls, wenn der Winkel kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den horizontalen Metriken des Glyphs inkrementiert.

Dieses Attribut wird nur auf Text angewendet, der in einem vertikalen {{SVGAttr("writing-mode")}} geschrieben wird.

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

    Diese Neuorientierungsregel gilt nur für den ersten nicht-ideographischen Text. Jede weitere Einbindung von Schreibmodi oder bidirektionaler Verarbeitung basiert auf der Rotation der ersten Ebene.

    > [!NOTE]
    > Text, der auf diese "rotierte" Weise gesetzt ist, kann Ligaturen oder andere Kombinationen und Neuordnungen von Glyphen enthalten, die für die Sprache und das Schriftsystem üblich sind. (Diese Präsentationsform deaktiviert nicht die automatische Ligaturbildung oder ähnliche kontextgesteuerte Variationen.)

    Die Bestimmung, welche Zeichen automatisch rotiert werden sollten, kann je nach Benutzeragent unterschiedlich sein. Die Bestimmung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schriftsystem, Zeichenmerkmalen, Schriftart und Zeichenkontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächstgelegenen der zulässigen Werte gerundet.
    Ein Wert von `0deg` gibt an, dass alle Glyphen mit der Oberseite der Glyphen zur Referenzorientierung ausgerichtet sind. Ein Wert von `90deg` zeigt eine Ausrichtung von 90 Grad im Uhrzeigersinn von der Referenzorientierung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
