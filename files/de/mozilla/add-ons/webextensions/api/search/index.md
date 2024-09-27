---
title: search
slug: Mozilla/Add-ons/WebExtensions/API/search
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

Verwenden Sie die `search`-API, um die installierten Suchmaschinen abzurufen und Suchanfragen auszuführen.

Um diese API zu verwenden, benötigen Sie die `"search"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Beim Wählen zwischen `search.query()` und `search.search()` sollten Sie Folgendes beachten:

- {{WebExtAPIRef("search.query()")}} ist in den meisten großen Browsern verfügbar und eignet sich somit ideal für den Einsatz in plattformübergreifenden Erweiterungen. Allerdings kann damit nur über die Standardsuchmaschine des Browsers gesucht werden.
- {{WebExtAPIRef("search.search()")}} ist nur in Firefox verfügbar. Der Vorteil besteht jedoch darin, dass damit eine Suche über jede im Browser installierte Suchmaschine ausgeführt werden kann.

## Funktionen

- {{WebExtAPIRef("search.get()")}}
  - : Alle Suchmaschinen abrufen.
- {{WebExtAPIRef("search.query()")}}
  - : Mit der Standardsuchmaschine des Browsers suchen.
- {{WebExtAPIRef("search.search()")}}
  - : Mit einer angegebenen Suchmaschine suchen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
