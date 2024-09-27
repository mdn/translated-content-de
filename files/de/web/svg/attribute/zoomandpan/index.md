---
title: zoomAndPan
slug: Web/SVG/Attribute/zoomAndPan
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`zoomAndPan`**-Attribut gibt an, ob das SVG-Dokument vergrößert und verschoben werden kann.

Vergrößerung in diesem Kontext bedeutet den Effekt einer zusätzlichen Skalierungs- und Verschiebungstransformation auf das äußerste SVG-Dokumentfragment.

Verschieben stellt eine Übersetzungstransformation (d. h. eine Verschiebung) auf einem SVG-Dokumentfragment als Reaktion auf eine Benutzeroberflächenaktion dar.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
