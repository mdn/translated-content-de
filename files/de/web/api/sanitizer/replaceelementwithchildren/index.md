---
title: "Sanitizer: replaceElementWithChildren() Methode"
short-title: replaceElementWithChildren()
slug: Web/API/Sanitizer/replaceElementWithChildren
l10n:
  sourceCommit: 3da04ec7191b2d04750d76aad2a59d6579fe43ba
---

{{APIRef("HTML Sanitizer API")}}

Die **`replaceElementWithChildren()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass ein Element durch seine untergeordneten HTML-Elemente ersetzt wird, wenn der Sanitizer verwendet wird. Dies wird hauptsächlich verwendet, um Stile von Text zu entfernen.

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
      - : Ein String, der den Namensraum des Elements enthält. Der Standardnamensraum ist `"http://www.w3.org/1999/xhtml"`.

### Rückgabewert

Ein boolescher Wert: `true`, wenn die Operation die `Sanitizer`-Konfiguration aktualisiert hat, um das Element durch seine Kinder zu ersetzen, und `false` andernfalls.

Die Methode gibt `false` zurück, wenn der Sanitizer bereits konfiguriert ist, um das gegebene Element zu ersetzen, oder wenn das ermittelte Element [nicht erlaubt](#nicht_erlaubte_ersatzelemente) ist.

## Beschreibung

Die **`replaceElementWithChildren()`**-Methode spezifiziert ein Element, das durch seine Kindelemente und/oder Textknoten ersetzt wird, wenn der Sanitizer verwendet wird. Dies wird hauptsächlich verwendet, um Stile von Text zu entfernen.

### Nicht erlaubte Ersatzelemente

Die folgenden Elemente sind nicht als Ersatzelemente erlaubt:

- {{htmlelement("html")}} im HTML-Namensraum (`http://www.w3.org/1999/xhtml`).
- {{svgelement("svg")}} im SVG-Namensraum (`http://www.w3.org/2000/svg`).
- {{mathmlelement("math")}} im MathML-Namensraum (`http://www.w3.org/1998/Math/MathML`).

Alle folgenden Methodenaufrufe geben `false` zurück, da der `Sanitizer` für diese Elemente nicht aktualisiert werden kann:

```js
const sanitizer = new Sanitizer();

sanitizer.replaceElementWithChildren("html");
sanitizer.replaceElementWithChildren({ name: "html" });
sanitizer.replaceElementWithChildren({
  name: "html",
  namespace: "http://www.w3.org/1999/xhtml",
});
sanitizer.replaceElementWithChildren({
  name: "svg",
  namespace: "http://www.w3.org/2000/svg",
});
sanitizer.replaceElementWithChildren({
  name: "math",
  namespace: "http://www.w3.org/1998/Math/MathML",
});
```

## Beispiele

### Grundlegende Anwendung

Dieses Beispiel zeigt die grundlegende Anwendung der Methode, indem ein `Sanitizer` konfiguriert wird, der das `<em>`-Element in Eingaben durch seinen Kinderinhalt ersetzt.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Replace <em> elements with their innerHTML
sanitizer.replaceElementWithChildren("em");
```

### Anleitung zum Entfernen von Stilen aus Text

Dieses Beispiel zeigt, wie `replaceElementWithChildren()` verwendet werden kann, um Stile von Text zu entfernen.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das ursprünglich die {{htmlelement("p")}}, {{htmlelement("em")}}, und {{htmlelement("strong")}}-Elemente zulässt. Wir rufen dann `replaceElementWithChildren()` auf dem Sanitizer auf, um anzugeben, dass `<strong>`-Elemente ersetzt werden sollen.

Der Code definiert einen String, der `<strong>`-Elemente enthält, und verwendet [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) mit dem Sanitizer, um den String einzufügen. Der Original-String, das bereinigte HTML aus dem Element und der Sanitizer werden protokolliert.

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

Der ursprüngliche nicht bereinigte HTML-String, der bereinigte String aus dem Element und der Sanitizer werden unten protokolliert. Beachten Sie, dass das `<strong>`-Styling aus dem Text entfernt wurde, das `<em>`-Element jedoch nicht. Beachten Sie auch, dass das `<strong>`-Element ursprünglich in der `elements`-Liste in der Konfiguration war, jedoch entfernt wurde, als es zur Liste `replaceWithChildrenElements` hinzugefügt wurde.

{{EmbedLiveSample("Anleitung zum Entfernen von Stilen aus Text","100","520px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
