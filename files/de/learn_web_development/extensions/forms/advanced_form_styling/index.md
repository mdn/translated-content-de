---
title: Erweiterte Formularstyling
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel werden wir sehen, was mit CSS gemacht werden kann, um die Arten von Formularsteuerelementen zu stylen, die schwieriger zu stylen sind — die "schlechten" und "hässlichen" Kategorien. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, sind Textfelder und Buttons perfekt einfach zu stylen; jetzt werden wir uns mit den problematischeren Teilen auseinandersetzen.

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

Zusammenfassend haben wir im vorherigen Artikel erwähnt:

**Das Schlechte**: Einige Elemente sind schwieriger zu stylen und erfordern komplexeres CSS oder spezifische Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Das Hässliche**: Einige Elemente können nicht vollständig mit CSS gestylt werden. Dazu gehören:

- Elemente zur Erstellung von Dropdown-Widges, einschließlich {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen jetzt [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Features, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalten wie bei normalen DOM-Elementen ermöglichen.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Lassen Sie uns zunächst über die [`appearance`](/de/docs/Web/CSS/Reference/Properties/appearance)-Eigenschaft sprechen, die nützlich ist, um all das oben Genannte besser stylbar zu machen.

## `appearance`: Steuerung des Betriebssystem-Styles

Im vorherigen Artikel haben wir erwähnt, dass das Styling von Webformularsteuerelementen historisch weitgehend vom zugrunde liegenden Betriebssystem abgeleitet wurde, was ein Teil des Problems beim Anpassen des Aussehens dieser Steuerelemente darstellt.

Die {{cssxref("appearance")}}-Eigenschaft wurde geschaffen, um zu kontrollieren, welcher OS- oder systemlevel Style auf Webformularsteuerelemente angewendet wird. Der bei weitem hilfreichste Wert, und wahrscheinlich der einzige, den Sie verwenden werden, ist `none`. Dies verhindert, dass ein von Ihnen gewähltes Steuerelement so weit wie möglich systeminterne Stile verwendet und ermöglicht es Ihnen, die Stile selbst mit CSS aufzubauen.

Zum Beispiel, nehmen wir die folgenden Steuerelemente:

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

Die Anwendung des folgenden CSS auf sie entfernt das systeminterne Styling.

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

In den meisten Fällen wird dadurch der gestylte Rand entfernt, was das CSS-Styling etwas erleichtert, aber nicht unbedingt ist. In einigen Fällen, wie bei Optionsfeldern und Kontrollkästchen, wird es wesentlich nützlicher. Wir werden uns diese jetzt anschauen.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war früher besonders nützlich, um [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elemente konsistent zu stylen. Ohne diesen ließ Safari keine {{cssxref("height")}}- oder {{cssxref("font-size")}}-Werte darauf zu. Dies ist jedoch ab Safari 16 nicht mehr der Fall. Möglicherweise möchten Sie `input[type="search"]` mit `appearance: none;` explizit anvisieren, wenn Ihre Browser-Support-Matrix Safari-Versionen älter als 16 umfasst.

In Suchfelder verschwindet der "x"-Lösch-Button, der erscheint, wenn der Wert nicht null ist, beim Verlust des Fokus im Edge und Chrome, bleibt jedoch in Safari. Um ihn per CSS zu entfernen, können Sie die folgende Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Styling von Kontrollkästchen und Optionsfeldern mit `appearance`

Das Styling eines Kontrollkästchens oder eines Optionsfeldes ist standardmäßig schwierig. Die Größen der Standardstile von Kontrollkästchen und Optionsfeld sind nicht für Änderungen gedacht und Browser reagieren sehr unterschiedlich, wenn Sie dies versuchen. Einige vergrößern die Größe des Steuerelements und einige halten das Steuerelement gleich groß und fügen zusätzlichen Raum darum herum hinzu.

Ein viel besserer Ansatz ist es, das Standard-Aussehen von Kontrollkästchen und Optionsfeldern mit {{cssxref("appearance", "appearance: none;")}} ganz zu entfernen und dann eigene Stile für die verschiedenen Zustände hinzuzufügen.

Lassen Sie uns dieses Beispiel-HTML nehmen:

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

Wir können dann die {{cssxref(":checked")}}- und {{cssxref(":disabled")}}-Pseudoklassen nutzen, um das Erscheinungsbild unserer benutzerdefinierten Kontrollkästchen zu ändern, wenn sich ihr Zustand ändert:

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

Sie erfahren mehr über solche Pseudoklassen und mehr im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes); die obigen machen Folgendes:

- `:checked` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem aktivierten Zustand — der Benutzer hat es angeklickt/aktiviert.
- `:disabled` — das Kontrollkästchen (oder Optionsfeld) befindet sich in einem deaktivierten Zustand — es kann nicht interagiert werden.

Sie können das Live-Ergebnis sehen:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben auch ein paar andere Beispiele erstellt, um Ihnen mehr Ideen zu geben:

- [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): Benutzerdefiniertes Optionsfeld-Design.
- [Toggle-Schalter Beispiel](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Kippschalter gestaltet ist.

## Was kann man gegen die "hässlichen" Elemente machen?

Wenden wir uns nun den "hässlichen" Steuerelementen zu — die wirklich schwer vollständig zu stylen sind. Kurz gesagt, dies sind Dropdown-Boxen, komplexe Steuerungstypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), und feedback-orientierte Steuerelemente wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente in verschiedenen Browsern sehr unterschiedlich aussehen, und obwohl Sie sie auf gewisse Weise stylen können, sind einige Teile ihrer Interna nicht zu stylen.

Wenn Sie bereit sind, mit einigen Unterschieden im Aussehen und Gefühl zu leben, können Sie einige einfache Stile verwenden, um die Dinge erheblich zu verbessern. Dies umfasst konsistente Größen und Styling von Eigenschaften wie `background-color` und die Verwendung von `appearance`, um einige systeminterne Stile zu entfernen.

Nehmen Sie das folgende Beispiel, das eine Reihe der "hässlichen" Formularelemente in Aktion zeigt:

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

Wir haben einige JavaScript auf der Seite hinzugefügt, das die von dem Dateiauswähler ausgewählten Dateien unter dem Steuerelement selbst auflistet. Dies ist eine vereinfachte Version des Beispiels, das auf der Referenzseite von [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples) zu finden ist:

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

Wir haben einige globale normalisierende CSS auf alle Steuerelemente und deren Labels angewendet, um sie auf die gleiche Weise zu dimensionieren, ihre Elternschrift zu übernehmen usw., wie im vorherigen Artikel erwähnt:

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

Wir haben auch einheitliche Schatten und abgerundete Ecken zu den Steuerelementen hinzugefügt, wo es sinnvoll ist:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Bereichsarten, Fortschrittsbalken und Messgeräten fügen sie nur eine hässliche Box um das Steuerungsbereich hinzu, sodass es keinen Sinn macht.

Lassen Sie uns einige Besonderheiten jedes dieser Steuerungstypen besprechen und dabei auf Schwierigkeiten hinweisen.

### Selects und Datalists

Einige Browser unterstützen jetzt [anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), eine Reihe von HTML- und CSS-Features, die zusammen eine vollständige Anpassung von `<select>`-Elementen und deren Inhalten wie bei normalen DOM-Elementen ermöglichen. In unterstützenden Browsern und Codebasen müssen Sie sich nicht mehr um die unten beschriebenen älteren Techniken für `<select>`-Elemente kümmern.

Das Styling von Datalists und Selects (in Browsern, die keine anpassbaren Selects unterstützen) ermöglicht ein akzeptables Maß an Anpassung, solange Sie das Aussehen nicht allzu sehr von den Voreinstellungen abweichen möchten. Wir haben es geschafft, die Boxen ziemlich einheitlich und konsistent aussehen zu lassen. Der Datalist-aufrufende Steuerung ist ohnehin ein `<input type="text">`, also wussten wir, dass dies kein Problem darstellen würde.

Zwei Dinge sind etwas problematischer. Zunächst einmal unterscheidet sich das "Pfeil"-Icon des Selects, das anzeigt, dass es sich um ein Dropdown handelt, zwischen den Browsern. Es neigt auch dazu, sich zu ändern, wenn Sie die Größe des Select-Kastens erhöhen oder ihn in einer hässlichen Weise neu dimensionieren. Um dies in unserem Beispiel zu beheben, haben wir zuerst unseren alten Freund `appearance: none` verwendet, um das Icon ganz zu entfernen:

```css
select {
  appearance: none;
}
```

Dann haben wir unser eigenes Icon mit generiertem Inhalt erstellt. Wir haben einen zusätzlichen Wrapper um das Steuerungselement gelegt, da [`::before`](/de/docs/Web/CSS/::before)/[`::after`](/de/docs/Web/CSS/::after) nicht bei `<select>`-Elementen funktionieren (ihr Inhalt wird vollständig vom Browser kontrolliert):

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

Dann verwenden wir generierten Inhalt, um einen kleinen nach unten zeigenden Pfeil zu erzeugen und platzieren diesen an der richtigen Stelle, indem wir Positionierung verwenden:

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

Das zweite, etwas wichtigere Problem ist, dass Sie keine Kontrolle über das Feld haben, das erscheint, wenn Sie auf das `<select>`-Feld klicken, um es zu öffnen. Sie können die Schriftart des Elternteils erben, aber Sie können keine Dinge wie Abstände und Farben festlegen. Gleiches gilt für die Autovervollständigungs-Liste, die mit {{HTMLElement("datalist")}} erscheint.

Wenn Sie wirklich die volle Kontrolle über das Styling der Optionen benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren oder selbst eines erstellen. Im Falle von `<select>` könnten Sie auch das Attribut `multiple` verwenden, das alle Optionen auf der Seite erscheinen lässt und dieses bestimmte Problem umgeht:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Natürlich passt dies möglicherweise auch nicht zu dem von Ihnen angestrebten Design, aber es ist erwähnenswert!

### Dateneingabetypen

Die Datums-/Zeiteingabearten ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle das gleiche größere zugehörige Problem. Die eigentliche Containerbox ist genauso einfach zu stylen wie jede Texteingabe, und was wir in dieser Demo haben, sieht gut aus.

Die internen Teile der Steuerung (z.B. das Popup-Kalender, das Sie verwenden, um ein Datum auszuwählen, der Spinner, den Sie verwenden können, um Werte zu inkrementieren/dekrementieren) sind jedoch überhaupt nicht stylbar, und Sie können sie nicht mit `appearance: none;` entfernen. Wenn Sie wirklich die volle Kontrolle über das Styling benötigen, müssen Sie entweder eine Bibliothek verwenden, um ein benutzerdefiniertes Steuerelement zu generieren, oder selbst eines erstellen.

> [!NOTE]
> Es ist erwähnenswert, dass [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) hier ebenfalls eine Rolle spielt — dieses hat ebenfalls einen Spinner, den Sie verwenden können, um Werte zu inkrementieren/dekrementieren, und leidet daher potenziell unter dem gleichen Problem. Im Falle des `number`-Typs sind die gesammelten Daten jedoch einfacher und es ist leicht, stattdessen einen `tel`-Eingabetyp zu verwenden, der das Erscheinungsbild von `text` hat, aber die numerische Tastatur in Geräten mit Touch-Tastaturen anzeigt.

### Bereichseingabetypen

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist ärgerlich zu stylen. Sie können etwas wie das folgende verwenden, um die Standard-Reglerleiste vollständig zu entfernen und durch einen benutzerdefinierten Stil zu ersetzen (eine dünne rote Leiste in diesem Fall):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Es ist jedoch sehr schwierig, den Stil des Ziehgriffs der Bereichssteuerung zu ändern — um die volle Kontrolle über das Styling des Bereichs zu erhalten, müssen Sie einige komplexe CSS-Codes verwenden, einschließlich mehrerer nicht standardmäßiger, browserspezifischer Pseudoelemente. Schauen Sie sich [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) bei CSS-Tricks für eine detaillierte Aufschlüsselung der erforderlichen Schritte an.

### Farbeingabetypen

Eingabesteuerungen des Typs Farbe sind nicht allzu schlecht. In unterstützenden Browsern neigen sie dazu, Ihnen einen Block von Vollfarbe mit einem kleinen Rand zu geben.

Sie können den Rand entfernen, indem Sie nur den Farbblock übrig lassen, indem Sie etwas wie das Folgende verwenden:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Eine benutzerdefinierte Lösung ist jedoch die einzige Möglichkeit, etwas signifikant Unterschiedliches zu erhalten.

### Dateieingabetypen

Eingaben des Typs Datei sind im Allgemeinen in Ordnung — wie Sie in unserem Beispiel gesehen haben, ist es relativ einfach, etwas zu erstellen, das gut mit dem Rest der Seite übereinstimmt — die Ausgabeline, die Teil der Steuerung ist, wird die Elternschrift übernehmen, wenn Sie die Eingabe dazu anweisen, dies zu tun, und Sie können die benutzerdefinierte Liste der Dateinamen und -größen in beliebiger Weise stylen; wir haben sie schließlich erstellt.

Das einzige Problem mit Dateiauswählern ist, dass der Button, den Sie drücken, um den Dateiauswähler zu öffnen, völlig unstylbar ist — er kann nicht in der Größe verändert oder eingefärbt werden, und er wird nicht einmal eine andere Schriftart akzeptieren.

Ein Weg, dies zu umgehen, besteht darin, die Tatsache auszunutzen, dass, wenn Sie ein Label mit einem Formularsteuerelement verknüpft haben, das Anklicken des Labels das Steuerelement aktiviert. So können Sie die tatsächliche Formulareingabe mit etwas wie dem folgenden verstecken:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Und dann das Label gestalten, damit es wie ein Button aussieht, der beim Drücken den Dateiauswähler wie erwartet öffnet:

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

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

### Meter und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schlimmsten von allen. Wie Sie in dem früheren Beispiel gesehen haben, können wir sie relativ genau auf die gewünschte Breite einstellen. Aber darüber hinaus sind sie wirklich schwer in irgendeiner Weise zu stylen. Sie behandeln Höhen-Einstellungen nicht konsistent zwischen einander und zwischen den Browsern, Sie können den Hintergrund färben, aber nicht den Vordergrundbalken, und `appearance: none` auf sie anzuwenden, verschlechtert die Dinge, anstatt sie zu verbessern.

Es ist einfacher, Ihre eigene benutzerdefinierte Lösung für diese Features zu erstellen, wenn Sie die Kontrolle über das Styling wünschen, oder eine Drittanbieter-Lösung wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Obwohl es immer noch Schwierigkeiten gibt, CSS mit HTML-Formularen zu verwenden, gibt es Möglichkeiten, viele der Probleme zu umgehen. Es gibt keine sauberen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Im Moment besteht die beste Lösung darin, mehr über die Art und Weise zu lernen, wie die verschiedenen Browser CSS-Unterstützung bieten, wenn es auf HTML-Formularsteuerelemente angewendet wird.

Im nächsten Artikel dieses Moduls werden wir erkunden, wie man [vollständig angepasste `<select>`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) mit den dedizierten modernen HTML- und CSS-Features für diesen Zweck erstellt.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
