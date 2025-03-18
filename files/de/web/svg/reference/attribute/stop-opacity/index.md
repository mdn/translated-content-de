---
title: stop-opacity
slug: Web/SVG/Reference/Attribute/stop-opacity
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`stop-opacity`** definiert die Deckkraft eines bestimmten Farbverlaufsstopps.

Der für die Berechnung des Farbverlaufs verwendete Deckkraftwert ist das Produkt aus dem Wert von `stop-opacity` und der Deckkraft des Werts des Attributs {{SVGAttr("stop-color")}}. Für `stop-color`-Werte, die keine expliziten Deckkraftinformationen enthalten, wird die Deckkraft als `1` behandelt.

> [!NOTE]
> Als Präsentationsattribut hat `stop-opacity` auch ein entsprechendes CSS-Eigenschaftspendant: {{cssxref("stop-opacity")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("stop")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#opacity_value"
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

- CSS {{cssxref("stop-opacity")}} Eigenschaft
- {{SVGAttr("stop-color")}}
- {{SVGAttr("opacity")}}
- {{SVGAttr("fill-opacity")}}
- {{SVGAttr("stroke-opacity")}}
