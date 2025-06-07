---
title: Verwendung der HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API) bietet Methoden, die es Entwickler*innen ermöglichen, nicht vertrauenswürdiges HTML sicher in ein [`Element`](/de/docs/Web/API/Element), ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) oder ein [`Document`](/de/docs/Web/API/Document) einzufügen. Die API bietet zudem die Flexibilität, bei Bedarf weiter einzuschränken oder zu erweitern, welche HTML-Entitäten erlaubt sind.

## Sichere Bereinigung standardmäßig

Der häufigste Anwendungsfall der API ist das sichere Einfügen eines von Benutzer*innen bereitgestellten Strings in ein [`Element`](/de/docs/Web/API/Element). Sofern der einzufügende String _keine_ unsicheren HTML-Entitäten enthalten muss, können Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.

Das folgende Beispiel zeigt, dass alle XSS-unsicheren Elemente und Attribute im Eingabestring entfernt werden (in diesem Fall das {{htmlelement("script")}}-Element), zusammen mit allen Elementen, die gemäß der HTML-Spezifikation nicht als Kinder des Ziel-Elements erlaubt sind:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Die anderen XSS-sicheren Methoden, [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static), werden auf die gleiche Weise verwendet.

### Sichere Methoden schränken erlaubte Entitäten weiter ein

Sie können die HTML-Entitäten angeben, die Sie erlauben oder entfernen möchten, indem Sie einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) als zweites Argument an alle Sanitizer-Methoden übergeben.

Wenn Sie beispielsweise wissen, dass nur {{htmlelement("p")}} und {{htmlelement("a")}}-Elemente im Kontext von "someElement" erwartet werden, könnten Sie eine Konfiguration des Sanitizers erstellen, die nur diese Elemente erlaubt:

```js
sanitizerOne = Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

Beachten Sie jedoch, dass unsichere HTML-Entitäten bei der Verwendung der sicheren Methoden immer entfernt werden. Bei Verwendung mit den sicheren Methoden wird eine großzügige Sanitizer-Konfiguration entweder die gleichen oder weniger Entitäten als die Standardkonfiguration erlauben.

## Unsichere Bereinigung erlauben

Manchmal möchten Sie eventuell Eingaben einfügen, die potenziell unsichere Elemente oder Attribute enthalten müssen. In diesem Fall können Sie eine der API XSS-unsicheren Methoden verwenden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Ein gängiger Ansatz ist, vom Standard-Sanitizer zu starten, der nur sichere Elemente erlaubt, und dann nur die unsicheren Entitäten zuzulassen, die wir in der Eingabe erwarten.

Zum Beispiel lässt der folgende Sanitizer alle sicheren Elemente zu und erlaubt zusätzlich nur den unsicheren `onclick`-Handler auf `button`-Elementen.

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someTargetElement = document.getElementById("target");

sanitizerOne = Sanitizer(); // Default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

Mit diesem Code würde `alert(1)` erlaubt, und es besteht das Potenzial, dass das Attribut für böswillige Zwecke verwendet werden könnte. Wir wissen jedoch, dass alle anderen XSS-unsicheren HTML-Entitäten entfernt wurden, sodass wir uns nur um diesen einen Fall kümmern müssen und können andere Mitigationsmaßnahmen einleiten.

Die unsicheren Methoden verwenden jede Sanitizer-Konfiguration, die Sie bereitstellen (oder keine), daher müssen Sie sorgfältiger sein als bei den sicheren Methoden.

## Erlauben-Konfigurationen

Sie können eine ["Erlauben"-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie nur die Menge von HTML-Elementen und Attributen angeben, die erlaubt sein sollen, wenn der Sanitizer verwendet wird. Diese Form der Konfiguration ist leicht verständlich und nützlich, wenn Sie genau wissen, welche HTML-Entitäten im Zielkontext erlaubt sein sollten.

Zum Beispiel erlaubt die folgende Konfiguration die {{htmlelement("p")}} und {{htmlelement("div")}} Elemente und die Attribute `cite` und `onclick`. Es werden auch {{htmlelement("b")}}-Elemente durch ihre Inhalte ersetzt (dies ist eine Form des "Erlaubens", da die Inhaltselemente nicht entfernt werden).

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### Elemente erlauben

Die erlaubten Elemente können mit der [`elements`](/de/docs/Web/API/SanitizerConfig#elements) Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Instanz angegeben werden, die an den `Sanitizer()` Konstruktor (oder direkt an die Sanitizer-Methoden) übergeben wird.

Der einfachste Weg, die Eigenschaft zu verwenden, ist, ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  elements: ["div", "span"],
});
```

Aber Sie können auch jedes der erlaubten Elemente mit einem Objekt spezifizieren, das seinen `name` und `namespace` definiert, wie unten gezeigt (der `Sanitizer` wird automatisch ein Namespace inferieren, wenn er dazu in der Lage ist).

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

Sie können die Elemente mit der API zum `Sanitizer` hinzufügen. Hier fügen wir die gleichen Elemente einem leeren Sanitizer hinzu:

```js
const sanitizer = Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Globale Attribute erlauben

Um Attribute global auf jedem Element, wo es die HTML-Spezifikation erlaubt, zu erlauben, können Sie die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) verwenden.

Der einfachste Weg, die `attributes` Eigenschaft zu verwenden, ist, ein Array von Attributnamen anzugeben:

```js
const sanitizer = Sanitizer({
  attributes: ["cite", "onclick"],
});
```

Sie können auch jedes Attribut mit den `name` und `namespace`-Eigenschaften, genauso wie Elementen, spezifizieren:

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

Sie können auch jedes der erlaubten Attribute mit der `allowAttribute()` Methode zum `Sanitizer` hinzufügen:

```js
const sanitizer = Sanitizer({});
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

### Attribute an einem bestimmten Element erlauben/entfernen

Sie können auch Attribute an einem bestimmten Element erlauben oder entfernen. Beachten Sie, dass dies Teil einer "Erlauben-Konfiguration" ist, da Sie in diesem Fall immer noch das Element zur Injektion zulassen.

Um ein Attribut an einem Element zu erlauben, können Sie das Element als ein Objekt mit den `name` und `attributes` Eigenschaften spezifizieren. Die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) Eigenschaft enthält ein Array der erlaubten Attribute auf dem Element.

Unten zeigen wir einen Sanitizer, wo die {{htmlelement("div")}}, {{htmlelement("a")}}, und {{htmlelement("span")}} Elemente erlaubt sind, und das {{htmlelement("a")}}-Element erlaubt zusätzlich die `href`, `rel`, `hreflang` und `type` Attribute.

```js
const sanitizer = Sanitizer({
  elements: [
    "div",
    { name: "a", attributes: ["href", "rel", "hreflang", "type"] },
    "span",
  ],
});
```

In ähnlicher Weise können wir die Attribute, die auf einem Element nicht erlaubt sind, mit einem Elementobjekt mit der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) Eigenschaft spezifizieren. Zum Beispiel würde der folgende Sanitizer das `type` Attribut von allen `<a>` Elementen entfernen.

```js
const sanitizer = Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

In beiden Fällen können Sie jedes Attribut auch als ein Objekt mit `name` und `namespace`-Eigenschaften spezifizieren. Sie können auch die Attribut-Eigenschaften mithilfe des gleichen Elementobjekts festlegen, das an [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) übergeben wird.

Beachten Sie jedoch, dass Sie nicht sowohl `attributes` als auch `removeAttributes` für ein Element in einem Aufruf angeben können. Ein Versuch, beides anzugeben, führt zu einer Ausnahme.

### Ersetzung von Kindelementen

Sie können ein Array von Elementen angeben, die mit ihrem inneren Inhalt ersetzt werden sollen. Dies wird am häufigsten verwendet, um Stil von Elementen zu entfernen.

Zum Beispiel verwendet der folgende Code die [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), um zu spezifizieren, dass das {{htmlelement("b")}} Element ersetzt werden soll:

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

Wie bei Elementen und Attributen können Sie auch die Ersetzungselemente mit einem Namespace spezifizieren oder die [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) Methode verwenden:

```js
const sanitizer = Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## Entfern-Konfigurationen

Sie können eine ["Entfern"-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie die Menge von HTML-Elementen und Attributen angeben, die Sie bei der Verwendung des Sanitizers aus der Eingabe entfernen möchten. Alle anderen Elemente und Attribute sind von der Konfiguration erlaubt, obwohl sie möglicherweise entfernt werden, wenn Sie die Konfiguration in einer sicheren Bereinigungsmethode verwenden.

> [!NOTE]
> Eine Sanitizer-Konfiguration kann entweder Erlauben-Listen oder Entfernen-Listen enthalten, aber nicht beides.

Zum Beispiel entfernt die folgende Konfiguration die {{htmlelement("script")}}, {{htmlelement("div")}} und {{htmlelement("span")}} Elemente sowie das `onclick` Attribut.

```js
const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

Das Spezifizieren zu entfernender Elemente ist besonders nützlich, wenn Sie eine bestehende Konfiguration anpassen möchten. Betrachten Sie zum Beispiel den Fall, dass wir den (sicheren) Standard-Sanitizer verwenden, aber auch sicherstellen möchten

```js
const sanitizer = Sanitizer();
sanitizer.removeElement("div");

const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

### Entfernen von Elementen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) Eigenschaft einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Instanz kann verwendet werden, um die zu entfernenden Elemente zu spezifizieren.

Der einfachste Weg, die Eigenschaft zu verwenden, ist, ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  removeElements: ["div", "span"],
});
```

Wie beim [Erlauben von Elementen](#elemente_erlauben) können Sie auch jedes der zu entfernenden Elemente mit einem Objekt spezifizieren, das seinen `name` und `namespace` definiert. Sie können auch die entfernten Elemente mit der `Sanitizer` API konfigurieren:

```js
const sanitizer = Sanitizer({});
sanitizer.removeElement("div");
sanitizer.removeElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Entfernen von Attributen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann verwendet werden, um Attribute global zu entfernen.

Der einfachste Weg, die Eigenschaft zu verwenden, ist, ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

Sie können auch jedes der Elemente mit einem Objekt spezifizieren, das seinen `name` und `namespace` definiert, und auch [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) verwenden, um ein Attribut hinzuzufügen, das von allen Elementen entfernt wird.

```js
const sanitizer = Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## Kommentare und Datenattribute

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann auch verwendet werden, um zu spezifizieren, ob Kommentare und `data-` Attribute aus eingebettetem Inhalt gefiltert werden, indem die [comments](/de/docs/Web/API/SanitizerConfig#comments) und [dataAttributes](/de/docs/Web/API/SanitizerConfig#dataattributes) booleschen Eigenschaften benutzt werden.

Um sowohl Kommentare als auch Datenattribute zu erlauben, könnten Sie eine Konfiguration wie folgt verwenden:

```js
const sanitizer = Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

Sie können auch Kommentare oder Datenattribute auf einem bestehenden Sanitizer mithilfe der Methoden [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) aktivieren oder deaktivieren:

```js
const sanitizer = Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer vs SanitizerConfig

Alle Methoden zur Bereinigung können eine Sanitizer-Konfiguration erhalten, die entweder eine Instanz von [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist.

Das [`Sanitizer`](/de/docs/Web/API/Sanitizer) Objekt ist ein Wrapper um [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das zusätzliche nützliche Funktionen bietet:

- Der Standardkonstruktor erstellt eine Konfiguration, die alle XSS-sicheren Elemente und Attribute erlaubt, und daher einen guten Ausgangspunkt für die Erstellung entweder etwas restriktiverer oder weniger restriktiver Sanitizer darstellt.
- Wenn Sie die Methoden zum Erlauben oder Entfernen von HTML-Entitäten verwenden, werden die Entitäten aus den "gegenteiligen" Listen entfernt. Diese Normalisierungen machen die Konfiguration effizienter.
- Die [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) Methode kann verwendet werden, um alle XSS-unsicheren Entitäten aus einer bestehenden Konfiguration zu entfernen.
- Sie können die Konfiguration exportieren, um genau zu sehen, welche Entitäten erlaubt und entfernt werden.

Beachten Sie jedoch, dass wenn Sie die sicheren Bereinigungsmethoden verwenden können, Sie möglicherweise überhaupt keine Sanitizer-Konfiguration definieren müssen.

## Beispiele

Für weitere Beispiele siehe die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und die einzelnen Methoden der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle.

### Sanitizer-Demo

Dieses Beispiel zeigt, wie Sie die [`Sanitizer`](/de/docs/Web/API/Sanitizer) Methoden verwenden können, um einen Sanitizer zu aktualisieren. Das Ergebnis ist eine Demonstrationsschnittstelle, in der Sie Elemente und Attribute zu den Erlauben- und Entfernen-Listen hinzufügen und deren Auswirkungen sehen können, wenn der Sanitizer mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet wird.

#### HTML

Zuerst definieren wir Schaltflächen, um den Standard-Sanitizer oder einen leeren Sanitizer zurückzusetzen.

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">Default Sanitizer</button>
  <button id="emptySanitizerBtn">Empty Sanitizer</button>
</div>
```

Darauf folgen {{htmlelement("select")}}-Elemente, die es Benutzer*innen ermöglichen, Elemente auszuwählen, die zu den Erlauben- und Entfernen-Listen für Elemente und Attribute hinzugefügt werden sollen.

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

Dann fügen wir Schaltflächen hinzu, um Kommentare und Datenattribute ein- und auszuschalten.

```html
<div class="button-group">
  <button id="toggleCommentsBtn">Toggle comments</button>
  <button id="toggleDataAttributesBtn">Toggle data-attributes</button>
</div>
```

Die restlichen Elemente zeigen den zu parsenden String (editierbar) und das Ergebnis dieser beiden Strings, wenn sie in ein Element mithilfe von `setHTML()` und `setHTMLUnsafe()` eingefügt werden:

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

Der Code prüft zunächst, ob die [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle unterstützt wird. Dann definiert er einen String mit "unsicherem HTML", der eine Mischung aus XSS-sicheren und XSS-unsicheren Elementen (wie {{htmlelement("script")}}) enthält. Dieser wird als Text in das erste Textfeld eingefügt. Das Textfeld ist editierbar, sodass Benutzer*innen den Text später bei Bedarf ändern können.

Dann holen wir die Elemente für die `setHTML` und `setHTMLUnsafe` Textbereiche, in denen wir das geparste HTML schreiben werden, und erstellen eine leere `Sanitizer`-Konfiguration. Die `applySanitizer()` Methode wird mit dem neuen Sanitizer aufgerufen, um das Ergebnis der Bereinigung des initialen Strings sowohl mit einem sicheren als auch einem unsicheren Sanitizer zu protokollieren.

```js
if ("Sanitizer" in window) {
  // Define unsafe string of HTML
  const initialHTMLString =
    `<div id="mainDiv"><!-- HTML comment -->
    <p data-paratest="true">This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
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

Die `applySanitizer()` Protokollierungsmethode wird unten gezeigt. Sie bekommt den initialen Inhalt des "nicht vertrauenswürdigen Strings" aus dem ersten Textfeld und analysiert ihn mithilfe der [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) Methoden mit dem übergebenen `sanitizer` Argument in die jeweiligen Textfelder. In jedem Fall wird das eingefügte HTML dann aus dem Element mit `innerHTML` gelesen und als `innerText` zurück in das Element geschrieben (damit es leichter lesbar ist).

Der Code protokolliert dann die aktuelle Sanitizer-Konfiguration, die mit [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) gewonnen wird.

```js
function applySanitizer(sanitizer) {
  // Get string to parse into element
  unsafeHTMLString = unmodifiedElement.innerText;

  // Sanitize string using safe method and then display as text
  setHTMLElement.setHTML(unsafeHTMLString, { sanitizer: sanitizer });
  setHTMLElement.innerText = setHTMLElement.innerHTML;

  // Sanitize string using unsafe method and then display as text
  setHTMLUnsafeElement.setHTMLUnsafe(unsafeHTMLString, {
    sanitizer: sanitizer,
  });
  setHTMLUnsafeElement.innerText = setHTMLUnsafeElement.innerHTML;

  // Display sanitizer configuration
  const sanitizerConfig = sanitizer.get();
  log(JSON.stringify(sanitizerConfig, null, 2));
}
```

Als nächstes holen wir die Elemente für jede der Schaltflächen und Auswahllisten.

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

Die Handler für die ersten beiden Schaltflächen erstellen den Standard- bzw. leeren Sanitizer. Die zuvor gezeigte `applySanitizer()` Methode wird verwendet, um den Sanitizer auszuführen und die Logs zu aktualisieren.

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

Die Handler für die Auswahllisten werden als Nächstes gezeigt. Diese rufen die zugehörige Sanitizer-Methode auf dem aktuellen Sanitizer auf, wenn ein neues Element oder Attribut ausgewählt wird. Zum Beispiel ruft der Listener für den `allowElementSelect` die Methode [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) auf, um das ausgewählte Element zu den erlaubten Elementen hinzuzufügen. In jedem Fall protokolliert `applySanitizer()` die Ergebnisse mithilfe des aktuellen Sanitizers.

```js
allowElementSelect.addEventListener("change", (event) => {
  if (event.target.value != "") {
    sanitizer.allowElement(event.target.value);
    applySanitizer(sanitizer);
  }
});
removeElementSelect.addEventListener("change", (event) => {
  if (event.target.value != "") {
    sanitizer.removeElement(event.target.value);
    applySanitizer(sanitizer);
  }
});
allowAttributeSelect.addEventListener("change", (event) => {
  if (event.target.value != "") {
    sanitizer.allowAttribute(event.target.value);
    applySanitizer(sanitizer);
  }
});
removeAttributeSelect.addEventListener("change", (event) => {
  if (event.target.value != "") {
    sanitizer.removeAttribute(event.target.value);
    applySanitizer(sanitizer);
  }
});
```

Die Handler für die letzten beiden Schaltflächen werden unten gezeigt. Diese ändern den Wert der `dataAttributesActive` und `commentsActive` Variablen und verwenden dann diese Werte in [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes). Beachten Sie, dass, wenn die Kommentare ursprünglich deaktiviert sind, der erste Druck der Schaltfläche möglicherweise keine Wirkung hat!

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

Das Ergebnis wird unten gezeigt. Wählen Sie die oberen Schaltflächen aus, um einen neuen Standard- oder leeren Sanitizer festzulegen. Sie können dann die Auswahllisten verwenden, um einige Elemente und Attribute zu den jeweiligen Erlauben- und Entfernen-Listen des Sanitizers hinzuzufügen, und die anderen Schaltflächen, um Kommentare ein- und auszuschalten. Die aktuelle Sanitizer-Konfiguration wird protokolliert. Der Text im oberen Textbereich wird mit der aktuellen Sanitizer-Konfiguration bereinigt und mit `setHTML()` und `setHTMLUnsafe()` geparst.

{{EmbedLiveSample("Sanitizer demo","100","650px")}}

Beachten Sie, dass das Hinzufügen von Elementen und Attributen zu den Erlauben-Listen diese aus den Entfernen-Listen entfernt und umgekehrt. Beachten Sie auch, dass Sie Elemente im Sanitizer erlauben können, die mit den unsicheren Methoden injiziert werden, aber nicht mit den sicheren Methoden.
