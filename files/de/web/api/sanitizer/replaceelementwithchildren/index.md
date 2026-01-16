---
title: "Sanitizer: replaceElementWithChildren() Methode"
short-title: replaceElementWithChildren()
slug: Web/API/Sanitizer/replaceElementWithChildren
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`replaceElementWithChildren()`** Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer) Interfaces legt fest, dass ein Element durch seine untergeordneten HTML-Elemente ersetzt wird, wenn der Sanitizer verwendet wird.
Dies wird hauptsächlich zum Entfernen von Stilen aus Texten verwendet.

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
      - : Ein String, der den Namespace des Elements enthält.
        Der Standard-Namespace ist `"http://www.w3.org/1999/xhtml"`.

### Rückgabewert

`true`, wenn die Konfiguration geändert wurde, um das Element durch seine Kinder zu ersetzen, und `false`, wenn der Sanitizer das Element bereits ersetzte.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der Methode, bei der ein Sanitizer konfiguriert wird, der das `<em>` Element in Eingaben durch seinen Kindinhalt ersetzt.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Replace <em> elements with their innerHTML
sanitizer.replaceElementWithChildren("em");
```

### Anleitung zum Entfernen von Stilen aus Text

Dieses Beispiel zeigt, wie `replaceElementWithChildren()` verwendet werden kann, um Stile aus Texten zu entfernen.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfangs {{htmlelement("p")}}, {{htmlelement("em")}} und {{htmlelement("strong")}} Elemente zulässt.
Anschließend rufen wir `replaceElementWithChildren()` auf dem Sanitizer auf und geben an, dass `<strong>` Elemente ersetzt werden sollen.

Der Code definiert einen String, der `<strong>` Elemente enthält, und verwendet [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Sanitizer, um den String einzufügen.
Der ursprüngliche String, das bereinigte HTML aus dem Element und der Sanitizer werden protokolliert.

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

Der ursprüngliche nicht bereinigte HTML-String, der bereinigte String aus dem Element und der Sanitizer werden unten protokolliert.
Beachten Sie, dass das `<strong>` Styling aus dem Text entfernt wird, das `<em>` Element jedoch nicht.
Beachten Sie auch, dass das `<strong>` Element ursprünglich in der `elements`-Liste in der Konfiguration war, jedoch entfernt wurde, als es zur `replaceWithChildrenElements`-Liste hinzugefügt wurde.

{{EmbedLiveSample("How to strip styles from text","100","520px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
