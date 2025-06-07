---
title: "Sanitizer: removeUnsafe()-Methode"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeUnsafe()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle konfiguriert die Sanitizer-Konfiguration so, dass alle Elemente, Attribute und Event-Handler-Inhaltsattribute, die vom Browser als XSS-unsicher betrachtet werden, entfernt werden.

Die unsicheren Elemente und Attribute werden zur Konfiguration hinzugefügt, indem [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) und [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) jeweils aufgerufen werden. Dies fügt sie den Disallow-Listen der Sanitizer-Konfiguration hinzu: [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2), und entfernt sie (falls vorhanden) von den Allow-Listen der Konfiguration: [`elements`](/de/docs/Web/API/SanitizerConfig#removeelements), [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) und [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes).

Die Methode kann aufgerufen werden, um jede benutzerdefinierte Konfiguration XSS-sicher zu machen. Wenn sie mit einer Konfiguration verwendet wird, die die Allow-Listen verwendet, werden die XSS-unsicheren Einheiten aus diesen Listen entfernt. Wenn sie mit einer Konfiguration verwendet wird, die nur die Disallow- ("remove")-Listen verwendet, stellt sie sicher, dass die Konfiguration die unsicheren Elemente in diesen Listen enthält.

Beachten Sie, dass, wenn Sie den Sanitizer mit einem der "sicheren" HTML-Setter verwenden, wie z. B. [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML), Sie diese Methode nicht aufrufen müssen, um den Sanitizer sicher zu machen. Bei Verwendung in diesen Settern wird die Methode implizit aufgerufen, ohne die übergebene `Sanitizer`-Instanz zu ändern.

## Syntax

```js-nolint
removeUnsafe()
```

### Parameter

Keine.

### Rückgabewert

Keiner (`undefined`).

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

Dieses Beispiel demonstriert, wie der Aufruf von `removeUnsafe()` die Sanitizer-Konfiguration XSS-sicher macht.

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das das sichere Element {{htmlelement("p")}}, die unsicheren Elemente {{htmlelement("script")}} und {{htmlelement("iframe")}}, und das unsichere `onwebkitanimationend`-Event-Handler-Attribut zulässt.

Der Code ruft dann `removeUnsafe()` auf den Sanitizer auf und protokolliert dessen Konfiguration.

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

Die resultierende Konfiguration wird unten gezeigt. Beachten Sie, wie die unsicheren Elemente und Attribute von den "Allow"-Listen zu den entsprechenden "Remove"-Listen verschoben wurden. In diesem Fall bleibt uns {{htmlelement("p")}} in den erlaubten Elementen, sodass nur `<p>`-Elemente im Eingabedokument importiert werden, wenn der Sanitizer verwendet wird.

{{EmbedLiveSample("Making a sanitizer configuration safe","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
