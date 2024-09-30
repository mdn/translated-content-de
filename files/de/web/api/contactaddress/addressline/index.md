---
title: "ContactAddress: Eigenschaft addressLine"
short-title: addressLine
slug: Web/API/ContactAddress/addressLine
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`addressLine`** des [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Interfaces ist ein Array von Zeichenfolgen, von denen jede eine Zeile der Adresse angibt, die nicht von einer der anderen Eigenschaften von `ContactAddress` abgedeckt wird. Das Array kann den Straßennamen, die Hausnummer, die Wohnungsnummer, die ländliche Zustellungsroute, beschreibende Anweisungen oder das Postfach enthalten.

## Wert

Ein Array von Zeichenfolgen, von denen jede eine Zeile der Adresse enthält. Zum Beispiel würde die `addressLine`-Eigenschaft für den Mozilla Space in London die folgenden Einträge haben:

| Index | addressLine[] Wert        |
| ----- | ------------------------- |
| 0     | Metal Box Factory         |
| 1     | Suite 441, 4th floor      |
| 2     | 30 Great Guildford Street |

Diese, kombiniert mit zusätzlichen Werten für andere Eigenschaften des [`ContactAddress`](/de/docs/Web/API/ContactAddress), würden die vollständige Adresse darstellen, die lautet:

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
