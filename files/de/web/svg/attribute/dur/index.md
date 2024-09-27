---
title: dur
slug: Web/SVG/Attribute/dur
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{SVGRef}}

Das **`dur`**-Attribut gibt die einfache Dauer einer Animation an.

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
      repeatCount="indefinite" />
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="3s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "220", "150")}}

## Verwendungshinweise

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
        | <code>media</code> | <code>indefinite</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>indefinite</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<clock-value>`
  - : Dieser Wert gibt die Länge der einfachen Dauer an. Der Wert muss größer als 0 sein und kann in Stunden (`h`), Minuten (`m`), Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Es ist möglich, diese Zeitdarstellungen zu kombinieren, um komplexe Dauern wie `hh:mm:ss.iii` oder `mm:ss.iii` zu erstellen.
- `media`
  - : Dieser Wert legt die einfache Dauer als die intrinsische Media-Dauer fest. Dies ist nur für Elemente gültig, die Medien definieren.
    (Für [Animationselemente](/de/docs/Web/SVG/Element#animation_elements) wird das Attribut ignoriert, wenn `media` angegeben ist.)
- `indefinite`
  - : Dieser Wert gibt die einfache Dauer als unbestimmt an.

> [!NOTE]
> Die [Interpolation](/de/docs/Glossary/interpolation) funktioniert nicht, wenn die einfache Dauer unbestimmt ist (obwohl sie dennoch für {{SVGElement("set")}}-Elemente nützlich sein kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
