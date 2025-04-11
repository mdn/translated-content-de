---
title: Vertikale Formularelemente erstellen
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Der Leitfaden erklärt, wie Sie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwenden, um vertikale Formularelemente zu erstellen und zu konfigurieren. Dies umfasst:

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Slider, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Button-Eingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Allgemeine Technik

In modernen Browsern kann die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert gesetzt werden, um Formularelemente mit normalerweise horizontalen Textzeichen (z. B. in lateinischen Sprachen) vertikal anzuzeigen, wobei der Text um 90 Grad gegenüber der Standardeinstellung gedreht wird. Normalerweise vertikale Schriftzeichen, beispielsweise in Chinesisch oder Japanisch, sind in dieser Hinsicht unbeeinflusst.

Dies ist nützlich, wenn Sie Formulare für vertikale Sprachen erstellen.

Konkret:

- `writing-mode: vertical-lr` erstellt vertikale Formularelemente mit einer Blockflussrichtung von links nach rechts, was bedeutet, dass bei Steuerelementen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen rechts von vorherigen Zeilen erscheinen.
- `writing-mode: vertical-rl` erstellt vertikale Formularelemente mit einer Blockflussrichtung von rechts nach links, was bedeutet, dass bei Steuerelementen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen links von vorherigen Zeilen erscheinen.

Sie könnten einen [transform](/de/docs/Web/CSS/transform) verwenden, um die Steuerelemente um 90 Grad zu drehen, aber dies würde die Steuerelemente in eine eigene Ebene versetzen und unbeabsichtigte Layout-Nebenwirkungen verursachen, wie z.B. dass andere Inhalte überlagert werden. Die Verwendung von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Während die Eigenschaft {{cssxref("writing-mode")}} gut unterstützt wird, erlangte die Erstellung vertikal ausgerichteter Formularelemente mit `writing-mode` erst 2024 volle Browserunterstützung.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Schriftzeichen (zum Beispiel in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um seitlich angezeigt zu werden, während horizontale Schriftzeichen (zum Beispiel in lateinischen Sprachen) von diesen Werten unbeeinflusst bleiben.

Zusätzlich kann die Eigenschaft {{cssxref("direction")}} verwendet werden, um die Richtung des Inhalts innerhalb der Steuerelemente zu steuern:

- `direction: ltr` sorgt dafür, dass der Inhalt oben beginnt und nach unten fließt.
- `direction: rtl` sorgt dafür, dass der Inhalt unten beginnt und nach oben fließt.

Mit der Eigenschaft `direction` kann die **Inline-Basisausrichtung** gesetzt werden — die primäre Richtung, in der der Inhalt in einer Zeile geordnet ist, die definiert, auf welcher Seite sich der "Anfang" und das "Ende" einer Zeile befinden. Bei textbasierten Formularelementen ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. Bei nicht textbasierten Steuerelementen wie Bereichsslidern legt `direction` die Richtung fest, in der das Steuerelement gezeichnet wird. Beispielsweise setzt `direction: ltr` auf einem vertikalen Slider den niedrigsten Wert oben am Slider und den höchsten Wert unten am Slider.

Die folgenden Abschnitte zeigen, wie Sie verschiedene Arten von vertikalen Formularelementen erstellen können, zusammen mit Beispielen für jedes. Konsultieren Sie die Browser-Kompatibilitätsinformationen auf jeder der verlinkten Referenzseiten, um die genauen Unterstützungshinweise für jeden Typ zu finden.

## Bereichsslider, Meter und Fortschrittsbalken

Werfen wir einen Blick darauf, wie man vertikale Bereichsslider, Meter und Fortschrittsbalken erstellt.

### Einfaches Beispiel

Ein typisches Set aus visuellen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Slider, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elementen wird so erstellt:

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
> Best Practice ist, für jedes Formularelement ein {{htmlelement("label")}}-Element einzuschließen, um jedem Feld eine aussagekräftige Textbeschreibung für Barrierefreiheitszwecke zuzuordnen (siehe [Verwenden Sie aussagekräftige Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben das hier nicht getan, da sich dieser Artikel rein auf Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten sicherstellen, dass Sie dies in Produktionscode tun.

Um die Steuerelemente vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) bewirkt, dass die Steuerelemente in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Zeichnen des Steuerelements von unten nach oben

Standardmäßig haben die Steuerelemente einen {{cssxref("direction")}}-Wert von `ltr`. Dies führt dazu, dass Ihre Slider, Meter und Fortschrittsbalken von oben nach unten gezeichnet werden, wie oben zu sehen ist.

Sie können dies ändern, indem Sie `direction: rtl` festlegen — dies führt dazu, dass sie von unten nach oben gezeichnet werden:

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Drawing the control from bottom to top", "100%", "170") }}

### Erstellung vertikaler Bereichsslider in älteren Browsern

In älteren Browsern, die die Erstellung vertikaler Formularelemente mit `writing-mode` und `direction` nicht unterstützen, gibt es nur begrenzte Alternativen. Die folgenden funktionieren nur auf `<input type="range">`, wobei der Text von unten nach oben fließt — sie haben keine Wirkung auf `<meter>` und `<progress>` Elemente:

- Die nicht-standardmäßige Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht-standardmäßige Attribut `orient="vertical"` kann direkt zum `<input type="range">`-Element in älteren Firefox-Versionen hinzugefügt werden.

Das HTML für dieses Beispiel enthält nur einen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Slider, wobei `orient="vertical"` hinzugefügt wurde, um ihn in älteren Firefox-Versionen vertikal anzuzeigen:

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## Select-Elemente

Dieser Abschnitt zeigt, wie man vertikale {{htmlelement("select")}}-Elemente handhabt.

### Einfaches Select-Beispiel

Das untenstehende HTML erstellt zwei `<select>`-Elemente, eines, bei dem eine einzelne Auswahl möglich ist, und eines mit mehreren Auswahlmöglichkeiten:

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Anpassen der Textrichtung und der Optionsreihenfolge

Es ist ebenfalls möglich, einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` zu verwenden, um die Textrichtung von unten nach oben zu ändern, anstatt der Standardrichtung von oben nach unten.

Es sei auch angemerkt, dass im obigen Beispiel die Inline-Richtung für die Auswahloptionen von rechts nach links verläuft, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, erscheint der `<option>` Text von links nach rechts.

Wir werden diese beiden Anwendungsfälle anhand von drei Listenfeld (`multiple`) `<select>`-Elementen untersuchen, um die Effekte leichter nebeneinander zu vergleichen.

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

In dem CSS für dieses Beispiel setzen wir die folgenden Eigenschaften auf die drei Listenfelder:

1. `writing-mode: vertical-rl`, das genau wie im vorherigen Beispiel dargestellt wird — Text fließt von oben nach unten, und die Optionen werden von rechts nach links angezeigt.
2. `writing-mode: vertical-rl` und `direction: rtl`, mit den Optionen von rechts nach links, während der Textfluss umgekehrt von unten nach oben verläuft.
3. `writing-mode: vertical-lr`, wobei der Text von oben nach unten verläuft, während die Option von links nach rechts umgekehrt wird.

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Adjusting text direction and option order", "100%", "200") }}

## Buttons

Dieser Abschnitt zeigt, wie man vertikale {{htmlelement("button")}}-Elemente handhabt. Beachten Sie, dass wir in den untenstehenden Beispielen nur ein `<button>`-Element verwendet haben, das Verhalten jedoch für andere Elemente, die Buttons erstellen, gleich ist, wie etwa [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen von [`button`](/de/docs/Web/HTML/Reference/Elements/input/button), [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Einfaches Button-Beispiel

Das untenstehende HTML erstellt zwei `<button>`-Elemente, eines mit einer einzigen Textzeile und eines mit drei:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

Um die Buttons vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Anpassung der Reihenfolge der Button-Textzeilen

Wenn Sie den `writing-mode`-Wert von `vertical-rl` zu `vertical-lr` ändern, erscheinen nachfolgende Textzeilen rechts von vorherigen Zeilen, statt links.

Dieses Beispiel verwendet zwei Kopien des Drei-Textzeilen-Buttons, den wir im vorherigen Beispiel gesehen haben, sodass Sie die Effekte der Änderung des Schreibmodus leicht erkennen können:

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

In dem CSS setzen wir `writing-mode: vertical-rl` auf den ersten Button, um die Zeilenreihenfolge von rechts nach links zu layouten. Auf den zweiten Button setzen wir `writing-mode: vertical-lr`, um die Zeilenreihenfolge umzukehren — von links nach rechts:

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Adjusting button text line order", "100%", "160") }}

## Textbasierte Formularelemente

Zu guter Letzt betrachten wir die Handhabung von vertikalen {{htmlelement("textarea")}}s und textbasierten `<input>`-Typen. Beachten Sie, dass, obwohl wir nur einen `<input type="text">`-Elementtyp in den untenstehenden Beispielen einschließen, das Verhalten für andere textbasierte [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen gleich ist: [`password`](/de/docs/Web/HTML/Reference/Elements/input/button), [`number`](/de/docs/Web/HTML/Reference/Elements/input/reset), [`url`](/de/docs/Web/HTML/Reference/Elements/input/submit), etc.

### Einfaches Beispiel für Texteingabe und Textarea

Das untenstehende HTML erstellt ein `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

Um das Eingabefeld und Textarea vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Basic text input and textarea example", "100%", "130") }}

### Anpassen der Textrichtung und Reihenfolge des Zeilenlayouts

Sie können einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` verwenden, um die Textrichtung von der Standardeinstellung von oben nach unten auf unten nach oben zu ändern. Sie können ebenfalls `writing-mode` auf `vertical-lr` anstelle von `vertical-rl` setzen, um mehrere Textzeilen in `<textarea>`s von links nach rechts anzuzeigen, statt von rechts nach links.

Dieses Beispiel verwendet drei Kopien der gleichen Textelemente, die wir im vorherigen Beispiel gesehen haben, sodass Sie die Effekte der Änderung von `direction` und `writing-mode` wie oben besprochen leicht erkennen können:

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

In dem CSS setzen wir die folgenden Eigenschaften auf die drei Sätze von Textelementen:

1. `writing-mode: vertical-rl`, um es genau wie im vorherigen Beispiel darzustellen — der Text fließt von oben nach unten, und die Zeilen fließen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links fließen zu lassen, während der Textfluss von unten nach oben umkehrt.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten fließen zu lassen, während der Fluss der Zeilen von links nach rechts umkehrt. Beachten Sie, dass dies keine Auswirkungen auf `<input type="text">`-Elemente hat, da diese immer einzeilig sind.

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Adjusting text direction and line layout order", "100%", "180") }}

## Siehe auch

- Das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element.
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}} und {{htmlelement("select")}}.
- [Lernen: Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
