---
title: "Dokument: querySelectorAll() Methode"
short-title: querySelectorAll()
slug: Web/API/Document/querySelectorAll
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Methode **`querySelectorAll()`**
gibt eine statische (nicht live) [`NodeList`](/de/docs/Web/API/NodeList) zurück, die eine Liste der Dokumentelemente darstellt, die mit der angegebenen Gruppe von Selektoren übereinstimmen.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String
    muss ein gültiger CSS-Selektor-String sein; wenn er es nicht ist, wird eine `SyntaxError`-Ausnahme
    ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht erfordert, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn vor der Verwendung in einem Selektor entweder mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf dem Wert escapen oder eine der in [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken anwenden. Siehe [Attributwerte escapen](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Eine nicht-live [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element)-Objekt für jedes Element enthält, das mit mindestens einem der angegebenen Selektoren übereinstimmt, oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) im Falle keiner Übereinstimmungen. Die Elemente sind in Dokumentreihenfolge — das heißt, Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS-Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings nicht gültig ist.

## Beispiele

### Eine Liste von Übereinstimmungen erhalten

Um eine [`NodeList`](/de/docs/Web/API/NodeList) aller {{HTMLElement("p")}}-Elemente im Dokument zu erhalten:

```js
const matches = document.querySelectorAll("p");
```

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}}-Elemente im Dokument zurück, die eine Klasse entweder `note` oder `alert` haben:

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste von `<p>`-Elementen, deren unmittelbares Elternelement ein {{HTMLElement("div")}} mit der Klasse `highlighted` ist und die sich in einem Container mit der ID `test` befinden.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}}-Elemente im Dokument zurückzugeben, die ein Attribut namens `data-src` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente innerhalb einer Liste mit der ID `user-list` zurückzugeben, die ein `data-active`-Attribut mit dem Wert `1` haben:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Auf die Übereinstimmungen zugreifen

Sobald die [`NodeList`](/de/docs/Web/API/NodeList) der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie jedes Array untersuchen. Wenn das Array leer ist (das heißt, seine `length`-Eigenschaft ist 0), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die Standard-Array-Notation verwenden, um auf den Inhalt der Liste zuzugreifen. Sie können jede übliche Schleifenanweisung verwenden, wie z.B.:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

### Attributwerte escapen

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelectorAll()` verwenden.

#### HTML

In dem folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, die kein gültiger CSS-Bezeichner ist, da das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}}-Element zum Protokollieren von Fehlern.

```html
<div id="this?element"></div>

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

Alle drei Schaltflächen versuchen beim Klicken, das `<div>` auszuwählen und dann dessen Hintergrundfarbe zufällig zu ändern.

- Die erste Schaltfläche verwendet den Wert `"this?element"` direkt.
- Die zweite Schaltfläche escaped den Wert mithilfe von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Schaltfläche escaped explizit das Zeichen `"?"` mithilfe eines Backslashes. Beachten Sie, dass wir den Backslash selbst auch mit einem weiteren Backslash escapen müssen, wie: `"\\?"`.

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
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS Leitfaden
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN Learning Area
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und
  [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
