---
title: flood-opacity
slug: Web/SVG/Attribute/flood-opacity
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`flood-opacity`**-Attribut gibt den Opazitätswert an, der über die aktuelle Filterprimitiv-Subregion verwendet werden soll.

> [!NOTE]
> Als Präsentationsattribut kann `flood-opacity` als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feFlood")}} und {{SVGElement("feDropShadow")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood
      flood-color="seagreen"
      flood-opacity="1"
      x="0"
      y="0"
      width="200"
      height="200" />
  </filter>
  <filter id="flood2">
    <feFlood
      flood-color="seagreen"
      flood-opacity="0.3"
      x="0"
      y="0"
      width="200"
      height="200" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#flood1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#flood2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;alpha-value></code></td>
    </tr>
    <tr>
      <th scope="row">Initialwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<alpha-value>`
  - : Eine Zahl oder ein Prozentsatz, der den Opazitätswert angibt, der über die aktuelle Filterprimitiv-Subregion verwendet werden soll. Eine Zahl von `0` oder ein Prozentsatz von `0%` stellt eine vollständig transparente Farbe dar, `1` oder `100%` stellt eine vollständig opake Farbe dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("flood-opacity")}}-Eigenschaft
- {{SVGAttr("flood-color")}}
