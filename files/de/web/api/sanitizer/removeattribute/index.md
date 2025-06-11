---
title: "Sanitizer: removeAttribute() Methode"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeAttribute()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle legt fest, dass ein Attribut bei allen Elementen nicht erlaubt ist.

Das angegebene Attribut wird zur Liste der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) in der Konfiguration dieses Sanitizers hinzugefügt. Falls vorhanden, wird das Attribut aus der Liste der [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) entfernt.

Beachten Sie, dass Sie zur Erlaubnis/Ablehnung von Attributen nur bei bestimmten Elementen [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden.

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameter

- `attribute`

  - : Ein String, der den Namen des Attributs angibt, das global bei den Elementen abgelehnt werden soll, oder ein Objekt mit den folgenden Eigenschaften:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält und standardmäßig `null` ist.

### Rückgabewert

Kein (`undefined`).

## Beispiele

### Anleitung zur Ablehnung bestimmter Attribute

Dieses Beispiel zeigt, wie `removeAttribute()` verwendet wird, um festzulegen, dass ein Attribut von Elementen entfernt werden soll.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfänglich keine Attribute oder Elemente angibt. Danach rufen wir `removeAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute nun zur [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) Liste hinzugefügt wurden (diese Attribute werden entfernt, falls sie bei Elementen vorhanden sind, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("How to disallow specific attributes","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
