---
title: "Element: querySelector() Methode"
short-title: querySelector()
slug: Web/API/Element/querySelector
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`querySelector()`** Methode des [`Element`](/de/docs/Web/API/Element)
Interfaces gibt das erste Element zurück, das ein Nachfahre des Elements ist, auf dem die Methode aufgerufen wird und das die angegebene Gruppe von Selektoren erfüllt.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String
    muss ein gültiger CSS-Selektor-String sein; wenn er es nicht ist, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn vor der Verwendung in einem Selektor escapen, entweder indem Sie [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert anwenden oder eine der Techniken verwenden, die unter [Zeichen escapen](/de/docs/Web/CSS/ident#escaping_characters) beschrieben sind. Siehe [Attributewerte escapen](#attributewerte_escapen) für ein Beispiel.

### Rückgabewert

Das erste Nachfahrelement von `baseElement`, das die angegebene Gruppe von `selectors` erfüllt. Die gesamte Hierarchie der Elemente wird beim Abgleichen berücksichtigt, einschließlich der Elemente außerhalb der Menge von Elementen, die `baseElement` und seine Nachkommen sind; mit anderen Worten, `selectors` wird zuerst auf das gesamte Dokument angewendet und nicht auf das `baseElement`, um eine anfängliche Liste potenzieller Elemente zu generieren. Die resultierenden Elemente werden dann untersucht, ob sie Nachfahren von `baseElement` sind. Das erste Match dieser verbleibenden Elemente wird von der `querySelector()` Methode zurückgegeben.

Wenn keine Übereinstimmungen gefunden werden, ist der zurückgegebene Wert `null`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die angegebenen `selectors` ungültig sind.

## Beispiele

Lassen Sie uns ein paar Beispiele betrachten.

### Ein spezifisches Element mit spezifischen Attributwerten finden

Im ersten Beispiel wird das erste {{HTMLElement("style")}} Element zurückgegeben, das entweder keinen Typ hat oder den Typ "text/css", im HTML-Dokumentkörper hat:

```js
const el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

### Direkte Nachkommen mit der :scope Pseudoklasse abrufen

Dieses Beispiel verwendet die {{cssxref(":scope")}} Pseudoklasse, um direkte Kinder des `parentElement` Elements abzurufen.

#### HTML

```html
<div>
  <h6>Page Title</h6>
  <div id="parent">
    <span>Love is Kind.</span>
    <span>
      <span>Love is Patient.</span>
    </span>
    <span>
      <span>Love is Selfless.</span>
    </span>
  </div>
</div>
```

#### CSS

```css
span {
  display: block;
  margin-bottom: 5px;
}
.red span {
  background-color: red;
  padding: 5px;
}
```

#### JavaScript

```js
const parentElement = document.querySelector("#parent");
let allChildren = parentElement.querySelectorAll(":scope > span");
allChildren.forEach((item) => item.classList.add("red"));
```

#### Ergebnis

{{ EmbedLiveSample('Get_direct_descendants_using_the_scope_pseudo-class', 600, 160) }}

### Die gesamte Hierarchie zählt

Dieses Beispiel zeigt, dass die Hierarchie des gesamten Dokuments beim Anwenden von `selectors` berücksichtigt wird, sodass Ebenen außerhalb des spezifizierten `baseElement` immer noch bei der Suche nach Übereinstimmungen berücksichtigt werden.

#### HTML

```html
<div>
  <h5>Original content</h5>
  <p>
    inside paragraph
    <span>inside span</span>
    inside paragraph
  </p>
</div>
<div>
  <h5>Output</h5>
  <div id="output"></div>
</div>
```

#### JavaScript

```js
const baseElement = document.querySelector("p");
document.getElementById("output").textContent =
  baseElement.querySelector("div span").textContent;
```

#### Ergebnis

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample('The_entire_hierarchy_counts', 600, 160) }}

Beachten Sie, wie der `"div span"` Selektor immer noch das {{HTMLElement("span")}} Element erfolgreich findet, obwohl die Kindknoten des `baseElement` nicht das {{HTMLElement("div")}} Element enthalten (es ist dennoch Teil des angegebenen Selektors).

### Attributewerte escapen

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert vor der Verwendung in `querySelector()` escapen müssen.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}} Element eine `id` von `"this?element"`, die kein gültiger CSS-Bezeichner ist, da das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}} Element für das Protokollieren von Fehlern.

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

Alle drei Schaltflächen versuchen beim Klicken, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Die erste Schaltfläche verwendet den `"this?element"` Wert direkt.
- Die zweite Schaltfläche escapt den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Schaltfläche escapt das `"?"` Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst escapen müssen, mit einem weiteren Backslash, wie: `"\\?"`.

```js
const container = document.querySelector("#container");
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = container.querySelector(`#${id}`);
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

### Weitere Beispiele

Siehe [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) für zusätzliche Beispiele für das korrekte
Format für die `selectors`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS Leitfaden
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN Lernbereich
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und
  [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und
  [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
- Andere Methoden, die Selektoren verwenden: [`element.closest()`](/de/docs/Web/API/Element/closest) und
  [`element.matches()`](/de/docs/Web/API/Element/matches).
