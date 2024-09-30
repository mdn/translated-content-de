---
title: max
slug: Web/SVG/Attribute/max
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}

Das **`max`**-Attribut gibt den Höchstwert der aktiven Animationsdauer an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate
      attributeName="cx"
      dur="4s"
      max="6s"
      repeatCount="indefinite"
      values="60 ; 110 ; 60 ; 10 ; 60"
      keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1" />
    <animate
      attributeName="cy"
      dur="4s"
      max="6s"
      repeatCount="indefinite"
      values="10 ; 60 ; 110 ; 60 ; 10"
      keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1" />
  </circle>
</svg>
```

{{EmbedLiveSample("Beispiel", "200", "200")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#clock-value"
            >&#x3C;clock-value></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<clock-value>`
  - : Gibt die Länge des Höchstwerts der aktiven Dauer an, gemessen in lokaler Zeit. Der Wert muss größer als 0 sein.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("min")}}
