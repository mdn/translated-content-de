---
title: Fortgeschrittenes Formstyling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularelementen zu stylen, die schwieriger zu stylen sind – die „schlechten“ und „hässlichen“ Kategorien. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Schaltflächen sehr einfach zu stylen; nun werden wir uns mit dem Styling der problematischeren Teile befassen.

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
        Verstehen, welche Teile von Formularen schwierig zu stylen sind und warum; lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Um das zusammenzufassen, was wir im vorherigen Artikel gesagt haben, haben wir:

**Die schlechten**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder spezifische Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Die hässlichen**: Einige Elemente können nicht vollständig mit CSS gestylt werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalte wie bei regulären DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zuerst über die {{cssxref("appearance")}}-Eigenschaft sprechen, die nützlich ist, um alle oben genannten Elemente besser stylbar zu machen.

## `appearance`: Controlling OS-Level-Styling

Im vorherigen Artikel haben wir erwähnt, dass das Styling von Web-Formularsteuerelementen historisch weitgehend vom zugrunde liegenden Betriebssystem abgeleitet wurde, was Teil des Grundes für die Schwierigkeiten bei der Anpassung des Aussehens dieser Steuerelemente ist.

Die {{cssxref("appearance")}}-Eigenschaft wurde geschaffen, um zu kontrollieren, welches OS- oder System-Level-Styling auf Web-Formularsteuerelemente angewendet wird. Der bei weitem hilfreichste Wert und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein Steuerelement, auf das es angewendet wird, das System-Level-Styling nutzt, soweit dies möglich ist, und ermöglicht es Ihnen, die Stile selbst mit CSS aufzubauen.

Beispielsweise nehmen wir die folgenden Steuerelemente:

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

Die Anwendung des folgenden CSS entfernt das System-Level-Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie in Ihrem System aussehen – standardmäßig links und mit dem obigen CSS angewendet rechts.

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

In den meisten Fällen ist die Wirkung, dass der stilisierte Rahmen entfernt wird, was das CSS-Styling ein bisschen einfacher macht, aber nicht unbedingt erforderlich ist. In einigen Fällen, wie bei Optionsfeldern und Kontrollkästchen, wird es viel nützlicher. Wir werden uns diese nun ansehen.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war besonders nützlich, um [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elemente konsistent zu stylen. Ohne ihn erlaubte Safari nicht, dass {{cssxref("height")}}- oder {{cssxref("font-size")}}-Werte auf sie gesetzt wurden. Dies ist jedoch ab Safari 16 und später nicht mehr der Fall. Möglicherweise möchten Sie dennoch `input[type="search"]` explizit mit `appearance: none;` ansprechen, wenn Ihre Browserunterstützungsmatrix Safari-Versionen älter als 16 umfasst.

In Sucheingabefeldern verschwindet der "x"-Löschbutton, der erscheint, wenn der Wert nicht null ist, wenn das Eingabefeld in Edge und Chrome den Fokus verliert, bleibt jedoch in Safari bestehen. Um ihn mit CSS zu entfernen, können Sie die folgende Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Kontrollkästchen und Optionsfeldern mit `appearance`

Das Styling eines Kontrollkästchens oder eines Optionsfeldes ist standardmäßig schwierig. Die Größen der Standardstile von Kontrollkästchen und Optionsfeldern sind nicht zur Änderung gedacht, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen. Einige vergrößern die Größe des Steuerelements, andere halten das Steuerelement bei gleicher Größe und fügen zusätzlichen Platz darum herum hinzu.

Ein viel besserer Ansatz ist es, das Standard-Aussehen von Kontrollkästchen und Optionsfeldern vollständig mit {{cssxref("appearance", "appearance: none;")}} zu entfernen und dann Ihre eigenen Stile für deren verschiedene Zustände hinzuzufügen.

Nehmen Sie dieses Beispiel-HTML:

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

Dann können wir die {{cssxref(":checked")}}- und {{cssxref(":disabled")}}-Pseudoklassen verwenden, um das Aussehen unserer benutzerdefinierten Kontrollkästchen zu ändern, wenn sich ihr Zustand ändert:

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

Sie werden in dem [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) mehr über solche Pseudoklassen und mehr erfahren; die oben genannten tun Folgendes:

- `:checked` — das Kontrollkästchen (oder Optionsfeld) ist in einem aktivierten Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) ist in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/custom-radio-styles/index.html): Benutzerdefiniertes Optionsfeld-Design.
- [Toggle-Schalter-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Toggle-Schalter aussieht.

## Was kann man bei den "hässlichen" Elementen tun?

Konzentrieren wir uns nun auf die "hässlichen" Steuerelemente — die, die wirklich schwer gründlich zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und feedback-orientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente sehr unterschiedliche Standardaussehen in verschiedenen Browsern haben. Während man sie in gewisser Weise stylen kann, sind einige Teile ihres Inneren unmöglich zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden im Aussehen zu leben, können Sie mit ein wenig einfachem Styling deutliche Verbesserungen erzielen. Dazu gehören konsistente Größen und das Styling von Eigenschaften wie `background-color` sowie die Verwendung von `appearance`, um einige System-level Stylings zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Anzahl der "hässlichen" Formularfunktionen in Aktion zeigt:

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

Dieses Beispiel hat das folgende CSS angewendet:

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

Wir haben der Seite etwas JavaScript hinzugefügt, das die vom Dateipicker ausgewählten Dateien auflistet, unterhalb des Steuerelements selbst. Dies ist eine vereinfachte Version des Beispiels auf der Referenzseite zu [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples):

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

Im vorherigen Beispiel haben wir ziemlich gut geschafft, dass unsere hässlichen Steuerelemente in modernen Browsern einheitlich aussehen.

Wir haben einige globale normalisierende CSS zu allen Steuerelementen und deren Labels angewendet, damit sie gleich groß werden, die Schrift ihres Elternteils übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Bei anderen Steuerelementen wie Bereichstypen, Fortschrittsbalken und Metern fügen sie einfach ein hässliches Kästchen um den Steuerungsbereich hinzu, sodass es keinen Sinn macht.

Sprechen wir über einige spezifische dieser Steuerungstypen und heben dabei Schwierigkeiten hervor.

### Selects und Datalists

Einige Browser unterstützen jetzt [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalte wie bei regulären DOM-Elementen ermöglichen. In unterstützenden Browsern und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen älteren Techniken für `<select>`-Elemente kümmern.

Das Styling von Datalists und Selects (in Browsern, die anpassbare Selects nicht unterstützen) ermöglicht ein akzeptables Maß an Anpassung, vorausgesetzt, Sie möchten den Look and Feel nicht zu sehr von den Standardeinstellungen abweichen. Wir haben es geschafft, dass die Kästchen ziemlich einheitlich und konsistent aussehen. Das Datalist-aufrufende Steuerelement ist ohnehin ein `<input type="text">`, daher wussten wir, dass dies kein Problem sein würde.

Zwei Dinge sind etwas problematischer. Zunächst einmal unterscheidet sich das "Pfeil"-Icon des Select, das anzeigt, dass es sich um ein Dropdown handelt, in den Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe der Select-Box vergrößern oder in unschöner Weise verändern. Um dies in unserem Beispiel zu beheben, haben wir zunächst unseren alten Freund `appearance: none` verwendet, um das Icon komplett zu entfernen:

```css
select {
  appearance: none;
}
```

Dann haben wir unser eigenes Icon mit generiertem Inhalt erstellt. Wir haben eine zusätzliche Hülle um das Steuerelement gelegt, weil {{cssxref("::before")}}/{{cssxref("::after")}} auf `<select>`-Elementen nicht funktionieren (ihr Inhalt wird vollständig vom Browser kontrolliert):

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

Dann verwenden wir generierten Inhalt, um einen kleinen nach unten zeigenden Pfeil zu erzeugen und ihn mithilfe von Positionierung an die richtige Stelle zu setzen:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Kästchen haben, das erscheint und die Optionen enthält, wenn Sie auf das `<select>`-Kästchen klicken, um es zu öffnen. Sie können die Schriftart des Elternteils übernehmen, aber Sie können keine Dinge wie Abstände und Farben festlegen. Das gleiche gilt für die Autovervollständigungsliste, die bei {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich volle Kontrolle über das Styling der Optionen benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen. Im Fall von `<select>` könnten Sie auch das `multiple`-Attribut verwenden, das alle Optionen auf der Seite erscheinen lässt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise nicht zu dem Design, das Sie anstreben, aber es ist erwähnenswert!

### Date-Eingabetypen

Die Datum/Zeit-Eingabetypen ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe große damit verbundene Problem. Die tatsächliche umschließende Box ist so einfach zu stylen wie jede Text-Eingabe, und was wir in diesem Demo haben, sieht gut aus.

Die internen Teile des Steuerelements (z.B. der aufpoppende Kalender, den Sie zum Auswählen eines Datums verwenden, der Spinner, den Sie zur Erhöhung/Verringerung der Werte verwenden können) sind jedoch überhaupt nicht stilisierbar, und Sie können sie nicht mit `appearance: none;` entfernen. Wenn Sie wirklich volle Kontrolle über das Styling benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen.

> [!NOTE]
> Es ist auch erwähnenswert, hier [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) zu erwähnen — dies hat auch einen Spinner, den Sie zur Erhöhung/Verringerung der Werte verwenden können, und leidet daher möglicherweise am selben Problem. Im Fall des Zahlentyps sind die gesammelten Daten jedoch einfacher, und es ist einfach, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Erscheinungsbild von `text` hat, aber das numerische Tastenfeld in Geräten mit Touch-Tastaturen anzeigt.

### Range-Eingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist ärgerlich zu stylen. Sie können so etwas wie das Folgende verwenden, um die Standardschiebereglerleiste vollständig zu entfernen und durch einen benutzerdefinierten Stil zu ersetzen (eine dünne rote Leiste in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Schiebereglers der Range-Kontrolle anzupassen — um die volle Kontrolle über das Range-Styling zu erhalten, müssen Sie etwas komplexen CSS-Code verwenden, einschließlich mehrerer nicht standardisierter, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für eine ausführliche Beschreibung dessen, was benötigt wird.

### Farbeingabetypen

Eingabesteuerelemente des Typs Farbe sind nicht so schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Block aus Vollfarbe mit einem kleinen Rahmen zu geben.

Sie können den Rahmen entfernen, indem Sie lediglich den Farbbeitrag belassen:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch der einzige Weg, um etwas signifikant anderes zu erhalten.

### Datei-Eingabetypen

Eingaben des Typs Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das sich gut in den Rest der Seite einfügt — die Ausgabelinie, die Teil des Steuerelements ist, erbt die Schrift des Elternelements, wenn Sie der Eingabe dies sagen, und Sie können die benutzerdefinierte Liste von Dateinamen und -größen auf jede gewünschte Weise stylen; schließlich haben wir sie erstellt.

Das einzige Problem bei Dateipickern ist, dass die Schaltfläche, die Sie drücken, um den Dateipicker zu öffnen, völlig unstylbar ist — sie kann nicht in ihrer Größe oder Farbe angepasst werden, und sie nimmt nicht einmal eine andere Schriftart an.

Ein Weg, dies zu umgehen, besteht darin, sich den Umstand zunutze zu machen, dass, wenn Sie ein Label mit einem Formularelement assoziiert haben, ein Klick auf das Label das Steuerelement aktiviert. Sie können das tatsächliche Formularelement also mit so etwas:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label so stylen, dass es wie eine Schaltfläche aussieht, was, wenn gedrückt, den Dateipicker wie erwartet öffnet:

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

Sie können das Ergebnis der obigen CSS-Styling im Live-Beispiel unten sehen.

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

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die am schwierigsten zu stylenden. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwer auf irgendeine Weise zu stylen. Sie behandeln Höhenkonfigurationen nicht konsistent miteinander und zwischen den Browsern, Sie können den Hintergrund, aber nicht den Vordergrundbalken färben, und das Setzen von `appearance: none;` bei ihnen verschlechtert die Dinge eher als sie zu verbessern.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Funktionen zu erstellen, wenn Sie das Styling kontrollieren wollen, oder Sie verwenden eine Drittanbieterlösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples).

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten gibt, CSS mit HTML-Formularen zu verwenden, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Derzeit ist die beste Lösung, mehr darüber zu lernen, wie die verschiedenen Browser CSS unterstützen, wenn es auf HTML-Formularelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir untersuchen, wie man [vollständig angepasste `<select>`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dafür verfügbaren speziellen, modernen HTML- und CSS-Funktionen erstellt.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
