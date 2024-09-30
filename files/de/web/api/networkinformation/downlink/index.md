---
title: "NetworkInformation: downlink-Eigenschaft"
short-title: downlink
slug: Web/API/NetworkInformation/downlink
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`downlink`**-Eigenschaft der [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Schnittstelle gibt die effektive Bandbreitenschätzung in Megabit pro Sekunde zurück, gerundet auf das nächste Vielfache von 25 Kilobit pro Sekunde. Dieser Wert basiert auf kürzlich beobachtetem Durchsatz auf Anwendungsschicht über kürzlich aktive Verbindungen, ausgenommen Verbindungen zu einem privaten Adressraum. In Abwesenheit kürzlich gemessener Bandbreitendaten wird der Attributwert durch die Eigenschaften der zugrunde liegenden Verbindungstechnologie bestimmt.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Downlink")}}
