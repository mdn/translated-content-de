---
title: "Sanitizer: allowAttribute() Methode"
short-title: allowAttribute()
slug: Web/API/Sanitizer/allowAttribute
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowAttribute()`** Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces definiert ein Attribut, das bei allen Elementen erlaubt sein soll.

Das angegebene Attribut wird der Liste der [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) in der Konfiguration dieses Sanitizers hinzugefügt.
Falls das Attribut in der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) Liste vorhanden ist, wird es daraus entfernt.

Beachten Sie, dass zum Erlauben/Verbieten von Attributen nur auf spezifischen Elementen die Methode [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwendet werden sollte.

## Syntax

```js-nolint
allowAttribute(attribute)
```

### Parameter

- `attribute`

  - : Ein String, der den Namen des Attributs angibt, das global bei Elementen erlaubt sein soll, oder ein Objekt mit den folgenden Eigenschaften:

    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält. Standardmäßig ist dieser `null`.

### Rückgabewert

Kein (`undefined`).

## Beispiele

### Anleitung: Wie man spezifische Attribute bei Elementen erlaubt

Dieses Beispiel zeigt, wie `allowAttribute()` verwendet wird, um anzugeben, dass ein Attribut bei Elementen erlaubt ist.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfänglich keine Attribute erlaubt.
Dann rufen wir `allowAttribute()` mit den Attributen `title` und `mathcolor` auf.

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
Beachten Sie, wie beide Attribute jetzt zur [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) Liste hinzugefügt sind (andere Attribute werden bei Elementen nicht erlaubt, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("How to allow specific attributes on elements","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
