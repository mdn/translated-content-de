---
title: "Sanitizer: removeAttribute() Methode"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeAttribute()`**-Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces legt ein Attribut fest, das beim Einsatz des Sanitizers von allen Elementen entfernt werden soll.

Die Methode kann entweder mit einer [Allow-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) oder einer [Remove-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden.
Wird sie mit einer Remove-Konfiguration verwendet, wird das angegebene Attribut zum `removeAttributes`-Array hinzugefügt.
Wird sie mit einer Allow-Konfiguration verwendet, wird das Attribut aus dem `attributes`-Array entfernt (sofern vorhanden).

Beachten Sie, dass Sie zur gezielten Erlaubnis/Verweigerung von Attributen bei bestimmten Elementen [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden können.

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des Attributs angibt, das global für Elemente verweigert werden soll, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, um das Attribut zu verweigern, und `false`, wenn das Attribut bereits verweigert war.

Beachten Sie, dass `false` zurückgegeben werden kann, wenn die interne Konfiguration:

- ein [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes)-Array definiert, das das angegebene Attribut bereits enthält (und somit bereits gefiltert ist)
- stattdessen ein [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes)-Array definiert, das das Attribut bereits ausschließt (und somit bereits verweigert ist)

## Beispiele

### Anleitung: Bestimmte Attribute verweigern

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
Beachten Sie, wie beide Attribute jetzt zur [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2)-Liste hinzugefügt sind (diese Attribute werden entfernt, wenn sie beim Einsatz des Sanitizers auf Elementen vorhanden sind).

{{EmbedLiveSample("How to disallow specific attributes","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
