---
title: "Sanitizer: removeAttribute()-Methode"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: f9e87cf7d09830e097a2aadb5e507eb12c9a4514
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeAttribute()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass ein Attribut bei allen Elementen nicht erlaubt ist.

Das angegebene Attribut wird zur Liste der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) in der Konfiguration dieses Sanitizers hinzugefügt. Das Attribut wird aus der [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2)-Liste entfernt, falls vorhanden.

Beachten Sie, dass zum Erlauben/Nicht-Erlauben von Attributen nur bei spezifischen Elementen die Methode [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwendet wird.

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameter

- `attribute`

  - : Ein String, der den Namen des Attributs angibt, das global bei Elementen nicht erlaubt sein soll, oder ein Objekt mit den folgenden Eigenschaften:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält, welcher standardmäßig `null` ist.

### Rückgabewerte

Kein (`undefined`).

## Beispiele

### Anleitung zur Nicht-Erlaubnis spezifischer Attribute

Dieses Beispiel zeigt, wie `removeAttribute()` verwendet wird, um anzugeben, dass ein Attribut von Elementen entfernt werden soll.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 300px;
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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfänglich keine Attribute oder Elemente spezifiziert. Wir rufen dann `removeAttribute()` mit den Attributen `title` und `mathcolor` auf.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer that allows
const sanitizer = new Sanitizer({
  removeAttributes: [],
});

// Remove the title attribute
sanitizer.removeAttribute("title");
// Remove the mathcolor attribute
sanitizer.removeAttribute("mathcolor");

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

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute nun zur [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2)-Liste hinzugefügt wurden (diese Attribute werden entfernt, falls sie bei Elementen vorhanden sind, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("Anleitung zur Nicht-Erlaubnis spezifischer Attribute","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
