---
title: ":active"
slug: Web/CSS/:active
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:active`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (wie ein Button), das vom Benutzer aktiviert wird. Bei der Verwendung einer Maus beginnt die "Aktivierung" typischerweise, wenn der Benutzer die primäre Maustaste drückt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-active.html", "tabbed-shorter")}}

Die `:active` Pseudoklasse wird häufig auf {{HTMLElement("a")}} und {{HTMLElement("button")}} Elementen verwendet. Andere häufige Ziele dieser Pseudoklasse sind Elemente, die in einem aktivierten Element enthalten sind, und Formularelemente, die durch ihr zugehöriges {{HTMLElement("label")}} aktiviert werden.

Stile, die durch die `:active` Pseudoklasse definiert sind, werden durch jede nachfolgende, auf Links bezogene Pseudoklasse ({{cssxref(":link")}}, {{cssxref(":hover")}}, oder {{cssxref(":visited")}}) mit mindestens gleicher Spezifität überschrieben. Um Links richtig zu stylen, setzen Sie die `:active` Regel nach allen anderen, auf Links bezogenen Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Auf Systemen mit Mäusen mit mehreren Tasten gibt CSS vor, dass die `:active` Pseudoklasse nur auf die primäre Taste angewendet werden muss; bei rechtshändigen Mäusen ist dies typischerweise die linke Taste.

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

- Auf Links bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":visited")}}, und {{cssxref(":hover")}}
