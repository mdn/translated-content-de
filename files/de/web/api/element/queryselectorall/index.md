---
title: "Element: querySelectorAll() Methode"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element) Methode **`querySelectorAll()`**
gibt eine statische (nicht dynamische) [`NodeList`](/de/docs/Web/API/NodeList) zurück, die eine Liste von Elementen darstellt, die mit der angegebenen Gruppe von Selektoren übereinstimmen und Nachkommen des Elements sind, für das die Methode aufgerufen wurde.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String
    muss ein gültiger CSS-Selektor-String sein; falls nicht, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn vor der Verwendung in einem Selektor maskieren, entweder indem Sie [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert anwenden oder eine der Techniken verwenden, die in [Escape-Zeichen](/de/docs/Web/CSS/Reference/Values/ident#escaping_characters) beschrieben sind. Siehe [Fliehen von Attributwerten](#fliehen_von_attributwerten) für ein Beispiel.

    Die Selektoren werden auf das gesamte Dokument angewendet, nicht nur auf das spezielle Element, für das `querySelectorAll()` aufgerufen wird. Um den Selektor auf das Element zu beschränken, für das `querySelectorAll()` aufgerufen wird, fügen Sie die Pseudoklasse [`:scope`](/de/docs/Web/CSS/Reference/Selectors/:scope) am Anfang des Selektors hinzu. Siehe das Beispiel [Selektor-Bereich](#selektorbereich).

### Rückgabewert

Eine nicht-dynamische [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element) Objekt für jeden Nachkommenknoten enthält, der mindestens einem der angegebenen Selektoren entspricht. Die Elemente sind in Dokumentreihenfolge sortiert — das heißt, Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings nicht gültig ist.

## Beispiele

### Alle Elemente mit einem benutzerdefinierten Datenwert erhalten

Dieses Beispiel verwendet den [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um mehrere Elemente mit einem `data-name` Datenattribut auszuwählen, das "funnel-chart-percent" enthält.

```html
<section class="box" id="sect1">
  <div data-name="funnel-chart-percent1">10.900%</div>
  <div data-name="funnel-chart-percent2">3700.00%</div>
  <div data-name="funnel-chart-percent3">0.00%</div>
</section>
```

```js
const refs = [
  ...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`),
];
```

### Eine Liste von Übereinstimmungen erhalten

Um eine [`NodeList`](/de/docs/Web/API/NodeList) aller {{HTMLElement("p")}} Elemente zu erhalten, die innerhalb des Elements `myBox` enthalten sind:

```js
const matches = myBox.querySelectorAll("p");
```

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}} Elemente innerhalb von `myBox` zurück, die eine Klasse von entweder `note` oder `alert` haben:

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste der `<p>` Elemente des Dokuments, deren unmittelbares Elternelement ein {{HTMLElement("div")}} mit der Klasse `"highlighted"` ist und die sich innerhalb eines Containers mit der ID `"test"` befinden.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}} Elemente im Dokument zurückzugeben, die ein Attribut mit dem Namen `"data-src"` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente innerhalb einer Liste mit der ID `"user-list"` zurückzugeben, die ein `"data-active"` Attribut mit dem Wert `"1"` haben:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Zugriff auf die Übereinstimmungen

Sobald die [`NodeList`](/de/docs/Web/API/NodeList) der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie ein gewöhnliches Array überprüfen. Wenn das Array leer ist (das heißt, die `length` Eigenschaft ist `0`), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die Standard-Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie können jede gebräuchliche Schleifenerklärung verwenden, wie zum Beispiel:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> [!NOTE]
> `NodeList` ist kein echtes Array, das heißt, es hat keine Array-Methoden wie `slice`, `some`, `map`, etc. Um es in ein Array zu konvertieren, versuchen Sie `Array.from(nodeList)`.

### Selektorbereich

Die Methode `querySelectorAll()` wendet ihre Selektoren auf das gesamte Dokument an: sie sind nicht auf das Element beschränkt, für das die Methode aufgerufen wird. Um die Selektoren zu begrenzen, fügen Sie die Pseudoklasse [`:scope`](/de/docs/Web/CSS/Reference/Selectors/:scope) am Anfang des Selektor-Strings hinzu.

#### HTML

In diesem Beispiel enthält das HTML:

- zwei Schaltflächen: `#select` und `#select-scope`
- drei verschachtelte `<div>` Elemente: `#outer`, `#subject` und `#inner`
- ein `<pre>` Element, das für die Ausgabe des Beispiels verwendet wird.

```html
<button id="select">Select</button>
<button id="select-scope">Select with :scope</button>

<div id="outer">
  #outer
  <div id="subject">
    #subject
    <div id="inner">#inner</div>
  </div>
</div>

<pre id="output"></pre>
```

```css hidden
div {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 3px lightseagreen solid;
  border-radius: 5px;
  font-family: monospace;
}

pre,
button {
  margin: 0.5rem;
  padding: 0.5rem;
}
```

#### JavaScript

Im JavaScript wählen wir zuerst das `#subject` Element aus.

Wenn die `#select` Schaltfläche gedrückt wird, rufen wir `querySelectorAll()` auf `#subject` auf und übergeben `"#outer #inner"` als Selektor-String.

Wenn die `#select-scope` Schaltfläche gedrückt wird, rufen wir erneut `querySelectorAll()` auf `#subject` auf, aber diesmal übergeben wir `":scope #outer #inner"` als Selektor-String.

```js
const subject = document.querySelector("#subject");

const select = document.querySelector("#select");
select.addEventListener("click", () => {
  const selected = subject.querySelectorAll("#outer #inner");
  output.textContent = `Selection count: ${selected.length}`;
});

const selectScope = document.querySelector("#select-scope");
selectScope.addEventListener("click", () => {
  const selected = subject.querySelectorAll(":scope #outer #inner");
  output.textContent = `Selection count: ${selected.length}`;
});
```

#### Ergebnis

{{EmbedLiveSample("Selector scope", "", 300)}}

Wenn wir "Select" drücken, wählt der Selektor alle Elemente mit der ID `inner` aus, die auch einen Vorfahren mit der ID `outer` haben. Beachten Sie, dass `#outer` auch außerhalb des `#subject` Elements selektiert wird, sodass unser `#inner` Element gefunden wird.

Wenn wir "Select with :scope" drücken, beschränkt die Pseudoklasse `:scope` den Selektorbereich auf `#subject`, sodass `#outer` nicht für die Selektoranpassung verwendet wird und wir das `#inner` Element nicht finden.

### Fliehen von Attributwerten

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS Bezeichner](/de/docs/Web/CSS/Reference/Values/ident) ist, wir den Attributwert maskieren müssen, bevor wir ihn in `querySelectorAll()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}} Element eine `id` von `"this?element"`, was kein gültiger CSS-Bezeichner ist, da das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}} Element für die Fehlerprotokollierung.

```html
<div id="container">
  <div id="this?element"></div>
</div>

<button id="no-escape">No escape</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">Manual escape</button>

<pre id="log"></pre>
```

#### CSS

```css
div {
  background-color: blue;
  margin: 1rem 0;
  height: 100px;
  width: 200px;
}
```

#### JavaScript

Alle drei Schaltflächen versuchen, wenn sie geklickt werden, das `<div>` Element auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet direkt den Wert `"this?element"`.
- Die zweite Schaltfläche maskiert den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Schaltfläche maskiert explizit das Zeichen `"?"` mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst maskieren müssen, indem wir einen weiteren Backslash verwenden, wie: `"\\?"`.

```js
const container = document.querySelector("#container");
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const elements = container.querySelectorAll(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    elements[0].style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
});
```

#### Ergebnis

Das Klicken auf die erste Schaltfläche führt zu einem Fehler, während die zweite und dritte Schaltfläche ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Auswahl und Durchlaufen des DOM-Baums](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN-Lernbereich
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und
  [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und
  [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
