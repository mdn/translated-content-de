---
title: "Location: toString()-Methode"
short-title: toString()
slug: Web/API/Location/toString
l10n:
  sourceCommit: 06a96ca44a86fef907996bb01ecf72cc0f1a36d0
---

{{ApiRef("Location")}}

Die **`toString()`**-{{Glossary("stringifier", "Stringifier")}}-Methode der [`Location`](/de/docs/Web/API/Location)-Schnittstelle gibt einen String zurück, der die vollständige URL enthält. Dieser hat denselben Wert wie [`Location.href`](/de/docs/Web/API/Location/href).

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die URL des Objekts darstellt.

## Beispiele

```js
// Let's imagine this code is executed on https://example.com/path?search#hash
const result = window.location.toString(); // Returns: 'https://example.com/path?search#hash'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
