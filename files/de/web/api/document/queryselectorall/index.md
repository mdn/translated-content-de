---
title: "Dokument: Methode querySelectorAll()"
short-title: querySelectorAll()
slug: Web/API/Document/querySelectorAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Methode **`querySelectorAll()`** gibt eine statische (nicht live) [`NodeList`](/de/docs/Web/API/NodeList) zurück, die eine Liste der Elemente des Dokuments darstellt, die mit der angegebenen Gruppe von Selektoren übereinstimmen.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; wenn er es nicht ist, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht vorschreibt, dass Attributwerte gültige CSS-Identifikatoren sein müssen. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributwert kein gültiger CSS-Identifikator ist, müssen Sie ihn vor der Verwendung in einem Selektor entkommen lassen, entweder durch Aufrufen von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) für den Wert oder durch eine der in [Entkommende Zeichen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken. Siehe [Entkommende Attributwerte](#entkommende_attributwerte) für ein Beispiel.

### Rückgabewert

Eine nicht-live [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element)-Objekt für jedes Element enthält, das mit mindestens einem der angegebenen Selektoren übereinstimmt, oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) im Falle keiner Übereinstimmungen. Die Elemente sind in Dokumentenreihenfolge, d.h. Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS-Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings nicht gültig ist.

## Beispiele

### Erhalten einer Liste von Übereinstimmungen

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

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste von {{HTMLElement("iframe")}}-Elementen im Dokument zurückzugeben, die ein Attribut mit dem Namen `data-src` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente zurückzugeben, die sich in einer Liste mit der ID `user-list` befinden und ein `data-active`-Attribut mit dem Wert `1` haben:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Zugriff auf die Übereinstimmungen

Sobald die [`NodeList`](/de/docs/Web/API/NodeList) der übereinstimmenden Elemente zurückgegeben wurde, können Sie sie wie jedes Array untersuchen. Wenn das Array leer ist (d.h. seine `length`-Eigenschaft ist 0\), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die Standardarray-Notation verwenden, um auf die Inhalte der Liste zuzugreifen. Sie können jede übliche Schleifenanweisung verwenden, wie z.B.:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

### Entkommende Attributwerte

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Identifikator](/de/docs/Web/CSS/ident) ist, wir den Attributwert vor der Verwendung in `querySelectorAll()` entkommen lassen müssen.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, die kein gültiger CSS-Identifikator ist, da das Zeichen `"?"` in CSS-Identifikatoren nicht erlaubt ist.

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

Alle drei Schaltflächen versuchen bei Klick, das `<div>` auszuwählen und dann die Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet den Wert `"this?element"` direkt.
- Die zweite Schaltfläche lässt den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) entkommen.
- Die dritte Schaltfläche entkommt dem `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst mit einem weiteren Backslash entkommen lassen müssen, wie: `"\\?"`.

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

Das Klicken auf die erste Schaltfläche führt zu einem Fehler, während die zweite und dritte Schaltfläche ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Auffinden von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN Lernbereich
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
