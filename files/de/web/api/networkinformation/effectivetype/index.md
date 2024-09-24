---
title: "NetworkInformation: effectiveType-Eigenschaft"
short-title: effectiveType
slug: Web/API/NetworkInformation/effectiveType
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`effectiveType`**-Eigenschaft des
{{domxref("NetworkInformation")}}-Interfaces gibt den effektiven Verbindungstyp zurück, was entweder `slow-2g`, `2g`, `3g` oder `4g` bedeutet. Dieser Wert wird basierend auf einer Kombination kürzlich beobachteter Round-Trip-Zeiten und Downlink-Werte bestimmt.

## Wert

Ein String, der entweder `slow-2g`, `2g`, `3g` oder `4g` ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Effektiver Verbindungstyp](/de/docs/Glossary/Effective_connection_type)
- {{HTTPHeader("ECT")}}
