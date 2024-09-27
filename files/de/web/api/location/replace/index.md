---
title: "Location: replace() Methode"
short-title: replace()
slug: Web/API/Location/replace
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{ APIRef("HTML DOM") }}

Die **`replace()`**-Methode des [`Location`](/de/docs/Web/API/Location)
Interfaces ersetzt die aktuelle Ressource mit der Ressource an der angegebenen URL. Der Unterschied
zur [`assign()`](/de/docs/Web/API/Location/assign)-Methode besteht darin, dass nach der Verwendung von
`replace()` die aktuelle Seite nicht in der Sitzungs-`History` gespeichert wird,
was bedeutet, dass der Benutzer nicht die _Zurück_-Schaltfläche verwenden kann, um zu dieser zurückzukehren.
Nicht zu verwechseln mit der {{jsxref("String")}} Methode {{jsxref("String.prototype.replace()")}}.

## Syntax

```js-nolint
replace(url)
```

### Parameter

- `url`
  - : Ein String, der die URL der Seite enthält, zu der navigiert werden soll.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Browser beschränken Navigationsaufrufe und können diesen Fehler werfen, eine Warnung erzeugen oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der übergebene `url`-Parameter keine gültige URL ist.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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

- Das [`Location`](/de/docs/Web/API/Location) Interface, zu dem es gehört.
- Ähnliche Methoden: [`Location.assign()`](/de/docs/Web/API/Location/assign) und
  [`Location.reload()`](/de/docs/Web/API/Location/reload).
