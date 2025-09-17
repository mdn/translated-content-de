---
title: "AbortController: abort() Methode"
short-title: abort()
slug: Web/API/AbortController/abort
l10n:
  sourceCommit: a4fd602696976d79d8690f9c86a2a1c1f2b9b9eb
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode des [`AbortController`](/de/docs/Web/API/AbortController)-Interfaces bricht eine asynchrone Operation ab, bevor sie abgeschlossen ist. Dies kann verwendet werden, um [fetch-Anfragen](/de/docs/Web/API/Window/fetch), den Verbrauch von Antwortkörpern oder Streams abzubrechen.

## Syntax

```js-nolint
abort()
abort(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Der Grund, warum die Operation abgebrochen wurde, der jeder JavaScript-Wert sein kann. Wenn kein Grund angegeben ist, wird der Grund auf "AbortError" [`DOMException`](/de/docs/Web/API/DOMException) gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe die [`AbortSignal`-Seite](/de/docs/Web/API/AbortSignal#examples) für Anwendungsbeispiele.

Sie können ein [vollständig funktionierendes Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api) finden; Sie können es auch [live in Aktion sehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
