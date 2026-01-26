---
title: "Sanitizer: allowElement() Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`allowElement()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle legt fest, dass das angegebene Element in der Ausgabe erlaubt ist, wenn der Sanitizer verwendet wird.

Sie kann auch verwendet werden, um auf `Sanitizer`-Instanzen Attribut-Erlauben- oder Entfernen-Arrays pro Element mit einer [Allow-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) festzulegen.

## Syntax

```js-nolint
allowElement(element)
```

### Parameter

- `element`
  - : Ein String, der den Namen des erlaubten Elements angibt, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält. Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Sanitizing von HTML erlaubt sind.

        Jedes Attribut kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Sanitizing von HTML entfernt werden.

        Jedes Attribut kann durch seinen Namen (einen String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, um das Element zu erlauben, und `false`, wenn die Konfiguration nicht geändert wurde (meistens, weil das Element bereits erlaubt ist, aber möglicherweise, weil die Änderung nicht vorgenommen werden konnte).

Beachten Sie, dass `false` zurückgegeben werden kann, wenn die interne Konfiguration:

- das [`elements`](/de/docs/Web/API/SanitizerConfig#elements) Array definiert und das Element bereits vorhanden ist (es muss nicht nochmal hinzugefügt werden).
- das [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) Array definiert und das angegebene Element nicht vorhanden ist (und somit bereits nicht gefiltert wird).
- das [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) Array definiert und versucht, ein Element mit per-Element-Attributen zu erlauben.
  Dieser Vorgang wird nicht unterstützt, da in einer [gültigen Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) nicht beide `removeElements` und `elements` Arrays vorhanden sein dürfen und per-Element-Attribute im `elements` Array hinzugefügt werden.
  Der Aufruf wird die Konfiguration nicht ändern und eine Konsolenwarnung generieren.

## Beschreibung

Die `allowElement()` Methode legt fest, dass das angegebene Element in der Ausgabe erlaubt ist, wenn der Sanitizer verwendet wird.

Die Methode kann entweder mit einer [Allow-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) oder einer [Remove-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden.
Wird sie mit einer Allow-Konfiguration verwendet, wird das angegebene Element zum `elements`-Array hinzugefügt.
Wird sie mit einer Remove-Konfiguration verwendet, wird das Element aus dem `removeElements`-Array entfernt (falls vorhanden).
Falls vorhanden, würde es auch aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Array entfernt werden.

Zum Beispiel erstellt der folgende Code einen `Sanitizer` mit der Erlaubnis, {{htmlelement("span")}}-Elemente zu erlauben, und ruft dann `allowElement()` auf, um zusätzlich {{htmlelement("b")}}-Elemente zu erlauben.

```js
const sanitizer = new Sanitizer({ elements: ["span"] });
sanitizer.allowElement("b");
```

Bei der Verwendung eines `Sanitizer` mit einer Allow-Konfiguration können Sie die Methode auch verwenden, um Attribute anzugeben, die bei Elementen dieses Typs erlaubt oder nicht erlaubt sind.
Zum Beispiel erstellt der folgende Code zunächst eine Allow-Sanitizer-Konfiguration, indem das `elements`-Array angegeben wird (das Erstellen eines `Sanitizer` mit einem leeren Objekt oder keinem Konfigurationsobjekt würde auch zu einer "Allow-Konfiguration" führen).
Dann ruft es `allowElement()` auf, um `div`-Elemente zu erlauben, das `class`-Attribut auf `<div>`-Elementen zu erlauben, und das `lang`-Attribut auf `<div>`-Elementen zu entfernen.

```js
const sanitizer = new Sanitizer({ elements: ["span"] });
sanitizer.allowElement({
  name: "div",
  attributes: ["class"],
  removeAttributes: ["lang"],
});
```

Wenn Sie sowohl per-Element-Zusatzattribut- als auch Entfernungsattribut-Arrays wie oben gezeigt benötigen, müssen sie in einem einzigen Aufruf dieser Methode hinzugefügt werden.
Würden Sie dies in zwei Aufrufen tun, würde der zweite Aufruf die im ersten Aufruf hinzugefügte Elementdefinition ersetzen.

Bei der Verwendung eines `Sanitizer` mit einer [Remove-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) wird ähnlicher Code zum Hinzufügen von per-Element-Attributerlauben- oder entfernen-Arrays eine Konsolenwarnung generieren und `false` zurückgeben.
Dies liegt daran, dass der Sanitizer intern nicht das `elements`-Array hat, das für die Angabe von per-Element-Attributen erforderlich ist, und die Konfiguration nicht ändern wird.

```js example-bad
// Define Sanitizer with a remove configuration
// by specifying removeElements in the configuration
const sanitizer = new Sanitizer({ removeElements: [] });
// Returns false and raises a console warning
sanitizer.allowElement({
  name: "div",
  attributes: ["class"],
  removeAttributes: ["lang"],
});
```

## Beispiele

### Anleitung zur Erlaubnis von Elementen

Dieses Beispiel zeigt, wie `allowElement()` verwendet wird, um ein Element zur [`elements`-Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) des Sanitizers (der Liste der erlaubten Elemente) hinzuzufügen.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

#### JavaScript

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das zunächst {{htmlelement("div")}}- und {{htmlelement("script")}}-Elemente erlaubt.
Dann wird `allowElement()` aufgerufen, um ein {{htmlelement("p")}}-Element hinzuzufügen, das als String-Parameter angegeben wird, und dann erneut, um ein {{htmlelement("span")}}-Element hinzuzufügen, das als Objekt angegeben wird.
Wir erhalten und protokollieren dann die Konfiguration.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: ["div", "script"],
});

// Allow <p> specifying a string
sanitizer.allowElement("p");

// Allow <span> specifying an object
sanitizer.allowElement({ name: "span" });

let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Die endgültige Konfiguration wird unten protokolliert.
Diese umfasst die ursprünglichen Elemente (`<div>` und `<script>`) und die beiden mit `allowElement()` hinzugefügten (`<p>` und `<span>`).

{{EmbedLiveSample("How to allow elements","100","480px")}}

### Erlauben von Elementen, die bereits erlaubt oder entfernt sind

Dieses Beispiel zeigt die Auswirkungen der Verwendung von `allowElement()`, um Elemente hinzuzufügen, die bereits erlaubt sind oder in der Konfiguration als "zu entfernen" markiert sind.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

#### JavaScript

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das zunächst {{htmlelement("div")}}-Elemente erlaubt (die Attribute außer `id` entfernt) und außerdem {{htmlelement("span")}}-Elemente durch beliebige Kindelemente ersetzt.

Dann ruft es `allowElement()` auf, zunächst um ein {{htmlelement("div")}}-Element hinzuzufügen, das `style`-Attribute entfernt.
Da das `<div>`-Element bereits erlaubt ist, wird es aus der [`elements`-Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>`-Elementdefinition angehängt.

Ein {{htmlelement("span")}}-Element wird dann zur Erlaubnisliste hinzugefügt, was es aus der [`replaceWithChildrenElements`-Konfigurationsliste](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: [{ name: "div", attributes: [{ name: "id" }] }],
  replaceWithChildrenElements: ["span"],
});

// Allow <div> elements.
// Allow id elements but strip their style attributes
sanitizer.allowElement({
  name: "div",
  removeAttributes: ["style"],
});

// Allow <span> elements
sanitizer.allowElement("span");

let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Die endgültige Konfiguration wird protokolliert und unten angezeigt.
Aus dem Protokoll kann man erkennen, dass der ursprüngliche Filter für das `<div>`-Element entfernt und die neue Definition der `elements`-Liste hinzugefügt wurde.
Das Hinzufügen des `<span>`-Elements zur `elements`-Liste hat es aus der `replaceWithChildrenElements`-Liste entfernt.

{{EmbedLiveSample("Allowing elements that are already allowed or removed","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
