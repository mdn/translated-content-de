---
title: caret-shape
slug: Web/CSS/caret-shape
l10n:
  sourceCommit: 49f90b9c810e5167fecf6ad652afb03075072db7
---

{{SeeCompatTable}}

Die **`caret-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form des **Einfüge-Carets** fest, des sichtbaren Markers, der in editierbaren Elementen erscheint, um anzugeben, wo das nächste Zeichen eingefügt oder gelöscht wird.

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
  - : Der Standardwert. Der Browser bestimmt die Form des Carets. Dies folgt typischerweise den Plattformkonventionen und kann je nach Kontext variieren.

- `bar`
  - : Das Caret erscheint als dünne vertikale Linie am Einfügepunkt, zwischen den Zeichen positioniert anstatt über ihnen.

- `block`
  - : Das Caret erscheint als Rechteck, das das nächste Zeichen nach dem Einfügepunkt überlappt. Wenn kein Zeichen folgt, erscheint es nach dem letzten Zeichen.

- `underscore`
  - : Das Caret erscheint als dünne horizontale Linie unter dem nächsten Zeichen nach dem Einfügepunkt. Wenn kein Zeichen folgt, erscheint es nach dem letzten Zeichen.

## Beschreibung

Das Einfüge-Caret ist der blinkende Cursor, der anzeigt, wo Text eingefügt wird, wenn getippt wird. Unterschiedliche Caret-Formen können visuelles Feedback über den aktuellen Editiermodus geben oder visuelle Anpassungen bieten.

### Bearbeitungsmodi und Caret-Formen

Texteditoren arbeiten typischerweise in einem von zwei Modi:

- **Einfügemodus**: Neue Zeichen werden an der Caret-Position eingefügt und schieben den vorhandenen Text bis zum Zeilenende. Dies ist das Standardverhalten in den meisten modernen Anwendungen.
- **Überschreibe-Modus** (auch „Überschreibmodus“ genannt): Neue Zeichen ersetzen vorhandene Zeichen an der Caret-Position anstatt zwischen ihnen eingefügt zu werden. Dieser Modus wird oft mit der <kbd>Einfügen</kbd>-Taste umgeschaltet.

Verschiedene Caret-Formen haben traditionelle Verwendungen, zum Beispiel:

- **Bar-Carets** sind zwischen Zeichen positioniert und in modernen Schnittstellen am häufigsten.
- **Block-Carets** überlagern das nächste Zeichen und werden oft in Terminal-Anwendungen oder zur Anzeige des Überschreibmodus verwendet.
- **Unterstrich-Carets** erscheinen unter den Zeichen und können nützlich für bestimmte Ästhetiken sein, wie das Nachahmen von Schreibmaschinen oder unterstrichenen Texteingabestilen.

### Caret-Positionierung und Verhalten

Die `caret-shape` Eigenschaft beeinflusst, wie das Caret visuell dargestellt wird, ändert jedoch nicht seine logische Position im Text. Das Caret repräsentiert immer den Einfügepunkt zwischen Zeichen, unabhängig von seiner visuellen Form.

### Interaktion mit Schreibmodi

Die Form des Carets passt sich dem {{cssxref("writing-mode")}} des Textes an. In vertikalen Schreibmodi werden Bar-Carets horizontal und Unterstrich-Carets positionieren sich entsprechend der Textausrichtung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Caret

Dieses Beispiel zeigt, wie man eine Vintage-Terminal-Oberfläche unter Verwendung von `caret-shape: block` mit animierter Caret-Farbe erstellt und damit die alte Technik der Verwendung von Rändern ersetzt.

Der entscheidende Teil ist die Verwendung der modernen Caret-Eigenschaften anstelle der alten technik basierend auf Rändern. Wir setzen das Caret auf Blockform, deaktivieren das standardmäßige Blinken und erstellen unsere eigene benutzerdefinierte Animation.

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
  caret-shape: block;
  caret-animation: manual;
  animation: old-caret 2s infinite;
}

@keyframes old-caret {
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

### Konsolenschnittstelle mit Unterstrich-Caret

Dieses Beispiel demonstriert die Verwendung von `caret-shape: underscore`, um eine Konsolenstil-Oberfläche zu erstellen, bei der das Unterstrich-Caret das Terminal-Ästhetik ergänzt.

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
- {{cssxref("caret")}} shorthand
- [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
