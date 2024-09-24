---
title: "RTCSctpTransport: state-Eigenschaft"
short-title: state
slug: Web/API/RTCSctpTransport/state
l10n:
  sourceCommit: bf7a7b9c81c465afc78519681bf0043ad3587689
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`state`** der {{DOMxRef("RTCSctpTransport")}}-Schnittstelle liefert Informationen, die den Zustand eines Stream Control Transmission Protocol ({{Glossary("SCTP")}}) Transports beschreiben.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `connecting`
  - : Der anfängliche Zustand, wenn die Verbindung hergestellt wird.
- `connected`
  - : Die Verbindung ist offen für die Datenübertragung.
- `closed`
  - : Die Verbindung ist geschlossen und kann nicht mehr verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("RTCSctpTransport")}}
