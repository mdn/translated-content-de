---
title: Erstellen vertikaler Formularsteuerungen
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Der Leitfaden erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden können, um vertikale Formularsteuerungen zu erstellen und zu konfigurieren. Dazu gehören:

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, {{htmlelement("progress")}} Balken und {{htmlelement("meter")}} Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Schaltflächeneingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Element/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url).

## Allgemeine Technik

In modernen Browsern kann die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert gesetzt werden, um Formularsteuerungen mit normalerweise horizontalen Textzeichen (zum Beispiel in lateinischen Sprachen) vertikal anzuzeigen, wobei der Text in einem Winkel von 90 Grad zur Standardeinstellung angezeigt wird. Normalerweise vertikale Schriftzeichen, zum Beispiel in Chinesisch oder Japanisch, sind in dieser Hinsicht nicht betroffen.

Dies ist nützlich beim Erstellen von Formularen für vertikale Sprachen.

Konkret:

- `writing-mode: vertical-lr` erzeugt vertikale Formularsteuerungen mit einer Blockflussrichtung von links nach rechts, wobei in Steuerungen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen rechts von vorherigen Zeilen erscheinen.
- `writing-mode: vertical-rl` erzeugt vertikale Formularsteuerungen mit einer Blockflussrichtung von rechts nach links, wobei in Steuerungen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen links von vorherigen Zeilen erscheinen.

Sie könnten ein [transform](/de/docs/Web/CSS/transform) verwenden, um die Steuerungen um 90 Grad zu drehen, jedoch würden diese Steuerungen in eine eigene Ebene verschoben, was unbeabsichtigte Layout-Nebenwirkungen wie das Überlappen anderer Inhalte zur Folge hätte. Die Verwendung von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Auch wenn die Eigenschaft {{cssxref("writing-mode")}} gut unterstützt wird, hat die Erstellung von vertikal ausgerichteten Formularsteuerungen mit `writing-mode` erst 2024 volle Browser-Unterstützung erlangt.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Schriftzeichen (zum Beispiel in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um seitwärts angezeigt zu werden, während horizontale Schriftzeichen (zum Beispiel in lateinischen Sprachen) von diesen Werten unberührt bleiben.

Zusätzlich kann die Eigenschaft {{cssxref("direction")}} verwendet werden, um die Flussrichtung des Inhalts innerhalb der Steuerungen zu steuern:

- `direction: ltr` bewirkt, dass der Inhalt oben beginnt und nach unten fließt.
- `direction: rtl` bewirkt, dass der Inhalt unten beginnt und nach oben fließt.

Die Eigenschaft `direction` kann verwendet werden, um die **inline Basisrichtung** festzulegen — die primäre Richtung, in der der Inhalt auf einer Linie geordnet ist, die definiert, auf welchen Seiten der "Anfang" und das "Ende" einer Zeile sich befinden. Bei textbasierten Formularsteuerungen ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. Bei nicht textbasierten Steuerungen wie Schiebereglern bestimmt `direction` die Richtung, in der die Steuerung gezeichnet wird. Wenn zum Beispiel ein vertikaler Schieberegler mit `direction: ltr` verwendet wird, ist der niedrigste Wert oben am Schieberegler und der höchste Wert unten am Schieberegler.

Die folgenden Abschnitte zeigen, wie verschiedene Arten von vertikalen Formularsteuerungen erstellt werden, zusammen mit Beispielen für jede Art. Konsultieren Sie die Browser-Kompatibilitätsinformationen auf jeder der verlinkten Referenzseiten, um die exakten Unterstützungsinformationen für jeden Typ zu finden.

## Bereichsschieberegler, Messgeräte und Fortschrittsbalken

Werfen wir einen Blick darauf, wie vertikale Bereichsschieberegler, Messgeräte und Fortschrittsbalken erstellt werden.

### Einfaches Beispiel

Ein typischer Satz von visuellen [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, {{htmlelement("progress")}}, und {{htmlelement("meter")}} Steuerungen wird folgendermaßen erstellt:

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
> Best Practice ist es, für jedes Formularsteuerungselement ein {{htmlelement("label")}}-Element einzuschließen, um jedem Feld aus Gründen der Zugänglichkeit eine aussagekräftige Textbeschreibung zuzuordnen (siehe [Aussagekräftige Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). Wir haben das hier nicht gemacht, da sich dieser Artikel ausschließlich auf Aspekte der visuellen Darstellung von Formularsteuerungen konzentriert, aber Sie sollten dies im Produktionscode sicherstellen.

Um die Steuerungen vertikal anzuzeigen, können wir CSS folgendermaßen verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) sorgt dafür, dass die Steuerungen in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Die Steuerung von unten nach oben zeichnen

Standardmäßig haben die Steuerungen einen {{cssxref("direction")}}-Wert von `ltr`. Dadurch werden Ihre Schieberegler, Messgeräte und Fortschrittsbalken von oben nach unten gezeichnet, wie oben zu sehen.

Sie können dies ändern, indem Sie `direction: rtl` einstellen — das führt dazu, dass sie von unten nach oben gezeichnet werden:

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

### Vertikale Bereichsschieberegler in älteren Browsern erstellen

In älteren Browsern, die die Erstellung von vertikalen Formularsteuerungen mit `writing-mode` und `direction` nicht unterstützen, stehen nur begrenzte Alternativen zur Verfügung. Die folgenden funktionieren nur bei `<input type="range">` und führen dazu, dass der Text von unten nach oben fließt — sie haben keinen Effekt auf `<meter>` und `<progress>` Elemente:

- Die nicht standardmäßige Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht standardmäßige Attribut `orient="vertical"` kann direkt dem `<input type="range">`-Element in älteren Versionen von Firefox hinzugefügt werden.

Das HTML für dieses Beispiel enthält nur einen [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler mit `orient="vertical"`, um ihn in älteren Versionen von Firefox vertikal anzuzeigen:

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

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## Select-Elemente

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("select")}}-Elemente behandelt werden können.

### Einfaches Select-Beispiel

Das folgende HTML erstellt zwei `<select>`-Elemente, eines, bei dem eine einzelne Auswahl getroffen werden kann, und eines mit mehreren Auswahlmöglichkeiten:

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

Um die Steuerungen vertikal anzuzeigen, können wir CSS folgendermaßen verwenden:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Anpassung der Textrichtung und Reihenfolge der Optionen

Es ist wieder möglich, einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` zu verwenden, um die Textrichtung von unten nach oben zu ändern, anstatt der Standardrichtung von oben nach unten zu folgen.

Es ist auch wichtig zu beachten, dass im obigen Beispiel die Inline-Richtung für die Optionen des Select-Feldes von rechts nach links verläuft, da wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, erscheint der `<option>`-Text von links nach rechts.

Wir werden diese beiden Anwendungsfälle mit drei Listenfeldern (`multiple`) `<select>`-Elementen untersuchen, um die Effekte einfach nebeneinander zu vergleichen.

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

1. `writing-mode: vertical-rl`, sodass die Anzeige genauso wie im vorherigen Beispiel erfolgt — Text fließt von oben nach unten, und Optionen werden von rechts nach links angezeigt.
2. `writing-mode: vertical-rl` und `direction: rtl`, wobei die Optionen von rechts nach links verlaufen, aber der Textfluss von unten nach oben umgekehrt wird.
3. `writing-mode: vertical-lr`, wobei der Text von oben nach unten fließt, während die Reihenfolge der Optionen von links nach rechts umgekehrt wird.

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

## Buttons

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("button")}}-Elemente behandelt werden können. Beachten Sie, dass, obwohl wir in den folgenden Beispielen nur ein `<button>`-Element verwendet haben, das Verhalten bei anderen Elementen, die Buttons erstellen, wie zum Beispiel [`<input>`](/de/docs/Web/HTML/Element/input) Typen von [`button`](/de/docs/Web/HTML/Element/input/button), [`reset`](/de/docs/Web/HTML/Element/input/reset) und [`submit`](/de/docs/Web/HTML/Element/input/submit), gleich ist.

### Einfaches Button-Beispiel

Das folgende HTML erstellt zwei `<button>`-Elemente, eines mit einer einzigen Textzeile und eines mit drei Zeilen:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

Um die Schaltflächen vertikal anzuzeigen, können wir CSS folgendermaßen verwenden:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Anpassung der Zeilenreihenfolge des Button-Textes

Wenn Sie den `writing-mode`-Wert von `vertical-rl` zu `vertical-lr` ändern, erscheinen aufeinanderfolgende Textzeilen rechts von vorherigen Zeilen, anstatt links.

Dieses Beispiel verwendet zwei Kopien der Drei-Zeilen-Schaltfläche, die wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte der Änderung des Schreibmodus leicht sehen können:

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

## Textbasierte Formularsteuerungen

Zu guter Letzt betrachten wir die Handhabung von vertikalen {{htmlelement("textarea")}}s und textuellen `<input>`-Typen. Beachten Sie, dass, während wir nur einen `<input type="text">`-Element-Typ in den folgenden Beispielen eingeschlossen haben, das Verhalten bei anderen textuellen [`<input>`](/de/docs/Web/HTML/Element/input) Typen gleich ist: [`password`](/de/docs/Web/HTML/Element/input/button), [`number`](/de/docs/Web/HTML/Element/input/reset), [`url`](/de/docs/Web/HTML/Element/input/submit), etc.

### Einfaches Texteingabe- und Textarea-Beispiel

Das folgende HTML erstellt ein `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

Um die Eingabe und das Textfeld vertikal anzuzeigen, können wir CSS folgendermaßen verwenden:

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

### Anpassung der Textrichtung und Anordnung der Zeilen

Sie können einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` verwenden, um die Textrichtung von der Standardrichtung oben nach unten zu unten nach oben zu ändern. Sie können auch den `writing-mode` auf `vertical-lr` anstelle von `vertical-rl` einstellen, um mehrere Textzeilen in `<textarea>`s von links nach rechts anzuzeigen, anstatt der Standardrichtung von rechts nach links.

Dieses Beispiel verwendet drei Kopien der gleichen Textsteuerungen, die wir im vorherigen Beispiel gesehen haben, sodass Sie die Auswirkungen von Änderungen der `direction` und `writing-mode` wie oben beschrieben leicht sehen können:

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

1. `writing-mode: vertical-rl`, um sie genauso wie im vorherigen Beispiel anzuzeigen — Text fließt von oben nach unten, und Zeilen fließen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links fließen zu lassen, den Textfluss jedoch von unten nach oben umzukehren.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten fließen zu lassen, den Fluss der Zeilen jedoch umzukehren — von links nach rechts. Beachten Sie, dass dies keinen Effekt auf `<input type="text">`-Elemente hat, da diese immer einzeilig sind.

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

- Das [`<input>`](/de/docs/Web/HTML/Element/input)-Element.
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}}, und {{htmlelement("select")}}.
- [Lernen: Unterschiedliche Textrichtungen handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
