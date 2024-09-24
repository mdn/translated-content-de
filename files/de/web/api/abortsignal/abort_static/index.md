---
title: "AbortSignal: abort() statische Methode"
short-title: abort()
slug: Web/API/AbortSignal/abort_static
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal.abort()`** statische Methode gibt ein {{domxref("AbortSignal")}} zurück, das bereits als abgebrochen gesetzt wurde (und das kein {{domxref("AbortSignal/abort_event","abort")}}-Ereignis auslöst).

Dies ist eine Kurzform für den folgenden Code:

```js
const controller = new AbortController();
controller.abort();
return controller.signal;
```

Dies könnte beispielsweise an eine Fetch-Methode übergeben werden, um deren Abbruchlogik auszuführen (z.B. kann es sein, dass der Code so organisiert ist, dass die Abbruchlogik ausgeführt werden soll, selbst wenn die beabsichtigte Fetch-Operation noch nicht gestartet wurde).

> [!NOTE]
> Die Methode ist in ihrer Zweckbestimmung ähnlich wie {{JSxRef("Promise.reject")}}.

## Syntax

```js-nolint
AbortSignal.abort()
AbortSignal.abort(reason)
```

### Parameter

- `reason`
  - : Der Grund, warum die Operation abgebrochen wurde, der jeder JavaScript-Wert sein kann.
    Wenn nicht angegeben, wird der Grund auf "AbortError" {{domxref("DOMException")}} gesetzt.

### Rückgabewert

Eine `AbortSignal`-Instanz mit der {{domxref("AbortSignal.aborted")}}-Eigenschaft auf `true` gesetzt und {{domxref("AbortSignal.reason")}} auf den angegebenen oder Standardgrundwert gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
