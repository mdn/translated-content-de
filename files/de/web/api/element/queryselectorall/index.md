---
title: "Element: querySelectorAll() Methode"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{APIRef("DOM")}}

Die Methode **`querySelectorAll()`** des [`Element`](/de/docs/Web/API/Element)
gibt eine statische (nicht dynamische) [`NodeList`](/de/docs/Web/API/NodeList) zurück, die eine Liste der
Elemente darstellt, die mit der angegebenen Gruppe von Selektoren übereinstimmen, welche Nachkommen des Elements sind, auf dem die Methode aufgerufen wurde.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String
    muss ein gültiger CSS-Selektor-String sein; ist er das nicht, wird eine `SyntaxError`-Ausnahme
    ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn vor der Verwendung in einem Selektor escapen, entweder indem Sie [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert anwenden oder eine der in [Escaping characters](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Escaping attribute values](#attributwerte_escapen) für ein Beispiel.

    Die Selektoren werden auf das gesamte Dokument angewendet, nicht nur auf das spezielle Element, auf das `querySelectorAll()` aufgerufen wird. Um den Selektor auf das Element zu beschränken, auf dem `querySelectorAll()` aufgerufen wird, fügen Sie die [`:scope`](/de/docs/Web/CSS/:scope)-Pseudoklasse am Anfang des Selektors hinzu. Siehe das Beispiel [selector scope](#selektorbereich).

### Rückgabewert

Eine nicht-dynamische [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element)-Objekt für jeden nachgeordneten Knoten enthält, der mit mindestens einem der angegebenen Selektoren übereinstimmt. Die Elemente sind in Dokumentreihenfolge — das heißt, Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS-Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste
> immer leer.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings nicht gültig ist.

## Beispiele

### Alle Elemente mit einem benutzerdefinierten Datenwert abrufen

Dieses Beispiel verwendet den [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um mehrere Elemente mit einem `data-name` Datenattribut auszuwählen, das "funnel-chart-percent" enthält.

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

Um eine [`NodeList`](/de/docs/Web/API/NodeList) aller {{HTMLElement("p")}}-Elemente zu erhalten, die innerhalb des Elements `myBox` enthalten sind:

```js
const matches = myBox.querySelectorAll("p");
```

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}}-Elemente innerhalb von
`myBox` mit einer Klasse von entweder `note` oder `alert` zurück:

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste der `<p>`-Elemente des Dokuments, deren unmittelbares
Elternelement ein {{HTMLElement("div")}} mit der Klasse `"highlighted"` ist und
die sich innerhalb eines Containers mit der ID `"test"` befinden.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}}-Elemente im Dokument zurückzugeben, die ein Attribut mit dem Namen `"data-src"` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente zurückzugeben, die innerhalb
einer Liste mit der ID `"user-list"` enthalten sind und ein `"data-active"`-
Attribut mit dem Wert `"1"` haben:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Zugriff auf die Übereinstimmungen

Sobald die [`NodeList`](/de/docs/Web/API/NodeList) mit den übereinstimmenden Elementen zurückgegeben wird, können Sie sie
wie jedes Array untersuchen. Wenn das Array leer ist (das heißt, seine `length`-Eigenschaft ist
`0`), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die Standard-Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie
können jede gängige Schleifenanweisung verwenden, beispielsweise:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> [!NOTE]
> `NodeList` ist kein echtes Array, das heißt, es hat keine
> Array-Methoden wie `slice`, `some`, `map`, etc. Um es in ein Array umzuwandeln, versuchen Sie
> `Array.from(nodeList)`.

### Selektorbereich

Die Methode `querySelectorAll()` wendet ihre Selektoren auf das gesamte Dokument an: Sie sind nicht auf das Element beschränkt, auf dem die Methode aufgerufen wird. Um die Selektoren zu beschränken, fügen Sie die [`:scope`](/de/docs/Web/CSS/:scope)-Pseudoklasse am Anfang des Selektor-Strings hinzu.

#### HTML

In diesem Beispiel enthält das HTML:

- zwei Schaltflächen: `#select` und `#select-scope`
- drei verschachtelte `<div>`-Elemente: `#outer`, `#subject` und `#inner`
- ein `<pre>`-Element, das im Beispiel für die Ausgabe verwendet wird.

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

Wenn die Schaltfläche `#select` gedrückt wird, rufen wir `querySelectorAll()` auf `#subject` auf und übergeben `"#outer #inner"` als Selektor-String.

Wenn die Schaltfläche `#select-scope` gedrückt wird, rufen wir erneut `querySelectorAll()` auf `#subject` auf, aber dieses Mal übergeben wir `":scope #outer #inner"` als Selektor-String.

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

Wenn wir "Select" drücken, wählt der Selektor alle Elemente mit einer ID von `inner` aus, die auch einen Vorfahren mit einer ID von `outer` haben. Beachten Sie, dass auch wenn `#outer` außerhalb des `#subject`-Elements liegt, es immer noch bei der Auswahl verwendet wird, sodass unser `#inner`-Element gefunden wird.

Wenn wir "Select with :scope" drücken, beschränkt die `:scope`-Pseudoklasse den Selektorbereich auf `#subject`, sodass `#outer` nicht bei der Auswahlanpassung verwendet wird und wir das `#inner`-Element nicht finden.

### Attributwerte escapen

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelectorAll()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Bezeichner ist, da das `"?"`-Zeichen in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}}-Element zum Protokollieren von Fehlern.

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

Alle drei Schaltflächen versuchen, wenn sie geklickt werden, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet den Wert `"this?element"` direkt.
- Die zweite Schaltfläche escapet den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Schaltfläche escapet das `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst escapen müssen, mit einem weiteren Backslash, wie: `"\\?"`.

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

Das Klicken auf die erste Schaltfläche erzeugt einen Fehler, während die zweite und dritte Schaltfläche korrekt funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Auswahl und Traversierung auf dem DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS
  Leitfaden
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN Learning-Bereich
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und
  [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und
  [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
