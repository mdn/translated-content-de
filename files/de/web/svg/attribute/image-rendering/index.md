---
title: image-rendering
slug: Web/SVG/Attribute/image-rendering
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`image-rendering`**-Attribut gibt dem Browser einen Hinweis darauf, wie Geschwindigkeit und Qualität bei der Bildverarbeitung abgewogen werden sollen.

Die Neuberechnung erfolgt immer in einem Truecolor-Farbraum (z.B. 24-Bit), selbst wenn die Originaldaten und/oder das Zielgerät indizierte Farben verwenden.

> [!NOTE]
> Als Präsentationsattribut kann `image-rendering` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-{{cssxref("image-rendering")}}-Eigenschaft.

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
  - : Gibt an, dass der Benutzeragent geeignete Kompromisse machen soll, um Geschwindigkeit und Qualität auszugleichen, wobei der Qualität mehr Bedeutung beigemessen wird als der Geschwindigkeit.
- `optimizeSpeed`
  - : Gibt an, dass der Benutzeragent die Rendergeschwindigkeit gegenüber der Qualität betonen soll.
- `optimizeQuality`
  - : Gibt an, dass der Benutzeragent die Qualität gegenüber der Rendergeschwindigkeit betonen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("image-rendering")}}
