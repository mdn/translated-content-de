---
title: Vertikale Formularsteuerelemente erstellen
short-title: Vertikale Formularsteuerelemente
slug: Web/CSS/Guides/Writing_modes/Vertical_controls
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Dieser Leitfaden erklärt, wie Sie mit den CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} vertikale Formularsteuerelemente erstellen und konfigurieren. Dazu gehören:

- Schieberegler mit [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), {{htmlelement("progress")}}-Fortschrittsbalken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Button-Input-Typen wie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Input-Typen wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Grundlegende Vorgehensweise

In modernen Browsern können Sie die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert setzen, um Formularsteuerelemente mit normalerweise horizontal angeordneten Schriftzeichen (beispielsweise in lateinischen Sprachen) vertikal darzustellen. Der Text wird dabei gegenüber der Standardausrichtung um 90 Grad gedreht. Normalerweise vertikal angeordnete Schriftzeichen, etwa im Chinesischen oder Japanischen, bleiben davon unberührt.

Dies ist nützlich, wenn Sie Formulare für vertikal geschriebene Sprachen erstellen.

Im Einzelnen gilt:

- `writing-mode: vertical-lr` erzeugt vertikale Formularsteuerelemente mit einer Blockflussrichtung von links nach rechts. Bei Steuerelementen mit Zeilenumbruch oder mehreren Textzeilen erscheinen nachfolgende Zeilen rechts von den vorherigen.
- `writing-mode: vertical-rl` erzeugt vertikale Formularsteuerelemente mit einer Blockflussrichtung von rechts nach links. Bei Steuerelementen mit Zeilenumbruch oder mehreren Textzeilen erscheinen nachfolgende Zeilen links von den vorherigen.

Sie könnten die Steuerelemente auch mit einer [Transformation](/de/docs/Web/CSS/Reference/Properties/transform) um 90 Grad drehen. Dadurch würden sie jedoch auf einer eigenen Ebene platziert, was unbeabsichtigte Auswirkungen auf das Layout haben kann, etwa die Überlagerung anderer Inhalte. `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Die Eigenschaft {{cssxref("writing-mode")}} wird zwar gut unterstützt, die Erstellung vertikal ausgerichteter Formularsteuerelemente mit `writing-mode` wird jedoch erst seit 2024 vollständig von Browsern unterstützt.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` beziehungsweise `vertical-rl`. Allerdings werden dabei normalerweise vertikal angeordnete Schriftzeichen (etwa im Chinesischen oder Japanischen) um 90 Grad auf die Seite gedreht, während horizontal angeordnete Schriftzeichen (etwa in lateinischen Sprachen) von diesen Werten unberührt bleiben.

Zusätzlich können Sie mit der Eigenschaft {{cssxref("direction")}} die Richtung des Inhalts innerhalb der Steuerelemente festlegen:

- `direction: ltr` bewirkt, dass der Inhalt oben beginnt und nach unten verläuft.
- `direction: rtl` bewirkt, dass der Inhalt unten beginnt und nach oben verläuft.

Mit der Eigenschaft `direction` können Sie die **Inline-Grundrichtung** festlegen – die Hauptrichtung, in der Inhalte innerhalb einer Zeile angeordnet werden. Sie bestimmt, auf welcher Seite sich der „Anfang“ und das „Ende“ einer Zeile befinden. Bei textbasierten Formularsteuerelementen ist der Unterschied deutlich: Der Textfluss beginnt oben oder unten. Bei nicht textbasierten Steuerelementen wie Schiebereglern bestimmt `direction`, in welcher Richtung das Steuerelement dargestellt wird. Wenn Sie beispielsweise `direction: ltr` für einen vertikalen Schieberegler festlegen, befindet sich der niedrigste Wert oben und der höchste unten.

Die folgenden Abschnitte zeigen anhand von Beispielen, wie Sie verschiedene Arten vertikaler Formularsteuerelemente erstellen. Die genauen Angaben zur Unterstützung der einzelnen Typen finden Sie in den Informationen zur Browser-Kompatibilität auf den jeweils verlinkten Referenzseiten.

## Schieberegler, Messanzeigen und Fortschrittsbalken

Sehen wir uns an, wie Sie vertikale Schieberegler, Messanzeigen und Fortschrittsbalken erstellen.

### Grundlegendes Beispiel

Eine typische Gruppe visueller Steuerelemente aus einem Schieberegler mit [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), einem {{htmlelement("progress")}}-Element und einem {{htmlelement("meter")}}-Element wird so erstellt:

```html
<input type="range" min="0" max="11" value="9" step="1" />
<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="20">
  at 50/100
</meter>
<progress id="file" max="100" value="70">70%</progress>
```

> [!NOTE]
> Es empfiehlt sich, für jedes Formularsteuerelement ein {{htmlelement("label")}}-Element einzufügen, damit jedem Feld aus Gründen der Barrierefreiheit eine aussagekräftige Textbeschreibung zugeordnet ist (weitere Informationen finden Sie unter [Aussagekräftige Textbeschriftungen verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)). Hier haben wir darauf verzichtet, da sich dieser Artikel ausschließlich mit der visuellen Darstellung der Formularsteuerelemente befasst. Im produktiven Code sollten Sie jedoch darauf achten.

Um die Steuerelemente vertikal darzustellen, können Sie folgendes CSS verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) sorgt in modernen Browsern dafür, dass die Steuerelemente vertikal dargestellt werden.

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Das Steuerelement von unten nach oben darstellen

Standardmäßig haben die Steuerelemente für {{cssxref("direction")}} den Wert `ltr`. Dadurch werden Schieberegler, Messanzeigen und Fortschrittsbalken wie oben gezeigt von oben nach unten dargestellt.

Sie können dies ändern, indem Sie `direction: rtl` festlegen. Dadurch werden sie stattdessen von unten nach oben dargestellt:

```html hidden
<input type="range" min="0" max="11" value="9" step="1" />
<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="20">
  at 50/100
</meter>
<progress id="file" max="100" value="70">70%</progress>
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

### Vertikale Schieberegler in älteren Browsern erstellen

In älteren Browsern, die das Erstellen vertikaler Formularsteuerelemente mit `writing-mode` und `direction` nicht unterstützen, gibt es nur eingeschränkte Alternativen. Die folgenden Möglichkeiten funktionieren ausschließlich bei `<input type="range">` und bewirken, dass der Text von unten nach oben verläuft. Auf `<meter>`- und `<progress>`-Elemente haben sie keine Auswirkung:

- Die nicht standardisierte Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/Reference/Properties/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht standardisierte Attribut `orient="vertical"` kann in älteren Versionen von Firefox direkt zum `<input type="range">`-Element hinzugefügt werden.

Der HTML-Code für dieses Beispiel enthält nur einen Schieberegler mit [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range). Durch `orient="vertical"` wird er in älteren Firefox-Versionen vertikal dargestellt:

```html
<input type="range" min="0" max="11" value="9" step="1" orient="vertical" />
```

Damit das Steuerelement auch in älteren Versionen von Chrome und Safari vertikal dargestellt wird, können Sie `appearance: slider-vertical` verwenden:

```css
input[type="range"] {
  margin-block-end: 20px;
  appearance: slider-vertical;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## Select-Elemente

In diesem Abschnitt erfahren Sie, wie Sie vertikale {{htmlelement("select")}}-Elemente einsetzen.

### Grundlegendes Beispiel für Select-Elemente

Der folgende HTML-Code erstellt zwei `<select>`-Elemente: eines, bei dem nur ein Eintrag ausgewählt werden kann, und eines, bei dem mehrere Einträge ausgewählt werden können:

```html
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
```

Um die Steuerelemente vertikal darzustellen, können Sie folgendes CSS verwenden:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Textrichtung und Reihenfolge der Optionen anpassen

Auch hier können Sie die Eigenschaft {{cssxref("direction")}} auf `rtl` setzen, damit der Text statt standardmäßig von oben nach unten von unten nach oben verläuft.

Beachten Sie außerdem, dass im obigen Beispiel die Inline-Richtung der Optionen von rechts nach links verläuft, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, erscheint der Text der `<option>`-Elemente von links nach rechts.

Wir untersuchen diese beiden Anwendungsfälle anhand von drei `<select>`-Elementen als Listenfelder (`multiple`), damit sich die Auswirkungen direkt vergleichen lassen.

```html
<div class="controls">
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
</div>
```

Im CSS für dieses Beispiel legen wir für die drei Listenfelder folgende Eigenschaften fest:

1. `writing-mode: vertical-rl`: Die Darstellung entspricht dem vorherigen Beispiel – der Text verläuft von oben nach unten und die Optionen werden von rechts nach links angeordnet.
2. `writing-mode: vertical-rl` und `direction: rtl`: Die Optionen werden von rechts nach links angeordnet, aber der Textfluss wird umgekehrt und verläuft von unten nach oben.
3. `writing-mode: vertical-lr`: Der Text verläuft von oben nach unten, während die Reihenfolge der Optionen umgekehrt wird und von links nach rechts verläuft.

```css hidden
.controls {
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

.controls > div {
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

In diesem Abschnitt erfahren Sie, wie Sie vertikale {{htmlelement("button")}}-Elemente einsetzen. Beachten Sie, dass wir in den folgenden Beispielen zwar nur ein `<button>`-Element verwenden, das Verhalten bei anderen Elementen, die Buttons erzeugen, jedoch gleich ist. Dazu gehören [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen wie [`button`](/de/docs/Web/HTML/Reference/Elements/input/button), [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Grundlegendes Button-Beispiel

Der folgende HTML-Code erstellt zwei `<button>`-Elemente: eines mit einer Textzeile und eines mit drei Textzeilen:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

Um die Buttons vertikal darzustellen, können Sie folgendes CSS verwenden:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Reihenfolge der Textzeilen in Buttons anpassen

Wenn Sie den Wert von `writing-mode` von `vertical-rl` auf `vertical-lr` ändern, erscheinen nachfolgende Textzeilen rechts statt links von den vorherigen Zeilen.

Dieses Beispiel verwendet zwei Exemplare des Buttons mit drei Textzeilen aus dem vorherigen Beispiel. So können Sie die Auswirkungen der Änderung von `writing-mode` leicht erkennen:

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

Im CSS setzen wir `writing-mode: vertical-rl` für den ersten Button, um die Zeilen von rechts nach links anzuordnen. Für den zweiten Button setzen wir `writing-mode: vertical-lr`, um die Reihenfolge der Zeilen umzukehren – von links nach rechts:

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

## Textbasierte Formularsteuerelemente

Zum Schluss sehen wir uns vertikale {{htmlelement("textarea")}}-Elemente und textbasierte `<input>`-Typen an. Beachten Sie, dass wir in den folgenden Beispielen zwar nur ein `<input type="text">`-Element verwenden, das Verhalten bei anderen textbasierten [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen jedoch gleich ist: [`password`](/de/docs/Web/HTML/Reference/Elements/input/button), [`number`](/de/docs/Web/HTML/Reference/Elements/input/reset), [`url`](/de/docs/Web/HTML/Reference/Elements/input/submit) und weitere.

### Grundlegendes Beispiel für ein Texteingabefeld und ein Textarea-Element

Der folgende HTML-Code erstellt ein `<textarea>`-Element und ein `<input type="text">`-Element:

```html
<textarea>This is my textarea</textarea>
<input type="text" value="Input text" />
```

Um das Eingabefeld und das Textarea-Element vertikal darzustellen, können Sie folgendes CSS verwenden:

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

### Textrichtung und Reihenfolge der Zeilen anpassen

Sie können die Eigenschaft {{cssxref("direction")}} auf `rtl` setzen, damit der Text statt standardmäßig von oben nach unten von unten nach oben verläuft. Außerdem können Sie `writing-mode` auf `vertical-lr` statt auf `vertical-rl` setzen, damit mehrere Textzeilen in `<textarea>`-Elementen von links nach rechts statt standardmäßig von rechts nach links angeordnet werden.

Dieses Beispiel verwendet drei Exemplare derselben Textsteuerelemente wie im vorherigen Beispiel. So können Sie die Auswirkungen der beschriebenen Änderungen an `direction` und `writing-mode` leicht erkennen:

```html
<div class="controls">
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
</div>
```

Im CSS legen wir für die drei Gruppen von Textsteuerelementen folgende Eigenschaften fest:

1. `writing-mode: vertical-rl`: Die Darstellung entspricht dem vorherigen Beispiel – der Text verläuft von oben nach unten und die Zeilen werden von rechts nach links angeordnet.
2. `writing-mode: vertical-rl` und `direction: rtl`: Die Zeilen werden von rechts nach links angeordnet, aber der Textfluss wird umgekehrt und verläuft von unten nach oben.
3. `writing-mode: vertical-lr`: Der Text verläuft von oben nach unten, aber die Reihenfolge der Zeilen wird umgekehrt – von links nach rechts. Beachten Sie, dass dies keine Auswirkung auf `<input type="text">`-Elemente hat, da diese immer einzeilig sind.

```css hidden
.controls {
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

.controls > div {
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
- Weitere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}} und {{htmlelement("select")}}.
- [Lernen: Mit unterschiedlichen Textrichtungen umgehen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
