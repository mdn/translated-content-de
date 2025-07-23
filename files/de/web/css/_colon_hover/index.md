---
title: :hover
slug: Web/CSS/:hover
l10n:
  sourceCommit: d64c2d5cb1f04b569e6af5d42feaadbc8c375b03
---

Die **`:hover`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft auf ein Element zu, wenn ein Benutzer mit einem Zeigegerät interagiert. Die Pseudoklasse wird normalerweise ausgelöst, wenn der Benutzer den Cursor (Mauszeiger) über ein Element bewegt, ohne die Maustaste zu drücken.

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

Stile, die durch die `:hover` Pseudoklasse definiert sind, werden von jeder nachfolgenden linkbezogenen Pseudoklasse ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, oder {{ cssxref(":active") }}) überschrieben, die mindestens die gleiche Spezifität besitzt. Um Links richtig zu stylen, platzieren Sie die `:hover` Regel nach den `:link` und `:visited` Regeln, aber vor der `:active` Regel, wie es durch die _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Die `:hover` Pseudoklasse ist auf Touchscreens problematisch. Abhängig vom Browser könnte die `:hover` Pseudoklasse nie zutreffen, nur für einen Moment nach dem Berühren eines Elements zutreffen oder weiterhin zutreffen, selbst nachdem der Benutzer aufgehört hat, das Element zu berühren, und bis der Benutzer ein anderes Element berührt. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit eingeschränkten oder nicht vorhandenen Hover-Fähigkeiten zugänglich sind.

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

- [Chromium Fehler #370155: Machen Sie `:hover` nicht klebrig auf Tap auf Seiten, die ein mobiles Viewport einstellen](https://crbug.com/370155)
- [Chromium Fehler #306581: Zeige sofort Hover- und Aktiventwicklungen auf Touch an, wenn die Seite nicht scrollbar ist.](https://crbug.com/306581)
