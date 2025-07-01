---
title: fy
slug: Web/SVG/Reference/Attribute/fy
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`fy`**-Attribut definiert die y-Achsen-Koordinate des Brennpunkts für einen radialen Verlauf.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("radialGradient")}}

## Beispiel

### Beispiel 1

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
      fx="0.35"
      fy="0.75"
      fr="5%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
  <circle cx="340" cy="100" r="100" fill="url(#gradient2)" />
</svg>
```

{{EmbedLiveSample("Beispiel 1", "480", "200")}}

### Beispiel 2

```html
<svg
  viewBox="0 0 120 120"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="Gradient"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{EmbedLiveSample("Beispiel 2", "200", "250")}}

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
        Stimmt mit dem präsentationalen Wert von {{SVGAttr("cy")}} für
        das Element überein, unabhängig davon, ob der Wert für <code>cy</code> geerbt wurde oder nicht.
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
