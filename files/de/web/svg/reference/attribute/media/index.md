---
title: media
slug: Web/SVG/Reference/Attribute/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

Das **`media`**-Attribut gibt eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) an, die erfüllt sein muss, damit ein Stylesheet angewendet wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("style")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect {
      fill: black;
    }
  </style>
  <style media="(width >= 600px)">
    rect {
      fill: seagreen;
    }
  </style>

  <text y="15">Resize the window to see the effect</text>
  <rect y="20" width="200" height="200" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/@media#syntax"
            >&#x3C;media-query-list></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>all</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<media-query-list>`
  - : Dieser Wert enthält eine Media Query, die erfüllt sein muss, damit das Stylesheet angewendet wird.

    Falls nicht angegeben, wird das Stylesheet bedingungslos angewendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
