---
title: caret
slug: Web/CSS/Reference/Properties/caret
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`caret`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt das Erscheinungsbild und Verhalten des **Eingabecarets** in einer einzigen Deklaration fest.

{{InteractiveExample("CSS Demo: caret")}}

```css interactive-example-choice
caret: red;
```

```css interactive-example-choice
caret: block manual;
```

```css interactive-example-choice
caret: underscore auto green;
```

```css interactive-example-choice
caret: bar manual orange;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <label for="example-element">Edit text field:</label>
    <input id="example-element" type="text" value="Sample text" />
  </div>
</section>
```

```css interactive-example
div {
  text-align: left;
}

#example-element {
  font-size: 1.2rem;
  padding: 8px;
  width: 300px;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`caret-color`](/de/docs/Web/CSS/Reference/Properties/caret-color)
- [`caret-animation`](/de/docs/Web/CSS/Reference/Properties/caret-animation)
- [`caret-shape`](/de/docs/Web/CSS/Reference/Properties/caret-shape)

## Syntax

```css
/* Individual values */
caret: red; /* caret-color only */
caret: block; /* caret-shape only */
caret: manual; /* caret-animation only */

/* Two values */
caret: red manual; /* caret-color + caret-animation */
caret: block auto; /* caret-shape + caret-animation */
caret: underscore orange; /* caret-shape + caret-color */

/* Three values */
caret: bar manual red; /* caret-shape + caret-animation + caret-color */
caret: block auto #00ff00; /* caret-shape + caret-animation + caret-color */

/* Global values */
caret: inherit;
caret: initial;
caret: revert;
caret: revert-layer;
caret: unset;
```

Die `caret`-Eigenschaft wird als ein, zwei oder drei Werte von den zusammengesetzten Eigenschaften angegeben. Werte können in beliebiger Reihenfolge spezifiziert werden, und ausgelassene Werte werden auf ihre Anfangswerte gesetzt.

### Werte

- {{cssxref("caret-color")}}
  - : Legt die Farbe des Carets fest.

- {{cssxref("caret-animation")}}
  - : Bestimmt, ob der Caret blinkt.

- {{cssxref("caret-shape")}}
  - : Legt die visuelle Form des Carets fest.

## Beschreibung

Die `caret`-Kurzform ermöglicht es Ihnen, mehrere Caret-Eigenschaften in einer einzigen Deklaration festzulegen, was es bequemer macht, das komplette Erscheinungsbild und Verhalten des Eingabecarets anzupassen.

### Wertauflösung

Wenn Werte in der Kurzform ausgelassen werden, setzen sie sich auf ihre Anfangswerte zurück:

- `caret-color`: `auto` (löst sich zu `currentColor` auf).
- `caret-animation`: `auto` (Caret blinkt).
- `caret-shape`: `auto` (vom Browser bestimmte Form).

### Reihenfolgeunabhängigkeit

Im Gegensatz zu einigen CSS-Kurzformen akzeptiert die `caret`-Eigenschaft Werte in beliebiger Reihenfolge. Der Browser bestimmt, welcher Wert auf welche Eigenschaft angewendet wird, basierend auf dem Werttyp:

- {{cssxref("&lt;color>")}}-Werte werden auf `caret-color` angewendet.
- `auto`/`manual` Schlüsselwörter werden auf `caret-animation` angewendet.
- Formschlüsselwörter (`bar`, `block`, `underscore`) werden auf `caret-shape` angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Caret

Dieses Beispiel erstellt eine Vintage-Terminalschnittstelle unter Verwendung der `caret`-Kurzform, um mehrere Caret-Eigenschaften zu kombinieren, und zeigt, wie sie ältere Techniken auf Basis von Rändern ersetzt.

Der Hauptvorteil der `caret`-Kurzform besteht darin, mehrere Eigenschaften in einer Deklaration zu kombinieren. Hier setzen wir die Form auf `block`, deaktivieren das standardmäßige Blinken und setzen die Farbe auf `green`, alles in einer einzigen Zeile.

#### HTML

```html
<label for="terminal">Enter a command</label>
<div class="old-screen">
  <span>></span>
  <textarea id="terminal" class="terminal-input"></textarea>
</div>
```

#### CSS

```css hidden
label {
  background: #092104;
  display: block;
  padding: 10px 20px;
  color: #00ad00;
  font-weight: bold;
  font-family: monospace;
}

.old-screen {
  background: repeating-linear-gradient(
    #092104,
    #092104 2px,
    #123208 2px,
    #123208 4px
  );
  height: 140px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  font-family: monospace;
}

span {
  display: inline-block;
  padding: 2px 5px;
  color: #00ad00;
  font-weight: bold;
  margin-right: 8px;
}

.terminal-input {
  background: transparent;
  height: 100%;
  border: none;
  color: #00ad00;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  flex: 1;
  resize: none;
}
```

```css
.terminal-input {
  caret: block manual green;
  animation: vintage-caret 2s infinite;
}

@keyframes vintage-caret {
  0%,
  50% {
    caret-color: #00ad00;
  }
  75%,
  100% {
    caret-color: transparent;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Retro_terminal_with_animated_caret', 550, 215)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}, {{cssxref("caret-animation")}}, {{cssxref("caret-shape")}}
- [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
