---
title: topSites
slug: Mozilla/Add-ons/WebExtensions/API/topSites
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie die topSites-API, um ein Array zu erhalten, das Seiten enthält, die der Benutzer häufig besucht hat.

Browser verwalten dies, um dem Benutzer zu helfen, leicht zu diesen Orten zurückzukehren. Zum Beispiel bietet Firefox standardmäßig eine Liste der am häufigsten besuchten Seiten auf der "Neuer Tab"-Seite.

Um die topSites-API zu verwenden, müssen Sie die "topSites" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen.

## Typen

- {{WebExtAPIRef("topSites.MostVisitedURL")}}
  - : Ein Objekt, das den Titel und die URL einer Website enthält.

## Methoden

- {{WebExtAPIRef("topSites.get()")}}
  - : Ruft ein Array ab, das alle auf der "Neuer Tab"-Seite des Browsers aufgelisteten Seiten enthält. Beachten Sie, dass die Anzahl der hier zurückgegebenen Seiten browser-spezifisch ist und die zurückgegebenen Seiten wahrscheinlich benutzer-spezifisch sind, basierend auf deren Browserverlauf.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/api/topSites) API von Chromium.
