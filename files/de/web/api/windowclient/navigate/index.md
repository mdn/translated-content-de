---
title: "WindowClient: navigate()-Methode"
short-title: navigate()
slug: Web/API/WindowClient/navigate
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`navigate()`**-Methode des [`WindowClient`](/de/docs/Web/API/WindowClient)-Interfaces lädt eine angegebene URL in eine kontrollierte Client-Seite und gibt dann ein {{jsxref("Promise")}} zurück, das sich auf den vorhandenen [`WindowClient`](/de/docs/Web/API/WindowClient) auflöst.

## Syntax

```js-nolint
navigate(url)
```

### Parameter

- `url`
  - : Der Ort, zu dem navigiert werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf den bestehenden [`WindowClient`](/de/docs/Web/API/WindowClient) auflöst, wenn die URL vom gleichen Ursprung wie der Service Worker stammt, oder auf {{jsxref("null")}} andernfalls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
