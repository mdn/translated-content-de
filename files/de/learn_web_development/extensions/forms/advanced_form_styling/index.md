---
title: Erweitertes Formularstyling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 3fcbbaa87b49ddd87f76d7b932f366726028ab2c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS gemacht werden kann, um die Arten von Formularsteuerungen zu stylen, die schwieriger zu stylen sind — die "schlechten" und "hässlichen" Kategorien. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen perfekt leicht zu stylen; nun werden wir uns mit den problematischeren Teilen befassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Um zusammenzufassen, was wir im vorherigen Artikel gesagt haben, gibt es:

**Die schlechten**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder einige spezifischere Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Die hässlichen**: Einige Elemente können nicht vollständig mit CSS gestylt werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte ermöglichen, genau wie bei regulären DOM-Elementen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Sprechen wir zunächst über die [`appearance`](/de/docs/Web/CSS/appearance)-Eigenschaft, die nützlich ist, um all das oben Genannte stilbarer zu machen.

## `appearance`: Kontrolle des Betriebssystem-Styles

Im vorherigen Artikel haben wir erwähnt, dass die Gestaltung von Webformular-Steuerelementen historisch weitgehend vom zugrunde liegenden Betriebssystem abgeleitet wurde, was einen Teil der Schwierigkeiten bei der Anpassung des Aussehens dieser Steuerelemente ausmacht.

Die {{cssxref("appearance")}}-Eigenschaft wurde entwickelt, um zu steuern, welcher Betriebssystem- oder systemeigene Stil auf Webformular-Steuerelemente angewendet wird. Der mit Abstand nützlichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dadurch wird verhindert, dass ein Steuerelement, auf das es angewendet wird, systemeigene Stile verwendet, soweit möglich, und ermöglicht es Ihnen, die Stile selbst mit CSS zu erstellen.

Zum Beispiel, schauen wir uns die folgenden Steuerungen an:

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

Das Anwenden des folgenden CSS auf sie entfernt die systemeigene Gestaltung.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie auf Ihrem System aussehen — standardmäßig links, und mit dem obigen CSS rechts angewendet.

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

In den meisten Fällen bewirkt dies, dass die stilisierte Umrandung entfernt wird, was das Stylen mit CSS etwas einfacher macht, aber nicht unbedingt wesentlich ist. In einigen Fällen, wie bei Optionsfeldern und Kontrollkästchen, wird es viel nützlicher. Schauen wir uns das jetzt an.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war früher besonders nützlich, um [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elemente konsistent zu stylen. Ohne ihn erlaubte Safari keine {{cssxref("height")}}- oder {{cssxref("font-size")}}-Werte dafür. Dies ist jedoch seit Safari 16 nicht mehr der Fall. Es kann dennoch sinnvoll sein, `input[type="search"]` explizit mit `appearance: none;` zu stylen, wenn Ihre Browser-Unterstützung Safari-Versionen älter als 16 umfasst.

In Suchfeldern verschwindet die "x"-Löschschaltfläche, die erscheint, wenn der Wert nicht null ist, wenn das Eingabefeld in Edge und Chrome den Fokus verliert, bleibt jedoch in Safari an Ort und Stelle. Um sie mit CSS zu entfernen, können Sie diese Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Kontrollkästchen und Optionsfeldern mit `appearance`

Ein Kontrollkästchen oder ein Optionsfeld zu stylen, ist standardmäßig knifflig. Die Standardstile für die Größen von Kontrollkästchen und Optionsfeldern sollen nicht verändert werden, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen. Einige erhöhen die Größe des Steuerelements, während andere das Steuerelement in der gleichen Größe halten und zusätzlichen Raum darum hinzufügen.

Ein viel besserer Ansatz ist es, das Standardaussehen von Kontrollkästchen und Optionsfeldern komplett mit {{cssxref("appearance", "appearance: none;")}} zu entfernen und dann Ihre eigenen Stile für ihre verschiedenen Zustände hinzuzufügen.

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

Dann können wir die {{cssxref(":checked")}}- und {{cssxref(":disabled")}}-Pseudoklassen verwenden, um das Aussehen unserer benutzerdefinierten Kontrollkästchen zu ändern, wenn sich deren Zustand ändert:

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

Sie erfahren mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die oben genannten tun Folgendes:

- `:checked` — das Kontrollkästchen (oder Optionsfeld) befindet sich im aktivierten Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) befindet sich im deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Styling von Optionsfeldern.
- [Umschalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Umschalter aussieht.

## Was kann gegen die "hässlichen" Elemente getan werden?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer vollständig zu stylen sind. Kurz gesagt, es handelt sich um Dropdown-Boxen, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) sowie feedback-orientierte Steuerungen wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente in verschiedenen Browsern sehr unterschiedliche Standardaussehens haben, und obwohl Sie sie in gewisser Weise stylen können, sind einige Teile ihres Inneren unmöglich zu stylen.

Wenn Sie bereit sind, einige Unterschiede im Aussehen und Verhalten zu akzeptieren, können Sie einige einfache Stilmittel verwenden, um die Dinge signifikant zu verbessern. Dazu gehören konsistente Größen- und Stileigenschaften wie `background-color` und die Verwendung von `appearance`, um ein wenig Betriebssystem-Styling zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formelemente in Aktion zeigt:

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

Sie können auch die Schaltfläche **Play** drücken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

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

Wir haben etwas JavaScript auf die Seite hinzugefügt, das die Dateien auflistet, die vom Dateiauswahlsystem ausgewählt wurden, unterhalb der Steuerung selbst. Dies ist eine vereinfachte Version des Beispiels, das auf der [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples)-Referenzseite zu finden ist:

```js live-sample___ugly-styling
const fileInput = document.querySelector("#file");
const fileList = document.querySelector("#file-list");

fileInput.addEventListener("change", updateFileList);

function updateFileList() {
  while (fileList.firstChild) {
    fileList.removeChild(fileList.firstChild);
  }

  let curFiles = fileInput.files;

  if (!(curFiles.length === 0)) {
    for (let i = 0; i < curFiles.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        "File name: " +
        curFiles[i].name +
        "; file size " +
        returnFileSize(curFiles[i].size) +
        ".";
      fileList.appendChild(listItem);
    }
  }
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}
```

### "Globale" Stile

Im vorherigen Beispiel haben wir ziemlich gut geschafft, unsere hässlichen Steuerelemente über moderne Browser hinweg einheitlich aussehen zu lassen.

Wir haben einige globale normalisierende CSS-Stile auf alle Steuerelemente und deren Labels angewendet, um sie in der gleichen Weise zu dimensionieren, die Schriftart des Elternteils zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einige einheitliche Schatten und abgerundete Ecken zu den Steuerelementen hinzugefügt, wo es sinnvoll war:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Bereichstypen, Fortschrittsbalken und Messgeräten fügen sie nur einen hässlichen Rahmen um den Steuerbereich hinzu, daher macht es keinen Sinn.

Sprechen wir über einige Besonderheiten jeder dieser Steuerelementtypen und heben dabei Schwierigkeiten hervor.

### Auswahlfelder und Datenlisten

Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte ermöglichen, genau wie bei regulären DOM-Elementen. In unterstützenden Browsern und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen veralteten Techniken für `<select>`-Elemente kümmern.

Die Gestaltung von Datenlisten und Selects (in Browsern, die keine anpassbaren Selects unterstützen) ermöglicht ein akzeptables Maß an Anpassung, sofern Sie das Aussehen und das Verhalten nicht zu sehr von den Standards abweichen möchten. Wir haben es geschafft, die Boxen ziemlich einheitlich und konsistent aussehen zu lassen. Die steuerbare Steuerung für Datenlisten ist ohnehin ein `<input type="text">`, daher wussten wir, dass das kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Zuerst einmal unterscheidet sich das "Pfeil"-Symbol des Selects, das anzeigt, dass es sich um ein Dropdown handelt, von Browser zu Browser. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box erhöhen oder sie auf hässliche Weise anpassen. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol vollständig zu entfernen:

```css
select {
  appearance: none;
}
```

Dann haben wir unser eigenes Symbol mit generiertem Inhalt erstellt. Wir haben eine zusätzliche Umhüllung um das Steuerelement gelegt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht auf `<select>`-Elementen funktionieren (ihr Inhalt wird vollständig durch den Browser gesteuert):

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

Daraufhin verwenden wir generierten Inhalt, um einen kleinen nach unten gerichteten Pfeil zu erzeugen, und setzen ihn durch Positionierung an die richtige Stelle:

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

Das zweite, etwas wichtigere Problem ist, dass Sie die Kontrolle über das Kästchen nicht haben, das beim Klicken auf die `<select>`-Box erscheint, um es zu öffnen. Sie können die Schriftart, die auf dem Elternteil eingestellt ist, übernehmen, aber Sie können keine Dinge wie Abstände und Farben setzen. Das gleiche gilt für die Autovervollständigen-Liste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich volle Kontrolle über das Optionstyling benötigen, müssen Sie entweder eine Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu erstellen oder Ihre eigene bauen. Im Fall von `<select>` könnten Sie auch das Attribut `multiple` verwenden, das alle Optionen auf der Seite anzeigt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich könnte dies auch nicht zu dem Design passen, das Sie verfolgen, aber es ist erwähnenswert!

### Datumseingabetypen

Die Datumseingabetypen ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe große zugehörige Problem. Der eigentliche enthaltende Kasten ist genauso leicht zu stylen wie jede Texteingabe, und was wir in diesem Demo haben, sieht gut aus.

Die internen Teile der Steuerung (z. B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie verwenden können, um Werte zu erhöhen oder zu verringern) sind jedoch überhaupt nicht stilisierbar und Sie können sie nicht mit `appearance: none;` entfernen. Wenn Sie wirklich volle Kontrolle über das Styling benötigen, müssen Sie entweder eine Bibliothek verwenden, um eine benutzerdefinierte Steuerung zu erstellen, oder Ihre eigene erstellen.

> [!NOTE]
> Es ist erwähnenswert, dass [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) hier auch ein Problem darstellt — dieses enthält ebenfalls einen Spinner, den Sie verwenden können, um Werte zu erhöhen oder zu verringern. In diesem Fall ist das zu erfassende Datum jedoch einfacher und es ist leicht, stattdessen einen `tel`-Eingabetyp zu verwenden, der wie `text` aussieht, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist ärgerlich zu stylen. Sie können etwas wie das Folgende verwenden, um die Standardschieberstrecke vollständig zu entfernen und durch einen benutzerdefinierten Stil zu ersetzen (eine dünne rote Strecke, in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Ziehgriffs der Bereichssteuerung anzupassen — um volle Kontrolle über das Styling des Bereichs zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, die mehrere nicht standardisierte, browser-spezifische Pseudoelemente enthalten. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks an für eine detaillierte Beschreibung dessen, was benötigt wird.

### Farbeingabetypen

Eingabesteuerungen vom Typ "color" sind nicht zu schlecht. In Browsern, die es unterstützen, bieten sie Ihnen ein farbiges Feld mit einer kleinen Umrandung.

Sie können die Umrandung entfernen, indem Sie einfach das farbige Feld übrig lassen, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch der einzige Weg, um etwas signifikant anderes zu erreichen.

### Dateieingabetypen

Eingaben vom Typ "file" sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das gut in den Rest der Seite passt — die Ausgabelinie, die Teil der Steuerung ist, übernimmt die Schriftart des Elternteils, wenn Sie es dem Input sagen, und Sie können die benutzerdefinierte Liste von Dateinamen und -größen nach Belieben stylen; wir haben sie schließlich erstellt.

Das einzige Problem bei Dateiauswahlen ist, dass die Schaltfläche, die Sie drücken, um den Dateiauswahler zu öffnen, überhaupt nicht gestaltbar ist — sie kann nicht in der Größe oder Farbe verändert werden, und sie akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dies zu umgehen, besteht darin, den Vorteil zu nutzen, dass wenn Sie ein Label mit einer Steuerung in einem Formular verknüpft haben, das Klicken auf das Label die Steuerung aktiviert. Sie könnten das tatsächliche Formulareingabefeld mit so etwas verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so stylen, dass es wie eine Schaltfläche aussieht, die, wenn sie gedrückt wird, den Dateiauswahler wie erwartet öffnet:

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

Sie können das Ergebnis des obigen CSS-Stylings im Live-Beispiel unten sehen.

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

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
  padding: 0;
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
  box-shadow: 1px 1px 3px #ccc;
  background: linear-gradient(to bottom, #eee, #ccc);
  border: 1px solid rgb(169, 169, 169);
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, #fff, #ddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #ccc;
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
    console.log("test");
    for (let i = 0; i < curFiles.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        "File name: " +
        curFiles[i].name +
        "; file size " +
        returnFileSize(curFiles[i].size) +
        ".";
      fileList.appendChild(listItem);
    }
  }
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}
```

{{EmbedLiveSample("styled-file-picker", '100%', 200)}}

Sie können auch die Schaltfläche **Play** drücken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

### Messgeräte und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Darüber hinaus sind sie jedoch wirklich schwer zu stilisieren. Sie verhalten sich nicht konsistent zwischen den einzelnen Browsern und untereinander, Sie können den Hintergrund, aber nicht die Vordergrundleiste färben, und das Setzen von `appearance: none` auf ihnen verschlimmert die Dinge, anstatt sie zu verbessern.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie die Kontrolle über das Styling haben möchten, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Während es immer noch Schwierigkeiten bei der Verwendung von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Für den Moment ist die beste Lösung, mehr über die Art und Weise zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formular-Steuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir erkunden, wie [vollständig angepasste `<select>`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den speziell dafür verfügbaren modernen HTML- und CSS-Funktionen erstellt werden können.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
