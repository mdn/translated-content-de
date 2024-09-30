---
title: search
slug: Mozilla/Add-ons/WebExtensions/API/search
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

Verwenden Sie die `search` API, um die installierten Suchmaschinen abzurufen und Suchvorgänge auszuführen.

Um diese API zu verwenden, müssen Sie die Berechtigung `"search"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

Bei der Wahl zwischen `search.query()` und `search.search()` erwägen Sie Folgendes:

- {{WebExtAPIRef("search.query()")}} ist in den meisten großen Browsern verfügbar und eignet sich daher ideal für den Einsatz in browserübergreifenden Erweiterungen. Es kann jedoch nur Suchanfragen an die Standardsuchmaschine des Browsers stellen.
- {{WebExtAPIRef("search.search()")}} ist nur in Firefox verfügbar. Es hat jedoch den Vorteil, dass es eine Suche mit jeder im Browser installierten Suchmaschine ausführen kann.

## Funktionen

- {{WebExtAPIRef("search.get()")}}
  - : Alle Suchmaschinen abrufen.
- {{WebExtAPIRef("search.query()")}}
  - : Suche mit der Standardsuchmaschine des Browsers durchführen.
- {{WebExtAPIRef("search.search()")}}
  - : Suche mit einer angegebenen Suchmaschine durchführen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
