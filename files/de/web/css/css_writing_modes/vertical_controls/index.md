---
title: Erstellen vertikaler Formularsteuerungen
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Dieser Leitfaden erklärt, wie Sie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwenden, um vertikale Formularsteuerungen zu erstellen und zu konfigurieren. Dies umfasst:

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und Schaltflächeneingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Element/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Element/input/url).

## Allgemeine Technik

In modernen Browsern kann die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert gesetzt werden, um Formularsteuerungen vertikal darzustellen, bei denen Textzeichen normalerweise horizontal sind (zum Beispiel in lateinischen Sprachen), wobei der Text um 90 Grad gegenüber der Standardeinstellung gedreht angezeigt wird. Normalerweise vertikale Textzeichen, beispielsweise in Chinesisch oder Japanisch, bleiben in dieser Hinsicht unbeeinflusst.

Dies ist nützlich, wenn vertikale Sprachformulare erstellt werden.

Konkret:

- `writing-mode: vertical-lr` erstellt vertikale Formularsteuerungen mit einer Links-nach-Rechts-Blockfließrichtung, was bedeutet, dass in Steuerungen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen rechts von vorherigen Zeilen erscheinen.
- `writing-mode: vertical-rl` erstellt vertikale Formularsteuerungen mit einer Rechts-nach-Links-Blockfließrichtung, was bedeutet, dass in Steuerungen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen links von vorherigen Zeilen erscheinen.

Sie könnten einen [Transformieren](/de/docs/Web/CSS/transform) verwenden, um die Steuerungen um 90 Grad zu drehen, aber das würde die Steuerungen in ihrer eigenen Ebene platzieren und unbeabsichtigte Layouteffekte wie das Überlappen anderer Inhalte verursachen. Die Verwendung von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Während die Eigenschaft {{cssxref("writing-mode")}} gut unterstützt wird, erhielt die Erstellung vertikal ausgerichteter Formularsteuerungen mit `writing-mode` erst 2024 vollständige Browserunterstützung.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Textzeichen (z.B. in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um auf ihren Seiten anzuzeigen, während horizontale Textzeichen (z.B. in lateinischen Sprachen) von diesen Werten unbeeinflusst bleiben.

Zusätzlich kann die Eigenschaft {{cssxref("direction")}} verwendet werden, um die Richtung des Inhalts innerhalb der Steuerungen zu steuern:

- `direction: ltr` lässt den Inhalt oben beginnen und nach unten fließen.
- `direction: rtl` lässt den Inhalt unten beginnen und nach oben fließen.

Die Eigenschaft `direction` kann verwendet werden, um die **inline Basisausrichtung** festzulegen – die primäre Richtung, in der der Inhalt auf einer Zeile geordnet ist, die definiert, auf welchen Seiten der "Start" und das "Ende" einer Zeile sind. Bei textbasierten Formularsteuerungen ist der Unterschied offensichtlich – der Textfluss beginnt entweder oben oder unten. In nicht-textbasierten Steuerungen wie Bereichsschiebereglern legt `direction` die Richtung fest, in der die Steuerung gezeichnet wird. Zum Beispiel legt `direction: ltr` auf einem vertikalen Schieberegler den niedrigsten Wert oben und den höchsten Wert unten am Schieberegler fest.

Die folgenden Abschnitte zeigen, wie verschiedene Arten von vertikalen Formularsteuerungen erstellt werden, zusammen mit Beispielen für jede. Konsultieren Sie die Browserkompatibilitätsinformationen auf jeder der verlinkten Referenzseiten, um die genaue Unterstützung jedes Typs zu erfahren.

## Bereichsschieberegler, Messgeräte und Fortschrittsbalken

Lassen Sie uns einen Blick darauf werfen, wie vertikale Bereichsschieberegler, Messgeräte und Fortschrittsbalken erstellt werden.

### Einfaches Beispiel

Ein typischer Satz von visuellen Steuerungen für [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Schieberegler, {{htmlelement("progress")}} und {{htmlelement("meter")}} wird so erstellt:

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
> Beste Praxis ist es, für jedes Formularsteuerungselement ein {{htmlelement("label")}}-Element einzuschließen, um eine sinnvolle Textbeschreibung für jeden Bereich zuzuordnen, um die Barrierefreiheit zu verbessern (siehe [Sinnvolle Textetiketten](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). Wir haben das hier nicht gemacht, da sich dieser Artikel nur auf die visuellen Renderaspekte der Formularsteuerungen konzentriert, aber Sie sollten dies in Ihrem Produktionscode sicherstellen.

Um die Steuerungen vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) sorgt dafür, dass die Steuerungen in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Einfaches Beispiel", "100%", "170") }}

### Zeichnen der Steuerung von unten nach oben

Standardmäßig haben die Steuerungen einen {{cssxref("direction")}}-Wert von `ltr`. Dies bewirkt, dass Ihre Schieberegler, Messgeräte und Fortschrittsbalken von oben nach unten gezeichnet werden, wie oben gesehen.

Sie können dies ändern, indem Sie `direction: rtl` setzen – dies bewirkt, dass sie von unten nach oben gezeichnet werden:

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

{{ EmbedLiveSample("Zeichnen der Steuerung von unten nach oben", "100%", "170") }}

### Erstellen vertikaler Bereichsschieberegler in älteren Browsern

In älteren Browsern, die die Erstellung vertikaler Formularsteuerungen mit `writing-mode` und `direction` nicht unterstützen, gibt es begrenzte Alternativen. Die folgenden funktionieren nur bei `<input type="range">` und bewirken, dass der Text von unten nach oben fließt – sie haben keinen Einfluss auf `<meter>` und `<progress>`-Elemente:

- Die nicht standardisierte Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht standardisierte `orient="vertical"`-Attribut kann dem `<input type="range">`-Element selbst in älteren Firefox-Versionen hinzugefügt werden.

Der HTML-Code für dieses Beispiel umfasst einen [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Schieberegler, bei dem `orient="vertical"` hinzugefügt wurde, um ihn in älteren Firefox-Versionen vertikal darzustellen:

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

{{ EmbedLiveSample("Erstellen vertikaler Bereichsschieberegler in älteren Browsern", "100%", "190") }}

## Select-Elemente

Dieser Abschnitt zeigt, wie vertikale {{htmlelement("select")}}-Elemente behandelt werden.

### Einfaches Select-Beispiel

Das folgende HTML erstellt zwei `<select>`-Elemente, eines, bei dem eine einzelne Auswahl getroffen werden kann, und eines mit mehreren Auswahlen:

```html
<form>
  <select multiple>
    <option>Erster</option>
    <option>Zweiter</option>
    <option>Dritter</option>
    <option>Vierter</option>
    <option>Fünfter</option>
  </select>
  <select>
    <option>Erster</option>
    <option>Zweiter</option>
    <option>Dritter</option>
    <option>Vierter</option>
    <option>Fünfter</option>
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

{{ EmbedLiveSample("Einfaches Select-Beispiel", "100%", "130") }}

### Anpassen der Textrichtung und Optionsreihenfolge

Es ist auch hier möglich, einen {{cssxref("direction")}}-Wert von `rtl` zu verwenden, um die Textrichtung von unten nach oben und nicht in der Standardrichtung von oben nach unten zu setzen.

Es sei auch darauf hingewiesen, dass im obigen Beispiel die Inlinerichtung für die Select-Optionen von rechts nach links geht, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir `writing-mode: vertical-lr` verwenden, erscheint der `<option>`-Text von links nach rechts.

Wir werden diese beiden Anwendungsfälle anhand von drei Listenboxen (`multiple`) `<select>`-Elementen erkunden, um die Effekte im Vergleich einfach nebeneinander zu sehen.

```html
<form>
  <div>
    <h2>writing-mode: vertical-lr</h2>
    <select multiple>
      <option>Erster</option>
      <option>Zweiter</option>
      <option>Dritter</option>
      <option>Vierter</option>
      <option>Fünfter</option>
    </select>
  </div>
  <div class="direction">
    <h2>direction: rtl & writing-mode: vertical-lr</h2>
    <select multiple>
      <option>Erster</option>
      <option>Zweiter</option>
      <option>Dritter</option>
      <option>Vierter</option>
      <option>Fünfter</option>
    </select>
  </div>
  <div class="reverse-option-order">
    <h2>writing-mode: vertical-rl</h2>
    <select multiple>
      <option>Erster</option>
      <option>Zweiter</option>
      <option>Dritter</option>
      <option>Vierter</option>
      <option>Fünfter</option>
    </select>
  </div>
</form>
```

Im CSS für dieses Beispiel setzen wir die folgenden Eigenschaften auf den drei Listenboxen:

1. `writing-mode: vertical-rl`, das sich genauso ausrichtet wie im vorherigen Beispiel - Text fließt von oben nach unten und Optionen werden von rechts nach links angezeigt.
2. `writing-mode: vertical-rl` und `direction: rtl`, wobei die Optionen von rechts nach links gehen, aber der Textfluss von unten nach oben umgekehrt wird.
3. `writing-mode: vertical-lr`, bei dem der Text von oben nach unten geht und die Optionsreihenfolge von links nach rechts umkehrt.

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

{{ EmbedLiveSample("Anpassen der Textrichtung und Optionsreihenfolge", "100%", "200") }}

## Schaltflächen

Dieser Abschnitt zeigt, wie Sie vertikale {{htmlelement("button")}}-Elemente behandeln. Beachten Sie, dass wir in den folgenden Beispielen nur ein `<button>`-Element verwendet haben, das Verhalten jedoch das gleiche ist wie bei anderen Elementen, die Schaltflächen erstellen, wie [`<input>`](/de/docs/Web/HTML/Element/input)-Typen von [`button`](/de/docs/Web/HTML/Element/input/button), [`reset`](/de/docs/Web/HTML/Element/input/reset) und [`submit`](/de/docs/Web/HTML/Element/input/submit).

### Einfaches Schaltflächenbeispiel

Das folgende HTML erstellt zwei `<button>`-Elemente, eines mit einer einzelnen Textzeile und eines mit drei:

```html
<button>Drücken Sie mich</button> <button>Drücken Sie mich<br />Bitte?<br />Danke</button>
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

{{ EmbedLiveSample("Einfaches Schaltflächenbeispiel", "100%", "130") }}

### Anpassen der Zeilenreihenfolge des Schaltflächentexts

Wenn Sie den `writing-mode`-Wert von `vertical-rl` zu `vertical-lr` wechseln, erscheinen nachfolgende Textzeilen rechts von vorherigen Zeilen anstatt links.

Dieses Beispiel verwendet zwei Kopien der Schaltfläche mit drei Textzeilen, die wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte des Wechsels des Schreibmodus leicht sehen können:

```html
<div>
  <h2>writing-mode: vertical-lr</h2>
  <button>Drücken Sie mich<br />Bitte?<br />Danke</button>
</div>
<div class="reverse-line-order">
  <h2>writing-mode: vertical-rl</h2>
  <button>Drücken Sie mich<br />Bitte?<br />Danke</button>
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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Anpassen der Zeilenreihenfolge des Schaltflächentexts", "100%", "160") }}

## Textbasierte Formularsteuerungen

Zu guter Letzt schauen wir uns an, wie vertikale {{htmlelement("textarea")}}s und textuelle `<input>`-Typen behandelt werden. Beachten Sie, dass, während wir nur den `<input type="text">`-Elementtyp in den folgenden Beispielen verwenden, das Verhalten bei anderen textuellen [`<input>`](/de/docs/Web/HTML/Element/input)-Typen wie [`password`](/de/docs/Web/HTML/Element/input/button), [`number`](/de/docs/Web/HTML/Element/input/reset), [`url`](/de/docs/Web/HTML/Element/input/submit) usw. das gleiche ist.

### Einfaches Text-Input- und Textarea-Beispiel

Das folgende HTML erstellt ein `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>Das ist mein Textbereich</textarea>
  <input type="text" value="Eingabetext" />
</form>
```

Um die Eingabe und die Textarea vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Einfaches Text-Input- und Textarea-Beispiel", "100%", "130") }}

### Anpassen der Textrichtung und Linienlayoutordnung

Sie können einen {{cssxref("direction")}}-Wert von `rtl` verwenden, um die Textrichtung von der Standardrichtung oben-nach-unten auf unten-nach-oben zu ändern. Sie können auch den `writing-mode` auf `vertical-lr` statt `vertical-rl` setzen, um zu bewirken, dass mehrere Textzeilen in `<textarea>`s von links nach rechts statt der Standardrichtung von rechts nach links erscheinen.

Dieses Beispiel verwendet drei Kopien derselben Texteingaben, die wir im vorherigen Beispiel gesehen haben, damit Sie die Effekte der Änderung von `direction` und `writing-mode`, wie oben beschrieben, leicht sehen können:

```html
<form>
  <div>
    <h2>writing-mode: vertical-lr</h2>
    <textarea>Das ist mein Textbereich</textarea>
    <input type="text" value="Eingabetext" />
  </div>
  <div class="direction">
    <h2>direction: rtl & writing-mode: vertical-lr</h2>
    <textarea>Das ist mein Textbereich</textarea>
    <input type="text" value="Eingabetext" />
  </div>
  <div class="reverse-line-order">
    <h2>writing-mode: vertical-rl</h2>
    <textarea>Das ist mein Textbereich</textarea>
    <input type="text" value="Eingabetext" />
  </div>
</form>
```

Im CSS setzen wir die folgenden Eigenschaften auf die drei Sets von Texteingaben:

1. `writing-mode: vertical-rl`, um es genauso darzustellen wie im vorherigen Beispiel – Text fließt von oben nach unten, und Zeilen fließen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links fließen zu lassen, aber den Textfluss von unten nach oben umzukehren.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten fließen zu lassen, aber den Fluss der Zeilen von links nach rechts umzukehren. Beachten Sie, dass dies keine Auswirkungen auf `<input type="text">`-Elemente hat, da diese immer einzeilig sind.

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

{{ EmbedLiveSample("Anpassen der Textrichtung und Linienlayoutordnung", "100%", "180") }}

## Siehe auch

- Das [`<input>`](/de/docs/Web/HTML/Element/input)-Element.
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}}, und {{htmlelement("select")}}.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [Gestaltung von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
