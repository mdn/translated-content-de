---
title: ":nth-of-type()"
slug: Web/CSS/:nth-of-type
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:nth-of-type()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf ihrer Position unter den Geschwistern des gleichen Typs (Tag-Name) aus.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-of-type.html", "tabbed-shorter")}}

## Syntax

Die `nth-of-type`-Pseudoklasse wird mit einem einzigen Argument angegeben, das das Muster für das Matching von Elementen darstellt.

Siehe {{Cssxref(":nth-child")}} für eine detailliertere Erklärung der Syntax.

```css-nolint
:nth-of-type(<An+B> | even | odd) {
  /* ... */
}
```

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
> Es gibt keine Möglichkeit, die nth-of-class mit diesem Selektor auszuwählen. Der Selektor betrachtet nur den Typ, wenn die Liste der Übereinstimmungen erstellt wird. Sie können jedoch CSS auf ein Element basierend auf der `:nth-of-type`-Position **und** einer Klasse anwenden, wie im obigen Beispiel gezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
