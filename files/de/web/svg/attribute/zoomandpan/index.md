---
title: zoomAndPan
slug: Web/SVG/Attribute/zoomAndPan
l10n:
  sourceCommit: eb2d8ffb82c8a6fa4e55aad2835215ffada25897
---

{{SVGRef}}{{Deprecated_Header}}

Das **`zoomAndPan`** Attribut gibt an, ob das SVG-Dokument vergrößert und verschoben werden kann.

Vergrößerung in diesem Zusammenhang bedeutet die Wirkung einer zusätzlichen Skalierungs- und Verschiebetransformation auf das äußerste SVG-Dokumentfragment.

Verschiebung stellt eine Translation (d.h. eine Verschiebung) eines SVG-Dokumentfragments als Reaktion auf eine Benutzeroberflächenaktion dar.

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

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#diffuseLighting);" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Anwendungshinweise

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
