---
title: "NetworkInformation: effectiveType Eigenschaft"
short-title: effectiveType
slug: Web/API/NetworkInformation/effectiveType
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`effectiveType`**-Eigenschaft der [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Schnittstelle gibt den effektiven Typ der Verbindung zurück, das heißt, einen von `slow-2g`, `2g`, `3g` oder `4g`. Dieser Wert wird mithilfe einer Kombination aus kürzlich beobachteten Ping-Zeiten und Downlink-Werten bestimmt.

## Wert

Ein String, der entweder `slow-2g`, `2g`, `3g` oder `4g` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Effektiver Verbindungstyp](/de/docs/Glossary/Effective_connection_type)
- {{HTTPHeader("ECT")}}
