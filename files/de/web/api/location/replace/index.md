---
title: "Location: replace() Methode"
short-title: replace()
slug: Web/API/Location/replace
l10n:
  sourceCommit: 2e40017af745c716c510927deabcbe559be638d2
---

{{ APIRef("HTML DOM") }}

Die **`replace()`**-Methode des [`Location`](/de/docs/Web/API/Location)-Interfaces ersetzt die aktuelle Ressource durch diejenige an der angegebenen URL. Der Unterschied zur [`assign()`](/de/docs/Web/API/Location/assign)-Methode besteht darin, dass nach Verwendung von `replace()` die aktuelle Seite nicht im Session [`History`](/de/docs/Web/API/History) gespeichert wird, was bedeutet, dass der Benutzer den _Zurück_-Button nicht verwenden kann, um zu ihr zu navigieren. Nicht zu verwechseln mit der {{jsxref("String")}}-Methode {{jsxref("String.prototype.replace()")}}.

## Syntax

```js-nolint
replace(url)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}}, wie ein [`URL`](/de/docs/Web/API/URL)-Objekt, das die URL der Seite enthält, zu der navigiert werden soll.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Browser drosseln Navigationsvorgänge und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig durchgeführt wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der angegebene `url`-Parameter keine gültige URL ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Navigate to the Location.reload article by replacing this page
window.location.replace(
  "https://developer.mozilla.org/en-US/docs/Web/API/Location.reload",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Location`](/de/docs/Web/API/Location)-Interface, zu dem es gehört.
- Ähnliche Methoden: [`Location.assign()`](/de/docs/Web/API/Location/assign) und
  [`Location.reload()`](/de/docs/Web/API/Location/reload).
