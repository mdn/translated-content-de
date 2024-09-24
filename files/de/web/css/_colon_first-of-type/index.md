---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Die **`:first-of-type`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert das erste Element seines Typs innerhalb einer Gruppe von Geschwisterelementen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-of-type.html", "tabbed-shorter")}}

## Syntax

```css
:first-of-type {
  /* ... */
}
```

## Beispiele

### Stil des ersten Absatzes

#### HTML

```html
<h2>Überschrift</h2>
<p>Absatz 1</p>
<p>Absatz 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### Ergebnis

{{EmbedLiveSample('Styling_the_first_paragraph')}}

### Verschachtelte Elemente

Dieses Beispiel zeigt, wie auch verschachtelte Elemente angesprochen werden können. Beachten Sie, dass der [Universalselektor](/de/docs/Web/CSS/Universal_selectors) (`*`) impliziert ist, wenn kein Typselektor geschrieben wird.

#### HTML

```html
<article>
  <div>Dieses `div` ist zuerst!</div>
  <div>Dieses <span>verschachtelte `span` ist zuerst</span>!</div>
  <div>
    Dieses <em>verschachtelte `em` ist zuerst</em>, aber dieses <em>verschachtelte `em` ist zuletzt</em>!
  </div>
  <div>Dieses <span>verschachtelte `span` wird gestylt</span>!</div>
  <p>Dieses `p` qualifiziert sich!</p>
  <div>Dies ist das letzte `div`.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample('Nested_elements', 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}
