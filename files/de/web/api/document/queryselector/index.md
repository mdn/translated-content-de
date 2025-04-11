---
title: "Dokument: querySelector() Methode"
short-title: querySelector()
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Methode **`querySelector()`** gibt das erste [`Element`](/de/docs/Web/API/Element) innerhalb des Dokuments zurück, das dem angegebenen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) oder einer Gruppe von CSS-Selektoren entspricht. Wenn keine Übereinstimmungen gefunden werden, wird `null` zurückgegeben.

Die Übereinstimmung erfolgt durch eine tiefenorientierte pre-order Traversierung der Knoten des Dokuments, beginnend mit dem ersten Element im Dokumentenmarkup und iterierend durch sequentielle Knoten nach Reihenfolge der Anzahl der Kindknoten.

Wenn der angegebene Selektor eine ID anspricht, die im Dokument fälschlicherweise mehr als einmal verwendet wird, wird das erste Element mit dieser ID zurückgegeben.

[CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) werden niemals Elemente zurückgeben, wie im [Selectors API](https://www.w3.org/TR/selectors-api/#grammar) spezifiziert.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; ist er es nicht, wird eine `SyntaxError`-Ausnahme geworfen.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Identifier sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributwert kein gültiger CSS-Identifier ist, müssen Sie es entweder mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert escapen, oder eine der Techniken verwenden, die unter [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschrieben sind. Sehen Sie [Attributwerte escapen](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das erste Element im Dokument repräsentiert, das dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) entspricht. Wenn keine Übereinstimmungen gefunden werden, wird `null` zurückgegeben.

Wenn Sie eine Liste aller Elemente benötigen, die den angegebenen Selektoren entsprechen, sollten Sie stattdessen [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Syntax der angegebenen _selectors_ ungültig ist.

## Beispiele

### Das erste Element finden, das einer Klasse entspricht

In diesem Beispiel wird das erste Element im Dokument mit der Klasse `myclass` zurückgegeben:

```js
const el = document.querySelector(".myclass");
```

### Komplexe Selektoren

Selektoren können auch sehr leistungsfähig sein, wie im folgenden Beispiel gezeigt. Hier wird das erste {{HTMLElement("input")}}-Element mit dem Namen "login" (`<input name="login"/>`), das innerhalb eines {{HTMLElement("div")}}-Elements mit der Klasse "user-panel main" (`<div class="user-panel main">`) im Dokument liegt, zurückgegeben:

```js
const el = document.querySelector("div.user-panel.main input[name='login']");
```

### Negation

Da alle CSS-Selektor-Strings gültig sind, können Sie Selektoren auch negieren:

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

Dies wird ein Eingabefeld mit einem übergeordneten `div` mit der Klasse `user-panel`, aber nicht der Klasse `main` auswählen.

### Attributwerte escapen

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Identifier](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelector()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, die kein gültiger CSS-Identifier ist, da das `"?"`-Zeichen in CSS-Identifikatoren nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}}-Element für die Fehlerprotokollierung.

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

Alle drei Schaltflächen versuchen beim Klick, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet den Wert `"this?element"` direkt.
- Die zweite Schaltfläche escapet den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
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

Das Klicken der ersten Schaltfläche gibt einen Fehler zurück, während die zweite und dritte Schaltfläche ordnungsgemäß funktionieren.

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
