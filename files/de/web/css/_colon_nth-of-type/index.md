---
title: ":nth-of-type()"
slug: Web/CSS/:nth-of-type
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:nth-of-type()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf ihrer Position unter Geschwistern des gleichen Typs (Tag-Name) aus.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-of-type.html", "tabbed-shorter")}}

## Syntax

Die `nth-of-type` Pseudoklasse wird mit einem einzelnen Argument spezifiziert, das das Muster zur Auswahl von Elementen darstellt.

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
  <div>Dieses Element wird nicht gezählt.</div>
  <p>1. Absatz.</p>
  <p class="fancy">2. Absatz.</p>
  <div>Dieses Element wird nicht gezählt.</div>
  <p class="fancy">3. Absatz.</p>
  <p>4. Absatz.</p>
</div>
```

#### CSS

```css
/* Ungerade Absätze */
p:nth-of-type(2n + 1) {
  color: red;
}

/* Gerade Absätze */
p:nth-of-type(2n) {
  color: blue;
}

/* Erster Absatz */
p:nth-of-type(1) {
  font-weight: bold;
}

/* Dies wird den 3. Absatz auswählen, da es Elemente auswählt, die 2n+1 sind UND eine fancy-Klasse haben.
Der zweite Absatz hat die Klasse fancy, wird jedoch nicht ausgewählt, da er nicht :nth-of-type(2n+1) ist. */
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_example', 250, 250)}}

> [!NOTE]
> Es gibt keine Möglichkeit, das nth-of-class mit diesem Selektor auszuwählen. Der Selektor betrachtet nur den Typ, wenn die Liste der Übereinstimmungen erstellt wird. Sie können jedoch CSS auf ein Element basierend auf der `:nth-of-type`-Position **und** einer Klasse anwenden, wie im obigen Beispiel gezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
