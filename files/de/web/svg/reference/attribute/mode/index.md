---
title: mode
slug: Web/SVG/Reference/Attribute/mode
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`mode`**-Attribut definiert den Mischmodus auf der {{SVGElement("feBlend")}}-Filterprimitive.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feBlend")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="blending1" x="0" y="0" width="100%" height="100%">
    <feFlood
      result="floodFill"
      x="0"
      y="0"
      width="100%"
      height="100%"
      flood-color="seagreen"
      flood-opacity="1" />
    <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
  </filter>
  <filter id="blending2" x="0" y="0" width="100%" height="100%">
    <feFlood
      result="floodFill"
      x="0"
      y="0"
      width="100%"
      height="100%"
      flood-color="seagreen"
      flood-opacity="1" />
    <feBlend in="SourceGraphic" in2="floodFill" mode="color-dodge" />
  </filter>

  <image
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    filter="url(#blending1)" />
  <image
    x="220"
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    filter="url(#blending2)" />
</svg>
```

{{EmbedLiveSample("Beispiel", "480", "200")}}

## Anmerkungen zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("blend-mode")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Eine Beschreibung der Werte finden Sie unter {{cssxref("blend-mode")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
