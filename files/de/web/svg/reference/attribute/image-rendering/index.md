---
title: image-rendering
slug: Web/SVG/Reference/Attribute/image-rendering
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

Das **`image-rendering`**-Attribut gibt dem Browser einen Hinweis darauf, wie er bei der Bildverarbeitung Kompromisse zwischen Geschwindigkeit und Qualität machen soll.

Die Neuberechnung erfolgt immer in einem echten Farbraum (z. B. 24-Bit), auch wenn die Originaldaten und/oder das Zielgerät indizierte Farben verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `image-rendering` auch ein CSS-Eigenschafts-Pendant: {{cssxref("image-rendering")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Gibt an, dass der Benutzeragent geeignete Kompromisse treffen soll, um ein Gleichgewicht zwischen Geschwindigkeit und Qualität zu erreichen, wobei der Qualität mehr Bedeutung beigemessen wird als der Geschwindigkeit.
- `optimizeSpeed`
  - : Gibt an, dass der Benutzeragent die Rendering-Geschwindigkeit gegenüber der Qualität betonen soll.
- `optimizeQuality`
  - : Gibt an, dass der Benutzeragent die Qualität gegenüber der Rendering-Geschwindigkeit betonen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("image-rendering")}} Eigenschaft
