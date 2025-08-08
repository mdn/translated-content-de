---
title: "Element: Methode querySelectorAll()"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("DOM")}}

Die Methode **`querySelectorAll()`** des [`Element`](/de/docs/Web/API/Element) gibt ein statisches (nicht dynamisches) [`NodeList`](/de/docs/Web/API/NodeList) zurück, das eine Liste von Elementen darstellt, die mit der angegebenen Gruppe von Selektoren übereinstimmen und Nachfahren des Elements sind, auf dem die Methode aufgerufen wurde.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere Selektoren enthält, die abgeglichen werden sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; andernfalls wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn vor der Verwendung in einem Selektor escapen. Dies kann entweder durch Aufruf von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf dem Wert erfolgen, oder durch eine der in [Escaping characters](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken. Siehe [Escaping attribute values](#attributwerte_escapen) für ein Beispiel.

    Die Selektoren beziehen sich auf das gesamte Dokument, nicht nur auf das spezifische Element, auf dem `querySelectorAll()` aufgerufen wird. Um den Selektor auf das Element, auf dem `querySelectorAll()` aufgerufen wird, zu beschränken, fügen Sie die [`:scope`](/de/docs/Web/CSS/:scope)-Pseudoklasse am Anfang des Selektors hinzu. Siehe das Beispiel [selector scope](#selektorbereich).

### Rückgabewert

Ein nicht-dynamisches [`NodeList`](/de/docs/Web/API/NodeList), das ein [`Element`](/de/docs/Web/API/Element)-Objekt für jeden Nachfahrenknoten enthält, der mit mindestens einem der angegebenen Selektoren übereinstimmt. Die Elemente sind in Dokumentreihenfolge — d.h. Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS-Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings ungültig ist.

## Beispiele

### Alle Elemente mit einem benutzerdefinierten Datenwert abrufen

Dieses Beispiel verwendet den [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um mehrere Elemente mit einem `data-name`-Datenattribut, das "funnel-chart-percent" enthält, auszuwählen.

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

### Eine Liste von Übereinstimmungen abrufen

Um eine [`NodeList`](/de/docs/Web/API/NodeList) aller {{HTMLElement("p")}}-Elemente zu erhalten, die innerhalb des Elements `myBox` enthalten sind:

```js
const matches = myBox.querySelectorAll("p");
```

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}}-Elemente innerhalb von `myBox` zurück, die entweder die Klasse `note` oder `alert` haben:

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste der `<p>`-Elemente des Dokuments, deren unmittelbares übergeordnetes Element ein {{HTMLElement("div")}} mit der Klasse `"highlighted"` ist und die sich in einem Container mit der ID `"test"` befinden.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}}-Elemente im Dokument zurückzugeben, die ein Attribut mit dem Namen `"data-src"` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente innerhalb einer Liste mit der ID `"user-list"` zurückzugeben, die ein `"data-active"`-Attribut mit einem Wert von `"1"` haben:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Auf die Übereinstimmungen zugreifen

Sobald die [`NodeList`](/de/docs/Web/API/NodeList) der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie ein normales Array untersuchen. Wenn das Array leer ist (d.h. seine `length`-Eigenschaft ist `0`), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die Standard-Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie können jede übliche Schleifenanweisung verwenden, wie z. B.:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> [!NOTE]
> `NodeList` ist kein echtes Array, das heißt, es hat keine Array-Methoden wie `slice`, `some`, `map` usw. Um es in ein Array zu konvertieren, versuchen Sie `Array.from(nodeList)`.

### Selektorbereich

Die Methode `querySelectorAll()` wendet ihre Selektoren auf das gesamte Dokument an: Sie sind nicht auf das Element beschränkt, auf dem die Methode aufgerufen wird. Um die Selektoren zu begrenzen, fügen Sie die [`:scope`](/de/docs/Web/CSS/:scope)-Pseudoklasse am Anfang des Selektor-Strings hinzu.

#### HTML

In diesem Beispiel enthält der HTML-Code:

- zwei Buttons: `#select` und `#select-scope`
- drei verschachtelte `<div>`-Elemente: `#outer`, `#subject` und `#inner`
- ein `<pre>`-Element, das im Beispiel für Ausgaben verwendet wird.

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

Im JavaScript wählen wir zuerst das `#subject`-Element aus.

Wenn der `#select`-Button gedrückt wird, rufen wir `querySelectorAll()` auf `#subject` auf und übergeben `"#outer #inner"` als Selektor-String.

Wenn der `#select-scope`-Button gedrückt wird, rufen wir erneut `querySelectorAll()` auf `#subject` auf, aber diesmal übergeben wir `":scope #outer #inner"` als Selektor-String.

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

Wenn wir "Select" drücken, wählt der Selektor alle Elemente mit einer ID von `inner` aus, die auch einen Vorfahren mit einer ID von `outer` haben. Beachten Sie, dass auch wenn `#outer` außerhalb des `#subject`-Elements liegt, es dennoch in der Auswahl verwendet wird, sodass unser `#inner`-Element gefunden wird.

Beim Drücken von "Select with :scope" beschränkt die `:scope`-Pseudoklasse den Selektorbereich auf `#subject`, sodass `#outer` nicht für die Selektorauswahl verwendet wird und wir das `#inner`-Element nicht finden.

### Attributwerte escapen

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, der Attributwert vor der Verwendung in `querySelectorAll()` escapen werden muss.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Bezeichner ist, da das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Buttons und ein {{htmlelement("pre")}}-Element zum Protokollieren von Fehlern.

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

Alle drei Buttons versuchen beim Anklicken, das `<div>`-Element auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Der erste Button verwendet den Wert `"this?element"` direkt.
- Der zweite Button escapt den Wert mithilfe von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Der dritte Button escapt das `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst mit einem weiteren Backslash escapen müssen, wie: `"\\?"`.

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

Beim Klicken des ersten Buttons tritt ein Fehler auf, während die zweiten und dritten Buttons ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN-Lernbereich
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und
  [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und
  [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
