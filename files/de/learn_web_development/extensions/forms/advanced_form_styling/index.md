---
title: Erweitertes Formular-Styling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS getan werden kann, um die Arten von Formularsteuerelementen zu stylen, die schwieriger zu stylen sind — die Kategorien "schlecht" und "hässlich". Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons recht einfach zu stylen; nun werden wir in das Styling der problematischeren Teile eintauchen.

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
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum, und zu lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Wiederholung, was wir im vorherigen Artikel gesagt haben:

**Das Schlechte**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder einige spezifischere Tricks:

- Kontrollkästchen und Radio-Buttons
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können nicht umfassend mit CSS gestylt werden. Dazu gehören:

- Elemente, die an der Erstellung von Dropdown-Widgets beteiligt sind, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Sammlung von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalte ermöglichen, genau wie bei regulären DOM-Elementen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Zunächst sprechen wir über die [`appearance`](/de/docs/Web/CSS/Reference/Properties/appearance)-Eigenschaft, die nützlich ist, um alle oben genannten Elemente einfacher zu stylen.

## `appearance`: Betriebssystem-Ebene Styling kontrollieren

Im vorherigen Artikel haben wir erwähnt, dass das Styling von Webformular-Steuerelementen historisch gesehen größtenteils vom zugrunde liegenden Betriebssystem abgeleitet wurde, was ein Teil des Grundes ist, warum es schwierig ist, das Aussehen dieser Steuerelemente anzupassen.

Die {{cssxref("appearance")}}-Eigenschaft wurde entwickelt, um zu kontrollieren, welches Betriebssystem- oder System-Ebene-Styling auf Webformular-Steuerelemente angewendet wird. Der bei weitem hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein Steuerelement, auf das Sie es anwenden, so weit wie möglich ein systemeigenes Styling verwendet, und ermöglicht es Ihnen, die Styles selbst mit CSS zu gestalten.

Zum Beispiel nehmen wir die folgenden Steuerelemente:

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

Die Anwendung des folgenden CSS darauf entfernt das systemeigene Styling.

```css
input {
  appearance: none;
}
```

Das folgende Live-Beispiel zeigt Ihnen, wie sie in Ihrem System aussehen — standardmäßig links und mit dem oben angewendeten CSS rechts.

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

In den meisten Fällen besteht die Wirkung darin, den stilisierten Rahmen zu entfernen, was das CSS-Styling etwas erleichtert, aber nicht unbedingt wesentlich ist. In einigen Fällen, wie zum Beispiel bei Radio-Buttons und Kontrollkästchen, wird es jedoch viel nützlicher. Betrachten wir diese nun.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war einmal besonders nützlich für das einheitliche Styling von [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elementen. Ohne ihn erlaubte Safari das Setzen von {{cssxref("height")}} oder {{cssxref("font-size")}}-Werten auf ihnen nicht. Dies ist jedoch in Safari 16 und später nicht mehr der Fall. Sie möchten möglicherweise `input[type="search"]` weiterhin explizit mit `appearance: none;` ansprechen, wenn Ihre Browser-Support-Matrix Safari-Versionen älter als 16 enthält.

In Suchfeldern verschwindet der Löschbutton "x", der erscheint, wenn der Wert nicht null ist, in Edge und Chrome, wenn das Eingabefeld den Fokus verliert, bleibt jedoch in Safari bestehen. Um ihn CSS-mäßig zu entfernen, können Sie die folgende Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Kontrollkästchen und Radio-Buttons mit `appearance`

Das Styling eines Kontrollkästchens oder eines Radio-Buttons ist standardmäßig schwierig. Die Größen der Standardstile von Kontrollkästchen und Radio-Buttons sind nicht dafür gedacht, geändert zu werden, und Browser reagieren sehr unterschiedlich, wenn Sie es versuchen. Manche vergrößern die Größe des Steuerelements, und manche behalten die Größe des Steuerelements bei und fügen zusätzlichen Platz darum hinzu.

Ein viel besserer Ansatz ist es, das Standard-Aussehen von Kontrollkästchen und Radio-Buttons mit {{cssxref("appearance", "appearance: none;")}} vollständig zu entfernen und dann eigene Stile für ihre verschiedenen Zustände hinzuzufügen.

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

Lassen Sie uns diese mit einem benutzerdefinierten Kontrollkästchen-Design stylen. Wir beginnen damit, die ursprünglichen Kontrollkästchenstile zu entfernen:

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

Sie erfahren mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die obigen tun Folgendes:

- `:checked` — das Kontrollkästchen (oder der Radio-Button) befindet sich im ausgewählten Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder der Radio-Button) ist in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Radio-Button-Styling.
- [Toggle-Switch-Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Toggle-Switch gestylt ist.

## Was kann gegen die "hässlichen" Elemente getan werden?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — denjenigen, die wirklich schwer umfassend zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) sowie solche, die auf Feedback ausgerichtet sind, wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente in verschiedenen Browsern sehr unterschiedliche Standardaussehen haben, und während Sie sie in gewisser Weise stylen können, sind einige Teile ihrer internen Struktur unmöglich zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden im Aussehen und Verhalten zu leben, können Sie einige einfache Stylings verwenden, um die Dinge erheblich zu verbessern. Dazu gehören konsistente Größen und Stylings von Eigenschaften wie `background-color` und die Verwendung von `appearance`, um einige systembasierte Stylings zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Anzahl der "hässlichen" Formulareigenschaften in Aktion zeigt:

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

Sie können auch die **Abspielen**-Schaltfläche drücken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

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

Wir haben etwas JavaScript auf der Seite, das die von der Dateiauswahl ausgewählten Dateien unterhalb des Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) Referenzseite zu finden ist:

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

Im vorherigen Beispiel haben wir es recht gut hingekriegt, unsere hässlichen Steuerelemente in modernen Browsern einheitlich aussehen zu lassen.

Wir haben einige globale Normalisierungs-CSS auf alle Steuerelemente und ihre Labels angewendet, um sie auf die gleiche Weise zu dimensionieren, ihre Elternschriftart zu übernehmen, usw., wie im vorherigen Artikel erwähnt:

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

Bei anderen Steuerelementen wie Reichweiten, Fortschrittsbalken und Zählern fügen sie nur einen hässlichen Kasten um den Steuerungsbereich hinzu, sodass es keinen Sinn ergibt.

Sprechen wir über einige Besonderheiten dieser Steuerelementtypen und heben auf dem Weg die Schwierigkeiten hervor.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Sammlung von HTML- und CSS-Funktionen, die zusammen die vollständige Anpassung von `<select>`-Elementen und deren Inhalte ermöglichen, genau wie bei regulären DOM-Elementen. In unterstützenden Browsern und Codebasen müssen Sie sich keine Sorgen mehr über die unten beschriebenen Legacy-Techniken für `<select>`-Elemente machen.

Das Styling von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) ermöglicht ein akzeptables Maß an Anpassung, sofern Sie das Aussehen und das Verhalten nicht zu weit von den Standards abweichen möchten. Wir haben es geschafft, dass die Boxen ziemlich einheitlich und konsistent aussehen. Das Steuerelement, das die Datalist aufruft, ist ohnehin ein `<input type="text">`, sodass wir wussten, dass dies kein Problem sein würde.

Zwei Dinge sind leicht problematischer. Erstens unterscheidet sich das "Pfeil"-Icon des Selects, das anzeigt, dass es sich um ein Dropdown handelt, zwischen den Browsern. Außerdem neigt es dazu, sich zu ändern, wenn Sie die Größe der Auswahlliste ändern oder sie auf hässliche Weise skalieren. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Icon ganz loszuwerden:

```css
select {
  appearance: none;
}
```

Dann haben wir unser eigenes Icon mit erstelltem Inhalt erstellt. Wir haben eine zusätzliche Hülle um das Steuerelement gesetzt, da [`::before`](/de/docs/Web/CSS/Reference/Selectors/::before)/[`::after`](/de/docs/Web/CSS/Reference/Selectors/::after) nicht auf `<select>`-Elementen funktionieren (der Inhalt wird vollständig vom Browser kontrolliert):

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

Dann nutzen wir erzeugten Inhalt, um einen kleinen Abwärtspfeil zu generieren, und platzieren ihn an der richtigen Stelle, indem wir Positionierung verwenden:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Feld haben, das erscheint, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die Schriftart des Elternteils erben, aber Sie können nicht Dinge wie Abstände und Farben festlegen. Dasselbe gilt für die Autocomplete-Liste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über das Styling der Optionen haben möchten, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen. Im Fall von `<select>` können Sie auch das Attribut `multiple` verwenden, das alle Optionen auf der Seite erscheinen lässt und dieses spezielle Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich könnte dies auch nicht zum Design passen, das Sie anstreben, aber es ist erwähnenswert!

### Datumseingabe-Typen

Die Eingabetypen für Datum/Zeit ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle das gleiche größere zugeordnete Problem. Die eigentliche Box ist ebenso einfach wie jedes Texteingabefeld zu stylen, und was wir in dieser Demo haben, sieht gut aus.

Allerdings sind die internen Teile des Steuerelements (z.B. der Popup-Kalender, den Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie verwenden können, um Werte zu erhöhen/zu verringern) überhaupt nicht stylbar, und Sie können sie nicht mit `appearance: none;` loswerden. Wenn Sie wirklich die volle Kontrolle über das Styling haben möchten, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder Ihr eigenes erstellen.

> [!NOTE]
> Es ist erwähnenswert, dass auch [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) hier zu erwähnen ist – dies hat auch einen Spinner, den Sie verwenden können, um Werte zu erhöhen/zu verringern, und leidet daher möglicherweise unter dem gleichen Problem. Im Fall des Typs `number` sind die zu sammelnden Daten jedoch einfacher, und es ist leicht, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Erscheinungsbild eines `text` hat, aber die numerische Tastatur auf Geräten mit Touch-Tastaturen anzeigt.

### Reichweite-Eingabe-Typen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist ärgerlich zu stylen. Sie können etwas wie das folgende verwenden, um die Standardschieberegler-Spur vollständig zu entfernen und durch ein benutzerdefiniertes Styling (eine dünne rote Spur in diesem Fall) zu ersetzen:

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Allerdings ist es sehr schwierig, den Stil des Ziehgriffs des Bereichsreglers anzupassen — um vollständige Kontrolle über das Styling des Bereichs zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, einschließlich mehrerer nicht-standardisierter, browser-spezifischer Pseudoelemente. Lesen Sie [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) auf CSS-Tricks für eine ausführliche Beschreibung dessen, was benötigt wird.

### Farbe-Eingabe-Typen

Eingabesteuerungen des Typs `color` sind nicht allzu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Farbblock mit einem kleinen Rand zu geben.

Sie können den Rand entfernen und nur den Farbblock lassen, indem Sie etwas wie dies verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Allerdings ist eine benutzerdefinierte Lösung der einzige Weg, um etwas signifikant anderes zu erhalten.

### Datei-Eingabe-Typen

Eingaben vom Typ `file` sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es ziemlich einfach, etwas zu erstellen, das gut mit dem Rest der Seite funktioniert — die Ausgabelinie, die Teil der Steuerung ist, erbt die Schriftart des Elternteils, wenn Sie der Eingabe sagen, dies zu tun, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen auf jede gewünschte Weise stylen; schließlich haben wir sie selbst erstellt.

Das einzige Problem bei Dateiauswahlen ist, dass der Button, den Sie drücken, um die Dateiauswahl zu öffnen, überhaupt nicht stylbar ist — er kann weder dimensioniert noch gefärbt werden, und akzeptiert nicht einmal eine andere Schriftart.

Ein möglicher Weg ist, die Tatsache zu nutzen, dass, wenn Sie ein Label mit einer Steuerelement verknüpft haben, das Klicken auf das Label das Steuerelement aktiviert. Also können Sie das tatsächliche Formulareingabeelement mit etwas wie diesem ausblenden:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label stylen, damit es wie ein Button funktioniert, der, wenn er gedrückt wird, die Dateiauswahl wie erwartet öffnet:

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

Sie können das Ergebnis des oben genannten CSS-Stylings im Live-Beispiel unten sehen.

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

Sie können auch die **Abspielen**-Schaltfläche drücken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

### Zähler und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie im früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite setzen. Aber darüber hinaus sind sie wirklich schwer auf irgendeine Weise zu stylen. Sie behandeln Höhenangaben zwischen einander und zwischen Browsern nicht konsistent, Sie können den Hintergrund färben, aber nicht den Vordergrundbalken, und das Setzen von `appearance: none` auf sie macht die Dinge schlechter, nicht besser.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Features zu erstellen, wenn Sie die Stilkontrolle haben möchten, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmобруnfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten gibt, CSS mit HTML-Formularen zu verwenden, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Für jetzt ist die beste Lösung, mehr darüber zu lernen, wie verschiedene Browser CSS unterstützen, wenn es auf HTML-Formularsteuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir die Erstellung von [vollständig angepassten `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den für diesen Zweck verfügbaren speziellen, modernen HTML- und CSS-Funktionen erkunden.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
