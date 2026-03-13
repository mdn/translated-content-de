---
title: Verwendung der HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bietet Methoden, mit denen Entwickler nicht vertrauenswürdiges HTML sicher in ein [`Element`](/de/docs/Web/API/Element), einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) oder ein [`Document`](/de/docs/Web/API/Document) einfügen können. Die API gibt Entwicklern auch die Flexibilität, falls erforderlich, weiter einzuschränken oder zu erweitern, welche HTML-Entitäten erlaubt sind.

## Sichere Bereinigung standardmäßig

Der häufigste Anwendungsfall für die API ist das sichere Einfügen einer vom Benutzer bereitgestellten Zeichenkette in ein [`Element`](/de/docs/Web/API/Element). Sofern die einzufügende Zeichenkette keine unsicheren HTML-Entitäten enthalten _muss_, können Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.

Zum Beispiel entfernt der folgende Code alle XSS-unsicheren Elemente und Attribute in der Eingabezeichenkette (in diesem Fall das {{htmlelement("script")}}-Element) zusammen mit allen Elementen, die von der HTML-Spezifikation nicht als Kinder des Zielelements zulässig sind:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(someElement.innerHTML); // abc def
```

Die anderen XSS-sicheren Methoden, [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static), werden auf dieselbe Weise verwendet.

## Verwendung einer Sanitizer-Konfiguration

Allen Bereinigungsmethoden kann ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben werden, der definiert, welche Elemente, Attribute und Kommentare entweder erlaubt oder entfernt werden sollen, wenn HTML-Zeichenketten eingefügt werden.

Der [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der einige Optimierungen und Normalisierungen vornimmt, die die Verwendung, das Teilen und das Modifizieren erleichtern und sicherer machen.

### Verwendung sicherer Methoden mit einem Sanitizer

Die XSS-sicheren Methoden entfernen immer alle unsicheren HTML-Elemente oder Attribute (wie oben in [Sichere Bereinigung standardmäßig](#sichere_bereinigung_standardmäßig) besprochen).

Sie können einen Sanitizer als zweites Argument an die sicheren Methoden übergeben, um die gleichen oder weniger Entitäten als in der Standardkonfiguration zuzulassen. Zum Beispiel, wenn Sie wissen, dass im Kontext von `someElement` unten nur {{htmlelement("p")}}- und {{htmlelement("a")}}-Elemente erwartet werden, könnten Sie eine Sanitizer-Konfiguration erstellen, die nur diese Elemente zulässt:

```js
const sanitizerOne = new Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

### Erlauben unsicherer Bereinigung

Manchmal möchten Sie möglicherweise Eingaben injizieren, die möglicherweise unsichere Elemente oder Attribute enthalten müssen. In diesem Fall könnten Sie eine der API XSS-unsicheren Methoden verwenden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Um das Risiko etwas zu reduzieren, könnten Sie zuerst den Standard-Sanitizer erstellen, der nur XSS-sichere Elemente erlaubt, und dann nur die unsicheren Entitäten erlauben, die in der Eingabe erwartet werden.

Zum Beispiel sind im folgenden Sanitizer alle sicheren Elemente erlaubt, und wir erlauben zusätzlich nur den unsicheren `onclick`-Handler auf `button`-Elementen.

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someElement = document.getElementById("target");

const sanitizerOne = new Sanitizer(); // Default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

Mit diesem Code wäre das `alert(1)` erlaubt, und es besteht ein potenzielles Problem, dass das Attribut für bösartige Zwecke verwendet werden könnte. Wir wissen jedoch, dass alle anderen XSS-unsicheren HTML-Entitäten entfernt wurden, sodass wir uns nur um diesen einen Fall sorgen müssen und können andere Maßnahmen ergreifen.

Die unsicheren Methoden verwenden jede Sanitizer-Konfiguration, die Sie bereitstellen (oder keine), daher müssen Sie vorsichtig sein, wenn Sie sie verwenden. Mindestens sollten Sie [Trusted Types](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_and_trusted_types) durchsetzen und [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) anstelle von Zeichenketten in die Methoden übergeben.

## Zulassungs-Konfigurationen

Sie können eine [„Erlaubte“ Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie nur die Menge an HTML-Elementen und -Attributen spezifizieren, die beim Einsatz des Sanitizers eingefügt werden dürfen. Diese Form der Konfiguration ist leicht verständlich und nützlich, wenn Sie genau wissen, welche HTML-Entitäten im Zielkontext zulässig sein sollen.

Zum Beispiel erlaubt die folgende Konfiguration die {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente sowie die Attribute `cite` und `onclick`. Ebenso werden {{htmlelement("b")}}-Elemente durch ihren Inhalt ersetzt (dies ist eine Form des „Erlaubens“, da die Elementinhalte nicht entfernt werden).

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### Erlauben von Elementen

Die erlaubten Elemente können über die [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Eigenschaft der an den `Sanitizer()`-Konstruktor (oder direkt an die Bereinigungsmethoden) übergebenen [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz spezifiziert werden.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  elements: ["div", "span"],
});
```

Sie können jedoch auch jedes der erlaubten Elemente mit einem Objekt spezifizieren, das seinen `name` und `namespace` definiert, wie unten gezeigt (der `Sanitizer` wird automatisch einen Namespace ableiten, wenn er dazu in der Lage ist).

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

Sie können die Elemente auch einem `Sanitizer` mit [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) hinzufügen. Hier fügen wir dieselben Elemente einem leeren Sanitizer hinzu:

```js
const sanitizer = new Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Erlauben globaler Attribute

Um Attribute global auf allen Elementen zu erlauben, wo es die HTML-Spezifikation erlaubt, können Sie die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) verwenden.

Der einfachste Weg, die `attributes`-Eigenschaft zu verwenden, besteht darin, ein Array von Attributnamen zu spezifizieren:

```js
const sanitizer = new Sanitizer({
  attributes: ["cite", "onclick"],
});
```

Sie können auch jedes Attribut mit den `name`- und `namespace`-Eigenschaften spezifizieren, genau wie Elemente:

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

Sie können auch jedes der erlaubten Attribute einem `Sanitizer` mit der Methode [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) hinzufügen:

```js
const sanitizer = new Sanitizer({});
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

### Erlauben/Entfernen von Attributen auf einem bestimmten Element

Sie können auch Attribute auf einem bestimmten Element erlauben oder entfernen. Beachten Sie, dass dies Teil einer „Erlauben-Konfiguration“ ist, da Sie in diesem Fall dennoch erlauben, dass das Element eingefügt wird.

Um ein Attribut auf einem Element zu erlauben, können Sie das Element als Objekt mit den Eigenschaften `name` und `attributes` spezifizieren. Die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes)-Eigenschaft enthält ein Array der auf dem Element erlaubten Attribute.

Unten zeigen wir einen Sanitizer, bei dem die {{htmlelement("div")}}, {{htmlelement("a")}} und {{htmlelement("span")}}-Elemente erlaubt sind und das {{htmlelement("a")}}-Element zusätzlich die Attribute `href`, `rel`, `hreflang` und `type` erlaubt.

```js
const sanitizer = new Sanitizer({
  elements: [
    "div",
    { name: "a", attributes: ["href", "rel", "hreflang", "type"] },
    "span",
  ],
});
```

Ähnlich können wir die Attribute, die auf einem Element nicht erlaubt sind, mit einem Elementobjekt mit der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes)-Eigenschaft spezifizieren. Zum Beispiel würde der folgende Sanitizer das `type`-Attribut von allen `<a>`-Elementen entfernen.

```js
const sanitizer = new Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

In beiden Fällen können Sie auch jedes Attribut als Objekt mit den Eigenschaften `name` und `namespace` spezifizieren. Sie können auch die Attribut-Eigenschaften mit demselben Elementobjekt setzen, das an [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) übergeben wird.

Beachten Sie, dass es unmöglich ist, ein Verhalten pro Element-Attribut auf einem `Sanitizer` mit einer Entfernungs-Konfiguration zu definieren, da das (nötige) `elements`-Array nicht vorhanden ist. Andere Einschränkungen zu pro Element-Attributen werden in [Gültige Konfigurationen](/de/docs/Web/API/SanitizerConfig#valid_configuration) behandelt.

### Ersetzen von Kindelementen

Sie können ein Array von Elementen angeben, die durch ihren inneren Inhalt ersetzt werden sollen. Dies wird am häufigsten verwendet, um Stile von Elementen zu entfernen.

Zum Beispiel verwendet der folgende Code die [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), um anzugeben, dass das {{htmlelement("b")}}-Element ersetzt werden soll:

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

Wie bei Elementen und Attributen können Sie auch die Ersetzungselemente mit einem Namespace spezifizieren oder die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) verwenden:

```js
const sanitizer = new Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## Entfernungs-Konfigurationen

Sie können eine [„Entfernungs“ Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie die Menge an HTML-Elementen und -Attributen spezifizieren, die aus der Eingabe entfernt werden sollen, wenn Sie den Sanitizer verwenden. Alle anderen Elemente und Attribute sind durch die Konfiguration erlaubt, obwohl sie entfernt werden können, wenn Sie die Konfiguration in einer sicheren Bereinigung verwenden.

> [!NOTE]
> Eine Sanitizer-Konfiguration kann Erlauben-Listen oder Entfernen-Listen enthalten, aber nicht beides.

Zum Beispiel entfernt die folgende Konfiguration die {{htmlelement("script")}}, {{htmlelement("div")}} und {{htmlelement("span")}}-Elemente und auch das `onclick`-Attribut.

```js
const sanitizer = new Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

Die Spezifizierung von Elementen zur Entfernung ist nützlicher, wenn Sie eine bestehende Konfiguration anpassen möchten. Zum Beispiel betrachten Sie den Fall, in dem wir den (sicheren) Standard-Sanitizer verwenden, aber auch sicherstellen wollen, dass einige andere Elemente entfernt werden.

```js
const sanitizer = new Sanitizer();
sanitizer.removeElement("div");
```

### Entfernen von Elementen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Eigenschaft einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz kann verwendet werden, um die zu entfernenden Elemente zu spezifizieren.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen zu spezifizieren:

```js
const sanitizer = new Sanitizer({
  removeElements: ["div", "span"],
});
```

Wie beim [Erlauben von Elementen](#erlauben_von_elementen) können Sie auch jedes der zu entfernenden Elemente mit einem Objekt spezifizieren, das seinen `name` und `namespace` definiert. Sie können auch die entfernten Elemente mit Hilfe der `Sanitizer`-API wie gezeigt konfigurieren:

```js
const sanitizer = new Sanitizer({});
sanitizer.removeElement("div");
sanitizer.removeElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Entfernen von Attributen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann verwendet werden, um Attribute anzugeben, die global entfernt werden sollen.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen zu spezifizieren:

```js
const sanitizer = new Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

Sie können auch jedes der Elemente mit einem Objekt spezifizieren, das seinen `name` und `namespace` definiert, und auch [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) verwenden, um ein Attribut hinzuzufügen, das von allen Elementen entfernt werden soll.

```js
const sanitizer = new Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## Kommentare und Daten-Attribute

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann auch verwendet werden, um zu spezifizieren, ob Kommentare aus injizieren Inhalten gefiltert werden sollen, unter Verwendung der [`comments`](/de/docs/Web/API/SanitizerConfig#comments)-Eigenschaft, und ob `data-`-Attribute erlaubt sind, ohne dass sie der `attributes`-Liste hinzugefügt werden müssen, mit der booleschen Eigenschaft [`dataAttributes`](/de/docs/Web/API/SanitizerConfig#dataattributes).

Um Kommentare und alle `data-*`-Attribute zu erlauben, könnten Sie eine Konfiguration wie diese verwenden:

```js
const sanitizer = new Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

Sie können die Kommentare und Daten-Attribut-Eigenschaften auch auf einem bestehenden Sanitizer mit [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) setzen:

```js
const sanitizer = new Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer vs SanitizerConfig

Allen Bereinigungsmethoden kann eine Sanitizer-Konfiguration übergeben werden, die entweder eine [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz ist.

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) bietet eine kompakte Methode zur Spezifizierung mehrerer Elemente oder Attribute, die gleichzeitig erlaubt oder entfernt werden sollen. Es kann einige Vorsicht erforderlich sein, wenn Sie dieses Objekt ändern, um sicherzustellen, dass es eine [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) bleibt.

Das [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt ist ein Wrapper um [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der zusätzliche nützliche Funktionalität bietet:

- Der Standardkonstruktor erstellt eine Konfiguration, die alle XSS-sicheren Elemente und Attribute erlaubt und ist daher ein guter Ausgangspunkt, um entweder leicht restriktivere oder weniger restriktive Sanitizer zu erstellen.
- Die `Sanitizer`-Methoden stellen sicher, dass die zugrunde liegende `SanitizerConfig` eine [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) bleibt. Wenn Sie zum Beispiel `allowElement()` aufrufen, um ein Element zu erlauben, würde das Element auch aus dem zugrunde liegenden `replaceWithChildrenElements`-Array entfernt (falls vorhanden). Die Normalisierungen machen die Konfiguration effizienter.
- Die Methode [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) kann verwendet werden, um alle XSS-unsicheren Entitäten aus einer bestehenden Konfiguration zu entfernen.
- Sie können die Konfiguration exportieren, um genau zu sehen, welche Entitäten erlaubt und entfernt werden.

Beachten Sie, dass wenn Sie die sicheren Bereinigungsmethoden verwenden können, dann müssen Sie möglicherweise keine Sanitizer-Konfiguration definieren.

## Beispiele

Weitere Beispiele finden Sie in der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und den einzelnen Methoden der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle.

### Sanitizer-Demo

Dieses Beispiel zeigt, wie Sie die [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden verwenden können, um einen Sanitizer zu aktualisieren. Das Ergebnis ist eine Demonstrationsschnittstelle, in der Sie Elemente und Attribute zu den Erlaubens- und Entfernungslisten hinzufügen können und ihre Auswirkungen sehen, wenn der Sanitizer mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet wird.

#### HTML

Zuerst definieren wir Schaltflächen, um den Standard-Sanitizer oder einen leeren Sanitizer zurückzusetzen.

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">Default Sanitizer</button>
  <button id="emptySanitizerBtn">Empty Sanitizer</button>
</div>
```

Es folgen {{htmlelement("select")}}-Elemente, die es Benutzern ermöglichen, Elemente auszuwählen, die zu den Erlaubens- und Entfernungslisten für Elemente und Attribute hinzugefügt werden sollen.

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

Dann fügen wir Schaltflächen hinzu, um zu toggeln, ob Kommentare und Datenattribute erlaubt oder entfernt werden.

```html
<div class="button-group">
  <button id="toggleCommentsBtn">Toggle comments</button>
  <button id="toggleDataAttributesBtn">Toggle data-attributes</button>
</div>
```

Die übrigen Elemente zeigen die zu parsende Zeichenkette (editierbar) und das Ergebnis dieser beiden Zeichenketten, wenn sie in ein Element mit `setHTML()` und `setHMLUnsafe()` injiziert werden:

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

Der Code testet zunächst, ob die [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle unterstützt wird. Anschließend definiert er eine Zeichenkette aus „unsicherem HTML“, die eine Mischung aus XSS-sicheren und XSS-unsicheren Elementen (wie {{htmlelement("script")}}) enthält. Diese wird als Text in das erste Textfeld eingefügt. Der Textbereich ist editierbar, sodass Benutzer den Text später nach Bedarf ändern können.

Wir holen uns dann die Elemente für die `setHTML` und `setHTMLUnsafe` Textbereịche, in die wir das geparste HTML schreiben werden, und erstellen eine leere `Sanitizer`-Konfiguration. Die Methode `applySanitizer()` wird mit dem neuen Sanitizer aufgerufen, um das Ergebnis der Bereinigung der initialen Zeichenkette mit einem sicheren und unsicheren Sanitizer zu protokollieren.

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

Die `applySanitizer()`-Protokollierungsmethode wird unten gezeigt. Diese holt den initialen Inhalt der „untrusted string“ aus dem ersten Textbereich und parst ihn mit den Methoden [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) mit dem übergebenen `sanitizer`-Argument in die jeweiligen Textbereiche. In beiden Fällen wird das injizierte HTML dann vom Element mit `innerHTML` gelesen und als `innerText` (sodass es menschlich lesbar ist) zurück in das Element geschrieben.

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

Anschließend holen wir uns die Elemente für jede der Schaltflächen und Auswahllisten.

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

Die Handler für die ersten beiden Schaltflächen erstellen jeweils den Standارد- und leeren Sanitizer. Die Methode `applySanitizer()`, die wir vorher gezeigt haben, wird verwendet, um den Sanitizer auszuführen und die Protokolle zu aktualisieren.

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

Die Handler für die Auswahllisten werden als nächstes gezeigt. Diese rufen die zugehörige Sanitizer-Methode auf dem aktuellen Sanitizer auf, wenn ein neues Element oder Attribut ausgewählt wird. Zum Beispiel ruft der Listener für die `allowElementSelect` [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) auf, um das ausgewählte Element den erlaubten Elementen hinzuzufügen. In jedem Fall protokolliert `applySanitizer()` die Ergebnisse mit dem aktuellen Sanitizer.

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

Die Handler für die letzten beiden Schaltflächen sind unten gezeigt. Diese toggeln den Wert der `dataAttributesActive` und `commentsActive` Variablen und verwenden diese Werte in [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes). Beachten Sie, dass wenn die Kommentare initial deaktiviert sind, der erste Druck auf die Schaltfläche möglicherweise keine Wirkung zeigt!

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

Das Ergebnis wird unten gezeigt. Wählen Sie die oberen Schaltflächen aus, um einen neuen Standard- oder leeren Sanitizer zu setzen. Sie können dann die Auswahllisten verwenden, um einige Elemente und Attribute zu den jeweiligen Erlauben- und Entfernen-Listen des Sanitizers hinzuzufügen, und die anderen Schaltflächen, um Kommentare ein- und auszuschalten. Die aktuelle Sanitizer-Konfiguration wird protokolliert. Der Text im oberen Textbereich wird mit der aktuellen Sanitizer-Konfiguration bereinigt und mit `setHTML()` und `setHTMLUnsafe()` geparst.

{{EmbedLiveSample("Sanitizer demo","100","650px")}}

Beachten Sie, dass das Hinzufügen von Elementen und Attributen zu den Erlauben-Listen sie aus den Entfernen-Listen entfernt, und umgekehrt. Beachten Sie auch, dass Sie Elemente in einem Sanitizer zulassen können, die mit den unsicheren Methoden injiziert werden, aber nicht mit den sicheren Methoden.
