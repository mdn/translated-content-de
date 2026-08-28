---
title: "`caret` CSS-Eigenschaft"
short-title: caret
slug: Web/CSS/Reference/Properties/caret
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

Die **`caret`** [CSS](/de/docs/Web/CSS) [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft legt das Erscheinungsbild und Verhalten des **Einfüge-Cursors** in einer einzigen Deklaration fest.

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

## Bestandteile der Eigenschaften

Diese Eigenschaft ist ein Shorthand für die folgenden CSS-Eigenschaften:

- {{cssxref("caret-color")}}
- {{cssxref("caret-animation")}}
- {{cssxref("caret-shape")}}

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

Die `caret`-Eigenschaft wird als ein, zwei oder drei Werte von den Bestandteileigenschaften spezifiziert. Werte können in beliebiger Reihenfolge angegeben werden, und ausgelassene Werte werden auf ihre Initialwerte zurückgesetzt.

### Werte

- {{cssxref("caret-color")}}
  - : Legt die Farbe des Cursors fest.

- {{cssxref("caret-animation")}}
  - : Steuert, ob der Cursor blinkt.

- {{cssxref("caret-shape")}}
  - : Legt die visuelle Form des Cursors fest.

## Beschreibung

Der `caret`-Shorthand ermöglicht es Ihnen, mehrere Cursoreigenschaften in einer einzigen Deklaration festzulegen, was es bequem macht, das vollständige Erscheinungsbild und Verhalten des Einfüge-Cursors anzupassen.

### Wertauflösung

Wenn Werte im Shorthand ausgelassen werden, werden sie auf ihre Initialwerte zurückgesetzt:

- `caret-color`: `auto` (löst sich in `currentColor` auf).
- `caret-animation`: `auto` (Cursor blinkt).
- `caret-shape`: `auto` (browserbestimmte Form).

### Unabhängigkeit der Reihenfolge

Im Gegensatz zu einigen CSS-Shorthands akzeptiert die `caret`-Eigenschaft Werte in beliebiger Reihenfolge. Der Browser bestimmt, welcher Wert auf welche Eigenschaft zutrifft, basierend auf dem Wertetyp:

- {{cssxref("&lt;color>")}}-Werte gelten für `caret-color`.
- `auto`/`manual` Schlüsselwörter gelten für `caret-animation`.
- Formschlüsselwörter (`bar`, `block`, `underscore`) gelten für `caret-shape`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Cursor

Dieses Beispiel erstellt eine Vintage-Terminalschnittstelle mit dem `caret`-Shorthand, um mehrere Cursoreigenschaften zu kombinieren, und zeigt, wie es ältere auf Rand basierende Techniken ersetzt.

Der Hauptvorteil des `caret`-Shorthands besteht darin, mehrere Eigenschaften in einer Deklaration zu kombinieren. Hier setzen wir die Form auf `block`, deaktivieren das Standardblinken und legen die Farbe auf `green` fest, alles in einer einzigen Zeile.

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
- [CSS Basic User Interface](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
