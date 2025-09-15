---
title: caret
slug: Web/CSS/caret
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

{{SeeCompatTable}}

Die **`caret`** [shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Erscheinungsbild und das Verhalten des **Einfüge-Carets** in einer einzigen Deklaration fest.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`caret-color`](/de/docs/Web/CSS/caret-color)
- [`caret-animation`](/de/docs/Web/CSS/caret-animation)
- [`caret-shape`](/de/docs/Web/CSS/caret-shape)

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

Die `caret`-Eigenschaft wird als ein, zwei oder drei Werte aus den Bestandteileigenschaften angegeben. Werte können in beliebiger Reihenfolge angegeben werden, und nicht angegebene Werte werden auf ihre Initialwerte gesetzt.

### Werte

- {{cssxref("caret-color")}}
  - : Legt die Farbe des Carets fest.

- {{cssxref("caret-animation")}}
  - : Bestimmt, ob das Caret blinkt.

- {{cssxref("caret-shape")}}
  - : Legt die visuelle Form des Carets fest.

## Beschreibung

Die `caret`-Kurzform ermöglicht es Ihnen, mehrere Caret-Eigenschaften in einer einzigen Deklaration festzulegen, was es bequem macht, das vollständige Erscheinungsbild und Verhalten des Einfüge-Carets anzupassen.

### Wertauflösung

Wenn Werte in der Kurzform weggelassen werden, werden sie auf ihre Initialwerte zurückgesetzt:

- `caret-color`: `auto` (löst sich in `currentColor` auf).
- `caret-animation`: `auto` (Caret blinkt).
- `caret-shape`: `auto` (vom Browser bestimmte Form).

### Unabhängigkeit der Reihenfolge

Im Gegensatz zu einigen CSS-Kurzformen akzeptiert die `caret`-Eigenschaft Werte in beliebiger Reihenfolge. Der Browser bestimmt, welcher Wert auf welche Eigenschaft angewendet wird, basierend auf dem Werttyp:

- {{cssxref("&lt;color>")}} Werte gelten für `caret-color`.
- `auto`/`manual` Schlüsselwörter gelten für `caret-animation`.
- Formschlüsselwörter (`bar`, `block`, `underscore`) gelten für `caret-shape`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Caret

Dieses Beispiel erstellt eine Vintage-Terminalschnittstelle unter Verwendung der `caret`-Kurzform zur Kombination mehrerer Caret-Eigenschaften und zeigt, wie sie ältere, auf Rahmen basierende Techniken ersetzt.

Der Hauptvorteil der `caret`-Kurzform besteht darin, mehrere Eigenschaften in einer Deklaration zu kombinieren. Hier setzen wir die Form auf `block`, deaktivieren das standardmäßige Blinken und setzen die Farbe auf `green`, alles in einer Zeile.

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
- [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) module
