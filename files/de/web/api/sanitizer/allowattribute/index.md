---
title: "Sanitizer: allowAttribute() Methode"
short-title: allowAttribute()
slug: Web/API/Sanitizer/allowAttribute
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`allowAttribute()`** Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass ein Attribut bei der Verwendung des Sanitizers auf allen Elementen erlaubt ist.

Die Methode kann entweder mit einer [Erlauben-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) oder einer [Entfernen-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden.
Wird sie mit einer Erlauben-Konfiguration verwendet, wird das angegebene Attribut zum `attributes` Array hinzugefügt.
Wird sie mit einer Entfernen-Konfiguration verwendet, wird das Attribut aus dem `removeAttributes` Array entfernt (falls vorhanden).

Beachten Sie, dass Sie zum Erlauben/Verbieten von Attributen nur auf bestimmten Elementen [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden sollten.

## Syntax

```js-nolint
allowAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des Attributs angibt, das global auf Elementen erlaubt sein soll, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namensraum des Attributs enthält und standardmäßig `null` ist.

### Rückgabewert

`true`, wenn der Vorgang die Konfiguration geändert hat, um das Attribut zu erlauben, und `false`, wenn die Konfiguration das Attribut bereits erlaubt hat.

Beachten Sie, dass `false` zurückgegeben werden könnte, wenn die interne Konfiguration:

- ein [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes) Array definiert und das Attribut bereits vorhanden ist (es muss nicht erneut hinzugefügt werden)
- stattdessen das [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes) Array definiert und das angegebene Attribut nicht vorhanden ist (und daher bereits erlaubt ist)
- [`dataAttributes`](/de/docs/Web/API/SanitizerConfig#dataattributes) auf `true` gesetzt ist, aber ein `data-*` Attribut übergeben wird.

## Beispiele

### Anleitung zur Erlaubnis spezifischer Attribute auf Elementen

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

Der Code erstellt zunächst ein neues `Sanitizer` Objekt, das anfänglich keine Attribute erlaubt.
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
Beachten Sie, wie beide Attribute jetzt in die [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) Liste aufgenommen wurden (andere Attribute werden nicht auf Elementen erlaubt, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("How to allow specific attributes on elements","100","480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
