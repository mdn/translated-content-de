---
title: "Document: querySelector() Methode"
short-title: querySelector()
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ApiRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document) Methode **`querySelector()`** gibt das erste [`Element`](/de/docs/Web/API/Element) im Dokument zurück, das dem angegebenen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) oder einer Gruppe von CSS-Selektoren entspricht. Wenn keine Übereinstimmungen gefunden werden, wird `null` zurückgegeben.

Das Matching erfolgt durch eine Tiefen-First-Vorwärtsdurchlauf der Knoten im Dokument, beginnend mit dem ersten Element im Markup des Dokuments und fortfahrend durch die nach Reihenfolge der Anzahl der Kindknoten sequentiellen Knoten.

Wenn der angegebene Selektor eine ID enthält, die fälschlicherweise mehrmals im Dokument verwendet wird, wird das erste Element mit dieser ID zurückgegeben.

[CSS-Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) geben niemals ein Element zurück, wie in der [Selectors API](https://www.w3.org/TR/selectors-api/#grammar) festgelegt.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; falls nicht, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Global_attributes/id) Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie diesen escapen, bevor Sie ihn in einem Selektor verwenden, entweder durch Aufruf von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert oder durch Verwendung einer der Techniken, die in [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschrieben sind. Siehe [Attributwerte escapen](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das erste Element im Dokument darstellt, das dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) entspricht, oder `null`, wenn es keine Übereinstimmungen gibt.

Wenn Sie eine Liste aller Elemente benötigen, die den angegebenen Selektoren entsprechen, sollten Sie stattdessen [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax der angegebenen _selectors_ ungültig ist.

## Beispiele

### Das erste Element finden, das einer Klasse entspricht

In diesem Beispiel wird das erste Element im Dokument mit der Klasse `myclass` zurückgegeben:

```js
const el = document.querySelector(".myclass");
```

### Komplexe Selektoren

Selektoren können auch sehr mächtig sein, wie im folgenden Beispiel gezeigt. Hier wird das erste {{HTMLElement("input")}}-Element mit dem Namen "login" (`<input name="login"/>`) innerhalb eines {{HTMLElement("div")}} zurückgegeben, dessen Klasse "user-panel main" (`<div class="user-panel main">`) im Dokument ist:

```js
const el = document.querySelector("div.user-panel.main input[name='login']");
```

### Verneinung

Da alle CSS-Selektor-Strings gültig sind, können Sie auch Selektoren negieren:

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

Dies wird ein Eingabeelement mit einem übergeordneten div mit der Klasse `user-panel`, aber nicht der Klasse `main` auswählen.

### Attributwerte escapen

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelector()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, die kein gültiger CSS-Bezeichner ist, da das `"?"`-Zeichen in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}}-Element zur Fehlerprotokollierung.

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

Alle drei Schaltflächen versuchen bei Klick, das `<div>` zu wählen und dann dessen Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet den Wert `"this?element"` direkt.
- Die zweite Schaltfläche escapt den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Schaltfläche escapt das `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst escapen müssen, mit einem weiteren Backslash, wie: `"\\?"`.

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

Das Klicken auf die erste Schaltfläche gibt einen Fehler aus, während die zweite und dritte Schaltflächen ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lokalisieren von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
