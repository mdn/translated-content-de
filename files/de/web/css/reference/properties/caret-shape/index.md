---
title: "`caret-shape` CSS property"
short-title: caret-shape
slug: Web/CSS/Reference/Properties/caret-shape
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`caret-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form des **Eingabecursors** fest, des sichtbaren Markers, der in editierbaren Elementen erscheint, um anzuzeigen, wo das nächste Zeichen eingefügt oder gelöscht wird.

{{InteractiveExample("CSS Demo: caret-shape")}}

```css interactive-example-choice
caret-shape: auto;
```

```css interactive-example-choice
caret-shape: bar;
```

```css interactive-example-choice
caret-shape: block;
```

```css interactive-example-choice
caret-shape: underscore;
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

## Syntax

```css
/* Keyword values */
caret-shape: auto;
caret-shape: bar;
caret-shape: block;
caret-shape: underscore;

/* Global values */
caret-shape: inherit;
caret-shape: initial;
caret-shape: revert;
caret-shape: revert-layer;
caret-shape: unset;
```

### Werte

- `auto`
  - : Der Standardwert. Der Browser bestimmt die Form des Cursors. Dies folgt typischerweise den Plattformkonventionen und kann sich je nach Kontext ändern.

- `bar`
  - : Der Cursor erscheint als dünne vertikale Linie an der Einfügestelle, zwischen den Zeichen positioniert anstatt über ihnen.

- `block`
  - : Der Cursor erscheint als Rechteck, das das nächste Zeichen nach der Einfügestelle überlappt. Wenn kein Zeichen folgt, erscheint er nach dem letzten Zeichen.

- `underscore`
  - : Der Cursor erscheint als dünne horizontale Linie unter dem nächsten Zeichen nach der Einfügestelle. Wenn kein Zeichen folgt, erscheint er nach dem letzten Zeichen.

## Beschreibung

Der Eingabecursor ist der blinkende Cursor, der anzeigt, wo Text bei der Eingabe eingefügt wird. Unterschiedliche Cursorformen können visuelles Feedback über den aktuellen Bearbeitungsmodus liefern oder bieten visuelle Anpassungen.

### Bearbeitungsmodi und Cursorformen

Texteditoren arbeiten typischerweise in einem von zwei Modi:

- **Einfügemodus**: Neue Zeichen werden an der Cursorposition eingefügt, wodurch der vorhandene Text ans Ende der Zeile verschoben wird. Dies ist das Standardverhalten in den meisten modernen Anwendungen.
- **Überschreibmodus** (auch "Overwrite-Modus" genannt): Neue Zeichen ersetzen vorhandene Zeichen an der Cursorposition, anstatt zwischen ihnen eingefügt zu werden. Dieser Modus wird oft mit der <kbd>Einfg</kbd>-Taste umgeschaltet.

Verschiedene Cursorformen haben traditionelle Verwendungen, zum Beispiel:

- **Balkencursors** sind zwischen den Zeichen positioniert und sind am häufigsten in modernen Benutzeroberflächen.
- **Blockcursors** überlagern das nächste Zeichen und werden oft in Terminalanwendungen oder zur Anzeige des Überschreibmodus verwendet.
- **Unterstrichcursors** erscheinen unter den Zeichen und können für bestimmte Designästhetiken nützlich sein, wie das Nachahmen von Schreibmaschinen- oder Unterstrich-Textstileingaben.

### Cursorpositionierung und -verhalten

Die `caret-shape` Eigenschaft wirkt sich darauf aus, wie der Cursor visuell gerendert wird, ändert jedoch nicht seine logische Position im Text. Der Cursor stellt immer die Einfügestelle zwischen den Zeichen dar, unabhängig von seiner visuellen Form.

### Interaktion mit Schreibmodi

Die Cursorform passt sich dem {{cssxref("writing-mode")}} des Textes an. In vertikalen Schreibmodi werden Balkencursors horizontal, und Unterstrichcursors positionieren sich entsprechend der Textausrichtung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Cursor

Dieses Beispiel zeigt, wie man eine Vintage-Terminaloberfläche unter Verwendung von `caret-shape: block` mit animierter Cursorfarbe erstellt und dabei die alte Technik des Einsatzes von Rahmen ersetzt.

Der Kernpunkt ist die Verwendung moderner Cursoreigenschaften anstelle der alten rahmenbasierten Technik. Wir setzen den Cursor auf die Blockform, deaktivieren das standardmäßige Blinken und erstellen unsere eigene benutzerdefinierte Animation.

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
  caret-shape: block;
  caret-animation: manual;
  animation: old-caret 2s infinite;
}

@keyframes old-caret {
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

### Konsolenoberfläche mit Unterstrich-Cursor

Dieses Beispiel demonstriert die Verwendung von `caret-shape: underscore`, um eine konsolenartige Oberfläche zu erstellen, bei der der Unterstrich-Cursor das Terminal-Ästhetik ergänzt.

#### HTML

```html
<label for="console">Enter a command</label>
<div class="console-demo">
  <div class="console-output">
    <p>user@host:css-ui-4 $ ls -a</p>
    <p>. .. Overview.bs Overview.html</p>
  </div>
  <div class="console-input">
    <span class="prompt">user@host:css-ui-4 $ </span>
    <input type="text" id="console" class="console" value="cd" />
  </div>
</div>
```

#### CSS

```css hidden
label {
  background: #2a2a2c;
  color: white;
  display: block;
  padding: 10px 20px;
  font-weight: bold;
  font-family: monospace;
}

.console-demo {
  background: black;
  color: white;
  font-family: monospace;
  padding: 10px 20px;
  height: 60px;
}

.console-output {
  margin-bottom: 0.5rem;
}

.console-output p {
  margin: 0 0.25rem;
}

.console-input {
  display: flex;
  align-items: center;
}

.prompt {
  margin-right: 0;
}

.console {
  background: transparent;
  border: none;
  color: white;
  padding-left: 1ch;
  font-family: inherit;
  outline: none;
  flex: 1;
}
```

```css
.console {
  caret-shape: underscore;
}
```

#### Ergebnis

{{EmbedLiveSample('Console_interface_with_underscore_caret', 550, 115)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}, {{cssxref("caret-animation")}}
- {{cssxref("caret")}} Kurzschreibweise
- [CSS grundlegendes Benutzeroberflächen](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
