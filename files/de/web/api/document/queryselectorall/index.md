---
title: "Dokument: querySelectorAll()-Methode"
short-title: querySelectorAll()
slug: Web/API/Document/querySelectorAll
l10n:
  sourceCommit: 379af5c68d85abee004bba8163fb48546b5e388f
---

{{APIRef("DOM")}}

Die Methode {{domxref("Document")}} **`querySelectorAll()`** gibt eine statische (nicht dynamische) {{domxref("NodeList")}} zurück, die eine Liste der Elemente des Dokuments darstellt, die mit der angegebenen Gruppe von Selektoren übereinstimmen.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; wenn er es nicht ist, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn escapen, bevor Sie ihn in einem Selektor verwenden, entweder indem Sie {{domxref("CSS.escape_static", "CSS.escape()")}} auf den Wert anwenden oder eine der in [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Attributwerte escapen](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Eine nicht-dynamische {{domxref("NodeList")}}, die für jedes Element, das mindestens einem der angegebenen Selektoren entspricht, ein {{domxref("Element")}}-Objekt enthält, oder eine leere {{domxref("NodeList")}}, falls keine Übereinstimmungen gefunden werden. Die Elemente sind in Dokumentreihenfolge — das heißt, Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS-Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Syntax des angegebenen Selektoren-Strings nicht gültig ist.

## Beispiele

### Eine Liste von Übereinstimmungen erhalten

Um eine {{domxref("NodeList")}} aller {{HTMLElement("p")}}-Elemente im Dokument zu erhalten:

```js
const matches = document.querySelectorAll("p");
```

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}}-Elemente im Dokument mit einer Klasse `note` oder `alert` zurück:

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste von `<p>`-Elementen, deren unmittelbares Elternelement ein {{HTMLElement("div")}} mit der Klasse `highlighted` ist und die sich innerhalb eines Containers mit der ID `test` befinden.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}}-Elemente im Dokument zurückzugeben, die ein Attribut mit dem Namen `data-src` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente innerhalb einer Liste mit der ID `userlist` zurückzugeben, die ein `data-active`-Attribut mit dem Wert `1` haben:

```js
const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Zugriff auf die Übereinstimmungen

Sobald die {{domxref("NodeList")}} der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie jedes andere Array untersuchen. Wenn das Array leer ist (das heißt, seine `length`-Eigenschaft ist 0), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die standardmäßige Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie können jede gängige Schleifenanweisung verwenden, wie zum Beispiel:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

### Attributwerte escapen

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelectorAll()` verwenden.

#### HTML

In folgendem Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Bezeichner ist, weil das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}}-Element zum Protokollieren von Fehlern.

```html
<div id="this?element"></div>

<button id="no-escape">Kein Escape</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">Manuelles Escape</button>

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

Alle drei Schaltflächen versuchen beim Klicken, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet den Wert `"this?element"` direkt.
- Die zweite Schaltfläche escapet den Wert mit {{domxref("CSS.escape_static", "CSS.escape()")}}.
- Die dritte Schaltfläche escapet das Zeichen `"?"` explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst mit einem weiteren Backslash escapen müssen, wie: `"\\?"`.

```js
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const elements = document.querySelectorAll(`#${id}`);
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

Beim Klicken auf die erste Schaltfläche wird ein Fehler angezeigt, während die zweite und dritte Schaltfläche ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) im MDN-Lernbereich
- {{domxref("Element.querySelector()")}} und {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} und
  {{domxref("DocumentFragment.querySelectorAll()")}}
