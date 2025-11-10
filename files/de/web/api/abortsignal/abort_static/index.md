---
title: "AbortSignal: abort() statische Methode"
short-title: abort()
slug: Web/API/AbortSignal/abort_static
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die statische Methode **`AbortSignal.abort()`** gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das bereits auf abgebrochen gesetzt ist (und kein [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignis auslöst).

Dies ist eine Abkürzung für den folgenden Code:

```js
const controller = new AbortController();
controller.abort();
return controller.signal;
```

Dies könnte beispielsweise an eine `fetch`-Methode übergeben werden, um deren Abbruchlogik auszuführen (das heißt, es kann sein, dass der Code so organisiert ist, dass die Abbruchlogik ausgeführt werden sollte, selbst wenn der beabsichtigte Abrufvorgang noch nicht gestartet wurde).

> [!NOTE]
> Die Methode ähnelt in ihrem Zweck {{JSxRef("Promise.reject")}}.

## Syntax

```js-nolint
AbortSignal.abort()
AbortSignal.abort(reason)
```

### Parameter

- `reason`
  - : Der Grund, warum die Operation abgebrochen wurde, der jeder JavaScript-Wert sein kann.
    Wenn nicht angegeben, wird der Grund auf "AbortError" [`DOMException`](/de/docs/Web/API/DOMException) gesetzt.

### Rückgabewert

Eine `AbortSignal`-Instanz mit der Eigenschaft [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) auf `true` gesetzt, und [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) auf den angegebenen oder Standardwert des Grundes gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
