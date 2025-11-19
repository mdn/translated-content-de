---
title: "ARIA: Rolle math"
short-title: math
slug: Web/Accessibility/ARIA/Reference/Roles/math_role
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Die Rolle `math` gibt an, dass der Inhalt einen mathematischen Ausdruck darstellt.

## Beschreibung

Inhalte mit der Rolle `math` sollen in einem barrierefreien Format wie [MathML](/de/docs/Web/MathML) ausgezeichnet werden, oder mit einer weiteren Art von Textdarstellung, die vom Browser oder einer Polyfill-Bibliothek in ein barrierefreies Format umgewandelt werden kann.

Leider ist die Unterstützung von MathML in Browsern nicht universell. Während die Verwendung eines Bildes eines mathematischen Ausdrucks nicht optimal ist, sollten Sie, wenn Sie doch ein Bild verwenden, die Rolle `math` verwenden. Achten Sie darauf, dass alle mathematischen Bilder mit einem `alt`-Attribut versehen sind, das den mathematischen Ausdruck beschreibt, wie er gesprochen würde.

Wenn das Math-Element nur präsentationelle Kinder hat und der barrierefreie Name dazu bestimmt ist, den mathematischen Ausdruck zu vermitteln, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um eine Zeichenkette bereitzustellen, die den Ausdruck repräsentiert. Wenn das Math-Element navigierbare Inhalte enthält, die den mathematischen Ausdruck vermitteln, und ein sichtbares Label für den Ausdruck vorhanden ist, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Andernfalls verwenden Sie `aria-label`, um den Ausdruck zu benennen, z. B. `aria-label="Satz des Pythagoras"`.

## Beispiele

Wenn Sie ein Bild oder nicht-semantisches HTML zur Erstellung einer Gleichung verwenden, nutzen Sie die Rolle `math`.

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

Der oben angegebene Satz des Pythagoras wird barrierefrei wie folgt geschrieben:

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

Wäre ein Bild verwendet worden, würde das `alt`-Attribut zusammen mit der Rolle `math` verwendet werden:

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [MathML auf MDN](/de/docs/Web/MathML) und das [`<math>`](/de/docs/Web/MathML/Reference/Element/math) Element (nicht HTML)
- [Die MathML-Spezifikation](https://w3c.github.io/mathml/spec.html)
