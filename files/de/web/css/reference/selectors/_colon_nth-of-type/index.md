---
title: "`:nth-of-type()` CSS-Pseudoklasse"
short-title: :nth-of-type()
slug: Web/CSS/Reference/Selectors/:nth-of-type
l10n:
  sourceCommit: e620c4f06bca1cbecc4412084e43ddc12e88fe56
---

Die **`:nth-of-type()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Elemente basierend auf ihrer Position unter Geschwistern desselben Typs (Tag-Name) aus.

{{InteractiveExample("CSS Demo: :nth-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:nth-of-type(even) {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>Vegetables:</dt>
  <dd>1. Tomatoes</dd>
  <dd>2. Cucumbers</dd>
  <dd>3. Mushrooms</dd>
  <dt>Fruits:</dt>
  <dd>4. Apples</dd>
  <dd>5. Mangos</dd>
  <dd>6. Pears</dd>
  <dd>7. Oranges</dd>
</dl>
```

## Syntax

```css-nolint
:nth-of-type(<An+B> | even | odd) {
  /* ... */
}
```

### Parameter

Die Pseudoklasse `:nth-of-type()` wird mit einem einzelnen Argument angegeben, das das Muster für die Übereinstimmung von Elementen darstellt.

Siehe {{Cssxref(":nth-child")}} für eine detailliertere Erklärung der Syntax.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<div>
  <div>This element isn't counted.</div>
  <p>1st paragraph.</p>
  <p class="fancy">2nd paragraph.</p>
  <div>This element isn't counted.</div>
  <p class="fancy">3rd paragraph.</p>
  <p>4th paragraph.</p>
</div>
```

#### CSS

```css
/* Odd paragraphs */
p:nth-of-type(2n + 1) {
  color: red;
}

/* Even paragraphs */
p:nth-of-type(2n) {
  color: blue;
}

/* First paragraph */
p:nth-of-type(1) {
  font-weight: bold;
}

/* This will match the 3rd paragraph as it will match elements which are 2n+1 AND have a class of fancy.
The second paragraph has a class of fancy but is not matched as it is not :nth-of-type(2n+1) */
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_example', 250, 250)}}

> [!NOTE]
> Es gibt keine Möglichkeit, mit diesem Selektor das "nth-of-class" auszuwählen. Der `:nth-of-type` Selektor betrachtet nur den Typ, wenn er die Liste der Übereinstimmungen erstellt. Sie können jedoch die [`:nth-of-child` Selektor `of` Syntax](/de/docs/Web/CSS/Reference/Selectors/:nth-child#the_of_selector_syntax) verwenden, um ein "nth-of-class" Verhalten zu erreichen. Sie können auch CSS auf ein Element basierend auf der `:nth-of-type` Position **und** einer Klasse anwenden, wie im vorherigen Beispiel gezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
