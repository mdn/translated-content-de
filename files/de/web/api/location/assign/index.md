---
title: "Location: assign() Methode"
short-title: assign()
slug: Web/API/Location/assign
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{ APIRef("HTML DOM") }}

Die **`assign()`**-Methode des [`Location`](/de/docs/Web/API/Location)-Interfaces bewirkt, dass das Fenster das Dokument an der angegebenen URL lädt und anzeigt. Nach der Navigation kann der Benutzer durch Drücken der „Zurück“-Taste zur Seite zurückkehren, die `Location.assign()` aufgerufen hat.

## Syntax

```js-nolint
assign(url)
```

### Parameter

- `url`
  - : Ein String, der die URL der Seite enthält, zu der navigiert werden soll; beispielsweise eine absolute URL wie `https://developer.mozilla.org/de/docs/Web/API/Location/reload`, oder eine relative URL – wie `/Web` (nur ein Pfad, um zu einem anderen Dokument am selben Ursprung zu navigieren) oder `#specifications` (nur ein Fragment-String, um zu einem Teil derselben Seite zu navigieren), und so weiter.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der {{Glossary("origin", "Ursprung")}} des Skripts, das die Methode aufruft, nicht derselbe {{Glossary("Same-origin_policy", "Ursprung")}} der ursprünglich durch das [`Location`](/de/docs/Web/API/Location)-Objekt beschriebenen Seite ist, hauptsächlich wenn das Skript auf einer anderen Domain gehostet wird. Browser drosseln auch Navigationsoperationen und können diesen Fehler werfen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `url`-Parameter keine gültige URL ist.

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

- Das [`Location`](/de/docs/Web/API/Location)-Interface, zu dem es gehört.
- Ähnliche Methoden: [`Location.replace()`](/de/docs/Web/API/Location/replace) und
  [`Location.reload()`](/de/docs/Web/API/Location/reload).
