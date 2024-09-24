---
title: "Element: Methode querySelector()"
short-title: querySelector()
slug: Web/API/Element/querySelector
l10n:
  sourceCommit: 7b6038a180eb57ddae2e73575cc8d9671074d23f
---

{{APIRef("DOM")}}

Die **`querySelector()`**-Methode des {{domxref("Element")}}-Interfaces gibt das erste Element zurück, das ein Nachfolger des Elements ist, auf dem sie aufgerufen wird und das mit der angegebenen Gruppe von Selektoren übereinstimmt.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`

  - : Ein Zeichenfolgenwert, der einen oder mehrere Selektoren enthält, die übereinstimmen sollen. Diese Zeichenfolge muss eine gültige CSS-Selektorzeichenfolge sein; wenn sie es nicht ist, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Identifikatoren sind. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributwert kein gültiger CSS-Identifikator ist, müssen Sie ihn vor der Verwendung in einem Selektor escapen, entweder durch Aufruf von {{domxref("CSS.escape_static", "CSS.escape()")}} auf den Wert oder durch Verwendung einer der Techniken, die in [Escaping characters](/de/docs/Web/CSS/ident#escaping_characters) beschrieben sind. Siehe [Escaping attribute values](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Das erste Nachfahrelement von `baseElement`, das mit der angegebenen Gruppe von `selectors` übereinstimmt. Die gesamte Hierarchie von Elementen wird beim Abgleichen berücksichtigt, einschließlich derjenigen außerhalb der Menge von Elementen, die `baseElement` und seine Nachfahren umfassen; mit anderen Worten, `selectors` wird zunächst auf das gesamte Dokument angewendet, nicht auf das `baseElement`, um eine anfängliche Liste potenzieller Elemente zu erzeugen. Die resultierenden Elemente werden dann überprüft, ob sie Nachfahren von `baseElement` sind. Das erste übereinstimmende der verbleibenden Elemente wird von der Methode `querySelector()` zurückgegeben.

Wenn keine Übereinstimmungen gefunden werden, ist der zurückgegebene Wert `null`.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die angegebenen `selectors` ungültig sind.

## Beispiele

Lassen Sie uns einige Beispiele betrachten.

### Finden eines spezifischen Elements mit bestimmten Attributwerten

In diesem ersten Beispiel wird das erste {{HTMLElement("style")}}-Element zurückgegeben, das entweder keinen Typ hat oder den Typ "text/css" im HTML-Dokumentkörper hat:

```js
const el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

### Direkte Nachkommen mit der :scope-Pseudoklasse abrufen

Dieses Beispiel verwendet die {{cssxref(":scope")}}-Pseudoklasse, um direkte Kinder des `parentElement`-Elements abzurufen.

#### HTML

```html
<div>
  <h6>Seitenüberschrift</h6>
  <div id="parent">
    <span>Liebe ist freundlich.</span>
    <span>
      <span>Liebe ist geduldig.</span>
    </span>
    <span>
      <span>Liebe ist selbstlos.</span>
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

Dieses Beispiel zeigt, dass die Hierarchie des gesamten Dokuments berücksichtigt wird, wenn `selectors` angewendet werden, sodass Ebenen außerhalb des angegebenen `baseElement` weiterhin berücksichtigt werden, wenn Übereinstimmungen gefunden werden.

#### HTML

```html
<div>
  <h5>Ursprünglicher Inhalt</h5>
  <p>
    im Absatz
    <span>im Span</span>
    im Absatz
  </p>
</div>
<div>
  <h5>Ausgabe</h5>
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

Beachten Sie, wie der `"div span"`-Selektor das {{HTMLElement("span")}}-Element dennoch erfolgreich findet, obwohl die Knoten des `baseElement`-Kindes das {{HTMLElement("div")}}-Element nicht einschließen (es ist jedoch Teil des angegebenen Selektors).

### Attributwerte escapen

In diesem Beispiel wird gezeigt, dass, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Identifikator](/de/docs/Web/CSS/ident) ist, wir den Attributwert escapen müssen, bevor wir ihn in `querySelector()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, was kein gültiger CSS-Identifikator ist, da das `"?"`-Zeichen in CSS-Identifikatoren nicht erlaubt ist.

Wir haben auch drei Buttons und ein {{htmlelement("pre")}}-Element zur Protokollierung von Fehlern.

```html
<div id="container">
  <div id="this?element"></div>
</div>

<button id="no-escape">Kein Escaping</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">Manuelles Escaping</button>

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

Alle drei Buttons versuchen beim Klicken, das `<div>`-Element auszuwählen und dann dessen Hintergrundfarbe auf einen zufälligen Wert zu setzen.

- Der erste Button verwendet direkt den `"this?element"`-Wert.
- Der zweite Button escapt den Wert mit {{domxref("CSS.escape_static", "CSS.escape()")}}.
- Der dritte Button escapt das `"?"`-Zeichen explizit mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst mit einem weiteren Backslash escapen müssen, wie: `"\\?"`.

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

Wenn der erste Button angeklickt wird, tritt ein Fehler auf, während der zweite und dritte Button ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

### Weitere Beispiele

Siehe {{domxref("Document.querySelector()")}} für zusätzliche Beispiele des korrekten Formats für die `selectors`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) im MDN-Lernbereich
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} und
  {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} und
  {{domxref("DocumentFragment.querySelectorAll()")}}
- Andere Methoden, die Selektoren verwenden: {{domxref("element.closest()")}} und
  {{domxref("element.matches()")}}.
