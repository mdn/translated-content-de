---
title: stop-opacity
slug: Web/SVG/Attribute/stop-opacity
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`stop-opacity`**-Attribut definiert die Deckkraft eines bestimmten Farbverlaufsstopps.

Der für die Verlaufskalkulation verwendete Deckkraftwert ist das Produkt aus dem Wert von `stop-opacity` und der Deckkraft des Wertes des {{SVGAttr("stop-color")}}-Attributs. Für `stop-color`-Werte, die keine expliziten Deckkraftinformationen enthalten, wird die Deckkraft als `1` betrachtet.

> [!NOTE]
> Als Präsentationsattribut kann `stop-opacity` als CSS-Eigenschaft verwendet werden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("stop")}}

## Verwendungshinweise

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

- {{SVGAttr("stop-color")}}
- {{SVGAttr("opacity")}}
- {{SVGAttr("fill-opacity")}}
- {{SVGAttr("stroke-opacity")}}
