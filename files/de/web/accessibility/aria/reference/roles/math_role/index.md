---
title: "ARIA: math Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/math_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die Rolle `math` zeigt an, dass der Inhalt einen mathematischen Ausdruck darstellt.

## Beschreibung

Inhalt mit der Rolle `math` soll in einem zugänglichen Format wie [MathML](/de/docs/Web/MathML) oder einer anderen Art von Textdarstellung ausgezeichnet werden, der vom Browser oder einer Polyfill-Bibliothek in ein zugängliches Format umgewandelt werden kann.

Leider ist die Unterstützung für MathML in Browsern nicht universell. Auch wenn die Verwendung eines Bildes für einen mathematischen Ausdruck nicht optimal ist, sollten Sie die Rolle `math` verwenden, wenn Sie Bilder verwenden. Achten Sie darauf, dass alle Bilder von mathematischen Ausdrücken mit einem `alt`-Attribut versehen sind, das den mathematischen Ausdruck beschreibt, wie er gesprochen würde.

Wenn das Mathe-Element nur präsentationsbezogene Kinder hat und der zugängliche Name den mathematischen Ausdruck vermitteln soll, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um eine Zeichenkette bereitzustellen, die den Ausdruck darstellt. Wenn das Mathe-Element navigierbaren Inhalt enthält, der den mathematischen Ausdruck vermittelt, und ein sichtbares Etikett für den Ausdruck vorhanden ist, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Andernfalls verwenden Sie `aria-label`, um den Ausdruck zu benennen, z.B. `aria-label="Pythagorean Theorem"`.

## Beispiele

Wenn Sie Bilder oder nicht-semantisches HTML verwenden, um eine Gleichung zu erstellen, verwenden Sie die Rolle `math`.

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

Das obige Satz des Pythagoras wird zugänglich wie folgt geschrieben:

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

Wenn ein Bild verwendet worden wäre, würde das `alt`-Attribut zusammen mit der Rolle `math` verwendet:

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [MathML auf MDN](/de/docs/Web/MathML) und das [`<math>`](/de/docs/Web/MathML/Element/math)-Element (nicht HTML)
- [Die MathML-Spezifikation](https://www.w3.org/TR/MathML3/)
