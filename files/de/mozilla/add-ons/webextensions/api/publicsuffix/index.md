---
title: publicSuffix
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix
l10n:
  sourceCommit: 5054fb75bce0f095ed9ca9ad11dabde32eea5cb4
---

Verwenden Sie die `publicSuffix`-API, um mit Domain-Namen und öffentlichen Suffixen (effektive Top-Level-Domains, oder eTLDs) aus der [Public Suffix List](https://publicsuffix.org/) zu arbeiten. Da die integrierte Public Suffix List des Browsers immer aktuell ist, müssen Erweiterungen keine Kopie einbinden.

Häufige Anwendungsfälle umfassen:

- Identifikation der {{Glossary("Registrable_domain", "registrierbaren Domain")}} (eTLD+1) eines Hostnamens, um verwandte Domains zu gruppieren oder Drittanbieteranfragen zu erkennen.
- Überprüfung, ob ein Hostname selbst ein öffentliches Suffix ist.
- Extrahieren des öffentlichen Suffix-Teils eines Hostnamens.

Um diese API zu verwenden, benötigen Sie die Berechtigung `"publicSuffix"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("publicSuffix.DomainEncoding")}}
  - : Gibt das Kodierungsformat für Domain-Namen an, die von {{WebExtAPIRef("publicSuffix.getDomain()")}} zurückgegeben werden.

## Funktionen

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}
  - : Gibt `true` zurück, wenn der Hostname ein bekanntes öffentliches Suffix ist.
- {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}
  - : Gibt das bekannte öffentliche Suffix eines Hostnamens zurück oder `null`, wenn keines existiert.
- {{WebExtAPIRef("publicSuffix.getDomain()")}}
  - : Gibt die registrierbare Domain (eTLD+1) eines Hostnamens zurück.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
