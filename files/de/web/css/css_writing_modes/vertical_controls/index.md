---
title: Erstellen von vertikalen Formularelementen
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der Leitfaden erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden, um vertikale Formularelemente zu erstellen und zu konfigurieren. Dazu gehören:

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Schaltflächen-Eingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Allgemeine Technik

In modernen Browsern kann die {{cssxref("writing-mode")}}-Eigenschaft auf einen vertikalen Wert gesetzt werden, um Formularelemente mit Textzeichen, die normalerweise horizontal sind (zum Beispiel in lateinischen Sprachen), vertikal darzustellen, wobei der Text in einem 90-Grad-Winkel von der Standardeinstellung aus angezeigt wird. Normalerweise vertikale Textzeichen, z. B. in Chinesisch oder Japanisch, werden dabei nicht beeinflusst.

Dies ist nützlich beim Erstellen von Formularen in vertikalen Sprachen.

Konkret:

- `writing-mode: vertical-lr` erstellt vertikale Formularelemente mit einer Blockflussrichtung von links nach rechts, was bedeutet, dass in Elementen mit Zeilenumbruch oder mehreren Textzeilen nachfolgende Zeilen rechts von vorherigen Zeilen erscheinen.
- `writing-mode: vertical-rl` erstellt vertikale Formularelemente mit einer Blockflussrichtung von rechts nach links, was bedeutet, dass in Elementen mit Zeilenumbruch oder mehreren Textzeilen nachfolgende Zeilen links von vorherigen Zeilen erscheinen.

Es könnte ein [transform](/de/docs/Web/CSS/Reference/Properties/transform) verwendet werden, um die Elemente um 90 Grad zu drehen, aber das würde die Elemente in ihre eigene Ebene verschieben und unbeabsichtigte Layout-Nebenwirkungen verursachen, wie z.B. das Überlappen mit anderem Inhalt. Die Verwendung von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Während die {{cssxref("writing-mode")}}-Eigenschaft gut unterstützt wird, hat die Erstellung vertikal ausgerichteter Formularelemente mit `writing-mode` erst 2024 vollständige Browser-Unterstützung erhalten.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben einen ähnlichen Effekt wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Textzeichen (z.B. in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um seitlich angezeigt zu werden, während horizontale Textzeichen (z.B. in lateinischen Sprachen) von diesen Werten nicht betroffen sind.

Darüber hinaus kann die {{cssxref("direction")}}-Eigenschaft verwendet werden, um die Richtung des Inhalts innerhalb der Steuerelemente zu steuern:

- `direction: ltr` bewirkt, dass der Inhalt oben beginnt und nach unten fließt.
- `direction: rtl` bewirkt, dass der Inhalt unten beginnt und nach oben fließt.

Die `direction`-Eigenschaft kann verwendet werden, um die **Inline-Basisrichtung** festzulegen — die primäre Richtung, in der Inhalt in einer Zeile angeordnet wird, was definiert, auf welchen Seiten sich der "Anfang" und das "Ende" einer Zeile befinden. Bei textbasierten Formularelementen ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. Bei nicht textbasierten Elementen wie Schiebereglern legt `direction` die Richtung fest, in der das Element gezeichnet wird. Zum Beispiel bewirkt `direction: ltr` auf einem vertikalen Schieberegler, dass der niedrigste Wert am oberen Ende des Reglers und der höchste Wert am unteren Ende des Reglers liegt.

Die unten stehenden Abschnitte zeigen, wie verschiedene Arten von vertikalen Formularelementen erstellt werden, zusammen mit Beispielen für jedes. Konsultieren Sie die Browser-Kompatibilitätsinformationen auf den verlinkten Referenzseiten, um die genauen Unterstützungshinweise für jeden Typ zu erfahren.

## Schieberegler, Meter und Fortschrittsbalken

Schauen wir, wie vertikale Schieberegler, Meter und Fortschrittsbalken erstellt werden.

### Einfaches Beispiel

Ein typischer Satz von visuellen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schiebereglern, {{htmlelement("progress")}}, und {{htmlelement("meter")}}-Elementen wird so erstellt:

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
> Best Practice ist, für jedes Formularelement ein {{htmlelement("label")}}-Element einzuschließen, um jedem Feld aus Gründen der Barrierefreiheit eine sinnvolle Textbeschreibung zuzuordnen (siehe [Verwendung sinnvoller Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Dies haben wir hier nicht getan, da sich dieser Artikel ausschließlich auf die visuellen Aspekte der Formularelemente konzentriert, aber Sie sollten sicherstellen, dies im produktiven Code zu tun.

Um die Elemente vertikal darzustellen, können wir solches CSS verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) bewirkt, dass die Elemente in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Ein Zeichnen des Elements von unten nach oben

Standardmäßig haben die Elemente einen {{cssxref("direction")}}-Wert von `ltr`. Dies führt dazu, dass Ihre Schieberegler, Meter und Fortschrittsbalken von oben nach unten gezeichnet werden, wie oben gezeigt.

Sie können dies ändern, indem Sie `direction: rtl` einstellen — das bewirkt, dass sie stattdessen von unten nach oben gezeichnet werden:

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Drawing the control from bottom to top", "100%", "170") }}

### Erstellen von vertikalen Schiebereglern in älteren Browsern

In älteren Browsern, die das Erstellen von vertikalen Formularelementen mit `writing-mode` und `direction` nicht unterstützen, gibt es begrenzte Alternativen. Die folgenden funktionieren nur bei `<input type="range">` und bewirken, dass der Text von unten nach oben fließt — sie haben keinen Effekt auf `<meter>`- und `<progress>`-Elemente:

- Die nicht standardisierte [`appearance: slider-vertical`](/de/docs/Web/CSS/Reference/Properties/appearance)-Eigenschaft kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht standardisierte `orient="vertical"`-Attribut kann in älteren Versionen von Firefox direkt dem `<input type="range">`-Element hinzugefügt werden.

Das HTML für dieses Beispiel enthält nur einen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler, wobei `orient="vertical"` hinzugefügt wurde, um ihn in älteren Firefox-Versionen vertikal darzustellen:

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" orient="vertical" />
</form>
```

Um die Elemente auch in älteren Versionen von Chrome und Safari vertikal darzustellen, können wir `appearance: slider-vertical` verwenden:

```css
input[type="range"] {
  margin-block-end: 20px;
  appearance: slider-vertical;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## `Select`-Elemente

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("select")}}-Elemente gehandhabt werden.

### Einfaches `Select`-Beispiel

Das folgende HTML erstellt zwei `<select>`-Elemente, eines, bei dem eine einzelne Auswahl getroffen werden kann und eines mit Mehrfachauswahl:

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

Um die Elemente vertikal darzustellen, können wir solches CSS verwenden:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Anpassen von Text-Richtung und Options-Reihenfolge

Es ist auch möglich, einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` zu verwenden, um die Textrichtung von unten nach oben einzustellen, anstatt in der Standardrichtung von oben nach unten.

In dem obigen Beispiel geht die Inline-Richtung der `select`-Optionen von rechts nach links, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, erscheint der `<option>`-Text von links nach rechts.

Wir werden diese beiden Anwendungsfälle mit drei Listbox (`multiple`) `<select>`-Elementen untersuchen, um die Auswirkungen leicht nebeneinander vergleichen zu können.

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

1. `writing-mode: vertical-rl`, das genau wie im vorherigen Beispiel angezeigt wird — Textfluss von oben nach unten und Optionen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, wobei die Optionen von rechts nach links verlaufen, aber der Textfluss von unten nach oben umgekehrt wird.
3. `writing-mode: vertical-lr`, mit dem Text, der von oben nach unten läuft, während die Optionsreihenfolge von links nach rechts umgekehrt wird.

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Adjusting text direction and option order", "100%", "200") }}

## Tasten

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("button")}}-Elemente gehandhabt werden. Beachten Sie, dass zwar in den Beispielen unten nur ein `<button>`-Element verwendet wurde, das Verhalten jedoch für andere Elemente, die Schaltflächen erstellen, wie [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen von [`button`](/de/docs/Web/HTML/Reference/Elements/input/button), [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit), gleich ist.

### Einfaches Tasten-Beispiel

Das folgende HTML erstellt zwei `<button>`-Elemente, eine mit einer einzelnen Textzeile und eine mit drei:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

Um die Tasten vertikal darzustellen, können wir solches CSS verwenden:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Anpassen der Textzeilenreihenfolge der Schaltfläche

Wenn Sie den `writing-mode`-Wert von `vertical-rl` auf `vertical-lr` ändern, erscheinen nachfolgende Textzeilen rechts von vorherigen Zeilen, anstatt links.

Dieses Beispiel verwendet zwei Kopien der Drei-Textzeilen-Schaltfläche, die wir im vorherigen Beispiel gesehen haben, sodass Sie die Auswirkungen der Änderung des Schreibmodus leicht sehen können:

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

Im CSS setzen wir `writing-mode: vertical-rl` auf die erste Schaltfläche, um die Zeilenreihenfolge von rechts nach links anzuordnen. Auf der zweiten Schaltfläche setzen wir `writing-mode: vertical-lr`, um die Zeilenreihenfolge umzukehren — von links nach rechts:

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Adjusting button text line order", "100%", "160") }}

## Textbasierte Formularelemente

Zuletzt betrachten wir das Handling von vertikalen {{htmlelement("textarea")}}s und textuellen `<input>`-Typen. Beachten Sie, dass, während der einzige `<input>`-Typ, den wir einbeziehen, ein `<input type="text">`-Element in den Beispielen unten ist, das Verhalten für andere textuelle [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen gleich ist: [`password`](/de/docs/Web/HTML/Reference/Elements/input/button), [`number`](/de/docs/Web/HTML/Reference/Elements/input/reset), [`url`](/de/docs/Web/HTML/Reference/Elements/input/submit), etc.

### Einfaches Text-Eingabe- und Textarea-Beispiel

Das folgende HTML erstellt ein `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

Um die Eingabe und das Textfeld vertikal darzustellen, können wir solches CSS verwenden:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Basic text input and textarea example", "100%", "130") }}

### Anpassen der Textrichtung und Zeilenlayout-Reihenfolge

Sie können einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` verwenden, um die Textrichtung von der Standardrichtung von oben nach unten auf von unten nach oben zu ändern. Sie können auch `writing-mode` auf `vertical-lr` anstelle von `vertical-rl` einstellen, um mehrere Textzeilen in `<textarea>`s von links nach rechts statt von rechts nach links anzeigen zu lassen.

Dieses Beispiel verwendet drei Kopien der gleichen Textelemente, die wir im vorherigen Beispiel gesehen haben, sodass Sie die Auswirkungen der Änderung von `direction` und `writing-mode` wie oben diskutiert leicht sehen können:

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

Im CSS setzen wir die folgenden Eigenschaften auf die drei Sets von Textelementen:

1. `writing-mode: vertical-rl`, um es genau wie im vorherigen Beispiel anzuzeigen — Textfluss von oben nach unten und Zeilen gehen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links zu leiten, aber den Textfluss von unten nach oben umzukehren.
3. `writing-mode: vertical-lr`, um den Textfluss von oben nach unten zu führen, aber den Fluss der Zeilen umzukehren — von links nach rechts. Beachten Sie, dass dies keine Auswirkung auf `<input type="text">`-Elemente hat, da diese immer einzeilig sind.

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Adjusting text direction and line layout order", "100%", "180") }}

## Siehe auch

- Das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element.
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}} und {{htmlelement("select")}}.
- [Lernen: Umgang mit verschiedenen Text-Richtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Stilisierung von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
