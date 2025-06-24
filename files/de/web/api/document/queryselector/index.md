---
title: "Dokument: querySelector() Methode"
short-title: querySelector()
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ApiRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document) Methode **`querySelector()`** gibt das erste [`Element`](/de/docs/Web/API/Element) im Dokument zurück, das dem angegebenen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) oder einer Gruppe von CSS-Selektoren entspricht. Wenn keine Übereinstimmungen gefunden werden, wird `null` zurückgegeben.

Das Matching erfolgt mittels einer Tiefensuche in Vorordnung der Knoten des Dokuments, beginnend mit dem ersten Element im Markup des Dokuments und iterierend durch sequentielle Knoten in der Reihenfolge der Anzahl der Knoten.

Wenn der angegebene Selektor mit einer ID übereinstimmt, die fälschlicherweise mehrmals im Dokument verwendet wurde, wird das erste Element mit dieser ID zurückgegeben.

[CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) werden niemals irgendwelche Elemente zurückgeben.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die zu matchen sind. Dieser String muss ein gültiger CSS-Selektor sein; andernfalls wird eine `SyntaxError` Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht erfordert, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attributswert kein gültiger CSS-Bezeichner ist, müssen Sie diesen vor der Verwendung im Selektor escapen, entweder indem Sie [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert anwenden oder eine der in [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Escaping von Attributwerten](#escaping_von_attributwerten) für ein Beispiel.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das erste Element im Dokument darstellt, das dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) entspricht oder `null`, wenn keine Übereinstimmungen vorhanden sind.

Wenn Sie eine Liste aller Elemente benötigen, die den angegebenen Selektoren entsprechen, sollten Sie stattdessen [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax der angegebenen _selectors_ ungültig ist.

## Beispiele

### Finden des ersten Elements, das einer Klasse entspricht

In diesem Beispiel wird das erste Element im Dokument mit der Klasse `myclass` zurückgegeben:

```js
const el = document.querySelector(".myclass");
```

### Komplexe Selektoren

Selektoren können auch wirklich mächtig sein, wie im folgenden Beispiel gezeigt. Hier wird das erste {{HTMLElement("input")}}-Element mit dem Namen "login" (`<input name="login"/>`), das sich innerhalb eines {{HTMLElement("div")}}-Elements mit der Klasse "user-panel main" (`<div class="user-panel main">`) im Dokument befindet, zurückgegeben:

```js
const el = document.querySelector("div.user-panel.main input[name='login']");
```

### Negation

Da alle CSS-Selektorstrings gültig sind, können Sie auch Selektoren negieren:

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

Dies wird ein Input mit einem Eltern-Div mit der Klasse `user-panel`, aber nicht der Klasse `main` auswählen.

### Escaping von Attributwerten

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, dann müssen wir den Attributwert escapen, bevor wir ihn in `querySelector()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Bezeichner ist, da das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Buttons und ein {{htmlelement("pre")}}-Element zum Protokollieren von Fehlern.

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

Alle drei Buttons versuchen beim Klicken, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Der erste Button verwendet den Wert `"this?element"` direkt.
- Der zweite Button escapt den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Der dritte Button escapt das `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir den Backslash selbst ebenfalls escapen müssen, indem wir einen weiteren Backslash verwenden, wie: `"\\?"`.

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

Beim Klicken auf den ersten Button wird ein Fehler angezeigt, während der zweite und dritte Button ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mithilfe von Selektoren finden](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
