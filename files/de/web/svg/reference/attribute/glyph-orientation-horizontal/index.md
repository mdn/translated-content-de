---
title: glyph-orientation-horizontal
slug: Web/SVG/Reference/Attribute/glyph-orientation-horizontal
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{Deprecated_Header}}

Das **`glyph-orientation-horizontal`** Attribut beeinflusst die Fortschreitung der aktuellen Textposition, während jedes {{Glossary("glyph", "Glyph")}} gerendert wird.

Wenn die Referenzorientierung horizontal ist und `glyph-orientation-horizontal` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, dann wird die aktuelle Textposition gemäß der horizontalen Metriken des Glyphs erhöht. Andernfalls, wenn der Wert dieses Attributs kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß der vertikalen Metriken des Glyphs erhöht.

Dieses Attribut wird nur auf Text angewendet, der in einem horizontalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut hat `glyph-orientation-horizontal` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("glyph-orientation-horizontal")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#angle"
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
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächsten der zulässigen Werte gerundet. Ein Wert von `0deg` zeigt an, dass alle Glyphen mit der Oberseite der Glyphen zur Referenzorientierung ausgerichtet sind. Ein Wert von `90deg` zeigt eine Orientierung von 90 Grad im Uhrzeigersinn von der Referenzorientierung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
