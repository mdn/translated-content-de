---
title: Erweiterte Formularstilierung
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularsteuerelementen zu stylen, die schwieriger zu gestalten sind - die Kategorien "schlecht" und "hässlich". Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen einfach zu stylen; nun werden wir in die Gestaltung der problematischeren Teile eintauchen.

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
        was getan werden kann, um diese anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Um zusammenzufassen, was wir im vorherigen Artikel gesagt haben:

**Das Schlechte**: Einige Elemente sind schwieriger zu gestalten und erfordern komplexeres CSS oder spezifische Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können nicht umfassend mit CSS gestaltet werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerungen wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zunächst sprechen wir über die {{cssxref("appearance")}}-Eigenschaft, die nützlich ist, um all die oben genannten Punkte besser gestaltbar zu machen.

## `appearance`: Steuerung der OS-Level-Stilierung

Im vorherigen Artikel erwähnten wir, dass die Gestaltung von Webformular-Steuerelementen historisch weitgehend vom zugrunde liegenden Betriebssystem abgeleitet wurde, was teilweise den Schwierigkeitsgrad der Anpassung dieser Steuerelemente erklärt.

Die {{cssxref("appearance")}}-Eigenschaft wurde als Möglichkeit geschaffen, die auf Webformular-Steuerelemente angewandte OS- oder systembasierten Stilierungen zu steuern. Der bei weitem hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein angewandtes Steuerelement systemabhängige Stilierung verwendet, soweit möglich, sodass Sie die Stile selbst mit CSS aufbauen können.

Nehmen wir zum Beispiel die folgenden Steuerelemente:

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

Die Anwendung des folgenden CSS auf sie entfernt die systemebene Stilierung.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie in Ihrem System aussehen — standardmäßig links und mit dem oben genannten CSS rechts angewendet.

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

In den meisten Fällen ist die Wirkung, die stilisierte Umrandung zu entfernen, was CSS-Styling etwas erleichtert, aber nicht zwingend erforderlich ist. In ein paar Fällen, wie z.B. bei Optionsfeldern und Kontrollkästchen, wird es viel nützlicher. Lassen Sie uns das jetzt ansehen.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war früher besonders nützlich für einheitliche Styling von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elementen. Ohne ihn erlaubte Safari keine {{cssxref("height")}}- oder {{cssxref("font-size")}}-Werte darauf zu setzen. Dies ist jedoch seit Safari 16 und später nicht mehr der Fall. Sie möchten `input[type="search"]` möglicherweise trotzdem explizit mit `appearance: none;` ansprechen, wenn Ihre Browser-Support-Matrix Safari-Versionen älter als 16 umfasst.

In Suchfeldern verschwindet der "x"-Löschen-Button, der erscheint, wenn der Wert nicht null ist, im Edge und Chrome, bleibt aber in Safari stehen, wenn das Eingabefeld den Fokus verliert. Um ihn per CSS zu entfernen, können Sie die folgende Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Kontrollkästchen und Optionsfeldern mit `appearance`

Das Stylen eines Kontrollkästchens oder eines Optionsfeldes ist von Natur aus schwierig. Die Größen von Standardstilen von Kontrollkästchen und Optionsfeldern sollen nicht geändert werden, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen. Einige vergrößern die Steuerung, und einige behalten die Steuerung in der gleichen Größe und fügen zusätzlichen Platz darum herum hinzu.

Ein viel besserer Ansatz ist es, das Standarderscheinungsbild von Kontrollkästchen und Optionsfeldern mit {{cssxref("appearance", "appearance: none;")}} komplett zu entfernen und dann Ihre eigenen Stile für deren verschiedene Zustände hinzuzufügen.

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

Gestalten wir diese mit einem benutzerdefinierten Kontrollkästchendesign. Wir beginnen damit, die ursprünglichen Kontrollkastenstile zu entfernen:

```css live-sample___checkboxes-styled
input[type="checkbox"] {
  appearance: none;
}
```

Wir können dann die {{cssxref(":checked")}}- und {{cssxref(":disabled")}}-Pseudoklassen verwenden, um das Erscheinungsbild unserer benutzerdefinierten Kontrollkästchen zu ändern, wenn sich deren Zustand ändert:

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

Sie erfahren mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die oben genannten Pseudoklassen bewirken Folgendes:

- `:checked` — das Kontrollkästchen (oder das Optionsfeld) befindet sich in einem überprüften Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben auch ein paar weitere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefinierte Optionsfeldgestaltung.
- [Beispiel eines Kippschalters](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Kippschalter gestaltet ist.

## Was kann man über die "hässlichen" Elemente tun?

Nun wenden wir uns den "hässlichen" Steuerelementen zu — denjenigen, die sehr schwer gründlich zu gestalten sind. Kurz gesagt, dies sind Dropdown-Felder, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), und feedbackorientierte Steuerungen wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente in verschiedenen Browsern sehr unterschiedlich aussehen, und während Sie sie in gewisser Weise gestalten können, sind einige Teile ihrer inneren Struktur unmöglich zu stylen.

Wenn Sie bereit sind, einige Unterschiede im Erscheinungsbild und Gefühl zu akzeptieren, können Sie einige einfache Stilierungen verwenden, um die Dinge erheblich zu verbessern. Dazu gehören konsistente Größen und Gestaltung von Eigenschaften wie `background-color` und die Verwendung von `appearance`, um einige systembasierte Stilierungen zu entfernen.

Sehen Sie sich das folgende Beispiel an, das eine Reihe der "hässlichen" Formulareigenschaften in Aktion zeigt:

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

Dieses Beispiel hat folgendes CSS, das darauf angewendet wurde:

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

Wir haben etwas JavaScript auf die Seite hinzugefügt, das die von der Datei-Auswahl ausgewählten Dateien unterhalb des Steuerungselements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der Seite [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) zu finden ist:

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

Im vorherigen Beispiel haben wir relativ gut hinbekommen, dass unsere hässlichen Steuerelemente in modernen Browsern einheitlich aussehen.

Wir haben einige globale normalisierende CSS auf alle Steuerelemente und deren Beschriftungen angewendet, um sie gleich groß darzustellen und die Schriftart ihres übergeordneten Elements anzunehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einheitliche Schatten und abgerundete Ecken zu den Steuerungen hinzugefügt, wo es Sinn macht:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Auf anderen Steuerungen wie Schiebereglern, Fortschritts- und Zählbalken fügen sie lediglich eine hässliche Box um den Steuerbereich hinzu, daher macht es keinen Sinn.

Lassen Sie uns einige spezifische Details zu jeder dieser Arten von Steuerelementen sprechen und dabei auf Schwierigkeiten hinweisen.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalte wie bei regulären DOM-Elementen ermöglichen. In unterstützten Browsern und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen Altsystemtechniken für `<select>`-Elemente kümmern.

Das Gestalten von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) erlaubt ein akzeptables Maß an Anpassung, vorausgesetzt, Sie möchten das Erscheinungsbild nicht zu sehr von den Vorgaben variieren. Wir haben es geschafft, die Boxen ziemlich einheitlich und konsistent zu gestalten. Die das Datalist abrufende Steuerung ist ohnehin ein `<input type="text">`, daher wussten wir, dass dies kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Erstens unterscheidet sich das "Pfeil"-Symbol des Selects, das anzeigt, dass es sich um ein Dropdown handelt, je nach Browser. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box vergrößern oder in unschöner Weise verändern. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Symbol vollständig zu entfernen:

```css
select {
  appearance: none;
}
```

Wir haben dann unser eigenes Symbol mithilfe generierter Inhalte erstellt. Wir haben eine zusätzliche Hülle um das Steuerelement gelegt, da {{cssxref("::before")}}/{{cssxref("::after")}} nicht auf `<select>`-Elementen funktionieren (ihre Inhalte werden vollständig vom Browser kontrolliert):

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

Wir haben dann generierte Inhalte verwendet, um einen kleinen Abwärtspfeil zu erstellen und ihn an der richtigen Stelle mit Positionierung zu platzieren:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Feld haben, das erscheint und die Optionen enthält, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die im übergeordneten Elementeinstellung festgelegte Schriftart erben, aber Sie werden nicht in der Lage sein, Dinge wie Abstände und Farben festzulegen. Dasselbe gilt für die Autovervollständigungsliste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich vollständige Kontrolle über die Gestaltungsoptionen benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren oder Ihr eigenes erstellen. Im Fall von `<select>` könnten Sie auch das `multiple`-Attribut verwenden, das alle Optionen auf der Seite erscheinen lässt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise auch nicht zu dem gewünschten Design, aber es ist erwähnenswert!

### Dateneingabearten

Die Dateneingabetypen ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe große damit verbundene Problem. Die tatsächliche enthaltene Box lässt sich so einfach stylen wie jedes Texteingabefeld, und was wir in diesem Demo haben, sieht gut aus.

Jedoch sind die internen Teile der Steuerung (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie verwenden können, um Werte zu erhöhen/erniedrigen) überhaupt nicht stilisierbar und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich vollständige Kontrolle über die Gestaltung benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren oder Ihr eigenes erstellen.

> [!NOTE]
> Es ist erwähnenswert, [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) hier ebenfalls zu erwähnen — dieses hat ebenfalls einen Spinner, den man verwenden kann, um Werte zu erhöhen/erniedrigen, leidet also möglicherweise unter demselben Problem. Im Fall des Typs `number` sind die gesammelten Daten jedoch einfacher und Sie können einfach einen `tel`-Eingabetyp verwenden, der das Erscheinungsbild von `text` hat, aber auf Geräten mit Touch-Tastaturen das numerische Tastenfeld anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist nervig zu stylen. Sie können etwas wie das folgende verwenden, um die Standard-Schieberleiste vollständig zu entfernen und sie durch einen benutzerdefinierten Stil (in diesem Fall eine dünne rote Leiste) zu ersetzen:

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Ziehgriffs des Bereichssteuerungselements anzupassen — um vollständige Kontrolle über das Styling des Bereichs zu erhalten, müssen Sie einige komplexe CSS-Code, einschließlich mehrerer nicht standardisierter, browserspezifischer Pseudoelemente, verwenden. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für eine detaillierte Beschreibung dessen, was benötigt wird, an.

### Farbeingabetypen

Farbeingabetypen sind nicht allzu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Block voller Farbe mit einem kleinen Rahmen zu geben.

Sie können den Rahmen entfernen, indem Sie einfach einen Block voller Farbe zurücklassen, indem Sie so etwas verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch der einzige Weg, um etwas wesentlich anderes zu erzielen.

### Dateieingabetypen

Dateieingabetypen sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es relativ einfach, etwas zu erstellen, das gut zu den restlichen Elementen der Seite passt — die Ausgabelinie, die Teil der Steuerung ist, wird die übergeordnete Schriftart übernehmen, wenn Sie der Eingabe es sagen, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen auf jede beliebige Weise gestalten; wir haben sie schließlich erstellt.

Das einzige Problem bei Dateiauswahlfeldern ist, dass der Button, den Sie drücken, um den Dateiauswahl zu öffnen, überhaupt nicht gestaltbar ist — er kann nicht in der Größe oder Farbe geändert werden, und er akzeptiert nicht einmal eine andere Schriftart.

Ein Weg, dies zu umgehen, ist, die Tatsache zu nutzen, dass, wenn Sie ein Beschriftung mit einem Formular-Steuerungselement verknüpft haben, das Klicken auf die Beschriftung das Steuerungselement aktiviert. So könnten Sie die eigentliche Formulareingabe mit so etwas verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Etikett stilisieren, um wie eine Schaltfläche zu agieren, die, wenn sie gedrückt wird, wie erwartet die Dateiauswahl öffnet:

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

Sie können das Ergebnis der obigen CSS-Stilierung im nachstehenden Live-Beispiel sehen.

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

### Zähl- und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwer in irgendeiner Weise zu gestalten. Sie handhaben Höhenangaben zwischen einander und zwischen Browsern nicht konsistent, Sie können den Hintergrund kolorieren, aber nicht die Fortschrittsleiste, und die Einstellung von `appearance: none` auf ihnen macht die Dinge schlechter, nicht besser.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie die Gestaltung kontrollieren möchten, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten beim Verwenden von CSS mit HTML-Formularen gibt, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Für den Moment ist die beste Lösung, mehr über die Art und Weise zu lernen, wie verschiedene Browser CSS unterstützen, wenn es auf HTML-Formularsteuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir untersuchen, wie man [vollständig angepasste `<select>`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dafür verfügbaren modernen HTML- und CSS-Funktionen erstellt.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
