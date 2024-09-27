---
title: stop-color
slug: Web/SVG/Attribute/stop-color
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das Attribut **`stop-color`** gibt an, welche Farbe an einem Farbverlauf-Stopp verwendet werden soll.

> [!NOTE]
> In Bezug auf Verläufe behandelt SVG das Schlüsselwort `transparent` anders als CSS. SVG berechnet Verläufe nicht im vorab multiplizierten Raum, daher bedeutet `transparent` tatsächlich transparentes Schwarz. Das Spezifizieren eines `stop-color`-Werts mit `transparent` entspricht dem Spezifizieren eines `stop-color`-Werts mit `black` und einem {{SVGAttr("stop-opacity")}}-Wert von `0`.

> [!NOTE]
> Als Präsentationsattribut kann `stop-color` als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("stop")}}

## Verwendungshinweise

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
  - : Dieses Schlüsselwort bezeichnet die aktuelle Füllfarbe und kann in gleicher Weise angegeben werden wie in einer [`<paint>`](/de/docs/Web/SVG/Content_type#paint) Spezifikation für die {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute.
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
