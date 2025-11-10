---
title: "QuotaExceededError: QuotaExceededError()-Konstruktor"
short-title: QuotaExceededError()
slug: Web/API/QuotaExceededError/QuotaExceededError
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Der **`QuotaExceededError()`**-Konstruktor erstellt ein neues `QuotaExceededError`-Objekt.

## Syntax

```js-nolint
new QuotaExceededError()
new QuotaExceededError(message)
new QuotaExceededError(message, options)
```

### Parameter

- `message` {{optional_inline}}
  - : Die [`message`](/de/docs/Web/API/DOMException/message). Standardmäßig `""`.
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften haben kann:
    - `quota` {{optional_inline}}
      - : Eine Zahl, die das systemdefinierte Speicherkontingent (in Bytes) darstellt, das überschritten wurde, oder `undefined`, wenn die Information nicht verfügbar ist. Entspricht [`QuotaExceededError.quota`](/de/docs/Web/API/QuotaExceededError/quota).
    - `requested` {{optional_inline}}
      - : Eine Zahl, die die Menge an Speicher (in Bytes) darstellt, die während der Operation angefordert wurde, oder `undefined`, wenn die Information nicht verfügbar ist. Entspricht [`QuotaExceededError.requested`](/de/docs/Web/API/QuotaExceededError/requested).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `option.quota` oder `options.requested` negativ ist oder wenn `option.requested < option.quota`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException()`](/de/docs/Web/API/DOMException/DOMException)
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
