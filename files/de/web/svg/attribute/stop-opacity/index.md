---
title: stop-opacity
slug: Web/SVG/Attribute/stop-opacity
l10n:
  sourceCommit: fe1beab414730a2d9ae8a3824af9297ac9bd9410
---

{{SVGRef}}

Das **`stop-opacity`** Attribut definiert die Deckkraft eines bestimmten Farbverlaufsstopps.

Der Deckkraftwert, der für die Verlausberechnung verwendet wird, ist das Produkt des Wertes von `stop-opacity` und der Deckkraft des Wertes des {{SVGAttr("stop-color")}} Attributs. Für `stop-color` Werte, die keine expliziten Deckkraftinformationen enthalten, wird die Deckkraft als `1` behandelt.

> [!NOTE]
> Als Präsentationsattribut kann `stop-opacity` als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("stop")}}

## Verwendungsnotizen

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
  - : Dieser Wert ist entweder eine {{cssxref("number")}} zwischen `0` und `1` oder ein {{cssxref("percentage")}} Wert, der die Deckkraft des Farbverlaufsstopps angibt.

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
