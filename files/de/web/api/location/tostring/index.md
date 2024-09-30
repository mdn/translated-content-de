---
title: "Location: toString() Methode"
short-title: toString()
slug: Web/API/Location/toString
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`toString()`**-[Stringifizierer](/de/docs/Glossary/stringifier)-Methode des
[`Location`](/de/docs/Web/API/Location)-Interfaces gibt einen String zurück, der die
gesamte URL enthält. Es ist eine schreibgeschützte Version von [`Location.href`](/de/docs/Web/API/Location/href).

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
