---
title: suchen
slug: Mozilla/Add-ons/WebExtensions/API/search
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

Verwenden Sie die Search-API, um die installierten Suchmaschinen abzurufen und Suchanfragen durchzuführen.

Um diese API zu verwenden, benötigen Sie die `"search"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Wenn Sie zwischen `search.query()` und `search.search()` wählen, beachten Sie Folgendes:

- {{WebExtAPIRef("search.query()")}} ist in den meisten großen Browsern verfügbar und eignet sich daher ideal für die Verwendung in browserübergreifenden Erweiterungen. Es kann jedoch nur Suchanfragen gegen die Standardsuchmaschine des Browsers ausgeben.
- {{WebExtAPIRef("search.search()")}} ist nur in Firefox verfügbar. Es hat jedoch den Vorteil, dass es eine Suche gegen jede im Browser installierte Suchmaschine durchführen kann.

## Funktionen

- {{WebExtAPIRef("search.get()")}}
  - : Alle Suchmaschinen abrufen.
- {{WebExtAPIRef("search.query()")}}
  - : Mit der Standardsuchmaschine des Browsers suchen.
- {{WebExtAPIRef("search.search()")}}
  - : Mit einer angegebenen Suchmaschine suchen.

{{WebExtExamples("h2")}}

## Kompatibilität mit Browsern

{{Compat}}
