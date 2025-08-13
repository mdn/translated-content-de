---
title: ellipse()
slug: Web/CSS/basic-shape/ellipse
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`ellipse()`** [CSS](/de/docs/Web/CSS)-Funktion ist einer der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types).

{{InteractiveExample("CSS Demo: ellipse()")}}

```css interactive-example-choice
clip-path: ellipse(20px 50px);
```

```css interactive-example-choice
clip-path: ellipse(4rem 50% at right center);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-side);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntax

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

Eine Ellipse ist im Wesentlichen ein zusammengedrückter Kreis, und daher funktioniert `ellipse()` sehr ähnlich wie {{cssxref("basic-shape/circle","circle()")}}, mit dem Unterschied, dass wir zwei Radien, x und y, angeben müssen.

### Werte

- `<shape-radius>`
  - : Zwei Radien, x und y in dieser Reihenfolge. Diese können eine {{cssxref("length")}}, oder ein {{cssxref("percentage")}} oder die Werte `closest-side` und `farthest-side` sein.
    - `closest-side`
      - : Verwendet die Länge vom Zentrum der Form zur nächstgelegenen Seite der Referenzbox. Bei Ellipsen ist dies die nächstgelegene Seite entlang der Radiusdimension.
    - `farthest-side`
      - : Verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite der Referenzbox. Bei Ellipsen ist dies die am weitesten entfernte Seite entlang der Radiusdimension.

- `<position>`
  - : Verschiebt das Zentrum der Ellipse. Kann eine {{cssxref("length")}}, oder ein {{cssxref("percentage")}}, oder ein Wert wie `left` sein. Der Wert `<position>` wird auf Mitte gesetzt, falls weggelassen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches ellipse() Beispiel

Dieses Beispiel zeigt eine linksgeschwommene Ellipse mit einem horizontalen Radius von 40 %, einem vertikalen Radius von 50 % und einer linken Position. Das bedeutet, dass das Zentrum der Ellipse an der linken Kante der Box liegt und wir eine halbe Ellipsenform erhalten, um unseren Text herum zu gestalten.
Klicken Sie auf "Play" in den Codeblöcken, um diese Werte zu ändern und zu sehen, wie sich die Ellipse verändert:

```html live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

### Verwendung der Werte closest-side / farthest-side

Die Schlüsselwort-Werte `closest-side` und `farthest-side` sind nützlich, um eine schnelle Ellipse basierend auf der Größe der geschwommenen Element-Referenzbox zu erstellen.

```html live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
