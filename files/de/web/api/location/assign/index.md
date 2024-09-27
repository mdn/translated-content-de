---
title: "Location: assign() Methode"
short-title: assign()
slug: Web/API/Location/assign
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{ APIRef("HTML DOM") }}

Die **`assign()`** Methode der [`Location`](/de/docs/Web/API/Location)
Schnittstelle veranlasst das Fenster, das Dokument an der angegebenen URL zu laden
und anzuzeigen. Nach der Navigation kann der Benutzer zur Seite zurückkehren, die `Location.assign()` aufgerufen hat, indem er die "Zurück"-Taste drückt.

## Syntax

```js-nolint
assign(url)
```

### Parameter

- `url`
  - : Ein String, der die URL der Seite enthält, zu der navigiert werden soll; zum Beispiel eine absolute URL wie `https://developer.mozilla.org/de/docs/Web/API/Location/reload`, oder eine relative URL — wie `/Web` (nur ein Pfad, um zu einem anderen Dokument am gleichen Ursprung zu navigieren) oder `#specifications` (nur ein Fragment-String, um zu einem Teil derselben Seite zu navigieren), und so weiter.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [Ursprung](/de/docs/Glossary/origin) des Skripts, das die Methode aufruft, nicht der [gleich Ursprung](/de/docs/Glossary/Same-origin_policy) der Seite ist, die ursprünglich durch das [`Location`](/de/docs/Web/API/Location) Objekt beschrieben wird, hauptsächlich wenn das Skript auf einer anderen Domain gehostet wird. Browser drosseln auch Navigationen und können diesen Fehler werfen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `url` Parameter keine gültige URL ist.

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

- Die [`Location`](/de/docs/Web/API/Location) Schnittstelle, zu der sie gehört.
- Ähnliche Methoden: [`Location.replace()`](/de/docs/Web/API/Location/replace) und
  [`Location.reload()`](/de/docs/Web/API/Location/reload).
