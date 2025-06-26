---
title: "Sanitizer: removeAttribute()-Methode"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeAttribute()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle setzt ein Attribut, das auf allen Elementen nicht erlaubt sein soll.

Das angegebene Attribut wird der Liste von [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) in der Konfiguration dieses Sanitizers hinzugefügt. Das Attribut wird aus der [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2)-Liste entfernt, falls es dort vorhanden ist.

Beachten Sie, dass Sie zum Erlauben/Verbieten von Attributen nur auf bestimmten Elementen die Methode [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden sollten.

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des global zu verbietenden Attributs auf Elementen angibt, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zum Verbieten bestimmter Attribute

Dieses Beispiel zeigt, wie `removeAttribute()` verwendet wird, um anzugeben, dass ein Attribut von Elementen entfernt werden sollte.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfangs keine Attribute oder Elemente spezifiziert. Dann rufen wir `removeAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute nun der Liste von [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) hinzugefügt sind (diese Attribute werden entfernt, wenn sie auf Elementen vorhanden sind, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("Anleitung zum Verbieten bestimmter Attribute","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
