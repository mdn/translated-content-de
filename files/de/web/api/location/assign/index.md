---
title: "Location: assign() Methode"
short-title: assign()
slug: Web/API/Location/assign
l10n:
  sourceCommit: 2e40017af745c716c510927deabcbe559be638d2
---

{{ APIRef("HTML DOM") }}

Die **`assign()`** Methode der [`Location`](/de/docs/Web/API/Location)-Schnittstelle veranlasst das Fenster, das Dokument an der angegebenen URL zu laden und anzuzeigen. Nach der Navigation kann der Benutzer durch Drücken der „Zurück“-Taste zur Seite zurückkehren, die `Location.assign()` aufgerufen hat.

## Syntax

```js-nolint
assign(url)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}}, wie ein [`URL`](/de/docs/Web/API/URL)-Objekt, das die URL der Seite enthält, zu der navigiert werden soll; zum Beispiel eine absolute URL wie `https://developer.mozilla.org/de/docs/Web/API/Location/reload`, oder eine relative URL — wie `/Web` (nur ein Pfad, um zu einem anderen Dokument im selben Ursprung zu navigieren) oder `#specifications` (nur ein Fragment-String, um zu einem Teil derselben Seite zu navigieren), und so weiter.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der {{Glossary("origin", "origin")}} des Skripts, das die Methode aufruft, nicht derselbe {{Glossary("Same-origin_policy", "origin")}} ist wie der der Seite, die ursprünglich durch das [`Location`](/de/docs/Web/API/Location)-Objekt beschrieben wird, meistens wenn das Skript auf einer anderen Domain gehostet wird. Browser drosseln auch Navigationsaufrufe und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig erfolgt.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `url`-Parameter keine gültige URL ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Navigate to the Location.reload article
window.location.assign(
  "https://developer.mozilla.org/en-US/docs/Web/API/Location/reload",
);

// Then navigate to its Specifications section
window.location.assign("#specifications");

// Eventually navigate to https://developer.mozilla.org/en-US/docs/Web
window.location.assign("/Web");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Location`](/de/docs/Web/API/Location)-Schnittstelle, zu der sie gehört.
- Ähnliche Methoden: [`Location.replace()`](/de/docs/Web/API/Location/replace) und [`Location.reload()`](/de/docs/Web/API/Location/reload).
