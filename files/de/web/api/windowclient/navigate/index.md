---
title: "WindowClient: navigate() Methode"
short-title: navigate()
slug: Web/API/WindowClient/navigate
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`navigate()`** Methode des {{domxref("WindowClient")}}
Interfaces lädt eine angegebene URL in eine kontrollierte Client-Seite und gibt dann ein
{{jsxref("Promise")}} zurück, das auf den bestehenden {{domxref("WindowClient")}} aufgelöst wird.

## Syntax

```js-nolint
navigate(url)
```

### Parameter

- `url`
  - : Der Ort, zu dem navigiert werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf den bestehenden {{domxref("WindowClient")}} aufgelöst wird, wenn die URL vom gleichen Ursprung wie der Service Worker stammt, oder {{jsxref("Operators/null", "null")}} sonst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
