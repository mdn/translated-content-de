---
title: image-rendering
slug: Web/SVG/Reference/Attribute/image-rendering
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`image-rendering`**-Attribut bietet dem Browser einen Hinweis darauf, wie er bei der Bildverarbeitung Kompromisse zwischen Geschwindigkeit und Qualität eingehen kann.

Das Resampling erfolgt immer in einem Truecolor-Farbraum (z. B. 24-Bit), auch wenn die Originaldaten und/oder das Zielgerät einen indizierten Farbraum verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `image-rendering` auch ein entsprechendes CSS-Attribut: {{cssxref("image-rendering")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("image")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>optimizeQuality</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Gibt an, dass der Benutzeragent geeignete Kompromisse eingehen soll, um Geschwindigkeit und Qualität auszugleichen, wobei der Qualität mehr Bedeutung beigemessen wird als der Geschwindigkeit.
- `optimizeSpeed`
  - : Gibt an, dass der Benutzeragent die Rendergeschwindigkeit über die Qualität stellen soll.
- `optimizeQuality`
  - : Gibt an, dass der Benutzeragent die Qualität über die Rendergeschwindigkeit stellen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("image-rendering")}}-Eigenschaft
