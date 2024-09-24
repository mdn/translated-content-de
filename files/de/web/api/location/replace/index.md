---
title: "Location: replace() Methode"
short-title: replace()
slug: Web/API/Location/replace
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{ APIRef("HTML DOM") }}

Die **`replace()`** Methode der {{DOMXref("Location")}} Schnittstelle ersetzt die aktuelle Ressource mit derjenigen an der angegebenen URL. Der Unterschied zur {{domxref("Location.assign","assign()")}} Methode besteht darin, dass nach der Verwendung von `replace()` die aktuelle Seite nicht in der Sitzungs-{{domxref("History")}} gespeichert wird, was bedeutet, dass der Benutzer die _Zurück_-Taste nicht verwenden kann, um zu ihr zu navigieren. Nicht zu verwechseln mit der {{jsxref("String")}} Methode {{jsxref("String.prototype.replace()")}}.

## Syntax

```js-nolint
replace(url)
```

### Parameter

- `url`
  - : Ein String, der die URL der Seite enthält, zu der navigiert werden soll.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Browser drosseln Navigationsversuche und könnten diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der übergebene `url` Parameter keine gültige URL ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Navigiere zum Artikel Location.reload, indem diese Seite ersetzt wird
window.location.replace(
  "https://developer.mozilla.org/de/docs/Web/API/Location.reload",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Location")}} Schnittstelle, zu der sie gehört.
- Ähnliche Methoden: {{domxref("Location.assign()")}} und
  {{domxref("Location.reload()")}}.
