---
title: "Sanitizer: allowAttribute() Methode"
short-title: allowAttribute()
slug: Web/API/Sanitizer/allowAttribute
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowAttribute()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle setzt ein Attribut, das auf allen Elementen erlaubt sein soll.

Das angegebene Attribut wird der Liste der [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) in der Konfiguration dieses Sanitizers hinzugefügt. Das Attribut wird aus der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2)-Liste entfernt, falls es dort vorhanden ist.

Beachten Sie, dass Sie zum Erlauben/Verweigern von Attributen nur bei spezifischen Elementen [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden sollten.

## Syntax

```js-nolint
allowAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des Attributs angibt, das global auf Elementen erlaubt werden soll, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zum Erlauben spezifischer Attribute auf Elementen

Dieses Beispiel zeigt, wie `allowAttribute()` verwendet wird, um festzulegen, dass ein Attribut auf Elementen erlaubt ist.

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
  logElement.textContent = text;
}
```

#### JavaScript

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfänglich keine Attribute zulässt. Dann rufen wir `allowAttribute()` mit den Attributen `title` und `mathcolor` auf.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create an allow sanitizer
const sanitizer = new Sanitizer({
  attributes: [],
});

// Allow the "title" attribute
sanitizer.allowAttribute("title");
// Allow the "mathcolor" attribute
sanitizer.allowAttribute("mathcolor");

// Log the sanitizer configuration
let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute nun zur [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2)-Liste hinzugefügt wurden (andere Attribute werden bei Verwendung des Sanitizers nicht auf Elementen erlaubt).

{{EmbedLiveSample("Anleitung zum Erlauben spezifischer Attribute auf Elementen","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
