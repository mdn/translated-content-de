---
title: "URL: Methode toString()"
short-title: toString()
slug: Web/API/URL/toString
l10n:
  sourceCommit: 06a96ca44a86fef907996bb01ecf72cc0f1a36d0
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die Methode **`toString()`** der Schnittstelle [`URL`](/de/docs/Web/API/URL) gibt einen String zurück, der die vollständige URL enthält. Dieser entspricht dem Wert von [`URL.href`](/de/docs/Web/API/URL/href).

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/toString",
);
url.toString(); // should return the URL as a string
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`URL`](/de/docs/Web/API/URL), zu der diese Methode gehört.
