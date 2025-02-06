---
title: :active
slug: Web/CSS/:active
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:active`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (wie beispielsweise einen Button), das von der Benutzerin oder dem Benutzer aktiviert wird. Bei der Verwendung einer Maus beginnt die "Aktivierung" typischerweise, wenn die Benutzerin oder der Benutzer die primäre Maustaste drückt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-active.html", "tabbed-shorter")}}

Die `:active`-Pseudoklasse wird häufig auf {{HTMLElement("a")}}- und {{HTMLElement("button")}}-Elementen verwendet. Weitere häufige Ziele dieser Pseudoklasse sind Elemente, die _in_ einem aktivierten Element enthalten sind, sowie Formularelemente, die über das zugehörige {{HTMLElement("label")}} aktiviert werden.

Stile, die durch die `:active`-Pseudoklasse definiert werden, werden durch jede nachfolgende linksbezogene Pseudoklasse ({{cssxref(":link")}}, {{cssxref(":hover")}} oder {{cssxref(":visited")}}) mit mindestens gleicher Spezifität überschrieben. Um Links angemessen zu gestalten, platzieren Sie die `:active`-Regel nach allen anderen linksbezogenen Regeln, wie es durch die _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Auf Systemen mit Mehrtastenmäusen spezifiziert CSS, dass die `:active`-Pseudoklasse nur auf die primäre Taste angewendet werden darf; bei rechtshändigem Gebrauch ist dies typischerweise die linke Taste.

## Syntax

```css
:active {
  /* ... */
}
```

## Beispiele

### Aktive Links

#### HTML

```html
<p>
  This paragraph contains a link:
  <a href="#">This link will turn red while you click on it.</a>
  The paragraph will get a gray background while you click on it or the link.
</p>
```

#### CSS

```css
/* Unvisited links */
a:link {
  color: blue;
}
/* Visited links */
a:visited {
  color: purple;
}
/* Hovered links */
a:hover {
  background: yellow;
}
/* Active links */
a:active {
  color: red;
}

/* Active paragraphs */
p:active {
  background: #eee;
}
```

#### Ergebnis

{{EmbedLiveSample('Active_links')}}

### Aktive Formularelemente

#### HTML

```html
<form>
  <label for="my-button">My button: </label>
  <button id="my-button" type="button">Try Clicking Me or My Label!</button>
</form>
```

#### CSS

```css
form :active {
  color: red;
}

form button {
  background: white;
}
```

#### Ergebnis

{{EmbedLiveSample('Active_form_elements')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Linksbezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":visited")}} und {{cssxref(":hover")}}
