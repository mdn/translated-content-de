---
title: "RTCIceCandidatePairStats: responsesSent-Eigenschaft"
short-title: responsesSent
slug: Web/API/RTCIceCandidatePairStats/responsesSent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`responsesSent`**-Eigenschaft des {{domxref("RTCIceCandidatePairStats")}}-Wörterbuchs gibt die Gesamtanzahl der {{Glossary("STUN")}}-Verbindungsprüfungsantworten an, die bisher über die Verbindung, die durch dieses Kandidatenpaar beschrieben wird, gesendet wurden.

## Wert

Ein ganzzahliger Wert, der angibt, wie oft eine Antwort auf eine {{Glossary("STUN")}}-Verbindungsüberprüfungsanfrage gesendet wurde.

> [!NOTE]
> Da es nicht möglich ist, zwischen Verbindungsprüfungsanfragen und Zustimmungserklärungen zu unterscheiden, umfasst dieser Wert beide.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
