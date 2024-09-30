---
title: image-rendering
slug: Web/SVG/Attribute/image-rendering
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`image-rendering`**-Attribut gibt dem Browser einen Hinweis darauf, wie er Kompromisse zwischen Geschwindigkeit und Qualität beim Bildverarbeitungsprozess machen soll.

Das Resampling wird immer in einem Truecolor-Farbraum (z. B. 24-Bit) durchgeführt, auch wenn die Originaldaten und/oder das Zielgerät indizierte Farben verwenden.

> [!NOTE]
> Als Präsentationsattribut kann `image-rendering` als CSS-Eigenschaft verwendet werden. Siehe die CSS-Eigenschaft {{cssxref("image-rendering")}} für weitere Informationen.

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
  - : Gibt an, dass der Benutzeragent geeignete Kompromisse machen soll, um Geschwindigkeit und Qualität auszubalancieren, wobei der Qualität mehr Bedeutung beigemessen werden soll als der Geschwindigkeit.
- `optimizeSpeed`
  - : Gibt an, dass der Benutzeragent die Rendering-Geschwindigkeit über die Qualität stellen soll.
- `optimizeQuality`
  - : Gibt an, dass der Benutzeragent die Qualität über die Rendering-Geschwindigkeit stellen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("image-rendering")}}
