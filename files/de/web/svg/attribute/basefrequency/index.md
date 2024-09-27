---
title: baseFrequency
slug: Web/SVG/Attribute/baseFrequency
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}

Das **`baseFrequency`** Attribut stellt den Basisfrequenzparameter für die Rauschfunktion der {{SVGElement("feTurbulence")}} Filterprimitive dar.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feTurbulence")}}

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
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.05" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#noise2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Beispiel 1", "220", "220")}}

### Beispiel 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Beispiel 2", "220", "250")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Content_type#number-optional-number"
          >&#x3C;number-optional-number></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`

  - : Wenn zwei Zahlen angegeben sind, repräsentiert die erste die Basisfrequenz in horizontaler Richtung und die zweite die Basisfrequenz in vertikaler Richtung. Wenn eine Zahl angegeben ist, wird dieser Wert für beide Richtungen, x und y, verwendet.

    Negative Werte sind verboten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
