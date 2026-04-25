---
title: "`caret` CSS-Eigenschaft"
short-title: caret
slug: Web/CSS/Reference/Properties/caret
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`caret`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Erscheinungsbild und das Verhalten des **Einfüge-Cursors** in einer einzelnen Deklaration fest.

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

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

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

Die `caret`-Eigenschaft wird als einer, zwei oder drei Werte aus den Bestandeigenschaften angegeben. Die Werte können in beliebiger Reihenfolge angegeben werden und ausgelassene Werte werden auf ihre Initialwerte gesetzt.

### Werte

- {{cssxref("caret-color")}}
  - : Legt die Farbe des Cursors fest.

- {{cssxref("caret-animation")}}
  - : Bestimmt, ob der Cursor blinkt.

- {{cssxref("caret-shape")}}
  - : Legt die visuelle Form des Cursors fest.

## Beschreibung

Die `caret`-Shorthand ermöglicht es Ihnen, mehrere Cursoreigenschaften in einer einzigen Deklaration festzulegen, was es bequem macht, das vollständige Erscheinungsbild und Verhalten des Einfüge-Cursors anzupassen.

### Wertauflösung

Wenn Werte in der Shorthand weggelassen werden, setzen sie sich auf ihre Initialwerte zurück:

- `caret-color`: `auto` (löst sich in `currentColor` auf).
- `caret-animation`: `auto` (Cursor blinkt).
- `caret-shape`: `auto` (vom Browser bestimmte Form).

### Unabhängigkeit der Reihenfolge

Im Gegensatz zu einigen CSS-Shorthands akzeptiert die `caret`-Eigenschaft Werte in beliebiger Reihenfolge. Der Browser bestimmt, welcher Wert auf welche Eigenschaft angewendet wird, basierend auf dem Wertetyp:

- {{cssxref("&lt;color>")}}-Werte gelten für `caret-color`.
- Schlüsselwörter `auto`/`manual` gelten für `caret-animation`.
- Form-Schlüsselwörter (`bar`, `block`, `underscore`) gelten für `caret-shape`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Cursor

Dieses Beispiel erstellt eine Vintage-Terminaloberfläche mithilfe der `caret`-Shorthand, um mehrere Cursoreigenschaften zu kombinieren und zu zeigen, wie sie ältere auf Rahmeneffekten basierende Techniken ersetzt.

Der Hauptvorteil der `caret`-Shorthand besteht darin, mehrere Eigenschaften in einer Deklaration zu kombinieren. Hier setzen wir die Form auf `block`, deaktivieren das standardmäßige Blinken und setzen die Farbe auf `grün`, alles in einer Zeile.

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
- [CSS-Grundlegende Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
