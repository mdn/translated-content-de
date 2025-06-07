---
title: "Sanitizer: Methode removeAttribute()"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Die **`removeAttribute()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, dass ein Attribut für alle Elemente nicht erlaubt ist.

Das angegebene Attribut wird zur Liste der [`removeAttributes`](/de/docs/Web/API/SanitizerConfig#removeattributes_2) in der Konfiguration dieses Sanitizers hinzugefügt. Das Attribut wird aus der Liste der [`attributes`](/de/docs/Web/API/SanitizerConfig#attributes_2) entfernt, falls vorhanden.

Beachten Sie, dass Sie zum Erlauben/Verbieten von Attributen nur auf bestimmten Elementen [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) verwenden.

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
      - : Ein String, der den Namensraum des Attributs enthält, der standardmäßig auf `null` gesetzt ist.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zum Verbieten spezifischer Attribute

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

Der Code erstellt zuerst ein neues `Sanitizer`-Objekt, das zunächst keine Attribute oder Elemente festlegt. Wir rufen dann `removeAttribute()` mit den Attributen `title` und `mathcolor` auf.

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

Die endgültige Konfiguration wird unten protokolliert. Beachten Sie, wie beide Attribute jetzt zur Liste der [`removeAttributes`](2/de/docs/Web/API/SanitizerConfig#removeattributes_2) hinzugefügt wurden (diese Attribute werden entfernt, wenn sie auf Elementen vorhanden sind, wenn der Sanitizer verwendet wird).

{{EmbedLiveSample("How to disallow specific attributes","100","360px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
