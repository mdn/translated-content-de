---
title: "Location: toString()-Methode"
short-title: toString()
slug: Web/API/Location/toString
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`toString()`**-{{Glossary("stringifier")}}-Methode der
{{domxref("Location")}}-Schnittstelle gibt einen String zurück, der die
gesamte URL enthält. Sie ist eine schreibgeschützte Version von {{domxref("Location.href")}}.

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
// Stellen Sie sich vor, dieser Code wird auf https://example.com/path?search#hash ausgeführt
const result = window.location.toString(); // Gibt zurück: 'https://example.com/path?search#hash'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
