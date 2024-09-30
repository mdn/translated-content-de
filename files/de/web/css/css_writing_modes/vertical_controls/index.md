---
title: Erstellen vertikaler Formularelemente
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Dieser Leitfaden erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden, um vertikale Formularelemente zu erstellen und zu konfigurieren. Dies umfasst:

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Button-Eingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Element/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url).

## Allgemeine Technik

In modernen Browsern kann die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert eingestellt werden, um Formularelemente mit Textzeichen, die normalerweise horizontal sind (zum Beispiel in lateinischen Sprachen), vertikal anzuzeigen, wobei der Text in einem 90-Grad-Winkel zur Standardeinstellung angezeigt wird. Normalerweise vertikale Textzeichen, zum Beispiel in Chinesisch oder Japanisch, sind in dieser Hinsicht nicht betroffen.

Dies ist nützlich, wenn vertikale Sprachformulare erstellt werden.

Konkret:

- `writing-mode: vertical-lr` erzeugt vertikale Formularelemente mit einer Blockflussrichtung von links nach rechts, was bedeutet, dass in Steuerelementen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen rechts der vorherigen Zeilen erscheinen.
- `writing-mode: vertical-rl` erzeugt vertikale Formularelemente mit einer Blockflussrichtung von rechts nach links, was bedeutet, dass in Steuerelementen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen links der vorherigen Zeilen erscheinen.

Man könnte ein [transform](/de/docs/Web/CSS/transform) verwenden, um die Steuerelemente um 90 Grad zu drehen, aber das würde die Steuerelemente in ihrer eigenen Schicht platzieren und zu unbeabsichtigten Layout-Nebeneffekten führen, wie zum Beispiel eine Überlappung mit anderem Inhalt. Das Verwenden von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Während die Eigenschaft {{cssxref("writing-mode")}} gut unterstützt wird, erlangte die Erstellung von vertikal ausgerichteten Formularelementen mit `writing-mode` erst 2024 volle Browserunterstützung.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Textzeichen (zum Beispiel in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um auf ihrer Seite angezeigt zu werden, während horizontale Textzeichen (zum Beispiel in Lateinischen Sprachen) von diesen Werten nicht betroffen sind.

Zusätzlich kann die Eigenschaft {{cssxref("direction")}} verwendet werden, um die Richtung des Inhalts innerhalb der Steuerelemente zu steuern:

- `direction: ltr` bewirkt, dass der Inhalt oben beginnt und sich nach unten bewegt.
- `direction: rtl` bewirkt, dass der Inhalt unten beginnt und sich nach oben bewegt.

Die Eigenschaft `direction` kann verwendet werden, um die **Inline-Basisrichtung** festzulegen — die primäre Richtung, in der der Inhalt in einer Zeile angeordnet wird, die bestimmt, auf welchen Seiten sich der „Anfang“ und das „Ende“ einer Zeile befinden. Für textbasierte Formularelemente ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. In nicht-textbasierten Steuerelementen wie Bereichsschiebereglern legt `direction` die Richtung fest, in die das Steuerelement gezeichnet wird. Wenn zum Beispiel bei einem vertikalen Schieberegler `direction: ltr` eingeschlossen ist, wird der niedrigste Wert oben am Schieberegler und der höchste Wert unten angezeigt.

Die folgenden Abschnitte zeigen, wie verschiedene Arten von vertikalen Formularelementen erstellt werden, zusammen mit Beispielen für jedes. Konsultieren Sie die Informationen zur Browser-Kompatibilität auf jeder der verlinkten Referenzseiten, um die genauen Unterstützungsinformationen für jeden Typ zu finden.

## Bereichsschieberegler, Zähler und Fortschrittsbalken

Schauen wir uns die Erstellung von vertikalen Bereichsschiebereglern, Zählern und Fortschrittsbalken an.

### Einfaches Beispiel

Ein typisches Set aus visuellen [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Schiebereglern, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Steuerelementen wird so erstellt:

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" />
  <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="20">
    at 50/100
  </meter>
  <progress id="file" max="100" value="70">70%</progress>
</form>
```

> [!NOTE]
> Es ist am besten, ein {{htmlelement("label")}}-Element für jedes Formularelement einzuschließen, um jedem Feld für Barrierefreiheitszwecke eine aussagekräftige Textbeschreibung zuzuordnen (siehe [Aussagekräftige Textbeschriftungen](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). Wir haben das hier nicht gemacht, da sich dieser Artikel rein auf die Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten darauf achten, dies im Produktionscode zu tun.

Um die Steuerelemente vertikal anzuzeigen, können wir folgendes CSS verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) bewirkt, dass die Steuerelemente in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Das Steuerelement von unten nach oben zeichnen

Standardmäßig haben die Steuerelemente einen {{cssxref("direction")}}-Wert von `ltr`. Dies bewirkt, dass Ihre Schieberegler, Zähler und Fortschrittsbalken von oben nach unten gezeichnet werden, wie oben zu sehen ist.

Sie können dies ändern, indem Sie `direction: rtl` setzen — dies bewirkt, dass sie stattdessen von unten nach oben gezeichnet werden:

```html hidden
<form>
  <input type="range" min="0" max="11" value="9" step="1" />
  <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="20">
    at 50/100
  </meter>
  <progress id="file" max="100" value="70">70%</progress>
</form>
```

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
  direction: rtl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Drawing the control from bottom to top", "100%", "170") }}

### Erstellung vertikaler Bereichsschieberegler in älteren Browsern

In älteren Browsern, die die Erstellung vertikaler Formularelemente mit `writing-mode` und `direction` nicht unterstützen, gibt es begrenzte Alternativen. Die folgenden funktionieren nur bei `<input type="range">`, wobei der Text von unten nach oben fließt — sie haben keinen Effekt auf `<meter>`- und `<progress>`-Elemente:

- Die nicht standardmäßige Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht standardmäßige Attribut `orient="vertical"` kann direkt dem `<input type="range">`-Element in älteren Firefox-Versionen hinzugefügt werden.

Das HTML für dieses Beispiel enthält nur einen [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Schieberegler, mit `orient="vertical"`, um ihn in älteren Firefox-Versionen vertikal darzustellen:

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" orient="vertical" />
</form>
```

Um die Steuerelemente auch in älteren Versionen von Chrome und Safari vertikal darzustellen, können wir `appearance: slider-vertical` verwenden:

```css
input[type="range"] {
  margin-block-end: 20px;
  appearance: slider-vertical;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## Select-Elemente

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("select")}}-Elemente gehandhabt werden.

### Einfaches Select-Beispiel

Das folgende HTML erstellt zwei `<select>`-Elemente, eines, bei dem eine einzelne Auswahl getroffen werden kann, und eines mit Mehrfachauswahl:

```html
<form>
  <select multiple>
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
    <option>Fourth</option>
    <option>Fifth</option>
  </select>
  <select>
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
    <option>Fourth</option>
    <option>Fifth</option>
  </select>
</form>
```

Um die Steuerelemente vertikal anzuzeigen, können wir dieses CSS verwenden:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Anpassung der Textrichtung und Reihenfolge der Optionen

Es ist wieder möglich, einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` zu verwenden, um die Textrichtung von unten nach oben einzustellen, anstatt der Standardrichtung von oben nach unten.

Es ist auch erwähnenswert, dass im obigen Beispiel die Inline-Richtung für die Select-Optionen von rechts nach links geht, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir `writing-mode: vertical-lr` stattdessen verwenden, wird der `<option>`-Text von links nach rechts erscheinen.

Wir werden diese beiden Anwendungsfälle anhand von drei Listbox-(`multiple`) `<select>`-Elementen erkunden, um die Effekte leicht nebeneinander vergleichen zu können.

```html
<form>
  <div>
    <h2>writing-mode: vertical-lr</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
  <div class="direction">
    <h2>direction: rtl & writing-mode: vertical-lr</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
  <div class="reverse-option-order">
    <h2>writing-mode: vertical-rl</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
</form>
```

Im CSS für dieses Beispiel setzen wir die folgenden Eigenschaften auf die drei Listboxen:

1. `writing-mode: vertical-rl`, das genau wie im vorherigen Beispiel angezeigt wird — Text fließt von oben nach unten, und Optionen werden von rechts nach links angezeigt.
2. `writing-mode: vertical-rl` und `direction: rtl`, wobei die Optionen von rechts nach links gehen, aber der Textfluss von unten nach oben umgekehrt wird.
3. `writing-mode: vertical-lr`, der Text geht von oben nach unten, während die Optionen von links nach rechts umgekehrt werden.

```css hidden
form {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.direction select {
  direction: rtl;
}

.reverse-option-order select {
  writing-mode: vertical-lr;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Adjusting text direction and option order", "100%", "200") }}

## Buttons

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("button")}}-Elemente gehandhabt werden. Beachten Sie, dass wir in den folgenden Beispielen nur ein `<button>`-Element verwendet haben, das Verhalten ist jedoch dasselbe für andere Elemente, die Tasten erstellen, wie [`<input>`](/de/docs/Web/HTML/Element/input)-Typen von [`button`](/de/docs/Web/HTML/Element/input/button), [`reset`](/de/docs/Web/HTML/Element/input/reset) und [`submit`](/de/docs/Web/HTML/Element/input/submit).

### Einfaches Button-Beispiel

Das folgende HTML erstellt zwei `<button>`-Elemente, eines mit einer einzelnen Textzeile und eines mit drei:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

Um die Schaltflächen vertikal anzuzeigen, können wir folgendes CSS verwenden:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Anpassung der Textzeilenreihenfolge bei Buttons

Wenn Sie den `writing-mode`-Wert von `vertical-rl` zu `vertical-lr` wechseln, erscheinen nachfolgende Textzeilen rechts statt links von vorherigen Zeilen.

Dieses Beispiel verwendet zwei Kopien des Dreizeilen-Button, den wir im vorherigen Beispiel gesehen haben, sodass Sie die Auswirkungen des Änderns des Schreibmodus leicht sehen können:

```html
<div>
  <h2>writing-mode: vertical-lr</h2>
  <button>Press me<br />Please?<br />Thanks</button>
</div>
<div class="reverse-line-order">
  <h2>writing-mode: vertical-rl</h2>
  <button>Press me<br />Please?<br />Thanks</button>
</div>
```

Im CSS setzen wir `writing-mode: vertical-rl` auf die erste Schaltfläche, um die Zeilenfolge von rechts nach links anzuordnen. Auf der zweiten Schaltfläche setzen wir `writing-mode: vertical-lr`, um die Zeilenfolge umzukehren — von links nach rechts:

```css hidden
body {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.reverse-line-order button {
  writing-mode: vertical-lr;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Adjusting button text line order", "100%", "160") }}

## Textbasierte Formularelemente

Zuletzt schauen wir uns das Handling von vertikalen {{htmlelement("textarea")}}s und textbasierten `<input>`-Typen an. Beachten Sie, dass, obwohl wir in den folgenden Beispielen nur ein `<input type="text">`-Element einschließen, das Verhalten für andere textbasierte [`<input>`](/de/docs/Web/HTML/Element/input)-Typen dasselbe ist: [`password`](/de/docs/Web/HTML/Element/input/button), [`number`](/de/docs/Web/HTML/Element/input/reset), [`url`](/de/docs/Web/HTML/Element/input/submit) usw.

### Einfaches Text-Eingabe- und Textarea-Beispiel

Das folgende HTML erstellt ein `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

Um die Eingabe und Textarea vertikal anzuzeigen, können wir folgendes CSS verwenden:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Basic text input and textarea example", "100%", "130") }}

### Anpassung der Textrichtung und der Zeilenlayoutreihenfolge

Sie können einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` verwenden, um die Textrichtung vom Standard oben nach unten auf unten nach oben zu ändern. Sie können auch `writing-mode` auf `vertical-lr` anstelle von `vertical-rl` setzen, um bei `<textarea>`s mehrere Textzeilen von links nach rechts anzuzeigen, anstatt des Standard von rechts nach links.

Dieses Beispiel verwendet drei Kopien der gleichen Texteingabesteuerungen, die wir im vorherigen Beispiel gesehen haben, sodass Sie die Auswirkungen des Änderns von `direction` und `writing-mode` wie oben diskutiert leicht sehen können:

```html
<form>
  <div>
    <h2>writing-mode: vertical-lr</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
  <div class="direction">
    <h2>direction: rtl & writing-mode: vertical-lr</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
  <div class="reverse-line-order">
    <h2>writing-mode: vertical-rl</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
</form>
```

Im CSS setzen wir die folgenden Eigenschaften auf die drei Sätze von Texteingabesteuerungen:

1. `writing-mode: vertical-rl`, damit es sich wie im vorherigen Beispiel anzeigt — Textfluss von oben nach unten und Zeilenfluss von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links zu fließen, aber den Textfluss von unten nach oben umzukehren.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten fließen zu lassen, aber den Fluss der Zeilen umzukehren — von links nach rechts. Beachten Sie, dass dies keine Auswirkungen auf `<input type="text">`-Elemente hat, da sie immer einzeilig sind.

```css hidden
form {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.direction textarea,
.direction input[type="text"] {
  writing-mode: vertical-rl;
  direction: rtl;
}

.reverse-line-order textarea,
.reverse-line-order input[type="text"] {
  writing-mode: vertical-lr;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Adjusting text direction and line layout order", "100%", "180") }}

## Siehe auch

- Das [`<input>`](/de/docs/Web/HTML/Element/input)-Element.
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}} und {{htmlelement("select")}}.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
