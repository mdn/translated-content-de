---
title: dns
slug: Mozilla/Add-ons/WebExtensions/API/dns
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermöglicht es einer Erweiterung, Domainnamen aufzulösen.

Um diese API zu verwenden, muss eine Erweiterung die "dns" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

> [!NOTE]
> DNS wird mit NS_ERROR_UNKNOWN_PROXY_HOST fehlschlagen, wenn DNS-Proxying über Socks aktiviert ist.

## Funktionen

- {{WebExtAPIRef("dns.resolve()")}}
  - : Löst den angegebenen Hostnamen in einen DNS-Eintrag auf.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
