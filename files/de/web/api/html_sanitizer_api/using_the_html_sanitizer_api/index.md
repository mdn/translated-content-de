---
title: Verwendung der HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
l10n:
  sourceCommit: f9e87cf7d09830e097a2aadb5e507eb12c9a4514
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bietet Methoden, die es Entwicklern ermöglichen, untrusted HTML sicher in ein [`Element`](/de/docs/Web/API/Element), eine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) oder ein [`Document`](/de/docs/Web/API/Document) zu injizieren. Die API gibt Entwicklern auch die Flexibilität, bei Bedarf weiter einzuschränken oder zu erweitern, welche HTML-Entitäten erlaubt sind.

## Sichere Standard-Sanitisierung

Der häufigste Anwendungsfall für die API ist das sichere Einfügen eines benutzerdefinierten Strings in ein [`Element`](/de/docs/Web/API/Element). Sofern der einzufügende String _nicht zwingend_ unsichere HTML-Entitäten enthalten muss, können Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) als Drop-in-Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.

Zum Beispiel entfernt der folgende Code alle XSS-unsicheren Elemente und Attribute im Eingabestring (in diesem Fall das {{htmlelement("script")}}-Element), zusammen mit allen Elementen, die gemäß der HTML-Spezifikation nicht als Kinder des Ziel-Elements erlaubt sind:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

Die anderen XSS-sicheren Methoden, [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static), werden auf die gleiche Weise verwendet.

### Sichere Methoden schränken erlaubte Entitäten weiter ein

Sie können die HTML-Entitäten, die Sie zulassen oder entfernen möchten, angeben, indem Sie einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) als zweiten Parameter bei allen Sanitizer-Methoden übergeben.

Wenn beispielsweise nur {{htmlelement("p")}}- und {{htmlelement("a")}}-Elemente im Kontext von "someElement" erwartet werden, könnten Sie eine Sanitizer-Konfiguration erstellen, die nur diese Elemente zulässt:

```js
sanitizerOne = Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

Beachten Sie jedoch, dass die unsicheren HTML-Entitäten bei der Verwendung der sicheren Methoden immer entfernt werden. Wird eine permissive Sanitizer-Konfiguration mit den sicheren Methoden verwendet, erlaubt sie entweder die gleichen oder weniger Entitäten als die Standardkonfiguration.

## Zulassen unsicherer Sanitisierung

Manchmal möchten Sie vielleicht Eingaben injizieren, die potenziell unsichere Elemente oder Attribute enthalten müssen. In diesem Fall können Sie eine der XSS-unsicheren Methoden der API verwenden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Ein üblicher Ansatz ist es, beim Standard-Sanitizer zu beginnen, der nur sichere Elemente zulässt, und dann nur die unsicheren Entitäten zuzulassen, die wir in der Eingabe erwarten.

Zum Beispiel erlaubt im folgenden Sanitizer alle sicheren Elemente, und wir erlauben zusätzlich den unsicheren `onclick`-Handler nur auf `button`-Elementen.

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someTargetElement = document.getElementById("target");

sanitizerOne = Sanitizer(); // Default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

Mit diesem Code würde `alert(1)` erlaubt, was ein potenzielles Problem darstellt, dass das Attribut zu bösartigen Zwecken verwendet werden könnte. Wir wissen jedoch, dass alle anderen XSS-unsicheren HTML-Entitäten entfernt wurden, sodass wir uns nur um diesen einen Fall kümmern müssen und andere Schutzmaßnahmen einbauen können.

Die unsicheren Methoden verwenden jede bereitgestellte Sanitizer-Konfiguration (oder keine), daher müssen Sie vorsichtiger sein als bei der Verwendung der sicheren Methoden.

## Zulassungs-Konfigurationen

Sie können eine ["allow"-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie nur den Satz von HTML-Elementen und -Attributen angeben, die Sie beim Verwenden des Sanitizers erlauben möchten. Diese Form der Konfiguration ist leicht zu verstehen und nützlich, wenn Sie genau wissen, welche HTML-Entitäten im Zielkontext erlaubt sein sollten.

Zum Beispiel erlaubt die folgende Konfiguration die {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente und die Attribute `cite` und `onclick`. Sie ersetzt auch {{htmlelement("b")}}-Elemente durch deren Inhalt (dies ist eine Form des "Erlaubens", da der Inhalt des Elements nicht entfernt wird).

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### Erlauben von Elementen

Die erlaubten Elemente können mit der [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz angegeben werden, die dem `Sanitizer()`-Konstruktor (oder direkt den Sanitisierungsmethoden) übergeben wird.

Der einfachste Weg, die Eigenschaft zu verwenden, ist ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  elements: ["div", "span"],
});
```

Sie können jedoch auch jedes der erlaubten Elemente mit einem Objekt spezifizieren, das seinen `name` und `namespace` definiert, wie unten gezeigt (`Sanitizer` wird automatisch einen Namespace ableiten, wenn möglich).

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

Sie können die Elemente dem `Sanitizier` mit seiner API hinzufügen. Hier fügen wir die gleichen Elemente zu einem leeren Sanitizer hinzu:

```js
const sanitizer = Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Erlauben globaler Attribute

Um Attribute global zu erlauben, auf jedem Element, wo es laut HTML-Spezifikation erlaubt ist, können Sie die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) verwenden.

Der einfachste Weg, die `attributes`-Eigenschaft zu verwenden, ist ein Array von Attributnamen anzugeben:

```js
const sanitizer = Sanitizer({
  attributes: ["cite", "onclick"],
});
```

Sie können auch jedes Attribut mit den Eigenschaften `name` und `namespace` genauso wie Elemente angeben:

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

Sie können auch jedes der erlaubten Attribute dem `Sanitizer` mit seiner `allowAttribute()`-Methode hinzufügen:

```js
const sanitizer = Sanitizer({});
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

### Erlauben/Entfernen von Attributen auf einem bestimmten Element

Sie können auch Attribute auf einem bestimmten Element erlauben oder entfernen. Beachten Sie, dass dies Teil einer "allow"-Konfiguration ist, weil Sie in diesem Fall immer noch erlauben, dass das Element injiziert wird.

Um ein Attribut auf einem Element zu erlauben, können Sie das Element als Objekt mit den Eigenschaften `name` und `attributes` angeben. Die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes)-Eigenschaft enthält ein Array der erlaubten Attribute auf dem Element.

Unten zeigen wir einen Sanitizer, wo die {{htmlelement("div")}}, {{htmlelement("a")}} und {{htmlelement("span")}}-Elemente erlaubt sind, und das {{htmlelement("a")}}-Element zusätzlich die `href`, `rel`, `hreflang` und `type`-Attribute erlaubt.

```js
const sanitizer = Sanitizer({
  elements: [
    "div",
    { name: "a", attributes: ["href", "rel", "hreflang", "type"] },
    "span",
  ],
});
```

In ähnlicher Weise können wir die Attribute, die auf einem Element nicht erlaubt sind, mit einem Elementobjekt und der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes)-Eigenschaft angeben. Zum Beispiel würde der folgende Sanitizer das `type`-Attribut von allen `<a>`-Elementen entfernen.

```js
const sanitizer = Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

In beiden Fällen können Sie auch jedes Attribut als Objekt mit den Eigenschaften `name` und `namespace` angeben. Sie können die Attributeigenschaften auch unter Verwendung desselben Elementobjekts setzten, das an [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) übergeben wird.

Beachten Sie jedoch, dass Sie in einem Aufruf nicht sowohl die `attributes`- als auch `removeAttributes`-Eigenschaften für ein Element angeben können. Der Versuch, dies zu tun, wird eine Ausnahme auslösen.

### Ersetzen von Kinderelementen

Sie können ein Array von Elementen angeben, die durch ihren inneren Inhalt ersetzt werden sollen. Dies wird am häufigsten verwendet, um Stile von Elementen zu entfernen.

Zum Beispiel verwendet der folgende Code die [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), um anzugeben, dass das {{htmlelement("b")}}-Element ersetzt werden soll:

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

Wie bei Elementen und Attributen können Sie auch die Ersatzelemente mit einem Namespace angeben oder die [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren)-Methode verwenden:

```js
const sanitizer = Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## Entferner-Konfigurationen

Sie können eine ["remove"-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie den Satz von HTML-Elementen und -Attributen angeben, die Sie aus der Eingabe entfernen möchten, wenn Sie den Sanitizer verwenden. Alle anderen Elemente und Attribute sind durch die Konfiguration erlaubt, obwohl sie entfernt werden können, wenn Sie die Konfiguration in einer sicheren Sanitisierungsmethode verwenden.

> [!NOTE]
> Eine Sanitizer-Konfiguration kann entweder Zulassungslisten oder Entfernung ausmachen, jedoch nicht beides.

Zum Beispiel entfernt die folgende Konfiguration die {{htmlelement("script")}}, {{htmlelement("div")}} und {{htmlelement("span")}}-Elemente sowie das `onclick`-Attribut.

```js
const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

Das Angeben von Elementen zum Entfernen ist nützlicher, wenn Sie eine vorhandene Konfiguration optimieren möchten. Zum Beispiel betrachten Sie den Fall, in dem wir den (sicheren) Standard-Sanitizer verwenden, aber auch sicherstellen möchten

```js
const sanitizer = Sanitizer();
sanitizer.removeElement("div");

const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

### Entfernen von Elementen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Eigenschaft einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Instanz kann verwendet werden, um die zu entfernenden Elemente anzugeben.

Der einfachste Weg, die Eigenschaft zu verwenden, ist ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  removeElements: ["div", "span"],
});
```

Wie beim [Erlauben von Elementen](#erlauben_von_elementen) können Sie auch jedes der zu entfernenden Elemente mit einem Objekt angeben, das seinen `name` und `namespace` definiert. Sie können auch die entfernten Elemente mit der `Sanitizer` API konfigurieren, wie gezeigt:

```js
const sanitizer = Sanitizer({});
sanitizer.removeElement("div");
sanitizer.removeElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Entfernen von Attributen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann verwendet werden, um anzugeben, welche Attribute global entfernt werden sollen.

Der einfachste Weg, die Eigenschaft zu verwenden, ist ein Array von Elementnamen anzugeben:

```js
const sanitizer = Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

Sie können auch jedes der Elemente mit einem Objekt angeben, das seinen `name` und `namespace` definiert, und auch [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) verwenden, um ein Attribut hinzuzufügen, das von allen Elementen entfernt werden soll.

```js
const sanitizer = Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## Kommentare und Daten-Attribute

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann auch verwendet werden, um anzugeben, ob Kommentare und `data-`-Attribute aus dem injizierten Inhalt gefiltert werden, mit den [comments](/de/docs/Web/API/SanitizerConfig#comments) und [dataAttributes](/de/docs/Web/API/SanitizerConfig#dataattributes) booleschen Eigenschaften.

Um sowohl Kommentare als auch Datenattribute zuzulassen, könnten Sie eine Konfiguration wie diese verwenden:

```js
const sanitizer = Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

Sie können auf ähnliche Weise Kommentare oder Datenattribute in einem bestehenden Sanitizer mit den Methoden [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) aktivieren oder deaktivieren:

```js
const sanitizer = Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer vs SanitizerConfig

Alle Sanitisierungsmethoden können eine Sanitizer-Konfiguration erhalten, die entweder eine [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Instanz ist.

Das [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt ist eine Hülle um die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die zusätzliche nützliche Funktionalitäten bietet:

- Der Standardkonstruktor erstellt eine Konfiguration, die alle XSS-sicheren Elemente und Attribute erlaubt und daher ein guter Ausgangspunkt ist, um entweder etwas restriktivere oder etwas weniger restriktive Sanitisierer zu erstellen.
- Wenn Sie die Methoden verwenden, um HTML-Entitäten zu erlauben oder zu entfernen, werden die Entitäten aus den "gegenteiligen" Listen entfernt. Diese Normalisierungen machen die Konfiguration effizienter.
- Die [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe)-Methode kann verwendet werden, um alle XSS-unsicheren Entitäten aus einer bestehenden Konfiguration zu entfernen.
- Sie können die Konfiguration exportieren, um genau zu sehen, welche Entitäten erlaubt und welche verworfen werden.

Beachten Sie jedoch, dass Sie, wenn Sie die sicheren Sanitisierungsmethoden verwenden können, möglicherweise überhaupt keine Sanitizer-Konfiguration definieren müssen.

## Beispiele

Für andere Beispiele siehe die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und die einzelnen Methoden der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle.

### Sanitizer-Demo

Dieses Beispiel zeigt, wie Sie die Methoden des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden können, um einen Sanitizer zu aktualisieren. Das Ergebnis ist eine Demonstrationsschnittstelle, auf der Benutzer Elemente und Attribute zu den Zulassungs- und Entfernung Listen hinzufügen können, um deren Auswirkungen zu sehen, wenn der Sanitizer mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet wird.

#### HTML

Zuerst definieren wir Schaltflächen, um den Standard-Sanitizer oder einen leeren Sanitizer zurückzusetzen.

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">Default Sanitizer</button>
  <button id="emptySanitizerBtn">Empty Sanitizer</button>
</div>
```

Dies wird gefolgt von {{htmlelement("select")}}-Elementen, die es Benutzern ermöglichen, Elemente auszuwählen, die den Zulassungs- und Entfernen Listen für Elemente und Attribute hinzugefügt werden sollen.

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

Dann fügen wir Schaltflächen hinzu, um Kommentare und Datenattribute zum Zulassen/Entfernen umzuschalten.

```html
<div class="button-group">
  <button id="toggleCommentsBtn">Toggle comments</button>
  <button id="toggleDataAttributesBtn">Toggle data-attributes</button>
</div>
```

Die restlichen Elemente zeigen den zu analysierenden String (editierbar) und das Ergebnis dieser beiden Strings, wenn sie in ein Element mit `setHTML()` und `setHTMLUnsafe()` injiziert werden, jeweils:

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

Der Code prüft zunächst, ob die [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle unterstützt wird. Anschließend wird ein String mit "unsicherem HTML" definiert, der eine Mischung aus XSS-sicheren und XSS-unsicheren Elementen (wie {{htmlelement("script")}}) enthält. Dieser wird als Text in das erste Textfeld eingefügt. Das Textfeld ist bearbeitbar, sodass Benutzer den Text später bei Bedarf ändern können.

Dann holen wir die Elemente für die Textbereiche `setHTML` und `setHTMLUnsafe`, in denen wir das geparste HTML schreiben werden, und erstellen eine leere `Sanitizer`-Konfiguration. Die Methode `applySanitizer()` wird mit dem neuen Sanitizer aufgerufen, um das Ergebnis der Sanitisierung des initialen Strings mit sowohl einem sicheren als auch einem unsichern Sanitizer zu protokollieren.

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

Die Protokollierungsmethode `applySanitizer()` wird unten gezeigt. Diese erhält den anfänglichen Inhalt des "untrusted String" aus dem ersten Textfeld und analysiert ihn mit den Methoden [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) unter Verwendung des übergebenen `sanitizer`-Arguments in die jeweiligen Textfelder. In jedem Fall wird das injizierte HTML dann mit `innerHTML` aus dem Element gelesen und als `innerText` in das Element zurückgeschrieben (damit es für Menschen lesbar ist).

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

Als nächstes holen wir Elemente für jede der Schaltflächen und Auswahllisten.

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

Die Handler für die ersten beiden Schaltflächen erstellen den Standard- und den leeren Sanitizer. Die zuvor gezeigte Methode `applySanitizer()` wird verwendet, um den Sanitizer auszuführen und die Protokolle zu aktualisieren.

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

Die Handler für die Auswahllisten werden als nächstes gezeigt. Diese rufen die zugehörige Sanitizer-Methode auf dem aktuellen Sanitizer auf, wenn ein neues Element oder Attribut ausgewählt wird. Zum Beispiel ruft der Listener für `allowElementSelect` [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) auf, um das ausgewählte Element zu den erlaubten Elementen hinzuzufügen. In jedem Fall protokolliert `applySanitizer()` die Ergebnisse unter Verwendung des aktuellen Sanitizers.

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

Die Handler für die letzten beiden Schaltflächen werden unten gezeigt. Diese schalten den Wert der Variablen `dataAttributesActive` und `commentsActive` um und verwenden dann diese Werte in [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes). Beachten Sie, dass wenn die Kommentare anfänglich deaktiviert sind, der erste Druck auf die Schaltfläche möglicherweise keine Wirkung zeigt!

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

Das Ergebnis wird unten gezeigt. Wählen Sie die oberen Schaltflächen, um einen neuen Standard- oder leeren Sanitizer festzulegen. Sie können dann die Auswahllisten verwenden, um einige Elemente und Attribute zu den jeweiligen Zulassungs- und Entfernung Listen des Sanitizers hinzuzufügen und die anderen Schaltflächen verwenden, um Kommentare ein- oder auszuschalten. Die aktuelle Sanitizer-Konfiguration wird protokolliert. Der Text im oberen Textbereich wird unter Verwendung der aktuellen Sanitizer-Konfiguration gesäubert und mit `setHTML()` und `setHTMLUnsafe()` geparst.

{{EmbedLiveSample("Sanitizer demo","100","650px")}}

Beachten Sie, dass das Hinzufügen von Elementen und Attributen zu den Zulassungs-Listen sie aus den Entfernungs-Listen entfernt, und umgekehrt. Beachten Sie auch, dass Sie Elemente im Sanitizer erlauben können, die mit den unsicheren Methoden injiziert werden, jedoch nicht mit den sicheren Methoden.
