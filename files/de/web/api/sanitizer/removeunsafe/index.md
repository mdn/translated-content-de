---
title: "Sanitizer: removeUnsafe() Methode"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeUnsafe()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle konfiguriert die Sanitizer-Einstellungen so, dass alle Elemente, Attribute und Event-Handler-Inhaltsattribute entfernt werden, die von dem Browser als XSS-unsicher angesehen werden.

Die Methode kann aufgerufen werden, um jede benutzerdefinierte Konfiguration XSS-sicher zu machen. Beachten Sie, dass Sie diese Methode nicht aufrufen müssen, wenn Sie den Sanitizer mit einem der "sicheren" HTML-Setter, wie z.B. [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML), verwenden, um den Sanitizer sicher zu machen. Wenn sie in diesen Setzern verwendet wird, wird die Methode implizit aufgerufen, ohne die übergebene `Sanitizer`-Instanz zu verändern.

## Syntax

```js-nolint
removeUnsafe()
```

### Parameter

Keine.

### Rückgabewert

`true`, wenn die Operation Elemente, Attribute oder Event-Handler-Inhaltsattribute entfernte, die als XSS-unsicher gelten, und `false`, wenn keine Elemente oder Attribute entfernt wurden.

## Beispiele

### Grundlegende Nutzung

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das das sichere Element {{htmlelement("p")}}, die unsicheren Elemente {{htmlelement("script")}} und {{htmlelement("iframe")}}, sowie das unsichere `onwebkitanimationend` Event-Handler-Attribut erlaubt.

Der Code ruft dann `removeUnsafe()` im Sanitizer auf und protokolliert seine Konfiguration.

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

Die resultierende Konfiguration wird unten gezeigt. Beachten Sie, wie die unsicheren Elemente und Attribute von den "erlauben"-Listen zu den entsprechenden "entfernen"-Listen verschoben wurden. In diesem Fall haben wir immer noch {{htmlelement("p")}} in den erlaubten Elementen, so dass nur `<p>` Elemente in der Eingabe importiert werden, wenn der Sanitizer verwendet wird.

{{EmbedLiveSample("Making a sanitizer configuration safe","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
