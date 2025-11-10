---
title: Verwendung der HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
l10n:
  sourceCommit: d4692513193a8a94d2e0e5a03625a0adb02258d7
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bietet Methoden, die es Entwicklern ermöglichen, untrusted HTML sicher in ein [`Element`](/de/docs/Web/API/Element), ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) oder ein [`Document`](/de/docs/Web/API/Document) einzufügen.
Die API gibt Entwicklern auch die Flexibilität, die zugelassenen HTML-Entitäten weiter einzuschränken oder zu erweitern, wenn dies erforderlich ist.

## Sichere Bereinigung standardmäßig

Der häufigste Anwendungsfall für die API ist das sichere Einfügen eines vom Benutzer bereitgestellten Strings in ein [`Element`](/de/docs/Web/API/Element).
Es sei denn, der String, der eingefügt werden soll, _muss_ unsichere HTML-Entitäten enthalten, können Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) als direkte Alternative zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.

Beispielsweise entfernt der folgende Code alle XSS-unsicheren Elemente und Attribute aus dem Eingabestring (in diesem Fall das {{htmlelement("script")}} Element), zusammen mit allen Elementen, die laut HTML-Spezifikation nicht als Kinder des Ziel-Elements erlaubt sind:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(someElement.innerHTML); // abc def
```

Die anderen XSS-sicheren Methoden, [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static), werden auf die gleiche Weise verwendet.

### Sichere Methoden beschränken erlaubte Entitäten weiter

Sie können die HTML-Entitäten angeben, die Sie zulassen oder entfernen möchten, indem Sie einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) als zweiten Parameter an alle Sanitisierungsmethoden übergeben.

Beispielsweise, wenn Sie wissen, dass nur {{htmlelement("p")}} und {{htmlelement("a")}} Elemente im Kontext von "someElement" unten erwartet werden, könnten Sie eine Sanitisierungskonfiguration erstellen, die nur diese Elemente zulässt:

```js
const sanitizerOne = new Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

Beachten Sie jedoch, dass die unsicheren HTML-Entitäten immer entfernt werden, wenn die sicheren Methoden verwendet werden.
Wenn eine permissive Sanitisierungskonfiguration mit den sicheren Methoden verwendet wird, werden entweder die gleichen oder weniger Entitäten als in der Standardkonfiguration zugelassen.

## Erlauben unsicherer Bereinigung

Manchmal möchten Sie vielleicht Eingaben injizieren, die potenziell unsichere Elemente oder Attribute enthalten müssen.
In diesem Fall können Sie eine der XSS-unsicheren Methoden der API verwenden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Ein häufig verwendeter Ansatz besteht darin, vom Standard-Sanitizer aus zu starten, der nur sichere Elemente zulässt, und dann nur die unsicheren Entitäten zu erlauben, die im Eingabewert erwartet werden.

Beispielsweise werden im folgenden Sanitisierer alle sicheren Elemente erlaubt, und wir erlauben weiter den unsicheren `onclick`-Handler auf `button`-Elementen (nur).

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someElement = document.getElementById("target");

const sanitizerOne = new Sanitizer(); // Default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

Mit diesem Code wäre das `alert(1)` erlaubt, und es besteht das potenzielle Problem, dass das Attribut für böswillige Zwecke verwendet werden könnte.
Wir wissen jedoch, dass alle anderen XSS-unsicheren HTML-Entitäten entfernt wurden, sodass wir nur über diesen einen Fall besorgt sein müssen und andere Maßnahmen ergreifen können.

Die unsicheren Methoden verwenden jede Sanitisierungskonfiguration, die Sie angeben (oder keine), daher müssen Sie vorsichtiger sein als bei Verwendung der sicheren Methoden.

## Erlauben von Konfigurationen

Sie können eine ["Allow"-Sanitisierungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie nur die Menge an HTML-Elementen und Attributen angeben, die Sie beim Verwenden des Sanitisierers zulassen möchten.
Diese Form der Konfiguration ist leicht zu verstehen und nützlich, wenn Sie genau wissen, welche HTML-Entitäten im Zielkontext erlaubt sein sollten.

Beispielsweise erlaubt die folgende Konfiguration die {{htmlelement("p")}} und {{htmlelement("div")}} Elemente und die Attribute `cite` und `onclick`.
Sie ersetzt auch {{htmlelement("b")}} Elemente durch ihren Inhalt (dies ist eine Form der "Erlaubnis", da der Elementinhalt nicht entfernt wird).

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### Erlauben von Elementen

Die erlaubten Elemente können mit der [`elements`](/de/docs/Web/API/SanitizerConfig#elements) Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Instanz angegeben werden, die an den `Sanitizer()` Konstruktor (oder direkt an die Sanitisierungsmethoden) übergeben wird.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  elements: ["div", "span"],
});
```

Aber Sie können auch jedes der erlaubten Elemente mit einem Objekt angeben, das seinen `name` und `namespace` definiert, wie unten gezeigt (`Sanitizer` wird automatisch einen Namespace inferieren, wenn es möglich ist).

```js
const sanitizer = new Sanitizer({
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

Sie können die Elemente über die API zum `Sanitizer` hinzufügen.
Hier fügen wir die gleichen Elemente zu einem leeren Sanitizer hinzu:

```js
const sanitizer = new Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Erlauben von globalen Attributen

Um Attribute global zu erlauben, auf allen Elementen, wo sie von der HTML-Spezifikation erlaubt sind, können Sie die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) verwenden.

Der einfachste Weg, die `attributes`-Eigenschaft zu verwenden, besteht darin, ein Array von Attributnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  attributes: ["cite", "onclick"],
});
```

Sie können auch jedes Attribut mit den Eigenschaften `name` und `namespace` angeben, genau wie bei Elementen:

```js
const sanitizer = new Sanitizer({
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

Sie können auch jedes der erlaubten Attribute mit der Methode `allowAttribute()` zum `Sanitizer` hinzufügen:

```js
const sanitizer = new Sanitizer({});
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

### Erlauben/Entfernen von Attributen an einem bestimmten Element

Sie können auch erlauben oder entfernen, welche Attribute auf einem bestimmten Element sein dürfen.
Beachten Sie, dass dies Teil einer "Erlauben"-Konfiguration ist, da Sie in diesem Fall das Element noch zur Injektion erlauben.

Um ein Attribut auf einem Element zu erlauben, können Sie das Element als Objekt mit den Eigenschaften `name` und `attributes` angeben.
Die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) Eigenschaft enthält ein Array der erlaubten Attribute auf dem Element.

Hier unten zeigen wir einen Sanitisierer, bei dem die {{htmlelement("div")}}, {{htmlelement("a")}}, und {{htmlelement("span")}} Elemente erlaubt sind, und das {{htmlelement("a")}} Element erlaubt zusätzlich die Attribute `href`, `rel`, `hreflang` und `type`.

```js
const sanitizer = new Sanitizer({
  elements: [
    "div",
    { name: "a", attributes: ["href", "rel", "hreflang", "type"] },
    "span",
  ],
});
```

Ähnlich können wir die Attribute angeben, die auf einem Element nicht erlaubt sind, indem wir ein Elementobjekt mit der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) Eigenschaft verwenden.
Zum Beispiel würde der folgende Sanitisierer das `type` Attribut von allen `<a>` Elementen entfernen.

```js
const sanitizer = new Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

In beiden Fällen können Sie auch jedes Attribut als Objekt mit den Eigenschaften `name` und `namespace` angeben.
Sie können auch die Attributseigenschaften mit demselben Elementobjekt setzen, das an [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) übergeben wird.

Beachten Sie jedoch, dass Sie nicht sowohl Element `attributes` als auch `removeAttributes` in einem Aufruf angeben können.
Der Versuch, dies zu tun, führt zu einer Ausnahme.

### Ersetzen von Kindelementen

Sie können ein Array von Elementen angeben, die mit ihrem inneren Inhalt ersetzt werden sollen.
Dies wird am häufigsten verwendet, um Stile von Elementen zu entfernen.

Beispielsweise verwendet der folgende Code die [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), um anzugeben, dass das {{htmlelement("b")}} Element ersetzt werden soll:

```js
const replaceBoldSanitizer = new Sanitizer({
  replaceWithChildrenElements: ["b"],
});

targetElement.setHTML("This <b>highlighting</b> isn't needed", {
  sanitizer: replaceBoldSanitizer,
});

// Log the result
console.log(targetElement.innerHTML); // This highlighting isn't needed
```

Wie bei Elementen und Attributen können Sie auch die Ersatzelemente mit einem Namespace angeben oder die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) verwenden:

```js
const sanitizer = new Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## Entferner-Konfigurationen

Sie können eine ["Remove"-Sanitisierungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie die Menge an HTML-Elementen und Attributen angeben, die Sie aus dem Eingabewert entfernen möchten, wenn Sie den Sanitisierer verwenden.
Alle anderen Elemente und Attribute sind von der Konfiguration erlaubt, obwohl sie entfernt werden können, wenn Sie die Konfiguration in einer sicheren Sanitisierungsmethode verwenden.

> [!NOTE]
> Eine Sanitisierungskonfiguration kann Allow-Listen oder Remove-Listen enthalten, aber nicht beide.

Beispielsweise entfernt die folgende Konfiguration die {{htmlelement("script")}}, {{htmlelement("div")}} und {{htmlelement("span")}} Elemente sowie das `onclick` Attribut.

```js
const sanitizer = new Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

Das Angeben von Elementen zum Entfernen ist nützlicher, wenn Sie eine vorhandene Konfiguration anpassen möchten.
Beispielsweise betrachten Sie den Fall, in dem wir den (sicheren) Standard-Sanitizer verwenden, aber sicherstellen möchten, dass einige andere Elemente ebenfalls entfernt werden.

```js
const sanitizer = new Sanitizer();
sanitizer.removeElement("div");
```

### Entfernen von Elementen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) Eigenschaft einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Instanz kann verwendet werden, um die zu entfernenden Elemente anzugeben.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  removeElements: ["div", "span"],
});
```

Wie beim [Erlauben von Elementen](#erlauben_von_elementen) können Sie auch jedes der zu entfernenden Elemente mit einem Objekt angeben, das seinen `name` und `namespace` definiert.
Sie können die entfernten Elemente auch mit der `Sanitizer` API konfigurieren, wie gezeigt:

```js
const sanitizer = new Sanitizer({});
sanitizer.removeElement("div");
sanitizer.removeElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Entfernen von Attributen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann verwendet werden, um anzugeben, welche Attribute global entfernt werden sollen.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

Sie können auch jedes der Elemente mit einem Objekt angeben, das seinen `name` und `namespace` definiert, und auch [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) verwenden, um ein Attribut hinzuzufügen, das von allen Elementen entfernt werden soll.

```js
const sanitizer = new Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## Kommentare und Daten-Attribute

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann auch verwendet werden, um anzugeben, ob Kommentare und `data-` Attribute aus injiziertem Inhalt gefiltert werden, indem die [comments](/de/docs/Web/API/SanitizerConfig#comments) und [dataAttributes](/de/docs/Web/API/SanitizerConfig#dataattributes) Booleschen Eigenschaften verwendet werden.

Um sowohl Kommentare als auch Daten-Attribute zu erlauben, könnten Sie eine Konfiguration wie diese verwenden:

```js
const sanitizer = new Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

Sie können auf ähnliche Weise die Kommentare oder Daten-Attribute bei einem vorhandenen Sanitizer mit den Methoden [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) ein- oder ausschalten:

```js
const sanitizer = new Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer vs SanitizerConfig

Alle Sanitisierungsmethoden können eine Sanitisierungskonfiguration erhalten, die entweder eine [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Instanz ist.

Das [`Sanitizer`](/de/docs/Web/API/Sanitizer) Objekt ist ein Wrapper um [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das zusätzliche nützliche Funktionalität bietet:

- Der Standardkonstruktor erstellt eine Konfiguration, die alle XSS-sicheren Elemente und Attribute zulässt und daher ein guter Ausgangspunkt für die Erstellung entweder leicht restriktiverer oder weniger restriktiverer Sanitisierer ist.
- Wenn Sie die Methoden verwenden, um HTML-Entitäten zuzulassen oder zu entfernen, werden die Entitäten aus den „gegenteiligen“ Listen entfernt.
  Diese Normalisierungen machen die Konfiguration effizienter.
- Die [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) Methode kann verwendet werden, um alle XSS-unsicheren Entitäten aus einer vorhandenen Konfiguration zu entfernen.
- Sie können die Konfiguration exportieren, um genau zu sehen, welche Entitäten erlaubt und weggelassen werden.

Beachten Sie jedoch, dass Sie, wenn Sie die sicheren Sanitisierungsmethoden verwenden können, möglicherweise überhaupt keine Sanitisierungskonfiguration definieren müssen.

## Beispiele

Weitere Beispiele finden Sie in der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und den einzelnen Methoden der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle.

### Sanitizer-Demo

Dieses Beispiel zeigt, wie Sie die Methoden der [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden können, um einen Sanitisierer zu aktualisieren.
Das Ergebnis ist eine Demonstrationsoberfläche, bei der Sie Elemente und Attribute zu den Erlauben- und Entfernen-Listen hinzufügen können und ihre Auswirkungen sehen, wenn der Sanitisierer mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet wird.

#### HTML

Zuerst definieren wir Tasten zum Zurücksetzen des Standard-Sanitisierers oder eines leeren Sanitisierers.

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">Default Sanitizer</button>
  <button id="emptySanitizerBtn">Empty Sanitizer</button>
</div>
```

Darauf folgen {{htmlelement("select")}} Elemente, um Benutzern die Möglichkeit zu geben, Elemente auszuwählen, die zu den Erlauben- und Entfernen-Listen für Elemente und Attribute hinzugefügt werden sollen.

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

Dann fügen wir Tasten hinzu, um Kommentare und Datenattribute zu erlauben/entfernen.

```html
<div class="button-group">
  <button id="toggleCommentsBtn">Toggle comments</button>
  <button id="toggleDataAttributesBtn">Toggle data-attributes</button>
</div>
```

Die verbleibenden Elemente zeigen den zu parsenden String (bearbeitbar) und das Ergebnis dieser beiden Strings, wenn sie mit `setHTML()` beziehungsweise `setHTMLUnsafe()` in ein Element injiziert werden:

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

Der Code testet zuerst, ob die [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle unterstützt wird.
Dann definiert er einen String von "unsicherem HTML", der eine Mischung aus XSS-sicheren und XSS-unsicheren Elementen (wie {{htmlelement("script")}}) enthält.
Dieser wird als Text in das erste Textfeld eingefügt.
Das Textfeld ist bearbeitbar, sodass Benutzer den Text später bei Bedarf ändern können.

Wir erhalten dann die Elemente für die `setHTML` und `setHTMLUnsafe` Textfelder, in die wir das geparste HTML schreiben, und erstellen eine leere `Sanitizer` Konfiguration.
Die `applySanitizer()` Methode wird mit dem neuen Sanitisierer aufgerufen, um das Ergebnis der Sanitisierung des Anfangsstrings mit sowohl einem sicheren als auch einem unsicheren Sanitisierer zu protokollieren.

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

Die `applySanitizer()` Protokollierungsmethode wird unten gezeigt.
Diese erhält den anfänglichen Inhalt des "untrusted String" aus dem ersten Textfeld und analysiert ihn mit den Methoden [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) mit dem übergebenen `sanitizer`-Argument in die jeweiligen Textfelder.
In jedem Fall wird das eingefügte HTML dann aus dem Element mit `innerHTML` gelesen und als `innerText` wieder in das Element geschrieben (damit es menschlich lesbar ist).

Der Code protokolliert dann die aktuelle Sanitisierungskonfiguration, die er mit [`Sanitizer.get()`](/de/docs/Web/API/Sanitizer/get) erhält.

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

Als nächstes holen wir die Elemente für jede der Tasten und Auswahllisten.

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

Die Handler für die ersten beiden Tasten erstellen den Standard- bzw. leeren Sanitisierer.
Die zuvor gezeigte Methode `applySanitizer()` wird verwendet, um den Sanitisierer auszuführen und die Protokolle zu aktualisieren.

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

Die Handler für die Auswahllisten werden als nächstes gezeigt.
Diese rufen die zugehörige Sanitisierungsmethode auf dem aktuellen Sanitisierer auf, wenn ein neues Element oder Attribut ausgewählt wird.
Zum Beispiel ruft der Listener für den `allowElementSelect` [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) auf, um das ausgewählte Element zu den erlaubten Elementen hinzuzufügen.
In jedem Fall protokolliert `applySanitizer()` die Ergebnisse mit dem aktuellen Sanitisierer.

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

Die Handler für die letzten beiden Tasten sind unten gezeigt.
Diese schalten den Wert der Variablen `dataAttributesActive` und `commentsActive` um und verwenden diese Werte dann in [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes).
Beachten Sie, dass, wenn die Kommentare ursprünglich deaktiviert sind, der erste Druck der Taste möglicherweise keine Wirkung hat!

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

Das Ergebnis ist unten gezeigt.
Wählen Sie die oberen Tasten, um respektive einen neuen Standard- oder leeren Sanitisierer einzustellen.
Sie können dann die Auswahllisten verwenden, um einige Elemente und Attribute zu den entsprechenden Erlauben- und Entfernen-Listen des Sanitisierers hinzuzufügen und die anderen Tasten, um Kommentare ein- und auszuschalten.
Die aktuelle Sanitisierungskonfiguration wird protokolliert.
Der Text im oberen Textfeld wird unter Verwendung der aktuellen Sanitisierungskonfiguration gesäubert und mit `setHTML()` und `setHTMLUnsafe()` geparst.

{{EmbedLiveSample("Sanitizer demo","100","650px")}}

Beachten Sie, dass das Hinzufügen von Elementen und Attributen zu den Erlauben-Listen sie aus den Entfernen-Listen entfernt und umgekehrt.
Beachten Sie auch, dass Sie Elemente in den Sanitisierer erlauben können, die mit den unsicheren Methoden injiziert werden, aber nicht mit den sicheren Methoden.
