---
title: "PresentationConnection: send()-Methode"
short-title: send()
slug: Web/API/PresentationConnection/send
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`send()`**-Methode des [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)-Interfaces signalisiert einem steuernden Browsing-Kontext, binäre oder Textdaten an einen präsentierenden Browsing-Kontext zu senden.

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`

  - : Die Daten, die an den Präsentationskontext gesendet werden sollen. Sie können eines der folgenden Formate haben:

    - {{jsxref("String")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("Array")}}

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
