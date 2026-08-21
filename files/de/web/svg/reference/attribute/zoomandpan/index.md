---
title: zoomAndPan
slug: Web/SVG/Reference/Attribute/zoomAndPan
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`zoomAndPan`**-Attribut gibt an, ob das SVG-Dokument vergrößert und verschoben werden kann.

Vergrößerung in diesem Kontext bedeutet die Wirkung einer zusätzlichen Skalierungs- und Translationstransformation auf das äußerste SVG-Dokumentfragment.

Verschieben steht für eine Translationstransformation (d.h. eine Verschiebung) auf einem SVG-Dokumentfragment als Reaktion auf eine Benutzeroberflächenaktion.

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

  <rect x="0" y="0" width="200" height="200" filter="url(#diffuseLighting)" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Nutzungsnotizen

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
