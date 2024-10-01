---
title: glyph-orientation-horizontal
slug: Web/SVG/Attribute/glyph-orientation-horizontal
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{Deprecated_Header}}

Das Attribut **`glyph-orientation-horizontal`** beeinflusst den Betrag, um den die aktuelle Textposition fortgesetzt wird, wenn jedes {{Glossary("glyph", "Glyph")}} dargestellt wird.

Wenn die Referenzorientierungsrichtung horizontal ist und `glyph-orientation-horizontal` zu einem Orientierungswinkel führt, der ein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den horizontalen Metriken des Glyphs inkrementiert. Andernfalls, wenn der Wert dieses Attributs kein Vielfaches von 180 Grad ist, wird die aktuelle Textposition gemäß den vertikalen Metriken des Glyphs inkrementiert.

Dieses Attribut wird nur auf Text angewendet, der in einer horizontalen {{SVGAttr("writing-mode")}} geschrieben ist.

> [!NOTE]
> Als Präsentationsattribut kann `glyph-orientation-horizontal` als CSS-Eigenschaft genutzt werden.

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
  - : Der Wert des Winkels ist auf 0, 90, 180 und 270 Grad beschränkt. Wenn ein anderer Winkel angegeben wird, wird er auf den nächstgelegenen der erlaubten Werte gerundet. Ein Wert von `0deg` zeigt an, dass alle Glyphen mit der Oberseite der Glyphen in Richtung der Referenzorientierung ausgerichtet sind. Ein Wert von `90deg` zeigt eine Orientierung von 90 Grad im Uhrzeigersinn zur Referenzorientierung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
