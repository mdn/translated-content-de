---
title: "ContactAddress: addressLine-Eigenschaft"
short-title: addressLine
slug: Web/API/ContactAddress/addressLine
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`addressLine`** der [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Schnittstelle ist ein Array von Zeichenfolgen, wobei jede Zeichenfolge eine Adresszeile angibt, die nicht von einer der anderen Eigenschaften von `ContactAddress` abgedeckt wird. Das Array kann Straßenname, Hausnummer, Wohnungsnummer, ländliche Zustellroute, beschreibende Anweisungen oder das Postfach umfassen.

## Wert

Ein Array von Zeichenfolgen, wobei jede eine Zeile der Adresse enthält. Zum Beispiel hätte die `addressLine`-Eigenschaft für den Mozilla Space in London die folgenden Einträge:

| Index | addressLine[] Wert        |
| ----- | ------------------------- |
| 0     | Metal Box Factory         |
| 1     | Suite 441, 4th floor      |
| 2     | 30 Great Guildford Street |

Diese, kombiniert mit zusätzlichen Werten für andere Eigenschaften der [`ContactAddress`](/de/docs/Web/API/ContactAddress), würden die vollständige Adresse darstellen, die wie folgt lautet:

```plain
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
