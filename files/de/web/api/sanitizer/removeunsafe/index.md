---
title: "Sanitizer: removeUnsafe()-Methode"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeUnsafe()`**-Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces konfiguriert die Sanitizer-Konfiguration so, dass alle Elemente, Attribute und Event-Handler-Inhaltsattribute, die vom Browser als XSS-unsicher betrachtet werden, entfernt werden.

Die unsicheren Elemente und Attribute werden zur Konfiguration hinzugefügt, indem für jedes [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) bzw. [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) aufgerufen wird. Dies fügt sie zu den Disallow-Listen der Sanitizer-Konfiguration hinzu: [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) und entfernt sie (falls vorhanden) aus den Allow-Listen der Konfiguration: [`elements`](/de/docs/Web/API/SanitizerConfig#removeelements), [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) und [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes).

Die Methode kann aufgerufen werden, um eine benutzerdefinierte Konfiguration XSS-sicher zu machen.
Wenn sie mit einer Konfiguration verwendet wird, die die Allow-Listen nutzt, werden die XSS-unsicheren Entitäten aus diesen Listen entfernt.
Wenn sie mit einer Konfiguration verwendet wird, die nur die Disallow- ("remove")-Listen benutzt, stellt sie sicher, dass die unsicheren Elemente in diesen Listen enthalten sind.

Beachten Sie, dass, wenn Sie den Sanitizer mit einem der "sicheren" HTML-Setter wie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verwenden, Sie diese Methode nicht aufrufen müssen, um den Sanitizer sicher zu machen.
Wenn sie in diesen Setzern verwendet wird, wird die Methode implizit aufgerufen, ohne die übergebene `Sanitizer`-Instanz zu verändern.

## Syntax

```js-nolint
removeUnsafe()
```

### Parameter

Keine.

### Rückgaben

Keine (`undefined`).

## Beispiele

### Grundlegende Verwendung

Der folgende Code zeigt, wie `removeUnsafe()` verwendet wird.

```js
// Create sanitizer.
const sanitizer = new Sanitizer(/* Some configuration */);

// Make the configuration XSS-safe
sanitizer.removeUnsafe();
```

### Eine Sanitizer-Konfiguration sicher machen

Dieses Beispiel zeigt, wie durch den Aufruf von `removeUnsafe()` die Sanitizer-Konfiguration XSS-sicher wird.

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
  logElement.textContent += text;
}
```

#### JavaScript

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das das sichere Element {{htmlelement("p")}}, die unsicheren Elemente {{htmlelement("script")}} und {{htmlelement("iframe")}}, sowie das unsichere `onwebkitanimationend`-Event-Handler-Attribut zulässt.

Der Code ruft dann `removeUnsafe()` beim Sanitizer auf und protokolliert seine Konfiguration.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer that allows
const sanitizer = new Sanitizer({
  elements: ["p", "script"],
  attributes: ["onwebkitanimationend"],
  replaceWithChildrenElements: ["iframe"],
});

// Make the sanitizer safe!
sanitizer.removeUnsafe();

// Log the sanitizer configuration
const sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Die resultierende Konfiguration wird unten gezeigt.
Beachten Sie, wie die unsicheren Elemente und Attribute aus den "Allow"-Listen in die entsprechenden "Remove"-Listen verschoben wurden.
In diesem Fall haben wir immer noch {{htmlelement("p")}} in den erlaubten Elementen, sodass nur `<p>`-Elemente im Input importiert werden, wenn der Sanitizer verwendet wird.

{{EmbedLiveSample("Making a sanitizer configuration safe", "100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
