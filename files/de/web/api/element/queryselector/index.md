---
title: "Element: querySelector() Methode"
short-title: querySelector()
slug: Web/API/Element/querySelector
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{APIRef("DOM")}}

Die **`querySelector()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt das erste Element zurück, das ein Nachfahre des Elements ist, auf dem sie aufgerufen wird, und das mit der angegebenen Gruppe von Selektoren übereinstimmt.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere Selektoren enthält, die abgeglichen werden sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; wenn nicht, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn vor der Benutzung in einem Selektor entweder durch Aufruf von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert oder durch eine der Techniken beschrieben unter [Zeichen entkommen](/de/docs/Web/CSS/ident#escaping_characters) escapen. Siehe [Attributwerte escapen](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Das erste Nachfahrelement von `baseElement`, das mit der angegebenen Gruppe von `selectors` übereinstimmt. Die gesamte Hierarchie von Elementen wird beim Abgleichen berücksichtigt, einschließlich derjenigen außerhalb des Satzes von Elementen, der `baseElement` und seine Nachkommen umfasst; mit anderen Worten, `selectors` wird zuerst auf das gesamte Dokument angewendet, nicht auf das `baseElement`, um eine anfängliche Liste potenzieller Elemente zu erzeugen. Die resultierenden Elemente werden dann daraufhin untersucht, ob sie Nachkommen von `baseElement` sind. Das erste übereinstimmende Element dieser verbleibenden Elemente wird von der `querySelector()`-Methode zurückgegeben.

Wenn keine Übereinstimmungen gefunden werden, ist der zurückgegebene Wert `null`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebenen `selectors` ungültig sind.

## Beispiele

Lassen Sie uns einige Beispiele betrachten.

### Ein bestimmtes Element mit bestimmten Attributwerten finden

In diesem ersten Beispiel wird das erste {{HTMLElement("style")}}-Element zurückgegeben, das entweder keinen Typ hat oder den Typ "text/css" im HTML-Dokumentenkörper hat:

```js
const el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

### Direkte Nachfahren mit der :scope Pseudo-Klasse abrufen

Dieses Beispiel verwendet die {{cssxref(":scope")}}-Pseudo-Klasse, um direkte Kinder des `parentElement`-Elements abzurufen.

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

{{EmbedLiveSample('Get_direct_descendants_using_the_scope_pseudo-class', 600, 160)}}

### Die gesamte Hierarchie zählt

Dieses Beispiel zeigt, dass die Hierarchie des gesamten Dokuments beim Anwenden von `selectors` berücksichtigt wird, sodass Ebenen außerhalb des spezifizierten `baseElement` bei der Suche nach Übereinstimmungen ebenfalls berücksichtigt werden.

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

{{EmbedLiveSample('The_entire_hierarchy_counts', 600, 160)}}

Beachten Sie, wie der `"div span"`-Selektor das {{HTMLElement("span")}}-Element immer noch erfolgreich abgleicht, auch wenn die Kindknoten des `baseElement` das {{HTMLElement("div")}}-Element nicht enthalten (es ist dennoch Teil des angegebenen Selektors).

### Attributwerte escapen

Dieses Beispiel zeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält, die kein gültiger [CSS-Identifier](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelector()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Identifier ist, da das `"?"`-Zeichen in CSS-Identifiern nicht erlaubt ist.

Wir haben auch drei Buttons sowie ein {{htmlelement("pre")}}-Element, um Fehler zu protokollieren.

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

Alle drei Buttons versuchen bei einem Klick, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Der erste Button verwendet direkt den Wert `"this?element"`.
- Der zweite Button escapt den Wert mittels [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Der dritte Button escapt das `"?"`-Zeichen explizit durch einen Backslash. Beachten Sie, dass wir den Backslash selbst ebenfalls escapen müssen, mit einem weiteren Backslash, wie: `"\\?"`.

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

Das Klicken auf den ersten Button ergibt einen Fehler, während die zweiten und dritten Buttons ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

### Weitere Beispiele

Siehe [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) für zusätzliche Beispiele des korrekten Formats für die `selectors`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Auswahl und Traversieren im DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN-Lernbereich
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
- Andere Methoden, die Selektoren übernehmen: [`element.closest()`](/de/docs/Web/API/Element/closest) und [`element.matches()`](/de/docs/Web/API/Element/matches).
