---
title: dns
slug: Mozilla/Add-ons/WebExtensions/API/dns
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Ermöglicht einer Erweiterung, Domainnamen aufzulösen.

Um diese API zu verwenden, muss eine Erweiterung die "dns" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

> [!NOTE]
> DNS schlägt mit NS_ERROR_UNKNOWN_PROXY_HOST fehl, wenn DNS über SOCKS-Proxy aktiviert ist.

## Funktionen

- {{WebExtAPIRef("dns.resolve()")}}
  - : Löst den angegebenen Hostnamen zu einem DNS-Eintrag auf.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
