---
title: "RTCSctpTransport: state-Eigenschaft"
short-title: state
slug: Web/API/RTCSctpTransport/state
l10n:
  sourceCommit: bf7a7b9c81c465afc78519681bf0043ad3587689
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`state`** des [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Interfaces liefert Informationen, die den Zustand des Stream Control Transmission Protocol ([SCTP](/de/docs/Glossary/SCTP))-Transports beschreiben.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `connecting`
  - : Der Anfangszustand, wenn die Verbindung hergestellt wird.
- `connected`
  - : Die Verbindung ist für die Datenübertragung offen.
- `closed`
  - : Die Verbindung ist geschlossen und kann nicht mehr verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
