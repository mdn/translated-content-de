---
title: "Sanitizer: get()-Methode"
short-title: get()
slug: Web/API/Sanitizer/get
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`get()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle gibt eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Wörterbuchinstanz zurück, die die aktuelle `Sanitizer`-Konfiguration darstellt.

Diese kann verwendet werden, um einen leicht modifizierten `Sanitizer` gegenüber dem Standard zu erstellen; indem man zuerst die Standard-Sanitizer-Konfiguration abruft und dann modifiziert, um anschließend einen neuen `Sanitizer` zu konstruieren.

Die zurückgegebene Konfiguration kann auch zur Überprüfung der Konfiguration verwendet werden und direkt an die HTML-Parsing-Funktionen übergeben werden. Beachten Sie jedoch, dass es effizienter ist, einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) anstelle eines Konfigurationswörterbuchs zu übergeben, insbesondere wenn der `Sanitizer` mehrfach verwendet werden soll.

## Syntax

```js-nolint
get()
```

### Parameter

Keine

### Rückgabewert

Eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig).

## Beispiele

### Eine Konfiguration abrufen

Dieses Beispiel zeigt, wie man einen neuen `Sanitizer` erstellt und dessen Konfiguration erhält.

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

Der folgende Code testet, ob die `Sanitizer`-Schnittstelle unterstützt wird, und erstellt, falls ja, ein neues `Sanitizer`-Objekt unter Verwendung einer einfachen [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die die HTML-Elemente {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}}, {{htmlelement("script")}} zulässt.
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

Die Ausgabe wird unten protokolliert.
Beachten Sie, dass dieselben Elemente, die beim Konstruieren des Sanitizers festgelegt wurden, zurückgegeben werden, aber die neuen Elemente auch einen Namensraum haben.
Beachten Sie auch, dass hier Kommentare und Datenattribute erlaubt sind.

{{EmbedLiveSample("Getting a configuration", "100", "480px")}}

### Den Standard-Sanitizer abrufen

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

Der folgende Code testet, ob die `Sanitizer`-Schnittstelle unterstützt wird.
Er erstellt dann den Standard-`Sanitizer`, ohne Optionen zu übergeben, und ruft anschließend die Konfiguration ab und protokolliert sie.

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
Beachten Sie, dass die Standardkonfiguration recht umfangreich ist und viele Elemente und Attribute zulässt.

{{EmbedLiveSample("Getting the default sanitizer", "100", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
