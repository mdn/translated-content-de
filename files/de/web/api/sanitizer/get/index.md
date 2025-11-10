---
title: "Sanitizer: get() Methode"
short-title: get()
slug: Web/API/Sanitizer/get
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`get()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle gibt eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Wörterbuchinstanz zurück, die die aktuelle `Sanitizer`-Konfiguration darstellt.

Diese Methode kann verwendet werden, um einen leicht modifizierten `Sanitizer` von der Standardkonfiguration zu erstellen; indem Sie zunächst die Standardkonfiguration abrufen, dann modifizieren und sie dann zum Erstellen eines neuen Sanitizers verwenden.

Die zurückgegebene Konfiguration kann auch zur Überprüfung der Konfiguration verwendet werden und kann direkt an die HTML-Parsing-Funktionen übergeben werden. Beachten Sie jedoch, dass es effizienter ist, einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu übergeben, anstatt ein Konfigurationswörterbuch, insbesondere wenn der `Sanitizer` mehrfach verwendet werden soll.

## Syntax

```js-nolint
get()
```

### Parameter

Keine

### Rückgabewert

Ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig).

## Beispiele

### Abrufen einer Konfiguration

Dieses Beispiel zeigt, wie Sie einen neuen `Sanitizer` erstellen und seine Konfiguration abrufen können.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
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

Der folgende Code testet, ob die `Sanitizer` Schnittstelle unterstützt wird, und erstellt, falls ja, ein neues `Sanitizer` Objekt mit einer einfachen [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die die HTML-Elemente: {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}}, {{htmlelement("script")}} zulässt.
Anschließend wird die Konfiguration abgerufen und protokolliert.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({ elements: ["div", "p", "span", "script"] });

// Get current configuration
const sanitizerConfig = sanitizer.get();

log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Das Ergebnis wird unten protokolliert.
Beachten Sie, dass die gleichen Elemente, die beim Erstellen des Sanitizers eingestellt wurden, zurückgegeben werden, die neuen Elemente jedoch auch einen Namensraum haben.
Beachten Sie auch hier, dass Kommentare und Datenattribute zugelassen werden.

{{EmbedLiveSample("Getting a configuration","100","480px")}}

### Abrufen des Standardsanitizers

Dieses Beispiel zeigt, wie Sie die Konfiguration für den Standard-`Sanitizer` abrufen können.
Diese kann dann modifiziert und verwendet werden, um einen neuen `Sanitizer` zu erstellen, der Ihren spezifischen Anforderungen entspricht.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Der folgende Code testet, ob die `Sanitizer` Schnittstelle unterstützt wird.
Dann erstellt er den Standard-`Sanitizer`, ohne Optionen zu übergeben, und ruft anschließend die Konfiguration ab und protokolliert sie.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create default sanitizer
const sanitizer = new Sanitizer();

// Get default configuration
const defaultConfig = sanitizer.get();

log(JSON.stringify(defaultConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Die Standard-Sanitizer-Konfiguration wird unten protokolliert.
Beachten Sie, dass die Standardkonfiguration ziemlich groß ist und viele Elemente und Attribute zulässt.

{{EmbedLiveSample("Getting the default sanitizer","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
