---
title: "PresentationConnection: Methode close()"
short-title: close()
slug: Web/API/PresentationConnection/close
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die `close()`-Methode auf eine [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) aufgerufen wird, beginnt der [User-Agent](/de/docs/Glossary/user_agent) den Prozess, die Verbindung zu schließen, indem er eine leere `closeMessage` mit dem `closeReason` auf `closed` sendet.

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

## Browser-Kompatibilität

{{Compat}}
