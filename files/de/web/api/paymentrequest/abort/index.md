---
title: "PaymentRequest: abort() Methode"
short-title: abort()
slug: Web/API/PaymentRequest/abort
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die `PaymentRequest.abort()` Methode des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Interfaces veranlasst den User-Agent, die Zahlungsanforderung zu beenden und jegliche Benutzeroberfläche, die angezeigt werden könnte, zu entfernen.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

## Beispiele

Das folgende Beispiel richtet einen Timeout ein, um die möglicherweise verlassene oder vernachlässigte Zahlungsanforderung zu löschen.

```js
const request = new PaymentRequest(supportedInstruments, details, options);

const paymentTimeout = setTimeout(
  () => {
    clearTimeout(paymentTimeout);
    request
      .abort()
      .then(() => {
        print("Payment timed out after 20 minutes.");
      })
      .catch(() => {
        print(
          "Unable to abort, because the user is currently in the process " +
            "of paying.",
        );
      });
  },
  20 * 60 * 1000,
); /* 20 minutes */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
