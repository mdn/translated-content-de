---
title: flood-opacity
slug: Web/SVG/Attribute/flood-opacity
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`flood-opacity`**-Attribut gibt den Opazitätswert an, der in der aktuellen Filter-Primitive-Unterregion verwendet wird.

> [!NOTE]
> Als Präsentationsattribut hat `flood-opacity` auch ein entsprechendes CSS-Attribut: {{cssxref("flood-opacity")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;alpha-value></code></td>
    </tr>
    <tr>
      <th scope="row">Startwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<alpha-value>`
  - : Eine Zahl oder ein Prozentsatz, der den Opazitätswert angibt, der in der aktuellen Filter-Primitive-Unterregion verwendet werden soll.
    Eine Zahl von `0` oder ein Prozentsatz von `0%` repräsentiert eine vollständig transparente Farbe, `1` oder `100%` repräsentiert eine vollständig opake Farbe.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("flood-opacity")}}-Eigenschaft
- {{SVGAttr("flood-color")}}
