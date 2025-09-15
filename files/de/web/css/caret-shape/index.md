---
title: caret-shape
slug: Web/CSS/caret-shape
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

{{SeeCompatTable}}

Die **`caret-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form des **Einfüge-Caret** fest, der sichtbare Marker, der in editierbaren Elementen erscheint, um anzuzeigen, wo das nächste Zeichen eingefügt oder gelöscht wird.

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
  - : Der Standardwert. Der Browser bestimmt die Form des Carets. Dies folgt typischerweise Plattformkonventionen und kann sich je nach Kontext ändern.

- `bar`
  - : Das Caret erscheint als dünne vertikale Linie am Einfügepunkt, positioniert zwischen den Zeichen anstatt über ihnen.

- `block`
  - : Das Caret erscheint als Rechteck, das das nächste Zeichen nach dem Einfügepunkt überlappt. Wenn kein Zeichen folgt, erscheint es nach dem letzten Zeichen.

- `underscore`
  - : Das Caret erscheint als dünne horizontale Linie unter dem nächsten Zeichen nach dem Einfügepunkt. Wenn kein Zeichen folgt, erscheint es nach dem letzten Zeichen.

## Beschreibung

Das Einfüge-Caret ist der blinkende Cursor, der anzeigt, wo Text eingefügt wird, wenn Sie tippen. Unterschiedliche Caret-Formen können visuelles Feedback über den aktuellen Bearbeitungsmodus geben oder visuelle Anpassungen bieten.

### Bearbeitungsmodi und Caret-Formen

Texteditoren arbeiten typischerweise in einem von zwei Modi:

- **Einfügemodus**: Neue Zeichen werden an der Caret-Position eingefügt und bestehender Text wird zum Zeilenende verschoben. Dies ist das Standardverhalten in den meisten modernen Anwendungen.
- **Überschreibmodus** (auch "Overwrite-Modus" genannt): Neue Zeichen ersetzen bestehende Zeichen an der Caret-Position, anstatt zwischen ihnen eingefügt zu werden. Dieser Modus wird oft mit der <kbd>Insert</kbd>-Taste umgeschaltet.

Unterschiedliche Caret-Formen haben traditionelle Verwendungszwecke, zum Beispiel:

- **Strichcarets** sind zwischen den Zeichen positioniert und in modernen Oberflächen am häufigsten.
- **Blockcarets** überlagern das nächste Zeichen und werden häufig in Terminalanwendungen oder zur Anzeige des Überschreibmodus verwendet.
- **Unterstrichcarets** erscheinen unter den Zeichen und können nützlich für bestimmte Designästhetiken sein, wie das Nachahmen von Schreibmaschinen- oder Unterstrich-Textstileingaben.

### Caret-Positionierung und Verhalten

Die `caret-shape` Eigenschaft beeinflusst, wie das Caret visuell dargestellt wird, ändert jedoch nicht seine logische Position im Text. Das Caret repräsentiert immer den Einfügepunkt zwischen Zeichen, unabhängig von seiner visuellen Form.

### Interaktion mit Schreibrichtungen

Die Caret-Form passt sich dem {{cssxref("writing-mode")}} des Textes an. In vertikalen Schreibrichtungen werden Strichcarets horizontal, und Unterstrichcarets positionieren sich entsprechend der Textausrichtung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Caret

Dieses Beispiel zeigt, wie man eine Vintage-Terminaloberfläche mit `caret-shape: block` und animierter Caretfarbe erstellt, als Ersatz für die alte Technik, die Bereiche verwendete.

Der Schlüssel dabei ist die Verwendung der modernen Caret-Eigenschaften anstelle der alten technikgestützten Methode. Wir setzen das Caret auf Blockform, deaktivieren das Standardblinken und erstellen unsere eigene benutzerdefinierte Animation.

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

### Konsolenoberfläche mit Unterstrich-Caret

Dieses Beispiel demonstriert die Verwendung von `caret-shape: underscore`, um eine Konsolen-ähnliche Oberfläche zu erstellen, bei der das Unterstrich-Caret das Terminal-Aussehen ergänzt.

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
- {{cssxref("caret")}} Kurzform
- [CSS podstawy interfejsu użytkownika](/de/docs/Web/CSS/CSS_basic_user_interface) Modul
