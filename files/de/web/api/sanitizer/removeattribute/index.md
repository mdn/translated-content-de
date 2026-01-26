---
title: "Sanitizer: removeAttribute() Methode"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeAttribute()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer) Schnittstelle setzt ein Attribut, das von allen Elementen entfernt werden soll, wenn der Sanitizer verwendet wird.

Die Methode kann sowohl mit einer [Allow-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) als auch mit einer [Remove-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden. Bei Verwendung mit einer Remove-Konfiguration wird das angegebene Attribut dem `removeAttributes` Array hinzugefügt. Bei Verwendung mit einer Allow-Konfiguration wird das Attribut aus dem `attributes` Array entfernt (falls vorhanden).

Beachten Sie, dass um Attribute nur auf bestimmten Elementen zu erlauben oder zu verbieten, Sie [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden sollten.

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des Attributs angibt, das global auf Elementen verboten werden soll, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, standardmäßig `null`.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, um das Attribut zu verbieten, und `false`, wenn das Attribut bereits verboten war.

Beachten Sie, dass `false` zurückgegeben werden kann, wenn die interne Konfiguration:

- ein [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) Array definiert, das bereits das angegebene Attribut enthält (und daher bereits gefiltert ist)
- stattdessen ein [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) Array definiert, das das Attribut bereits auslässt (und daher bereits verboten ist)

## Beispiele

### Anleitung zur Unzulässigkeit spezifischer Attribute

Dieses Beispiel zeigt, wie `removeAttribute()` verwendet wird, um festzulegen, dass ein Attribut von den Elementen entfernt werden soll.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfangs keine Attribute oder Elemente spezifiziert. Wir rufen dann `removeAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute nun zur [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) Liste hinzugefügt wurden (diese Attribute werden entfernt, wenn der Sanitizer verwendet wird und sie auf Elementen vorhanden sind).

{{EmbedLiveSample("How to disallow specific attributes","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
