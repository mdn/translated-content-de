---
title: ":hover"
slug: Web/CSS/:hover
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:hover`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft zu, wenn der Benutzer mit einem Zeigegerät mit einem Element interagiert, es jedoch nicht zwingend aktiviert. In der Regel wird sie ausgelöst, wenn der Benutzer mit dem Cursor (Mauszeiger) über ein Element fährt.

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

Von der `:hover` Pseudoklasse definierte Stile werden von jeder nachfolgenden, linkbezogenen Pseudoklasse ({{ cssxref(":link") }}, {{ cssxref(":visited") }} oder {{ cssxref(":active") }}), die mindestens die gleiche Spezifität hat, überschrieben. Um Links angemessen zu stylen, sollten Sie die `:hover` Regel nach den `:link` und `:visited` Regeln, aber vor der `:active` Regel, gemäß der _LVHA-Reihenfolge_: `:link` — `:visited` — `:hover` — `:active` platzieren.

> [!NOTE]
> Die `:hover` Pseudoklasse ist auf Touchscreens problematisch. Abhängig vom Browser könnte die `:hover` Pseudoklasse niemals zutreffen, nur einen Moment nach Berühren eines Elements zutreffen oder weiterhin zutreffen, selbst nachdem der Benutzer aufgehört hat zu berühren, bis der Benutzer ein anderes Element berührt. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit eingeschränkten oder nicht vorhandenen Hover-Fähigkeiten zugänglich sind.

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

- [Chromium Fehler #370155: Mache `:hover` nicht sticky bei Tap auf Seiten, die ein mobiles Viewport setzen](https://crbug.com/370155)
- [Chromium Fehler #306581: Zeige sofort Hover- und aktive Zustände auf Touch, wenn die Seite nicht scrollbar ist.](https://crbug.com/306581)
