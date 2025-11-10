---
title: "PresentationConnection: send()-Methode"
short-title: send()
slug: Web/API/PresentationConnection/send
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Presentation")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`send()`**-Methode des [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)-Interfaces veranlasst einen steuernden Browsing-Kontext, binäre oder Textdaten an einen präsentierenden Browsing-Kontext zu senden.

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`
  - : Die Daten, die an den Präsentationskontext gesendet werden sollen. Es wird einer der folgenden Typen sein:
    - {{jsxref("String")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("Array")}}

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
