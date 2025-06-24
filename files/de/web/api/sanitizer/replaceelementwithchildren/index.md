---
title: "Sanitizer: replaceElementWithChildren() Methode"
short-title: replaceElementWithChildren()
slug: Web/API/Sanitizer/replaceElementWithChildren
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die Methode **`replaceElementWithChildren()`** der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass ein Element durch seine untergeordneten HTML-Elemente ersetzt wird, wenn der Sanitizer verwendet wird. Sie wird hauptsächlich zum Entfernen von Stilen aus Text verwendet.

Das angegebene Element wird zusammen mit seinem Namensraum zur Liste der [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) in der Konfiguration dieses Sanitizers hinzugefügt. Das Element wird aus den Listen [`elements`](/de/docs/Web/API/SanitizerConfig#elements) oder [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) entfernt, falls es vorhanden ist.

## Syntax

```js-nolint
replaceElementWithChildren(element)
```

### Parameter

- `element`
  - : Ein String, der den Namen des zu ersetzenden Elements angibt, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Elements enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Elements enthält. Der Standard-Namensraum ist `"http://www.w3.org/1999/xhtml"`.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der Methode, indem ein Sanitizer konfiguriert wird, der das `<em>`-Element in Eingaben durch seinen untergeordneten Inhalt ersetzt.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Replace <em> elements with their innerHTML
sanitizer.replaceElementWithChildren("em");
```

### Anleitung zum Entfernen von Stilen aus Text

Dieses Beispiel zeigt, wie `replaceElementWithChildren()` verwendet werden kann, um Stile aus Text zu entfernen.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 480px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

#### JavaScript

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfangs die Elemente {{htmlelement("p")}}, {{htmlelement("em")}} und {{htmlelement("strong")}} zulässt. Anschließend rufen wir `replaceElementWithChildren()` beim Sanitizer auf und geben an, dass `<strong>`-Elemente ersetzt werden sollen.

Der Code definiert einen String, der `<strong>`-Elemente enthält und verwendet [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Sanitizer, um den String einzufügen. Der ursprüngliche String, das bereinigte HTML aus dem Element und der Sanitizer werden protokolliert.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: ["p", "em", "strong"],
});

// Replace the <strong> element
sanitizer.replaceElementWithChildren("strong");

const unsanitizedString = `<p>This is a with <strong>important</strong> text <em>highlighted</em>.</p>`;
log(`unsanitizedHTMLString:\n ${unsanitizedString}`);

// Create a <div> element
const divElement = document.createElement("div");

divElement.setHTML(unsanitizedString, { sanitizer });
log(`\n\nsanitizedHTML:\n ${divElement.innerHTML}`);

// Log the sanitizer configuration
const sanitizerConfig = sanitizer.get();
log(`\n\nsanitizerConfig:\n ${JSON.stringify(sanitizerConfig, null, 2)}`);
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Der ursprüngliche, nicht bereinigte HTML-String, der bereinigte String aus dem Element und der Sanitizer werden unten protokolliert. Beachten Sie, dass das `<strong>`-Styling aus dem Text entfernt wird, aber das `<em>`-Element nicht. Beachten Sie auch, dass das `<strong>`-Element ursprünglich in der `elements`-Liste der Konfiguration war, aber entfernt wurde, als es zur `replaceWithChildrenElements`-Liste hinzugefügt wurde.

{{EmbedLiveSample("Anleitung zum Entfernen von Stilen aus Text", "100", "520px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
