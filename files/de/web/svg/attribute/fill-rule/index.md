---
title: fill-rule
slug: Web/SVG/Attribute/fill-rule
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`fill-rule`** Attribut ist ein Präsentationsattribut, das den Algorithmus definiert, um den _inneren_ Teil einer Form zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut kann `fill-rule` als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
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
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Standardwert für fill-rule -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Das Zentrum der Form hat zwei
  Pfadsegmente (angezeigt durch den roten Strich)
  zwischen ihm und der Unendlichkeit. Es wird daher
  als außerhalb der Form betrachtet und nicht gefüllt.
  -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>nonzero</code> | <code>evenodd</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>nonzero</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

Das `fill-rule` Attribut bietet zwei Optionen, um zu bestimmen, wie das Innere (d.h. der zu füllende Bereich) einer Form definiert wird:

### nonzero

Der Wert `nonzero` bestimmt die „Innenseite“ eines Punktes in der Form, indem ein Strahl von diesem Punkt in beliebiger Richtung zur Unendlichkeit gezogen wird und dann die Orte untersucht werden, an denen ein Segment der Form den Strahl kreuzt. Beginnend mit einem Zählwert von null, wird eins hinzugefügt, wenn ein Pfadsegment den Strahl von links nach rechts kreuzt, und eins abgezogen, wenn ein Pfadsegment den Strahl von rechts nach links kreuzt. Nach dem Zählen der Kreuzungen, wenn das Ergebnis null ist, liegt der Punkt außerhalb des Pfades. Andernfalls liegt er innerhalb.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt der nonzero-Regel auf kreuzende Pfadsegmente -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Effekt der nonzero-Regel auf eine Form innerhalb einer Form
  mit dem Pfadsegment in derselben Richtung verlaufend
  (beide Quadrate im Uhrzeigersinn gezeichnet, "nach rechts")
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  Effekt der nonzero-Regel auf eine Form innerhalb einer Form
  mit dem Pfadsegment in entgegengesetzter Richtung
  (ein Quadrat im Uhrzeigersinn, das andere gegen den Uhrzeigersinn gezeichnet)
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('nonzero', '100%', 200)}}

### evenodd

Der Wert `evenodd` bestimmt die „Innenseite“ eines Punktes in der Form, indem ein Strahl von diesem Punkt in beliebiger Richtung zur Unendlichkeit gezogen wird und die Anzahl der Pfadsegmente gezählt wird, die der Strahl von der gegebenen Form kreuzt. Ist diese Zahl ungerade, liegt der Punkt innerhalb; ist sie gerade, liegt der Punkt außerhalb.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt der evenodd-Regel auf kreuzende Pfadsegmente -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Effekt der evenodd-Regel auf eine Form innerhalb einer Form
  mit dem Pfadsegment in derselben Richtung verlaufend
  (beide Quadrate im Uhrzeigersinn gezeichnet, "nach rechts")
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  Effekt der evenodd-Regel auf eine Form innerhalb einer Form
  mit dem Pfadsegment in entgegengesetzter Richtung
  (ein Quadrat im Uhrzeigersinn, das andere gegen den Uhrzeigersinn gezeichnet)
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('evenodd', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}