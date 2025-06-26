---
title: "Sanitizer: allowElement() Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowElement()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle legt fest, dass das angegebene Element im Output erlaubt ist, wenn der Sanitizer verwendet wird.
Das Element kann mit Listen von Attributen angegeben werden, die bei Elementen dieses Typs erlaubt oder nicht erlaubt sind.

Das angegebene Element wird zur [`elements`](/de/docs/Web/API/SanitizerConfig#elements) Liste in der Konfiguration dieses Sanitizers hinzugefügt.
Falls das Element bereits in der Liste vorhanden ist, wird der bestehende Eintrag zuerst entfernt und die neue Definition wird am Ende der Liste hinzugefügt.
Beachten Sie, dass, wenn Sie sowohl pro Element eine Hinzufüge-Attribut- als auch eine Entfern-Attribut-Liste benötigen, diese in einem einzigen Aufruf dieser Methode hinzugefügt werden müssen (da bei zwei Aufrufen der zweite Aufruf die in dem ersten hinzugefügte Elementdefinition ersetzen würde).

Das angegebene Element wird, falls vorhanden, aus den [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) oder [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) Listen der Sanitizer-Konfiguration entfernt.

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
        Der Standardnamespace ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Bereinigen von HTML erlaubt sind.

        Jedes Attribut kann durch seinen Namen (ein String) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String mit dem Namen des Attributs.
        - `namespace` {{optional_inline}}
          - : Ein String mit dem Namespace des Attributs, der standardmäßig `null` ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim Bereinigen von HTML entfernt werden sollen.

        Jedes Attribut kann durch seinen Namen (ein String) oder als ein Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String mit dem Namen des Attributs.
        - `namespace` {{optional_inline}}
          - : Ein String mit dem Namespace des Attributs, der standardmäßig `null` ist.

### Rückgabewert

None (`undefined`).

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

Der Code erstellt zunächst ein neues `Sanitizer` Objekt, das anfänglich {{htmlelement("div")}} und {{htmlelement("script")}} Elemente erlaubt.
Anschließend wird `allowElement()` aufgerufen, um ein {{htmlelement("p")}} Element hinzuzufügen, das als String-Parameter angegeben ist, und dann erneut, um ein {{htmlelement("span")}} Element hinzuzufügen, das als Objekt angegeben ist.
Wir ermitteln dann die Konfiguration und geben sie aus.

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
Diese umfasst die ursprünglichen Elemente (`<div>` und `<script>`) sowie die beiden mit `allowElement()` hinzugefügten (`<p>` und `<span>`).

{{EmbedLiveSample("How to allow elements","100","480px")}}

### Erlauben von Elementen, die bereits erlaubt oder entfernt sind

Dieses Beispiel zeigt die Wirkung der Verwendung von `allowElement()`, um Elemente hinzuzufügen, die bereits erlaubt sind, oder die in der Konfiguration als "zu entfernen" markiert sind.

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

Der Code erstellt zunächst ein neues `Sanitizer` Objekt, das anfänglich {{htmlelement("div")}} Elemente erlaubt (andere Attribute als `id` werden entfernt) und ersetzt auch {{htmlelement("span")}} Elemente durch beliebige Kindelemente.

Anschließend wird `allowElement()` aufgerufen, um zunächst ein {{htmlelement("div")}} Element hinzuzufügen, das `style` Attribute entfernt.
Da das `<div>` Element bereits erlaubt ist, wird es aus der [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>` Elementdefinition angefügt.

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

Die endgültige Konfiguration wird protokolliert und ist unten dargestellt.
Aus dem Protokoll können wir sehen, dass der ursprüngliche Filter für das `<div>` Element entfernt und die neue Definition zur `elements` Liste hinzugefügt wurde.
Das Hinzufügen des `<span>` Elements zur `elements` Liste hat es aus der `replaceWithChildrenElements` Liste entfernt.

{{EmbedLiveSample("Allowing elements that are already allowed or removed","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
