---
title: "Sanitizer: allowElement() Methode"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowElement()`** Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer) Interface legt fest, dass das angegebene Element in der Ausgabe erlaubt ist, wenn der Sanitizer verwendet wird.
Das Element kann mit Listen von Attributen angegeben werden, die an Elementen dieses Typs erlaubt oder nicht erlaubt sind.

Das angegebene Element wird in die [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Liste in dieser Konfiguration des Sanitizers hinzugefügt.
Wenn das Element bereits in der Liste vorhanden ist, wird der bestehende Eintrag zuerst entfernt und die neue Definition am Ende der Liste hinzugefügt.
Beachten Sie, dass wenn Sie sowohl elementweise Hinzufüg- als auch Entfernliste benötigen, diese in einem einzigen Aufruf dieser Methode hinzugefügt werden müssen (da der zweite Aufruf bei zwei Aufrufen die in der ersten Aufruf hinzugefügte Elementdefinition ersetzen würde).

Das angegebene Element wird aus den Listen [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) oder [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) der Sanitizer-Konfiguration entfernt, wenn es vorhanden ist.

## Syntax

```js-nolint
allowElement(element)
```

### Parameter

- `element`
  - : Ein String, der den Namen des erlaubten Elements angibt oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält.
        Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die für dieses (erlaubte) Element beim HTML-Sanitizing erlaubt sind.

        Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

    - `removeAttributes` {{optional_inline}}
      - : Ein Array, das die Attribute angibt, die bei diesem (erlaubten) Element beim HTML-Sanitizing entfernt werden sollen.

        Jedes Attribut kann durch seinen Namen (ein String) oder als Objekt mit den folgenden Eigenschaften angegeben werden:
        - `name`
          - : Ein String, der den Namen des Attributs enthält.
        - `namespace` {{optional_inline}}
          - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zum Zulassen von Elementen

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das zunächst {{htmlelement("div")}} und {{htmlelement("script")}} Elemente erlaubt.
Dann wird `allowElement()` aufgerufen, um ein {{htmlelement("p")}}-Element hinzuzufügen, das als String-Parameter angegeben ist, und dann erneut, um ein {{htmlelement("span")}}-Element hinzuzufügen, das als Objekt angegeben ist.
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
Dies beinhaltet die ursprünglichen Elemente (`<div>` und `<script>`) und die beiden mit `allowElement()` hinzugefügten (`<p>` und `<span>`).

{{EmbedLiveSample("How to allow elements","100","480px")}}

### Zulassen von bereits erlaubten oder entfernten Elementen

Dieses Beispiel zeigt die Wirkung der Verwendung von `allowElement()`, um Elemente hinzuzufügen, die bereits erlaubt sind oder in der Konfiguration als "zu entfernen" markiert sind.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das zunächst {{htmlelement("div")}}-Elemente erlaubt (mit Ausnahme von `id`-Attributen) und außerdem {{htmlelement("span")}}-Elemente mit beliebigen Kind-Elementen ersetzt.

Dann wird `allowElement()` aufgerufen, zuerst um ein {{htmlelement("div")}}-Element hinzuzufügen, das `style`-Attribute entfernt.
Da das `<div>`-Element bereits erlaubt ist, wird es aus der [`elements` Konfiguration](/de/docs/Web/API/SanitizerConfig#elements) entfernt und die `<div>`-Elementdefinition wird angehängt.

Ein {{htmlelement("span")}}-Element wird dann zur Liste der erlaubten Elemente hinzugefügt, was es aus der [`replaceWithChildrenElements` Konfigurationsliste](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt.

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
Aus dem Protokoll können wir sehen, dass der ursprüngliche Filter für das `<div>`-Element entfernt und die neue Definition zur `elements`-Liste hinzugefügt wurde.
Das Hinzufügen des `<span>`-Elements zur `elements`-Liste hat es aus der `replaceWithChildrenElements`-Liste entfernt.

{{EmbedLiveSample("Allowing elements that are already allowed or removed","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
