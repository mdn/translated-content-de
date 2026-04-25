---
title: Anpassbare Auswahllisten
short-title: Anpaßbare Auswahllisten
slug: Learn_web_development/Extensions/Forms/Customizable_select_listboxes
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel knüpft an den vorherigen an und betrachtet, wie anpassbare Listbox-{{htmlelement("select")}}-Elemente gestaltet werden können.

Ein großer Vorteil von anpassbaren `<select>`-Listenboxen im Vergleich zu "klassischen" Auswahllisten besteht darin, dass Sie alle Teile des Steuerelements vollständig gestalten können. Außerdem können Sie eine viel breitere Vielfalt von untergeordneten Elementen in ihnen enthalten, was eine größere Flexibilität in Bezug auf Design und Funktionalität bedeutet.

## Auswahllisten vs. Dropdown-Selects

Im vorherigen Artikel haben wir über "Dropdown"-`<select>`-Elemente gesprochen, bei denen es sich um Steuerelemente handelt, die über eine Schaltfläche verfügen, die beim Drücken einen Dropdown-Auswahler öffnet, aus dem Sie eine Option auswählen können. Diese werden mithilfe von einfachem HTML wie `<select>` festgelegt.

Im Gegensatz dazu sind "Listbox"-`<select>`-Elemente Steuerelemente, die eine Box anzeigen, in der mehrere Optionen gleichzeitig angezeigt werden, aus denen Sie eine oder mehrere Optionen auswählen können. Sie entscheiden sich für das Rendern einer "Listbox"-Select, indem Sie das Attribut `multiple` angeben (um Mehrfachauswahl zu ermöglichen) und/oder einen `size`-Wert größer als `1`. Zum Beispiel `<select multiple>` oder `<select size="3">`.

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
> Das `multiple`-Attribut sowie jeder `size`-Wert größer als `1` versetzt das `<select>`-Element in den Listbox-Modus.

### Wie vergleichen sich anpassbare Listboxen mit anpassbaren Dropdowns?

Eine anpassbare Listbox-`<select>` ist einfacher zu gestalten als die Dropdown-Variante:

- Es gibt keinen Dropdown-Auswahler, sodass Sie sich nicht darum kümmern müssen, ihn mit dem {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element oder seinen {{cssxref(":open")}} und geschlossenen Zuständen zu gestalten.
- Sie müssen sich nicht darum kümmern, das Symbol der Select-Schaltfläche mit {{cssxref("::picker-icon")}} zu gestalten oder zu manipulieren, wie der derzeit ausgewählte `<option>` innerhalb der Schaltfläche mit dem {{htmlelement("selectedcontent")}}-Element angezeigt wird.
- Es ist nur ein einzelner Container beteiligt; Sie müssen sich nicht um die Position des Auswählers relativ zur Schaltfläche kümmern.

## Eine grundlegende angepasste Listbox

Lassen Sie uns durch ein grundlegendes Beispiel gehen, um zu zeigen, wie eine angepasste Listbox implementiert wird. Das Markup für dieses Beispiel sieht folgendermaßen aus:

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

Hier gibt es nichts Bemerkenswertes. Beachten Sie, dass wir unsere Listbox mit `<select multiple>` anstelle von `<select size="3">` rendern. Der einzige Unterschied besteht darin, dass wir mehrere Optionen anstelle einer einzelnen Option auswählen können. Die Gestaltung funktioniert genau auf die gleiche Weise.

Wir beginnen unsere Gestaltung, indem wir das `<select>` mit einem {{cssxref("appearance")}}-Wert von `base-select` in eine benutzerdefinierte Gestaltung bringen:

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

Damit können wir jetzt unsere {{htmlelement("select")}}- und {{htmlelement("option")}}-Elemente nach Belieben gestalten.

Unsere grundlegenden Stile sehen folgendermaßen aus:

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

Als Nächstes setzen wir einen {{cssxref("order")}}-Wert von `1` auf das {{cssxref("::checkmark")}}-Pseudo-Element, um das Häkchen für ausgewählte Optionen rechts anstelle von links erscheinen zu lassen, und setzen ein benutzerdefiniertes Häkchensymbol mit der {{cssxref("content")}}-Eigenschaft.

```css live-sample___basic-listbox live-sample___expanding-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Zum Schluss setzen wir einen `bolden` {{cssxref("font-weight")}} auf {{cssxref(":checked")}} Optionen und eine benutzerdefinierte {{cssxref("background")}}-Farbe für die Option {{cssxref(":hover")}} und {{cssxref(":focus")}}-Zustände, sodass Sie immer wissen, welche Option Sie gehoben oder fokussiert haben.

```css live-sample___basic-listbox live-sample___expanding-listbox
option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

Dieses Beispiel rendert folgendermaßen:

{{EmbedLiveSample("basic-listbox", "100%", "200px")}}

## Listbox-Stilvariationen

Da angepasste Listboxen nur Standard-HTML-Elemente sind, können Sie diese nach Belieben gestalten. In diesem Abschnitt zeigen wir Ihnen einige Variationen des vorherigen Beispiels. Sie verwenden alle dasselbe oder ein ähnliches Markup; wir haben ein wenig zusätzliches CSS hinzugefügt, um das Aussehen und Gefühl erheblich zu verändern.

### Erweiterbare Listbox

In diesem Beispiel präsentieren wir die Listbox standardmäßig in der {{cssxref("height")}} einer einzelnen Option, wobei der dadurch erzeugte {{cssxref("overflow")}} versteckt wird, und fügen eine {{cssxref("transition")}} hinzu, um die `<select>`-Höhe bei einer Zustandsänderung sanft zu animieren. Außerdem setzen wir einen {{cssxref("interpolate-size")}}-Wert von `allow-keywords`, um den Browser in die Animation zwischen Längen und Schlüsselwörtern einzubinden.

```css live-sample___expanding-listbox
select {
  height: 44px;
  overflow: hidden;
  transition: 0.6s height;
  interpolate-size: allow-keywords;
}
```

Wir ändern die `height` in `fit-content`, wenn die `<select>` gehoben oder fokussiert wird, sodass sie sich zu ihrer vollen Höhe erstreckt. Beachten Sie, dass beim Tab-Wechsel in ein angepasste Select das erste `<option>` den Fokus erhält anstelle des `<select>` selbst. Daher mussten wir `select:has(option:focus)` verwenden, um das `<select>` auszuwählen, wenn ein `<option>` fokussiert ist, anstatt nur `select:focus`.

```css live-sample___expanding-listbox
select:hover,
select:has(option:focus) {
  height: fit-content;
}
```

Das Beispiel rendert nun so:

{{EmbedLiveSample("expanding-listbox", "100%", "260px")}}

### Horizontale Listbox

In diesem Beispiel stellen wir die Listbox-Optionen horizontal statt vertikal dar.

Das HTML ist das gleiche wie bei den vorherigen Beispielen, außer dass wir einen zusätzlichen Wrapper-`<div>` eingefügt haben, um eine `width` auf dem `<select>` festzulegen und dann eine andere `width` auf dem Wrapper, sodass alle `<option>`-Elemente in einer Linie gehalten und gescrollt werden können, wenn das `<select>` zu schmal wird, um sie alle unterzubringen.

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

Im CSS beginnen wir damit, das umgebende {{htmlelement("p")}}-Element zu sizeieren und mit {{cssxref("width")}} und {{cssxref("margin")}} zu versehen, damit das Demo horizontal im Ansichtsfenster zentriert wird und den größten Teil der Breite einnimmt. Wir dimensionieren dann das `<select>`, um die volle Breite des übergeordneten Elements einzunehmen und nur so groß zu sein wie die `<option>`-Elemente. Dem `.wrapper` `<div>` wird ein {{cssxref("display")}}-Wert von `flex` zugewiesen, wodurch die `<option>`-Elemente horizontal in einer Reihe angeordnet werden; wir setzen dann seine `width`, damit es immer so breit wie die `<option>`-Elemente ist.

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

Als nächstes geben wir den `<option>`-Elementen etwas zusätzlichen Abstand, um sie horizontal zu verteilen, und einen {{cssxref("position")}}-Wert von relativ, damit wir ihre Nachkommen relativ zu ihnen positionieren können.

```css live-sample___horizontal-listbox
option {
  padding: 10px 30px;
  position: relative;
}
```

Schließlich positionieren wir die Option-Häkchen absolut und geben ihnen ein benutzerdefiniertes Erscheinungsbild.

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

Unsere zweite Variation rendert folgendermaßen:

{{EmbedLiveSample("horizontal-listbox", "100%", "100px")}}

## Eine komplexere Listbox

In diesem Abschnitt gehen wir durch ein komplexeres Beispiel, das eine Kontakt-Wähler-Listbox mit einem integrierten Filterfeld und einem Link zum Zugreifen auf einen (fiktiven) Kontaktbearbeitungsmodus bereitstellt.

### HTML

Im Markup enthalten wir ein {{htmlelement("form")}}, das eine Überschrift und einen umschließenden {{htmlelement("div")}} enthält. Im Umschließer sind drei weitere `<div>`-Elemente enthalten, die jeweils ein Text-{{htmlelement("input")}} darstellen, das unser Filterfeld repräsentiert, eine Listbox-{{htmlelement("select")}} und einen Link. Das `<select>` wird mit {{htmlelement("option")}}-Elementen gefüllt, die unsere Kontaktoptionen über JavaScript darstellen.

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

Wir beginnen unser CSS, indem wir das `<select>`-Element in benutzerdefinierte Gestaltung bringen, wie zuvor:

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

Der Großteil des Stylings ist recht einfach, aber wir gehen es durch und weisen auf alles Wichtige hin. Zuerst gestalten wir das `.wrapper` `<div>`, indem wir ihm eine feste {{cssxref("width")}} geben, die die horizontale Größe des gesamten Steuerelements kontrolliert.

```css live-sample___complex-listbox
.wrapper {
  border: 2px solid #dddddd;
  border-radius: 8px;
  background: #dddddd;
  width: 250px;
}
```

Als nächstes gestalten wir das Filter-`<input>`, das `.options` `<div>` und das enthaltene `<select>` und das `.edit` `<div>`, das den Link enthält. Besonders bemerkenswert ist, dass wir dem `<select>` eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}}-Wert von `scroll` geben, sodass die enthaltenen `<option>`-Elemente darin scrollen.

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

Wir gestalten unsere `<option>`-Elemente ähnlich wie frühere Beispiele, indem wir ihnen Zebrastreifen geben und klare `:hover`- und `:focus`-Stile anwenden:

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

Unser nächster Schritt ist es, den Standard-Fokusumriss für die `<input>`, `<option>`, und `<a>` Elemente zu entfernen. Wir haben bereits alternative Stile für die `<option>`-Elemente im vorherigen Codeblock bereitgestellt; hier bieten wir subtilere Alternativen für die `<input>` und `<a>`-Elemente.

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

Zum Schluss bieten wir benutzerdefinierte Stile für die Häkchen der ausgewählten Optionen über das `::checkmark`-Pseudo-Element:

```css live-sample___complex-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

### JavaScript

Die letzte Ergänzung, die unser Beispiel benötigt, ist etwas JavaScript, um die Optionen zu füllen und die Filterfunktion bereitzustellen.

Auf einer echten Website würden Sie wahrscheinlich eine aktuelle Kontaktliste von einem Server abrufen, aber in diesem Fall haben wir die Daten in einem statischen `contacts`-Objekt bereitgestellt (wir haben die meisten der Kontakte aus Gründen der Kürze versteckt). Für jeden Kontakt speichern wir einen Namen und ein Boolean, das anzeigt, ob dieser im `<select>`-Element ausgewählt wurde.

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

Wir beginnen damit, Referenzen auf unsere `.filter`-`<input>` und `<select>`-Elemente zu ermitteln:

```js live-sample___complex-listbox
const filterInput = document.querySelector(".filter input");
const select = document.querySelector("select");
```

Als nächstes definieren wir eine Funktion namens `populateOptions()`, die ein Array von Objekten als Parameter nimmt. In der Funktion leeren wir zuerst den Inhalt des `<select>`-Elements. Dann durchlaufen wir das Eingabearray und erstellen ein `<option>`-Element für jedes Objekt im Array, wobei wir dessen `textContent` und `selected`-Eigenschaften auf die des Objekts `name` und `selected` setzen. Jedes `<option>`-Element wird dem DOM als Kind des `<select>` hinzugefügt.

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

Jetzt definieren wir eine weitere Funktion, `filterOptions()`, die einen Filterstring und ein Array von Objekten als Parameter nimmt. Wir überprüfen, ob der String mit dem leeren String oder einem oder mehreren Leerzeichen übereinstimmt, indem wir den Rückgabewert seiner {{jsxref("String.trim", "trim()")}}-Methode mit `""` vergleichen. Wenn dies `true` zurückgibt, führen wir die `populateOptions()`-Funktion aus, indem wir ihr das vollständige Array übergeben, damit das `<select>` mit allen `<option>`-Elementen gefüllt wird. Wenn es `false` zurückgibt, filtern wir das Eingabearray mit seiner {{jsxref("Array.filter", "filter()")}}-Methode, um nur Objekte einzuschließen, deren `name`-Eigenschaft den `filter`-String {{jsxref("String.startsWith", "startsWith()")}}, und dann übergeben wir das gefilterte Array an die `populateOptions()`-Funktion, damit das `<select>` mit einer gefilterten Menge von `<option>`-Elementen gefüllt wird.

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
> Wir wandeln sowohl den Objekt-`name` als auch den `filter`-String mit {{jsxref("String.toLowerCase", "toLowerCase()")}} in Kleinbuchstaben um, damit das Filter-Matching nicht zwischen Groß- und Kleinschreibung unterscheidet.

Als nächstes fügen wir dem `.filter`-`<input>`-Element einen [`input`](/de/docs/Web/API/Element/input_event)-Eventlistener hinzu, sodass, wenn sein Wert bearbeitet wird, die `filterOptions()`-Funktion aufgerufen wird, um die angezeigten `<option>`-Elemente zu filtern. Wir übergeben ihm den aktuellen Wert des `<input>` als Filterstring und das `contacts`-Array als Eingabearray.

```js live-sample___complex-listbox
filterInput.addEventListener("input", () => {
  filterOptions(filterInput.value, contacts);
});
```

Der nächste Codeabschnitt fügt dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Eventlistener hinzu, sodass jedes Mal, wenn ein `<option>` ausgewählt oder abgewählt wird, der `selected`-Status der Objekte im `contacts`-Array mit dem ausgewählten Status der derzeit angezeigten `<option>`-Objekte synchronisiert wird. Dies ist erforderlich, da jedes Mal, wenn wir einen neuen Filter auf unser `<select>`-Element anwenden, die angezeigten `<option>`-Elemente frisch aus dem `contacts`-Array generiert werden, welches ihren ausgewählten Zustand beinhaltet. Wenn wir dies nicht täten, würden wir unsere ausgewählten Optionen jedes Mal verlieren, wenn wir den Filter ändern.

Es gibt keine Möglichkeit, genau zu erkennen, welches `<option>` jedes Mal geändert wurde, wenn eines umgeschaltet wird. Wir haben das Problem folgendermaßen gelöst:

1. Holen Sie sich ein Array aller derzeit angezeigten `<option>`-Werte, indem Sie ein Array aus der [`select.options`](/de/docs/Web/API/HTMLSelectElement/options)-Sammlung mit {{jsxref("Array.from")}} erstellen und es dann mit seiner {{jsxref("Array.map", "map()")}}-Methode abbilden, um jede `<option>` im Array durch ihren Wert zu ersetzen.
2. Holen Sie sich ein Array aller derzeit ausgewählten `<option>`-Werte mit derselben Methodik, außer dass wir diesmal das Eingabearray aus der [`select.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions)-Sammlung erstellen.
3. Für jedes Kontaktobjekt im `contacts`-Array prüfen Sie, ob der Kontakt-`name`-Eigenschaftswert im `allCurrentValues`-Array mithilfe der {{jsxref("Array.includes", "includes()")}}-Methode enthalten ist. Falls nicht, ignorieren Sie es, damit wir nicht den ausgewählten Status von Kontakten umschalten, die nicht einmal angezeigt werden. Falls ja, setzen Sie die `selected`-Eigenschaft des Kontakts auf das Ergebnis der Überprüfung, ob das `currentSelectedValues`-Array den Kontakt`name` {{jsxref("Array.includes", "includes()")}} - wenn dies der Fall ist, setzen Sie die Objekteigenschaft auf `true`, andernfalls auf `false`.

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

Zum Schluss führen wir die `populateOptions()`-Funktion aus und übergeben ihr das `contacts`-Array, damit beim Laden der Seite die vollständige Liste der Kontakte angezeigt wird.

```js live-sample___complex-listbox
populateOptions(contacts);
```

### Ergebnis

Das Beispiel rendert folgendermaßen:

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

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) untersuchen, die uns in modernen Browsern zur Verfügung stehen, um Formulare in verschiedenen Zuständen zu gestalten.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}
- {{cssxref("appearance")}}
- {{cssxref("::checkmark")}}
- {{cssxref(":checked")}}
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
