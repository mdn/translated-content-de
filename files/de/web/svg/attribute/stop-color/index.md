---
title: stop-color
slug: Web/SVG/Attribute/stop-color
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`stop-color`** Attribut gibt an, welche Farbe an einem Gradientenstopp verwendet werden soll.

> [!NOTE]
> In Bezug auf Gradienten behandelt SVG das Schlüsselwort `transparent` anders als CSS. SVG berechnet Gradienten nicht im vorab multiplizierten Raum, daher bedeutet `transparent` wirklich transparentes Schwarz. Das heißt, die Angabe eines `stop-color` mit dem Wert `transparent` entspricht der Angabe eines `stop-color` mit dem Wert `black` und einem {{SVGAttr("stop-opacity")}} mit dem Wert `0`.

> [!NOTE]
> Als Präsentationsattribut kann `stop-color` als CSS-Eigenschaft verwendet werden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("stop")}}

## Anwendungsnotizen

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
  - : Dieses Schlüsselwort bezeichnet die aktuelle Füllfarbe und kann in gleicher Weise wie innerhalb einer [`<paint>`](/de/docs/Web/SVG/Content_type#paint) Spezifikation für die {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute angegeben werden.
- `<color>`
  - : Dieser Wert gibt einen Farbwert an.
- `<icccolor>`
  - : Dieser Wert bezieht sich auf ein ICC-Farbenprofil.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stop-opacity")}}
