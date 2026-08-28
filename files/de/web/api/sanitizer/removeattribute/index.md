---
title: "Sanitizer: removeAttribute() Methode"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeAttribute()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass ein Attribut von allen Elementen entfernt wird, wenn der Sanitizer verwendet wird.

Die Methode kann entweder mit einer [allow configuration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) oder einer [remove configuration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden. Wenn sie mit einer remove configuration verwendet wird, wird das angegebene Attribut dem `removeAttributes`-Array hinzugefügt. Wenn sie mit einer allow configuration verwendet wird, wird das Attribut aus dem `attributes`-Array entfernt (falls vorhanden).

Beachten Sie, dass zur erlaubten/unerlaubten Attributen nur auf spezifischen Elementen [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwendet werden kann.

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des Attributs angibt, das global auf Elementen unerlaubt sein soll, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält, der standardmäßig `null` ist.

### Rückgabewert

`true` falls die Operation die Konfiguration verändert hat, um das Attribut unerlaubt zu machen, und `false` falls das Attribut bereits unerlaubt war.

Beachten Sie, dass `false` zurückgegeben werden kann, wenn die interne Konfiguration:

- ein [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) Array definiert, das bereits das angegebene Attribut enthält (und daher bereits gefiltert ist)
- stattdessen ein [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) Array definiert, das das Attribut bereits nicht enthält (und daher bereits unerlaubt ist)

## Beispiele

### Anleitung zur Unerlauben spezifischer Attribute

Dieses Beispiel zeigt, wie `removeAttribute()` verwendet wird, um zu spezifizieren, dass ein Attribut von Elementen entfernt werden soll.

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das anfangs keine Attribute oder Elemente spezifiziert. Dann rufen wir `removeAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute jetzt der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2)-Liste hinzugefügt sind (diese Attribute werden entfernt, wenn sie auf Elementen vorhanden sind, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("How to disallow specific attributes","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
