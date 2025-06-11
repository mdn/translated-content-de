---
title: "Sanitizer: allowElement() Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowElement()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle legt fest, dass das angegebene Element im Ergebnis erlaubt ist, wenn der Sanitizer verwendet wird.
Das Element kann mit Listen von Attributen spezifiziert werden, die bei Elementen dieses Typs erlaubt oder nicht erlaubt sind.

Das angegebene Element wird zur [`elements`](/de/docs/Web/API/SanitizerConfig#elements) Liste in der Konfiguration dieses Sanitizers hinzugefügt.
Wenn das Element bereits in der Liste vorhanden ist, wird der vorhandene Eintrag zuerst entfernt und die neue Definition am Ende der Liste angehängt.
Beachten Sie, dass, wenn Sie sowohl für das Hinzufügen als auch das Entfernen von Attributen pro Element arbeiten möchten, diese in einem einzigen Aufruf dieser Methode hinzugefügt werden müssen (da bei zwei separaten Aufrufen der zweite Aufruf die im ersten hinzugefügte Elementdefinition ersetzen würde).

Das angegebene Element wird aus der Sanitizer-Konfiguration von den [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) oder [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Listen entfernt, falls vorhanden.

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

      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Bereinigen von HTML erlaubt sind.

        Jedes Attribut kann durch einen Namen (einen String) angegeben werden, oder als ein Objekt mit den folgenden Eigenschaften:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, welcher standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Bereinigen von HTML entfernt werden.

        Jedes Attribut kann durch einen Namen (einen String) angegeben werden, oder als ein Objekt mit den folgenden Eigenschaften:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, welcher standardmäßig `null` ist.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zum Erlauben von Elementen

Dieses Beispiel zeigt, wie `allowElement()` verwendet wird, um ein Element zur [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) des Sanitizers (die Liste der erlaubten Elemente) hinzuzufügen.

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

Der Code erstellt zunächst ein neues `Sanitizer` Objekt, das anfangs {{htmlelement("div")}} und {{htmlelement("script")}} Elemente erlaubt.
Dann wird `allowElement()` aufgerufen, um ein {{htmlelement("p")}} Element hinzuzufügen, das als String-Parameter angegeben ist, und nochmals, um ein {{htmlelement("span")}} Element hinzuzufügen, das als Objekt angegeben ist.
Wir erhalten dann die Konfiguration und protokollieren sie.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: ["div", "script"],
});

// Allow <p> specifying an string
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
Dies umfasst die ursprünglichen Elemente (`<div>` und `<script>`) und die beiden mit `allowElement()` hinzugefügten (`<p>` und `<span>`).

{{EmbedLiveSample("Anleitung zum Erlauben von Elementen","100","480px")}}

### Erlauben von bereits erlaubten oder entfernten Elementen

Dieses Beispiel zeigt die Wirkung von `allowElement()`, wenn Elemente hinzugefügt werden, die bereits erlaubt sind, oder die in der Konfiguration als "zu entfernen" festgelegt sind.

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

Der Code erstellt zunächst ein neues `Sanitizer` Objekt, das anfänglich {{htmlelement("div")}} Elemente erlaubt (außer `id` Attributen andere Attribute entfernend) und auch {{htmlelement("span")}} Elemente mit allen Kinderelementen ersetzt.

Dann wird `allowElement()` aufgerufen, um zuerst ein {{htmlelement("div")}} Element mit Entfernung von `style` Attributen hinzuzufügen.
Da das `<div>` Element bereits erlaubt ist, wird es aus der [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>` Elementdefinition wird angehängt.

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

Die endgültige Konfiguration wird protokolliert und unten angezeigt.
Aus dem Log können wir sehen, dass der ursprüngliche Filter für das `<div>` Element entfernt wurde und die neue Definition der `elements`-Liste hinzugefügt wurde.
Das Hinzufügen des `<span>` Elements zur `elements`-Liste hat es von der `replaceWithChildrenElements`-Liste entfernt.

{{EmbedLiveSample("Erlauben von bereits erlaubten oder entfernten Elementen","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
