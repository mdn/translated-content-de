---
title: "Sanitizer: allowElement() Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowElement()`** Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces legt fest, dass das angegebene Element im Output erlaubt ist, wenn der Sanitizer verwendet wird.

Sie kann auch genutzt werden, um auf `Sanitizer`-Instanzen mit einer [Erlaubnis-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) attributspezifische Erlaubnis- oder Entfernen-Arrays für bestimmte Elemente festzulegen.

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
      - : Ein String, der den Namespace des Elements enthält.
        Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element beim Säubern von HTML erlaubt sind.

        Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die auf diesem (erlaubten) Element beim Säubern von HTML entfernt werden sollen.

        Jedes Attribut kann durch den Namen (ein String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, um das Element zu erlauben, und `false`, wenn die Konfiguration nicht geändert wurde (normalerweise, weil das Element bereits erlaubt war, aber potenziell, weil die Änderung nicht vorgenommen werden konnte).

Beachten Sie, dass `false` zurückgegeben werden kann, wenn die interne Konfiguration:

- das [`elements`](/de/docs/Web/API/SanitizerConfig#elements) Array definiert und das Element bereits vorhanden ist (es muss nicht erneut hinzugefügt werden).
- das [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) Array definiert und das angegebene Element nicht vorhanden ist (und daher bereits nicht gefiltert wird).
- das [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) Array definiert und versucht, ein Element mit attributspezifischen Erlaubnissen zu erlauben.
  Diese Operation wird nicht unterstützt, da Sie in einer [gültigen Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) nicht sowohl `removeElements` als auch `elements` Arrays haben können, und attributspezifische Erlaubnisse im `elements` Array hinzugefügt werden.
  Der Aufruf wird die Konfiguration nicht ändern und eine Konsolenwarnung generieren.

## Beschreibung

Die `allowElement()` Methode legt fest, dass das angegebene Element im Output erlaubt ist, wenn der Sanitizer verwendet wird.

Die Methode kann entweder mit einer [Erlaubnis-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) oder einer [Entfernungs-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden.
Wenn sie mit einer Erlaubnis-Konfiguration verwendet wird, wird das angegebene Element zum `elements` Array hinzugefügt.
Wird sie mit einer Entfernungs-Konfiguration verwendet, wird das Element aus dem `removeElements` Array entfernt (falls vorhanden).
Falls vorhanden, würde es auch aus dem [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Array entfernt.

Zum Beispiel erstellt der folgende Code einen "Erlauben-Sanitizer", der {{htmlelement("span")}} Elemente erlaubt und dann `allowElement()` aufruft, um zusätzlich {{htmlelement("b")}} Elemente zu erlauben.

```js
const sanitizer = new Sanitizer({ elements: ["span"] });
sanitizer.allowElement("b");
```

Wenn Sie einen `Sanitizer` mit einer Erlaubnis-Konfiguration verwenden, können Sie die Methode auch verwenden, um Attribute zu spezifizieren, die auf Elementen dieses Typs erlaubt oder nicht erlaubt sind.
Zum Beispiel erstellt der folgende Code zuerst eine Erlaubnis-Sanitizer-Konfiguration, indem er das `elements` Array angibt (das Erstellen eines `Sanitizer` mit einem leeren Objekt oder ohne Konfigurationsobjekt würde ebenfalls eine "Erlaubnis-Konfiguration" ergeben).
Dann ruft er `allowElement()` auf, um `div` Elemente zu erlauben, das `class` Attribut auf `<div>` Elementen zu erlauben und das `lang` Attribut auf `<div>` Elementen zu entfernen.

```js
const sanitizer = new Sanitizer({ elements: ["span"] });
sanitizer.allowElement({
  name: "div",
  attributes: ["class"],
  removeAttributes: ["lang"],
});
```

Wenn Sie sowohl attributspezifische Add-Attribute als auch Remove-Attribute Arrays wie oben gezeigt benötigen, müssen sie in einem einzigen Aufruf dieser Methode hinzugefügt werden.
Falls Sie dies in zwei Aufrufen tun würden, würde der zweite Aufruf die Elementdefinition ersetzen, die im ersten Aufruf hinzugefügt wurde.

Wenn Sie einen `Sanitizer` mit einer [Entfernungs-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwenden, wird ähnlicher Code zum Hinzufügen von attributspezifischen Erlaubnis- oder Entfernen-Arrays eine Konsolenwarnung generieren und `false` zurückgeben.
Dies liegt daran, dass der Sanitizer intern nicht das `elements` Array besitzt, das erforderlich ist, um attributspezifische Erlaubnisse zu spezifizieren, und die Konfiguration nicht ändern wird.

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

### Anleitung zum Erlauben von Elementen

Dieses Beispiel zeigt, wie `allowElement()` verwendet wird, um ein Element zur [`elements` Konfiguration des Sanitizers](/de/docs/Web/API/SanitizerConfig#elements) (die Liste der erlaubten Elemente) hinzuzufügen.

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

Der Code erstellt zuerst ein neues `Sanitizer` Objekt, das initial {{htmlelement("div")}} und {{htmlelement("script")}} Elemente erlaubt.
Anschließend wird `allowElement()` aufgerufen, um ein als String-Parameter spezifiziertes {{htmlelement("p")}} Element und dann nochmals, um ein als Objekt spezifiziertes {{htmlelement("span")}} Element hinzuzufügen.
Wir holen dann die Konfiguration und protokollieren diese.

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

{{EmbedLiveSample("Anleitung zum Erlauben von Elementen","100","480px")}}

### Erlauben von Elementen, die bereits erlaubt oder entfernt sind

Dieses Beispiel zeigt die Auswirkungen der Verwendung von `allowElement()`, um Elemente hinzuzufügen, die bereits erlaubt sind oder die in der Konfiguration als "zu entfernen" markiert sind.

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

Der Code erstellt zuerst ein neues `Sanitizer` Objekt, das initial {{htmlelement("div")}} Elemente erlaubt (alle Attribute außer `id` werden entfernt) und auch {{htmlelement("span")}} Elemente durch Kind-Elemente ersetzt.

Anschließend wird `allowElement()` aufgerufen, zunächst um ein {{htmlelement("div")}} Element hinzuzufügen, das `style`-Attribute entfernt.
Da das `<div>` Element bereits erlaubt ist, wird es aus der [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>` Elementdefinition angehängt.

Ein {{htmlelement("span")}} Element wird dann zur Erlauben-Liste hinzugefügt, was es aus der [`replaceWithChildrenElements` Konfigurationsliste](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt.

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

Die endgültige Konfiguration wird protokolliert und ist unten zu sehen.
Aus dem Log können wir ablesen, dass der ursprüngliche Filter für das `<div>` Element entfernt wurde und die neue Definition zur `elements` Liste hinzugefügt wurde.
Das Hinzufügen des `<span>` Elements zur `elements` Liste hat es aus der `replaceWithChildrenElements` Liste entfernt.

{{EmbedLiveSample("Erlauben von Elementen, die bereits erlaubt oder entfernt sind","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
