---
title: Fortgeschrittenes Styling von Formularen
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

In diesem Artikel sehen wir uns an, wie sich mit CSS die Formularelemente gestalten lassen, bei denen das Styling schwieriger ist – die „schwierigen“ und die „besonders schwierigen“ Fälle. Wie wir [im vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) gesehen haben, lassen sich Textfelder und Schaltflächen problemlos gestalten. Jetzt befassen wir uns mit den problematischeren Elementen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu gestalten sind und warum;
        lernen, wie sie sich anpassen lassen.
      </td>
    </tr>
  </tbody>
</table>

Zur Erinnerung an den vorherigen Artikel:

**Die schwierigen Fälle**: Einige Elemente sind schwieriger zu gestalten und erfordern komplexeres CSS oder spezielle Tricks:

- Kontrollkästchen und Optionsfelder
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)

**Die besonders schwierigen Fälle**: Einige Elemente lassen sich mit CSS nicht umfassend gestalten. Dazu gehören:

- Elemente zum Erstellen von Dropdown-Steuerelementen, darunter {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} und {{HTMLElement("datalist")}}.
  > [!NOTE]
  > Einige Browser unterstützen inzwischen [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Dabei handelt es sich um eine Reihe von HTML- und CSS-Funktionen, mit denen sich `<select>`-Elemente und ihre Inhalte ebenso vollständig anpassen lassen wie gewöhnliche DOM-Elemente.
- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
- Datumsbezogene Steuerelemente wie [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} und {{HTMLElement("meter")}}

Sprechen wir zunächst über die Eigenschaft {{cssxref("appearance")}}, mit der sich all diese Elemente leichter gestalten lassen.

## `appearance`: Styling auf Betriebssystemebene steuern

Im vorherigen Artikel haben wir erwähnt, dass sich das Styling von Web-Formularelementen historisch gesehen weitgehend vom zugrunde liegenden Betriebssystem ableitete. Das ist ein Grund dafür, dass sich ihr Erscheinungsbild nur schwer anpassen lässt.

Die Eigenschaft {{cssxref("appearance")}} wurde eingeführt, um zu steuern, welches Styling auf Betriebssystem- oder Systemebene auf Web-Formularelemente angewendet wird. Der mit Abstand nützlichste Wert – und vermutlich der einzige, den Sie verwenden werden – ist `none`. Er verhindert, soweit möglich, dass ein Steuerelement Styling auf Systemebene verwendet, sodass Sie sein Aussehen selbst mit CSS gestalten können.

Betrachten wir beispielsweise die folgenden Steuerelemente:

```html
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
```

Das folgende CSS entfernt bei ihnen das Styling auf Systemebene.

```css
input {
  appearance: none;
}
```

Das folgende interaktive Beispiel zeigt, wie die Steuerelemente auf Ihrem System aussehen: links mit dem Standard-Styling und rechts mit dem oben gezeigten CSS.

```html hidden live-sample___appearance-tester
<div>
  <div class="controls">
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
  </div>
</div>
<div class="appearance">
  <div class="controls">
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
  </div>
</div>
```

```css hidden live-sample___appearance-tester
body {
  margin: 20px auto;
  max-width: 800px;
  justify-content: space-around;
}

body,
.controls > div {
  display: flex;
}

.controls > div {
  margin-bottom: 20px;
}

.appearance input {
  appearance: none;
}
```

{{EmbedLiveSample("appearance-tester", '100%', 350)}}

In den meisten Fällen wird der gestaltete Rahmen entfernt. Das erleichtert das Styling mit CSS etwas, ist aber nicht unbedingt erforderlich. Bei Optionsfeldern und Kontrollkästchen ist die Eigenschaft wesentlich nützlicher. Diese sehen wir uns jetzt an.

### Suchfelder und `appearance`

Der Wert `appearance: none;` war früher besonders hilfreich, um [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)-Elemente einheitlich zu gestalten. Ohne ihn ließ Safari nicht zu, {{cssxref("height")}}- oder {{cssxref("font-size")}}-Werte für diese Elemente festzulegen. Ab Safari 16 ist das nicht mehr der Fall. Wenn Sie auch Safari-Versionen vor Version 16 unterstützen müssen, können Sie `input[type="search"]` weiterhin ausdrücklich mit `appearance: none;` ansprechen.

Bei Sucheingabefeldern verschwindet die mit einem „x“ gekennzeichnete Löschschaltfläche, die bei einem nicht leeren Wert erscheint, in Edge und Chrome, sobald das Eingabefeld den Fokus verliert. In Safari bleibt sie sichtbar. Um sie mit CSS zu entfernen, können Sie die folgende Regel verwenden:

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### Farbakzente für Formularelemente mit `accent-color` festlegen

Wenn Sie nur die primäre Akzentfarbe von Kontrollkästchen, Optionsfeldern oder Schiebereglern gestalten möchten, können Sie dafür {{cssxref("accent-color")}} verwenden, ohne `appearance: none` zu benötigen. Das eignet sich für einfaches Styling: Die Steuerelemente behalten ihr Erscheinungsbild auf Betriebssystemebene, erhalten aber eine andere Hauptfarbe.

```html live-sample___accent-color
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
```

```css live-sample___accent-color
input {
  accent-color: rebeccapurple;
}
```

{{EmbedLiveSample("accent-color", '100%', 200)}}

Da die Steuerelemente ihr natives Erscheinungsbild behalten, folgen sie ohne zusätzlichen Aufwand den Konventionen der Plattform – auch in Modi mit erzwungenen Farben. Außerdem wählt der Browser automatisch eine ergänzende Sekundärfarbe mit ausreichendem Kontrast zu `accent-color`, damit das Steuerelement zugänglich bleibt. Probieren Sie im interaktiven Beispiel oben helle und dunkle Werte für `accent-color` aus, um die Wirkung zu sehen.

### Kontrollkästchen und Optionsfelder mit `appearance` gestalten

Für weitergehendes Styling eines Kontrollkästchens oder Optionsfelds ist mehr Aufwand nötig. Ihre Standardgrößen waren nicht dafür gedacht, geändert zu werden, und Browser reagieren auf solche Versuche sehr unterschiedlich: Manche vergrößern das Steuerelement, andere behalten seine Größe bei und fügen zusätzlichen Platz darum herum hinzu.

Ein wesentlich besserer Ansatz ist es, mit {{cssxref("appearance", "appearance: none;")}} das Standard-Erscheinungsbild von Kontrollkästchen und Optionsfeldern vollständig zu entfernen und anschließend eigene Styles für ihre verschiedenen Zustände hinzuzufügen.

Betrachten wir dieses HTML-Beispiel:

```html live-sample___checkboxes-styled
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
```

Wir gestalten die Elemente als benutzerdefinierte Kontrollkästchen. Zuerst entfernen wir deren ursprüngliches Styling:

```css live-sample___checkboxes-styled
input[type="checkbox"] {
  appearance: none;
}
```

Anschließend können wir mit den Pseudoklassen {{cssxref(":checked")}} und {{cssxref(":disabled")}} das Erscheinungsbild unserer Kontrollkästchen an ihren jeweiligen Zustand anpassen:

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

Mehr über diese und andere Pseudoklassen erfahren Sie im [nächsten Artikel](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes). Die oben verwendeten Pseudoklassen bedeuten:

- `:checked` – das Kontrollkästchen (oder Optionsfeld) ist aktiviert; die Person, die das Formular verwendet, hat es angeklickt oder anderweitig aktiviert.
- `:disabled` – das Kontrollkästchen (oder Optionsfeld) ist deaktiviert; es kann nicht verwendet werden.

Hier sehen Sie das interaktive Ergebnis:

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

Wir haben außerdem zwei weitere Beispiele erstellt, die Ihnen Anregungen geben können:

- [Gestaltete Optionsfelder](https://mdn.github.io/learning-area/html/forms/custom-radio-styles/index.html): Benutzerdefiniertes Styling von Optionsfeldern.
- [Beispiel für einen Kippschalter](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): Ein Kontrollkästchen, das wie ein Kippschalter gestaltet ist.

## Was lässt sich bei den besonders schwierigen Elementen tun?

Wenden wir uns nun den besonders schwierigen Steuerelementen zu – also denen, die sich nur schwer umfassend gestalten lassen. Dazu gehören Dropdown-Felder, komplexe Steuerelementtypen wie [`color`](/de/docs/Web/HTML/Reference/Elements/input/color) und [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) sowie Steuerelemente zur Anzeige von Rückmeldungen wie {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

Das Problem ist, dass diese Elemente je nach Browser standardmäßig sehr unterschiedlich aussehen. Zwar können Sie sie teilweise gestalten, doch manche ihrer internen Bestandteile lassen sich überhaupt nicht anpassen.

Wenn Sie gewisse Unterschiede im Erscheinungsbild akzeptieren können, lässt sich mit einfachem Styling bereits viel verbessern. Dazu gehören einheitliche Größen und die Gestaltung von Eigenschaften wie `background-color` sowie der Einsatz von `appearance`, um einen Teil des Stylings auf Systemebene zu entfernen.

Das folgende Beispiel zeigt mehrere dieser besonders schwierigen Formularelemente:

```html hidden live-sample___ugly-styling
<div class="controls">
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
  <div><button type="button">Submit?</button></div>
</div>
```

{{EmbedLiveSample("ugly-styling", '100%', 750)}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

Auf dieses Beispiel wird das folgende CSS angewendet:

```css live-sample___ugly-styling
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

.controls > div {
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
  top: 6px;
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

Wir haben der Seite außerdem JavaScript hinzugefügt, das die über die Dateiauswahl ausgewählten Dateien unterhalb des Steuerelements auflistet. Dies ist eine vereinfachte Version des Beispiels auf der Referenzseite zu [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file#examples):

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

### „Globale“ Styles

Im vorherigen Beispiel ist es uns recht gut gelungen, den besonders schwierigen Steuerelementen in modernen Browsern ein einheitliches Erscheinungsbild zu geben.

Wie im vorherigen Artikel beschrieben, haben wir auf alle Steuerelemente und ihre Beschriftungen normalisierendes CSS angewendet, damit sie auf die gleiche Weise bemessen werden, die Schrift ihres Elternelements übernehmen und so weiter:

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

Wo es sinnvoll ist, haben wir den Steuerelementen außerdem einheitliche Schatten und abgerundete Ecken hinzugefügt:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Bei anderen Steuerelementen wie Schiebereglern, Fortschrittsbalken und Messanzeigen entsteht dadurch lediglich ein unansehnlicher Kasten um das Steuerelement. Dort ist das also nicht sinnvoll.

Sehen wir uns nun die einzelnen Steuerelementtypen und die Schwierigkeiten bei ihrer Gestaltung genauer an.

### Select-Elemente und Datalists

Einige Browser unterstützen inzwischen [anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Dabei handelt es sich um eine Reihe von HTML- und CSS-Funktionen, mit denen sich `<select>`-Elemente und ihre Inhalte ebenso vollständig anpassen lassen wie gewöhnliche DOM-Elemente. Wenn Ihr Browser und Ihre Codebasis diese Funktionen unterstützen, brauchen Sie sich bei `<select>`-Elementen nicht mehr mit den nachfolgend beschriebenen älteren Techniken zu befassen.

Datalists und Select-Elemente lassen sich – in Browsern ohne Unterstützung für anpassbare Select-Elemente – in akzeptablem Umfang gestalten, solange Sie nicht zu stark vom Standard-Erscheinungsbild abweichen möchten. Wir haben erreicht, dass die Felder ziemlich einheitlich aussehen. Das Steuerelement, das die Datalist aufruft, ist ohnehin ein `<input type="text">`. Daher war hier kein Problem zu erwarten.

Zwei Dinge sind etwas schwieriger. Erstens unterscheidet sich das Pfeilsymbol des Select-Elements, das auf ein Dropdown-Menü hinweist, je nach Browser. Es verändert sich außerdem häufig, wenn Sie das Select-Feld vergrößern oder seine Größe auf ungünstige Weise ändern. Um dieses Problem in unserem Beispiel zu beheben, haben wir zunächst mit unserem alten Bekannten `appearance: none` das Symbol vollständig entfernt:

```css
select {
  appearance: none;
}
```

Anschließend haben wir mithilfe generierter Inhalte ein eigenes Symbol erstellt. Dazu haben wir ein zusätzliches umschließendes Element um das Steuerelement gelegt, da {{cssxref("::before")}}/{{cssxref("::after")}} bei `<select>`-Elementen nicht funktionieren (ihr Inhalt wird vollständig vom Browser gesteuert):

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

Dann erzeugen wir mit generierten Inhalten einen kleinen Abwärtspfeil und platzieren ihn durch Positionierung an der richtigen Stelle:

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

Das zweite, etwas wichtigere Problem ist, dass Sie das Feld mit den Optionen nicht kontrollieren können, das beim Anklicken des `<select>`-Felds erscheint. Es kann die auf dem Elternelement festgelegte Schrift übernehmen, aber Abstände und Farben können Sie beispielsweise nicht festlegen. Dasselbe gilt für die Autovervollständigungsliste, die bei {{HTMLElement("datalist")}} erscheint.

Wenn Sie das Styling der Optionen vollständig kontrollieren müssen, benötigen Sie entweder eine Bibliothek, die ein benutzerdefiniertes Steuerelement erzeugt, oder Sie müssen selbst eines erstellen. Bei `<select>` können Sie auch das Attribut `multiple` verwenden. Dadurch erscheinen alle Optionen direkt auf der Seite, und Sie umgehen dieses spezielle Problem:

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

Das passt natürlich möglicherweise nicht zu Ihrem gewünschten Design, ist aber eine erwähnenswerte Möglichkeit.

### Eingabetypen für Datum und Uhrzeit

Die Eingabetypen für Datum und Uhrzeit ([`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/de/docs/Web/HTML/Reference/Elements/input/time), [`week`](/de/docs/Web/HTML/Reference/Elements/input/week), [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)) haben alle dasselbe wesentliche Problem. Das umschließende Feld lässt sich ebenso leicht gestalten wie jedes Texteingabefeld, und das Ergebnis in dieser Demo sieht gut aus.

Die internen Bestandteile des Steuerelements – beispielsweise der aufklappbare Kalender zur Datumsauswahl oder das Bedienelement zum Erhöhen und Verringern von Werten – lassen sich jedoch überhaupt nicht gestalten. Sie können sie auch nicht mit `appearance: none;` entfernen. Wenn Sie das Styling vollständig kontrollieren müssen, benötigen Sie entweder eine Bibliothek, die ein benutzerdefiniertes Steuerelement erzeugt, oder Sie müssen selbst eines erstellen.

> [!NOTE]
> Auch [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) verfügt über ein Bedienelement zum Erhöhen und Verringern des Werts. Seine internen Bestandteile lassen sich ebenfalls nur schwer gestalten. Wenn Sie dieses Bedienelement entfernen möchten, verwenden Sie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) mit [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode), damit auf Geräten mit Bildschirmtastatur ein Ziffernblock angezeigt wird, sowie ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das die Eingabe auf Zahlen beschränkt. Siehe auch [`<input type="number">` > Barrierefreiheit](/de/docs/Web/HTML/Reference/Elements/input/number#accessibility).

### Eingabetypen für Wertebereiche

[`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) ist schwierig zu gestalten. Mit CSS wie dem folgenden können Sie die standardmäßige Spur des Schiebereglers vollständig entfernen und durch einen eigenen Style ersetzen – in diesem Fall eine dünne rote Spur:

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

Der Ziehgriff des Wertebereich-Steuerelements lässt sich allerdings nur sehr schwer anpassen. Um das Styling vollständig zu kontrollieren, benötigen Sie komplexes CSS mit mehreren nicht standardisierten, browserspezifischen Pseudoelementen. Eine ausführliche Beschreibung der nötigen Schritte finden Sie im CSS-Tricks-Artikel [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/).

### Eingabetypen für Farben

Eingabesteuerelemente vom Typ `color` sind weniger problematisch. In Browsern, die sie unterstützen, erscheinen sie meist als einfarbige Fläche mit einem schmalen Rahmen.

Mit CSS wie dem folgenden können Sie den Rahmen entfernen, sodass nur die Farbfläche übrig bleibt:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

Wenn das Steuerelement jedoch wesentlich anders aussehen soll, ist eine benutzerdefinierte Lösung die einzige Möglichkeit.

### Eingabetypen für Dateien

Eingabesteuerelemente vom Typ `file` lassen sich im Allgemeinen gut gestalten. Es ist relativ einfach, sie passend zum Rest der Seite darzustellen. Wenn Sie festlegen, dass das Eingabesteuerelement die Schrift seines Elternelements übernimmt, gilt das auch für die Ausgabezeile des Steuerelements. Die benutzerdefinierte Liste der Dateinamen und -größen können Sie beliebig gestalten.

Die Schaltfläche zum Öffnen der Dateiauswahl lässt sich mit dem Pseudoelement {{cssxref("::file-selector-button")}} gestalten. Es unterstützt dieselben Eigenschaften wie andere Schaltflächen:

```html live-sample___file-selector-button
<label for="avatar">Choose a profile picture</label>
<input id="avatar" name="avatar" type="file" />
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

Den Text neben der Schaltfläche – die Meldung „Keine Datei ausgewählt“ – können Sie ebenso wenig gestalten wie den angezeigten Dateinamen nach der Auswahl. Der Browser erzeugt diesen Text und macht ihn für CSS nicht zugänglich. Um dieses Problem zu umgehen, können Sie die Beschriftung des Steuerelements nutzen: Ein Klick darauf aktiviert das Steuerelement.

Das eigentliche Formularelement können Sie beispielsweise so ausblenden:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

Anschließend gestalten Sie die Beschriftung als Schaltfläche. Wird sie angeklickt, öffnet sich wie erwartet die Dateiauswahl:

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

Das Ergebnis dieses CSS-Stylings sehen Sie im folgenden interaktiven Beispiel.

```html hidden live-sample___styled-file-picker
<div class="controls">
  <div>
    <label for="file">Choose a file to upload</label>
    <input id="file" name="file" type="file" multiple />
    <ul id="file-list"></ul>
  </div>
  <div><button type="button">Submit?</button></div>
</div>
```

```css hidden live-sample___styled-file-picker
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

.controls > div {
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

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground auszuführen und den vollständigen Quellcode anzusehen.

### Messanzeigen und Fortschrittsbalken

[`<meter>`](/de/docs/Web/HTML/Reference/Elements/meter) und [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) sind möglicherweise die schwierigsten Elemente überhaupt. Wie Sie im vorherigen Beispiel gesehen haben, können wir ihre Breite recht genau festlegen. Darüber hinaus sind sie aber sehr schwer zu gestalten. Sie verarbeiten Höhenangaben weder untereinander noch in verschiedenen Browsern einheitlich. Sie können zwar den Hintergrund einfärben, aber nicht den Balken im Vordergrund. Und `appearance: none` verschlimmert die Situation eher, als dass es sie verbessert.

Für die Kontrolle über das Styling dieser Elemente ist es einfacher, eine eigene Lösung zu erstellen oder eine Lösung von Drittanbietern wie [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples) zu verwenden.

## Zusammenfassung

Das Styling von HTML-Formularen bringt einige Herausforderungen mit sich. Viele davon lassen sich jedoch umgehen. Es gibt keine einfachen, universellen Lösungen, aber moderne Browser bieten neue Möglichkeiten. Derzeit ist es am besten, sich damit vertraut zu machen, wie verschiedene Browser CSS auf HTML-Formularelemente anwenden.

Im nächsten Artikel erfahren Sie, wie Sie mit den dafür vorgesehenen modernen HTML- und CSS-Funktionen [vollständig angepasste `<select>`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) erstellen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
