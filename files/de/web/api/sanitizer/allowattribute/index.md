---
title: "Sanitizer: allowAttribute() Methode"
short-title: allowAttribute()
slug: Web/API/Sanitizer/allowAttribute
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowAttribute()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle setzt ein Attribut, das an allen Elementen erlaubt sein soll.

Das angegebene Attribut wird zur Liste der [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) in der Konfiguration dieses Sanitizers hinzugefügt.
Das Attribut wird aus der Liste der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) entfernt, falls es dort vorhanden ist.

Beachten Sie, dass Sie, um Attribute nur auf bestimmten Elementen zu erlauben/zu verbieten, [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden können.

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

### Anleitung: spezifische Attribute für Elemente zulassen

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfangs keine Attribute erlaubt.
Wir rufen dann `allowAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert.
Beachten Sie, wie beide Attribute jetzt zur [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) Liste hinzugefügt wurden (andere Attribute werden auf Elementen nicht erlaubt sein, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("How to allow specific attributes on elements","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
