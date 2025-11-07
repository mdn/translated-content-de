---
title: Erstellen von vertikalen Formular-Steuerelementen
short-title: Vertikale Formular-Steuerelemente
slug: Web/CSS/Guides/Writing_modes/Vertical_controls
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der Leitfaden erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden, um vertikale Formular-Steuerelemente zu erstellen und zu konfigurieren. Dazu gehören:

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und button-Eingabetypen wie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Allgemeine Technik

In modernen Browsern kann die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert gesetzt werden, um Formular-Steuerelemente mit textlichen Zeichen, die normalerweise horizontal sind (zum Beispiel in lateinischen Sprachen), vertikal anzuzeigen, wobei der Text in einem Winkel von 90 Grad zur Standardrichtung angezeigt wird. Normalerweise vertikale Schriftzeichen, wie zum Beispiel in Chinesisch oder Japanisch, sind in dieser Hinsicht nicht betroffen.

Das ist nützlich, wenn vertikale Sprachformulare erstellt werden.

Konkret:

- `writing-mode: vertical-lr` erstellt vertikale Formular-Steuerelemente mit einer Blockflussrichtung von links nach rechts, was bedeutet, dass in Steuerelementen mit Umbrüchen oder mehreren Textzeilen nachfolgende Zeilen rechts von vorherigen erscheinen.
- `writing-mode: vertical-rl` erstellt vertikale Formular-Steuerelemente mit einer Blockflussrichtung von rechts nach links, was bedeutet, dass in Steuerelementen mit Umbrüchen oder mehreren Textzeilen nachfolgende Zeilen links von vorherigen erscheinen.

Sie könnten eine [Transformierung](/de/docs/Web/CSS/Reference/Properties/transform) verwenden, um die Steuerelemente um 90 Grad zu drehen, aber das würde die Steuerelemente in ihre eigene Ebene setzen und unbeabsichtigte Layout-Nebeneffekte wie das Überlappen anderer Inhalte verursachen. Die Verwendung von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Obwohl die Eigenschaft {{cssxref("writing-mode")}} gut unterstützt wird, erhielt das Erstellen von vertikal ausgerichteten Formular-Steuerelementen mit `writing-mode` erst 2024 volle Browser-Unterstützung.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Schriftzeichen (zum Beispiel in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um auf ihrer Seite anzuzeigen, während horizontale Schriftzeichen (zum Beispiel in lateinischen Sprachen) von diesen Werten nicht beeinflusst werden.

Zusätzlich kann die Eigenschaft {{cssxref("direction")}} verwendet werden, um die Richtung des Inhalts innerhalb der Steuerelemente zu steuern:

- `direction: ltr` bewirkt, dass der Inhalt oben beginnt und sich nach unten bewegt.
- `direction: rtl` bewirkt, dass der Inhalt unten beginnt und sich nach oben bewegt.

Die Eigenschaft `direction` kann verwendet werden, um die **zeilenbasierte Grundrichtung** festzulegen — die primäre Richtung, in der der Inhalt auf einer Linie angeordnet ist, welche die Seiten definiert, auf denen der "Anfang" und das "Ende" einer Linie sind. Bei textbasierten Formular-Steuerelementen ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. Bei nicht-textbasierten Steuerelementen wie Bereichsschiebereglern legt `direction` die Richtung fest, in der das Steuerelement gezeichnet wird. Zum Beispiel sorgt `direction: ltr` bei einem vertikalen Schieberegler dafür, dass der niedrigste Wert oben und der höchste Wert unten auf dem Schieberegler dargestellt wird.

Die untenstehenden Abschnitte zeigen, wie verschiedene Arten von vertikalen Formular-Steuerelementen erstellt werden, zusammen mit Beispielen für jede Art. Konsultieren Sie die Browser-Kompatibilitätsinformationen auf jeder der verlinkten Referenzseiten, um die genauen Unterstützungsinformationen für jede Art herauszufinden.

## Bereichsschieberegler, Meter und Fortschrittsbalken

Schauen wir uns das Erstellen von vertikalen Bereichsschiebereglern, Metern und Fortschrittsbalken an.

### Einfaches Beispiel

Eine typische Gruppe von visuellen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schiebereglern, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Steuerelementen wird folgendermaßen erstellt:

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
> Best Practice ist es, für jedes Formular-Steuerelement ein {{htmlelement("label")}}-Element einzuschließen, um eine sinnvolle Textbeschreibung mit jedem Feld für Barrierefreiheitszwecke zu verknüpfen (siehe [Verwenden Sie sinnvolle Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben das hier nicht gemacht, da sich dieser Artikel ausschließlich auf die Aspekte der visuellen Darstellung von Formular-Steuerelementen konzentriert, aber Sie sollten sicherstellen, dass Sie dies im Produktivcode tun.

Um die Steuerelemente vertikal anzuzeigen, können wir CSS wie folgt verwenden:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (und `vertical-rl`) führt dazu, dass die Steuerelemente in modernen Browsern vertikal angezeigt werden.

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Zeichnen des Steuerelements von unten nach oben

Standardmäßig haben die Steuerelemente einen {{cssxref("direction")}}-Wert von `ltr`. Dies führt dazu, dass Ihre Schieberegler, Zähler und Fortschrittsbalken von oben nach unten gezeichnet werden, wie oben zu sehen.

Sie können dies ändern, indem Sie `direction: rtl` einstellen — dies bewirkt, dass sie stattdessen von unten nach oben gezeichnet werden:

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

### Erstellen von vertikalen Bereichsschiebereglern in älteren Browsern

In älteren Browsern, die die Erstellung von vertikalen Formular-Steuerelementen mit `writing-mode` und `direction` nicht unterstützen, gibt es begrenzte Alternativen. Die Folgenden funktionieren nur auf `<input type="range">`, sodass der Text von unten nach oben fließt — sie haben keine Wirkung auf `<meter>` und `<progress>` Elemente:

- Die nicht standardisierte [`appearance: slider-vertical`](/de/docs/Web/CSS/Reference/Properties/appearance)-Eigenschaft kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht standardisierte `orient="vertical"` Attribut kann dem `<input type="range">` Element selbst in älteren Versionen von Firefox hinzugefügt werden.

Der HTML-Code für dieses Beispiel enthält nur einen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler, mit `orient="vertical"` hinzugefügt, um ihn in älteren Firefox-Versionen vertikal anzuzeigen:

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## Auswahlelemente

Dieser Abschnitt zeigt, wie mit vertikalen {{htmlelement("select")}}-Elementen umgegangen wird.

### Einfaches Auswahlbeispiel

Der folgende HTML-Code erstellt zwei `<select>`-Elemente, eines, bei dem eine einzelne Auswahl getroffen werden kann, und eines mit mehreren Auswahlen:

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Anpassen der Textrichtung und der Optionsreihenfolge

Es ist erneut möglich, einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` zu verwenden, um die Textrichtung von unten nach oben statt der Standardrichtung von oben nach unten zu setzen.

Es ist auch wichtig zu beachten, dass im obigen Beispiel die Inline-Richtung für die Auswahloptionen von rechts nach links geht, da wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, erscheint der `<option>`-Text von links nach rechts.

Wir werden diese beiden Anwendungsfälle mit drei Listbox (`multiple`) `<select>`-Elementen erkunden, um die Effekte einfach nebeneinander vergleichen zu können.

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

1. `writing-mode: vertical-rl`, zeigt sich wie im vorherigen Beispiel — Text fließt von oben nach unten, und Optionen zeigen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, mit den Optionen, die von rechts nach links gehen, aber den Textfluss von unten nach oben umkehren.
3. `writing-mode: vertical-lr`, mit dem Text von oben nach unten, während die Optionsreihenfolge von links nach rechts umgekehrt wird.

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

Dieser Abschnitt zeigt, wie mit vertikalen {{htmlelement("button")}}-Elementen umgegangen wird. Beachten Sie, dass, obwohl wir in den untenstehenden Beispielen nur ein `<button>`-Element verwendet haben, das Verhalten bei anderen Elementen, die Buttons erstellen, gleich ist, wie etwa den [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen [`button`](/de/docs/Web/HTML/Reference/Elements/input/button), [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Einfaches Button-Beispiel

Der folgende HTML-Code erstellt zwei `<button>`-Elemente, eines mit einer einzigen Textzeile und eines mit drei:

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Anpassen der Textzeilenreihenfolge bei Buttons

Wenn Sie den `writing-mode`-Wert von `vertical-rl` in `vertical-lr` ändern, erscheinen nachfolgende Textzeilen rechts von vorhergehenden, anstatt links.

Dieses Beispiel verwendet zwei Kopien des Buttons mit drei Textzeilen, den wir im vorherigen Beispiel gesehen haben, damit Sie die Auswirkungen der Änderung des Schreibmodus leicht sehen können:

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

Im CSS setzen wir `writing-mode: vertical-rl` auf den ersten Button, um die Zeilenreihenfolge von rechts nach links anzuordnen. Auf den zweiten Button setzen wir `writing-mode: vertical-lr`, um die Zeilenreihenfolge umzukehren — von links nach rechts:

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

## Textbasierte Formular-Steuerelemente

Zu guter Letzt schauen wir uns an, wie mit vertikalen {{htmlelement("textarea")}}s und textlichen `<input>`-Typen umgegangen wird. Beachten Sie, dass, obwohl der einzige `<input>`-Typ, den wir einbeziehen, ein `<input type="text">`-Element in den untenstehenden Beispielen ist, das Verhalten bei anderen textuellen [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Typen wie [`password`](/de/docs/Web/HTML/Reference/Elements/input/button), [`number`](/de/docs/Web/HTML/Reference/Elements/input/reset), [`url`](/de/docs/Web/HTML/Reference/Elements/input/submit) etc. gleich ist.

### Einfaches Textfeld und Textareabeispiel

Der folgende HTML-Code erstellt ein `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

Um das Input- und das Textarea-Element vertikal anzuzeigen, können wir CSS wie folgt verwenden:

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

### Anpassen der Textrichtung und Zeilenlayouts

Sie können einen {{cssxref("direction")}}-Eigenschaftswert von `rtl` verwenden, um die Textrichtung von der Standardrichtung oben nach unten in unten nach oben zu ändern. Sie können auch `writing-mode` auf `vertical-lr` statt `vertical-rl` setzen, um mehrere Textzeilen in `<textarea>`s von links nach rechts anzuzeigen, anstatt der Standardrichtung rechts nach links.

Dieses Beispiel verwendet drei Kopien der gleichen Textelemente, die wir im vorherigen Beispiel gesehen haben, damit Sie die Auswirkungen der Änderung von `direction` und `writing-mode` wie oben besprochen leicht sehen können:

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

1. `writing-mode: vertical-rl`, um es genau wie im vorherigen Beispiel anzuzeigen — der Text fließt von oben nach unten, und die Zeilen fließen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links fließen zu lassen, aber den Textfluss von unten nach oben umkehren.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten fließen zu lassen, aber den Fluss der Zeilen von links nach rechts umzukehren. Beachten Sie, dass dies keine Auswirkungen auf `<input type="text">`-Elemente hat, da sie immer einzelne Zeilen sind.

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
- [Lernen: Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
