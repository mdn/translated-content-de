---
title: "Sanitizer: Methode removeAttribute()"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`removeAttribute()`**-Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces legt fest, dass ein Attribut bei der Verwendung des Sanitizers von allen Elementen entfernt werden soll.

Die Methode kann sowohl mit einer [Zulassungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) als auch mit einer [Entfernungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) verwendet werden. Bei Verwendung mit einer Entfernungskonfiguration wird das angegebene Attribut dem `removeAttributes`-Array hinzugefügt. Bei Verwendung mit einer Zulassungskonfiguration wird das Attribut aus dem `attributes`-Array entfernt (falls vorhanden).

Beachten Sie, dass zum Zulassen/Verweigern von Attributen nur bei bestimmten Elementen die Methode [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwendet werden soll.

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameter

- `attribute`
  - : Ein String, der den Namen des Attributs angibt, das global auf Elementen abgelehnt werden soll, oder ein Objekt mit den folgenden Eigenschaften:
    - `name`
      - : Ein String, der den Namen des Attributs enthält.
    - `namespace` {{optional_inline}}
      - : Ein String, der den Namespace des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, um das Attribut zu verweigern, und `false`, wenn das Attribut bereits verweigert wurde.

Beachten Sie, dass `false` zurückgegeben werden könnte, wenn die interne Konfiguration:

- ein [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes)-Array definiert, das das angegebene Attribut bereits enthält (und daher schon gefiltert ist)
- stattdessen ein [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes)-Array definiert, das das Attribut bereits ausschließt (und daher schon verweigert wird)

## Beispiele

### Anleitung zum Verweigern spezifischer Attribute

Dieses Beispiel zeigt, wie mit `removeAttribute()` angegeben werden kann, dass ein Attribut von Elementen entfernt werden soll.

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

Der Code erstellt zunächst ein neues `Sanitizer`-Objekt, das anfangs keine Attribute oder Elemente angibt. Dann rufen wir `removeAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute nun zur [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2)-Liste hinzugefügt wurden (diese Attribute werden entfernt, wenn sie bei der Verwendung des Sanitizers auf Elementen vorhanden sind).

{{EmbedLiveSample("Anleitung zum Verweigern spezifischer Attribute","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
