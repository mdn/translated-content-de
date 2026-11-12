---
title: patternTransform
slug: Web/SVG/Reference/Attribute/patternTransform
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`patternTransform`** definiert eine Liste von [Transformationen](/de/docs/Web/SVG/Reference/Attribute/transform#transform_functions), die auf eine Musterkachel angewendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('pattern')}}

## Elemente

Sie können dieses Attribut mit den SVG-Elementen verwenden, die in den folgenden Abschnitten beschrieben werden.

### `<pattern>`

Für {{SVGElement('pattern')}} definiert `patternTransform` eine Liste von [Transformationen](/de/docs/Web/SVG/Reference/Attribute/transform#transform_functions), die auf eine Musterkachel angewendet werden.

> [!NOTE]
> Seit SVG2 kann auch die CSS-Eigenschaft {{ cssxref('transform') }} verwendet werden. Allerdings ist der aktuelle Stand der Implementierung nicht besonders gut. Aus Gründen der Abwärtskompatibilität wird dringend empfohlen, weiterhin das Attribut `patternTransform` zu verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Reference/Attribute/transform#transform_functions"
          >&#x3C;transform-list></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Identitätstransformation</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Apply a transform on the tile -->
  <pattern
    id="p1"
    width=".25"
    height=".25"
    patternTransform="rotate(20)
                      skewX(30)
                      scale(1 0.5)">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Apply the transformed pattern tile -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGAttr("transform") }}
