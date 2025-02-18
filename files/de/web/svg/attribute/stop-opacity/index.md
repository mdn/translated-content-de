---
title: stop-opacity
slug: Web/SVG/Attribute/stop-opacity
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`stop-opacity`**-Attribut definiert die Deckkraft eines bestimmten Farbverlaufsstopps.

Der für die Verlaufskalkulation genutzte Deckkraftwert ist das Produkt aus dem Wert von `stop-opacity` und der Deckkraft des Wertes des Attributs {{SVGAttr("stop-color")}}. Für `stop-color`-Werte, die keine expliziten Deckkraftinformationen enthalten, wird die Deckkraft als `1` behandelt.

> [!NOTE]
> Als Präsentationsattribut hat `stop-opacity` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("stop-opacity")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("stop")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#opacity_value"
            >&#x3C;opacity-value></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<opacity-value>`
  - : Dieser Wert ist entweder eine {{cssxref("number")}} zwischen `0` und `1` oder ein {{cssxref("percentage")}}-Wert, der die Deckkraft des Farbverlaufsstopps angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stop-opacity")}}-Eigenschaft
- {{SVGAttr("stop-color")}}
- {{SVGAttr("opacity")}}
- {{SVGAttr("fill-opacity")}}
- {{SVGAttr("stroke-opacity")}}
