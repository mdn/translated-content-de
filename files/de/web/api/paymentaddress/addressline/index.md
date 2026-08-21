---
title: "PaymentAddress: Eigenschaft addressLine"
short-title: addressLine
slug: Web/API/PaymentAddress/addressLine
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`addressLine`** des [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Interfaces ist ein Array von Zeichenfolgen. Jede dieser Zeichenfolgen spezifiziert eine Zeile der Adresse, die nicht von einer der anderen Eigenschaften von `PaymentAddress` abgedeckt wird.

Diese Zeilen können den Straßennamen, die Hausnummer, die Wohnungsnummer, die ländliche Lieferroute, beschreibende Anweisungen oder ein Postfach umfassen.

## Wert

Ein Array von Zeichenfolgen, wobei jede Zeichenfolge eine Zeile der Adresse enthält. Zum Beispiel hätte das `addressLine`-Array für den Mozilla Space in London die folgenden Einträge:

| Index | Wert von addressLine[]    |
| ----- | ------------------------- |
| 0     | Metal Box Factory         |
| 1     | Suite 441, 4th floor      |
| 2     | 30 Great Guildford Street |

Diese kombiniert mit zusätzlichen Werten für andere Eigenschaften des [`PaymentAddress`](/de/docs/Web/API/PaymentAddress) würden die vollständige Adresse darstellen, die lautet:

Mozilla
Metal Box Factory
Suite 441, 4th floor
30 Great Guildford Street
London SE1 0HS
United Kingdom

## Browser-Kompatibilität

{{Compat}}
