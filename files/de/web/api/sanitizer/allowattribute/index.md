---
title: "Sanitizer: allowAttribute() Methode"
short-title: allowAttribute()
slug: Web/API/Sanitizer/allowAttribute
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`allowAttribute()`** Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer) Interfaces legt ein Attribut fest, das bei Verwendung des Sanitizers auf allen Elementen erlaubt ist.

Die Methode kann entweder mit einer [Allow-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) oder einer [Remove-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden. Wird sie mit einer Allow-Konfiguration verwendet, wird das angegebene Attribut zum `attributes` Array hinzugefügt. Wenn sie mit einer Remove-Konfiguration verwendet wird, wird das Attribut aus dem `removeAttributes` Array entfernt (falls vorhanden).

Beachten Sie, dass zum Zulassen/Entfernen von Attributen nur auf spezifischen Elementen [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwendet werden sollte.

## Syntax

```js-nolint
allowAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des Attributs angibt, das weltweit auf Elementen erlaubt sein soll, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, um das Attribut zuzulassen, und `false`, wenn die Konfiguration das Attribut bereits erlaubte.

`false` könnte zurückgegeben werden, wenn die interne Konfiguration:

- ein [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) Array definiert und das Attribut bereits vorhanden ist (es muss nicht erneut hinzugefügt werden)
- stattdessen das [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) Array definiert und das angegebene Attribut nicht vorhanden ist (und daher bereits erlaubt ist)
- [`dataAttributes`](/de/docs/Web/API/SanitizerConfig#dataattributes) auf `true` gesetzt ist, aber ein `data-*` Attribut übergeben wird.

## Beispiele

### Anleitung zur Zulassung spezifischer Attribute auf Elementen

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

Der Code erstellt zunächst ein neues `Sanitizer` Objekt, das anfänglich keine Attribute erlaubt. Wir rufen dann `allowAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute nun zur [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) Liste hinzugefügt sind (andere Attribute werden bei Verwendung des Sanitizers auf Elementen nicht erlaubt).

{{EmbedLiveSample("How to allow specific attributes on elements","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
