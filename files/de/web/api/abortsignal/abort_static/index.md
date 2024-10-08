---
title: "AbortSignal: abort() statische Methode"
short-title: abort()
slug: Web/API/AbortSignal/abort_static
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal.abort()`** statische Methode gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das bereits als abgebrochen gesetzt ist (und das kein [`abort`](/de/docs/Web/API/AbortSignal/abort_event) Ereignis auslöst).

Dies ist eine Kurzform für den folgenden Code:

```js
const controller = new AbortController();
controller.abort();
return controller.signal;
```

Dies könnte zum Beispiel an eine `fetch`-Methode übergeben werden, um deren Abbruch-Logik auszuführen (d.h. es könnte sein, dass der Code so organisiert ist, dass die Abbruch-Logik ausgeführt werden sollte, auch wenn der beabsichtigte `fetch`-Vorgang noch nicht gestartet wurde).

> [!NOTE]
> Die Methode ist ähnlich in der Absicht zu {{JSxRef("Promise.reject")}}.

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

Eine `AbortSignal` Instanz mit der [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) Eigenschaft auf `true` gesetzt und [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) auf den angegebenen oder Standardgrundwert gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
