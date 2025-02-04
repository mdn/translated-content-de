---
title: image-rendering
slug: Web/SVG/Attribute/image-rendering
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`image-rendering`**-Attribut gibt dem Browser einen Hinweis darauf, wie er bei der Bildverarbeitung zwischen Geschwindigkeit und Qualität abwägen soll.

Das Resampling erfolgt immer in einem Truecolor- (z. B. 24-Bit) Farbraum, auch wenn die Originaldaten und/oder das Zielgerät indizierte Farben verwenden.

> [!NOTE]
> Als Präsentationsattribut kann `image-rendering` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-{{cssxref("image-rendering")}}-Eigenschaft.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("image")}}

## Nutzungshinweise

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
  - : Gibt an, dass der Benutzeragent angemessene Kompromisse zur Balance zwischen Geschwindigkeit und Qualität machen soll, wobei der Qualität mehr Bedeutung beigemessen wird als der Geschwindigkeit.
- `optimizeSpeed`
  - : Gibt an, dass der Benutzeragent die Rendering-Geschwindigkeit über die Qualität stellen soll.
- `optimizeQuality`
  - : Gibt an, dass der Benutzeragent die Qualität über die Rendering-Geschwindigkeit stellen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{cssxref("image-rendering")}}-Eigenschaft
