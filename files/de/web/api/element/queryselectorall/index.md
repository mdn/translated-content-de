---
title: "Element: Methode querySelectorAll()"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
l10n:
  sourceCommit: 379af5c68d85abee004bba8163fb48546b5e388f
---

{{APIRef("DOM")}}

Die Methode **`querySelectorAll()`** des {{domxref("Element")}} gibt eine statische (nicht live) {{domxref("NodeList")}} zurück, die eine Liste von Elementen darstellt, die mit der angegebenen Gruppe von Selektoren übereinstimmen und Nachfahren des Elements sind, auf dem die Methode aufgerufen wurde.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die abgeglichen werden sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; falls nicht, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn entweder escapen, indem Sie {{domxref("CSS.escape_static", "CSS.escape()")}} auf den Wert anwenden, oder eine der in [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Attributwerte escapen](#attributwerte_escapen) für ein Beispiel.

    Die Selektoren werden auf das gesamte Dokument angewendet, nicht nur auf das spezielle Element, bei dem `querySelectorAll()` aufgerufen wird. Um den Selektor auf das Element zu beschränken, bei dem `querySelectorAll()` aufgerufen wird, fügen Sie die Pseudo-Klasse [`:scope`](/de/docs/Web/CSS/:scope) am Anfang des Selektors hinzu. Siehe das Beispiel [Selektorbereich](#selektorbereich).

### Rückgabewert

Eine nicht-live {{domxref("NodeList")}}, die für jeden Nachfahre, der mit mindestens einem der angegebenen Selektoren übereinstimmt, ein {{domxref("Element")}}-Objekt enthält. Die Elemente befinden sich in der Dokumentreihenfolge — das heißt, Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS-Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings nicht gültig ist.

## Beispiele

### Alle Elemente mit einem benutzerdefinierten Datumswert abrufen

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

Um eine {{domxref("NodeList")}} aller {{HTMLElement("p")}}-Elemente zu erhalten, die innerhalb des Elements `"myBox"` enthalten sind:

```js
const matches = myBox.querySelectorAll("p");
```

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}}-Elemente innerhalb von `"myBox"` zurück, die entweder die Klasse "`note`" oder "`alert`" haben:

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste der `<p>`-Elemente des Dokuments, deren direktes Elternelement ein {{HTMLElement("div")}} mit der Klasse `"highlighted"` ist und die sich innerhalb eines Containers mit der ID `"test"` befinden.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}}-Elemente im Dokument zurückzugeben, die ein Attribut namens `"data-src"` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente innerhalb einer Liste mit der ID `"userlist"` zurückzugeben, die ein `"data-active"`-Attribut mit dem Wert `"1"` haben:

```js
const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Auf die Übereinstimmungen zugreifen

Wenn die {{domxref("NodeList")}} der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie jedes andere Array überprüfen. Wenn das Array leer ist (das heißt, seine `length`-Eigenschaft ist `0`), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die Standard-Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie können jede der üblichen Schleifenanweisungen verwenden, wie beispielsweise:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> **Hinweis:** `NodeList` ist kein echtes Array, das heißt, es hat keine Array-Methoden wie `slice`, `some`, `map` usw. Um es in ein Array zu konvertieren, verwenden Sie `Array.from(nodeList)`.

### Selektorbereich

Die Methode `querySelectorAll()` wendet ihre Selektoren auf das gesamte Dokument an: Sie sind nicht auf das Element beschränkt, bei dem die Methode aufgerufen wird. Um die Selektoren einzugrenzen, fügen Sie die Pseudo-Klasse [`:scope`](/de/docs/Web/CSS/:scope) am Anfang des Selektor-Strings hinzu.

#### HTML

In diesem Beispiel enthält das HTML:

- zwei Buttons: `#select` und `#select-scope`
- drei verschachtelte `<div>`-Elemente: `#outer`, `#subject` und `#inner`
- ein `<pre>`-Element, welches das Beispiel für die Ausgabe verwendet.

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

Wenn der `#select`-Button gedrückt wird, rufen wir `querySelectorAll()` auf `#subject` auf und übergeben `"#outer #inner"` als Selektor-String.

Wenn der `#select-scope`-Button gedrückt wird, rufen wir wieder `querySelectorAll()` auf `#subject` auf, aber dieses Mal übergeben wir `":scope #outer #inner"` als Selektor-String.

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

Wenn wir "Select" drücken, wählt der Selektor alle Elemente mit der ID `inner` aus, die auch einen Vorfahren mit der ID `outer` haben. Beachten Sie, dass `#outer` außerhalb des `#subject`-Elements ist, es jedoch dennoch in der Auswahl verwendet wird, sodass unser `#inner`-Element gefunden wird.

Wenn wir "Select with :scope" drücken, schränkt die `:scope`-Pseudo-Klasse den Selektorbereich auf `#subject` ein, sodass `#outer` nicht in der Selektorauswahl verwendet wird, und wir das `#inner`-Element nicht finden.

### Attributwerte escapen

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelectorAll()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, die kein gültiger CSS-Bezeichner ist, da das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

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

Alle drei Buttons versuchen beim Klicken das `<div>` zu selektieren und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Der erste Button verwendet den Wert `"this?element"` direkt.
- Der zweite Button escapet den Wert mithilfe von {{domxref("CSS.escape_static", "CSS.escape()")}}.
- Der dritte Button escapet das `"?"`-Zeichen manuell mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst mit einem weiteren Backslash escapen müssen, wie: `"\\?"`.

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

Das Klicken auf den ersten Button erzeugt einen Fehler, während die zweiten und dritten Buttons ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren finden](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) im MDN-Lernbereich
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelector()")}} und
  {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} und
  {{domxref("DocumentFragment.querySelectorAll()")}}
