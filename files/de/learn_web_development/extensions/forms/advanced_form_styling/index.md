---
title: Fortgeschrittene Formulargestaltung
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 0daae80dae181e8156f76439b0df5749f1501bb3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS gemacht werden kann, um die Arten von Formularsteuerungen zu stylen, die schwieriger zu stylen sind – die Kategorien "schlecht" und "hässlich". Wie wir im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons ziemlich einfach zu stylen; nun werden wir uns den problematischeren Teilen widmen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Wiederholung dessen, was wir im vorherigen Artikel gesagt haben, haben wir:

**Das Schlechte**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder spezifischere Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können mit CSS nicht vollständig gestylt werden. Dazu gehören:

- Elemente, die bei der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Selektions-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Sammlung von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalten wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zunächst über die {{cssxref("appearance")}}-Eigenschaft sprechen, die nützlich ist, um all das oben Genannte besser stilisierbar zu machen.

## `appearance`: Kontrolle über systemeigene Stilsetzung

Im vorherigen Artikel haben wir erwähnt, dass das Styling von Webformular-Steuerelementen historisch stark vom zugrunde liegenden Betriebssystem abgeleitet war, was einen Teil der Schwierigkeiten bei der Anpassung des Aussehens dieser Steuerelemente erklärt.

Die {{cssxref("appearance")}}-Eigenschaft wurde eingeführt, um zu kontrollieren, welches OS- oder systemeigene Styling auf Webformular-Steuerelemente angewendet wurde. Der mit Abstand hilfreichste Wert und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass das System-Styling so weit wie möglich auf ein von Ihnen angewendetes Steuerelement angewendet wird, und lässt Sie die Stile selbst mit CSS aufbauen.

Zum Beispiel nehmen wir folgende Steuerelemente:

```html
<form>
  <p>
    <label for="search">search: </label>
    <input id="search" name="search" type="search" />
  </p>
  <p>
    <label for="text">text: </label>
    <input id="text" name="text" type="text" />
  </p>
  <p>
    <label for="date">date: </label>
    <input id="date" name="date" type="datetime-local" />
  </p>
  <p>
    <label for="radio">radio: </label>
    <input id="radio" name="radio" type="radio" />
  </p>
  <p>
    <label for="checkbox">checkbox: </label>
    <input id="checkbox" name="checkbox" type="checkbox" />
  </p>
  <p><input type="submit" value="submit" /></p>
  <p><input type="button" value="button" /></p>
</form>
```

Das Anwenden des folgenden CSS auf sie entfernt systemeigene Styles.

```css
input {
  appearance: none;
}
```

Das folgende Live Beispiel zeigt Ihnen, wie sie auf Ihrem System aussehen — standardmäßig links und mit dem obigen CSS rechts angewendet.

```html hidden live-sample___appearance-tester
<div>
  <form>
    <div>
      <label for="search1">search: </label>
      <input id="search1" name="search1" type="search" />
    </div>
    <div>
      <label for="text1">text: </label>
      <input id="text1" name="text1" type="text" />
    </div>
    <div>
      <label for="date1">date: </label>
      <input id="date1" name="date1" type="datetime-local" />
    </div>
    <div>
      <label for="radio1">radio: </label>
      <input id="radio1" name="radio1" type="radio" />
    </div>
    <div>
      <label for="checkbox1">checkbox: </label>
      <input id="checkbox1" name="checkbox1" type="checkbox" />
    </div>
    <div><input type="submit" value="submit" /></div>
    <div><input type="button" value="button" /></div>
  </form>
</div>
<div class="appearance">
  <form>
    <div>
      <label for="search2">search: </label>
      <input id="search2" name="search2" type="search" />
    </div>
    <div>
      <label for="text2">text: </label>
      <input id="text2" name="text2" type="text" />
    </div>
    <div>
      <label for="date2">date: </label>
      <input id="date2" name="date2" type="datetime-local" />
    </div>
    <div>
      <label for="radio2">radio: </label>
      <input id="radio2" name="radio2" type="radio" />
    </div>
    <div>
      <label for="checkbox2">checkbox: </label>
      <input id="checkbox2" name="checkbox2" type="checkbox" />
    </div>
    <div><input type="submit" value="submit" /></div>
    <div><input type="button" value="button" /></div>
  </form>
</div>
```

```css hidden live-sample___appearance-tester
body {
  margin: 20px auto;
  max-width: 800px;
  justify-content: space-around;
}

body,
form > div {
  display: flex;
}

form > div {
  margin-bottom: 20px;
}

.appearance input {
  appearance: none;
}
```

{{EmbedLiveSample("appearance-tester", '100%', 350)}}

In den meisten Fällen besteht die Wirkung darin, den stilisierten Rahmen zu entfernen, was das Styling mit CSS ein wenig erleichtert, aber nicht essentiell ist. In einigen Fällen, wie bei Optionsfeldern und Kontrollkästchen, wird es wesentlich nützlicher. Schauen wir uns das jetzt genauer an.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war besonders nützlich, um [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elemente konsistent zu stylen. Ohne ihn erlaubte Safari nicht, {{cssxref("height")}} oder {{cssxref("font-size")}}-Werte auf sie anzuwenden. Dies ist jedoch seit Safari 16 und später nicht mehr der Fall. Möglicherweise möchten Sie immer noch `input[type="search"]` explizit mit `appearance: none;` anvisieren, wenn Ihre Browser-Support-Matrix Safari-Versionen älter als 16 einschließt.

In Suchfeldern verschwindet der "x"-Löschen-Button, der erscheint, wenn der Wert nicht null ist, in Edge und Chrome, wenn das Eingabefeld den Fokus verliert, bleibt aber in Safari erhalten. Um ihn via CSS zu entfernen, können Sie diese Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Festlegung der Tönung von Formularsteuerfarben mit `accent-color`

Wenn Sie nur die primäre Tönungsfarbe von Kontrollkästchen, Optionsfeldern oder Range-Slidern stylen möchten, können Sie {{cssxref("accent-color")}} verwenden, ohne `appearance: none` zu benötigen. Dies ist nützlich für grundlegende Stylingfälle, da die Steuerelemente ihre systemeigene Stilsetzung beibehalten, jedoch mit einer veränderten Hauptfarbe.

```html live-sample___accent-color
<form>
  <fieldset>
    <legend>Fruit preferences</legend>

    <p>
      <label>
        <input type="checkbox" name="fruit" value="cherry" checked />
        I like cherry
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="favorite" value="banana" checked />
        Banana is my favorite
      </label>
    </p>
    <p>
      <label>
        How much do you like fruit?
        <input type="range" name="amount" min="0" max="10" value="7" />
      </label>
    </p>
  </fieldset>
</form>
```

```css live-sample___accent-color
input {
  accent-color: rebeccapurple;
}
```

{{EmbedLiveSample("accent-color", '100%', 200)}}

Weil die Steuerelemente ihr natives Erscheinungsbild behalten, folgen sie Plattformkonventionen — einschließlich Modi mit erzwungenen Farben — ohne weiteres Zutun Ihrerseits. Außerdem wählt der Browser automatisch eine komplementäre Sekundärfarbe mit genügend Kontrast zur `accent-color`, um das Steuerelement zugänglich zu halten. Spielen Sie mit dem obigen Live-Beispiel und setzen Sie einige helle und dunkle `accent-color`-Werte, um die Effekte zu sehen.

### Styling von Kontrollkästchen und Optionsfeldern mit `appearance`

Das weitergehende Styling eines Kontrollkästchens oder Optionsfelds erfordert mehr Aufwand. Die Standardgrößen von Kontrollkästchen und Optionsfeldern sollten eigentlich nicht geändert werden, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen. Manche vergrößern die Steuerelementgröße, andere behalten sie bei und fügen zusätzlichen Raum um das Steuerelement herum hinzu.

Ein viel besserer Ansatz besteht darin, das standardmäßige Erscheinungsbild von Kontrollkästchen und Optionsfeldern mit {{cssxref("appearance", "appearance: none;")}} vollständig zu entfernen und dann eigene Styles zu ihren verschiedenen Zuständen hinzuzufügen.

Nehmen wir dieses Beispiel-HTML:

```html live-sample___checkboxes-styled
<form>
  <fieldset>
    <legend>Fruit preferences</legend>

    <p>
      <label>
        <input type="checkbox" name="fruit" value="cherry" />
        I like cherry
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit" value="banana" disabled />
        I can't like banana
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit" value="strawberry" />
        I like strawberry
      </label>
    </p>
  </fieldset>
</form>
```

Lassen Sie uns diese mit einem benutzerdefinierten Kontrollkästchen-Design stylen. Wir beginnen damit, die ursprünglichen Kontrollkästchen-Stile zu entfernen:

```css live-sample___checkboxes-styled
input[type="checkbox"] {
  appearance: none;
}
```

Wir können dann die {{cssxref(":checked")}}- und {{cssxref(":disabled")}}-Pseudoklassen verwenden, um das Erscheinungsbild unserer benutzerdefinierten Kontrollkästchen zu ändern, wenn sich ihr Zustand ändert:

```css live-sample___checkboxes-styled
input[type="checkbox"] {
  position: relative;
  width: 1em;
  height: 1em;
  border: 1px solid gray;
  /* Adjusts the position of the checkboxes on the text baseline */
  vertical-align: -2px;
  /* Set here so that Windows' High-Contrast Mode can override */
  color: green;
}

input[type="checkbox"]::before {
  content: "✔";
  position: absolute;
  font-size: 1.2em;
  right: -1px;
  top: -0.3em;
  visibility: hidden;
}

input[type="checkbox"]:checked::before {
  /* Use `visibility` instead of `display` to avoid recalculating layout */
  visibility: visible;
}

input[type="checkbox"]:disabled {
  border-color: black;
  background: #dddddd;
  color: gray;
}
```

Sie erfahren mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die obigen bewirken Folgendes:

- `:checked` — das Kontrollkästchen (oder Optionsfeld) befindet sich im ausgewählten Zustand — der Benutzer hat darauf geklickt/aktiviert es.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) befindet sich im deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/custom-radio-styles/index.html): Benutzerdefiniertes Optionsfeld-Styling.
- [Umschaltbeispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Schalter gestylt ist.

## Was kann man mit den "hässlichen" Elementen machen?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer gründlich zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) sowie rückmeldeorientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standardansichten in verschiedenen Browsern haben, und obwohl Sie sie in gewisser Weise stylen können, sind einige Teile ihrer Interna unmöglich zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden im Look-and-Feel zu leben, können Sie mit einfachen Styles einiges verbessern. Dies beinhaltet eine konsistente Größenanpassung und Gestaltung von Eigenschaften wie `background-color` und die Verwendung von `appearance`, um systemeigene Styles zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Funktionen in Aktion zeigt:

```html hidden live-sample___ugly-styling
<form>
  <div>
    <label for="select">Select box:</label>
    <div class="select-wrapper">
      <select id="select" name="select">
        <option>Banana</option>
        <option>Cherry</option>
        <option>Lemon</option>
      </select>
    </div>
  </div>
  <div>
    <label for="myFruit">"Favorite fruit?" datalist:</label>
    <input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
    <datalist id="mySuggestion">
      <option>Apple</option>
      <option>Banana</option>
      <option>Blackberry</option>
      <option>Blueberry</option>
      <option>Lemon</option>
      <option>Lychee</option>
      <option>Peach</option>
      <option>Pear</option>
    </datalist>
  </div>
  <div>
    <label for="date1">Datetime local: </label>
    <input id="date1" name="date1" type="datetime-local" />
  </div>
  <div>
    <label for="range">Range: </label>
    <input id="range" name="range" type="range" />
  </div>
  <div>
    <label for="color">Color: </label>
    <input id="color" name="color" type="color" />
  </div>
  <div>
    <label for="file">File picker: </label>
    <input id="file" name="file" type="file" multiple />
    <ul id="file-list"></ul>
  </div>
  <div>
    <label for="progress">Progress: </label>
    <progress max="100" value="75" id="progress">75/100</progress>
  </div>
  <div>
    <label for="meter">Meter: </label>
    <meter
      id="meter"
      min="0"
      max="100"
      value="75"
      low="33"
      high="66"
      optimum="50">
      75
    </meter>
  </div>
  <div><button>Submit?</button></div>
</form>
```

{{EmbedLiveSample("ugly-styling", '100%', 750)}}

Sie können auch die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

Dieses Beispiel hat das folgende CSS darauf angewendet:

```css live-sample___ugly-styling
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

form > div {
  margin-bottom: 20px;
}

select {
  appearance: none;
  width: 100%;
  height: 100%;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 3px;
  right: 10px;
  position: absolute;
}

button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

label {
  margin-bottom: 5px;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

Wir haben der Seite etwas JavaScript hinzugefügt, das die von der Dateiauswahl ausgewählten Dateien unterhalb des Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der Referenzseite zu [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) zu finden ist:

```js live-sample___ugly-styling
const fileInput = document.querySelector("#file");
const fileList = document.querySelector("#file-list");

fileInput.addEventListener("change", updateFileList);

function updateFileList() {
  while (fileList.firstChild) {
    fileList.removeChild(fileList.firstChild);
  }

  const curFiles = fileInput.files;

  if (!(curFiles.length === 0)) {
    for (const file of curFiles) {
      const listItem = document.createElement("li");
      listItem.textContent = `File name: ${file.name}; file size: ${returnFileSize(file.size)}.`;
      fileList.appendChild(listItem);
    }
  }
}

function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  }
  return `${(number / 1e6).toFixed(1)} MB`;
}
```

### "Globale" Styles

Im vorherigen Beispiel haben wir es ziemlich gut geschafft, unsere hässlichen Steuerelemente über moderne Browser hinweg einheitlich aussehen zu lassen.

Wir haben einige globale Normalisierungs-CSS auf alle Steuerelemente und deren Labels angewendet, damit sie auf die gleiche Weise skaliert werden, die Schrift ihrer Eltern übernehmen usw., wie im vorherigen Artikel erwähnt:

```css
button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}
```

Wir haben auch einigen Steuerelementen, wo es sinnvoll ist, einheitliche Schatten und abgerundete Ecken hinzugefügt:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Range-Typen, Fortschrittsbalken und Metern fügen sie nur einen hässlichen Kasten um den Steuerungsbereich hinzu, sodass es keinen Sinn ergibt.

Lassen Sie uns einige Einzelheiten zu diesen Steuerelementtypen besprechen und dabei auf Schwierigkeiten hinweisen.

### Selects und Datalists

Einige Browser unterstützen jetzt [Anpassbare Selektions-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Sammlung von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalten wie bei regulären DOM-Elementen ermöglichen. In unterstützten Browsern und Codebasen müssen Sie sich nicht mehr um die älteren Techniken kümmern, die unten für `<select>`-Elemente beschrieben werden.

Das Styling von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) erlaubt ein akzeptables Maß an Anpassung, vorausgesetzt, Sie wollen das Aussehen und Verhalten nicht zu sehr von den Standards abweichen lassen. Wir haben es geschafft, dass die Boxen recht einheitlich und konsistent aussehen. Das Steuerelement, das die Datalist aufruft, ist ohnehin ein `<input type="text">`, also wussten wir, dass dies kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Erstens unterscheidet sich das "Pfeil"-Icon des Selects, das anzeigt, dass es sich um ein Dropdown handelt, zwischen den Browsern. Es neigt auch dazu sich zu ändern, wenn Sie die Größe der Select-Box erhöhen oder sie in hässlicher Weise neu skalieren. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Icon vollständig zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Icon mit generierten Inhalten erstellt. Wir haben eine zusätzliche Hülle um das Steuerelement gelegt, da {{cssxref("::before")}}/{{cssxref("::after")}} nicht auf `<select>`-Elementen funktionieren (ihre Inhalte werden vollständig vom Browser kontrolliert):

```html
<label for="select">Select a fruit</label>
<div class="select-wrapper">
  <select id="select" name="select">
    <option>Banana</option>
    <option>Cherry</option>
    <option>Lemon</option>
  </select>
</div>
```

Wir haben dann generierte Inhalte verwendet, um einen kleinen Abwärtspfeil zu erzeugen, und ihn mit Positionierung an die richtige Stelle gebracht:

```css
.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
```

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Feld haben, das erscheint und die Optionen enthält, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die auf dem Elternteil eingestellte Schriftart erben, aber Sie können nicht Dinge wie Abstände und Farben setzen. Das Gleiche gilt für die Autovervollständigungsliste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über das Option-Styling benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen. Im Fall von `<select>` können Sie auch das `multiple`-Attribut verwenden, das alle Optionen auf der Seite anzeigt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise auch nicht zu dem Design, das Sie anstreben, aber es ist erwähnenswert!

### Datumseingabetypen

Die Datumseingabetypen ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle das gleiche Hauptproblem. Die eigentliche enthaltene Box ist genauso einfach zu stylen wie jede Texteingabe, und das, was wir in diesem Demo haben, sieht gut aus.

Jedoch sind die internen Teile des Steuerelements (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Drehregler, den Sie verwenden können, um Werte zu erhöhen/verringern) überhaupt nicht stylnar, und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich die volle Kontrolle über das Styling benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen.

> [!NOTE]
> [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) hat ebenfalls einen Drehregler, und seine internen Teile sind genauso wenig zu stylen. Wenn Sie den Drehregler entfernen möchten, verwenden Sie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) mit [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode), um auf Geräten mit Touch-Keyboards eine numerische Tastatur anzuzeigen, und ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das Eingabewerte auf eine Nummer beschränkt. Siehe auch [`<input type="number">` > Barrierefreiheit](/de/docs/Web/HTML/Reference/Elements/input/number#accessibility).

### Range Eingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist lästig zu stylen. Sie können etwas wie das Folgende verwenden, um den Standardschieberegler-Track komplett zu entfernen und ihn durch einen benutzerdefinierten Stil zu ersetzen (in diesem Fall ein dünner roter Track):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Schiebereglers zu ändern — um vollständige Kontrolle über das Range-Styling zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, einschließlich mehrerer nicht standardmäßiger, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für eine ausführliche Beschreibung dessen an, was gebraucht wird.

### Farbeingabetypen

Eingabesteuerelemente vom Typ Farbe sind nicht allzu schlecht. In unterstützenden Browsern tendieren sie dazu, Ihnen einen Block aus Vollfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen, sodass nur der Farbblock verbleibt, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine maßgeschneiderte Lösung ist jedoch der einzige Weg, um etwas signifikant Abweichendes zu bekommen.

### Datei-Eingabetypen

Datei-Eingaben sind im Allgemeinen in Ordnung — es ist ziemlich einfach, etwas zu erstellen, das sich gut in den Rest der Seite einfügt. Die Zeile, die als Teil des Steuerelements ausgegeben wird, übernimmt die Schriftart des Übergeordneten, wenn Sie die Eingabe entsprechend einstellen, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen auf jede gewünschte Weise stylen.

Die Schaltfläche, die Sie zum Öffnen des Datei-Auswahl-Widgets drücken, kann mit dem {{cssxref("::file-selector-button")}}-Pseudoelement gestylt werden, das die gleichen Eigenschaften wie jede andere Schaltfläche akzeptiert:

```html live-sample___file-selector-button
<form>
  <label for="avatar">Choose a profile picture</label>
  <input id="avatar" name="avatar" type="file" />
</form>
```

```css live-sample___file-selector-button
input[type="file"]::file-selector-button {
  border: 1px solid darkgrey;
  border-radius: 5px;
  background: linear-gradient(to bottom, #eeeeee, #cccccc);
  padding: 0.25em 0.75em;
  font: inherit;
}
```

{{EmbedLiveSample("file-selector-button", '100%', 100)}}

Sie können den Text neben der Schaltfläche — die Nachricht "keine Datei ausgewählt" — oder den angezeigten Dateinamen nach der Auswahl nicht stylen. Der Browser generiert diesen Text und macht ihn für CSS nicht zugänglich. Um dieses Problem zu umgehen, verwenden Sie das Label des Steuerelements und die Tatsache, dass ein Klick auf das Label das Steuerelement aktiviert.

Sie können die tatsächliche Formulareingabe mit so etwas verbergen:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so stylen, dass es wie eine Schaltfläche wirkt, die, wenn sie gedrückt wird, den Datei-Auswahldialog wie erwartet öffnet:

```css
label[for="file"] {
  box-shadow: 1px 1px 3px #cccccc;
  background: linear-gradient(to bottom, #eeeeee, #cccccc);
  border: 1px solid darkgrey;
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, white, #dddddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #cccccc;
}
```

Sie können das Ergebnis des oben genannten CSS-Stylings im folgenden Live-Beispiel sehen.

```html hidden live-sample___styled-file-picker
<form>
  <div>
    <label for="file">Choose a file to upload</label>
    <input id="file" name="file" type="file" multiple />
    <ul id="file-list"></ul>
  </div>
  <div><button>Submit?</button></div>
</form>
```

```css hidden live-sample___styled-file-picker
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

form > div {
  margin-bottom: 20px;
}

button,
label,
input {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}

label[for="file"] {
  box-shadow: 1px 1px 3px #cccccc;
  background: linear-gradient(to bottom, #eeeeee, #cccccc);
  border: 1px solid darkgrey;
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, white, #dddddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #cccccc;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___styled-file-picker
const fileInput = document.querySelector("#file");
const fileList = document.querySelector("#file-list");

fileInput.addEventListener("change", updateFileList);

function updateFileList() {
  while (fileList.firstChild) {
    fileList.removeChild(fileList.firstChild);
  }

  let curFiles = fileInput.files;

  if (!(curFiles.length === 0)) {
    for (const file of curFiles) {
      const listItem = document.createElement("li");
      listItem.textContent = `File name: ${file.name}; file size: ${returnFileSize(file.size)}.`;
      fileList.appendChild(listItem);
    }
  }
}

function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  }
  return `${(number / 1e6).toFixed(1)} MB`;
}
```

{{EmbedLiveSample("styled-file-picker", '100%', 200)}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu starten und den vollständigen Quellcode zu überprüfen.

### Meter und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite setzen. Aber darüber hinaus sind sie wirklich schwer zu stylen. Sie gehen nicht mit Höheneinstellungen konsistent um, sowohl zwischen sich selbst als auch zwischen Browsern, Sie können den Hintergrund färben, aber nicht die Vordergrundleiste, und `appearance: none` auf ihnen macht die Dinge eher schlechter als besser.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung zu erstellen, um das Styling dieser Funktionen zu steuern, oder eine Drittanbieterlösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Das Styling von HTML-Formularen stellt einige Herausforderungen dar; es gibt jedoch Möglichkeiten, viele davon zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Vorerst ist die beste Lösung, mehr darüber zu lernen, wie verschiedene Browser CSS unterstützen, wenn es auf HTML-Formularsteuerelemente angewendet wird.

Im nächsten Artikel werden wir untersuchen, wie man [vollständig angepasste `<select>`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dafür verfügbaren modernen HTML- und CSS-Funktionen erstellt.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
