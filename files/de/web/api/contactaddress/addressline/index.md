---
title: "ContactAddress: addressLine-Eigenschaft"
short-title: addressLine
slug: Web/API/ContactAddress/addressLine
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`addressLine`** der [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Schnittstelle ist ein Array von Zeichenfolgen, von denen jede eine Zeile der Adresse angibt, die nicht von einer der anderen Eigenschaften von `ContactAddress` abgedeckt wird. Das Array kann den Straßennamen, die Hausnummer, Wohnungsnummer, den Landlieferweg, beschreibende Anweisungen oder das Postfach umfassen.

## Wert

Ein Array von Zeichenfolgen, wobei jede eine Zeile der Adresse enthält. Zum Beispiel würde die `addressLine`-Eigenschaft für den Mozilla Space in London die folgenden Einträge haben:

| Index | Wert von addressLine[]    |
| ----- | ------------------------- |
| 0     | Metal Box Factory         |
| 1     | Suite 441, 4th floor      |
| 2     | 30 Great Guildford Street |

Diese, kombiniert mit zusätzlichen Werten für andere Eigenschaften der [`ContactAddress`](/de/docs/Web/API/ContactAddress), würden die vollständige Adresse ausmachen, die ist:

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
