---
title: "PresentationConnection: send() Methode"
short-title: send()
slug: Web/API/PresentationConnection/send
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`send()`**-Methode der
[`PresentationConnection`](/de/docs/Web/API/PresentationConnection)-Schnittstelle weist einen steuernden Browserkontext an,
binäre oder Textdaten an einen darstellenden Browserkontext zu senden.

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`

  - : Die Daten, die an den Präsentationskontext gesendet werden sollen. Es wird eines der folgenden sein:

    - {{jsxref("String")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("Array")}}

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
