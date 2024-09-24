---
title: fill-Deckkraft
slug: Web/SVG/Attribute/fill-opacity
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`fill-opacity`** Attribut ist ein Präsentationsattribut, das die Deckkraft des Farbservers (_Farbe_, _Verlauf_, _Muster_, usw.) definiert, der auf eine Form angewendet wird.

> [!NOTE]
> Als Präsentationsattribut kann `fill-opacity` auch als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Standardfülldeckkraft: 1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- Fülldeckkraft als Zahl -->
  <circle cx="150" cy="50" r="40" fill-opacity="0.7" />

  <!-- Fülldeckkraft als Prozentsatz -->
  <circle cx="250" cy="50" r="40" fill-opacity="50%" />

  <!-- Fülldeckkraft als CSS-Eigenschaft -->
  <circle cx="350" cy="50" r="40" style="fill-opacity: .25;" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> SVG2 führt Prozentwerte für `fill-opacity` ein. Diese sind jedoch noch nicht weit verbreitet unterstützt (_Siehe [Browserkompatibilität](#browserkompatibilität) unten_). Daher ist es eine bewährte Praxis, die Deckkraft mit einem Wert im Bereich `[0-1]` einzustellen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("opacity")}}
- {{SVGAttr("stop-opacity")}}
- {{SVGAttr("stroke-opacity")}}
