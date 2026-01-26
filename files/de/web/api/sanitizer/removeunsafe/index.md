---
title: "Sanitizer: removeUnsafe()-Methode"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeUnsafe()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle konfiguriert die Sanitizer-Konfiguration so, dass sie alle Elemente, Attribute und Ereignishandler-Inhaltsattribute entfernt, die vom Browser als XSS-unsicher angesehen werden.

Die Methode kann aufgerufen werden, um jede benutzerdefinierte Konfiguration XSS-sicher zu machen. Beachten Sie, dass Sie diese Methode nicht aufrufen müssen, wenn Sie den Sanitizer mit einem der "sicheren" HTML-Setzer wie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verwenden. In diesen Setzern wird die Methode implizit aufgerufen, ohne die übergebene `Sanitizer`-Instanz zu verändern.

## Syntax

```js-nolint
removeUnsafe()
```

### Parameter

Keine.

### Rückgabewert

`true`, wenn die Operation irgendwelche Elemente, Attribute oder Ereignishandler-Inhaltsattribute entfernt hat, die als XSS-unsicher gelten, und `false`, wenn keine Elemente oder Attribute entfernt wurden.

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

Dieses Beispiel demonstriert, wie das Aufrufen von `removeUnsafe()` die Sanitizer-Konfiguration XSS-sicher macht.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das das sichere Element {{htmlelement("p")}}, die unsicheren Elemente {{htmlelement("script")}} und {{htmlelement("iframe")}}, sowie das unsichere `onwebkitanimationend`-Ereignishandler-Attribut erlaubt.

Dann ruft der Code `removeUnsafe()` für den Sanitizer auf und protokolliert seine Konfiguration.

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

Die resultierende Konfiguration wird unten gezeigt. Beachten Sie, wie die unsicheren Elemente und Attribute von den "allow"-Listen zu den entsprechenden "remove"-Listen verschoben wurden. In diesem Fall haben wir immer noch {{htmlelement("p")}} in den erlaubten Elementen, sodass beim Einsatz des Sanitizers nur `<p>`-Elemente im Eingabewert importiert werden.

{{EmbedLiveSample("Eine Sanitizer-Konfiguration sicher machen","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
