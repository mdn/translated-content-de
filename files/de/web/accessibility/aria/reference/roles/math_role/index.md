---
title: "ARIA: math Rolle"
short-title: math
slug: Web/Accessibility/ARIA/Reference/Roles/math_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `math` Rolle gibt an, dass der Inhalt einen mathematischen Ausdruck darstellt.

## Beschreibung

Inhalt mit der Rolle `math` sollte in einem barrierefreien Format, wie zum Beispiel [MathML](/de/docs/Web/MathML), oder mit einer anderen Art von Textdarstellung ausgezeichnet werden, die vom Browser oder einer Polyfill-Bibliothek in ein barrierefreies Format umgewandelt werden kann.

Leider ist die Unterstützung für MathML in Browsern nicht universell. Auch wenn die Verwendung eines Bildes für einen mathematischen Ausdruck nicht optimal ist, verwenden Sie die `math` Rolle, wenn Sie ein Bild nutzen. Stellen Sie sicher, dass alle mathematischen Bilder durch ein `alt` Attribut gekennzeichnet sind, das den mathematischen Ausdruck beschreibt, wie er gesprochen wird.

Wenn das `math` Element nur präsentierende Kinder hat und der zugängliche Name den mathematischen Ausdruck vermitteln soll, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um eine Zeichenfolge bereitzustellen, die den Ausdruck darstellt. Wenn das `math` Element navigierbare Inhalte enthält, die den mathematischen Ausdruck vermitteln, und ein sichtbares Label für den Ausdruck vorhanden ist, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Andernfalls verwenden Sie `aria-label`, um den Ausdruck zu benennen, z.B., `aria-label="Pythagorean Theorem"`.

## Beispiele

Wenn Sie ein Bild oder nicht-semantisches HTML verwenden, um eine Gleichung zu erstellen, verwenden Sie die `math` Rolle.

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

Der obige Satz von Pythagoras wird barrierefrei geschrieben als:

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

Hätte man ein Bild verwendet, würde das `alt` Attribut zusammen mit der `math` Rolle verwendet werden:

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [MathML auf MDN](/de/docs/Web/MathML) und das [`<math>`](/de/docs/Web/MathML/Reference/Element/math) Element (nicht HTML)
- [Die MathML-Spezifikation](https://www.w3.org/TR/MathML3/)
