---
title: "Sanitizer: Methode removeUnsafe()"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeUnsafe()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle konfiguriert den Sanitizer so, dass alle Elemente und Attribute, die vom Browser als XSS-gefährlich angesehen werden, entfernt werden.

Die Methode kann aufgerufen werden, um jeden `Sanitizer` XSS-sicher zu machen.

## Syntax

```js-nolint
removeUnsafe()
```

### Parameter

Keine.

### Rückgabewert

`true`, wenn die Operation irgendwelche Elemente, Attribute oder Inhaltsattribute für Ereignishandler entfernt hat, die als XSS-gefährlich angesehen werden, und `false`, wenn keine Elemente oder Attribute entfernt wurden.

## Beschreibung

Die **`removeUnsafe()`**-Methode konfiguriert den Sanitizer so, dass alle Elemente und Attribute, die vom Browser als XSS-gefährlich angesehen werden, entfernt werden. Dies schließt die Elemente {{htmlelement("embed")}}, {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("object")}}, {{htmlelement("script")}} und {{SVGElement("use")}} sowie die Inhaltsattribute für Ereignishandler wie `onafterprint`, `onbeforeinput` usw. ein.

Beachten Sie, dass Sie diese Methode nicht aufrufen müssen, um den Sanitizer sicher zu machen, wenn Sie ihn mit einem der "sicheren" HTML-Setter verwenden, wie z.B. [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML). Bei Verwendung in diesen Settern werden dieselben Elemente und Attribute aus dem Eingabewert entfernt, ohne die übergebene `Sanitizer`-Instanz zu ändern.

## Beispiele

### Grundlegende Verwendung

Der folgende Code zeigt, wie `removeUnsafe()` verwendet wird.

```js
// Create sanitizer.
const sanitizer = new Sanitizer(/* Some configuration */);

// Make the configuration XSS-safe
sanitizer.removeUnsafe();
```

### Eine sichere Sanitizer-Konfiguration erstellen

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das das sichere Element {{htmlelement("p")}}, die unsicheren Elemente {{htmlelement("script")}} und {{htmlelement("iframe")}} sowie das unsichere `onwebkitanimationend`-Ereignishandler-Attribut erlaubt.

Anschließend ruft der Code `removeUnsafe()` auf dem Sanitizer auf und protokolliert seine Konfiguration.

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

Die resultierende Konfiguration wird unten gezeigt. Beachten Sie, wie die unsicheren Elemente und Attribute aus den "Allow"-Listen in die entsprechenden "Remove"-Listen verschoben wurden. In diesem Fall haben wir immer noch {{htmlelement("p")}} in den erlaubten Elementen, sodass nur `<p>`-Elemente in die Eingabe aufgenommen werden, wenn der Sanitizer verwendet wird.

{{EmbedLiveSample("Making a sanitizer configuration safe", "100", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
