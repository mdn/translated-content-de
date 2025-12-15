---
title: Erstellen von vertikalen Formularelementen
short-title: Vertikale Formularelemente
slug: Web/CSS/Guides/Writing_modes/Vertical_controls
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Der Leitfaden erklärt, wie Sie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwenden können, um vertikale Formularelemente zu erstellen und zu konfigurieren. Dazu gehören:

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler, {{htmlelement("progress")}}-Balken und {{htmlelement("meter")}}-Elemente.
- {{htmlelement("select")}}-Elemente.
- {{htmlelement("button")}}-Elemente und andere Button-Input-Typen wie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit).
- {{htmlelement("textarea")}}-Elemente und textbasierte Eingabetypen wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Allgemeine Technik

In modernen Browsern kann die Eigenschaft {{cssxref("writing-mode")}} auf einen vertikalen Wert gesetzt werden, um Formularelemente mit normalerweise horizontalen Textzeichen (z.B. in lateinischen Sprachen) vertikal anzuzeigen. Der Text wird dann in einem 90-Grad-Winkel zur Standardrichtung angezeigt. Normalerweise vertikale Textzeichen, beispielsweise in Chinesisch oder Japanisch, sind davon unberührt.

Dies ist nützlich beim Erstellen von Formularen für vertikale Sprachen.

Konkret:

- `writing-mode: vertical-lr` erstellt vertikale Formularelemente mit einer Blockflussrichtung von links nach rechts, was bedeutet, dass in Elementen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen rechts von vorherigen Zeilen erscheinen.
- `writing-mode: vertical-rl` erstellt vertikale Formularelemente mit einer Blockflussrichtung von rechts nach links, was bedeutet, dass in Elementen mit Umbruch oder mehreren Textzeilen nachfolgende Zeilen links von vorherigen Zeilen erscheinen.

Sie könnten [transform](/de/docs/Web/CSS/Reference/Properties/transform) verwenden, um die Elemente um 90 Grad zu drehen, aber das würde die Elemente in ihre eigene Ebene versetzen und unbeabsichtigte Layout-Effekte wie Überlappungen anderer Inhalte verursachen. Die Verwendung von `writing-mode` bietet eine zuverlässigere Lösung.

> [!NOTE]
> Während die Eigenschaft {{cssxref("writing-mode")}} gut unterstützt wird, erhielt das Erstellen vertikal orientierter Formularelemente mit `writing-mode` erst 2024 volle Browser-Unterstützung.

> [!NOTE]
> Die experimentellen Werte `sideways-lr` und `sideways-rl` haben eine ähnliche Wirkung wie `vertical-lr` und `vertical-rl`, außer dass normalerweise vertikale Textzeichen (z.B. in Chinesisch oder Japanisch) um 90 Grad gedreht werden, um auf ihrer Seite angezeigt zu werden, während horizontale Textzeichen in lateinischen Sprachen von diesen Werten unberührt bleiben.

Darüber hinaus kann die Eigenschaft {{cssxref("direction")}} verwendet werden, um die Richtung der Inhalte innerhalb der Elemente zu steuern:

- `direction: ltr` lässt die Inhalte oben beginnen und nach unten fließen.
- `direction: rtl` lässt die Inhalte unten beginnen und nach oben fließen.

Die Eigenschaft `direction` kann verwendet werden, um die **in-line-Basisausrichtung** festzulegen — die primäre Richtung, in der Inhalte in einer Zeile angeordnet sind, was bestimmt, auf welchen Seiten der "Anfang" und das "Ende" einer Zeile sind. Für textbasierte Formularelemente ist der Unterschied offensichtlich — der Textfluss beginnt oben oder unten. In nicht-textbasierten Elementen wie Schiebereglern legt `direction` die Richtung fest, in der das Element gezeichnet wird. Zum Beispiel setzt `direction: ltr` auf einem vertikalen Schieberegler den niedrigsten Wert oben und den höchsten Wert unten.

Die folgenden Abschnitte zeigen, wie verschiedene Arten von vertikalen Formularelementen erstellt werden, zusammen mit Beispielen für jedes. Konsultieren Sie die Informationen zur Browser-Kompatibilität auf jeder der verlinkten Referenzseiten, um die genauen Unterstützungsinformationen für jeden Typ zu erfahren.

## Bereichsregler, Messgeräte und Fortschrittsbalken

Schauen wir uns die Erstellung von vertikalen Bereichsreglern, Messgeräten und Fortschrittsbalken an.

### Einfaches Beispiel

Ein typisches Set von visuellen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Reglern, {{htmlelement("progress")}}- und {{htmlelement("meter")}}-Elementen wird so erstellt:

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
> Best Practice ist es, ein {{htmlelement("label")}}-Element für jedes Formularelement einzuschließen, um jedem Feld aus Gründen der Zugänglichkeit eine aussagekräftige Textbeschreibung zuzuordnen (siehe [Verwendung aussagekräftiger Textlabels](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben das hier nicht getan, da sich dieser Artikel ausschließlich auf Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten sicherstellen, dass Sie dies im Produktionscode tun.

Um die Elemente vertikal anzuzeigen, können wir solchen CSS verwenden:

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

{{ EmbedLiveSample("Einfaches Beispiel", "100%", "170") }}

### Zeichnen des Elements von unten nach oben

Standardmäßig haben die Elemente einen {{cssxref("direction")}}-Wert von `ltr`. Dies bewirkt, dass Ihre Schieberegler, Messgeräte und Fortschrittsbalken von oben nach unten gezeichnet werden, wie oben zu sehen ist.

Sie können dies ändern, indem `direction: rtl`‘ eingestellt wird — dies bewirkt, dass sie statt von unten nach oben gezeichnet werden:

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

{{ EmbedLiveSample("Zeichnen des Elements von unten nach oben", "100%", "170") }}

### Erstellen von vertikalen Bereichsreglern in älteren Browsern

In älteren Browsern, die die Erstellung von vertikalen Formularelementen mit `writing-mode` und `direction` nicht unterstützen, stehen nur begrenzte Alternativen zur Verfügung. Die folgenden Optionen funktionieren nur auf `<input type="range">` und bewirken, dass der Text von unten nach oben fließt — sie haben keine Wirkung auf `<meter>`- und `<progress>`-Elemente:

- Die nicht-standardisierte Eigenschaft [`appearance: slider-vertical`](/de/docs/Web/CSS/Reference/Properties/appearance) kann in älteren Versionen von Safari und Chrome verwendet werden.
- Das nicht-standardisierte `orient="vertical"`-Attribut kann dem `<input type="range">`-Element selbst in älteren Versionen von Firefox hinzugefügt werden.

Das HTML für dieses Beispiel enthält nur einen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler, mit `orient="vertical"` hinzugefügt, um in älteren Firefox-Versionen vertikal angezeigt zu werden:

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" orient="vertical" />
</form>
```

Um die Elemente auch in älteren Versionen von Chrome und Safari vertikal anzuzeigen, können wir `appearance: slider-vertical` verwenden:

```css
input[type="range"] {
  margin-block-end: 20px;
  appearance: slider-vertical;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Erstellen von vertikalen Bereichsreglern in älteren Browsern", "100%", "190") }}

## Select-Elemente

Dieser Abschnitt zeigt, wie Sie mit vertikalen {{htmlelement("select")}}-Elementen umgehen können.

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

Um die Elemente vertikal anzuzeigen, können wir solchen CSS verwenden:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Einfaches Select-Beispiel", "100%", "130") }}

### Anpassung der Textrichtung und der Reihenfolge der Optionen

Es ist auch möglich, einen {{cssxref("direction")}}-Wert von `rtl` zu verwenden, um die Textrichtung von unten nach oben einzustellen, anstatt von oben nach unten.

Es ist auch erwähnenswert, dass in dem obigen Beispiel die Inline-Richtung für die Select-Optionen von rechts nach links geht, weil wir `writing-mode: vertical-rl` verwendet haben. Wenn wir stattdessen `writing-mode: vertical-lr` verwenden, wird der `<option>`-Text von links nach rechts angezeigt.

Wir werden diese beiden Anwendungsfälle mit drei Listenfeld-(`multiple`) `<select>`-Elementen erkunden, um die Effekte nebeneinander zu vergleichen.

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

Im CSS für dieses Beispiel setzen wir die folgenden Eigenschaften auf den drei Listenfeldern:

1. `writing-mode: vertical-rl`, der genau wie im vorherigen Beispiel angezeigt wird — Text fließt von oben nach unten, und Optionen werden von rechts nach links angezeigt.
2. `writing-mode: vertical-rl` und `direction: rtl`, wobei die Optionen von rechts nach links gehen, aber der Textfluss von unten nach oben umgekehrt wird.
3. `writing-mode: vertical-lr`, wobei der Text von oben nach unten geht und die Reihenfolge der Optionen von links nach rechts umgekehrt wird.

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

{{ EmbedLiveSample("Anpassung der Textrichtung und der Reihenfolge der Optionen", "100%", "200") }}

## Buttons

Dieser Abschnitt zeigt, wie Sie mit vertikalen {{htmlelement("button")}}-Elementen umgehen können. Beachten Sie, dass, obwohl wir in den untenstehenden Beispielen nur ein `<button>`-Element verwendet haben, das Verhalten für andere Elemente, die Buttons erstellen, wie [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen von [`button`](/de/docs/Web/HTML/Reference/Elements/input/button), [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit), dasselbe ist.

### Einfaches Button-Beispiel

Das folgende HTML erstellt zwei `<button>`-Elemente, eines mit einer einzigen Textzeile und eines mit drei Zeilen:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

Um die Buttons vertikal anzuzeigen, können wir solchen CSS verwenden:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Einfaches Button-Beispiel", "100%", "130") }}

### Anpassung der Zeilenreihenfolge des Button-Textes

Wenn Sie den `writing-mode`-Wert von `vertical-rl` auf `vertical-lr` ändern, erscheinen nachfolgende Textzeilen rechts von vorherigen Zeilen anstatt links.

Dieses Beispiel verwendet zwei Kopien des Drei-Zeilen-Buttons aus dem vorherigen Beispiel, so dass Sie die Effekte der Änderung des Schreibmodus leicht sehen können:

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

{{ EmbedLiveSample("Anpassung der Zeilenreihenfolge des Button-Textes", "100%", "160") }}

## Textbasierte Formularelemente

Zu guter Letzt schauen wir uns den Umgang mit vertikalen {{htmlelement("textarea")}}s und textuellen `<input>`-Arten an. Beachten Sie, dass, während das einzige `<input>`-Element, das wir einbeziehen, ein `<input type="text">`-Element in den untenstehenden Beispielen ist, das Verhalten für andere textuelle [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Arten dasselbe ist: [`password`](/de/docs/Web/HTML/Reference/Elements/input/button), [`number`](/de/docs/Web/HTML/Reference/Elements/input/reset), [`url`](/de/docs/Web/HTML/Reference/Elements/input/submit), usw.

### Einfaches Beispiel für Texteingabe und Textbereich

Das folgende HTML erstellt einen `<textarea>` und ein `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

Um die Eingabe- und Textbereichselemente vertikal anzuzeigen, können wir solchen CSS verwenden:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Einfaches Beispiel für Texteingabe und Textbereich", "100%", "130") }}

### Anpassung der Textrichtung und der Zeilenanordnung

Sie können einen {{cssxref("direction")}}-Wert von `rtl` verwenden, um die Textrichtung von der standardmäßigen Richtung von oben nach unten auf von unten nach oben zu ändern. Außerdem können Sie den `writing-mode` auf `vertical-lr` anstelle von `vertical-rl` setzen, um mehrere Textzeilen in `<textarea>`s von links nach rechts statt der Standardrichtung von rechts nach links erscheinen zu lassen.

Dieses Beispiel verwendet drei Kopien der gleichen Textelemente, die wir im vorherigen Beispiel gesehen haben, so dass Sie die Effekte der Änderung von `direction` und `writing-mode`, wie oben beschrieben, einfach sehen können:

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

1. `writing-mode: vertical-rl`, um es genau wie im vorherigen Beispiel anzuzeigen — Text fließt von oben nach unten, und Zeilen fließen von rechts nach links.
2. `writing-mode: vertical-rl` und `direction: rtl`, um die Zeilen von rechts nach links fließen zu lassen, aber den Textfluss von unten nach oben umzukehren.
3. `writing-mode: vertical-lr`, um den Text von oben nach unten fließen zu lassen, aber den Fluss der Zeilen umzukehren — von links nach rechts. Beachten Sie, dass dies keine Auswirkung auf `<input type="text">`-Elemente hat, da diese immer einzeilig sind.

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

{{ EmbedLiveSample("Anpassung der Textrichtung und der Zeilenanordnung", "100%", "180") }}

## Siehe auch

- Das [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element.
- Andere relevante Elemente: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}}, und {{htmlelement("select")}}.
- [Lernen: Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
