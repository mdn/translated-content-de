---
title: "RTCSctpTransport: state-Eigenschaft"
short-title: state
slug: Web/API/RTCSctpTransport/state
l10n:
  sourceCommit: bf7a7b9c81c465afc78519681bf0043ad3587689
---

{{APIRef("WebRTC")}}

Die **`state`**-Eigenschaft des schreibgeschützten [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Interfaces liefert Informationen, die den Status des Stream Control Transmission Protocol ([SCTP](/de/docs/Glossary/SCTP))-Transports beschreiben.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `connecting`
  - : Der anfängliche Zustand, wenn die Verbindung hergestellt wird.
- `connected`
  - : Die Verbindung ist geöffnet und bereit für die Datenübertragung.
- `closed`
  - : Die Verbindung ist geschlossen und kann nicht mehr genutzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
