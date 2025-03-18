---
title: glyph-orientation-horizontal
slug: Web/SVG/Reference/Attribute/glyph-orientation-horizontal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`glyph-orientation-horizontal`** Attribut beeinflusst den Betrag, um den die aktuelle Textposition vorrückt, während jedes {{Glossary("glyph", "Glyph")}} gerendert wird.

Wenn die Referenzorientierung horizontal ist und `glyph-orientation-horizontal` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den horizontalen Metriken des Glyphen erhöht. Andernfalls, wenn der Wert dieses Attributs kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den vertikalen Metriken des Glyphen erhöht.

Dieses Attribut wird nur auf Text angewendet, der in einem horizontalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut hat `glyph-orientation-horizontal` auch ein entsprechendes CSS-Property: {{cssxref("glyph-orientation-horizontal")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

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
  - : Der Winkelwert ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächstgelegenen der zulässigen Werte gerundet.
    Ein Wert von `0deg` zeigt an, dass alle Glyphen mit der Oberseite der Glyphen zur Referenzorientierung ausgerichtet sind. Ein Wert von `90deg` zeigt eine Ausrichtung von 90 Grad im Uhrzeigersinn zur Referenzorientierung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
