---
title: "NetworkInformation: downlink-Eigenschaft"
short-title: downlink
slug: Web/API/NetworkInformation/downlink
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

Die **`downlink`** schreibgeschützte Eigenschaft des
{{domxref("NetworkInformation")}}-Interfaces gibt die effektive Bandbreitenschätzung in
Megabit pro Sekunde zurück, gerundet auf das nächste Vielfache von 25 Kilobit pro Sekunde. Dieser
Wert basiert auf kürzlich beobachtetem Anwendungsdurchsatz über kürzlich aktive
Verbindungen, wobei Verbindungen zu einem privaten Adressraum ausgeschlossen sind. In Abwesenheit von
aktuellen Bandbreitenmessdaten wird der Attributwert durch die Eigenschaften der zugrunde liegenden Verbindungstechnologie bestimmt.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Downlink")}}
