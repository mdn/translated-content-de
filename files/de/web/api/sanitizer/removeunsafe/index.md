---
title: "Sanitizer: removeUnsafe()-Methode"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
l10n:
  sourceCommit: cb84bb5393fe4ce7bf078210692e132e607766b3
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeUnsafe()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle konfiguriert den Sanitizer so, dass er alle Elemente und Attribute entfernt, die vom Browser als XSS-unsicher betrachtet werden.

Die Methode kann aufgerufen werden, um jeden `Sanitizer` XSS-sicher zu machen.

## Syntax

```js-nolint
removeUnsafe()
```

### Parameter

Keine.

### Rückgabewert

`true`, wenn die Operation Elemente, Attribute oder Inhaltsattribute für Ereignishandler, die als XSS-unsicher betrachtet werden, entfernt hat, und `false`, wenn keine Elemente oder Attribute entfernt wurden.

## Beschreibung

Die **`removeUnsafe()`**-Methode konfiguriert den Sanitizer so, dass er alle Elemente und Attribute entfernt, die vom Browser als XSS-unsicher betrachtet werden.
Dazu gehören die Elemente {{htmlelement("base")}}, {{htmlelement("embed")}}, {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("object")}}, {{htmlelement("script")}} und {{SVGElement("use")}}, sowie die Inhaltsattribute von Ereignishandlern wie `onafterprint`, `onbeforeinput` und so weiter.

Beachten Sie, dass Sie diese Methode nicht aufrufen müssen, um den Sanitizer sicher zu machen, wenn Sie ihn mit einem der "sicheren" HTML-Setter wie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verwenden.
Wenn diese Setter verwendet werden, werden dieselben Elemente und Attribute aus dem Eingabewert entfernt, ohne die übergebene `Sanitizer`-Instanz zu verändern.

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

Dieses Beispiel zeigt, wie der Aufruf von `removeUnsafe()` die Sanitizer-Konfiguration XSS-sicher macht.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das das sichere Element {{htmlelement("p")}}, die unsicheren Elemente {{htmlelement("script")}} und {{htmlelement("iframe")}} sowie das unsichere `onwebkitanimationend`-Ereignishandler-Attribut zulässt.

Der Code ruft dann `removeUnsafe()` auf dem Sanitizer auf und protokolliert seine Konfiguration.

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

Die resultierende Konfiguration wird unten dargestellt.
Beachten Sie, wie die unsicheren Elemente und Attribute aus den "Erlauben"-Listen in die entsprechenden "Entfernen"-Listen verschoben wurden.
In diesem Fall haben wir immer noch {{htmlelement("p")}} in den erlaubten Elementen, sodass nur `<p>`-Elemente im Eingabewert importiert werden, wenn der Sanitizer verwendet wird.

{{EmbedLiveSample("Eine Sanitizer-Konfiguration sicher machen","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
