---
title: search
slug: Mozilla/Add-ons/WebExtensions/API/search
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie die Search-API, um die installierten Suchmaschinen abzurufen und Suchanfragen durchzuführen.

Um diese API zu verwenden, benötigen Sie die `"search"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Wenn Sie zwischen `search.query()` und `search.search()` wählen, ziehen Sie Folgendes in Betracht:

- {{WebExtAPIRef("search.query()")}} ist in den meisten großen Browsern verfügbar, was es ideal für den Einsatz in plattformübergreifenden Erweiterungen macht. Es kann jedoch nur Suchanfragen mit der Standardsuchmaschine des Browsers durchführen.
- {{WebExtAPIRef("search.search()")}} ist nur in Firefox verfügbar. Es hat jedoch den Vorteil, dass es mit jeder im Browser installierten Suchmaschine Suchanfragen durchführen kann.

## Funktionen

- {{WebExtAPIRef("search.get()")}}
  - : Alle Suchmaschinen abrufen.
- {{WebExtAPIRef("search.query()")}}
  - : Suche mit der Standardsuchmaschine des Browsers.
- {{WebExtAPIRef("search.search()")}}
  - : Suche mit einer angegebenen Suchmaschine.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
