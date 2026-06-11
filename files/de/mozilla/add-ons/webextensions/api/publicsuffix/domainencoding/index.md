---
title: publicSuffix.DomainEncoding
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/DomainEncoding
l10n:
  sourceCommit: 5054fb75bce0f095ed9ca9ad11dabde32eea5cb4
---

Das Kodierungsformat für Domain-Namen, die von {{WebExtAPIRef("publicSuffix.getDomain()")}} zurückgegeben werden.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `"punycode"`
  - : Gibt die Domain in [Punycode](https://en.wikipedia.org/wiki/Punycode) (ASCII-kompatible Kodierung, ACE) zurück. Dieser Wert ist der Standard.
- `"display"`
  - : Gibt die Domain in Unicode-Form zurück, geeignet für die Anzeige an Benutzer. Wenn die Unicode-Darstellung Zeichen enthält, die mit Zeichen aus einem anderen Skript verwechselt werden könnten (verwechselbare Zeichen), wird die Domain stattdessen in Punycode zurückgegeben, um [Homograph-Angriffe](https://en.wikipedia.org/wiki/IDN_homograph_attack) zu verhindern.

## Browser-Kompatibilität

{{Compat}}
