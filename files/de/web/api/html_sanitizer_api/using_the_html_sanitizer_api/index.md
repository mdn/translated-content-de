---
title: Verwendung der HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
l10n:
  sourceCommit: 6534e53abb2de32fbf2f68c0992865c379aa58f3
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) stellt Methoden bereit, die Entwicklern ermöglichen, untrusted HTML sicher in ein [`Element`](/de/docs/Web/API/Element), einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) oder ein [`Document`](/de/docs/Web/API/Document) einzufügen. Die API bietet Entwicklern auch die Flexibilität, bei Bedarf die erlaubten HTML-Entitäten weiter zu beschränken oder zu erweitern.

## Sichere Bereinigung standardmäßig

Der häufigste Anwendungsfall für die API ist das sichere Einfügen eines von Benutzern bereitgestellten Strings in ein [`Element`](/de/docs/Web/API/Element). Sofern der einzufügende String _keine_ unsicheren HTML-Entitäten enthalten muss, können Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.

Zum Beispiel wird der folgende Code alle XSS-unsicheren Elemente und Attribute im Eingabestring entfernen (in diesem Fall das {{htmlelement("script")}}-Element) sowie alle Elemente, die laut HTML-Spezifikation nicht als Kinder des Ziel-Elements erlaubt sind:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Die anderen XSS-sicheren Methoden, [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static), werden auf die gleiche Weise verwendet.

### Sichere Methoden schränken erlaubte Entitäten weiter ein

Sie können die HTML-Entitäten angeben, die Sie zulassen oder entfernen möchten, indem Sie einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) als zweiten Parameter an alle Sanitizer-Methoden übergeben.

Zum Beispiel, wenn Sie wissen, dass nur {{htmlelement("p")}}- und {{htmlelement("a")}}-Elemente im Kontext von „someElement“ unten erwartet werden, können Sie eine Sanitizer-Konfiguration erstellen, die nur diese Elemente zulässt:

```js
sanitizerOne = Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

Beachten Sie jedoch, dass unsichere HTML-Entitäten immer entfernt werden, wenn Sie die sicheren Methoden verwenden. Bei Verwendung mit den sicheren Methoden wird eine freizügige Sanitizer-Konfiguration entweder dieselben oder weniger Entitäten als die Standardkonfiguration zulassen.

## Zulassen unsicherer Bereinigung

Manchmal möchten Sie möglicherweise Eingaben einfügen, die potenziell unsichere Elemente oder Attribute enthalten müssen. In diesem Fall können Sie eine der API-Methoden verwenden, die für XSS-Unsicherheit nicht sicher sind: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe), und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Ein übliches Vorgehen ist, mit dem Standardsanitizer zu beginnen, der nur sichere Elemente zulässt, und dann nur die unsicheren Entitäten zu erlauben, die wir in der Eingabe erwarten.

Zum Beispiel werden im folgenden Sanitizer alle sicheren Elemente zugelassen, und wir erlauben darüber hinaus nur den unsicheren `onclick`-Handler auf `button`-Elementen:

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someTargetElement = document.getElementById("target");

sanitizerOne = Sanitizer(); // Default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

Mit diesem Code wäre das `alert(1)` erlaubt, und es besteht ein potenzielles Problem, dass das Attribut für böswillige Zwecke verwendet werden könnte. Wir wissen jedoch, dass alle anderen XSS-unsicheren HTML-Entitäten entfernt wurden, sodass wir uns nur um diesen einen Fall kümmern müssen und andere Maßnahmen ergreifen können.

Die unsicheren Methoden verwenden jede von Ihnen bereitgestellte Sanitizer-Konfiguration (oder keine), daher müssen Sie vorsichtiger sein als bei der Verwendung der sicheren Methoden.

## Zulassungskonfigurationen

Sie können eine ["Allow"-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie nur die Menge an HTML-Elementen und Attributen angeben, die Sie beim Verwenden des Sanitizers zulassen möchten. Diese Form der Konfiguration ist leicht verständlich und nützlich, wenn Sie genau wissen, welche HTML-Entitäten im Zielkontext erlaubt sein sollten.

Zum Beispiel erlaubt die folgende Konfiguration die {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente sowie die Attribute `cite` und `onclick`. Außerdem ersetzt sie {{htmlelement("b")}}-Elemente durch ihren Inhalt (dies ist eine Form des „Zulassens“, da der Inhalt des Elements nicht entfernt wird).

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### Erlauben von Elementen

Die erlaubten Elemente können mit der [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz angegeben werden, die dem `Sanitizer()`-Konstruktor übergeben wird (oder direkt den Bereinigungsmethoden).

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  elements: ["div", "span"],
});
```

Sie können jedoch auch jedes der erlaubten Elemente mithilfe eines Objekts angeben, das seinen `name` und `namespace` definiert, wie unten gezeigt (der `Sanitizer` wird automatisch ein Namespace ableiten, wenn dies möglich ist).

```js
const sanitizer = Sanitizer({
  elements: [
    {
      name: "div",
      namespace: "http://www.w3.org/1999/xhtml",
    },
    {
      name: "span",
      namespace: "http://www.w3.org/1999/xhtml",
    },
  ],
});
```

Sie können die Elemente über die API dem `Sanitizer` hinzufügen. Hier fügen wir die gleichen Elemente zu einem leeren Sanitizer hinzu:

```js
const sanitizer = Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Erlauben von globalen Attributen

Um Attribute global, auf jedem Element, das durch die HTML-Spezifikation erlaubt ist, zuzulassen, können Sie die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) verwenden.

Der einfachste Weg, die `attributes`-Eigenschaft zu verwenden, besteht darin, ein Array von Attributnamen anzugeben:

```js
const sanitizer = Sanitizer({
  attributes: ["cite", "onclick"],
});
```

Ebenso können Sie jedes Attribut mit den `name`- und `namespace`-Eigenschaften genauso wie Elemente spezifizieren:

```js
const sanitizer = Sanitizer({
  attributes: [
    {
      name: "cite",
      namespace: null,
    },
    {
      name: "onclick",
      namespace: null,
    },
  ],
});
```

Sie können auch jedes der erlaubten Attribute mithilfe der `allowAttribute()`-Methode des `Sanitizer` hinzufügen:

```js
const sanitizer = Sanitizer({});
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

### Erlauben/Entfernen von Attributen an einem bestimmten Element

Sie können auch Attribute an einem bestimmten Element erlauben oder entfernen. Beachten Sie, dass dies Teil einer „Allow-Konfiguration“ ist, da Sie in diesem Fall das Element weiterhin zur Injektion zulassen.

Um ein Attribut an einem Element zu erlauben, können Sie das Element als Objekt mit den Eigenschaften `name` und `attributes` angeben. Die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes)-Eigenschaft enthält ein Array der an dem Element erlaubten Attribute.

Unten zeigen wir einen Sanitizer, bei dem die {{htmlelement("div")}}, {{htmlelement("a")}}, und {{htmlelement("span")}}-Elemente erlaubt sind, und das {{htmlelement("a")}}-Element zusätzlich die Attribute `href`, `rel`, `hreflang` und `type` zulässt.

```js
const sanitizer = Sanitizer({
  elements: [
    "div",
    { name: "a", attributes: ["href", "rel", "hreflang", "type"] },
    "span",
  ],
});
```

Genauso können wir Attribute, die an einem Element nicht erlaubt sind, mithilfe eines Elementobjekts mit der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes)-Eigenschaft angeben. Zum Beispiel würde der folgende Sanitizer das `type`-Attribut von allen `<a>`-Elementen entfernen.

```js
const sanitizer = Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

In beiden Fällen können Sie auch jedes Attribut als Objekt mit `name`- und `namespace`-Eigenschaften angeben. Sie können auch die Attribut-Eigenschaften mithilfe des gleichen Elementobjekts festlegen, das an [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) übergeben wird.

Beachten Sie jedoch, dass Sie nicht sowohl Element-Attribute als auch `removeAttributes` in einem Aufruf angeben können. Der Versuch, dies zu tun, führt zu einer Ausnahme.

### Ersetzen von Kinderelementen

Sie können ein Array von Elementen angeben, die durch ihren inneren Inhalt ersetzt werden sollen. Dies wird am häufigsten verwendet, um Styles von Elementen zu entfernen.

Zum Beispiel verwendet der folgende Code die [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) um zu spezifizieren, dass das {{htmlelement("b")}}-Element ersetzt werden sollte:

```js
const replaceBoldSanitizer = Sanitizer({
  replaceWithChildrenElements: ["b"],
});

targetElement.setHTML("This <b>highlighting</b> isn't needed", {
  sanitizer: replaceBoldSanitizer,
});

// Log the result
targetElement.log(targetElement.innerHTML); // This highlighting isn't needed
```

Wie bei Elementen und Attributen können Sie die Ersatzelemente auch mit einem Namespace spezifizieren oder die [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren)-Methode verwenden:

```js
const sanitizer = Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## Entfernungs-Konfigurationen

Sie können eine ["Remove"-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie die Menge an HTML-Elementen und Attributen angeben, die Sie aus der Eingabe entfernen möchten, wenn Sie den Sanitizer verwenden. Alle anderen Elemente und Attribute sind durch die Konfiguration erlaubt, obwohl sie entfernt werden können, wenn Sie die Konfiguration in einer sicheren Bereinigungsmethode verwenden.

> [!NOTE]
> Eine Sanitizer-Konfiguration kann Allow-Listen oder Remove-Listen enthalten, aber nicht beides.

Zum Beispiel entfernt die folgende Konfiguration die {{htmlelement("script")}}, {{htmlelement("div")}}, und {{htmlelement("span")}}-Elemente und auch das `onclick`-Attribut.

```js
const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

Elemente zu entfernen ist nützlicher, wenn Sie eine bestehende Konfiguration anpassen möchten. Betrachten Sie zum Beispiel den Fall, dass wir den (sicheren) Standardsanitizer verwenden, aber auch sicherstellen möchten, dass

```js
const sanitizer = Sanitizer();
sanitizer.removeElement("div");

const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

### Entfernen von Elementen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Eigenschaft einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz kann verwendet werden, um die zu entfernenden Elemente anzugeben.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  removeElements: ["div", "span"],
});
```

Wie beim [Erlauben von Elementen](#erlauben_von_elementen) können Sie jedes der zu entfernenden Elemente auch mit einem Objekt spezifizieren, das seinen `name` und `namespace` definiert. Sie können die entfernten Elemente auch mithilfe der `Sanitizer`-API konfigurieren, wie gezeigt:

```js
const sanitizer = Sanitizer({});
sanitizer.removeElement("div");
sanitizer.removeElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Entfernen von Attributen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann verwendet werden, um Attribute anzugeben, die global entfernt werden sollen.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

Sie können jedes der Elemente auch mithilfe eines Objekts angeben, das seinen `name` und `namespace` definiert, und auch [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) verwenden, um ein Attribut hinzuzufügen, das aus allen Elementen entfernt werden soll.

```js
const sanitizer = Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## Kommentare und Datenattribute

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann auch verwendet werden, um anzugeben, ob Kommentare und `data-`-Attribute aus eingefügtem Inhalt gefiltert werden sollen, mithilfe der Eigenschaften [comments](/de/docs/Web/API/SanitizerConfig#comments) und [dataAttributes](/de/docs/Web/API/SanitizerConfig#dataattributes).

Um sowohl Kommentare als auch Datenattribute zu erlauben, könnten Sie eine Konfiguration wie diese verwenden:

```js
const sanitizer = Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

Sie können auch Kommentare oder Datenattribute auf einem bestehenden Sanitizer mit den Methoden [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) aktivieren oder deaktivieren:

```js
const sanitizer = Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer vs SanitizerConfig

Alle Bereinigungsmethoden können mit einer Sanitizer-Konfiguration, die entweder eine [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz ist, verwendet werden.

Das [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt ist eine Hülle um [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die zusätzliche nützliche Funktionalität bietet:

- Der Standardkonstruktor erzeugt eine Konfiguration, die alle XSS-sicheren Elemente und Attribute zulässt und daher einen guten Ausgangspunkt für die Erstellung von entweder etwas mehr oder etwas weniger restriktiven Sanitisern darstellt.
- Wenn Sie die Methoden verwenden, um HTML-Entitäten zu erlauben oder zu entfernen, werden die Entitäten aus den „entgegengesetzten“ Listen entfernt. Diese Normalisierungen machen die Konfiguration effizienter.
- Die Methode [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) kann verwendet werden, um alle XSS-unsicheren Entitäten aus einer bestehenden Konfiguration zu entfernen.
- Sie können die Konfiguration exportieren, um genau zu sehen, welche Entitäten erlaubt und entfernt werden.

Beachten Sie jedoch, dass Sie möglicherweise keine Sanitizer-Konfiguration definieren müssen, wenn Sie die sicheren Bereinigungsmethoden verwenden können.

## Beispiele

Für weitere Beispiele siehe die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und die einzelnen Methoden der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle.

### Sanitizer-Demo

Dieses Beispiel zeigt, wie Sie die [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden verwenden können, um einen Sanitizer zu aktualisieren. Das Ergebnis ist eine Demonstrationsschnittstelle, bei der Sie Elemente und Attribute zu den Allow- und Remove-Listen hinzufügen können und deren Auswirkungen sehen, wenn der Sanitizer mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet wird.

#### HTML

Zuerst definieren wir Schaltflächen, um den Standardsanitizer oder einen leeren Sanitizer zurückzusetzen.

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">Default Sanitizer</button>
  <button id="emptySanitizerBtn">Empty Sanitizer</button>
</div>
```

Dies wird gefolgt von {{htmlelement("select")}}-Elementen, um Benutzern die Möglichkeit zu geben, Elemente auszuwählen, die zu den Allow- und Remove-Listen für Elemente und Attribute hinzugefügt werden sollen.

```html
<div class="select-group">
  <label for="allowElementSelect">allowElement:</label>
  <select id="allowElementSelect">
    <option value="">--Choose element--</option>
    <option value="h1">h1</option>
    <option value="div">div</option>
    <option value="span">span</option>
    <option value="script">script</option>
    <option value="p">p</option>
    <option value="button">button</option>
    <option value="img">img</option>
  </select>

  <label for="removeElementSelect">removeElement:</label>
  <select id="removeElementSelect">
    <option value="">--Choose element--</option>
    <option value="h1">h1</option>
    <option value="div">div</option>
    <option value="span">span</option>
    <option value="script">script</option>
    <option value="p">p</option>
    <option value="button">button</option>
    <option value="img">img</option>
  </select>
</div>
<div class="select-group">
  <label for="allowAttributeSelect">allowAttribute:</label>
  <select id="allowAttributeSelect">
    <option value="">--Choose attribute--</option>
    <option value="class">class</option>
    <option value="autocapitalize">autocapitalize</option>
    <option value="hidden">hidden</option>
    <option value="lang">lang</option>
    <option value="title">title</option>
    <option value="onclick">onclick</option>
  </select>
  <label for="removeAttributeSelect">removeAttribute:</label>
  <select id="removeAttributeSelect">
    <option value="">--Choose attribute--</option>
    <option value="class">class</option>
    <option value="autocapitalize">autocapitalize</option>
    <option value="hidden">hidden</option>
    <option value="lang">lang</option>
    <option value="title">title</option>
    <option value="onclick">onclick</option>
  </select>
</div>
```

Dann fügen wir Schaltflächen hinzu, um Kommentare und Datenattribute zum Erlauben/Entfernen zu wechseln.

```html
<div class="button-group">
  <button id="toggleCommentsBtn">Toggle comments</button>
  <button id="toggleDataAttributesBtn">Toggle data-attributes</button>
</div>
```

Die verbleibenden Elemente zeigen den zu parsenen String (editierbar) und das Ergebnis dieser beiden Strings, wenn sie jeweils in ein Element mittels `setHTML()` und `setHTMLUnsafe()` eingefügt werden:

```html
<div>
  <p>Original string (Editable)</p>
  <pre contenteditable id="unmodified"></pre>
  <p>setHTML() (HTML as string)</p>
  <pre id="setHTML"></pre>
  <p>setHTMLUnsafe() (HTML as string)</p>
  <pre id="setHTMLUnsafe"></pre>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 430px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

Der Code testet zuerst, ob die [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle unterstützt wird. Danach wird ein String von „unsicherem HTML“ definiert, der eine Mischung aus XSS-sicheren und XSS-unsicheren Elementen (wie {{htmlelement("script")}}) enthält. Dieses wird als Text in das erste Textfeld eingefügt. Das Textfeld ist editierbar, sodass Nutzer den Text später bei Bedarf ändern können.

Wir erhalten dann die Elemente für die `setHTML`- und `setHTMLUnsafe`-Textfelder, wo wir das geparste HTML schreiben, und erstellen eine leere `Sanitizer`-Konfiguration. Die `applySanitizer()`-Methode wird mit dem neuen Sanitizer aufgerufen, um das Ergebnis der Bereinigung des Startstrings durch einen sicheren und unsicheren Sanitizer zu protokollieren.

```js
if ("Sanitizer" in window) {
  // Define unsafe string of HTML
  const initialHTMLString =
    `<div id="mainDiv"><!-- HTML comment -->
    <p data-test="true">This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <p>Be <b>bold</b> and brave!</p>
    <script>alert(1)<` + "/script></div>";

  // Set unsafe string as a text node of first element
  const unmodifiedElement = document.querySelector("#unmodified");
  unmodifiedElement.innerText = initialHTMLString;
  unsafeHTMLString = unmodifiedElement.innerText;

  const setHTMLElement = document.querySelector("#setHTML");
  const setHTMLUnsafeElement = document.querySelector("#setHTMLUnsafe");
  // Create and apply default sanitizer when we start
  let sanitizer = new Sanitizer({});
  applySanitizer(sanitizer);
```

Die protokollierende `applySanitizer()`-Methode wird unten gezeigt. Diese erhält den ursprünglichen Inhalt des „untrusted string“ aus dem ersten Textfeld und parst ihn unter Verwendung der Methoden [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) mit dem übergebenen `sanitizer`-Argument in die jeweiligen Textfelder. In jedem Fall wird das eingefügte HTML dann über `innerHTML` aus dem Element gelesen und wieder als `innerText` in das Element geschrieben (sodass es menschlich lesbar ist).

Der Code protokolliert dann die aktuelle Sanitizer-Konfiguration, die er mit [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) erhält.

```js
function applySanitizer(sanitizer) {
  // Get string to parse into element
  unsafeHTMLString = unmodifiedElement.innerText;

  // Sanitize string using safe method and then display as text
  setHTMLElement.setHTML(unsafeHTMLString, { sanitizer });
  setHTMLElement.innerText = setHTMLElement.innerHTML;

  // Sanitize string using unsafe method and then display as text
  setHTMLUnsafeElement.setHTMLUnsafe(unsafeHTMLString, { sanitizer });
  setHTMLUnsafeElement.innerText = setHTMLUnsafeElement.innerHTML;

  // Display sanitizer configuration
  const sanitizerConfig = sanitizer.get();
  log(JSON.stringify(sanitizerConfig, null, 2));
}
```

Als nächstes erhalten wir Elemente für jede der Schaltflächen und Auswahllisten.

```js
const defaultSanitizerBtn = document.querySelector("#defaultSanitizerBtn");
const emptySanitizerBtn = document.querySelector("#emptySanitizerBtn");
const allowElementSelect = document.querySelector("#allowElementSelect");
const removeElementSelect = document.querySelector("#removeElementSelect");
const allowAttributeSelect = document.querySelector("#allowAttributeSelect");
const removeAttributeSelect = document.querySelector("#removeAttributeSelect");

const toggleCommentsBtn = document.querySelector("#toggleCommentsBtn");
const toggleDataAttributesBtn = document.querySelector(
  "#toggleDataAttributesBtn",
);
```

Die Handler für die ersten beiden Schaltflächen erstellen jeweils den Standard- und leeren Sanitizer. Die vorher gezeigte `applySanitizer()`-Methode wird verwendet, um den Sanitizer auszuführen und die Protokolle zu aktualisieren.

```js
defaultSanitizerBtn.addEventListener("click", () => {
  sanitizer = new Sanitizer();
  applySanitizer(sanitizer);
});

emptySanitizerBtn.addEventListener("click", () => {
  sanitizer = new Sanitizer({});
  applySanitizer(sanitizer);
});
```

Die Handler für die Auswahllisten werden als nächstes gezeigt. Diese rufen die zugehörige Sanitizer-Methode am aktuellen Sanitizer auf, sobald ein neues Element oder Attribut ausgewählt wird. Beispielsweise ruft der Listener für `allowElementSelect` [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) auf, um das ausgewählte Element zu den erlaubten Elementen hinzuzufügen. In jedem Fall protokolliert `applySanitizer()` die Ergebnisse mit dem aktuellen Sanitizer.

```js
allowElementSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.allowElement(event.target.value);
    applySanitizer(sanitizer);
  }
});
removeElementSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.removeElement(event.target.value);
    applySanitizer(sanitizer);
  }
});
allowAttributeSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.allowAttribute(event.target.value);
    applySanitizer(sanitizer);
  }
});
removeAttributeSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.removeAttribute(event.target.value);
    applySanitizer(sanitizer);
  }
});
```

Die Handler für die letzten beiden Schaltflächen sind unten gezeigt. Diese wechseln den Wert der Variablen `dataAttributesActive` und `commentsActive` und verwenden dann diese Werte in [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes). Beachten Sie, dass, wenn die Kommentare anfänglich deaktiviert sind, das erste Drücken der Schaltfläche keine Wirkung haben könnte!

```js
let dataAttributesActive = true;
let commentsActive = true;

toggleCommentsBtn.addEventListener("click", () => {
  commentsActive = !commentsActive;
  sanitizer.setComments(commentsActive);
  applySanitizer(sanitizer);
});

toggleDataAttributesBtn.addEventListener("click", () => {
  dataAttributesActive = !dataAttributesActive;
  sanitizer.setDataAttributes(dataAttributesActive);
  applySanitizer(sanitizer);
});


} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Ergebnisse

Das Ergebnis ist unten dargestellt. Wählen Sie die oberen Schaltflächen, um jeweils einen neuen Standard- oder leeren Sanitizer festzulegen. Sie können dann die Auswahllisten verwenden, um einige Elemente und Attribute zu den jeweiligen Allow- und Remove-Listen des Sanitizers hinzuzufügen und mit den anderen Schaltflächen Kommentare ein- und auszuschalten. Die aktuelle Sanitizer-Konfiguration wird protokolliert. Der Text im oberen Textbereich wird mit der aktuellen Sanitizer-Konfiguration bereinigt und mit `setHTML()` und `setHTMLUnsafe()` geparst.

{{EmbedLiveSample("Sanitizer-Demo","100","650px")}}

Beachten Sie, dass das Hinzufügen von Elementen und Attributen zu den Allow-Listen sie aus den Remove-Listen entfernt und umgekehrt. Beachten Sie auch, dass Sie Elemente in einem Sanitizer erlauben können, die mit den unsicheren Methoden, aber nicht mit den sicheren Methoden injiziert werden.
