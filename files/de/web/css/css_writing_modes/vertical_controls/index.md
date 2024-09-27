---
title: Erstellen vertikaler Formularelemente
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der Leitfaden erklärt, wie Sie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwenden, um vertikale Formularelemente zu erstellen und zu konfigurieren. Dies umfasst:

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Schaltflächen-Eingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Element/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url).

## Allgemeine Technik

In modernen Browsern kann die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert eingestellt werden, um Formularsteuerungen mit Textzeichen, die normalerweise horizontal sind (zum Beispiel in lateinischen Sprachen), vertikal anzuzeigen. Die Zeichen werden in einem 90-Grad-Winkel zum Standard angezeigt. Normalerweise vertikale Textzeichen, zum Beispiel in Chinesisch oder Japanisch, bleiben in dieser Hinsicht unverändert.

Dies ist nützlich beim Erstellen von Formularen für vertikale Sprachen.

Konkret:

- Mit `writing-mode: vertical-lr` werden vertikale Formularelemente mit einer Blockflussrichtung von links nach rechts erstellt. Das bedeutet, dass bei Steuerungen mit Umbrüchen oder mehreren Textzeilen nachfolgende Zeilen rechts von vorhergehenden Zeilen erscheinen.
- Mit `writing-mode: vertical-rl` werden vertikale Formularelemente mit einer Blockflussrichtung von rechts nach links erstellt, was bedeutet, dass bei Steuerungen mit Umbrüchen oder mehreren Textzeilen nachfolgende Zeilen links von vorhergehenden Zeilen erscheinen.

Sie könnten [transform](/de/docs/Web/CSS/transform) verwenden, um die Steuerungen um 90 Grad zu drehen, jedoch würde dies die Steuerungen in ihrer eigenen Ebene platzieren und unbeabsichtigte Layout-Nebeneffekte verursachen, wie das Überlappen anderer Inhalte. Die Verwendung von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Während die Eigenschaft {{cssxref("writing-mode")}} gut unterstützt wird, erlangte die Erstellung vertikal ausgerichteter Formularelemente mit `writing-mode` erst 2024 die vollständige Browser-Unterstützung.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Textzeichen (zum Beispiel in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um seitlich angezeigt zu werden, während horizontale Textzeichen (zum Beispiel in lateinischen Sprachen) von diesen Werten nicht beeinflusst werden.

Zusätzlich kann die Eigenschaft {{cssxref("direction")}} verwendet werden, um die Richtung des Inhalts innerhalb der Steuerungen zu steuern:

- `direction: ltr` lässt den Inhalt oben beginnen und nach unten fließen.
- `direction: rtl` lässt den Inhalt unten beginnen und nach oben fließen.

Die Eigenschaft `direction` kann verwendet werden, um die **Inline-Basisrichtung** festzulegen — die primäre Richtung, in die der Inhalt in einer Zeile geordnet ist, die festlegt, auf welchen Seiten sich der "Anfang" und das "Ende" einer Zeile befinden. Bei textbasierten Formularelementen ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. Bei nicht textbasierten Steuerungen wie Bereichsreglern legt `direction` die Richtung fest, in der die Steuerung gezeichnet wird. Zum Beispiel legt `direction: ltr` auf einem vertikalen Schieberegler den niedrigsten Wert oben und den höchsten Wert unten am Schieberegler fest.

Die folgenden Abschnitte zeigen, wie Sie verschiedene Arten von vertikalen Formularelementen erstellen, zusammen mit Beispielen für jedes. Informieren Sie sich über die Browser-Kompatibilitätsinformationen auf jeder der verlinkten Referenzseiten, um die genauen Informationen zur Unterstützung jedes Typs zu finden.

## Bereichsregler, Zähler und Fortschrittsbalken

Werfen wir einen Blick darauf, wie man vertikale Bereichsregler, Zähler und Fortschrittsbalken erstellt.

### Einfaches Beispiel

Ein typischer Satz visueller [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, {{htmlelement("progress")}}, und {{htmlelement("meter")}}-Steuerungen wird so erstellt:

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
> Eine bewährte Methode besteht darin, für jedes Formularelement ein {{htmlelement("label")}}-Element hinzuzufügen, um jedem Feld eine aussagekräftige Textbeschreibung für Barrierefreiheitszwecke zuzuordnen (siehe [Aussagekräftige Textetiketten](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). Wir haben dies hier nicht getan, da sich dieser Artikel ausschließlich auf Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten dies im Produktionscode sicherstellen.

Um die Steuerungen vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) führt dazu, dass die Steuerungen in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Zeichnen der Steuerung von unten nach oben

Standardmäßig haben die Steuerungen einen {{cssxref("direction")}}-Wert von `ltr`. Dies führt dazu, dass Ihre Schieberegler, Zähler und Fortschrittsbalken von oben nach unten gezeichnet werden, wie oben zu sehen ist.

Sie können dies ändern, indem Sie `direction: rtl` setzen — dies führt dazu, dass sie stattdessen von unten nach oben gezeichnet werden:

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

### Erstellen vertikaler Bereichsregler in älteren Browsern

In älteren Browsern, die die Erstellung vertikaler Formularelemente mit `writing-mode` und `direction` nicht unterstützen, stehen nur begrenzte Alternativen zur Verfügung. Die folgenden funktionieren nur auf `<input type="range">` und bewirken, dass der Text von unten nach oben fließt — sie haben keine Wirkung auf `<meter>`- und `<progress>`-Elemente:

- Die nicht standardisierte Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht standardisierte Attribut `orient="vertical"` kann dem `<input type="range">`-Element selbst in älteren Versionen von Firefox hinzugefügt werden.

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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## Select-Elemente

Dieser Abschnitt zeigt, wie man vertikale {{htmlelement("select")}}-Elemente handhabt.

### Einfaches Select-Beispiel

Das folgende HTML erstellt zwei `<select>`-Elemente: eines, bei dem eine einzige Auswahl getroffen werden kann, und eines mit mehreren Auswahlmöglichkeiten:

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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Anpassen der Textrichtung und Reihenfolge der Optionen

Es ist wieder möglich, einen {{cssxref("direction")}}-Wert von `rtl` zu verwenden, um die Textrichtung von unten nach oben statt der Standardrichtung von oben nach unten einzustellen.

Es ist auch erwähnenswert, dass in dem obigen Beispiel die Inline-Richtung der Select-Optionen von rechts nach links geht, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, erscheinen die `<option>`-Texte von links nach rechts.

Wir werden diese beiden Anwendungsfälle untersuchen, indem wir drei Listenfeld (`multiple`) `<select>`-Elemente verwenden, um die Effekte nebeneinander einfach zu vergleichen.

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

Im CSS für dieses Beispiel setzen wir die folgenden Eigenschaften auf die drei Listenfelder:

1. `writing-mode: vertical-rl`, das genauso wie im vorherigen Beispiel angezeigt wird — Text fließt von oben nach unten, und die Optionen werden von rechts nach links angezeigt.
2. `writing-mode: vertical-rl` und `direction: rtl`, wobei die Optionen von rechts nach links gehen, aber der Textfluss von unten nach oben umgekehrt wird.
3. `writing-mode: vertical-lr`, wobei der Text von oben nach unten geht, während die Reihenfolge der Optionen von links nach rechts umgekehrt wird.

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

Dieser Abschnitt zeigt, wie man vertikale {{htmlelement("button")}}-Elemente handhabt. Beachten Sie, dass wir in den folgenden Beispielen nur ein `<button>`-Element verwendet haben, das Verhalten jedoch bei anderen Elementen, die Schaltflächen erstellen, wie [`<input>`](/de/docs/Web/HTML/Element/input) Typen von [`button`](/de/docs/Web/HTML/Element/input/button), [`reset`](/de/docs/Web/HTML/Element/input/reset) und [`submit`](/de/docs/Web/HTML/Element/input/submit) dasselbe ist.

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

### Anpassen der Reihenfolge der Schaltflächentextzeilen

Wenn Sie den `writing-mode`-Wert von `vertical-rl` auf `vertical-lr` ändern, erscheinen nachfolgende Textzeilen rechts von vorhergehenden Zeilen, anstatt links.

In diesem Beispiel verwenden wir zwei Kopien der Schaltfläche mit drei Textzeilen, die wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte des Änderung des Schreibmodus leicht sehen können:

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

Im CSS setzen wir `writing-mode: vertical-rl` auf die erste Schaltfläche, um die Zeilenreihenfolge von rechts nach links zu layouten. Auf die zweite Schaltfläche setzen wir `writing-mode: vertical-lr`, um die Zeilenreihenfolge umzukehren — von links nach rechts:

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

Zuletzt betrachten wir das Handling von vertikalen {{htmlelement("textarea")}}-Elementen und textbasierten `<input>`-Typen. Beachten Sie, dass, obwohl wir in den folgenden Beispielen nur einen `<input type="text">` in den Beispiel enthalten haben, das Verhalten bei anderen textbasierten [`<input>`](/de/docs/Web/HTML/Element/input)-Typen dasselbe ist: [`password`](/de/docs/Web/HTML/Element/input/button), [`number`](/de/docs/Web/HTML/Element/input/reset), [`url`](/de/docs/Web/HTML/Element/input/submit), etc.

### Einfaches Text-Eingabe- und Textbereich-Beispiel

Das folgende HTML erstellt eine `<textarea>` und ein `<input type="text">`:

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

### Anpassen der Textrichtung und Zeilenlayout-Reihenfolge

Sie können den Wert der Eigenschaft {{cssxref("direction")}} auf `rtl` setzen, um die Textrichtung von oben nach unten auf unten nach oben zu ändern. Sie können auch `writing-mode` auf `vertical-lr` anstatt `vertical-rl` setzen, um mehrere Textzeilen in `<textarea>`s von links nach rechts anstatt der Standardrichtung von rechts nach links erscheinen zu lassen.

In diesem Beispiel verwenden wir drei Kopien der gleichen Textelemente, die wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte der Änderung von `direction` und `writing-mode` wie oben diskutiert leicht sehen können:

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

Im CSS setzen wir die folgenden Eigenschaften auf die drei Sätze von Textelementen:

1. `writing-mode: vertical-rl`, um es genauso wie im vorherigen Beispiel anzuzeigen — Text fließt von oben nach unten, und die Zeilen fließen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links zu fließen, aber den Textfluss von unten nach oben umzukehren.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten zu fließen, aber den Fluss der Zeilen umzukehren — von links nach rechts. Beachten Sie, dass dies keine Wirkung auf `<input type="text">`-Elemente hat, da sie immer einzeilig sind.

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
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}}, und {{htmlelement("select")}}.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
