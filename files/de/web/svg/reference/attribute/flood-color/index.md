---
title: flood-color
slug: Web/SVG/Reference/Attribute/flood-color
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`flood-color`** Attribut gibt an, welche Farbe verwendet werden soll, um die aktuelle Filterprimitiv-Unterregion zu überfluten.

> [!NOTE]
> Als Präsentationsattribut hat `flood-color` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("flood-color")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feFlood")}}
- {{SVGElement("feDropShadow")}}

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
    <feFlood flood-color="skyblue" x="0" y="0" width="200" height="200" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" x="0" y="0" width="200" height="200" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#flood1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#flood2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Hinweise zur Nutzung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("color")}}</td>
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("flood-color")}} Eigenschaft
- {{SVGAttr("flood-opacity")}}
