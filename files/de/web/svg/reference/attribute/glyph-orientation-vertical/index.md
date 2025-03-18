---
title: glyph-orientation-vertical
slug: Web/SVG/Reference/Attribute/glyph-orientation-vertical
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`glyph-orientation-vertical`** Attribut beeinflusst, um wie viel sich die aktuelle Textposition jeweils erweitert, wenn jedes {{Glossary("glyph", "Glyph")}} gerendert wird.

Wenn die "inline-progression-direction" vertikal ist und `glyph-orientation-vertical` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß der vertikalen Metriken des Glyphs erhöht. Andernfalls, wenn der Winkel kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß der horizontalen Metriken des Glyphs erhöht.

Dieses Attribut wird nur auf Text angewendet, der in einem vertikalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Darstellungsattribut hat `glyph-orientation-vertical` auch ein entsprechendes CSS-Property: {{cssxref("glyph-orientation-vertical")}}. Wenn beide spezifiziert sind, hat das CSS-Property Vorrang.

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

  - : Vollbreitiges {{Glossary("ideographic", "ideographisches")}} und vollbreitiges lateinisches Schriftgut wird mit einer Glyph-Orientierung von 0 Grad dargestellt. Ideographische Interpunktion und andere ideographische Zeichen mit alternativen horizontalen und vertikalen Formen werden die vertikale Form des Glyphs verwenden. Nicht-vollbreite Text wird mit einer Glyph-Orientierung von 90 Grad dargestellt.

    Diese Neuorientierungsregel gilt nur für den ersten Ebene nicht-ideographischen Text. Alle weiteren Einbettungen von Schreibmodi oder bidirektionaler Verarbeitung basieren auf der Rotation der ersten Ebene.

    > [!NOTE]
    > In dieser "rotated" Darstellungsform gesetzter Text kann Ligaturen oder andere, für die jeweilige Sprache und Schrift typische Glyphenkombinationen und -umordnungen enthalten. (Diese Darstellungsform deaktiviert nicht die automatische Ligaturbildung oder ähnliche kontextgesteuerte Variationen.)

    Die Bestimmung, welche Zeichen automatisch rotiert werden sollen, kann bei verschiedenen Benutzer-Agenten variieren. Die Bestimmung basiert auf einer komplexen Interaktion zwischen Land, Sprache, Schrift, Zeicheneigenschaften, Schriftart und Zeichenkontext.

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächstgelegenen der zulässigen Werte gerundet.
    Ein Wert von `0deg` zeigt an, dass alle Glyphen mit dem oberen Teil der Glyphen zur Referenzorientierung hin ausgerichtet werden. Ein Wert von `90deg` zeigt eine Ausrichtung von 90 Grad im Uhrzeigersinn von der Referenzorientierung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
