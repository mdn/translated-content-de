---
title: "Sanitizer: removeElement()-Methode"
short-title: removeElement()
slug: Web/API/Sanitizer/removeElement
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeElement()`**-Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces sorgt dafür, dass das angegebene Element aus der Ausgabe entfernt wird, wenn der Sanitizer verwendet wird.

Die Methode kann entweder mit einer [Zulassungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) oder einer [Entfernungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden.
Wenn sie mit einer Entfernungskonfiguration verwendet wird, wird das angegebene Element dem `removeElements`-Array hinzugefügt.
Wenn sie mit einer Zulassungskonfiguration verwendet wird, wird das Element aus dem `elements`-Array entfernt (falls vorhanden).

## Syntax

```js-nolint
removeElement(element)
```

### Parameter

- `element`
  - : Ein String, der den Namen des nicht erlaubten Elements angibt, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Elements enthält.
        Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, um das Element nicht zu erlauben, und `false`, wenn das Element bereits nicht erlaubt war.

Beachten Sie, dass `false` zurückgegeben werden kann, wenn die interne Konfiguration:

- ein [`elements`](/de/docs/Web/API/SanitizerConfig#elements)-Array definiert und das Element bereits weggelassen wird (es muss nicht entfernt werden)
- stattdessen ein [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Array definiert und das angegebene Element bereits vorhanden ist (und daher bereits gefiltert wird)

## Beispiele

### Anleitung zum Nicht-Erlauben von Elementen

Dieses Beispiel zeigt, wie `removeElement()` verwendet wird, um ein Element als "nicht erlaubt" zu spezifizieren.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 420px;
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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das anfänglich {{htmlelement("div")}}- und {{htmlelement("script")}}-Elemente zulässt und {{htmlelement("span")}}-Elemente durch ihre Kind-Elemente ersetzt.

Der Code ruft dann `removeElement()` auf, um {{htmlelement("p")}}, `<script>`- und `<span>`-Elemente zur [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Liste in der Konfiguration hinzuzufügen.
Beachten Sie, dass das Hinzufügen von `<script>` und `<span>` die Elemente aus ihren ursprünglichen Listen entfernt.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: ["div", "script"],
  replaceWithChildrenElements: ["span"],
});

// Disallow the <p> element
sanitizer.removeElement("p");

// Disallow the <script> element
sanitizer.removeElement("script");
// Disallow the <span> element
sanitizer.removeElement("span");

// Log the sanitizer configuration
let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

> [!NOTE]
> Diese Konfiguration dient nur zu Demonstrationszwecken.
> Sanitizer-Konfigurationen sollten entweder nur die erlaubten Elemente ([`elements`](/de/docs/Web/API/SanitizerConfig#elements)) oder nur die nicht erlaubten Elemente ([`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)) enthalten, aber nicht beides.
> In diesem Fall ist nur das `<div>`-Element erlaubt und alle anderen Elemente werden aus der Eingabe entfernt: Die entfernten Elemente haben daher keine Wirkung.

#### Ergebnisse

Die endgültige Konfiguration wird unten protokolliert.

{{EmbedLiveSample("Anleitung zum Nicht-Erlauben von Elementen","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
