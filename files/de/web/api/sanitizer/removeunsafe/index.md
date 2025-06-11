---
title: "Sanitizer: removeUnsafe()-Methode"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeUnsafe()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle konfiguriert die Sanitizer-Konfiguration so, dass alle Elemente, Attribute und Event-Handler-Inhaltsattribute, die vom Browser als XSS-unsafe angesehen werden, entfernt werden.

Die unsicheren Elemente und Attribute werden zur Konfiguration hinzugefügt, indem [`Sanitizer.removeElement()`](/de/docs/Web/API/Sanitizer/removeElement) und [`Sanitizer.removeAttribute()`](/de/docs/Web/API/Sanitizer/removeAttribute) jeweils aufgerufen werden. Dadurch werden sie zu den Disallow-Listen der Sanitizer-Konfiguration hinzugefügt: [`removeElements`](/de/docs/Web/API/SanitizerConfig#removeelements) und [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2), und wenn vorhanden, aus den Allow-Listen der Konfiguration entfernt: [`elements`](/de/docs/Web/API/SanitizerConfig#removeelements), [`replaceWithChildrenElements`](/de/docs/Web/API/SanitizerConfig#replacewithchildrenelements) und [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes).

Die Methode kann aufgerufen werden, um jede benutzerdefinierte Konfiguration XSS-sicher zu machen. Wenn sie mit einer Konfiguration verwendet wird, die Allow-Listen verwendet, entfernt sie die XSS-unsicheren Entitäten aus diesen Listen. Wenn sie mit einer Konfiguration verwendet wird, die nur die Disallow- ("remove")-Listen verwendet, stellt sie sicher, dass die Konfiguration die unsicheren Elemente in diesen Listen beinhaltet.

Beachten Sie, dass, wenn Sie den Sanitizer mit einem der "sicheren" HTML-Setter wie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verwenden, Sie diese Methode nicht aufrufen müssen, um den Sanitizer sicher zu machen. Bei der Verwendung in diesen Settern wird die Methode implizit aufgerufen, ohne dass die übergebene `Sanitizer`-Instanz modifiziert wird.

## Syntax

```js-nolint
removeUnsafe()
```

### Parameter

Keine.

### Rückgabewert

Kein Rückgabewert (`undefined`).

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das das sichere Element {{htmlelement("p")}}, die unsicheren Elemente {{htmlelement("script")}} und {{htmlelement("iframe")}} sowie das unsichere `onwebkitanimationend` Event-Handler-Attribut erlaubt.

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

Die resultierende Konfiguration wird unten gezeigt. Beachten Sie, wie die unsicheren Elemente und Attribute von den "Allow"-Listen zu den entsprechenden "Remove"-Listen entfernt wurden. In diesem Fall haben wir immer noch {{htmlelement("p")}} in den erlaubten Elementen, sodass beim Einsatz des Sanitizers nur `<p>`-Elemente im Input importiert werden.

{{EmbedLiveSample("Making a sanitizer configuration safe","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
