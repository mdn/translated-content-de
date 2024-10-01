---
title: "PresentationConnection: Methode close()"
short-title: close()
slug: Web/API/PresentationConnection/close
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die `close()`-Methode auf einer [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) aufgerufen wird, beginnt der {{Glossary("user_agent", "User Agent")}} den Prozess des Schließens der Verbindung, indem er eine leere `closeMessage` sendet mit dem `closeReason` auf `closed` gesetzt.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
