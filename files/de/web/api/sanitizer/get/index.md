---
title: "Sanitizer: `get()`-Methode"
short-title: get()
slug: Web/API/Sanitizer/get
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`get()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle gibt eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Wörterbuchinstanz zurück, die die aktuelle `Sanitizer`-Konfiguration darstellt.

Dies kann verwendet werden, um einen leicht modifizierten Desinfizierer vom Standard zu erstellen; indem zuerst die Standard-Sanitizer-Konfiguration abgerufen und dann modifiziert wird, um einen neuen Sanitizer zu konstruieren.

Die zurückgegebene Konfiguration kann auch zur Inspektion der Konfiguration verwendet werden und kann direkt an die HTML-Parsing-Funktionen übergeben werden. Beachten Sie jedoch, dass es effizienter ist, einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) anstelle eines Konfigurationswörterbuchs zu übergeben, insbesondere wenn der `Sanitizer` mehrfach verwendet werden soll.

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

Dieses Beispiel zeigt, wie Sie einen neuen Sanitizer erstellen und dessen Konfiguration abrufen können.

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

Der folgende Code testet, ob die `Sanitizer`-Schnittstelle unterstützt wird, und erstellt gegebenenfalls ein neues `Sanitizer`-Objekt mit einer einfachen [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die die HTML-Elemente zulässt: {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}}, {{htmlelement("script")}}. Anschließend wird die Konfiguration abgerufen und protokolliert.

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

Die Ausgabe wird unten protokolliert. Beachten Sie, dass dieselben Elemente, die beim Konstruieren des Sanitizers gesetzt wurden, zurückgegeben werden, aber die neuen Elemente auch einen Namespace haben. Beachten Sie auch, dass Kommentare und Datenattribute zugelassen werden.

{{EmbedLiveSample("Getting a configuration","100","480px")}}

### Abrufen des Standard-Sanitizers

Dieses Beispiel zeigt, wie Sie die Konfiguration für den Standard-`Sanitizer` erhalten können. Diese kann dann modifiziert und verwendet werden, um einen neuen `Sanitizer` zu erstellen, der Ihren spezifischen Anforderungen entspricht.

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

Der folgende Code testet, ob die `Sanitizer`-Schnittstelle unterstützt wird. Es wird dann der Standard-`Sanitizer` erstellt, indem keine Optionen übergeben werden, und anschließend wird die Konfiguration abgerufen und protokolliert.

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

Die Standard-Sanitizer-Konfiguration wird unten protokolliert. Beachten Sie, dass die Standardkonfiguration ziemlich umfangreich ist und viele Elemente und Attribute zulässt.

{{EmbedLiveSample("Getting the default sanitizer","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
