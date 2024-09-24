---
title: "PresentationConnection: send()-Methode"
short-title: send()
slug: Web/API/PresentationConnection/send
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`send()`**-Methode des
{{domxref("PresentationConnection")}}-Interfaces weist einen steuernden Browserkontext an,
binäre oder Textdaten an einen darstellenden Browserkontext zu senden.

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`

  - : Die Daten, die an den Präsentationskontext gesendet werden sollen. Diese sind eines der folgenden:

    - {{jsxref("String")}}
    - {{domxref("Blob")}}
    - {{jsxref("Array")}}

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
