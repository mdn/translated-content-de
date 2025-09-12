---
title: caret-shape
slug: Web/CSS/caret-shape
l10n:
  sourceCommit: 625d139412c475dd5744bd5516f218e9d97e73ea
---

{{SeeCompatTable}}

Die **`caret-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form des **Eingabemarkers** fest, des sichtbaren Markers, der in bearbeitbaren Elementen erscheint, um anzuzeigen, wo das nächste Zeichen eingefügt oder gelöscht wird.

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
  - : Der Standardwert. Der Browser bestimmt die Form des Eingabemarkers. Dies folgt typischerweise den Plattformkonventionen und kann sich je nach Kontext ändern.

- `bar`
  - : Der Eingabemarker erscheint als dünne vertikale Linie an der Einfügestelle, zwischen den Zeichen positioniert, anstatt über ihnen.

- `block`
  - : Der Eingabemarker erscheint als Rechteck, das das nächste Zeichen nach der Einfügestelle überlappt. Wenn kein Zeichen folgt, erscheint er nach dem letzten Zeichen.

- `underscore`
  - : Der Eingabemarker erscheint als dünne horizontale Linie unter dem nächsten Zeichen nach der Einfügestelle. Wenn kein Zeichen folgt, erscheint er nach dem letzten Zeichen.

## Beschreibung

Der Eingabemarker ist der blinkende Cursor, der anzeigt, wo Text eingefügt wird, wenn Sie tippen. Unterschiedliche Formen des Eingabemarkers können visuelles Feedback über den aktuellen Bearbeitungsmodus geben oder visuelle Anpassungen bieten.

### Bearbeitungsmodi und Eingabemarkerformen

Texteditoren arbeiten typischerweise in einem von zwei Modi:

- **Einfügemodus**: Neue Zeichen werden an der Position des Eingabemarkers eingefügt, wodurch vorhandener Text ans Ende der Zeile verschoben wird. Dies ist das Standardverhalten in den meisten modernen Anwendungen.
- **Überschreibmodus** (auch "Overtype-Modus" genannt): Neue Zeichen ersetzen vorhandene Zeichen an der Position des Eingabemarkers, anstatt zwischen ihnen eingefügt zu werden. Dieser Modus wird oft mit der <kbd>Einfügen</kbd>-Taste umgeschaltet.

Unterschiedliche Formen des Eingabemarkers haben traditionelle Verwendungen, zum Beispiel:

- **Leisten-Eingabemarker** sind zwischen den Zeichen positioniert und in modernen Schnittstellen am häufigsten.
- **Block-Eingabemarker** überlagern das nächste Zeichen und werden häufig in Terminalanwendungen oder zur Anzeige des Überschreibmodus verwendet.
- **Unterstrich-Eingabemarker** erscheinen unter den Zeichen und können für bestimmte Designästhetiken nützlich sein, z. B. um Schreibmaschinen- oder Unterstrich-Textinput-Stile zu imitieren.

### Positionierung und Verhalten des Eingabemarkers

Die `caret-shape` Eigenschaft beeinflusst, wie der Eingabemarker visuell dargestellt wird, ändert jedoch nicht seine logische Position im Text. Der Eingabemarker repräsentiert immer die Einfügestelle zwischen Zeichen, unabhängig von seiner visuellen Form.

### Interaktion mit Schreibmodi

Die Form des Eingabemarkers passt sich dem {{cssxref("writing-mode")}} des Textes an. In vertikalen Schreibmodi werden Leisten-Eingabemarker horizontal, und Unterstrich-Eingabemarker positionieren sich entsprechend der Leserichtung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Eingabemarker

Dieses Beispiel zeigt, wie man eine retroartige Terminaloberfläche mit `caret-shape: block` und animierter Eingabemarkerfarbe erstellt und so die alte Technik der Verwendung von Rahmen ersetzt.

Der Schlüssel dabei ist die Verwendung der modernen Eingabemarker-Eigenschaften anstelle der alten, rahmenbasierten Technik. Wir setzen die Form des Eingabemarkers auf Block, deaktivieren das standardmäßige Blinken und erstellen unsere eigene benutzerdefinierte Animation.

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
  from,
  50% {
    caret-color: #00ad00;
  }
  75%,
  to {
    caret-color: transparent;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Retro_terminal_with_animated_caret', 550, 215)}}

### Konsolenschnittstelle mit Unterstrich-Eingabemarker

Dieses Beispiel zeigt die Verwendung von `caret-shape: underscore`, um eine Konsolenschnittstelle zu erstellen, bei der der Unterstrich-Eingabemarker das Terminalästhetik ergänzt.

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
- {{cssxref("caret")}} Shorthand
- [CSS Grundlegende Benutzerschnittstelle](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
