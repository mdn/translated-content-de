---
title: "Dokument: querySelector()-Methode"
short-title: querySelector()
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: 7b6038a180eb57ddae2e73575cc8d9671074d23f
---

{{ApiRef("DOM")}}

Die {{domxref("Document")}}-Methode **`querySelector()`** gibt das erste {{domxref("Element")}} im Dokument zurück, das dem angegebenen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) oder einer Gruppe von CSS-Selektoren entspricht. Wenn keine Übereinstimmungen gefunden werden, wird `null` zurückgegeben.

Die Übereinstimmung erfolgt durch eine tiefenorientierte Durchsuchung der Knoten des Dokuments, beginnend mit dem ersten Element im Markup des Dokuments und iterierend durch die nachfolgenden Knoten nach der Anzahl der Kindknoten.

Wenn der angegebene Selektor einer ID entspricht, die fälschlicherweise mehr als einmal im Dokument verwendet wird, wird das erste Element mit dieser ID zurückgegeben.

[CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) geben niemals Elemente zurück, wie im [Selectors API](https://www.w3.org/TR/selectors-api/#grammar) angegeben.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere passende Selektoren enthält. Dieser String muss ein gültiger CSS-Selektor-String sein; falls nicht, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht vorschreibt, dass Attributwerte gültige CSS-Identifikatoren sein müssen. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Global_attributes/id) Attributwert kein gültiger CSS-Identifikator ist, müssen Sie ihn vor der Verwendung in einem Selektor escapen, entweder indem Sie {{domxref("CSS.escape_static", "CSS.escape()")}} auf den Wert aufrufen, oder indem Sie eine der in [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Attributwerte escapen](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Ein {{domxref("Element")}}-Objekt, das das erste Element im Dokument darstellt, das dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) entspricht, oder `null`, wenn keine Übereinstimmungen gefunden werden.

Wenn Sie eine Liste aller Elemente benötigen, die den angegebenen Selektoren entsprechen, sollten Sie stattdessen {{domxref("Document.querySelectorAll", "querySelectorAll()")}} verwenden.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Syntax der angegebenen _selectors_ ungültig ist.

## Beispiele

### Finden des ersten Elements, das einer Klasse entspricht

In diesem Beispiel wird das erste Element im Dokument mit der Klasse "`myclass`" zurückgegeben:

```js
const el = document.querySelector(".myclass");
```

### Komplexe Selektoren

Selektoren können auch sehr mächtig sein, wie im folgenden Beispiel gezeigt wird. Hier wird das erste {{HTMLElement("input")}}-Element mit dem Namen "login" (`<input name="login"/>`) innerhalb eines {{HTMLElement("div")}}-Elements, dessen Klasse "user-panel main" (`<div class="user-panel main">`) ist, im Dokument zurückgegeben:

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

Dies wird ein Input-Element mit einem übergeordneten div mit der `user-panel`-Klasse, aber nicht der `main`-Klasse auswählen.

### Attributwerte escapen

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Identifikator](/de/docs/Web/CSS/ident) ist, wir den Attributwert vor der Verwendung in `querySelector()` escapen müssen.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Identifikator ist, da das Zeichen `"?"` in CSS-Identifikatoren nicht erlaubt ist.

Wir haben auch drei Buttons und ein {{htmlelement("pre")}}-Element für die Fehlerprotokollierung.

```html
<div id="this?element"></div>

<button id="no-escape">Nicht escapen</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">Manuelles escapen</button>

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

Alle drei Buttons versuchen, wenn sie angeklickt werden, das `<div>`-Element auszuwählen und dann dessen Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Der erste Button verwendet den `"this?element"`-Wert direkt.
- Der zweite Button escapet den Wert mit {{domxref("CSS.escape_static", "CSS.escape()")}}.
- Der dritte Button escapt explizit das `"?"`-Zeichen mit einem Backslash. Beachten Sie, dass wir den Backslash selbst auch mit einem weiteren Backslash escapen müssen, wie: `"\\?"`.

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

Das Klicken auf den ersten Button führt zu einem Fehler, während die zweiten und dritten Buttons korrekt funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lokalisieren von DOM-Elementen mithilfe von Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
- {{domxref("Element.querySelectorAll()")}}
