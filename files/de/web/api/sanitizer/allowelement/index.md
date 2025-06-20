---
title: "Sanitizer: allowElement() Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowElement()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle legt fest, dass das angegebene Element im Output erlaubt ist, wenn der Sanitizer verwendet wird. Das Element kann mit Listen von Attributen angegeben werden, die für Elemente dieses Typs erlaubt oder unzulässig sind.

Das angegebene Element wird zur [`elements`](/de/docs/Web/API/SanitizerConfig#elements) Liste in der Konfiguration dieses Sanitizers hinzugefügt. Wenn das Element bereits in der Liste vorhanden ist, wird der bestehende Eintrag zuerst entfernt und die neue Definition am Ende der Liste angefügt. Beachten Sie, dass, wenn Sie sowohl pro Element Attribute hinzufügen als auch entfernen möchten, diese in einem einzigen Aufruf dieser Methode hinzugefügt werden müssen (da der zweite Aufruf sonst die Elementdefinition, die im ersten Aufruf hinzugefügt wurde, ersetzen würde).

Das angegebene Element wird aus der Sanitizer-Konfiguration [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) oder [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Listen entfernt, falls vorhanden.

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
      - : Ein String, der den Namensraum des Elements enthält. Der Standardnamensraum ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die bei der Bereinigung von HTML für dieses (erlaubte) Element erlaubt sind.

        Jedes Attribut kann nach Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

    - `removeAttributes` {{optional_inline}}

      - : Ein Array, das die Attribute angibt, die bei der Bereinigung von HTML von diesem (erlaubten) Element entfernt werden sollen.

        Jedes Attribut kann nach Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabe

Keine (`undefined`).

## Beispiele

### Anleitung zum Erlauben von Elementen

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das initial {{htmlelement("div")}} und {{htmlelement("script")}} Elemente erlaubt. Anschließend wird `allowElement()` aufgerufen, um ein {{htmlelement("p")}} Element hinzuzufügen, das als String-Parameter spezifiziert ist, und dann erneut, um ein {{htmlelement("span")}} Element hinzuzufügen, das als Objekt spezifiziert ist. Anschließend holen wir die Konfiguration und protokollieren sie.

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

Die finale Konfiguration wird unten protokolliert. Diese beinhaltet die ursprünglichen Elemente (`<div>` und `<script>`) und die beiden mit `allowElement()` hinzugefügten (`<p>` und `<span>`).

{{EmbedLiveSample("How to allow elements","100","480px")}}

### Erlauben von Elementen, die bereits erlaubt oder entfernt sind

Dieses Beispiel zeigt die Auswirkung der Verwendung von `allowElement()`, um Elemente hinzuzufügen, die bereits erlaubt sind oder die in der Konfiguration als "zu entfernen" gekennzeichnet sind.

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das anfänglich {{htmlelement("div")}} Elemente erlaubt (wobei andere Attribute als `id` entfernt werden) und auch {{htmlelement("span")}} Elemente mit beliebigen Kindelementen ersetzt.

Anschließend wird `allowElement()` aufgerufen, zunächst um ein {{htmlelement("div")}} Element hinzuzufügen, das `style` Attribute entfernt. Da das `<div>` Element bereits erlaubt ist, wird es aus der [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>` Elementdefinition angefügt.

Ein {{htmlelement("span")}} Element wird dann zur Erlaubnisliste hinzugefügt, wodurch es aus der [`replaceWithChildrenElements` Konfigurationsliste](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt wird.

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

Die finale Konfiguration wird protokolliert und unten angezeigt. Aus dem Protokoll sehen wir, dass der ursprüngliche Filter für das `<div>` Element entfernt und die neue Definition zur `elements` Liste hinzugefügt wurde. Das Hinzufügen des `<span>` Elements zur `elements` Liste hat es aus der `replaceWithChildrenElements` Liste entfernt.

{{EmbedLiveSample("Allowing elements that are already allowed or removed","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
