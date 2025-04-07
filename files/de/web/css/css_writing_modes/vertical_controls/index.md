---
title: Erstellung vertikaler Formularsteuerungen
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: 9da2567689c0a4397b0d70efbbb878dec3115754
---

{{CSSRef}}

Der Leitfaden erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden, um vertikale Formularsteuerungen zu erstellen und zu konfigurieren. Dazu gehören:

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Schaltflächeneingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Element/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url).

## Allgemeine Technik

In modernen Browsern kann die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert gesetzt werden, um Formularsteuerungen mit Textzeichen vertikal anzuzeigen, die normalerweise horizontal sind (zum Beispiel in lateinischen Sprachen), wobei der Text in einem 90-Grad-Winkel zur Standardausrichtung angezeigt wird. Normalerweise vertikale Textzeichen, zum Beispiel in Chinesisch oder Japanisch, bleiben diesbezüglich unverändert.

Dies ist nützlich bei der Erstellung vertikaler Sprachformulare.

Speziell:

- `writing-mode: vertical-lr` erstellt vertikale Formularsteuerungen mit einer von links nach rechts verlaufenden Blockflussrichtung, was bedeutet, dass bei Steuerungen mit Umbruch oder mehreren Textzeilen die nachfolgenden Zeilen rechts von den vorhergehenden erscheinen.
- `writing-mode: vertical-rl` erstellt vertikale Formularsteuerungen mit einer von rechts nach links verlaufenden Blockflussrichtung, was bedeutet, dass bei Steuerungen mit Umbruch oder mehreren Textzeilen die nachfolgenden Zeilen links von den vorhergehenden erscheinen.

Es wäre möglich, eine [transform](/de/docs/Web/CSS/transform) zu nutzen, um die Steuerungen um 90 Grad zu drehen, dies würde jedoch dazu führen, dass die Steuerungen in eine eigene Ebene gesetzt werden und unbeabsichtigte Layout-Nebeneffekte wie das Überlappen von anderem Inhalt verursachen. Die Verwendung von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Während die Eigenschaft {{cssxref("writing-mode")}} gut unterstützt wird, hat die Erstellung vertikal orientierter Formularsteuerungen mit `writing-mode` erst 2024 volle Browser-Unterstützung erlangt.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben einen ähnlichen Effekt wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Textzeichen (zum Beispiel in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um seitlich angezeigt zu werden, während horizontale Textzeichen (zum Beispiel in lateinischen Sprachen) von diesen Werten unberührt bleiben.

Außerdem kann die Eigenschaft {{cssxref("direction")}} verwendet werden, um die Richtung des Inhalts innerhalb der Steuerungen zu steuern:

- `direction: ltr` bewirkt, dass der Inhalt oben beginnt und nach unten fließt.
- `direction: rtl` bewirkt, dass der Inhalt unten beginnt und nach oben fließt.

Die `direction`-Eigenschaft kann verwendet werden, um die **Inline-Basisrichtung** festzulegen — die primäre Richtung, in der Inhalt in einer Zeile angeordnet ist, was definiert, auf welchen Seiten sich der "Anfang" und das "Ende" einer Zeile befinden. Bei textbasierten Formularsteuerungen ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. Bei nicht textbasierten Steuerungen wie Bereichs-Schiebereglern legt `direction` die Ziehrichtung der Steuerung fest. Zum Beispiel setzt `direction: ltr` auf einem vertikalen Schieberegler den niedrigsten Wert oben am Schieberegler und den höchsten Wert unten.

Die unten stehenden Abschnitte zeigen, wie verschiedene Arten von vertikalen Formularsteuerungen erstellt werden, zusammen mit Beispielen für jede. Konsultieren Sie die Browser-Kompatibilitätsinformationen auf jeder der verlinkten Referenzseiten, um die genauen Unterstützungsinformationen für jeden Typ zu erfahren.

## Bereichsschieberegler, Zähler und Fortschrittsbalken

Schauen wir uns an, wie vertikale Bereichsschieberegler, Zähler und Fortschrittsbalken erstellt werden.

### Grundlegendes Beispiel

Eine typische Reihe visueller Steuerungen [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente wird wie folgt erstellt:

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
> Es gehört zu den besten Praktiken, ein {{htmlelement("label")}}-Element für jede Steuerung zu verwenden, um eine sinnvolle Textbeschreibung mit jedem Feld für Barrierefreiheitszwecke zu verknüpfen (siehe [Verwenden Sie sinnvolle Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben dies hier nicht getan, da sich dieser Artikel ausschließlich auf Aspekte der visuellen Darstellung von Formularsteuerungen konzentriert, aber Sie sollten sicherstellen, dass Sie dies im Produktionscode tun.

Um die Steuerungen vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) bewirkt, dass die Steuerungen in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Grundlegendes Beispiel", "100%", "170") }}

### Zeichnen der Steuerung von unten nach oben

Standardmäßig haben die Steuerungen einen {{cssxref("direction")}}-Wert von `ltr`. Dies bewirkt, dass Ihre Schieberegler, Zähler und Fortschrittsbalken von oben nach unten gezeichnet werden, wie oben zu sehen.

Sie können dies ändern, indem Sie `direction: rtl` setzen — das bewirkt, dass sie von unten nach oben gezeichnet werden:

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

{{ EmbedLiveSample("Zeichnen der Steuerung von unten nach oben", "100%", "170") }}

### Erstellen vertikaler Bereichsschieberegler in älteren Browsern

In älteren Browsern, die die Erstellung vertikaler Formularsteuerungen mit `writing-mode` und `direction` nicht unterstützen, gibt es nur begrenzte Alternativen. Die folgenden funktionieren nur bei `<input type="range">`, bewirken, dass der Text von unten nach oben fließt — sie haben keine Wirkung auf `<meter>` und `<progress>`-Elemente:

- Die nicht standardmäßige Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht standardmäßige Attribut `orient="vertical"` kann dem `<input type="range">`-Element selbst in älteren Versionen von Firefox hinzugefügt werden.

Das HTML für dieses Beispiel enthält nur einen [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, mit `orient="vertical"` hinzugefügt, um ihn in älteren Firefox-Versionen vertikal anzuzeigen:

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" orient="vertical" />
</form>
```

Um die Steuerungen auch in älteren Versionen von Chrome und Safari vertikal anzuzeigen, können wir `appearance: slider-vertical` verwenden:

```css
input[type="range"] {
  margin-block-end: 20px;
  appearance: slider-vertical;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Erstellen vertikaler Bereichsschieberegler in älteren Browsern", "100%", "190") }}

## Auswahlelemente

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("select")}}-Elemente gehandhabt werden.

### Grundlegendes Auswahlbeispiel

Das unten stehende HTML erstellt zwei `<select>`-Elemente, eines, bei dem eine Einzelwahl getroffen werden kann, und eines mit mehreren Auswahlmöglichkeiten:

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

Um die Steuerungen vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Grundlegendes Auswahlbeispiel", "100%", "130") }}

### Anpassen der Textrichtung und Optionsreihenfolge

Erneut ist es möglich, einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` zu verwenden, um die Textrichtung von unten nach oben zu ändern, anstatt der Standardrichtung von oben nach unten.

Es ist auch zu beachten, dass im obigen Beispiel die Inline-Richtung für die Auswahloptionen von rechts nach links geht, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, erscheint der `<option>`-Text von links nach rechts.

Wir werden diese beiden Anwendungsfälle mit drei Listbox (`multiple`) `<select>`-Elementen untersuchen, um die Effekte der beiden Fälle leicht nebeneinander zu vergleichen.

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

1. `writing-mode: vertical-rl`, Anzeige wie im vorherigen Beispiel — Textfluss von oben nach unten und Optionen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, wobei die Optionen von rechts nach links laufen aber der Textfluss von unten nach oben umgekehrt wird.
3. `writing-mode: vertical-lr`, bei dem der Text von oben nach unten fließt, während die Optionseinstellung von links nach rechts umgekehrt wird.

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

{{ EmbedLiveSample("Anpassen der Textrichtung und Optionsreihenfolge", "100%", "200") }}

## Schaltflächen

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("button")}}-Elemente gehandhabt werden. Beachten Sie, dass wir in den unten stehenden Beispielen nur ein `<button>`-Element verwendet haben, aber dass das Verhalten für andere Elemente, die Schaltflächen erstellen, wie die [`<input>`](/de/docs/Web/HTML/Element/input) Typen [`button`](/de/docs/Web/HTML/Element/input/button), [`reset`](/de/docs/Web/HTML/Element/input/reset) und [`submit`](/de/docs/Web/HTML/Element/input/submit) dasselbe ist.

### Grundlegendes Schaltflächenbeispiel

Das unten stehende HTML erstellt zwei `<button>`-Elemente, eines mit einer einzeiligen Text und eines mit drei Zeilen:

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Grundlegendes Schaltflächenbeispiel", "100%", "130") }}

### Anpassen der Schaltflächentextzeilenreihenfolge

Wenn Sie den `writing-mode`-Wert von `vertical-rl` auf `vertical-lr` ändern, erscheinen nachfolgende Textzeilen rechts von vorherigen Zeilen, anstatt links.

Dieses Beispiel verwendet zwei Kopien der Drei-Zeilen-Schaltfläche, die wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte des Schreibmodus-Wechsels leicht sehen können:

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

Im CSS setzen wir `writing-mode: vertical-rl` auf die erste Schaltfläche, um die Reihenfolge der Zeilen von rechts nach links anzuordnen. Auf der zweiten Schaltfläche setzen wir `writing-mode: vertical-lr`, um die Reihenfolge der Zeilen umzukehren — von links nach rechts:

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

{{ EmbedLiveSample("Anpassen der Schaltflächentextzeilenreihenfolge", "100%", "160") }}

## Textbasierte Formularsteuerungen

Zu guter Letzt betrachten wir die Handhabung vertikaler {{htmlelement("textarea")}}s und textueller `<input>`-Typen. Beachten Sie, dass, obwohl der einzige `<input>`-Typ, den wir einbeziehen, ein `<input type="text">`-Element in den unten stehenden Beispielen ist, das Verhalten dasselbe für andere textuelle [`<input>`](/de/docs/Web/HTML/Element/input) Typen ist: [`password`](/de/docs/Web/HTML/Element/input/button), [`number`](/de/docs/Web/HTML/Element/input/reset), [`url`](/de/docs/Web/HTML/Element/input/submit) usw.

### Grundlegendes Texteingabe- und Textareabeispiel

Das unten stehende HTML erstellt ein `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

Um die Eingabe- und Textbereiche vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Grundlegendes Texteingabe- und Textareabeispiel", "100%", "130") }}

### Anpassen der Textrichtung und Zeilenanordnung

Sie können einen Wert der {{cssxref("direction")}}-Eigenschaft von `rtl` verwenden, um die Textrichtung vom Standard von oben nach unten zu unten nach oben zu ändern. Sie können auch `writing-mode` auf `vertical-lr` anstelle von `vertical-rl` einstellen, um mehrere Textzeilen in `<textarea>`s von links nach rechts und nicht wie standardmäßig von rechts nach links erscheinen zu lassen.

Dieses Beispiel verwendet drei Kopien der gleichen Textsteuerungen, die wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte der Änderung von `direction` und `writing-mode` wie oben diskutiert leicht sehen können:

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

Im CSS setzen wir die folgenden Eigenschaften auf die drei Sätze von Textsteuerungen:

1. `writing-mode: vertical-rl`, um es wie im vorherigen Beispiel anzuzeigen — Textflüsse von oben nach unten und Zeilenflüsse von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links zu fließen, aber den Textfluss von unten nach oben umzukehren.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten fließen zu lassen, aber den Fluss der Zeilen umzukehren — von links nach rechts. Beachten Sie, dass dies keinen Effekt auf `<input type="text">`-Elemente hat, da diese immer einzeilig sind.

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

{{ EmbedLiveSample("Anpassen der Textrichtung und Zeilenanordnung", "100%", "180") }}

## Siehe auch

- Das [`<input>`](/de/docs/Web/HTML/Element/input)-Element.
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}}, und {{htmlelement("select")}}.
- [Lernen: Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
