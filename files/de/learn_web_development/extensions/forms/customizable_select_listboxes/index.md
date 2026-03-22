---
title: Anpassbare Auswahllisten
short-title: Anpassbare Auswahllisten
slug: Learn_web_development/Extensions/Forms/Customizable_select_listboxes
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel baut auf dem vorherigen auf und erklärt, wie Sie anpassbare Listbox-{{htmlelement("select")}}-Elemente stylen können.

Ein wesentlicher Vorteil anpassbarer `<select>`-Listboxen gegenüber „klassischen“ Auswahllisten ist, dass Sie alle Teile des Steuerelements vollständig gestalten können. Darüber hinaus können Sie eine viel größere Vielfalt an Kind-Elementen einfügen, was mehr Flexibilität hinsichtlich Design und Funktionalität bedeutet.

## Auswahllisten vs Dropdown-Auswahl

Im vorherigen Artikel haben wir über „Dropdown“-`<select>`-Elemente gesprochen, bei denen es sich um Steuerelemente handelt, die über einen Knopf verfügen, der beim Drücken eine Dropdown-Auswahl anzeigt, aus der Sie eine Option auswählen können. Diese werden mit einfachem HTML wie `<select>` spezifiziert.

Im Gegensatz dazu sind „Listbox“-`<select>`-Elemente Steuerelemente, die eine Box enthalten, die mehrere Optionen gleichzeitig anzeigt, aus denen Sie eine oder mehrere Optionen auswählen können. Sie entscheiden sich für das Rendern einer „Listbox“-Auswahl, indem Sie das `multiple`-Attribut (um Mehrfachauswahl zu ermöglichen) und/oder einen `size`-Wert größer als `1` angeben. Zum Beispiel `<select multiple>` oder `<select size="3">`.

Das folgende Live-Beispiel verdeutlicht den Unterschied:

```html hidden live-sample___select-comparison
<form>
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
</form>
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
> Das `multiple`-Attribut sowie jeder `size`-Wert größer als `1` versetzen das `<select>`-Element in den Listbox-Modus.

### Wie vergleichen sich anpassbare Listboxen mit anpassbaren Dropdowns?

Eine anpassbare Listbox `<select>` ist einfacher zu stylen als die Dropdown-Variante:

- Es gibt keinen Dropdown-Picker, sodass Sie sich nicht darum kümmern müssen, ihn mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element oder seinen {{cssxref(":open")}}- und geschlossenen Zuständen zu stylen.
- Sie müssen nicht die Ikone des Auswahlknopfes mit {{cssxref("::picker-icon")}} stylen oder steuern, wie die aktuell ausgewählte `<option>` innerhalb des Knopfes mit dem {{htmlelement("selectedcontent")}}-Element angezeigt wird.
- Es ist nur ein einziger Container beteiligt; Sie müssen sich nicht um die Position des Pickers im Verhältnis zum Knopf kümmern.

## Eine grundlegend angepasste Listbox

Gehen wir ein einfaches Beispiel durch, um zu zeigen, wie eine angepasste Listbox implementiert wird. Das Markup für dieses Beispiel sieht folgendermaßen aus:

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

Hier gibt es nichts Besonderes zu beachten. Beachten Sie, dass wir unsere Listbox mit `<select multiple>` anstelle von `<select size="3">` rendern. Der einzige Unterschied ist, dass wir mehrere Optionen anstelle einer einzelnen Option auswählen können. Das Styling funktioniert genau auf die gleiche Weise.

Wir beginnen unser Styling, indem wir das `<select>` mit einem {{cssxref("appearance")}}-Wert von `base-select` in ein benutzerdefiniertes Styling einbeziehen:

```css hidden live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
select {
  appearance: base-select;
}
```

Damit können wir unsere {{htmlelement("select")}}- und {{htmlelement("option")}}-Elemente nach Belieben stylen.

Unsere grundlegenden Stile sehen so aus:

```css live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
select {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #eee;
  width: 200px;
  height: 130px;
}

option {
  background: #eee;
  padding: 10px;
  height: 40px;
  outline: none;
}

option:nth-of-type(odd) {
  background: #fff;
}
```

Als nächstes setzen wir einen {{cssxref("order")}}-Wert von `1` auf das {{cssxref("::checkmark")}}-Pseudo-Element, um das Häkchen für ausgewählte Optionen rechts anstelle von links erscheinen zu lassen, und setzen ein benutzerdefiniertes Häkchen-Symbol mithilfe der {{cssxref("content")}}-Eigenschaft.

```css live-sample___basic-listbox live-sample___expanding-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Schließlich setzen wir ein `bold` {{cssxref("font-weight")}} für {{cssxref(":checked")}}-Optionen und eine benutzerdefinierte {{cssxref("background")}}-Farbe für die Option {{cssxref(":hover")}} und {{cssxref(":focus")}}-Zustände, damit Sie immer wissen, welche Option Sie schwebend oder fokussiert haben.

```css live-sample___basic-listbox live-sample___expanding-listbox
option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

Dieses Beispiel wird wie folgt wiedergegeben:

{{EmbedLiveSample("basic-listbox", "100%", "200px")}}

## Stilvarianten der Listbox

Da angepasste Listboxen nur Standard-HTML-Elemente sind, können Sie sie nach Belieben stylen. In diesem Abschnitt zeigen wir Ihnen ein paar Variationen des vorherigen Beispiels. Beide verwenden das gleiche oder ähnliche Markup; wir haben ein bisschen zusätzliches CSS hinzugefügt, um das Aussehen und Verhalten erheblich zu verändern.

### Expanding Listbox

In diesem Beispiel präsentieren wir die Listbox bei der {{cssxref("height")}} einer einzelnen Option standardmäßig, indem wir das erzeugte {{cssxref("overflow")}} ausblenden und eine {{cssxref("transition")}} hinzufügen, um die `<select>`-Höhe sanft zu animieren, wenn sich ihr Zustand ändert. Wir setzen auch einen {{cssxref("interpolate-size")}}-Wert von `allow-keywords`, damit der Browser zwischen Längen und Schlüsselwörtern animiert.

```css live-sample___expanding-listbox
select {
  height: 44px;
  overflow: hidden;
  transition: 0.6s height;
  interpolate-size: allow-keywords;
}
```

Wir ändern die `height` auf `fit-content`, wenn die `<select>`-Box schwebend oder fokussiert ist, sodass sie sich auf ihre volle Höhe erweitert. Beachten Sie, dass, wenn Sie in eine angepasste Auswahl mit Tabulator gelangen, das erste `<option>`-Element den Fokus erhält, anstatt das `<select>` selbst. Daher mussten wir `select:has(option:focus)` verwenden, um das `<select>` zu wählen, wenn ein `<option>` fokussiert ist, anstatt einfach `select:focus`.

```css live-sample___expanding-listbox
select:hover,
select:has(option:focus) {
  height: fit-content;
}
```

Das Beispiel wird nun so dargestellt:

{{EmbedLiveSample("expanding-listbox", "100%", "260px")}}

### Horizontale Listbox

In diesem Beispiel präsentieren wir die Listbox-Optionen horizontal anstatt vertikal.

Das HTML ist das gleiche wie in den vorherigen Beispielen, außer dass wir einen zusätzlichen `<div>`-Wrapper eingefügt haben, um eine `width` auf das `<select>` setzen zu können und dann eine andere `width` auf den Wrapper, sodass alle `<option>`-Elemente in einer Zeile bleiben und gescrollt werden, wenn das `<select>` zu schmal wird, um alle aufzunehmen.

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

Im CSS setzen wir zunächst die {{htmlelement("p")}}-Element {{cssxref("width")}} und {{cssxref("margin")}}, sodass das Demo horizontal im Ansichtsfenster zentriert ist und die meiste Breite einnimmt. Anschließend dimensionieren wir das `<select>` so, dass es die volle Breite seines Elternteils einnimmt und nur so hoch ist wie die `<option>`-Elemente. Das `.wrapper` `<div>` erhält einen {{cssxref("display")}}-Wert von `flex`, wodurch die `<option>`-Elemente horizontal in einer Reihe angeordnet werden; dann setzen wir seine `width`, damit sie immer so breit wie die `<option>`-Elemente ist.

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

Als nächstes geben wir den `<option>`-Elementen etwas zusätzlichen Abstand, um sie horizontal zu trennen, und einen {{cssxref("position")}}-Wert von relativ, damit wir ihre Nachkommen relativ zu ihnen positionieren können.

```css live-sample___horizontal-listbox
option {
  padding: 10px 30px;
  position: relative;
}
```

Schließlich positionieren wir die Optionshäkchen absolut und geben ihnen ein benutzerdefiniertes Aussehen.

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

Unsere zweite Variante wird folgendermaßen gerendert:

{{EmbedLiveSample("horizontal-listbox", "100%", "100px")}}

## Eine komplexere Listbox

In diesem Abschnitt gehen wir ein komplexeres Beispiel durch, das eine Kontaktpicker-Listbox mit einem integrierten Filterfeld und einem Link zum Aufrufen eines (fiktiven) Kontaktbearbeitungsmodus bietet.

### HTML

Im Markup fügen wir ein {{htmlelement("form")}} ein, das eine Überschrift und einen Wrapper-{{htmlelement("div")}} enthält. Innerhalb des Wrappers fügen wir drei weitere `<div>`-Elemente ein, die jeweils ein Text-{{htmlelement("input")}} enthalten, das unser Filterfeld darstellt, eine Listbox {{htmlelement("select")}} und einen Link. Das `<select>` wird mit {{htmlelement("option")}}-Elementen bestückt, die unsere Kontaktmöglichkeiten darstellen, und zwar über JavaScript.

```html live-sample___complex-listbox
<form>
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
</form>
```

### CSS

Wir beginnen unser CSS, indem wir das `<select>`-Element wie zuvor in ein benutzerdefiniertes Styling einbeziehen:

```css hidden live-sample___complex-listbox
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___complex-listbox
select {
  appearance: base-select;
}
```

Der Großteil des Stylings ist ziemlich einfach, aber wir gehen es durch und weisen dabei auf alles Wesentliche hin. Zuerst stylen wir das `.wrapper` `<div>`, indem wir ihm eine feste {{cssxref("width")}} zuweisen, die die horizontale Größe des gesamten Steuerelements bestimmt.

```css live-sample___complex-listbox
.wrapper {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #ddd;
  width: 250px;
}
```

Als nächstes stylen wir das Filter`<input>`, das `.options` `<div>` und das enthaltene `<select>`, sowie das `.edit` `<div>`, das den Link enthält. Am bemerkenswertesten ist, dass wir dem `<select>` eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}}-Wert von `scroll` zuweisen, damit die enthaltenen `<option>`-Elemente darin scrollen.

```css live-sample___complex-listbox
.filter input {
  display: block;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #bbb;
  width: 95%;
  margin: 8px auto;
}

.options {
  padding: 0 5px;
  background: #ddd;
}

select {
  height: 200px;
  overflow-y: scroll;
  width: 100%;
  border: 1px solid #bbb;
}

.edit {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Wir stylen unsere `<option>`-Elemente ähnlich wie in früheren Beispielen, geben ihnen eine Zebrastreifen-Optik sowie klare `:hover`- und `:focus`-Stile:

```css live-sample___complex-listbox
option {
  background: #eee;
  padding: 10px;
}

option:nth-of-type(odd) {
  background: #fff;
}

option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

Unser nächster Schritt ist, das standardmäßige Fokus-Outlines für die `<input>`, `<option>`, und `<a>`-Elemente zu entfernen. Wir haben in dem vorherigen Codeblock bereits alternative Stile für die `<option>`-Elemente bereitgestellt; hier bieten wir subtilere Alternativen für die `<input>`- und `<a>`-Elemente.

```css live-sample___complex-listbox
input,
option,
a {
  outline: none;
}

input:hover,
input:focus {
  border: 1px solid #999;
  background: #eef;
}

.edit a {
  color: #333;
}

a:hover,
a:focus {
  outline: 2px dotted #666;
}
```

Schließlich bieten wir benutzerdefinierte Stile für die Häkchen der ausgewählten Optionen über das `::checkmark` Pseudo-Element:

```css live-sample___complex-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

### JavaScript

Die letzte Ergänzung, die unser Beispiel benötigt, ist etwas JavaScript, um die Funktionalität zur Bestückung und Filterung der Optionen zu ermöglichen.

Auf einer echten Website ziehen Sie wahrscheinlich eine aktuelle Kontaktliste von einem Server ein, aber in diesem Fall haben wir die Daten in einem statischen `contacts`-Objekt bereitgestellt (wir haben die meisten Kontakte aus Platzgründen ausgeblendet). Für jeden Kontakt speichern wir einen Namen und ein booleanes Feld, das angibt, ob sie im `<select>`-Element ausgewählt wurden.

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

Wir beginnen damit, Verweise auf unsere `.filter` `<input>` und `<select>`-Elemente zu sammeln:

```js live-sample___complex-listbox
const filterInput = document.querySelector(".filter input");
const select = document.querySelector("select");
```

Als nächstes definieren wir eine Funktion namens `populateOptions()`, die ein Array von Objekten als Parameter nimmt. Innerhalb der Funktion leeren wir zuerst den Inhalt des `<select>`-Elements. Dann durchlaufen wir das Eingabearray und erstellen ein `<option>`-Element für jedes Objekt im Array, indem wir seine `textContent`- und `selected`-Eigenschaften auf die `name`- und `selected`-Eigenschaften des Objekts setzen. Jedes `<option>`-Element wird dem DOM als Kind des `<select>` hinzugefügt.

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

Jetzt definieren wir eine weitere Funktion, `filterOptions()`, die einen Filter-String und ein Array von Objekten als Parameter nimmt. Wir prüfen, ob der String gleich dem leeren String oder einem oder mehreren Leerzeichen entspricht, indem wir den Rückgabewert seiner {{jsxref("String.trim", "trim()")}}-Methode mit `""` vergleichen. Wenn dies `true` ergibt, führen wir die `populateOptions()`-Funktion aus und übergeben ihr das gesamte Array, sodass das `<select>` mit allen `<option>`-Elementen bestückt wird. Wenn `false` zurückgegeben wird, filtern wir das Eingabearray mit seiner {{jsxref("Array.filter", "filter()")}}-Methode um nur Objekte einzuschließen, deren `name`-Eigenschaft mit dem `filter`-String {{jsxref("String.startsWith", "startsWith()")}} beginnt, und übergeben dann das gefilterte Array an die `populateOptions()`-Funktion, sodass das `<select>` mit einem gefilterten Satz von `<option>`-Elementen bestückt wird.

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
> Wir konvertieren sowohl den Objektnamen als auch den `filter`-String in Kleinbuchstaben mit {{jsxref("String.toLowerCase", "toLowerCase()")}}, damit die Filterübereinstimmung nicht zwischen Groß- und Kleinschreibung unterscheidet.

Als nächstes fügen wir einen [`input`](/de/docs/Web/API/Element/input_event)-Eventlistener zum `.filter` `<input>`-Element hinzu, sodass bei jeder Bearbeitung seines Werts die `filterOptions()`-Funktion ausgeführt wird, um die angezeigten `<option>`-Elemente zu filtern. Wir übergeben den aktuellen Wert des `<input>` als Filter-String und das `contacts`-Array als Eingabearray.

```js live-sample___complex-listbox
filterInput.addEventListener("input", () => {
  filterOptions(filterInput.value, contacts);
});
```

Der nächste Codeabschnitt fügt einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Eventlistener zum `<select>`-Element hinzu, sodass bei jeder Auswahl oder Deselektion eines `<option>` die ausgewählten Status der Objekte im `contacts`-Array mit dem ausgewählten Status der derzeit angezeigten `<option>`-Objekte synchronisiert werden. Dies ist erforderlich, weil jedes Mal, wenn wir einen neuen Filter auf unser `<select>`-Element anwenden, die angezeigten `<option>`-Elemente frisch aus dem `contacts`-Array generiert werden, einschließlich ihres ausgewählten Status. Wenn wir dies nicht täten, würden wir unsere ausgewählten Optionen jedes Mal verlieren, wenn wir den Filter ändern.

Es gibt keine Möglichkeit, genau zu erkennen, welche `<option>` jedes Mal geändert wurde, wenn eine umgeschaltet wird. Daher haben wir das Problem wie folgt gelöst:

1. Holen Sie sich ein Array aller derzeit angezeigten `<option>`-Werte, indem Sie ein Array aus der [`select.options`](/de/docs/Web/API/HTMLSelectElement/options)-Sammlung mit {{jsxref("Array.from")}} erstellen und es dann mit seiner {{jsxref("Array.map", "map()")}}-Methode abbilden, um jedes `<option>` im Array durch seinen Wert zu ersetzen.
2. Holen Sie sich ein Array aller derzeit ausgewählten `<option>`-Werte mithilfe der gleichen Methodik, außer dass wir dieses Mal das Eingabearray aus der [`select.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions)-Sammlung erstellen.
3. Für jedes Kontaktobjekt im `contacts`-Array prüfen wir, ob der Kontakt `name`-Eigenschaftswert im `allCurrentValues`-Array mit der {{jsxref("Array.includes", "includes()")}}-Methode enthalten ist. Wenn nicht, ignorieren wir es, damit wir nicht den Status der ausgewählten Kontaktobjekte umschalten, die nicht einmal angezeigt werden. Wenn ja, setzen wir die `selected`-Eigenschaft des Kontakts auf das Ergebnis der Überprüfung, ob das `currentSelectedValues`-Array den Namen des Kontakts {{jsxref("Array.includes", "includes()")}} enthält - wenn dies der Fall ist, setzen wir die Objekt-Eigenschaft auf `true`, sonst auf `false`.

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

Schließlich führen wir die `populateOptions()`-Funktion aus und übergeben ihr das `contacts`-Array, sodass beim Laden der Seite die vollständige Liste der Kontakte angezeigt wird.

```js live-sample___complex-listbox
populateOptions(contacts);
```

### Ergebnis

Das Beispiel wird wie folgt gerendert:

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

## Als Nächstes

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) erkunden, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu gestalten.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}
- {{cssxref("appearance")}}
- {{cssxref("::checkmark")}}
- {{cssxref(":checked")}}
- [Anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
