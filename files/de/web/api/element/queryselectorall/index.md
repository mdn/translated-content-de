---
title: "Element: querySelectorAll()-Methode"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element)-Methode **`querySelectorAll()`**
gibt eine statische (nicht live) [`NodeList`](/de/docs/Web/API/NodeList) zurück, die eine Liste von Elementen darstellt, die mit der angegebenen Gruppe von Selektoren übereinstimmen und Nachkommen des Elements sind, auf dem die Methode aufgerufen wurde.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren zum Abgleichen enthält. Dieser String
    muss ein gültiger CSS-Selektorstring sein; andernfalls wird eine `SyntaxError`-Ausnahme
    ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Identifier sind. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributwert kein gültiger CSS-Identifier ist, müssen Sie ihn vor der Verwendung in einem Selektor escapen, entweder indem Sie [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert anwenden oder eine der in [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Attributwerte escapen](#attributwerte_escapen) für ein Beispiel.

    Die Selektoren werden auf das gesamte Dokument angewendet, nicht nur auf das bestimmte Element, auf dem `querySelectorAll()` aufgerufen wird. Um den Selektor auf das Element, auf dem `querySelectorAll()` aufgerufen wird, zu beschränken, fügen Sie die [`:scope`](/de/docs/Web/CSS/:scope)-Pseudoklasse am Anfang des Selektors hinzu. Siehe das [Selektorbereich](#selektorbereich)-Beispiel.

### Rückgabewert

Eine nicht-live [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element)-Objekt für jeden Nachkommenknoten enthält, der mindestens einem der angegebenen Selektoren entspricht. Die Elemente sind in Dokumentreihenfolge — das heißt, Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS-Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings nicht gültig ist.

## Beispiele

### Alle Elemente mit einem benutzerdefinierten Datenwert abrufen

Dieses Beispiel verwendet den [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um mehrere Elemente mit einem `data-name`-Datenattribut auszuwählen, das "funnel-chart-percent" enthält.

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

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}}-Elemente innerhalb von `myBox` zurück, die entweder die Klasse `note` oder `alert` haben:

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste der `<p>`-Elemente im Dokument, deren unmittelbares Elternelement ein {{HTMLElement("div")}} mit der Klasse `"highlighted"` ist und das sich in einem Container mit der ID `"test"` befindet.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}}-Elemente im Dokument zurückzugeben, die ein Attribut mit dem Namen `"data-src"` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente innerhalb einer Liste mit der ID `"userlist"` zurückzugeben, die ein `"data-active"`-Attribut haben, dessen Wert `"1"` ist:

```js
const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Auf die Übereinstimmungen zugreifen

Sobald die [`NodeList`](/de/docs/Web/API/NodeList) der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie ein normales Array untersuchen. Wenn das Array leer ist (d. h., seine `length`-Eigenschaft ist `0`), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die standardmäßige Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie können jede übliche Schleifenanweisung verwenden, wie zum Beispiel:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> **Hinweis:** `NodeList` ist kein echtes Array, das heißt, es hat keine Array-Methoden wie `slice`, `some`, `map`, usw. Um es in ein Array zu konvertieren, verwenden Sie `Array.from(nodeList)`.

### Selektorbereich

Die `querySelectorAll()`-Methode wendet ihre Selektoren auf das gesamte Dokument an: Sie sind nicht auf das Element beschränkt, auf dem die Methode aufgerufen wird. Um die Selektoren zu beschränken, fügen Sie die [`:scope`](/de/docs/Web/CSS/:scope)-Pseudoklasse am Anfang des Selektorstrings hinzu.

#### HTML

In diesem Beispiel enthält das HTML:

- zwei Buttons: `#select` und `#select-scope`
- drei geschachtelte `<div>`-Elemente: `#outer`, `#subject` und `#inner`
- ein `<pre>`-Element, das das Beispiel für die Ausgabe verwendet.

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
  border: 3px #20b2aa solid;
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

Wenn die `#select`-Taste gedrückt wird, rufen wir `querySelectorAll()` auf `#subject` auf und übergeben `"#outer #inner"` als Selektorstring.

Wenn die `#select-scope`-Taste gedrückt wird, rufen wir `querySelectorAll()` erneut auf `#subject` auf, aber dieses Mal übergeben wir `":scope #outer #inner"` als Selektorstring.

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

Wenn wir auf "Select" drücken, wählt der Selektor alle Elemente mit der ID `inner` aus, die auch einen Vorfahren mit der ID `outer` haben. Beachten Sie, dass `#outer`, obwohl es außerhalb des `#subject`-Elements liegt, immer noch in der Auswahl verwendet wird, sodass unser `#inner`-Element gefunden wird.

Wenn wir auf "Select with :scope" drücken, beschränkt die `:scope`-Pseudoklasse den Selektorbereich auf `#subject`, sodass `#outer` nicht in der Selektorauswahl verwendet wird und wir das `#inner`-Element nicht finden.

### Attributwerte escapen

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Identifier](/de/docs/Web/CSS/ident) ist, wir den Attributwert vor der Verwendung in `querySelectorAll()` escapen müssen.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Identifier ist, da das Zeichen `"?"` in CSS-Identifikatoren nicht erlaubt ist.

Wir haben auch drei Tasten und ein {{htmlelement("pre")}}-Element zum Protokollieren von Fehlern.

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

Alle drei Tasten versuchen beim Klicken, den `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Taste verwendet den Wert `"this?element"` direkt.
- Die zweite Taste escapet den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Taste escapet das `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst escapen müssen, indem wir einen weiteren Backslash verwenden, wie: `"\\?"`.

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

Das Klicken auf die erste Taste führt zu einem Fehler, während die zweite und dritte Taste ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) im MDN-Lernbereich
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und
  [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und
  [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
