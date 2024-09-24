---
title: "PresentationConnection: close()-Methode"
short-title: close()
slug: Web/API/PresentationConnection/close
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die `close()`-Methode auf einer {{domxref("PresentationConnection")}} aufgerufen wird, beginnt der {{Glossary("user agent")}} den Vorgang, die Verbindung zu schließen, indem eine leere `closeMessage` gesendet wird und der `closeReason` auf `closed` gesetzt wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
