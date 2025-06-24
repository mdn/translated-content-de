---
title: "Element: querySelectorAll() Methode"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element) Methode **`querySelectorAll()`**
gibt eine statische (nicht live) [`NodeList`](/de/docs/Web/API/NodeList) zurück, die eine Liste von Elementen darstellt, die der angegebenen Gruppe von Selektoren entsprechen, welche Nachfahren des Elements sind, auf dem die Methode aufgerufen wurde.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die abgeglichen werden sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; andernfalls wird eine `SyntaxError` Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht erfordert, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn entweder durch Aufrufen von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) für den Wert oder durch eine der in [Escape-Zeichen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken escapen. Siehe [Escaping von Attributwerten](#escaping_von_attributwerten) für ein Beispiel.

    Die Selektoren werden auf das gesamte Dokument angewendet, nicht nur auf das bestimmte Element, für das `querySelectorAll()` aufgerufen wird. Um den Selektor auf das Element zu beschränken, für das `querySelectorAll()` aufgerufen wird, fügen Sie die [`:scope`](/de/docs/Web/CSS/:scope) Pseudo-Klasse am Anfang des Selektors hinzu. Siehe das [Beispiel zur Selektor-Scope](#selektor-scope).

### Rückgabewert

Eine nicht-live [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element) Objekt für jeden Nachfahrenknoten enthält, der mindestens einem der angegebenen Selektoren entspricht. Die Elemente befinden sich in Dokumentenreihenfolge — das heißt, Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings ungültig ist.

## Beispiele

### Abrufen aller Elemente mit einem benutzerdefinierten Datenwert

Dieses Beispiel verwendet den [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um mehrere Elemente auszuwählen, die ein `data-name` Datenattribut enthalten, welches "funnel-chart-percent" enthält.

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

### Erhalten einer Liste von Übereinstimmungen

Um eine [`NodeList`](/de/docs/Web/API/NodeList) aller {{HTMLElement("p")}} Elemente zu erhalten, die sich in dem Element `myBox` befinden:

```js
const matches = myBox.querySelectorAll("p");
```

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}} Elemente in `myBox` zurück, die entweder die Klasse `note` oder `alert` haben:

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste von `<p>` Elementen des Dokuments, deren unmittelbares übergeordnetes Element ein {{HTMLElement("div")}} mit der Klasse `"highlighted"` ist und die sich in einem Container mit der ID `"test"` befinden.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}} Elemente im Dokument zurückzugeben, die ein Attribut namens `"data-src"` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente innerhalb einer Liste mit der ID `"user-list"` zurückzugeben, die ein `"data-active"` Attribut mit dem Wert `"1"` haben:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Zugriff auf die Übereinstimmungen

Sobald die [`NodeList`](/de/docs/Web/API/NodeList) der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie ein Array untersuchen. Wenn das Array leer ist (d.h. seine `length` Eigenschaft ist `0`), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die Standard-Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie können jede übliche Schleifenanweisung verwenden, wie zum Beispiel:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> [!NOTE] > `NodeList` ist kein echtes Array, das heißt, es verfügt nicht über Array-Methoden wie `slice`, `some`, `map`, usw. Um es in ein Array zu konvertieren, können Sie `Array.from(nodeList)` versuchen.

### Selektor-Scope

Die Methode `querySelectorAll()` wendet ihre Selektoren auf das gesamte Dokument an: Sie sind nicht auf das Element begrenzt, auf dem die Methode aufgerufen wird. Um die Selektoren zu begrenzen, fügen Sie die [`:scope`](/de/docs/Web/CSS/:scope) Pseudo-Klasse am Anfang des Selektor-Strings hinzu.

#### HTML

In diesem Beispiel enthält das HTML:

- zwei Buttons: `#select` und `#select-scope`
- drei verschachtelte `<div>` Elemente: `#outer`, `#subject`, und `#inner`
- ein `<pre>` Element, das das Beispiel für die Ausgabe verwendet.

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

Im JavaScript wählen wir zuerst das `#subject` Element aus.

Wenn der `#select` Button gedrückt wird, rufen wir `querySelectorAll()` für `#subject` auf und übergeben `"#outer #inner"` als Selektor-String.

Wenn der `#select-scope` Button gedrückt wird, rufen wir erneut `querySelectorAll()` für `#subject` auf, aber dieses Mal übergeben wir `":scope #outer #inner"` als Selektor-String.

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

Wenn wir "Select" drücken, wählt der Selektor alle Elemente mit einer ID von `inner` aus, die auch einen Vorfahren mit einer ID von `outer` haben. Beachten Sie, dass selbst wenn `#outer` außerhalb des `#subject` Elements liegt, es trotzdem in der Auswahl verwendet wird, sodass unser `#inner` Element gefunden wird.

Wenn wir "Select with :scope" drücken, beschränkt die `:scope` Pseudo-Klasse den Selektor-Scope auf `#subject`, sodass `#outer` nicht in die Selektorauswahl einbezogen wird, und wir das `#inner` Element nicht finden.

### Escaping von Attributwerten

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelectorAll()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}} Element eine `id` von `"this?element"`, die kein gültiger CSS-Bezeichner ist, weil das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Buttons und ein {{htmlelement("pre")}} Element zum Protokollieren von Fehlern.

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

Alle drei Buttons versuchen, wenn sie geklickt werden, das `<div>` zu wählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Der erste Button verwendet den `"this?element"` Wert direkt.
- Der zweite Button escapet den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Der dritte Button escapet explizit das `"?"` Zeichen mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst escapen müssen, mit einem weiteren Backslash, wie: `"\\?"`.

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

Das Klicken auf den ersten Button ergibt einen Fehler, während die zweiten und dritten Buttons ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Suche nach DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS Leitfaden
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN Lernbereich
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
