---
title: "Sanitizer: removeAttribute()-Methode"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeAttribute()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle bestimmt, dass ein Attribut auf allen Elementen nicht erlaubt ist.

Das angegebene Attribut wird in die Liste der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) in der Konfiguration dieses Sanitizers aufgenommen.
Das Attribut wird aus der Liste der [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) entfernt, falls es vorhanden ist.

Beachten Sie, dass Sie, um Attribute nur auf spezifischen Elementen zu erlauben oder zu verbieten, [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden sollten.

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des Attributs angibt, das global auf Elementen nicht erlaubt sein soll, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, welcher standardmäßig `null` ist.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zum Verbieten bestimmter Attribute

Dieses Beispiel zeigt, wie `removeAttribute()` verwendet wird, um festzulegen, dass ein Attribut von Elementen entfernt werden sollte.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfänglich keine Attribute oder Elemente spezifiziert.
Dann rufen wir `removeAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert.
Beachten Sie, wie beide Attribute nun zur Liste der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) hinzugefügt wurden (diese Attribute werden entfernt, falls sie auf Elementen vorhanden sind, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("How to disallow specific attributes","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
