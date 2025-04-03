---
title: repeatDur
slug: Web/SVG/Reference/Attribute/repeatDur
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`repeatDur`**-Attribut legt die Gesamtdauer für die Wiederholung einer Animation fest.

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
<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatDur="5s" />
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatDur="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "220", "150")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#clock-value"
            >&#x3C;clock-value></a
          ></code
        >
        | <code>indefinite</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwerte</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<clock-value>`
  - : Dieser Wert gibt die Dauer in Präsentationszeit an, um die Animation zu wiederholen.
- `indefinite`
  - : Dieser Wert zeigt an, dass die Animation unendlich oft wiederholt wird (d.h. bis das Dokument endet).

## Spezifikationen

{{Specifications}}
