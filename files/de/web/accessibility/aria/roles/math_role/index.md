---
title: "ARIA: math Rolle"
slug: Web/Accessibility/ARIA/Roles/math_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `math` Rolle gibt an, dass der Inhalt einen mathematischen Ausdruck darstellt.

## Beschreibung

Inhalt mit der Rolle `math` sollte in einem barrierefreien Format wie [MathML](/de/docs/Web/MathML) oder mit einer anderen Art von Textdarstellung markiert sein, die vom Browser oder einer Polyfill-Bibliothek in ein barrierefreies Format umgewandelt werden kann.

Leider ist die Unterstützung von MathML durch Browser nicht universell. Obwohl die Verwendung eines Bildes eines mathematischen Ausdrucks nicht optimal ist, sollten Sie die `math` Rolle verwenden, wenn Sie ein Bild verwenden. Stellen Sie sicher, dass alle Mathematikbilder durch ein `alt` Attribut gekennzeichnet sind, das den mathematischen Ausdruck beschreibt, so wie er gesprochen würde.

Wenn das Mathematikelement nur Präsentationskinder hat und der barrierefreie Name den mathematischen Ausdruck vermitteln soll, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), um eine Zeichenkette bereitzustellen, die den Ausdruck darstellt. Wenn das Mathematikelement navigierbare Inhalte enthält, die den mathematischen Ausdruck vermitteln, und ein sichtbares Label für den Ausdruck vorhanden ist, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Andernfalls verwenden Sie `aria-label`, um den Ausdruck zu benennen, z. B. `aria-label="Satz des Pythagoras"`.

## Beispiele

Wenn Sie ein Bild oder nicht-semantisches HTML verwenden, um eine Gleichung zu erstellen, verwenden Sie die `math` Rolle.

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

Das obige Beispiel für den Satz des Pythagoras ist barrierefrei geschrieben als:

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

Wäre ein Bild verwendet worden, würde das `alt` Attribut zusammen mit der `math` Rolle verwendet werden:

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [MathML auf MDN](/de/docs/Web/MathML) und das [`<math>`](/de/docs/Web/MathML/Element/math) Element (kein HTML)
- [Die MathML Spezifikation](https://www.w3.org/TR/MathML3/)
