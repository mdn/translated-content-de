---
title: patternTransform
slug: Web/SVG/Attribute/patternTransform
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`patternTransform`**-Attribut definiert eine Liste von [Transformationsdefinitionen](/de/docs/Web/SVG/Attribute/transform#transform_functions), die auf ein Mustertile angewendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('pattern')}}

## Beispiel

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

{{EmbedLiveSample("Example", '100%', 300)}}

## Muster

Für {{SVGElement('pattern')}} definiert `patternTransform` eine Liste von [Transformationsdefinitionen](/de/docs/Web/SVG/Attribute/transform#transform_functions), die auf ein Mustertile angewendet werden.

> [!NOTE]
> Ab SVG2 ist es auch erlaubt, die CSS-Eigenschaft {{ cssxref('transform') }} zu verwenden. Der aktuelle Implementierungsstand ist jedoch nicht sehr gut. Aus Gründen der Abwärtskompatibilität wird dringend empfohlen, weiterhin das `patternTransform`-Attribut zu verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Attribute/transform#transform_functions"
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

### Transformationsfunktionen

Um mehr über die Definition von Transformationsfunktionen zu erfahren, siehe die Definition des {{ SVGAttr("transform") }}-Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
