---
title: "Sanitizer: allowElement() Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Die **`allowElement()`** Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer) Interface legt fest, dass das angegebene Element im Output zulässig ist, wenn der Sanitizer verwendet wird. Das Element kann mit Listen von Attributen angegeben werden, die an diesem Elementtyp erlaubt oder nicht erlaubt sind.

Das angegebene Element wird zur [`elements`](/de/docs/Web/API/SanitizerConfig#elements) Liste in der Konfiguration dieses Sanitizers hinzugefügt. Wenn das Element bereits in der Liste vorhanden ist, wird der bestehende Eintrag zuerst entfernt und die neue Definition wird am Ende der Liste angehängt. Beachten Sie, dass, wenn Sie sowohl elementbasierte Hinzufügens- als auch Entfernens-Attributlisten benötigen, diese in einem einzigen Aufruf dieser Methode hinzugefügt werden müssen (da bei zwei separaten Aufrufen der zweite Aufruf die in der ersten Aufruf hinzugefügte Elementdefinition ersetzen würde).

Das angegebene Element wird aus der Sanitizer-Konfiguration [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) oder [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Listen entfernt, falls es vorhanden ist.

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

      - : Ein Array, das die Attribute angibt, die an diesem (erlaubten) Element beim Sanitizing von HTML erlaubt sind.

        Jedes Attribut kann durch seinen Namen (einen String) angegeben werden oder als ein Objekt mit den folgenden Eigenschaften:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die an diesem (erlaubten) Element beim Sanitizing von HTML entfernt werden sollen.

        Jedes Attribut kann durch seinen Namen (einen String) angegeben werden oder als ein Objekt mit den folgenden Eigenschaften:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig `null` ist.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zur Zulassung von Elementen

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

Der Code erstellt zunächst ein neues `Sanitizer` Objekt, das anfänglich {{htmlelement("div")}} und {{htmlelement("script")}} Elemente erlaubt. Anschließend wird `allowElement()` aufgerufen, um ein {{htmlelement("p")}} Element hinzuzufügen, das als String-Parameter spezifiziert ist, und dann erneut, um ein {{htmlelement("span")}} Element hinzuzufügen, das als Objekt spezifiziert ist. Wir holen dann die Konfiguration und protokollieren sie.

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

Die endgültige Konfiguration wird unten protokolliert. Sie enthält die ursprünglichen Elemente (`<div>` und `<script>`) und die beiden mit `allowElement()` hinzugefügten (`<p>` und `<span>`).

{{EmbedLiveSample("Anleitung zur Zulassung von Elementen","100","480px")}}

### Zulassung von Elementen, die bereits erlaubt oder entfernt wurden

Dieses Beispiel zeigt die Wirkung der Verwendung von `allowElement()`, um Elemente hinzuzufügen, die bereits erlaubt sind oder die in der Konfiguration als "zu entfernen" stehen.

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

Der Code erstellt zunächst ein neues `Sanitizer` Objekt, das anfänglich {{htmlelement("div")}} Elemente erlaubt (mit Ausnahme von `id`-Attributen) und {{htmlelement("span")}} Elemente zusammen mit deren Kindelementen ersetzt.

Anschließend wird `allowElement()` aufgerufen, um zunächst ein {{htmlelement("div")}} Element hinzuzufügen, das `style`-Attribute entfernt. Da das `<div>`-Element bereits erlaubt ist, wird es aus der [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>`-Elementdefinition wird angehängt.

Ein {{htmlelement("span")}} Element wird dann zur Erlauben-Liste hinzugefügt, wodurch es aus der [`replaceWithChildrenElements` Konfigurationsliste](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt wird.

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

Die endgültige Konfiguration wird protokolliert und unten angezeigt. Aus dem Log können wir sehen, dass der ursprüngliche Filter für das `<div>` Element entfernt wurde und die neue Definition zur `elements` Liste hinzugefügt wurde. Das Hinzufügen des `<span>` Elements zur `elements` Liste hat es aus der `replaceWithChildrenElements` Liste entfernt.

{{EmbedLiveSample("Zulassung von Elementen, die bereits erlaubt oder entfernt wurden","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
