---
title: :hover
slug: Web/CSS/Reference/Selectors/:hover
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:hover`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selektiert ein Element, wenn ein Nutzer mit einem Zeigegerät darauf interagiert. Die Pseudoklasse wird in der Regel ausgelöst, wenn der Nutzer den Cursor (Mauszeiger) über ein Element bewegt, ohne die Maustaste zu drücken.

{{InteractiveExample("CSS Demo: :hover", "tabbed-shorter")}}

```css interactive-example
.joinBtn {
  width: 10em;
  height: 5ex;
  background-color: gold;
  border: 2px solid firebrick;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.joinBtn:hover {
  background-color: bisque;
}
```

```html interactive-example
<p>Would you like to join our quest?</p>
<button class="joinBtn">Confirm</button>
```

Stile, die durch die `:hover`-Pseudoklasse definiert werden, werden von jedem nachfolgenden, mit Links verbundenen Pseudoklassen ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, oder {{ cssxref(":active") }}) mit mindestens gleicher Spezifität überschrieben. Um Links korrekt zu stylen, platzieren Sie die `:hover`-Regel nach den `:link`- und `:visited`-Regeln, aber vor der `:active`-Regel, wie in der _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Die `:hover`-Pseudoklasse ist bei Touchscreens problematisch. Je nach Browser könnte die `:hover`-Pseudoklasse nie zutreffen, nur einen Moment nach dem Berühren eines Elements zutreffen oder weiterhin zutreffen, selbst nachdem der Nutzer aufgehört hat zu berühren, bis der Nutzer ein anderes Element berührt. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit eingeschränkten oder nicht vorhandenen Hover-Fähigkeiten zugänglich sind.

## Syntax

```css
:hover {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<a href="#">Try hovering over this link.</a>
```

#### CSS

```css
a {
  background-color: powderblue;
  transition: background-color 0.5s;
}

a:hover {
  background-color: gold;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Chromium Bug #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://crbug.com/370155)
- [Chromium Bug #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://crbug.com/306581)
