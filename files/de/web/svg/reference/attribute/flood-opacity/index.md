---
title: flood-opacity
slug: Web/SVG/Reference/Attribute/flood-opacity
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`flood-opacity`**-Attribut gibt den Opazitätswert an, der über die aktuelle Filterprimitive-Subregion verwendet wird.

> [!NOTE]
> Als Präsentationsattribut hat `flood-opacity` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("flood-opacity")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

  <rect x="0" y="0" width="200" height="200" filter="url(#flood1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#flood2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Nutzungshinweise

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
  - : Eine Zahl oder ein Prozentsatz, der den Opazitätswert angibt, der über die aktuelle Filterprimitive-Subregion verwendet wird.
    Eine Zahl von `0` oder ein Prozentsatz von `0%` repräsentiert eine vollständig transparente Farbe, `1` oder `100%` repräsentiert eine vollständig opake Farbe.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("flood-opacity")}}-Eigenschaft
- {{SVGAttr("flood-color")}}
