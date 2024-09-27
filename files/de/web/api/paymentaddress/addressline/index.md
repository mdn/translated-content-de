---
title: "PaymentAddress: addressLine-Eigenschaft"
short-title: addressLine
slug: Web/API/PaymentAddress/addressLine
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`addressLine`** schreibgeschützte Eigenschaft des [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Interfaces ist ein Array von Zeichenfolgen, von denen jede eine Zeile der Adresse angibt, die nicht von einer der anderen Eigenschaften von `PaymentAddress` abgedeckt wird.

Diese Zeilen können den Straßennamen, die Hausnummer, die Wohnungsnummer, den ländlichen Zustellweg, beschreibende Anweisungen oder das Postfach umfassen.

## Wert

Ein Array von Zeichenfolgen, wobei jede eine Zeile der Adresse enthält. Zum Beispiel würde das `addressLine` Array für den Mozilla Space in London die folgenden Einträge haben:

| Index | addressLine[]-Wert        |
| ----- | ------------------------- |
| 0     | Metal Box Factory         |
| 1     | Suite 441, 4th floor      |
| 2     | 30 Great Guildford Street |

Diese, kombiniert mit zusätzlichen Werten für andere Eigenschaften des [`PaymentAddress`](/de/docs/Web/API/PaymentAddress), würden die vollständige Adresse darstellen, die lautet:

Mozilla
Metal Box Factory
Suite 441, 4th floor
30 Great Guildford Street
London SE1 0HS
Vereinigtes Königreich

## Browser-Kompatibilität

{{Compat}}
