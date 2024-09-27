---
title: "NetworkInformation: Eigenschaft rtt"
short-title: rtt
slug: Web/API/NetworkInformation/rtt
l10n:
  sourceCommit: 8bb6752a4d3ed3d54ab681636d16602e6bf1d74d
---

{{apiref("Network Information API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`rtt`** des [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Interfaces gibt die geschätzte effektive Rundreisezeit (Round Trip Time, RTT) der aktuellen Verbindung zurück, gerundet auf das nächste Vielfache von 25 Millisekunden. Dieser Wert basiert auf kürzlich beobachteten Anwendungs-Ebene-RTT-Messungen über kürzlich aktive Verbindungen hinweg. Er schließt Verbindungen zu einem privaten Adressraum aus. Wenn keine aktuellen Messdaten verfügbar sind, basiert der Wert auf den Eigenschaften der zugrunde liegenden Verbindungstechnologie.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("RTT")}}
