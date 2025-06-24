---
title: "Sanitizer: removeElement() Methode"
short-title: removeElement()
slug: Web/API/Sanitizer/removeElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeElement()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass ein Element nicht erlaubt ist – es wird aus dem Input entfernt, wenn der Sanitizer verwendet wird.

Das angegebene Element wird zur Liste der [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) in der Konfiguration dieses Sanitizers hinzugefügt. Das Element wird von den Listen [`elements`](/de/docs/Web/API/SanitizerConfig#elements) oder [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) entfernt, falls es dort vorhanden ist.

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

### Rückgabewerte

Keiner (`undefined`).

## Beispiele

### Anleitung, um Elemente nicht zuzulassen

Dieses Beispiel zeigt, wie `removeElement()` verwendet wird, um ein Element als „nicht erlaubt“ festzulegen.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfänglich {{htmlelement("div")}}- und {{htmlelement("script")}}-Elemente zulässt und {{htmlelement("span")}}-Elemente durch ihre Kindelemente ersetzt.

Der Code ruft dann `removeElement()` auf, um {{htmlelement("p")}}, `<script>` und `<span>`-Elemente zur [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)-Liste in der Konfiguration hinzuzufügen. Beachten Sie, dass durch das Hinzufügen von `<script>` und `<span>` die Elemente aus ihren ursprünglichen Listen entfernt werden.

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
> Diese Konfiguration wird nur zu Demonstrationszwecken bereitgestellt. Sanitizer-Konfigurationen sollten entweder nur die erlaubten Elemente ([`elements`](/de/docs/Web/API/SanitizerConfig#elements)) oder nur die nicht erlaubten Elemente ([`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements)) enthalten, aber nicht beide. In diesem Fall ist nur das `<div>`-Element erlaubt und alle anderen Elemente werden aus dem Input entfernt: Somit haben die entfernten Elemente keine Wirkung.

#### Ergebnisse

Die endgültige Konfiguration wird unten protokolliert.

{{EmbedLiveSample("How to disallow elements","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
