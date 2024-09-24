---
title: "ARIA: math Rolle"
slug: Web/Accessibility/ARIA/Roles/math_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `math` Rolle zeigt an, dass der Inhalt einen mathematischen Ausdruck darstellt.

## Beschreibung

Inhalte mit der Rolle `math` sollen in einem barrierefreien Format wie [MathML](/de/docs/Web/MathML) ausgezeichnet werden oder mit einer anderen Art von Textdarstellung, die vom Browser oder einer Polyfill-Bibliothek in ein barrierefreies Format umgewandelt werden kann.

Leider ist die Unterstützung für MathML durch Browser nicht universell. Während die Nutzung eines Bildes eines mathematischen Ausdrucks nicht optimal ist, sollten Sie, wenn Sie ein Bild verwenden, die `math` Rolle nutzen.
Stellen Sie sicher, dass Bilder von mathematischen Ausdrücken durch ein `alt` Attribut gekennzeichnet sind, das den mathematischen Ausdruck so beschreibt, wie er gesprochen werden würde.

Wenn das mathematische Element nur darstellende Kinder hat und der barrierefreie Name dazu dient, den mathematischen Ausdruck zu vermitteln, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), um eine Zeichenkette bereitzustellen, die den Ausdruck darstellt. Wenn das mathematische Element navigierbare Inhalte enthält, die den mathematischen Ausdruck vermitteln, und ein sichtbares Label für den Ausdruck vorhanden ist, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Andernfalls verwenden Sie `aria-label`, um den Ausdruck zu benennen, z. B. `aria-label="Pythagoras Theorem"`.

## Beispiele

Wenn Sie ein Bild oder nicht-semantisches HTML verwenden, um eine Gleichung zu erstellen, verwenden Sie die `math` Rolle.

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

Der obige Satz des Pythagoras wird barrierefrei wie folgt geschrieben:

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

Wenn ein Bild verwendet worden wäre, würde das `alt` Attribut zusammen mit der `math` Rolle verwendet:

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [MathML auf MDN](/de/docs/Web/MathML) und das [`<math>`](/de/docs/Web/MathML/Element/math) Element (nicht HTML)
- [Die MathML Spezifikation](https://www.w3.org/TR/MathML3/)
