---
title: glyph-orientation-horizontal
slug: Web/SVG/Attribute/glyph-orientation-horizontal
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}{{Deprecated_Header}}

Das Attribut **`glyph-orientation-horizontal`** beeinflusst die Menge, um die die aktuelle Textposition voranschreitet, während jedes {{Glossary("glyph", "Glyph")}} gerendert wird.

Wenn die Referenzorientierungsrichtung horizontal ist und `glyph-orientation-horizontal` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den horizontalen Metriken des Glyphs erhöht. Andernfalls, wenn der Wert dieses Attributs kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den vertikalen Metriken des Glyphs erhöht.

Dieses Attribut wird nur auf Text angewendet, der in einer horizontalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut hat `glyph-orientation-horizontal` auch ein entsprechendes CSS-Property: {{cssxref("glyph-orientation-horizontal")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
        <code
          ><a href="/de/docs/Web/SVG/Content_type#angle"
            >&#x3C;angle></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0deg</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<angle>`
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird dieser auf den nächsten der zulässigen Werte gerundet.
    Ein Wert von `0deg` bedeutet, dass alle Glyphen mit der Oberseite der Glyphen in Richtung der Referenzorientierung ausgerichtet sind. Ein Wert von `90deg` bedeutet eine Orientierung von 90 Grad im Uhrzeigersinn von der Referenzorientierung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
