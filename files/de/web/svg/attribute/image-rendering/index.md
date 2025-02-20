---
title: image-rendering
slug: Web/SVG/Attribute/image-rendering
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`image-rendering`**-Attribut gibt dem Browser einen Hinweis darauf, wie er bei der Bildverarbeitung zwischen Geschwindigkeit und Qualität abwägen soll.

Das Resampling erfolgt immer in einem Truecolor-Farbraum (z. B. 24-Bit), auch wenn die Originaldaten und/oder das Zielgerät Indizierte Farben verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `image-rendering` auch ein entsprechendes CSS-Property: {{cssxref("image-rendering")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("image")}}

## Hinweise zur Verwendung

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
  - : Gibt an, dass der User-Agent geeignete Kompromisse eingehen soll, um Geschwindigkeit und Qualität auszugleichen, wobei jedoch der Qualität mehr Bedeutung beigemessen werden soll als der Geschwindigkeit.
- `optimizeSpeed`
  - : Gibt an, dass der User-Agent die Geschwindigkeit beim Rendering über die Qualität stellen soll.
- `optimizeQuality`
  - : Gibt an, dass der User-Agent die Qualität über die Geschwindigkeit beim Rendering stellen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Property {{cssxref("image-rendering")}}
