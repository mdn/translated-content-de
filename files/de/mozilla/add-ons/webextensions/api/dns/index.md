---
title: dns
slug: Mozilla/Add-ons/WebExtensions/API/dns
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Ermöglicht einer Erweiterung das Auflösen von Domainnamen.

Um diese API zu nutzen, muss eine Erweiterung die "dns"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

> [!NOTE]
> DNS schlägt mit NS_ERROR_UNKNOWN_PROXY_HOST fehl, wenn das Proxieing von DNS über Socks aktiviert ist.

## Funktionen

- {{WebExtAPIRef("dns.resolve()")}}
  - : Löst den angegebenen Hostnamen in einen DNS-Datensatz auf.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
