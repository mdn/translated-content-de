---
title: "`caret-shape` CSS property"
short-title: caret-shape
slug: Web/CSS/Reference/Properties/caret-shape
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

Die **`caret-shape`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form des **Einfüge-Carets** fest, das sichtbare Markierung, die in editierbaren Elementen angezeigt wird, um anzugeben, wo das nächste Zeichen eingefügt oder gelöscht wird.

Die `caret-shape`-Eigenschaft kann auch als Teil der {{cssxref("caret")}}-Kurzschrift-Eigenschaft festgelegt werden.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Der Standardwert. Der Browser bestimmt die Form des Carets. Dies folgt typischerweise den Plattformkonventionen und kann sich je nach Kontext ändern.

- `bar`
  - : Das Caret erscheint als dünne vertikale Linie an der Einfügeposition, zwischen den Zeichen anstatt darüber positioniert.

- `block`
  - : Das Caret erscheint als Rechteck, das das nächste Zeichen hinter der Einfügeposition überlappt. Wenn kein Zeichen folgt, erscheint es nach dem letzten Zeichen.

- `underscore`
  - : Das Caret erscheint als dünne horizontale Linie unter dem nächsten Zeichen hinter der Einfügeposition. Wenn kein Zeichen folgt, erscheint es nach dem letzten Zeichen.

## Beschreibung

Das Einfüge-Caret ist der blinkende Cursor, der anzeigt, wo Text beim Tippen eingefügt wird. Unterschiedliche Caret-Formen können visuelles Feedback über den aktuellen Bearbeitungsmodus geben oder visuelle Anpassungen bieten.

### Bearbeitungsmodi und Caret-Formen

Texteditoren arbeiten typischerweise in einem von zwei Modi:

- **Einfügemodus**: Neue Zeichen werden an der Caret-Position eingefügt und schieben vorhandenen Text an das Ende der Zeile. Dies ist das Standardverhalten in den meisten modernen Anwendungen.
- **Überschreibmodus** (auch "Overwrite-Modus" genannt): Neue Zeichen ersetzen vorhandene Zeichen an der Caret-Position anstatt zwischen ihnen eingefügt zu werden. Dieser Modus wird oft mit der <kbd>Einfügen</kbd>-Taste umgeschaltet.

Verschiedene Caret-Formen haben traditionelle Verwendungen, beispielsweise:

- **Balken-Carets** sind zwischen Zeichen positioniert und sind am häufigsten in modernen Schnittstellen.
- **Block-Carets** überlagern das nächste Zeichen und werden oft in Terminal-Anwendungen oder zur Anzeige des Überschreibmodus verwendet.
- **Unterstrich-Carets** erscheinen unterhalb der Zeichen und können nützlich für bestimmte Designästhetiken sein, wie das Nachahmen von Schreibmaschinen- oder unterstrichenen Texteingabestilen.

### Caret-Positionierung und Verhalten

Die `caret-shape`-Eigenschaft beeinflusst, wie das Caret visuell dargestellt wird, ändert jedoch nicht seine logische Position im Text. Das Caret stellt immer den Einfügepunkt zwischen den Zeichen dar, unabhängig von seiner visuellen Form.

### Interaktion mit Schreibmodi

Die Caret-Form passt sich an den {{cssxref("writing-mode")}} des Textes an. In vertikalen Schreibmodi werden Balken-Carets horizontal, und Unterstrich-Carets positionieren sich entsprechend relativ zur Textrichtung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Retro-Terminal mit animiertem Caret

Dieses Beispiel zeigt, wie man eine Vintage-Terminaloberfläche mit `caret-shape: block` und animierter Caret-Farbe erstellt und die alte Technik der Verwendung von Rahmen ersetzt.

Der Schlüsselteil ist die Verwendung der modernen Caret-Eigenschaften anstelle der alten rahmenbasierten Technik. Wir setzen das Caret auf Block-Form, deaktivieren das standardmäßige Blinken und erstellen unsere eigene benutzerdefinierte Animation.

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

### Konsolenschnittstelle mit Unterstrich-Caret

Dieses Beispiel demonstriert die Verwendung von `caret-shape: underscore`, um eine Konsolen-ähnliche Schnittstelle zu erstellen, bei der das Unterstrich-Caret das Terminal-Ästhetik ergänzt.

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
- {{cssxref("caret")}} Kurzschrift
- [CSS allgemeines Benutzerschnittstelle](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul
