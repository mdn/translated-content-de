---
title: Anpassbare Select-Listboxen
short-title: Anpassbare Listboxen
slug: Learn_web_development/Extensions/Forms/Customizable_select_listboxes
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel knüpft an den vorherigen an und zeigt, wie sich anpassbare {{htmlelement("select")}}-Elemente im Listbox-Modus gestalten lassen.

Ein großer Vorteil anpassbarer `<select>`-Listboxen gegenüber klassischen Listboxen besteht darin, dass Sie alle Teile des Steuerelements vollständig gestalten können. Außerdem können Sie eine wesentlich größere Vielfalt an Kindelementen einfügen. Das bietet mehr Flexibilität bei Design und Funktionalität.

## Select-Listboxen und Dropdown-Selects im Vergleich

Im vorherigen Artikel haben wir „Dropdown“-`<select>`-Elemente behandelt. Bei diesen Steuerelementen öffnet sich durch Drücken einer Schaltfläche ein Auswahlmenü, aus dem Sie eine Option auswählen können. Sie werden mit einfachem HTML wie `<select>` definiert.

„Listbox“-`<select>`-Elemente zeigen dagegen mehrere Optionen gleichzeitig in einem Feld an. Daraus können Sie eine oder mehrere Optionen auswählen. Damit ein `<select>` als Listbox dargestellt wird, geben Sie das Attribut `multiple` an, um mehrere Auswahlen zu ermöglichen, und/oder setzen `size` auf einen Wert größer als `1`. Beispiele sind `<select multiple>` und `<select size="3">`.

Das folgende interaktive Beispiel veranschaulicht den Unterschied:

```html hidden live-sample___select-comparison
<p>
  <label for="pet-select">Select pet dropdown:</label><br />
  <select id="pet-select">
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="chicken">Chicken</option>
    <option value="fish">Fish</option>
    <option value="Hamster">Hamster</option>
  </select>
</p>
<p>
  <label for="pet-select2">Select pets listbox:</label><br />
  <select id="pet-select2" multiple>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="chicken">Chicken</option>
    <option value="fish">Fish</option>
    <option value="hamster">Hamster</option>
  </select>
</p>
```

```css hidden live-sample___select-comparison
select,
::picker(select) {
  appearance: base-select;
}

form {
  display: flex;
  gap: 100px;
  justify-content: center;
}
```

{{EmbedLiveSample("select-comparison", "100%", "200px")}}

> [!NOTE]
> Sowohl das Attribut `multiple` als auch jeder `size`-Wert größer als `1` versetzt das `<select>`-Element in den Listbox-Modus.

### Wie unterscheiden sich anpassbare Listboxen von anpassbaren Dropdowns?

Ein anpassbares `<select>` im Listbox-Modus lässt sich leichter gestalten als die Dropdown-Variante:

- Es gibt kein aufklappbares Auswahlmenü. Sie müssen sich daher weder um dessen Gestaltung mit dem Pseudoelement {{cssxref("::picker()", "::picker(select)")}} noch um dessen {{cssxref(":open")}}-Zustand und geschlossenen Zustand kümmern.
- Sie müssen weder das Symbol der Select-Schaltfläche mit {{cssxref("::picker-icon")}} gestalten noch mit dem Element {{htmlelement("selectedcontent")}} steuern, wie die aktuell ausgewählte `<option>` innerhalb der Schaltfläche angezeigt wird.
- Es gibt nur einen Container. Sie müssen sich daher keine Gedanken über die Position des Auswahlmenüs relativ zur Schaltfläche machen.

## Eine einfache angepasste Listbox

Gehen wir ein einfaches Beispiel durch, um zu zeigen, wie eine angepasste Listbox umgesetzt wird. Das Markup für dieses Beispiel sieht so aus:

```html live-sample___basic-listbox live-sample___expanding-listbox
<p>
  <label for="pet-select">Select pets:</label><br />
  <select id="pet-select" multiple>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="chicken">Chicken</option>
    <option value="fish">Fish</option>
    <option value="hamster">Hamster</option>
  </select>
</p>
```

Daran ist nichts Besonderes. Beachten Sie, dass wir die Listbox mit `<select multiple>` statt mit `<select size="3">` darstellen. Der einzige Unterschied besteht darin, dass wir mehrere Optionen statt nur einer auswählen können. Die Gestaltung funktioniert auf genau dieselbe Weise.

Zu Beginn aktivieren wir die benutzerdefinierte Gestaltung für das `<select>`, indem wir {{cssxref("appearance")}} auf `base-select` setzen:

```css hidden live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}
```

```css live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
select {
  appearance: base-select;
}
```

Damit können wir unsere {{htmlelement("select")}}- und {{htmlelement("option")}}-Elemente nun nach Belieben gestalten.

Unsere grundlegenden Styles sehen so aus:

```css live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
select {
  border: 2px solid #dddddd;
  border-radius: 8px;
  background: #eeeeee;
  width: 200px;
  height: 130px;
}

option {
  background: #eeeeee;
  padding: 10px;
  height: 40px;
  outline: none;
}

option:nth-of-type(odd) {
  background: white;
}
```

Als Nächstes setzen wir {{cssxref("order")}} für das Pseudoelement {{cssxref("::checkmark")}} auf `1`, damit das Häkchen ausgewählter Optionen rechts statt links erscheint. Mit der Eigenschaft {{cssxref("content")}} legen wir außerdem ein eigenes Häkchensymbol fest.

```css live-sample___basic-listbox live-sample___expanding-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Abschließend setzen wir {{cssxref("font-weight")}} für Optionen mit {{cssxref(":checked")}} auf `bold`. Außerdem legen wir mit {{cssxref("background")}} eine eigene Hintergrundfarbe für die Zustände {{cssxref(":hover")}} und {{cssxref(":focus")}} der Optionen fest. So ist jederzeit erkennbar, über welcher Option sich der Mauszeiger befindet oder welche Option den Fokus hat.

Das Beispiel wird so dargestellt:

{{EmbedLiveSample("basic-listbox", "100%", "200px")}}

## Gestaltungsvarianten für Listboxen

Da angepasste Listboxen aus Standard-HTML-Elementen bestehen, können Sie sie nach Belieben gestalten. In diesem Abschnitt zeigen wir zwei Varianten des vorherigen Beispiels. Beide verwenden dasselbe oder ähnliches Markup; mit etwas zusätzlichem CSS verändern wir das Erscheinungsbild und Verhalten deutlich.

### Aufklappende Listbox

In diesem Beispiel hat die Listbox standardmäßig die {{cssxref("height")}} einer einzelnen Option. Wir blenden den dadurch entstehenden {{cssxref("overflow")}} aus und fügen eine {{cssxref("transition")}} hinzu, damit Änderungen an der Höhe des `<select>` weich animiert werden. Außerdem setzen wir {{cssxref("interpolate-size")}} auf `allow-keywords`, damit der Browser Übergänge zwischen Längenwerten und Schlüsselwörtern animiert.

```css live-sample___expanding-listbox
select {
  height: 44px;
  overflow: hidden;
  transition: 0.6s height;
  interpolate-size: allow-keywords;
}
```

Wenn sich der Mauszeiger über dem `<select>` befindet oder es den Fokus hat, ändern wir `height` auf `fit-content`, sodass es sich auf seine volle Höhe erweitert. Beachten Sie: Wenn Sie mit der Tabulatortaste in ein angepasstes Select-Steuerelement wechseln, erhält die erste `<option>` den Fokus und nicht das `<select>` selbst. Deshalb verwenden wir `select:has(option:focus)` statt einfach `select:focus`, um das `<select>` auszuwählen, wenn eine `<option>` den Fokus hat.

```css live-sample___expanding-listbox
select:hover,
select:has(option:focus) {
  height: fit-content;
}
```

Das Beispiel wird nun so dargestellt:

{{EmbedLiveSample("expanding-listbox", "100%", "260px")}}

### Horizontale Listbox

In diesem Beispiel ordnen wir die Optionen der Listbox horizontal statt vertikal an.

Das HTML entspricht den vorherigen Beispielen, enthält aber zusätzlich ein umschließendes `<div>`. Dadurch können wir für das `<select>` eine `width` und für das umschließende Element eine andere `width` festlegen. So bleiben alle `<option>`-Elemente in einer Zeile und können gescrollt werden, wenn das `<select>` zu schmal ist, um alle gleichzeitig anzuzeigen.

```html live-sample___horizontal-listbox
<p>
  <label for="pet-select">Select pets:</label><br />
  <select id="pet-select" multiple>
    <div class="wrapper">
      <option value="cat">Cat</option>
      <option value="dog">Dog</option>
      <option value="chicken">Chicken</option>
      <option value="fish">Fish</option>
      <option value="hamster">Hamster</option>
      <option value="gerbil">Gerbil</option>
      <option value="guinea">Guinea pig</option>
    </div>
  </select>
</p>
```

Im CSS legen wir zunächst {{cssxref("width")}} und {{cssxref("margin")}} für das umgebende {{htmlelement("p")}}-Element fest. Dadurch wird die Demo im Viewport horizontal zentriert und nimmt den größten Teil seiner Breite ein. Anschließend legen wir fest, dass das `<select>` die gesamte Breite seines Elternelements einnimmt und nur so hoch wie die `<option>`-Elemente ist. Das `.wrapper`-`<div>` erhält für {{cssxref("display")}} den Wert `flex`, wodurch die `<option>`-Elemente horizontal in einer Reihe angeordnet werden. Danach legen wir seine `width` so fest, dass es stets so breit ist wie die `<option>`-Elemente.

```css live-sample___horizontal-listbox
p {
  width: 90%;
  margin: 0 auto;
}

select {
  width: 100%;
  height: fit-content;
}

.wrapper {
  display: flex;
  width: fit-content;
}
```

Als Nächstes geben wir den `<option>`-Elementen zusätzlichen Innenabstand, um sie horizontal voneinander zu trennen. Außerdem setzen wir {{cssxref("position")}} auf `relative`, damit wir ihre Nachfahren relativ zu ihnen positionieren können.

```css live-sample___horizontal-listbox
option {
  padding: 10px 30px;
  position: relative;
}
```

Abschließend positionieren wir die Häkchen der Optionen absolut und geben ihnen ein eigenes Aussehen.

```css live-sample___horizontal-listbox
option::checkmark {
  position: absolute;
  top: -2px;
  left: 2px;
  font-size: 1.5rem;
  color: red;
  text-shadow: 1px 1px 1px black;
}
```

```css hidden live-sample___horizontal-listbox
option:hover,
option:focus {
  background: plum;
}
```

Unsere zweite Variante wird so dargestellt:

{{EmbedLiveSample("horizontal-listbox", "100%", "100px")}}

## Eine komplexere Listbox

In diesem Abschnitt gehen wir ein komplexeres Beispiel durch: eine Listbox zur Kontaktauswahl mit integriertem Filterfeld und einem Link zu einem (fiktiven) Modus zum Bearbeiten von Kontakten.

### HTML

Im Markup fügen wir eine Überschrift und ein umschließendes {{htmlelement("div")}} ein. Darin befinden sich drei weitere `<div>`-Elemente. Sie enthalten jeweils ein Text-{{htmlelement("input")}} als Filterfeld, ein {{htmlelement("select")}} im Listbox-Modus und einen Link. Das `<select>` wird über JavaScript mit {{htmlelement("option")}}-Elementen gefüllt, die unsere auswählbaren Kontakte darstellen.

```html live-sample___complex-listbox
<h2>Contact select</h2>
<div class="wrapper">
  <div class="filter">
    <input
      type="text"
      aria-label="Filter contacts"
      placeholder="Filter by name, e.g. amara" />
  </div>
  <div class="options">
    <select
      multiple
      name="contact-select"
      aria-label="Select contacts"></select>
  </div>
  <div class="edit">
    <a href="#">Edit contacts</a>
  </div>
</div>
```

### CSS

Wie zuvor aktivieren wir zunächst die benutzerdefinierte Gestaltung für das `<select>`-Element:

```css hidden live-sample___complex-listbox
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}
```

```css live-sample___complex-listbox
select {
  appearance: base-select;
}
```

Der Großteil der Gestaltung ist recht einfach. Wir gehen sie dennoch durch und weisen dabei auf wichtige Details hin. Zuerst gestalten wir das `.wrapper`-`<div>` und geben ihm eine feste {{cssxref("width")}}, die die Breite des gesamten Steuerelements bestimmt.

```css live-sample___complex-listbox
.wrapper {
  border: 2px solid #dddddd;
  border-radius: 8px;
  background: #dddddd;
  width: 250px;
}
```

Als Nächstes gestalten wir das Filter-`<input>`, das `.options`-`<div>` mit dem darin enthaltenen `<select>` sowie das `.edit`-`<div>` mit dem Link. Besonders wichtig ist, dass wir dem `<select>` eine feste {{cssxref("height")}} geben und {{cssxref("overflow-y")}} auf `scroll` setzen. Dadurch lassen sich die enthaltenen `<option>`-Elemente innerhalb des `<select>` scrollen.

```css live-sample___complex-listbox
.filter input {
  display: block;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
  width: 95%;
  margin: 8px auto;
}

.options {
  padding: 0 5px;
  background: #dddddd;
}

select {
  height: 200px;
  overflow-y: scroll;
  width: 100%;
  border: 1px solid #bbbbbb;
}

.edit {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Wir gestalten die `<option>`-Elemente ähnlich wie in den vorherigen Beispielen: mit abwechselnden Hintergrundfarben und deutlich erkennbaren Styles für `:hover` und `:focus`.

```css live-sample___complex-listbox
option {
  background: #eeeeee;
  padding: 10px;
}

option:nth-of-type(odd) {
  background: white;
}

option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

Als Nächstes entfernen wir die standardmäßige Fokusumrandung der Elemente `<input>`, `<option>` und `<a>`. Für die `<option>`-Elemente haben wir bereits im vorherigen Codeblock eine alternative Gestaltung festgelegt. Hier ergänzen wir dezentere Alternativen für die Elemente `<input>` und `<a>`.

```css live-sample___complex-listbox
input,
option,
a {
  outline: none;
}

input:hover,
input:focus {
  border: 1px solid #999999;
  background: #eeeeff;
}

.edit a {
  color: #333333;
}

a:hover,
a:focus {
  outline: 2px dotted #666666;
}
```

Abschließend gestalten wir die Häkchen ausgewählter Optionen mithilfe des Pseudoelements `::checkmark`:

```css live-sample___complex-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

### JavaScript

Zuletzt benötigt unser Beispiel etwas JavaScript, um die Optionen einzufügen und zu filtern.

Auf einer echten Website würden Sie wahrscheinlich eine aktuelle Kontaktliste von einem Server laden. Hier stellen wir die Daten jedoch in einem statischen `contacts`-Objekt bereit. Der Kürze halber haben wir die meisten Kontakte ausgeblendet. Für jeden Kontakt speichern wir einen Namen und einen booleschen Wert, der angibt, ob er im `<select>`-Element ausgewählt wurde.

```js
const contacts = [
  { name: "Aisha Khan", selected: false },
  // …
];
```

```js hidden live-sample___complex-listbox
const contacts = [
  { name: "Aisha Khan", selected: false },
  { name: "Aisyah Rahman", selected: false },
  { name: "Amara Okafor", selected: false },
  { name: "Ananya Sharma", selected: false },
  { name: "Andrei Popescu", selected: false },
  { name: "Anh Nguyen", selected: false },
  { name: "Arjun Patel", selected: false },
  { name: "Arun Prasetyo", selected: false },
  { name: "Aya Nakamura", selected: false },
  { name: "Benjamin Brown", selected: false },
  { name: "Carlos Mendez", selected: false },
  { name: "Chloe Dubois", selected: false },
  { name: "Clara Fischer", selected: false },
  { name: "Daniel Kim", selected: false },
  { name: "Daniel Muller", selected: false },
  { name: "Diego Alvarez", selected: false },
  { name: "Ethan Williams", selected: false },
  { name: "Fatima Al-Farsi", selected: false },
  { name: "Freya Andersen", selected: false },
  { name: "Gabriel Costa", selected: false },
  { name: "Hannah Cohen", selected: false },
  { name: "Hiroshi Tanaka", selected: false },
  { name: "Isabella Martinez", selected: false },
  { name: "Jakub Novak", selected: false },
  { name: "Jonas Schmidt", selected: false },
  { name: "Kanya Chaiyaporn", selected: false },
  { name: "Kwame Mensah", selected: false },
  { name: "Leila Haddad", selected: false },
  { name: "Lena Gruber", selected: false },
  { name: "Liam O'Connor", selected: false },
  { name: "Liam Silva", selected: false },
  { name: "Lucas Silva", selected: false },
  { name: "Maria Santos", selected: false },
  { name: "Mariam Said", selected: false },
  { name: "Mateo Garcia", selected: false },
  { name: "Maya Chen", selected: false },
  { name: "Maya Nguyen", selected: false },
  { name: "Mohamed Salah", selected: false },
  { name: "Nadia Rahman", selected: false },
  { name: "Nathan Lee", selected: false },
  { name: "Nguyen Minh", selected: false },
  { name: "Noah Kim", selected: false },
  { name: "Oliver Smith", selected: false },
  { name: "Omar Hassan", selected: false },
  { name: "Ravi Reddy", selected: false },
  { name: "Samuel Johnson", selected: false },
  { name: "Sofia Rossi", selected: false },
  { name: "Thomas Anderson", selected: false },
  { name: "Valentina Ivanova", selected: false },
  { name: "Yusuf Demir", selected: false },
];
```

Zunächst speichern wir Referenzen auf das `.filter`-`<input>` und das `<select>`:

```js live-sample___complex-listbox
const filterInput = document.querySelector(".filter input");
const select = document.querySelector("select");
```

Als Nächstes definieren wir eine Funktion namens `populateOptions()`, die ein Array von Objekten als Parameter entgegennimmt. Innerhalb der Funktion leeren wir zuerst den Inhalt des `<select>`-Elements. Danach durchlaufen wir das übergebene Array und erstellen für jedes Objekt darin ein `<option>`-Element. Dessen Eigenschaften `textContent` und `selected` setzen wir auf die Werte der Eigenschaften `name` beziehungsweise `selected` des jeweiligen Objekts. Jedes `<option>`-Element wird als Kindelement des `<select>` an das DOM angehängt.

```js live-sample___complex-listbox
function populateOptions(array) {
  select.innerHTML = "";

  array.forEach((obj) => {
    const option = document.createElement("option");
    option.textContent = obj.name;
    option.selected = obj.selected;
    select.appendChild(option);
  });
}
```

Nun definieren wir eine weitere Funktion, `filterOptions()`, die einen Filterstring und ein Array von Objekten als Parameter entgegennimmt. Wir prüfen, ob der String leer ist oder nur aus einem oder mehreren Leerzeichen besteht. Dazu vergleichen wir den Rückgabewert seiner Methode {{jsxref("String.trim", "trim()")}} mit `""`. Ergibt der Vergleich `true`, rufen wir `populateOptions()` mit dem vollständigen Array auf, sodass das `<select>` mit allen `<option>`-Elementen gefüllt wird. Ergibt er `false`, filtern wir das übergebene Array mit seiner Methode {{jsxref("Array.filter", "filter()")}}. Dabei behalten wir nur Objekte, deren Eigenschaft `name` mit dem String `filter` beginnt ({{jsxref("String.startsWith", "startsWith()")}}). Anschließend übergeben wir das gefilterte Array an `populateOptions()`, sodass das `<select>` eine gefilterte Auswahl von `<option>`-Elementen enthält.

```js live-sample___complex-listbox
function filterOptions(filter, array) {
  if (filter.trim() === "") {
    populateOptions(array);
  } else {
    const filteredArray = array.filter((obj) =>
      obj.name.toLowerCase().startsWith(filter.toLowerCase()),
    );
    populateOptions(filteredArray);
  }
}
```

> [!NOTE]
> Wir wandeln sowohl den `name` des Objekts als auch den String `filter` mit {{jsxref("String.toLowerCase", "toLowerCase()")}} in Kleinbuchstaben um. Dadurch wird beim Filtern nicht zwischen Groß- und Kleinschreibung unterschieden.

Anschließend fügen wir dem `.filter`-`<input>` einen Event-Listener für das Ereignis [`input`](/de/docs/Web/API/Element/input_event) hinzu. Wenn sein Wert geändert wird, ruft dieser `filterOptions()` auf, um die angezeigten `<option>`-Elemente zu filtern. Dabei übergeben wir den aktuellen Wert des `<input>` als Filterstring und das Array `contacts` als Eingabearray.

```js live-sample___complex-listbox
filterInput.addEventListener("input", () => {
  filterOptions(filterInput.value, contacts);
});
```

Der nächste Codeabschnitt fügt dem `<select>`-Element einen Event-Listener für das Ereignis [`change`](/de/docs/Web/API/HTMLElement/change_event) hinzu. Jedes Mal, wenn eine `<option>` ausgewählt oder ihre Auswahl aufgehoben wird, synchronisiert er den `selected`-Status der Objekte im Array `contacts` mit dem Auswahlstatus der aktuell angezeigten `<option>`-Elemente. Das ist erforderlich, weil bei jeder Anwendung eines neuen Filters auf das `<select>`-Element die angezeigten `<option>`-Elemente anhand des Arrays `contacts` mitsamt ihrem Auswahlstatus neu erzeugt werden. Ohne diese Synchronisierung würden wir bei jeder Änderung des Filters die ausgewählten Optionen verlieren.

Es gibt keine Möglichkeit, bei jeder Änderung genau zu erkennen, welche `<option>` betroffen ist. Deshalb lösen wir das Problem folgendermaßen:

1. Wir erstellen ein Array mit den Werten aller aktuell angezeigten `<option>`-Elemente. Dazu erzeugen wir mit {{jsxref("Array.from")}} ein Array aus der Collection [`select.options`](/de/docs/Web/API/HTMLSelectElement/options) und ersetzen anschließend mit der Methode {{jsxref("Array.map", "map()")}} jede `<option>` im Array durch ihren Wert.
2. Auf dieselbe Weise erstellen wir ein Array mit den Werten aller aktuell ausgewählten `<option>`-Elemente. Diesmal verwenden wir allerdings die Collection [`select.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions) als Ausgangspunkt.
3. Für jedes Kontaktobjekt im Array `contacts` prüfen wir mit der Methode {{jsxref("Array.includes", "includes()")}}, ob der Wert seiner Eigenschaft `name` im Array `allCurrentValues` enthalten ist. Falls nicht, ignorieren wir das Objekt, damit wir den Auswahlstatus von Kontakten, die gar nicht angezeigt werden, nicht ändern. Andernfalls setzen wir die Eigenschaft `selected` des Kontakts auf das Ergebnis der Prüfung, ob `currentSelectedValues` den `name` des Kontakts enthält ({{jsxref("Array.includes", "includes()")}}): Ist dies der Fall, wird die Eigenschaft auf `true` gesetzt, andernfalls auf `false`.

```js live-sample___complex-listbox
select.addEventListener("change", () => {
  const allCurrentValues = Array.from(select.options).map(
    (option) => option.value,
  );
  const currentSelectedValues = Array.from(select.selectedOptions).map(
    (option) => option.value,
  );

  contacts.forEach((contact) => {
    if (allCurrentValues.includes(contact.name)) {
      contact.selected = currentSelectedValues.includes(contact.name);
    }
  });
});
```

Abschließend rufen wir `populateOptions()` mit dem Array `contacts` auf, damit beim Laden der Seite die vollständige Kontaktliste angezeigt wird.

```js live-sample___complex-listbox
populateOptions(contacts);
```

### Ergebnis

Das Beispiel wird so dargestellt:

{{EmbedLiveSample("complex-listbox", "100%", "380px")}}

```css hidden live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox live-sample___complex-listbox
@supports not (appearance: base-select) {
  body::before {
    content: "Your browser does not support `appearance: base-select`.";
    color: black;
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
}
```

## Nächste Schritte

Im nächsten Artikel dieses Moduls beschäftigen wir uns mit den verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes), die moderne Browser zur Gestaltung von Formularen in unterschiedlichen Zuständen bereitstellen.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}
- {{cssxref("appearance")}}
- {{cssxref("::checkmark")}}
- {{cssxref(":checked")}}
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
