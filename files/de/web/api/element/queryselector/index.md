---
title: "Element: querySelector() Methode"
short-title: querySelector()
slug: Web/API/Element/querySelector
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}

Die **`querySelector()`** Methode der [`Element`](/de/docs/Web/API/Element)
Schnittstelle gibt das erste Element zurück, das ein Nachkomme des Elements ist, auf dem sie aufgerufen wird und das mit der angegebenen Gruppe von Selektoren übereinstimmt.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Dieser String muss ein gültiger CSS-Selektor-String sein; wenn dies nicht der Fall ist, wird eine `SyntaxError` Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht erfordert, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein Wert für das [`class`](/de/docs/Web/HTML/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut kein gültiger CSS-Bezeichner ist, müssen Sie ihn escapen, bevor Sie ihn in einem Selektor verwenden, entweder durch Aufrufen von [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) für den Wert oder durch eine der in [Escaping characters](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken. Siehe [Escaping attribute values](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Das erste Nachkommelement des `baseElement`, das mit der angegebenen
Gruppe von `selectors` übereinstimmt. Die gesamte Hierarchie der Elemente wird beim
Matchen berücksichtigt, einschließlich solcher außerhalb der Menge von Elementen, zu der `baseElement`
und seine Nachkommen gehören; mit anderen Worten, `selectors` wird zunächst auf das
ganze Dokument angewendet, nicht auf das `baseElement`, um eine anfängliche Liste von
potenziellen Elementen zu generieren. Die resultierenden Elemente werden dann darauf untersucht, ob sie
Nachkommen von `baseElement` sind. Das erste übereinstimmende Element dieser verbleibenden Elemente wird
von der `querySelector()` Methode zurückgegeben.

Wenn keine Übereinstimmungen gefunden werden, ist der zurückgegebene Wert `null`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebenen `selectors` ungültig sind.

## Beispiele

Lassen Sie uns einige Beispiele betrachten.

### Ein bestimmtes Element mit bestimmten Attributwerten finden

In diesem ersten Beispiel wird das erste {{HTMLElement("style")}} Element zurückgegeben, das entweder keinen
Typ hat oder den Typ "text/css" im HTML-Dokumentkörper hat:

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

Dieses Beispiel zeigt, dass die Hierarchie des gesamten Dokuments berücksichtigt wird, wenn
`selectors` angewendet werden, sodass Ebenen außerhalb des angegebenen
`baseElement` immer noch bei der Suche nach Übereinstimmungen berücksichtigt werden.

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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample('The_entire_hierarchy_counts', 600, 160) }}

Beachten Sie, wie der `"div span"` Selektor das {{HTMLElement("span")}} Element weiterhin erfolgreich findet, auch wenn die Kindknoten des `baseElement` Elements
nicht das {{HTMLElement("div")}} Element enthalten (es ist trotzdem Teil des angegebenen
Selectors).

### Attributwerte escapen

Dieses Beispiel zeigt, dass wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelector()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}} Element eine `id` von `"this?element"`, welche kein gültiger CSS-Bezeichner ist, da das `"?"` Zeichen in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Buttons und ein {{htmlelement("pre")}} Element zum Protokollieren von Fehlern.

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

Alle drei Buttons versuchen beim Klick, das `<div>` auszuwählen und dann seine Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Der erste Button verwendet den Wert `"this?element"` direkt.
- Der zweite Button escaped den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Der dritte Button escaped das `"?"` Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst escapen müssen, mit einem weiteren Backslash, wie: `"\\?"`.

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

Das Klicken auf den ersten Button erzeugt einen Fehler, während die zweiten und dritten Buttons richtig funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

### Weitere Beispiele

Siehe [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) für zusätzliche Beispiele des korrekten
Formats für die `selectors`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS Leitfaden
- [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) im MDN Learning-Bereich
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und
  [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und
  [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
- Andere Methoden, die Selektoren verwenden: [`element.closest()`](/de/docs/Web/API/Element/closest) und
  [`element.matches()`](/de/docs/Web/API/Element/matches).
