---
title: title
slug: Web/SVG/Reference/Attribute/title
l10n:
  sourceCommit: 8ae90c06d95ae6d0ccae0feb06ccab676fafbd24
---

Das Attribut **`title`** gibt einen erläuternden Titel für ein SVG-Element an. Bei Verwendung auf einem {{SVGElement("style")}}-Element dient es als Kennung, mit der alternative Stylesheets verfügbar gemacht und ausgewählt werden können. Sie können dieses Attribut mit dem folgenden SVG-Element verwenden:

- {{SVGElement("style")}}

## Beispiel

```html
<svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
  <style title="Default Style">
    circle {
      fill: gold;
    }
  </style>
  <circle cx="10" cy="10" r="5" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>None</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("style")}}
