---
title: caret
slug: Web/CSS/caret
l10n:
  sourceCommit: 49f90b9c810e5167fecf6ad652afb03075072db7
---

{{SeeCompatTable}}

Die **`caret`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Erscheinungsbild und das Verhalten des **Eingabemarkers** in einer einzigen Deklaration fest.

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

Die `caret`-Eigenschaft wird als ein, zwei oder drei Werte aus den Bestandteileigenschaften angegeben. Werte können in beliebiger Reihenfolge angegeben werden, und ausgelassene Werte werden auf ihre Anfangswerte gesetzt.

### Werte

- {{cssxref("caret-color")}}
  - : Setzt die Farbe des Eingabemarkers.

- {{cssxref("caret-animation")}}
  - : Steuert, ob der Eingabemarker blinkt.

- {{cssxref("caret-shape")}}
  - : Legt die visuelle Form des Eingabemarkers fest.

## Beschreibung

Die `caret`-Kurzform ermöglicht es Ihnen, mehrere Eingabemarkereigenschaften in einer einzigen Deklaration festzulegen, was es bequem macht, das vollständige Erscheinungsbild und Verhalten des Eingabemarkers anzupassen.

### Wertauflösung

Wenn Werte in der Kurzform weggelassen werden, werden sie auf ihre Anfangswerte zurückgesetzt:

- `caret-color`: `auto` (löst sich zu `currentColor` auf).
- `caret-animation`: `auto` (Eingabemarker blinkt).
- `caret-shape`: `auto` (vom Browser bestimmte Form).

### Unabhängigkeit der Reihenfolge

Im Gegensatz zu einigen CSS-Kurzformen akzeptiert die `caret`-Eigenschaft Werte in beliebiger Reihenfolge. Der Browser bestimmt, welcher Wert für welche Eigenschaft gilt, basierend auf dem Werttyp:

- {{cssxref("&lt;color>")}}-Werte gelten für `caret-color`.
- `auto`/`manual` Schlüsselwörter gelten für `caret-animation`.
- Form-Schlüsselwörter (`bar`, `block`, `underscore`) gelten für `caret-shape`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Eingabemarker

Dieses Beispiel erstellt eine Vintage-Terminal-Oberfläche unter Verwendung der `caret`-Kurzform, um mehrere Eingabemarkereigenschaften zu kombinieren und zu demonstrieren, wie sie ältere, auf Rändern basierende Techniken ersetzt.

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
  color: green;
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
  color: green;
  font-weight: bold;
  margin-right: 8px;
}

.terminal-input {
  background: transparent;
  height: 100%;
  border: none;
  color: green;
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
  from,
  50% {
    caret-color: green;
  }
  75%,
  to {
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
- [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) Moduls
