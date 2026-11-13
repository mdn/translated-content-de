---
title: "QuotaExceededError: QuotaExceededError()-Konstruktor"
short-title: QuotaExceededError()
slug: Web/API/QuotaExceededError/QuotaExceededError
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("DOM")}}

Der **`QuotaExceededError()`**-Konstruktor erstellt ein neues `QuotaExceededError`-Objekt.

## Syntax

```js-nolint
new QuotaExceededError()
new QuotaExceededError(message)
new QuotaExceededError(message, options)
```

### Parameter

- `message` {{optional_inline}}
  - : Die [`message`](/de/docs/Web/API/DOMException/message). Der Standardwert ist `""`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `quota` {{optional_inline}}
      - : Eine Zahl, die das überschrittene, vom System festgelegte Speicherkontingent (in Bytes) angibt, oder `undefined`, wenn diese Information nicht verfügbar ist. Entspricht [`QuotaExceededError.quota`](/de/docs/Web/API/QuotaExceededError/quota).
    - `requested` {{optional_inline}}
      - : Eine Zahl, die die während des Vorgangs angeforderte Speichermenge (in Bytes) angibt, oder `undefined`, wenn diese Information nicht verfügbar ist. Entspricht [`QuotaExceededError.requested`](/de/docs/Web/API/QuotaExceededError/requested).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `option.quota` oder `options.requested` negativ ist oder wenn `option.requested < option.quota` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException()`](/de/docs/Web/API/DOMException/DOMException)
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
