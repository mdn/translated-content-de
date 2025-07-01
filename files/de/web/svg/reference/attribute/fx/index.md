---
title: fx
slug: Web/SVG/Reference/Attribute/fx
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`fx`**-Attribut definiert die x-Achsenkoordinate des Brennpunkts für einen radialen Verlauf.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("radialGradient")}}

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
  <defs>
    <radialGradient
      id="gradient1"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
    <radialGradient
      id="gradient2"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.75"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
  <circle cx="340" cy="100" r="100" fill="url(#gradient2)" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong><a href="/de/docs/Web/SVG/Guides/Content_type#length">&#x3C;length></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        Fällt mit dem präsentationellen Wert von {{SVGAttr("cx")}} für das
        Element zusammen, unabhängig davon, ob der Wert für <code>cx</code> geerbt wurde oder nicht.
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Keine</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
