---
title: zoomAndPan
slug: Web/SVG/Reference/Attribute/zoomAndPan
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{Deprecated_Header}}

Das **`zoomAndPan`**-Attribut gibt an, ob das SVG-Dokument vergrößert und verschoben werden kann.

Vergrößern bedeutet in diesem Kontext die Wirkung einer zusätzlichen Skalierungs- und Translationstransformation auf das äußerste SVG-Dokumentfragment.

Verschieben stellt eine Translation (d.h. eine Verschiebung) auf ein SVG-Dokumentfragment als Reaktion auf eine Benutzeroberflächenaktion dar.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("svg")}}
- {{SVGElement("view")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  zoomAndPan="disable">
  <filter id="diffuseLighting" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" zoomAndPan="1">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#diffuseLighting)" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>disable</code> | <code>magnify</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>magnify</code></td>
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
