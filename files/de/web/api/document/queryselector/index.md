---
title: "Dokument: querySelector() Methode"
short-title: querySelector()
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{ApiRef("DOM")}}

Die Methode **`querySelector()`** von [`Document`](/de/docs/Web/API/Document) gibt das erste [`Element`](/de/docs/Web/API/Element) im Dokument zurück, das dem angegebenen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) oder einer Gruppe von CSS-Selektoren entspricht. Wenn keine Übereinstimmungen gefunden werden, wird `null` zurückgegeben.

Die Übereinstimmung erfolgt durch eine präorder-tiefe Durchquerung der Knoten des Dokuments, beginnend mit dem ersten Element im Markup des Dokuments und iterierend durch sequentielle Knoten in der Reihenfolge der Anzahl der Kindknoten.

Wenn der angegebene Selektor einer ID entspricht, die fälschlicherweise mehrmals im Dokument verwendet wird, wird das erste Element mit dieser ID zurückgegeben.

[CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) werden niemals Elemente zurückgeben.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; ist er es nicht, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht erfordert, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, dann müssen Sie ihn vor der Verwendung in einem Selektor maskieren, entweder indem Sie [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert anwenden oder eine der in [Zeichen maskieren](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Attributwerte maskieren](#attributwerte_maskieren) für ein Beispiel.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das erste Element im Dokument repräsentiert, das dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) entspricht, oder es wird `null` zurückgegeben, wenn keine Übereinstimmungen vorhanden sind.

Wenn Sie eine Liste aller Elemente benötigen, die den angegebenen Selektoren entsprechen, sollten Sie stattdessen [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax der angegebenen _Selectors_ ungültig ist.

## Beispiele

### Das erste Element finden, das einer Klasse entspricht

In diesem Beispiel wird das erste Element im Dokument mit der Klasse
`myclass` zurückgegeben:

```js
const el = document.querySelector(".myclass");
```

### Komplexe Selektoren

Selektoren können auch sehr leistungsfähig sein, wie im folgenden Beispiel gezeigt wird. Hier wird das erste {{HTMLElement("input")}}-Element mit dem Namen "login" (`<input name="login"/>`) innerhalb eines {{HTMLElement("div")}}-Elements mit der Klasse "user-panel main" (`<div class="user-panel main">`) im Dokument zurückgegeben:

```js
const el = document.querySelector("div.user-panel.main input[name='login']");
```

### Negation

Da alle CSS-Selektor-Strings gültig sind, können Sie auch Selektoren negieren:

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

Dies wird ein `input`-Element mit einem übergeordneten `div` mit der Klasse `user-panel`, aber nicht der `main`-Klasse auswählen.

### Attributwerte maskieren

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert vor der Verwendung in `querySelector()` maskieren müssen.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, die kein gültiger CSS-Bezeichner ist, da das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}}-Element für das Fehlerprotokoll.

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

Alle drei Schaltflächen versuchen beim Klicken, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet den `"this?element"`-Wert direkt.
- Die zweite Schaltfläche maskiert den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Schaltfläche maskiert explizit das `"?"`-Zeichen mit einem Backslash. Beachten Sie, dass wir den Backslash selbst auch mit einem weiteren Backslash maskieren müssen, wie: `"\\?"`.

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

Das Klicken auf die erste Schaltfläche führt zu einem Fehler, während die zweite und dritte Schaltfläche ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren finden](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
