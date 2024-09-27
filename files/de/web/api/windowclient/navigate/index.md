---
title: "WindowClient: navigate()-Methode"
short-title: navigate()
slug: Web/API/WindowClient/navigate
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`navigate()`**-Methode der [`WindowClient`](/de/docs/Web/API/WindowClient)-Schnittstelle lädt eine angegebene URL in eine kontrollierte Client-Seite und gibt dann ein {{jsxref("Promise")}} zurück, das auf den existierenden [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

## Syntax

```js-nolint
navigate(url)
```

### Parameter

- `url`
  - : Der Ort, zu dem navigiert werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf den existierenden [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird, wenn die URL aus demselben Ursprung wie der Service Worker stammt, oder auf {{jsxref("Operators/null", "null")}} andernfalls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
