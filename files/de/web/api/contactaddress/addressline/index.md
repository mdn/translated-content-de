---
title: "ContactAddress: addressLine-Eigenschaft"
short-title: addressLine
slug: Web/API/ContactAddress/addressLine
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`addressLine`**-Schreibgeschützte Eigenschaft der {{domxref("ContactAddress")}}-Schnittstelle ist ein Array von Zeichenfolgen, die jeweils eine Zeile der Adresse angeben, die nicht durch eine der anderen Eigenschaften von `ContactAddress` abgedeckt wird. Das Array kann den Straßennamen, die Hausnummer, die Wohnungsnummer, die ländliche Zustellroute, beschreibende Anweisungen oder das Postfach enthalten.

## Wert

Ein Array von Zeichenfolgen, die jeweils eine Zeile der Adresse enthalten. Zum Beispiel hätte die `addressLine`-Eigenschaft für den Mozilla Space in London die folgenden Einträge:

| Index | addressLine[]-Wert        |
| ----- | ------------------------- |
| 0     | Metal Box Factory         |
| 1     | Suite 441, 4th floor      |
| 2     | 30 Great Guildford Street |

Diese, in Kombination mit zusätzlichen Werten für andere Eigenschaften des {{domxref("ContactAddress")}}, würden die vollständige Adresse darstellen, die lautet:

```plaintext
Mozilla
Metal Box Factory
Suite 441, 4th floor
30 Great Guildford Street
London SE1 0HS
United Kingdom
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
