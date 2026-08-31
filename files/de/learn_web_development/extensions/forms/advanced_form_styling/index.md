---
title: Fortgeschrittene Formulargestaltung
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularsteuerelementen zu gestalten, die schwieriger zu stylen sind - die "schlechten" und "hässlichen" Kategorien. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons perfekt einfach zu stylen; jetzt werden wir uns mit den problematischeren Teilen befassen.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; zu lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Um das, was wir im vorherigen Artikel gesagt haben, zusammenzufassen, haben wir:

**Die schlechten**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder spezifischere Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Die hässlichen**: Einige Elemente können nicht vollständig mit CSS gestylt werden. Dazu gehören:

- Elemente, die bei der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Selektelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalten wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zuerst über die {{cssxref("appearance")}}-Eigenschaft sprechen, die nützlich ist, um all das oben Genannte besser stylisierbar zu machen.

## `appearance`: Kontrolle der Betriebssystem-Styling

Im vorherigen Artikel haben wir erwähnt, dass die Gestaltung von Webformular-Steuerelementen historisch weitgehend vom zugrunde liegenden Betriebssystem abgeleitet wurde, was teilweise der Grund für die Schwierigkeit ist, das Aussehen dieser Steuerelemente anzupassen.

Die {{cssxref("appearance")}}-Eigenschaft wurde geschaffen, um zu steuern, welches OS- oder Systemeinstellungen auf Webformular-Steuerelemente angewendet werden. Der bei weitem nützlichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein Steuerelement, auf das Sie es anwenden, so weit wie möglich systemdefiniertes Styling verwendet und ermöglicht es Ihnen, die Stile selbst mit CSS aufzubauen.

Lassen Sie uns zum Beispiel die folgenden Steuerelemente nehmen:

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

Die Anwendung des folgenden CSS darauf entfernt das systemdefinierte Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt, wie sie in Ihrem System aussehen - standardmäßig links und mit dem obigen CSS rechts angewendet.

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

In den meisten Fällen ist der Effekt, die stilisierte Grenze zu entfernen, was das CSS-Styling ein bisschen einfacher macht, aber nicht wesentlich ist. In einigen Fällen, wie bei Radiobuttons und Kontrollkästchen, wird es viel nützlicher. Wir sehen uns das jetzt an.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war besonders nützlich, um [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elemente konsistent zu stylen. Ohne diese Einstellung erlaubte Safari nicht, dass {{cssxref("height")}} oder {{cssxref("font-size")}} darauf gesetzt werden können. Dies ist jedoch seit Safari 16 und später nicht mehr der Fall. Sie möchten möglicherweise immer noch `input[type="search"]` explizit mit `appearance: none;` ansprechen, wenn Ihre Browser-Supportmatrix ältere Safari-Versionen als 16 enthält.

Bei Such-Eingabefeldern verschwindet der "x"-Löschen-Button, der erscheint, wenn der Wert nicht null ist, wenn das Eingabefeld in Edge und Chrome den Fokus verliert, bleibt aber in Safari bestehen. Um dies mit CSS zu entfernen, können Sie diese folgende Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Kontrollkästchen und Radio-Buttons mit `appearance` stylen

Das Styling eines Kontrollkästchens oder eines Radiobuttons ist standardmäßig schwierig. Die Größen der Standardstile für Kontrollkästchen und Radiobuttons sind nicht zur Änderung gedacht, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen. Einige vergrößern die Größe des Steuerelements und einige behalten das Steuerelement in derselben Größe und fügen zusätzliche Raum um es herum hinzu.

Ein viel besserer Ansatz ist es, das Standard-Aussehen von Kontrollkästchen und Radiobuttons vollständig mit {{cssxref("appearance", "appearance: none;")}} zu entfernen und dann Ihre eigenen Stile für ihre verschiedenen Zustände hinzuzufügen.

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

Lassen Sie uns diese mit einem benutzerdefinierten Kontrollkästchendesign stylen. Wir beginnen damit, die ursprünglichen Kontrollkästchenstile zu entfernen:

```css live-sample___checkboxes-styled
input[type="checkbox"] {
  appearance: none;
}
```

Dann können wir die {{cssxref(":checked")}} und {{cssxref(":disabled")}} Pseudo-Klassen verwenden, um das Aussehen unserer benutzerdefinierten Kontrollkästchen zu ändern, wenn sich deren Zustand ändert:

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

Sie erfahren mehr über solche Pseudo-Klassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die oben genannten tun Folgendes:

- `:checked` — das Kontrollkästchen (oder das Optionsfeld) befindet sich in einem aktivierten Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder das Optionsfeld) befindet sich in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Radiobuttons](https://mdn.github.io/learning-area/html/forms/custom-radio-styles/index.html): Benutzerdefinierte Radiobutton-Styling.
- [Toggle-Schalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Toggle-Schalter gestylt ist.

## Was kann man über die "hässlichen" Elemente machen?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer vollständig zu stylen sind. Kurz gesagt, diese sind Dropdown-Felder, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), und rückmeldeorientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standarddarstellungen in den verschiedenen Browsern haben, und obwohl Sie sie in gewisser Weise stylen können, sind einige Teile ihrer Interna unmöglich zu stylen.

Wenn Sie bereit sind, einige Unterschiede im Look and Feel zu akzeptieren, können Sie einige einfache Stile verwenden, um die Dinge erheblich zu verbessern. Dazu gehört die konsistente Größenanpassung und Gestaltung von Eigenschaften wie `background-color`, sowie die Verwendung von `appearance`, um einige systemdefinierte Stylings zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formularmerkmale in Aktion zeigt:

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

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

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

Wir haben etwas JavaScript auf die Seite hinzugefügt, das die ausgewählten Dateien des Datei-Pickers unterhalb des Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) Referenzseite zu finden ist:

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

### "Globale" Stile

Im vorherigen Beispiel haben wir recht gut geschafft, unsere hässlichen Steuerelemente in modernen Browsern einheitlich aussehen zu lassen.

Wir haben etwas globales Normalisieren von CSS auf alle Steuerelemente und ihre Beschriftungen angewendet, um sie auf die gleiche Weise zu dimensionieren, dieselbe Elternschriftart zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einige einheitliche Schatten und abgerundete Ecken zu den Steuerelementen hinzugefügt, wo es sinnvoll ist:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Bereichsarten, Fortschrittsbalken und Zählern fügen sie nur ein hässliches Feld um den Steuerbereich herum hinzu, sodass es keinen Sinn macht.

Lassen Sie uns über einige Besonderheiten dieser Steuerelementtypen sprechen und dabei Schwierigkeiten hervorheben.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare Selektelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalts genau wie bei regulären DOM-Elementen ermöglichen. In unterstützenden Browsern und Codebasierungen müssen Sie sich nicht mehr um die unten beschriebenen Legacy-Techniken für `<select>`-Elemente kümmern.

Das Styling von Datalists und Selects (in Browsern, die anpassbare Selects nicht unterstützen) ermöglicht ein akzeptables Maß an Anpassung, sofern Sie die Optik und das Gefühl nicht zu sehr von den Standards abweichen wollen. Wir haben es geschafft, die Boxen ziemlich einheitlich und konsistent aussehen zu lassen. Das Datalist-auslösende Steuerelement ist ohnehin ein `<input type="text">`, also wussten wir, dass dies kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Zuerst einmal unterscheidet sich das "Pfeil"-Symbol des Selects, das anzeigt, dass es ein Dropdown ist, in den verschiedenen Browsern. Es neigt auch dazu sich zu ändern, wenn Sie die Größe des Selects erhöhen oder es auf hässliche Weise vergrößern. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol vollständig loszuwerden:

```css
select {
  appearance: none;
}
```

Dann haben wir unser eigenes Symbol mit generiertem Inhalt erstellt. Wir haben eine zusätzliche Umhüllung um das Steuerelement gelegt, weil {{cssxref("::before")}}/{{cssxref("::after")}} nicht auf `<select>`-Elementen funktionieren (ihre Inhalte werden vollständig vom Browser kontrolliert):

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

Dann verwenden wir generierten Inhalt, um einen kleinen Abwärtspfeil zu erzeugen und ihn mithilfe der Positionierung an die richtige Stelle zu setzen:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über die Box haben, die beim Klicken auf das `<select>`-Feld erscheint, um es zu öffnen. Sie können die auf dem Elternteil gesetzte Schriftart übernehmen, aber Sie können Dinge wie Abstände und Farben nicht setzen. Dasselbe gilt für die Autocomplete-Liste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über das Optionenstyling benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erzeugen, oder Ihr eigenes bauen. Im Fall von `<select>` könnten Sie auch das `multiple`-Attribut verwenden, das alle Optionen auf der Seite erscheinen lässt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise auch nicht in das Design, das Sie anstreben, aber es lohnt sich zu erwähnen!

### Date-Eingabetypen

Die Datums-/Zeit-Eingabetypen ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe große zugehörige Problem. Die eigentliche umschließende Box ist so einfach zu stylen wie jedes Texteingabefeld, und das, was wir in diesem Demo haben, sieht gut aus.

Jedoch sind die internen Teile des Steuerelements (z. B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie benutzen können, um Werte zu erhöhen/zu verringern) überhaupt nicht stylisierbar, und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich die volle Kontrolle über das Styling haben möchten, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erzeugen, oder Ihr eigenes bauen.

> [!NOTE]
> Es ist auch erwähnenswert jeden here [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) - dieser hat auch einen Spinner, den Sie verwenden können, um Werte zu erhöhen/zu verringern und könnte daher dasselbe Problem haben. Bei der Nummernart der Daten, die gesammelt werden, ist das jedoch einfacher, und es ist einfach, stattdessen den Eingabetyp `tel` zu verwenden, der wie `text` aussieht, aber die numerische Tastatur bei Geräten mit Touch-Tastaturen einblendet.

### Bereichs-Eingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist ärgerlich zu stylen. Sie können etwas wie das Folgende verwenden, um die Standardschieberegler-Leiste vollständig zu entfernen und durch einen benutzerdefinierten Stil zu ersetzen (eine dünne rote Leiste, in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Das Anpassen des Stils des Schiebereglers ist jedoch sehr schwierig — um die volle Kontrolle über das Styling des Bereichs zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, einschließlich mehrere nicht-standardisierte, browserspezifische Pseudo-Elemente. Lesen Sie [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für eine ausführliche Beschreibung, was benötigt wird.

### Farbeingabetypen

Eingabesteuerungen des Typs Farbe sind nicht zu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Block von Vollfarbe mit einem kleinen Rahmen zu geben.

Sie können den Rahmen entfernen und nur den Farbblock lassen, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch die einzige Möglichkeit, etwas signifikant anderes zu erreichen.

### Dateieingabetypen

Eingaben des Typs Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das gut mit dem Rest der Seite zusammenpasst — die Ausgabelinie, die Teil des Steuerelements ist, wird die Elternschriftart erben, wenn Sie dem Eingabefeld sagen, es zu tun, und Sie können die benutzerdefinierte Liste von Dateinamen und -größen nach Belieben stylen; wir haben sie schließlich erstellt.

Das einzige Problem bei Dateiauswählern ist, dass der Button, den Sie drücken, um den Dateiauswähler zu öffnen, völlig unstylisierbar ist - er kann nicht in der Größe verändert oder gefärbt werden, und er akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dies zu umgehen, ist, die Tatsache zu nutzen, dass, wenn Sie ein Label mit einem Formularsteuerelement verknüpft haben, das Anklicken des Labels das Steuerelement aktiviert. Sie könnten also das tatsächliche Formulareingabefeld mit so etwas verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label stylen, um wie ein Button auszusehen, der beim Drücken den Dateiauswähler wie erwartet öffnet:

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

Sie können das Ergebnis des obenstehenden CSS-Stylings im Live-Beispiel unten sehen.

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

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

### Zähler und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwer, in irgendeiner Weise zu stylen. Sie behandeln Höhenangaben nicht konsistent zueinander und zwischen Browsern, Sie können den Hintergrund kolorieren, aber nicht die Vordergrundleiste, und `appearance: none` auf ihnen anzuwenden, macht die Dinge schlechter, nicht besser.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie das Styling kontrollieren möchten, oder eine Drittanbieterlösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten bei der Verwendung von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Für jetzt ist die beste Lösung, mehr über die Art und Weise zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formular-Steuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir untersuchen, wie man [vollständig angepasste `<select>`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den speziell dafür verfügbaren modernen HTML- und CSS-Funktionen erstellt.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
