---
title: fx
slug: Web/SVG/Attribute/fx
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`fx`** Attribut definiert die x-Achsen-Koordinate des Brennpunkts für einen radialen Verlauf.

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
  <circle
    cx="100"
    cy="100"
    r="100"
    fill="url(#gradient2)"
    style="transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        Entspricht dem präsentationellen Wert von {{SVGAttr("cx")}} des
        Elements, unabhängig davon, ob der Wert für <code>cx</code> geerbt wurde oder nicht.
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>None</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
