---
title: "ARIA: math Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/math_role
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Die `math` Rolle zeigt an, dass der Inhalt einen mathematischen Ausdruck darstellt.

## Beschreibung

Inhalte mit der Rolle `math` sollen in einem barrierefreien Format wie [MathML](/de/docs/Web/MathML) oder mit einer anderen Art von Textdarstellung, die vom Browser oder einer Polyfill-Bibliothek in ein barrierefreies Format umgewandelt werden kann, ausgezeichnet werden.

Leider ist die Unterstützung von MathML durch Browser nicht universell. Während die Verwendung eines Bildes eines mathematischen Ausdrucks nicht optimal ist, sollten Sie bei Verwendung eines Bildes die `math` Rolle benutzen. Stellen Sie sicher, dass alle mathematischen Bilder mit einem `alt`-Attribut versehen sind, das den mathematischen Ausdruck so beschreibt, wie er gesprochen würde.

Wenn das Math-Element nur präsentative Kinder hat und der zugängliche Name den mathematischen Ausdruck vermitteln soll, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um eine Zeichenfolge bereitzustellen, die den Ausdruck darstellt. Wenn das Math-Element navigierbare Inhalte enthält, die den mathematischen Ausdruck vermitteln, und ein sichtbares Label für den Ausdruck vorhanden ist, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Andernfalls verwenden Sie `aria-label`, um den Ausdruck zu benennen, z.B. `aria-label="Satz des Pythagoras"`.

## Beispiele

Wenn Sie ein Bild oder nicht-semantisches HTML zur Erstellung einer Gleichung verwenden, verwenden Sie die `math` Rolle.

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

Der oben angegebene Satz des Pythagoras ist barrierefrei geschrieben als:

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

Wäre ein Bild verwendet worden, würde das `alt`-Attribut zusammen mit der `math` Rolle verwendet:

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [MathML auf MDN](/de/docs/Web/MathML) und das [`<math>`](/de/docs/Web/MathML/Reference/Element/math) Element (nicht HTML)
- [Die MathML-Spezifikation](https://www.w3.org/TR/MathML3/)
