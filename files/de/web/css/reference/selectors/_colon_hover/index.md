---
title: "`:hover` CSS-Pseudoklasse"
short-title: :hover
slug: Web/CSS/Reference/Selectors/:hover
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:hover`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) trifft auf ein Element zu, wenn ein Benutzer mit diesem über ein Zeigegerät interagiert. Die Pseudoklasse wird im Allgemeinen ausgelöst, wenn der Benutzer den Cursor (Mauszeiger) über ein Element bewegt, ohne die Maustaste zu drücken.

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

Stile, die durch die `:hover`-Pseudoklasse definiert sind, werden von jeder nachfolgenden, verknüpfungsbezogenen Pseudoklasse ({{ cssxref(":link") }}, {{ cssxref(":visited") }} oder {{ cssxref(":active") }}) mit mindestens gleicher Spezifität überschrieben. Um Links angemessen zu gestalten, setzen Sie die `:hover`-Regel nach den `:link`- und `:visited`-Regeln, aber vor der `:active`-Regel, wie es durch die _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Die `:hover`-Pseudoklasse ist auf Touchscreens problematisch. Abhängig vom Browser könnte die `:hover`-Pseudoklasse niemals zutreffen, nur einen Moment nach Berühren eines Elements zutreffen oder weiterhin zutreffen, selbst nachdem der Benutzer aufgehört hat zu berühren und bis der Benutzer ein anderes Element berührt. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit eingeschränkten oder nicht vorhandenen Hover-Fähigkeiten zugänglich sind.

## Syntax

```css
:hover {
  /* ... */
}
```

## Beispiele

### Grundlegendes Beispiel

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

- [Chromium-Bug #370155: Machen Sie `:hover` nicht klebrig beim Tippen auf Websites, die einen mobilen Viewport festlegen](https://crbug.com/370155)
- [Chromium-Bug #306581: Zeigen Sie Hover- und aktive Zustände sofort auf Touch an, wenn die Seite nicht scrollbar ist.](https://crbug.com/306581)
