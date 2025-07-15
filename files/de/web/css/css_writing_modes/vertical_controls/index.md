---
title: Erstellen von vertikalen Formsteuerelementen
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der Leitfaden erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden, um vertikale Formsteuerelemente zu erstellen und zu konfigurieren. Dazu gehören:

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Eingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Allgemeine Technik

In modernen Browsern kann die {{cssxref("writing-mode")}}-Eigenschaft auf einen vertikalen Wert gesetzt werden, um Formsteuerelemente mit Textzeichen, die normalerweise horizontal sind (z. B. in lateinischen Sprachen), vertikal anzuzeigen, wobei der Text in einem 90-Grad-Winkel zur Standardausrichtung angezeigt wird. Normalerweise vertikale Textzeichen, z. B. in Chinesisch oder Japanisch, bleiben davon unberührt.

Dies ist nützlich beim Erstellen von Formularen für vertikale Schriften.

Konkret:

- `writing-mode: vertical-lr` erzeugt vertikale Formsteuerelemente mit einem Blockfluss von links nach rechts, was bedeutet, dass in Steuerelementen mit Zeilenumbruch oder mehreren Textzeilen die nachfolgenden Zeilen rechts der vorherigen erscheinen.
- `writing-mode: vertical-rl` erzeugt vertikale Formsteuerelemente mit einem Blockfluss von rechts nach links, was bedeutet, dass die nachfolgenden Zeilen links der vorherigen erscheinen.

Man könnte ein [transform](/de/docs/Web/CSS/transform) verwenden, um die Steuerelemente um 90 Grad zu drehen, aber das würde die Steuerelemente in ihrer eigenen Ebene platzieren und unbeabsichtigte Layout-Nebenwirkungen wie das Überlappen anderer Inhalte verursachen. Die Verwendung von `writing-mode` bietet eine verlässlichere Lösung.

> [!NOTE]
> Obwohl die {{cssxref("writing-mode")}}-Eigenschaft gut unterstützt wird, wurde die vollständige Browser-Unterstützung für die Erstellung vertikal orientierter Formsteuerelemente mit `writing-mode` erst 2024 erreicht.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` und `vertical-rl`, mit der Ausnahme, dass normalerweise vertikale Textzeichen (z. B. in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um auf der Seite angezeigt zu werden, während horizontale Textzeichen (z. B. in lateinischen Sprachen) von diesen Werten nicht betroffen sind.

Zusätzlich kann die {{cssxref("direction")}}-Eigenschaft verwendet werden, um die Richtung des Inhalts innerhalb der Steuerelemente zu steuern:

- `direction: ltr` bewirkt, dass der Inhalt oben beginnt und nach unten fließt.
- `direction: rtl` bewirkt, dass der Inhalt unten beginnt und nach oben fließt.

Die `direction`-Eigenschaft kann verwendet werden, um die **Inline-Basisrichtung** festzulegen — die primäre Richtung, in der der Inhalt in einer Zeile angeordnet wird, die definiert, auf welchen Seiten sich der "Anfang" und das "Ende" einer Zeile befinden. Bei textbasierten Formsteuerelementen ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. Bei nicht-textbasierten Steuerelementen wie Schiebereglern legt `direction` die Richtung fest, in der das Steuerelement gezeichnet wird. Zum Beispiel setzt `direction: ltr` auf einem vertikalen Schieberegler den niedrigsten Wert an die obere Position des Schiebereglers und den höchsten an die untere Position.

Die folgenden Abschnitte zeigen, wie man verschiedene Arten von vertikalen Formsteuerelementen erstellt, zusammen mit Beispielen für jedes. Konsultieren Sie die Informationen zur Browser-Kompatibilität auf jeder der verlinkten Referenzseiten, um die genaue Unterstützungsinformation für jeden Typ zu erfahren.

## Schieberegler, Meter und Fortschrittsbalken

Schauen wir uns das Erstellen von vertikalen Schiebereglern, Metern und Fortschrittsbalken an.

### Einfaches Beispiel

Ein typisches Set von visuellen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schiebereglern, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Steuerelementen wird wie folgt erstellt:

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
> Es gehört zur besten Praxis, für jedes Formsteuerelement ein {{htmlelement("label")}}-Element einzuschließen, um jedem Feld aus Gründen der Barrierefreiheit eine sinnvolle Textbeschreibung zuzuordnen (siehe [Verwenden Sie sinnvolle Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben es hier nicht getan, da sich dieser Artikel rein auf Aspekte des visuellen Renderings von Formsteuerelementen konzentriert, aber Sie sollten dies in Produktivcode sicherstellen.

Um die Steuerelemente vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) bewirken, dass die Steuerelemente in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Zeichnen des Steuerelements von unten nach oben

Standardmäßig haben die Steuerelemente einen {{cssxref("direction")}}-Wert von `ltr`. Dadurch werden Ihre Schieberegler, Meter und Fortschrittsbalken von oben nach unten gezeichnet, wie oben gezeigt.

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

### Erstellen von vertikalen Schiebereglern in älteren Browsern

In älteren Browsern, die die Erstellung von vertikalen Formsteuerelementen mit `writing-mode` und `direction` nicht unterstützen, gibt es nur begrenzte Alternativen. Die folgenden funktionieren nur bei `<input type="range">` und lassen den Text von unten nach oben fließen — sie haben keine Wirkung auf `<meter>`- und `<progress>`-Elemente:

- Die nicht-standardisierte Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht-standardisierte Attribut `orient="vertical"` kann im `<input type="range">`-Element selbst in älteren Versionen von Firefox verwendet werden.

Das HTML für dieses Beispiel beinhaltet nur einen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler mit `orient="vertical"`, um ihn in älteren Firefox-Versionen vertikal anzuzeigen:

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" orient="vertical" />
</form>
```

Um die Steuerelemente auch in älteren Versionen von Chrome und Safari vertikal anzuzeigen, können wir `appearance: slider-vertical` verwenden:

```css
input[type="range"] {
  margin-block-end: 20px;
  appearance: slider-vertical;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## Select-Elemente

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("select")}}-Elemente behandelt werden.

### Einfaches Select-Beispiel

Das folgende HTML erstellt zwei `<select>`-Elemente, eines, bei dem eine einzelne Auswahl getroffen werden kann, und eines mit mehreren Auswahlen:

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

Um die Steuerelemente vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Einstellen der Textrichtung und Optionsreihenfolge

Es ist wieder möglich, einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` zu verwenden, um die Textrichtung von unten nach oben zu ändern, anstatt der Standardrichtung von oben nach unten.

Es ist auch erwähnenswert, dass in dem obigen Beispiel die Inline-Richtung für die Auswahloptionen von rechts nach links geht, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, erscheint der `<option>`-Text von links nach rechts.

Wir werden diese beiden Anwendungsfälle mittels dreier Listenfelder (`multiple`) `<select>`-Elemente erforschen, um es einfach zu machen, die Effekte nebeneinander zu vergleichen.

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

Im CSS dieses Beispiels setzen wir die folgenden Eigenschaften auf die drei Listenfelder:

1. `writing-mode: vertical-rl`, das genauso angezeigt wird wie im vorherigen Beispiel — der Text fließt von oben nach unten, und die Optionen werden von rechts nach links angezeigt.
2. `writing-mode: vertical-rl` und `direction: rtl`, wobei die Optionen von rechts nach links gehen, aber der Textfluss von unten nach oben umgekehrt wird.
3. `writing-mode: vertical-lr`, wobei der Text von oben nach unten geht, während die Optionsreihenfolge von links nach rechts umgekehrt wird.

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

## Schaltflächen

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("button")}}-Elemente behandelt werden. Beachten Sie, dass wir in den folgenden Beispielen nur ein `<button>`-Element verwendet haben. Das Verhalten ist dasselbe für andere Elemente, die Schaltflächen erstellen, wie [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen von [`button`](/de/docs/Web/HTML/Reference/Elements/input/button), [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Einfaches Schaltflächenbeispiel

Das folgende HTML erstellt zwei `<button>`-Elemente, eines mit einer einzigen Textzeile und eines mit drei:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

Um die Schaltflächen vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Einstellung der Textzeilenreihenfolge auf der Schaltfläche

Wenn Sie den `writing-mode`-Wert von `vertical-rl` auf `vertical-lr` ändern, erscheinen nachfolgende Textzeilen rechts von den vorherigen statt links.

Dieses Beispiel verwendet zwei Kopien der Schaltfläche mit drei Textzeilen, die wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte des Schreibmoduswechsels leicht sehen können:

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

Im CSS setzen wir `writing-mode: vertical-rl` auf die erste Schaltfläche, um die Zeilenreihenfolge von rechts nach links anzuordnen. Bei der zweiten Schaltfläche setzen wir `writing-mode: vertical-lr`, um die Zeilenreihenfolge umzukehren — von links nach rechts:

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

## Textbasierte Formsteuerelemente

Zuletzt betrachten wir die Handhabung von vertikalen {{htmlelement("textarea")}}s und textbasierter `<input>`-Typen. Beachten Sie, dass der einzige `<input>`-Typ, den wir einfügen, ein `<input type="text">`-Element in den folgenden Beispielen ist. Das Verhalten ist dasselbe für andere textbasierte [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen: [`password`](/de/docs/Web/HTML/Reference/Elements/input/button), [`number`](/de/docs/Web/HTML/Reference/Elements/input/reset), [`url`](/de/docs/Web/HTML/Reference/Elements/input/submit) usw.

### Einfaches Beispiel für Texteingabe und Textbereich

Das folgende HTML erstellt ein `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

Um die Eingabe und den Textbereich vertikal anzuzeigen, können wir CSS wie folgt verwenden:

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

### Einstellen der Textrichtung und Zeilenlayoutreihenfolge

Sie können einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` verwenden, um die Textrichtung vom Standard von oben nach unten auf unten nach oben zu ändern. Sie können auch `writing-mode` auf `vertical-lr` anstatt `vertical-rl` setzen, um zu bewirken, dass mehrere Textzeilen in `<textarea>`-Elementen von links nach rechts statt von rechts nach links erscheinen.

Dieses Beispiel verwendet drei Kopien desselben Textsteuerelements, das wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte der Änderung von `direction` und `writing-mode`, wie oben diskutiert, leicht sehen können:

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

Im CSS setzen wir die folgenden Eigenschaften auf die drei Satz von Textsteuerelementen:

1. `writing-mode: vertical-rl`, um es genauso wie im vorherigen Beispiel anzuzeigen — der Text fließt von oben nach unten, und die Zeilen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links fließen zu lassen, aber den Textfluss von unten nach oben umzukehren.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten fließen zu lassen, aber den Fluss der Zeilen — von links nach rechts — umzukehren. Beachten Sie, dass dies keine Wirkung auf `<input type="text">`-Elemente hat, da diese immer einzeilig sind.

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

- Das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element.
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}} und {{htmlelement("select")}}.
- [Lernen: Umgehen mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
