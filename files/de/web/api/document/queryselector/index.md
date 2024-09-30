---
title: "Document: querySelector() Methode"
short-title: querySelector()
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ApiRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Methode **`querySelector()`** gibt das erste [`Element`](/de/docs/Web/API/Element) im Dokument zurück, das mit dem angegebenen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) oder einer Gruppe von CSS-Selektoren übereinstimmt. Wenn keine Übereinstimmungen gefunden werden, wird `null` zurückgegeben.

Die Übereinstimmung erfolgt durch eine Tiefensuche in Vorreihenfolge der Knoten des Dokuments, beginnend mit dem ersten Element im Markup des Dokuments und Iteration durch die anschließenden Knoten in der Reihenfolge ihrer Kindknoten.

Wenn der angegebene Selektor einer ID entspricht, die fälschlicherweise mehr als einmal im Dokument verwendet wird, wird das erste Element mit dieser ID zurückgegeben.

[CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) werden niemals ein Element zurückgeben, wie es in der [Selectors API](https://www.w3.org/TR/selectors-api/#grammar) festgelegt ist.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; ist er es nicht, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn entweder mit einem Aufruf von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert umwandeln oder eine der in [Fluchtzeichen für Zeichen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Fluchtzeichen für Attributwerte](#fluchtzeichen_für_attributwerte) für ein Beispiel.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das erste Element im Dokument darstellt, das mit dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) übereinstimmt, oder `null`, wenn keine Übereinstimmungen vorhanden sind.

Wenn Sie eine Liste aller Elemente benötigen, die mit den angegebenen Selektoren übereinstimmen, sollten Sie stattdessen [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax der angegebenen _selectors_ ungültig ist.

## Beispiele

### Das erste Element mit einer Klasse finden

In diesem Beispiel wird das erste Element im Dokument mit der Klasse `myclass` zurückgegeben:

```js
const el = document.querySelector(".myclass");
```

### Komplexe Selektoren

Selektoren können auch sehr mächtig sein, wie im folgenden Beispiel gezeigt wird. Hier wird das erste {{HTMLElement("input")}}-Element mit dem Namen "login" (`<input name="login"/>`) zurückgegeben, das sich innerhalb eines {{HTMLElement("div")}} befindet, dessen Klasse "user-panel main" (`<div class="user-panel main">`) ist:

```js
const el = document.querySelector("div.user-panel.main input[name='login']");
```

### Negation

Da alle CSS-Selector-Strings gültig sind, können Sie auch Selektoren negieren:

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

Dies wählt ein `<input>`-Element mit einem übergeordneten `<div>` mit der Klasse `user-panel`, aber nicht der Klasse `main`.

### Fluchtzeichen für Attributwerte

Dieses Beispiel zeigt, dass Sie, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, den Attributwert vor der Verwendung in `querySelector()` escapen müssen.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Bezeichner ist, weil das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

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

Alle drei Schaltflächen versuchen, wenn sie angeklickt werden, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet den Wert `"this?element"` direkt.
- Die zweite Schaltfläche escapt den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Schaltfläche escapet das `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst escapen müssen, indem wir einen weiteren Backslash verwenden, wie: `"\\?"`.

```js
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = document.querySelector(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = randomColor;
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

Das Klicken auf die erste Schaltfläche führt zu einem Fehler, während die zweite und dritte Schaltfläche korrekt funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
