---
title: "URL: toString()-Methode"
short-title: toString()
slug: Web/API/URL/toString
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`toString()`**-Methode der [`URL`](/de/docs/Web/API/URL)-Schnittstelle gibt einen String zurück, der die gesamte URL enthält. Sie ist im Wesentlichen eine schreibgeschützte Version von [`URL.href`](/de/docs/Web/API/URL/href).

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

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
