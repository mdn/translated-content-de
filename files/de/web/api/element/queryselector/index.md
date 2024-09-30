---
title: "Element: querySelector()-Methode"
short-title: querySelector()
slug: Web/API/Element/querySelector
l10n:
  sourceCommit: 7b6038a180eb57ddae2e73575cc8d9671074d23f
---

{{APIRef("DOM")}}

Die **`querySelector()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt das erste Element zurück, das ein Nachfahre des Elements ist, auf dem sie aufgerufen wird und das mit der angegebenen Gruppe von Selektoren übereinstimmt.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren zum Abgleichen enthält. Dieser String muss ein gültiger CSS-Selektor-String sein; ist er das nicht, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn vor der Verwendung in einem Selektor maskieren, entweder durch Aufrufen von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert oder durch die Anwendung einer der in [Maskieren von Zeichen](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken. Siehe [Maskieren von Attributwerten](#attributwerte_maskieren) für ein Beispiel.

### Rückgabewert

Das erste Nachfahrelement von `baseElement`, das mit der angegebenen Gruppe von `selectors` übereinstimmt. Die gesamte Hierarchie der Elemente wird beim Abgleichen berücksichtigt, einschließlich derjenigen außerhalb der Elementgruppe, die `baseElement` und seine Nachkommen umfasst; mit anderen Worten, `selectors` wird zuerst auf das gesamte Dokument und nicht auf das `baseElement` angewendet, um eine anfängliche Liste potenzieller Elemente zu erzeugen. Die resultierenden Elemente werden dann untersucht, um festzustellen, ob sie Nachfahren von `baseElement` sind. Das erste Übereinstimmungselement unter diesen verbleibenden Elementen wird von der `querySelector()`-Methode zurückgegeben.

Wenn keine Übereinstimmungen gefunden werden, ist der zurückgegebene Wert `null`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebenen `selectors` ungültig sind.

## Beispiele

Betrachten Sie einige Beispiele.

### Ein spezifisches Element mit spezifischen Werten eines Attributs finden

In diesem ersten Beispiel wird das erste {{HTMLElement("style")}}-Element, das entweder keinen Typ oder den Typ "text/css" im HTML-Dokumentenkörper hat, zurückgegeben:

```js
const el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

### Direkte Nachfahren mit der :scope-Pseudoklasse abrufen

Dieses Beispiel verwendet die {{cssxref(":scope")}}-Pseudoklasse, um direkte Kinder des `parentElement`-Elements abzurufen.

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

Dieses Beispiel zeigt, dass die Hierarchie des gesamten Dokuments berücksichtigt wird, wenn `selectors` angewendet werden, sodass auch Ebenen außerhalb des angegebenen `baseElement` berücksichtigt werden, wenn nach Übereinstimmungen gesucht wird.

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample('The_entire_hierarchy_counts', 600, 160) }}

Beachten Sie, wie der `"div span"`-Selektor immer noch das {{HTMLElement("span")}}-Element erfolgreich erreicht, obwohl die Kindknoten des `baseElement` nicht das {{HTMLElement("div")}}-Element enthalten (es ist immer noch Teil des angegebenen Selektors).

### Attributwerte maskieren

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert maskieren müssen, bevor wir ihn in `querySelector()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, die kein gültiger CSS-Bezeichner ist, da das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Schaltflächen und ein {{htmlelement("pre")}}-Element zum Protokollieren von Fehlern.

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

Alle drei Schaltflächen versuchen beim Klicken, das `<div>` auszuwählen und dann dessen Hintergrundfarbe auf einen Zufallswert zu setzen.

- Die erste Schaltfläche verwendet den `"this?element"`-Wert direkt.
- Die zweite Schaltfläche maskiert den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Die dritte Schaltfläche maskiert das `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst maskieren müssen, indem wir einen weiteren Backslash verwenden, wie: `"\\?"`.

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

Das Klicken auf die erste Schaltfläche gibt einen Fehler, während die zweite und dritte Schaltfläche korrekt funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

### Weitere Beispiele

Siehe [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) für zusätzliche Beispiele des richtigen
Formats für die `selectors`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) im MDN Learning-Bereich
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und
  [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und
  [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
- Andere Methoden, die Selektoren verwenden: [`element.closest()`](/de/docs/Web/API/Element/closest) und
  [`element.matches()`](/de/docs/Web/API/Element/matches).
