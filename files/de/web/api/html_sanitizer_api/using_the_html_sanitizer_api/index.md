---
title: Verwendung der HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
l10n:
  sourceCommit: a02fb4e96077e65951f3228c7a1ca0d5cb8a9fd4
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bietet Methoden, die es Entwicklern ermöglichen, nicht vertrauenswürdiges HTML sicher in ein [`Element`](/de/docs/Web/API/Element), ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) oder ein [`Dokument`](/de/docs/Web/API/Document) einzufügen. Die API gibt Entwicklern auch die Flexibilität, HTML-Entitäten weiter einzuschränken oder zu erweitern, wenn nötig.

## Sichere Bereinigung standardmäßig

Der häufigste Anwendungsfall für die API ist das sichere Einfügen eines vom Nutzer bereitgestellten Strings in ein [`Element`](/de/docs/Web/API/Element). Sofern der einzufügende String keine unsicheren HTML-Entitäten _enthalten muss_, können Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.

Zum Beispiel entfernt der folgende Code alle XSS-unsicheren Elemente und Attribute im Eingabestring (in diesem Fall das {{htmlelement("script")}}-Element) sowie alle Elemente, die gemäß der HTML-Spezifikation nicht als Kinder des Zielelements erlaubt sind:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(someElement.innerHTML); // abc def
```

Die anderen XSS-sicheren Methoden, [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static), werden auf die gleiche Weise verwendet.

### Sichere Methoden schränken erlaubte Entitäten weiter ein

Sie können die HTML-Entitäten, die Sie erlauben oder entfernen möchten, angeben, indem Sie einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) als zweites Argument für alle Sanitizer-Methoden übergeben.

Wenn Sie zum Beispiel wissen, dass nur {{htmlelement("p")}}- und {{htmlelement("a")}}-Elemente im Kontext von "someElement" unten erwartet werden, könnten Sie eine Sanitizer-Konfiguration erstellen, die nur diese Elemente erlaubt:

```js
sanitizerOne = Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

Beachten Sie jedoch, dass die unsicheren HTML-Entitäten immer entfernt werden, wenn Sie die sicheren Methoden verwenden. Bei Verwendung der sicheren Methoden lässt eine permissive Sanitizer-Konfiguration entweder dieselben oder weniger Entitäten zu als die Standardkonfiguration.

## Erlaubung unsicherer Bereinigung

Manchmal kann es notwendig sein, Eingabedaten einzufügen, die potenziell unsichere Elemente oder Attribute enthalten. In diesem Fall können Sie eine der XSS-unsicheren Methoden der API verwenden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Ein häufiger Ansatz ist, mit dem Standard-Sanitizer zu beginnen, der nur sichere Elemente erlaubt, und dann nur diejenigen unsicheren Entitäten zu erlauben, die wir in der Eingabe erwarten.

Zum Beispiel erlaubt der folgende Sanitizer alle sicheren Elemente, und wir erlauben zusätzlich das unsichere `onclick`-Handler auf `button`-Elementen (nur).

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someElement = document.getElementById("target");

sanitizerOne = Sanitizer(); // Default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

Mit diesem Code wird das `alert(1)` erlaubt, und es besteht das Potenzial, dass das Attribut für böswillige Zwecke verwendet wird. Wir wissen jedoch, dass alle anderen XSS-unsicheren HTML-Entitäten entfernt wurden, also müssen wir uns nur um diesen einen Fall kümmern und können andere Gegenmaßnahmen ergreifen.

Die unsicheren Methoden verwenden jede von Ihnen bereitgestellte Sanitizer-Konfiguration (oder keine), daher müssen Sie vorsichtiger sein als bei der Verwendung der sicheren Methoden.

## Erlauben von Konfigurationen

Sie können eine ["Erlauben"-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie nur die HTML-Elemente und Attribute angeben, die Sie erlauben möchten, wenn Sie den Sanitizer verwenden. Diese Form der Konfiguration ist leicht verständlich und nützlich, wenn Sie genau wissen, welche HTML-Entitäten im Zielkontext erlaubt sein sollten.

Zum Beispiel erlaubt die folgende Konfiguration die {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente und die Attribute `cite` und `onclick`. Außerdem ersetzt sie {{htmlelement("b")}}-Elemente durch ihren Inhalt (dies ist eine Form des "Erlaubens", da die Inhalte des Elements nicht entfernt werden).

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### Erlauben von Elementen

Die erlaubten Elemente können mithilfe der [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz angegeben werden, die an den `Sanitizer()`-Konstruktor (oder direkt an die Bereinigungsmethoden) übergeben wird.

Der einfachste Weg, die Eigenschaft zu verwenden, ist das Angeben eines Arrays von Elementnamen:

```js
const sanitizer = Sanitizer({
  elements: ["div", "span"],
});
```

Sie können jedoch auch jedes der erlaubten Elemente mit einem Objekt angeben, das seinen `name` und sein `namespace` definiert, wie unten gezeigt (`Sanitizer` wird automatisch ein Namespace ermitteln, wenn dies möglich ist).

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

Sie können die Elemente mithilfe der API des `Sanitizer` hinzufügen. Hier fügen wir dieselben Elemente zu einem leeren Sanitizer hinzu:

```js
const sanitizer = Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Erlauben globaler Attribute

Um Attribute global zu erlauben, auf jedem Element, auf dem sie gemäß der HTML-Spezifikation erlaubt sind, können Sie die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) verwenden.

Der einfachste Weg, die `attributes`-Eigenschaft zu verwenden, ist das Angeben eines Arrays von Attributnamen:

```js
const sanitizer = Sanitizer({
  attributes: ["cite", "onclick"],
});
```

Sie können auch jedes Attribut mit den Eigenschaften `name` und `namespace` angeben, genau wie bei Elementen:

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

### Erlauben/Entfernen von Attributen bei einem bestimmten Element

Sie können auch Attribute bei einem bestimmten Element erlauben oder entfernen. Beachten Sie, dass dies Teil einer "Erlauben-Konfiguration" ist, da Sie in diesem Fall immer noch das Element zur Injektion erlauben.

Um ein Attribut bei einem Element zu erlauben, können Sie das Element als ein Objekt mit den Eigenschaften `name` und `attributes` angeben. Die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes)-Eigenschaft enthält ein Array der erlaubten Attribute des Elements.

Unten zeigen wir einen Sanitizer, bei dem die {{htmlelement("div")}}, {{htmlelement("a")}} und {{htmlelement("span")}}-Elemente erlaubt sind, und das {{htmlelement("a")}}-Element zusätzlich die Attribute `href`, `rel`, `hreflang` und `type` erlaubt.

```js
const sanitizer = Sanitizer({
  elements: [
    "div",
    { name: "a", attributes: ["href", "rel", "hreflang", "type"] },
    "span",
  ],
});
```

Ebenso können wir die Attribute angeben, die bei einem Element nicht erlaubt sind, indem wir ein Elementobjekt mit der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes)-Eigenschaft verwenden. Zum Beispiel würde der folgende Sanitizer das `type`-Attribut von allen `<a>`-Elementen entfernen.

```js
const sanitizer = Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

In beiden Fällen können Sie jedes Attribut auch als Objekt mit den Eigenschaften `name` und `namespace` angeben. Sie können die Attribut-Eigenschaften auch mithilfe des gleichen Elementobjekts festlegen, das an [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) übergeben wird.

Beachten Sie jedoch, dass Sie nicht sowohl die `attributes` als auch `removeAttributes` eines Elements in einem Aufruf angeben können. Ein Versuch, dies zu tun, führt zu einer Ausnahme.

### Ersetzen von Kindelementen

Sie können ein Array von Elementen angeben, die durch ihren inneren Inhalt ersetzt werden sollen. Dies wird häufig verwendet, um Stile von Elementen zu entfernen.

Zum Beispiel verwendet der folgende Code die [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), um anzugeben, dass das {{htmlelement("b")}}-Element ersetzt werden soll:

```js
const replaceBoldSanitizer = Sanitizer({
  replaceWithChildrenElements: ["b"],
});

targetElement.setHTML("This <b>highlighting</b> isn't needed", {
  sanitizer: replaceBoldSanitizer,
});

// Log the result
console.log(targetElement.innerHTML); // This highlighting isn't needed
```

Wie bei Elementen und Attributen können Sie die Ersetzungselemente auch mit einem Namespace angeben oder die [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren)-Methode verwenden:

```js
const sanitizer = Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## Entfernen von Konfigurationen

Sie können eine ["Entfernen"-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie den Satz von HTML-Elementen und Attributen angeben, den Sie beim Verwenden des Sanitizers entfernen möchten. Alle anderen Elemente und Attribute sind durch die Konfiguration erlaubt, obwohl sie möglicherweise entfernt werden, wenn Sie die Konfiguration in einer sicheren Bereinigungsmethode verwenden.

> [!NOTE]
> Eine Sanitizer-Konfiguration kann Erlauben- oder Entfernen-Listen enthalten, aber nicht beide.

Zum Beispiel entfernt die folgende Konfiguration die {{htmlelement("script")}}, {{htmlelement("div")}} und {{htmlelement("span")}}-Elemente sowie das `onclick`-Attribut.

```js
const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

Das Angeben von Elementen zum Entfernen ist nützlicher, wenn Sie eine vorhandene Konfiguration anpassen möchten. Betrachten Sie zum Beispiel den Fall, in dem wir den (sicheren) Standard-Sanitizer verwenden, aber auch sicherstellen wollen

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

Der einfachste Weg, die Eigenschaft zu verwenden, ist das Angeben eines Arrays von Elementnamen:

```js
const sanitizer = Sanitizer({
  removeElements: ["div", "span"],
});
```

Wie beim [Erlauben von Elementen](#erlauben_von_elementen) können Sie auch jedes der zu entfernenden Elemente mithilfe eines Objekts angeben, das seinen `name` und sein `namespace` definiert. Sie können die entfernten Elemente auch mithilfe der `Sanitizer`-API konfigurieren, wie gezeigt:

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

Der einfachste Weg, die Eigenschaft zu verwenden, ist das Angeben eines Arrays von Elementnamen:

```js
const sanitizer = Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

Sie können auch jedes der Elemente mithilfe eines Objekts angeben, das seinen `name` und sein `namespace` definiert, und außerdem [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) verwenden, um ein Attribut hinzuzufügen, das von allen Elementen entfernt werden soll.

```js
const sanitizer = Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## Kommentare und Datenattribute

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann auch verwendet werden, um festzulegen, ob Kommentare und `data-`-Attribute aus dem eingefügten Inhalt gefiltert werden sollen, indem die [comments](/de/docs/Web/API/SanitizerConfig#comments) und [dataAttributes](/de/docs/Web/API/SanitizerConfig#dataattributes) Boolean-Eigenschaften verwendet werden.

Um sowohl Kommentare als auch Datenattribute zu erlauben, könnten Sie eine Konfiguration wie folgt verwenden:

```js
const sanitizer = Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

Sie können auch Kommentare oder Datenattribute bei einem vorhandenen Sanitizer mithilfe der Methoden [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) aktivieren oder deaktivieren:

```js
const sanitizer = Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer vs SanitizerConfig

Alle Bereinigungsmethoden können eine Sanitizer-Konfiguration erhalten, die entweder eine Instanz von [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) ist.

Das [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt ist ein Wrapper um die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der zusätzliche nützliche Funktionalitäten bietet:

- Der Standardkonstruktor erstellt eine Konfiguration, die alle XSS-sicheren Elemente und Attribute erlaubt und daher ein guter Ausgangspunkt für die Erstellung entweder leicht restriktiverer oder weniger restriktiverer Sanitizer ist.
- Wenn Sie die Methoden verwenden, um HTML-Entitäten zu erlauben oder zu entfernen, werden die Entitäten von den "gegenüberliegenden" Listen entfernt. Diese Normalisierungen machen die Konfiguration effizienter.
- Die Methode [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) kann verwendet werden, um alle XSS-unsicheren Entitäten aus einer bestehenden Konfiguration zu entfernen.
- Sie können die Konfiguration exportieren, um genau zu sehen, welche Entitäten erlaubt und welche entfernt wurden.

Beachten Sie jedoch, dass Sie möglicherweise keine Sanitizer-Konfiguration definieren müssen, wenn Sie die sicheren Bereinigungsmethoden verwenden können.

## Beispiele

Weitere Beispiele finden Sie in der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und den einzelnen Methoden der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle.

### Sanitizer-Demo

Dieses Beispiel zeigt, wie Sie die Methoden von [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden können, um einen Sanitizer zu aktualisieren. Das Ergebnis ist eine Demonstrationsschnittstelle, in der Sie Elemente und Attribute zu den Erlauben- und Entfernen-Listen hinzufügen können und deren Auswirkungen sehen, wenn der Sanitizer mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet wird.

#### HTML

Zuerst definieren wir Schaltflächen, um den Standard- oder einen leeren Sanitizer zurückzusetzen.

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">Default Sanitizer</button>
  <button id="emptySanitizerBtn">Empty Sanitizer</button>
</div>
```

Es folgen {{htmlelement("select")}}-Elemente, um den Benutzern die Möglichkeit zu geben, Elemente auszuwählen, die zu den Erlauben- und Entfernen-Listen für Elemente und Attribute hinzugefügt werden sollen.

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

Dann fügen wir Schaltflächen hinzu, um Kommentare und Datenattribute erlauben/entfernen zu können.

```html
<div class="button-group">
  <button id="toggleCommentsBtn">Toggle comments</button>
  <button id="toggleDataAttributesBtn">Toggle data-attributes</button>
</div>
```

Die verbleibenden Elemente zeigen den String an, der geparst werden soll (editierbar) und das Ergebnis dieser beiden Strings, wenn sie in ein Element mit `setHTML()` und `setHTMLUnsafe()` eingefügt werden:

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

Der Code prüft zuerst, ob die [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle unterstützt wird. Dann definiert er einen String von "unsicherem HTML", der eine Mischung aus XSS-sicheren und XSS-unsicheren Elementen (wie {{htmlelement("script")}}) enthält. Dieser wird als Text in das erste Textfeld eingefügt. Das Textfeld ist editierbar, sodass Benutzer den Text später bei Bedarf ändern können.

Wir holen dann die Elemente für die `setHTML`- und `setHTMLUnsafe`-Textfelder, in die wir das geparste HTML schreiben werden, und erstellen eine leere `Sanitizer`-Konfiguration. Die `applySanitizer()`-Methode wird mit dem neuen Sanitizer aufgerufen, um das Ergebnis der Bereinigung des anfänglichen Strings mithilfe sowohl eines sicheren als auch eines unsicheren Sanitizer zu protokollieren.

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

Die `applySanitizer()`-Protokollierungsmethode wird unten gezeigt. Diese holt den initialen Inhalt des "unsicheren Strings" aus dem ersten Textbereich und parst ihn mithilfe der Methoden [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) mit dem übergebenen `sanitizer`-Argument in die jeweiligen Textfelder. In jedem Fall wird das injizierte HTML dann aus dem Element mit `innerHTML` gelesen und als `innerText` zurück in das Element geschrieben (damit es lesbar ist).

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

Als nächstes erhalten wir Elemente für jede der Schaltflächen und Auswahl-Listen.

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

Die Handler für die ersten beiden Schaltflächen erstellen den Standard- bzw. leeren Sanitizer. Die zuvor gezeigte `applySanitizer()`-Methode wird verwendet, um den Sanitizer anzuwenden und die Protokolle zu aktualisieren.

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

Die Handler für die Auswahllisten werden als nächstes gezeigt. Diese rufen die zugehörige Sanitizer-Methode für den aktuellen Sanitizer auf, wann immer ein neues Element oder Attribut ausgewählt wird. Zum Beispiel ruft der Listener für `allowElementSelect` [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) auf, um das ausgewählte Element zu den erlaubten Elementen hinzuzufügen. In jedem Fall protokolliert `applySanitizer()` die Ergebnisse unter Verwendung des aktuellen Sanitizers.

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

Die Handler für die letzten beiden Schaltflächen werden unten gezeigt. Diese schalten den Wert der `dataAttributesActive`- und `commentsActive`-Variablen um und verwenden diese Werte dann in [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes). Beachten Sie, dass, wenn die Kommentare ursprünglich deaktiviert sind, der erste Druck der Schaltfläche möglicherweise keine Wirkung hat!

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

Das Ergebnis wird unten gezeigt. Wählen Sie die oberen Schaltflächen aus, um jeweils einen neuen Standard- oder einen leeren Sanitizer festzulegen. Sie können dann die Auswahl-Listen verwenden, um einige Elemente und Attribute zu den jeweiligen Erlauben- und Entfernen-Listen des Sanitizers hinzuzufügen, und die anderen Schaltflächen, um Kommentare ein- und auszuschalten. Die aktuelle Sanitizer-Konfiguration wird protokolliert. Der Text im oberen Textfeld wird unter Verwendung der aktuellen Sanitizer-Konfiguration bereinigt und mit `setHTML()` und `setHTMLUnsafe()` geparst.

{{EmbedLiveSample("Sanitizer demo","100","650px")}}

Beachten Sie, dass das Hinzufügen von Elementen und Attributen zu den Erlauben-Listen sie aus den Entfernen-Listen entfernt und umgekehrt. Beachten Sie auch, dass Sie Elemente in einem Sanitizer erlauben können, die mit den unsicheren Methoden injiziert werden, jedoch nicht mit den sicheren Methoden.
