---
title: stop-color
slug: Web/SVG/Attribute/stop-color
l10n:
  sourceCommit: c970273cbe683cdc930c1fc149293dbdeeecbb5d
---

{{SVGRef}}

Das **`stop-color`** Attribut gibt an, welche Farbe an einem Farbverlauf-Stopp verwendet werden soll.

> [!NOTE]
> In Bezug auf Farbverläufe behandelt SVG das Schlüsselwort `transparent` anders als CSS. SVG berechnet Farbverläufe nicht im vorverarbeiteten Raum, daher bedeutet `transparent` wirklich transparentes Schwarz. Das Angeben einer `stop-color` mit dem Wert `transparent` entspricht dem Angeben einer `stop-color` mit dem Wert `black` und einer {{SVGAttr("stop-opacity")}} mit dem Wert `0`.

> [!NOTE]
> Als Präsentationsattribut kann `stop-color` als CSS-Eigenschaft verwendet werden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("stop")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>currentcolor</code> |
        {{cssxref("color_value", "&lt;color&gt;")}}
        <code
          ><a href="/de/docs/Web/SVG/Content_type#icccolor"
            >&#x3C;icccolor></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `currentcolor`
  - : Dieses Schlüsselwort bezeichnet die aktuelle Füllfarbe und kann auf die gleiche Weise angegeben werden wie innerhalb einer [`<paint>`](/de/docs/Web/SVG/Content_type#paint) Spezifikation für die {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute.
- `<color>`
  - : Dieser Wert gibt einen Farbwert an.
- `<icccolor>`
  - : Dieser Wert bezieht sich auf ein ICC-Farbprofil.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stop-opacity")}}
