---
title: Erweiterte Formulargestaltung
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularelementen zu stylen, die schwieriger zu stylen sind – die Kategorien der "schlechten" und "hässlichen" Elemente. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons sehr einfach zu stylen; nun werden wir uns dem Styling der problematischeren Teile widmen.

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
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Um zu rekapitulieren, was wir im vorherigen Artikel gesagt haben, hier haben wir:

**Die schlechten**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder einige spezifische Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Die hässlichen**: Einige Elemente können nicht umfassend mit CSS gestylt werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), ein Satz von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Beginnen wir zunächst mit der [`appearance`](/de/docs/Web/CSS/Reference/Properties/appearance) Eigenschaft, die nützlich ist, um all die oben genannten Elemente besser stylbar zu machen.

## `appearance`: Steuerung des OS-Level-Stylings

Im vorherigen Artikel haben wir erwähnt, dass das Styling von Web-Formularelementen historisch weitgehend vom darunterliegenden Betriebssystem abgeleitet wurde, was ein Grund für die Schwierigkeit bei der Anpassung des Aussehens dieser Steuerelemente ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde erstellt, um zu steuern, welches OS- oder System-Level-Styling auf Web-Formularelemente angewendet wird. Der mit Abstand hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, soweit möglich, dass ein Steuerelement, auf das Sie es anwenden, systemeigene Styles verwendet, und lässt Sie die Styles selbst mit CSS aufbauen.

Lassen Sie uns beispielsweise diese Kontrollen nehmen:

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

Durch Anwenden des folgenden CSS wird das systemeigene Styling entfernt.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie in Ihrem System aussehen – standardmäßig auf der linken Seite und mit dem obigen CSS angewendet auf der rechten Seite.

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

In den meisten Fällen ist der Effekt, den gestalteten Rahmen zu entfernen, was das CSS-Styling ein wenig einfacher macht, aber nicht essenziell ist. In einigen Fällen, wie bei Optionsfeldern und Kontrollkästchen, wird es wesentlich nützlicher. Darauf werden wir jetzt näher eingehen.

### Suchboxen und `appearance`

Der `appearance: none;`-Wert war früher besonders nützlich, um [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elemente konsistent zu stylen. Ohne ihn erlaubte Safari es nicht, {{cssxref("height")}}- oder {{cssxref("font-size")}}-Werte für sie zu setzen. Dies ist jedoch in Safari 16 und höher nicht mehr der Fall. Sie möchten möglicherweise immer noch `input[type="search"]` explizit mit `appearance: none;` ansprechen, wenn Ihre Browser-Support-Matrix Safari-Versionen älter als 16 umfasst.

Bei Suchfeldern verschwindet der "x"-Löschen-Button, der erscheint, wenn der Wert nicht null ist, in Edge und Chrome, wenn das Eingabefeld den Fokus verliert, bleibt jedoch in Safari bestehen. Um ihn per CSS zu entfernen, können Sie die folgende Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Kontrollkästchen und Optionsfeldern mit `appearance`

Das Styling eines Kontrollkästchens oder eines Optionsfelds ist standardmäßig schwierig. Die Größen der Standardstile von Kontrollkästchen und Optionsfeldern sind nicht zur Änderung vorgesehen, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen. Einige vergrößern die Größe des Steuerelements, und einige halten das Steuerelement in derselben Größe und fügen zusätzlichen Platz darum herum hinzu.

Ein viel besserer Ansatz ist, das Standarderscheinungsbild von Kontrollkästchen und Optionsfeldern vollständig mit {{cssxref("appearance", "appearance: none;")}} zu entfernen und dann Ihre eigenen Styles für deren verschiedene Zustände hinzuzufügen.

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

Dann können wir die {{cssxref(":checked")}}- und {{cssxref(":disabled")}}-Pseudoklassen verwenden, um das Erscheinungsbild unserer benutzerdefinierten Kontrollkästchen zu ändern, wenn sich deren Zustand ändert:

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

Sie erfahren mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die obigen tun folgendes:

- `:checked` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem ausgewählten Zustand — der Benutzer hat darauf geklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestaltete Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Styling von Optionsfeldern.
- [Umschalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein als Umschalter gestaltetes Kontrollkästchen.

## Was kann man über die "hässlichen" Elemente tun?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer umfassend zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerelementtypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), und rückmeldeorientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standardaussehen in den Browsern haben, und während Sie sie in gewisser Weise stylen können, sind einige Teile ihrer Interna nicht zu stylen.

Wenn Sie bereit sind, einige Unterschiede im Aussehen und Verhalten zu akzeptieren, können Sie einige einfache Stile verwenden, um die Dinge erheblich zu verbessern. Dazu gehört die konsistente Größenveränderung und das Styling von Eigenschaften wie `background-color` und die Verwendung von `appearance`, um einige systemeigene Stile zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formularfunktionen in Aktion zeigt:

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

Dieses Beispiel hat das folgende CSS zugewiesen bekommen:

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

Wir haben ein wenig JavaScript auf die Seite hinzugefügt, das die von der Dateiauswahl ausgewählten Dateien unterhalb des Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) Referenzseite zu finden ist:

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

Im vorherigen Beispiel haben wir es ziemlich gut geschafft, unsere hässlichen Steuerelemente in modernen Browsern einheitlich aussehen zu lassen.

Wir haben einige globale Normalisierungs-CSS auf alle Steuerelemente und deren Beschriftungen angewendet, um sie auf die gleiche Weise zu dimensionieren, ihre Elternschrift zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Bei anderen Steuerelementen wie Bereichstypen, Fortschrittsbalken und Messgeräten fügen sie nur einen hässlichen Kasten um den Steuerbereich hinzu, sodass es keinen Sinn ergibt.

Lassen Sie uns über einige Besonderheiten jedes dieser Steuerelementtypen sprechen und dabei die Schwierigkeiten hervorheben.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), ein Satz von HTML- und CSS-Funktionen, die eine vollständige Anpassung von `<select>`-Elementen und deren Inhalt wie bei regulären DOM-Elementen ermöglichen. In unterstützten Browsern und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen Legacy-Techniken für `<select>`-Elemente kümmern.

Das Styling von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) ermöglicht ein akzeptables Maß an Anpassung, vorausgesetzt, Sie möchten das Aussehen und Verhalten nicht allzu sehr von den Standards abweichen. Wir haben es geschafft, die Boxen ziemlich einheitlich und konsistent aussehen zu lassen. Das datalist-auslösende Steuerungselement ist ohnehin ein `<input type="text">`, daher wussten wir, dass dies kein Problem darstellen würde.

Zwei Dinge sind etwas problematischer. Erstens, das Pfeilsymbol des Selects, das anzeigt, dass es sich um ein Dropdown handelt, unterscheidet sich zwischen den Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box vergrößern oder sie auf unschöne Weise neu dimensionieren. Um dies in unserem Beispiel zu beheben, verwendeten wir zunächst unseren alten Freund `appearance: none`, um das Symbol vollständig zu entfernen:

```css
select {
  appearance: none;
}
```

Dann erstellten wir unser eigenes Symbol mit generiertem Inhalt. Wir setzten eine zusätzliche Umhüllung um das Steuerelement, da [`::before`](/de/docs/Web/CSS/Reference/Selectors/::before)/[`::after`](/de/docs/Web/CSS/Reference/Selectors/::after) nicht auf `<select>`-Elementen funktionieren (ihr Inhalt wird vollständig vom Browser kontrolliert):

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

Wir verwenden dann generierten Inhalt, um einen kleinen Abwärtspfeil zu erzeugen, und setzen ihn mithilfe der Positionierung an die richtige Stelle:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Feld haben, das erscheint, wenn Sie auf die `<select>`-Box klicken, um es zu öffnen. Sie können die Schriftart des übergeordneten Elements übernehmen, aber Sie können keine Dinge wie Abstände und Farben festlegen. Dasselbe gilt für die Autovervollständigungsliste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die vollständige Kontrolle über das Styling der Optionen benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu erstellen, oder Ihr eigenes erstellen. Im Fall von `<select>` könnten Sie auch das `multiple`-Attribut verwenden, das alle Optionen auf der Seite anzeigt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich könnte dies auch nicht zum von Ihnen angestrebten Design passen, aber es lohnt sich, dies zu beachten!

### Datums-Eingabetypen

Die Eingabetypen für Datum/Uhrzeit ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe große damit verbundene Problem. Das eigentliche umschließende Feld ist so einfach zu stylen wie jedes Texteingabefeld, und was wir in diesem Demo haben, sieht gut aus.

Allerdings sind die internen Teile des Steuerelements (z. B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, die Spinnfunktion, die Sie verwenden können, um Werte zu erhöhen/verringern) überhaupt nicht stylbar, und Sie können sie nicht mit `appearance: none;` entfernen. Wenn Sie wirklich die vollständige Kontrolle über das Styling benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerungselement zu erstellen oder Ihr eigenes erstellen.

> [!NOTE]
> Es ist erwähnenswert, dass hier auch [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) angegeben wird — dieser hat ebenfalls eine Spinnfunktion, die Sie verwenden können, um Werte zu erhöhen oder zu verringern, und leidet möglicherweise unter demselben Problem. Im Fall des `number`-Typs sind die gesammelten Daten jedoch einfacher, und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Aussehen von `text` hat, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Bereichs-Eingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist ärgerlich zu stylen. Sie können etwas wie das Folgende verwenden, um den Standardslider-Track vollständig zu entfernen und ihn durch einen benutzerdefinierten Stil zu ersetzen (einen dünnen roten Track in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Ziehgriffs des Bereichs-Steuerelements anzupassen — um die volle Kontrolle über das Styling des Bereichs zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, einschließlich mehrerer nicht-standardmäßiger, browserspezifischer Pseudo-Elemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für einen detaillierten Bericht darüber an, was erforderlich ist.

### Farbeingabetypen

Eingabesteuerungstypen für Farbe sind nicht allzu schlecht. In unterstützten Browsern neigen sie dazu, Ihnen einen Block in Vollfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen und einfach den Farbblock übriglassen, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine kundenspezifische Lösung ist jedoch die einzige Möglichkeit, etwas wesentlich anderes zu erreichen.

### Dateieingabetypen

Eingaben vom Typ Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das gut mit dem Rest der Seite harmoniert — die Ausgabereihe, die Teil des Steuerelements ist, übernimmt die Schriftart des Elternteils, wenn Sie das Eingabefeld dazu anweisen, und Sie können die benutzerdefinierte Liste von Dateinamen und Größen in jeder gewünschten Weise gestalten; wir haben sie schließlich erstellt.

Das einzige Problem bei Dateiauswahlen ist, dass der Knopf, den Sie drücken, um die Dateiauswahl zu öffnen, nicht stylbar ist — er kann nicht in der Größe oder Farbe geändert werden, und er akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dieses Problem zu umgehen, besteht darin, die Tatsache zu nutzen, dass, wenn Sie ein Label mit einem Formularelement verbunden haben, das Klicken auf das Label das Steuerelement aktiviert. Sie könnten also das eigentliche Formularelement mit so etwas verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so stylen, dass es wie ein Button funktioniert, der, wenn er gedrückt wird, die Dateiauswahl wie erwartet öffnet:

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

Das Ergebnis des obigen CSS-Stylings können Sie im folgenden Live-Beispiel sehen.

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

### Messgeräte und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im vorherigen Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwer zu stylen. Sie verarbeiten Höheneinstellungen nicht konsistent, weder untereinander noch zwischen Browsern, Sie können den Hintergrund, aber nicht die Vordergrundleiste färben, und das Setzen von `appearance: none` auf ihnen macht die Dinge schlechter, nicht besser.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie das Styling kontrollieren möchten, oder eine Drittanbieterlösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten bei der Verwendung von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Für den Moment ist die beste Lösung, mehr über die Art und Weise zu erfahren, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die Erstellung von [vollständig angepassten `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dedizierten, modernen HTML- und CSS-Funktionen erkunden, die zu diesem Zweck verfügbar sind.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
