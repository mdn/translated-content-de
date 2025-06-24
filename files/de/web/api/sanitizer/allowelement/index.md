---
title: "Sanitizer: allowElement()-Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowElement()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass das angegebene Element im Ausgang erlaubt ist, wenn der Sanitizer verwendet wird. Das Element kann mit Listen von Attributen angegeben werden, die bei Elementen dieses Typs erlaubt oder nicht erlaubt sind.

Das angegebene Element wird zu der [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Liste in der Konfiguration dieses Sanitizers hinzugefügt. Wenn das Element bereits in der Liste vorhanden ist, wird der bestehende Eintrag zuerst entfernt und die neue Definition wird an das Ende der Liste angehängt. Beachten Sie, dass, wenn Sie sowohl für ein Element eine Hinzufüg-Attribut- als auch eine Entfern-Attribut-Liste benötigen, diese in einem einzigen Aufruf dieser Methode hinzugefügt werden müssen (da bei zwei separaten Aufrufen der zweite Aufruf die in dem ersten hinzugefügte Elementdefinition ersetzen würde).

Das angegebene Element wird aus den Listen [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) oder [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) der Sanitizer-Konfiguration entfernt, falls es dort vorhanden ist.

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

      - : Ein Array, das die beim Bereinigen von HTML auf diesem (erlaubten) Element erlaubten Attribute angibt.

        Jedes Attribut kann durch Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

    - `removeAttributes` {{optional_inline}}

      - : Ein Array, das die bei diesem (erlaubten) Element zu entfernenden Attribute beim Bereinigen von HTML angibt.

        Jedes Attribut kann durch Namen (einen String) oder als Objekt mit den folgenden Eigenschaften spezifiziert werden:

        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zum Erlauben von Elementen

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfangs {{htmlelement("div")}}- und {{htmlelement("script")}}-Elemente erlaubt. Dann wird `allowElement()` aufgerufen, um ein {{htmlelement("p")}}-Element hinzuzufügen, das als String-Parameter spezifiziert ist, und dann erneut, um ein {{htmlelement("span")}}-Element, das als Objekt spezifiziert ist, hinzuzufügen. Wir erhalten und protokollieren dann die Konfiguration.

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

Die endgültige Konfiguration wird unten protokolliert. Diese enthält die ursprünglichen Elemente (`<div>` und `<script>`) und die zwei mit `allowElement()` hinzugefügten (`<p>` und `<span>`).

{{EmbedLiveSample("How to allow elements","100","480px")}}

### Erlauben von Elementen, die bereits erlaubt oder entfernt wurden

Dieses Beispiel zeigt den Effekt der Verwendung von `allowElement()`, um Elemente hinzuzufügen, die bereits erlaubt sind oder in der Konfiguration als "zu entfernen" markiert sind.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfangs {{htmlelement("div")}}-Elemente erlaubt (andere Attribute als `id` werden entfernt) und auch {{htmlelement("span")}}-Elemente mit ihren Kinder-Elementen ersetzt.

Dann wird `allowElement()` aufgerufen, um ein {{htmlelement("div")}}-Element hinzuzufügen, das `style`-Attribute entfernt. Da das `<div>`-Element bereits erlaubt ist, wird es aus der [`elements`-Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>`-Elementdefinition wird angehängt.

Ein {{htmlelement("span")}}-Element wird dann zur Erlauben-Liste hinzugefügt, was es aus der [`replaceWithChildrenElements`-Konfigurationsliste](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt.

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

Die endgültige Konfiguration wird protokolliert und unten angezeigt. Aus dem Protokoll können wir sehen, dass der ursprüngliche Filter für das `<div>`-Element entfernt wurde und die neue Definition zur `elements`-Liste hinzugefügt wurde. Das Hinzufügen des `<span>`-Elements zur `elements`-Liste hat es aus der `replaceWithChildrenElements`-Liste entfernt.

{{EmbedLiveSample("Allowing elements that are already allowed or removed","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
