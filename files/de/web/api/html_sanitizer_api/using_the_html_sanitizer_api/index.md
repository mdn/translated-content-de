---
title: Verwendung der HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bietet Methoden, die es Entwicklern ermöglichen, nicht vertrauenswürdiges HTML sicher in ein [`Element`](/de/docs/Web/API/Element), ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) oder ein [`Document`](/de/docs/Web/API/Document) einzufügen. Die API gibt Entwicklern auch die Flexibilität, bei Bedarf weiter einzuschränken oder zu erweitern, welche HTML-Entitäten erlaubt sind.

## Sichere Bereinigung standardmäßig

Der häufigste Anwendungsfall der API besteht darin, eine vom Benutzer bereitgestellte Zeichenkette sicher in ein [`Element`](/de/docs/Web/API/Element) einzufügen. Es sei denn, die einzufügende Zeichenkette _muss_ unsichere HTML-Entitäten enthalten, dann können Sie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) als direkten Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwenden.

Zum Beispiel entfernt der folgende Code alle XSS-unsicheren Elemente und Attribute aus der Eingabezeichenkette (in diesem Fall das {{htmlelement("script")}}-Element) sowie alle Elemente, die laut HTML-Spezifikation keine zulässigen Kinder des Zielelements sind:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(someElement.innerHTML); // abc def
```

Die anderen XSS-sicheren Methoden, [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static), werden auf die gleiche Weise verwendet.

## Verwendung einer Sanitizer-Konfiguration

Alle Bereinigungsmethoden können mit einem [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben werden, die definieren, welche Elemente, Attribute und Kommentare entweder erlaubt oder beim Einfügen von HTML-Zeichenketten entfernt werden sollen.

Der [`Sanitizer`](/de/docs/Web/API/Sanitizer) ist im Wesentlichen ein Wrapper um eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) und führt einige Optimierungen und Normalisierungen durch, die es einfacher und sicherer machen, ihn zu verwenden, zu teilen und zu ändern.

### Verwendung sicherer Methoden mit einem Sanitizer

Die XSS-sicheren Methoden entfernen immer unsichere HTML-Elemente oder Attribute (wie oben in [Sichere Bereinigung standardmäßig](#sichere_bereinigung_standardmäßig) beschrieben).

Sie können einen Sanitizer als zweites Argument an die sicheren Methoden übergeben, um dieselben oder weniger Entitäten als die Standardkonfiguration zuzulassen. Zum Beispiel, wenn Sie wissen, dass im Kontext von `someElement` unten nur {{htmlelement("p")}}- und {{htmlelement("a")}}-Elemente erwartet werden, könnten Sie eine Sanitizer-Konfiguration erstellen, die nur diese Elemente zulässt:

```js
const sanitizerOne = new Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

### Erlauben unsicherer Bereinigung

Manchmal möchten Sie möglicherweise Eingaben injizieren, die potenziell unsichere Elemente oder Attribute enthalten müssen. In diesem Fall könnten Sie eine der API XSS-unsicheren Methoden verwenden: [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe), [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static).

Um das Risiko etwas zu verringern, könnten Sie zunächst den Standard-Sanitizer konstruieren, der nur XSS-sichere Elemente zulässt, und dann nur jene unsicheren Entitäten erlauben, die in der Eingabe erwartet werden.

Zum Beispiel erlaubt der folgende Sanitizer alle sicheren Elemente und zusätzlich den unsicheren `onclick`-Handler bei `button`-Elementen (nur).

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someElement = document.getElementById("target");

const sanitizerOne = new Sanitizer(); // Default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

Mit diesem Code wäre das `alert(1)` erlaubt, und es gibt ein potenzielles Problem, dass das Attribut für bösartige Zwecke verwendet werden könnte. Wir wissen jedoch, dass alle anderen XSS-unsicheren HTML-Entitäten entfernt wurden, sodass wir uns nur um diesen einen Fall sorgen müssen und andere Schutzmaßnahmen implementieren können.

Die unsicheren Methoden verwenden jede von Ihnen bereitgestellte Sanitizer-Konfiguration (oder keine), daher müssen Sie vorsichtig sein, wenn Sie sie verwenden. Mindestens sollten Sie [Trusted Types](/de/docs/Web/API/HTML_Sanitizer_API#sanitization_and_trusted_types) erzwingen und [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) anstelle von Zeichenketten in die Methoden übergeben.

## Allow-Konfigurationen

Sie können eine ["Allow" Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie nur die Menge an HTML-Elementen und Attributen angeben, die beim Einsatz des Sanitizers injiziert werden dürfen. Diese Form der Konfiguration ist leicht verständlich und ist nützlich, wenn Sie genau wissen, welche HTML-Entitäten im Zielkontext erlaubt sein sollten.

Zum Beispiel erlaubt die folgende Konfiguration die {{htmlelement("p")}}- und {{htmlelement("div")}}-Elemente und die Attribute `cite` und `onclick`. Sie ersetzt auch {{htmlelement("b")}}-Elemente durch deren Inhalt (dies ist eine Form des "Erlaubens", da der Elementinhalt nicht entfernt wird).

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### Erlauben von Elementen

Die erlaubten Elemente können mit der [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz angegeben werden, die an den `Sanitizer()`-Konstruktor (oder direkt an die Bereinigungsmethoden) übergeben wird.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  elements: ["div", "span"],
});
```

Sie können jedoch auch jedes der erlaubten Elemente unter Verwendung eines Objekts angeben, das dessen `name` und `namespace` definiert, wie unten gezeigt (`Sanitizer` wird automatisch ein Namespace ableiten, wenn dies möglich ist).

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

Sie können auch die Elemente zu einem `Sanitizer` hinzufügen, indem Sie [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden. Hier fügen wir dieselben Elemente zu einem leeren Sanitizer hinzu:

```js
const sanitizer = new Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Erlauben globaler Attribute

Um Attribute global zu erlauben, auf jedem Element, wo es von der HTML-Spezifikation erlaubt ist, können Sie die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2)-Eigenschaft der [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) verwenden.

Der einfachste Weg, die `attributes`-Eigenschaft zu verwenden, besteht darin, ein Array von Attributnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  attributes: ["cite", "onclick"],
});
```

Sie können auch jedes Attribut mit den Eigenschaften `name` und `namespace` angeben, genau wie bei den Elementen:

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

Sie können auch jedes der erlaubten Attribute zu einem `Sanitizer` hinzufügen, indem Sie die Methode [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) verwenden:

```js
const sanitizer = new Sanitizer({});
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

### Erlauben/Entfernen von Attributen bei einem bestimmten Element

Sie können auch Attribute bei einem bestimmten Element erlauben oder entfernen. Beachten Sie, dass dies Teil einer "Allow-Konfiguration" ist, da Sie in diesem Fall noch das Element injizieren dürfen.

Um ein Attribut bei einem Element zu erlauben, können Sie das Element als Objekt mit den Eigenschaften `name` und `attributes` angeben. Die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes)-Eigenschaft enthält ein Array der erlaubten Attribute bei dem Element.

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

Ähnlich können wir die Attribute angeben, die bei einem Element nicht erlaubt sind, indem wir ein Elementobjekt mit der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes)-Eigenschaft verwenden. Zum Beispiel würde der folgende Sanitizer das `type`-Attribut von allen `<a>`-Elementen entfernen.

```js
const sanitizer = new Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

In beiden Fällen können Sie auch jedes Attribut als Objekt mit den Eigenschaften `name` und `namespace` angeben. Sie können auch die Attribut-Eigenschaften mit demselben Elementobjekt festlegen, das an [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) übergeben wird.

Beachten Sie, dass es unmöglich ist, ein Element-Attributverhalten in einem Sanitizer mit einer Entfernungs-Konfiguration zu definieren, da das (benötigte) `elements`-Array nicht vorhanden ist. Weitere Einschränkungen für per-Element-Attribute finden Sie in [Gültige Konfigurationen](/de/docs/Web/API/SanitizerConfig#valid_configuration).

### Ersetzen von Kindelementen

Sie können ein Array von Elementen angeben, die durch deren inneren Inhalt ersetzt werden sollen. Dies wird am häufigsten verwendet, um Stile von Elementen zu entfernen.

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

Wie bei Elementen und Attributen können Sie auch die Ersatzelemente mit einem Namespace angeben oder die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) verwenden:

```js
const sanitizer = new Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## Entfernen-Konfigurationen

Sie können eine ["Entfernen" Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) erstellen, indem Sie die Menge an HTML-Elementen und Attributen angeben, die beim Einsatz des Sanitizers aus der Eingabe entfernt werden sollen. Alle anderen Elemente und Attribute sind von der Konfiguration erlaubt, obwohl sie entfernt werden können, wenn Sie die Konfiguration in einer sicheren Bereinigungsmethode verwenden.

> [!NOTE]
> Eine Sanitizer-Konfiguration kann Allow-Listen oder Entfernungs-Listen enthalten, aber nicht beides.

Zum Beispiel entfernt die folgende Konfiguration die {{htmlelement("script")}}, {{htmlelement("div")}} und {{htmlelement("span")}}-Elemente sowie das `onclick`-Attribut.

```js
const sanitizer = new Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

Die Angabe von zu entfernenden Elementen ist nützlicher, wenn Sie eine bestehende Konfiguration optimieren möchten. Zum Beispiel betrachten Sie den Fall, dass wir den (sicheren) Standard-Sanitizer verwenden, aber zusätzlich sicherstellen wollen, dass einige andere Elemente entfernt werden.

```js
const sanitizer = new Sanitizer();
sanitizer.removeElement("div");
```

### Entfernen von Elementen

Die [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Eigenschaft einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz kann verwendet werden, um die zu entfernenden Elemente anzugeben.

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  removeElements: ["div", "span"],
});
```

Wie beim [Erlauben von Elementen](#erlauben_von_elementen) können Sie auch jedes der zu entfernenden Elemente unter Verwendung eines Objekts angeben, das dessen `name` und `namespace` definiert. Sie können die entfernten Elemente auch mit der Verwendung der `Sanitizer`-API konfigurieren, wie gezeigt:

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

Der einfachste Weg, die Eigenschaft zu verwenden, besteht darin, ein Array von Elementnamen anzugeben:

```js
const sanitizer = new Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

Sie können auch jedes der Elemente verwenden, die ein Objekt definieren, das dessen `name` und `namespace` definiert, und auch [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) verwenden, um ein Attribut hinzuzufügen, das von allen Elementen entfernt werden soll.

```js
const sanitizer = new Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## Kommentare und Datenattribute

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) kann auch verwendet werden, um festzulegen, ob Kommentare aus injiziertem Inhalt gefiltert werden, durch Verwendung der [`comments`](/de/docs/Web/API/SanitizerConfig#comments)-Eigenschaft, und ob `data-`-Attribute ohne Hinzufügung zu dem `attributes`-Array mit der [`dataAttributes`](/de/docs/Web/API/SanitizerConfig#dataattributes)-booleschen Eigenschaft erlaubt sind.

Um Kommentare und alle `data-*`-Attribute zu erlauben, könnten Sie eine Konfiguration wie diese verwenden:

```js
const sanitizer = new Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

Sie können die Kommentare oder Datenattributeigenschaften ähnlich auf einem bestehenden Sanitizer mit [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes) setzen:

```js
const sanitizer = new Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer vs SanitizerConfig

Alle Bereinigungsmethoden können eine Sanitizer-Konfiguration erhalten, die entweder eine [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Instanz ist.

Die [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) bietet eine kompakte Methode, um mehrere Elemente oder Attribute anzugeben, die entweder gleichzeitig erlaubt oder entfernt werden sollen. Bei der Änderung dieses Objekts kann etwas Sorgfalt erforderlich sein, um sicherzustellen, dass es eine [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) bleibt.

Das [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt ist ein Wrapper um [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das zusätzliche nützliche Funktionalität bietet:

- Der Standardkonstruktor erstellt eine Konfiguration, die alle XSS-sicheren Elemente und Attribute erlaubt und daher ein guter Ausgangspunkt für die Erstellung entweder etwas restriktiverer oder etwas weniger restriktiverer Sanitizer ist.
- Die `Sanitizer`-Methoden stellen sicher, dass die zugrunde liegende `SanitizerConfig` eine [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) bleibt. Zum Beispiel, wenn Sie `allowElement()` aufrufen, um ein Element zu erlauben, dann würde das Element auch aus dem zugrunde liegenden `replaceWithChildrenElements`-Array entfernt (falls vorhanden). Die Normalisierungen machen die Konfiguration effizienter.
- Die Methode [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) kann verwendet werden, um alle XSS-unsicheren Entitäten aus einer bestehenden Konfiguration zu entfernen.
- Sie können die Konfiguration exportieren, um genau zu sehen, welche Entitäten erlaubt und entfernt werden.

Beachten Sie, dass wenn Sie die sicheren Bereinigungsmethoden verwenden können, dann müssen Sie möglicherweise keine Sanitizer-Konfiguration definieren.

## Beispiele

Für weitere Beispiele siehe die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und die einzelnen Methoden der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle.

### Sanitizer-Demo

Dieses Beispiel zeigt, wie Sie die [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Methoden verwenden können, um einen Sanitizer zu aktualisieren. Das Ergebnis ist eine Demonstrationsschnittstelle, bei der Sie Elemente und Attribute zu den Allow- und Remove-Listen hinzufügen und ihre Effekte sehen können, wenn der Sanitizer mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet wird.

#### HTML

Zuerst definieren wir Schaltflächen, um den Standard-Sanitizer oder einen leeren Sanitizer zurückzusetzen.

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">Default Sanitizer</button>
  <button id="emptySanitizerBtn">Empty Sanitizer</button>
</div>
```

Dies wird gefolgt von {{htmlelement("select")}}-Elementen, um Benutzern zu ermöglichen, Elemente auszuwählen, um sie zu den Allow- und Remove-Listen für Elemente und Attribute hinzuzufügen.

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

Dann fügen wir Schaltflächen hinzu, um Kommentare und Datenattribute zum Erlauben/Entfernen zu toggeln.

```html
<div class="button-group">
  <button id="toggleCommentsBtn">Toggle comments</button>
  <button id="toggleDataAttributesBtn">Toggle data-attributes</button>
</div>
```

Die übrigen Elemente zeigen die zu analysierende Zeichenkette (bearbeitbar) und das Ergebnis dieser beiden Zeichenketten, wenn sie in ein Element mit `setHTML()` und `setHMLUnsafe()` eingefügt werden:

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

Der Code testet zunächst, ob die [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle unterstützt wird. Dann definiert er eine Zeichenkette von "unsicherem HTML", die eine Mischung aus XSS-sicheren und XSS-unsicheren Elementen (wie {{htmlelement("script")}}) enthält. Diese wird als Text in das erste Textfeld eingefügt. Das Textfeld ist bearbeitbar, sodass Benutzer später den Text ändern können, wenn sie möchten.

Wir erhalten dann die Elemente für die `setHTML` und `setHTMLUnsafe` Textfelder, in die wir das analysierte HTML schreiben werden, und erstellen eine leere `Sanitizer`-Konfiguration. Die Methode `applySanitizer()` wird mit dem neuen Sanitizer aufgerufen, um das Ergebnis der Bereinigung der initialen Zeichenkette mit sowohl einem sicheren als auch einem unsicheren Sanitizer zu protokollieren.

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

Die `applySanitizer()`-Protokolliermethode wird unten gezeigt. Diese erhält den initialen Inhalt der "nicht vertrauenswürdigen Zeichenkette" aus dem ersten Textfeld und analysiert ihn mit den Methoden [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) mit dem übergebenen `sanitizer`-Argument in die jeweiligen Textfelder. In jedem Fall wird das injizierte HTML dann aus dem Element mit `innerHTML` gelesen und als `innerText` (sodass es lesbar ist) zurück in das Element geschrieben.

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

Die Handler für die ersten beiden Schaltflächen erstellen den Standard- bzw. leeren Sanitizer. Die Methode `applySanitizer()`, die wir vorher gezeigt haben, wird verwendet, um den Sanitizer auszuführen und die Logs zu aktualisieren.

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

Die Handler für die Auswahllisten werden als Nächstes gezeigt. Diese rufen die zugehörige Sanitizer-Methode auf dem aktuellen Sanitizer auf, wann immer ein neues Element oder Attribut ausgewählt wird. Zum Beispiel ruft der Listener für `allowElementSelect` [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) auf, um das ausgewählte Element zu den erlaubten Elementen hinzuzufügen. In jedem Fall protokolliert `applySanitizer()` die Ergebnisse unter Verwendung des aktuellen Sanitizers.

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

Die Handler für die letzten beiden Schaltflächen werden unten gezeigt. Diese toggeln den Wert der `dataAttributesActive` und `commentsActive` Variablen und verwenden dann diese Werte in [`Sanitizer.setComments()`](/de/docs/Web/API/Sanitizer/setComments) und [`Sanitizer.setDataAttributes()`](/de/docs/Web/API/Sanitizer/setDataAttributes). Beachten Sie, dass, wenn die Kommentare anfänglich deaktiviert sind, der erste Tastendruck möglicherweise keine Wirkung hat!

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

Das Ergebnis wird unten gezeigt. Wählen Sie die oberen Schaltflächen, um einen neuen Standard- oder leeren Sanitizer festzulegen. Sie können dann die Auswahllisten verwenden, um einige Elemente und Attribute zu den jeweiligen Sanitizer-Listen hinzuzufügen und zu entfernen, und die anderen Schaltflächen, um Kommentare ein- und auszuschalten. Die aktuelle Sanitizer-Konfiguration wird protokolliert. Der Text im oberen Textbereich wird mit der aktuellen Sanitizer-Konfiguration bereinigt und mit `setHTML()` und `setHTMLUnsafe()` analysiert.

{{EmbedLiveSample("Sanitizer demo","100","650px")}}

Beachten Sie, dass das Hinzufügen von Elementen und Attributen zu den Allow-Listen diese aus den Remove-Listen entfernt und umgekehrt. Beachten Sie auch, dass Sie möglicherweise Elemente in einem Sanitizer erlauben können, die mit den unsicheren Methoden injiziert werden, aber nicht mit den sicheren Methoden.
