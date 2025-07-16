---
title: dns
slug: Mozilla/Add-ons/WebExtensions/API/dns
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermöglicht einer Erweiterung, Domänennamen aufzulösen.

Um diese API zu verwenden, muss eine Erweiterung die "dns" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

> [!NOTE]
> DNS schlägt mit NS_ERROR_UNKNOWN_PROXY_HOST fehl, wenn DNS-Proxying über Socks aktiviert ist.

## Funktionen

- {{WebExtAPIRef("dns.resolve()")}}
  - : Löst den gegebenen Hostnamen in einen DNS-Eintrag auf.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
