---
title: "Sanitizer: allowElement() Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: 2290fdbf9d5cf68482245d07d388b883156058ac
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowElement()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass das angegebene Element in der Ausgabe erlaubt ist, wenn der Sanitizer verwendet wird.

Sie kann auch verwendet werden, um für `Sanitizer`-Instanzen mit einer [Erlauben-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) erlaubte oder zu entfernende Attribute pro Element anzugeben.

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
      - : Ein String, der den Namensraum des Elements enthält.
        Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei der Bereinigung von HTML auf diesem (erlaubten) Element erlaubt sind.

        Jedes Attribut kann durch den Namen (einen String) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, standardmäßig `null`.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei der Bereinigung von HTML auf diesem (erlaubten) Element entfernt werden sollen.

        Jedes Attribut kann durch den Namen (einen String) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, standardmäßig `null`.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, um das Element zu erlauben, und `false`, wenn die Konfiguration nicht geändert wurde (in der Regel, weil das Element bereits erlaubt war, möglicherweise aber auch, weil die Änderung nicht durchgeführt werden konnte).

Beachten Sie, dass `false` zurückgegeben werden könnte, wenn die interne Konfiguration:

- das [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Array definiert und das Element bereits vorhanden ist (es muss nicht erneut hinzugefügt werden).
- das [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Array definiert und das angegebene Element nicht vorhanden ist (und daher bereits nicht gefiltert wird).
- das [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Array definiert und versucht, ein Element mit per-Element-Attributen zuzulassen.
  Diese Operation wird nicht unterstützt, weil man in einer [gültigen Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) nicht sowohl `removeElements` als auch `elements` Arrays haben kann, und per-Element-Attribute werden im `elements` Array hinzugefügt.
  Der Aufruf ändert nicht die Konfiguration und erzeugt eine Konsolenwarnung.

## Beschreibung

Die `allowElement()`-Methode legt fest, dass das angegebene Element in der Ausgabe erlaubt ist, wenn der Sanitizer verwendet wird.

Die Methode kann entweder mit einer [Erlauben-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) oder einer [Entfernen-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden.
Wenn sie mit einer Erlauben-Konfiguration verwendet wird, wird das angegebene Element dem `elements` Array hinzugefügt.
Wenn sie mit einer Entfernen-Konfiguration verwendet wird, wird das Element aus dem `removeElements` Array entfernt (falls vorhanden).
Falls vorhanden, wird es auch aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements)-Array entfernt.

Zum Beispiel erstellt der folgende Code einen erlaubenden `Sanitizer`, der {{htmlelement("span")}}-Elemente erlaubt, und ruft dann `allowElement()` auf, um zusätzlich {{htmlelement("b")}}-Elemente zuzulassen.

```js
const sanitizer = new Sanitizer({ elements: ["span"] });
sanitizer.allowElement("b");
```

Wenn Sie einen `Sanitizer` mit einer Erlauben-Konfiguration verwenden, können Sie die Methode auch verwenden, um Attribute für Elemente dieses Typs zuzulassen oder abzulehnen.
Zum Beispiel erstellt der folgende Code zuerst eine erlaubende Sanitizer-Konfiguration, indem das `elements` Array spezifiziert wird (auch die Erstellung eines `Sanitizer` mit einem leeren Objekt oder keinem Konfigurationsobjekt würde zu einer "Erlauben-Konfiguration" führen).
Dann wird `allowElement()` aufgerufen, um `div`-Elemente zuzulassen, das `class`-Attribut auf `<div>`-Elementen zu erlauben und das `lang`-Attribut auf `<div>`-Elementen zu entfernen.

```js
const sanitizer = new Sanitizer({ elements: ["span"] });
sanitizer.allowElement({
  name: "div",
  attributes: ["class"],
  removeAttributes: ["lang"],
});
```

Wenn Sie sowohl per-Element-Add-Attribute- und Remove-Attribute-Arrays wie oben gezeigt benötigen, müssen diese in einem einzigen Aufruf dieser Methode hinzugefügt werden.
Wenn Sie dies in zwei Aufrufen tun würden, würde der zweite Aufruf die im ersten Aufruf hinzugefügte Elementdefinition ersetzen.

Wenn Sie einen `Sanitizer` mit einer [Entfernen-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwenden, wird ähnlicher Code zum Hinzufügen von Per-Element-Attribut-Arrays oder zum Entfernen solcher einen Konsolenwarnung generieren und `false` zurückgeben.
Dies liegt daran, dass der Sanitizer intern nicht das `elements`-Array hat, das erforderlich ist, um Per-Element-Attribute zu spezifizieren, und die Konfiguration nicht verändern kann.

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

Dieses Beispiel zeigt, wie `allowElement()` verwendet wird, um ein Element zur [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) des Sanitizers hinzuzufügen (die Liste der erlaubten Elemente).

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das initial {{htmlelement("div")}} und {{htmlelement("script")}} Elemente erlaubt.
Anschließend wird `allowElement()` aufgerufen, um ein {{htmlelement("p")}}-Element hinzuzufügen, das als String-Parameter angegeben wird, und dann erneut, um ein {{htmlelement("span")}}-Element hinzuzufügen, das als Objekt spezifiziert ist.
Wir holen uns dann die Konfiguration und protokollieren sie.

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
Diese schließt die ursprünglichen Elemente (`<div>` und `<script>`) und die beiden mit `allowElement()` hinzugefügten (`<p>` und `<span>`) ein.

{{EmbedLiveSample("Anleitung zur Erlaubnis von Elementen","100","480px")}}

### Erlauben von Elementen, die bereits erlaubt oder entfernt wurden

Dieses Beispiel zeigt die Wirkung der Verwendung von `allowElement()`, um Elemente hinzuzufügen, die bereits erlaubt sind oder die in der Konfiguration als "zu entfernen" gekennzeichnet sind.

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das initial {{htmlelement("div")}}-Elemente erlaubt (und Attribute außer `id` entfernt) und auch {{htmlelement("span")}}-Elemente durch deren Kind-Elemente ersetzt.

Dann wird `allowElement()` aufgerufen, um ein {{htmlelement("div")}}-Element hinzuzufügen, das `style`-Attribute entfernt.
Da das `<div>`-Element bereits erlaubt ist, wird es aus der [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>`-Element-Definition angehängt.

Ein {{htmlelement("span")}}-Element wird dann der Erlauben-Liste hinzugefügt, wodurch es aus der [`replaceWithChildrenElements` Konfigurationsliste](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt wird.

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

Die endgültige Konfiguration wird protokolliert und ist unten gezeigt.
Aus dem Protokoll können wir sehen, dass der ursprüngliche Filter für das `<div>`-Element entfernt und die neue Definition zur `elements`-Liste hinzugefügt wurde.
Das Hinzufügen des `<span>`-Elements zur `elements`-Liste hat es aus der `replaceWithChildrenElements`-Liste entfernt.

{{EmbedLiveSample("Erlauben von Elementen, die bereits erlaubt oder entfernt wurden","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
