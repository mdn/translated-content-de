---
title: :hover
slug: Web/CSS/:hover
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:hover`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft zu, wenn der Benutzer mit einem Zeigegerät mit einem Element interagiert, aber es nicht unbedingt aktiviert. Sie wird im Allgemeinen ausgelöst, wenn der Benutzer mit dem Cursor (Mauszeiger) über ein Element fährt.

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

Stile, die durch die `:hover` Pseudoklasse definiert sind, werden von jeder nachfolgenden, Link-bezogenen Pseudoklasse ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, oder {{ cssxref(":active") }}) überschrieben, die mindestens die gleiche Spezifität besitzt. Um Links richtig zu stylen, platzieren Sie die `:hover` Regel nach den `:link` und `:visited` Regeln, aber vor der `:active` Regel, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Die `:hover` Pseudoklasse stellt auf Touchscreens ein Problem dar. Abhängig vom Browser kann es sein, dass die `:hover` Pseudoklasse niemals zutrifft, nur für einen Moment nach Berühren eines Elements zutrifft oder weiterhin zutrifft, selbst nachdem der Benutzer aufgehört hat, das Element zu berühren, und bis der Benutzer ein anderes Element berührt. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit eingeschränkten oder nicht vorhandenen Hover-Möglichkeiten zugänglich sind.

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

- [Chromium-Fehler #370155: :hover auf Tap auf Seiten mit mobilem Viewport nicht klebrig machen](https://crbug.com/370155)
- [Chromium-Fehler #306581: Sofortige Anzeige von Hover- und Aktivzuständen auf Touch, wenn die Seite nicht scrollbar ist.](https://crbug.com/306581)
