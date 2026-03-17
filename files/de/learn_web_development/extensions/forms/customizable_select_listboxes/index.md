---
title: Anpassbare Auswahl-Listenfelder
short-title: Anpassbare Listenfelder
slug: Learn_web_development/Extensions/Forms/Customizable_select_listboxes
l10n:
  sourceCommit: 76936e1d9ff271ac59307a0f858d0d7b57f3866a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Dieser Artikel knüpft an den vorherigen an und zeigt, wie anpassbare Listenfeld-{{htmlelement("select")}}-Elemente gestaltet werden können.

Ein wesentlicher Vorteil von anpassbaren `<select>`-Listenfeldern gegenüber „klassischen“ Select-Listenfeldern ist, dass Sie alle Teile des Steuerungselements vollständig gestalten können und eine viel größere Vielfalt an Kindelementen darin aufnehmen können, was eine größere Flexibilität bei Design und Funktionalität bedeutet.

## Select-Listenfelder vs Dropdown-Selects

Im vorherigen Artikel haben wir über „Dropdown“-`<select>`-Elemente gesprochen, bei denen es sich um Steuerelemente handelt, die über eine Schaltfläche verfügen, die beim Drücken ein Dropdown-Auswahlfenster anzeigt, aus dem Sie eine Option auswählen können. Diese werden mit grundlegenden HTML-Tags wie `<select>` angegeben.

Im Gegensatz dazu sind „Listenfeld“-`<select>`-Elemente Steuerelemente mit einem Feld, das mehrere Optionen gleichzeitig anzeigt, aus denen Sie eine oder mehrere Optionen auswählen können. Sie entscheiden sich für die Darstellung eines „Listenfeld“-Selects, indem Sie das `multiple`-Attribut (um Mehrfachauswahl zu ermöglichen) und/oder einen `size`-Wert größer als `1` angeben. Zum Beispiel `<select multiple>` oder `<select size="3">`.

Das folgende Live-Beispiel veranschaulicht den Unterschied:

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
> Das `multiple`-Attribut sowie jeder `size`-Wert größer als `1` versetzen das `<select>`-Element in den Listenfeldmodus.

### Wie vergleichen sich anpassbare Listenfelder mit anpassbaren Dropdowns?

Ein anpassbares Listenfeld-`<select>` ist einfacher zu gestalten als die Dropdown-Variante:

- Es gibt keinen Dropdown-Auswähler, sodass Sie sich nicht um die Gestaltung mit dem {{cssxref("::picker()", "::picker(select)")}}-Pseudoelement oder dessen {{cssxref(":open")}}- und Geschlossen-Zustände kümmern müssen.
- Sie müssen sich nicht um die Gestaltung des Symbols der Auswahlschaltfläche mit {{cssxref("::picker-icon")}} kümmern oder um die Manipulation, wie das aktuell ausgewählte `<option>` innerhalb der Schaltfläche mit dem {{htmlelement("selectedcontent")}}-Element angezeigt wird.
- Es gibt nur einen einzigen Container; Sie müssen sich nicht um die Position des Auswählers relativ zur Schaltfläche kümmern.

## Ein einfaches angepasstes Listenfeld

Durchgehen wir ein einfaches Beispiel, um zu zeigen, wie ein angepasstes Listenfeld implementiert wird. Das Markup für dieses Beispiel sieht folgendermaßen aus:

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

Hier gibt es nichts Bemerkenswertes. Beachten Sie, dass wir unser Listenfeld mit `<select multiple>` anstelle von `<select size="3">` rendern. Der einzige Unterschied besteht darin, dass wir mehrere Optionen anstelle einer einzigen auswählen können. Die Gestaltung funktioniert auf genau die gleiche Weise.

Wir beginnen mit unserer Gestaltung, indem wir das `<select>`-Element mit einem {{cssxref("appearance")}}-Wert von `base-select` in die benutzerdefinierte Gestaltung übertragen:

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

Damit können wir nun unsere {{htmlelement("select")}}- und {{htmlelement("option")}}-Elemente nach Belieben gestalten.

Unsere grundlegenden Stile sehen wie folgt aus:

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

Als Nächstes setzen wir einen {{cssxref("order")}}-Wert von `1` auf das {{cssxref("::checkmark")}}-Pseudoelement, um das Häkchen für ausgewählte Optionen rechts statt links erscheinen zu lassen, und setzen ein benutzerdefiniertes Häkchen-Symbol mit der {{cssxref("content")}}-Eigenschaft.

```css live-sample___basic-listbox live-sample___expanding-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Schließlich setzen wir das {{cssxref("font-weight")}} für {{cssxref(":checked")}}-Optionen auf `bold` und eine benutzerdefinierte {{cssxref("background")}}-Farbe für die Zustände {{cssxref(":hover")}} und {{cssxref(":focus")}}, damit Sie immer wissen, welche Option Sie gehovt oder fokussiert haben.

```css live-sample___basic-listbox live-sample___expanding-listbox
option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

Dieses Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("basic-listbox", "100%", "200px")}}

## Stilvariationen für Listenfelder

Da angepasste Listenfelder nur standardmäßige HTML-Elemente sind, können Sie sie nach Belieben gestalten. In diesem Abschnitt zeigen wir Ihnen einige Variationen des vorherigen Beispiels. Sie verwenden alle dasselbe oder ähnliches Markup; Wir haben ein bisschen zusätzliches CSS hinzugefügt, um das Aussehen und Gefühl deutlich zu ändern.

### Erweitertes Listenfeld

In diesem Beispiel präsentieren wir das Listenfeld standardmäßig in der {{cssxref("height")}} einer einzelnen Option, verstecken den dadurch entstehenden {{cssxref("overflow")}}, und fügen eine {{cssxref("transition")}} hinzu, um die `<select>`-Höhe beim Zustandswechsel sanft zu animieren. Wir setzen auch einen {{cssxref("interpolate-size")}}-Wert von `allow-keywords`, um den Browser für das Animieren zwischen Längen und Schlüsselwörtern zu aktivieren.

```css live-sample___expanding-listbox
select {
  height: 44px;
  overflow: hidden;
  transition: 0.6s height;
  interpolate-size: allow-keywords;
}
```

Wir ändern die `height` auf `fit-content`, wenn das `<select>` markiert oder fokussiert wird, damit es auf seine volle Höhe erweitert wird. Beachten Sie, dass beim Tabben in ein angepasstes Select das erste `<option>` den Fokus erhält, nicht das `<select>` selbst. Daher mussten wir `select:has(option:focus)` verwenden, um das `<select>` zu markieren, wenn eine `<option>` fokussiert ist, anstatt nur `select:focus`.

```css live-sample___expanding-listbox
select:hover,
select:has(option:focus) {
  height: fit-content;
}
```

Beispiel wird jetzt wie folgt dargestellt:

{{EmbedLiveSample("expanding-listbox", "100%", "260px")}}

### Horizontales Listenfeld

In diesem Beispiel präsentieren wir die Listenfeldoptionen horizontal anstatt vertikal.

Das HTML ist das gleiche wie bei den vorherigen Beispielen, außer dass wir einen zusätzlichen Wrapper-`<div>` hinzugefügt haben, um uns zu ermöglichen, eine `width` auf das `<select>` zu setzen und dann eine andere `width` auf den Wrapper, so dass alle `<option>`-Elemente in einer Zeile gehalten werden und gescrollt werden können, wenn das `<select>` zu schmal wird, um sie alle aufzunehmen.

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

Im CSS beginnen wir damit, das enthaltene {{htmlelement("p")}}-Element und seine {{cssxref("width")}} und {{cssxref("margin")}} so zu setzen, dass das Demo horizontal im Viewport zentriert und die meiste Breite einnimmt. Wir skalieren dann das `<select>`, damit es die volle Breite seines Elternteils einnimmt und nur so hoch ist wie die `<option>`-Elemente. Das `.wrapper`-`<div>` erhält einen {{cssxref("display")}}-Wert von `flex`, wodurch die `<option>`-Elemente horizontal in einer Reihe angeordnet werden; und wir setzen seine `width`, damit sie immer so breit ist wie die `<option>`-Elemente.

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

Als Nächstes geben wir den `<option>`-Elementen zusätzliche Polsterung, um sie horizontal zu verteilen, und einen relativen {{cssxref("position")}}-Wert, damit wir ihre Nachkommen relativ zu ihnen positionieren können.

```css live-sample___horizontal-listbox
option {
  padding: 10px 30px;
  position: relative;
}
```

Zum Schluss positionieren wir die Optionskontrollkästchen absolut und geben ihnen ein benutzerdefiniertes Aussehen.

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

Unsere zweite Variation wird wie folgt dargestellt:

{{EmbedLiveSample("horizontal-listbox", "100%", "100px")}}

## Ein komplexeres Listenfeld

In diesem Abschnitt gehen wir durch ein komplexeres Beispiel, das ein Kontakt-Auswahl-Listenfeld mit integriertem Filterfeld und einem Link zum Zugriff auf einen (fiktiven) Kontaktbearbeitungsmodus bereitstellt.

### HTML

Im Markup fügen wir ein {{htmlelement("form")}} ein, das eine Überschrift und ein Wrapper-{{htmlelement("div")}} enthält. Im Wrapper fügen wir drei weitere `<div>`-Elemente ein, die jeweils ein Text{{htmlelement("input")}}, das unser Filterfeld darstellt, ein Listenfeld-{{htmlelement("select")}}, und einen Link enthalten. Das `<select>` wird durch JavaScript mit {{htmlelement("option")}}-Elementen gefüllt, die unsere Kontaktoptionen darstellen.

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

Wir beginnen unser CSS, indem wir das `<select>`-Element wie zuvor in benutzerdefinierte Stile übertragen:

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

Der Großteil des Stylings ist ziemlich rudimentär, aber wir gehen es durch und heben dabei alles Wesentliche hervor. Zuerst stylen wir das `.wrapper`-`<div>`, dem wir eine feste {{cssxref("width")}} geben, die die horizontale Größe des gesamten Steuerelements steuert.

```css live-sample___complex-listbox
.wrapper {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #ddd;
  width: 250px;
}
```

Als Nächstes stylen wir das Filter-`<input>`, das `.options`-`<div>` und das enthaltene `<select>`, sowie das `.edit`-`<div>` mit dem Link. Am bemerkenswertesten ist, dass wir dem `<select>` eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}}-Wert von `scroll` geben, damit die enthaltenen `<option>`-Elemente darin scrollen.

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

Wir gestalten unsere `<option>`-Elemente in ähnlicher Weise wie in früheren Beispielen, indem wir ihnen ein Streifenmuster sowie klare `:hover`- und `:focus`-Stile geben:

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

Unser nächster Schritt besteht darin, den Standard-Fokusbereich für die `<input>`-, `<option>`- und `<a>`-Elemente zu entfernen. Wir haben in den vorherigen Codeblöcken bereits eine alternative Gestaltung für die `<option>`-Elemente bereitgestellt; Hier bieten wir subtilere Alternativen für die `<input>`- und `<a>`-Elemente.

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

Schließlich bieten wir benutzerdefiniertes Styling für die Kontrollkästchen der ausgewählten Optionen über das `::checkmark`-Pseudoelement:

```css live-sample___complex-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

### JavaScript

Die letzte Ergänzung, die unser Beispiel benötigt, ist ein wenig JavaScript, um die Optionserstellungs- und Filterfunktionalität zu ermöglichen.

Auf einer echten Website ziehen Sie wahrscheinlich eine aktuelle Kontaktliste von einem Server ab, aber in diesem Fall haben wir die Daten in einem statischen `contacts`-Objekt bereitgestellt (wir haben die meisten Kontakte der Kürze halber ausgeblendet). Für jeden Kontakt speichern wir einen Namen und ein boolean, das angibt, ob sie im `<select>`-Element ausgewählt waren.

```js
const contacts = [
  { name: "Aisha Khan", selected: false },
  ...
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

Wir beginnen damit, Verweise auf unsere `.filter`-`<input>`- und `<select>`-Elemente abzurufen:

```js live-sample___complex-listbox
const filterInput = document.querySelector(".filter input");
const select = document.querySelector("select");
```

Als Nächstes definieren wir eine Funktion namens `populateOptions()`, die ein Array von Objekten als Parameter nimmt. Innerhalb der Funktion leeren wir zuerst den Inhalt des `<select>`-Elements. Dann durchlaufen wir das Eingabearray und erstellen ein `<option>`-Element für jedes Objekt im Array, indem wir seine `textContent`- und `selected`-Eigenschaften auf die `name`- und `selected`-Eigenschaften des Objekts setzen. Jedes `<option>`-Element wird als Kind des `<select>` in das DOM eingefügt.

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

Nun definieren wir eine weitere Funktion, `filterOptions()`, die einen Filterstring und ein Array von Objekten als Parameter nimmt. Wir überprüfen, ob der String gleich dem leeren String oder einem oder mehreren Leerzeichen ist, indem wir den Rückgabewert seiner {{jsxref("String.trim", "trim()")}}-Methode mit `""` vergleichen. Wenn dies `true` zurückgibt, führen wir die Funktion `populateOptions()` aus, übergeben ihr das vollständige Array, sodass das `<select>` mit allen `<option>`-Elementen gefüllt wird. Wenn es `false` zurückgibt, filtern wir das Eingabearray mit seiner {{jsxref("Array.filter", "filter()")}}-Methode, um nur Objekte einzuschließen, deren `name`-Eigenschaft den `filter`-String {{jsxref("String.startsWith", "startsWith()")}} hat, dann übergeben wir das gefilterte Array an die `populateOptions()`-Funktion, damit das `<select>` mit einem gefilterten Satz `<option>`-Elemente gefüllt wird.

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
> Wir konvertieren sowohl den Objekt-`name` als auch den `filter`-String mit {{jsxref("String.toLowerCase", "toLowerCase()")}} in Kleinbuchstaben, sodass die Filterübereinstimmung nicht zwischen Groß- und Kleinschreibung unterscheidet.

Als Nächstes fügen wir dem `.filter`-`<input>`-Element einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener hinzu, sodass beim Bearbeiten seines Werts die `filterOptions()`-Funktion ausgeführt wird, um die angezeigten `<option>`-Elemente zu filtern. Wir übergeben ihm den aktuellen Wert des `<input>` als Filterstring und das `contacts`-Array als Eingabearray.

```js live-sample___complex-listbox
filterInput.addEventListener("input", () => {
  filterOptions(filterInput.value, contacts);
});
```

Im nächsten Codeabschnitt wird dem `<select>`-Element ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener hinzugefügt, sodass jedes Mal, wenn ein `<option>` ausgewählt oder abgewählt wird, der `selected`-Status der Objekte im `contacts`-Array mit dem ausgewählten Status der aktuell angezeigten `<option>`-Objekte synchronisiert wird. Dies ist erforderlich, da jedes Mal, wenn wir einen neuen Filter auf unser `<select>`-Element anwenden, die angezeigten `<option>`-Elemente frisch aus dem `contacts`-Array generiert werden, welches deren ausgewählten Status umfasst. Wenn wir dies nicht tun würden, würden wir bei jedem Filterwechsel unsere ausgewählten Optionen verlieren.

Es gibt keine Möglichkeit, genau zu erkennen, welches `<option>` sich jedes Mal geändert hat, wenn eins umgeschaltet wird, also haben wir das Problem so gelöst:

1. Holen Sie ein Array aller derzeit angezeigten `<option>`-Werte, indem Sie ein Array aus der [`select.options`](/de/docs/Web/API/HTMLSelectElement/options)-Sammlung mit {{jsxref("Array.from")}} erstellen, und dann das Array mit seiner {{jsxref("Array.map", "map()")}}-Methode so zuzuordnen, dass jedes `<option>`-Element im Array durch seinen Wert ersetzt wird.
2. Holen Sie ein Array aller aktuell ausgewählten `<option>`-Werte mit der gleichen Methodik, aber dieses Mal erstellen wir das Eingabearray aus der [`select.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions)-Sammlung.
3. Für jedes Kontaktobjekt im `contacts`-Array prüfen Sie, ob der Wert der `name`-Eigenschaft des Kontakts im `allCurrentValues`-Array enthalten ist, indem die {{jsxref("Array.includes", "includes()")}}-Methode verwendet wird. Wenn nicht, ignorieren Sie es, damit wir nicht den ausgewählten Status der Kontakte umschalten, die überhaupt nicht angezeigt werden. Wenn ja, setzen Sie die `selected`-Eigenschaft des Kontakts auf das Ergebnis der Überprüfung, ob das `currentSelectedValues`-Array den Kontakt`name` {{jsxref("Array.includes", "includes()")}} - wenn dies der Fall ist, setzen Sie die Objekt-Eigenschaft auf `true`, andernfalls auf `false`.

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

Das Beispiel rendert wie folgt:

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

Im nächsten Artikel dieses Moduls werden wir die verschiedenen [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) untersuchen, die wir in modernen Browsern zur Gestaltung von Formularen in verschiedenen Zuständen verwenden können.

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}
- {{cssxref("appearance")}}
- {{cssxref("::checkmark")}}
- {{cssxref(":checked")}}
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
