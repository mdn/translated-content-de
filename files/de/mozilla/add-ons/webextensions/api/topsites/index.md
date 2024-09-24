---
title: topSites
slug: Mozilla/Add-ons/WebExtensions/API/topSites
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie die topSites API, um ein Array mit häufig besuchten Seiten des Nutzers zu erhalten.

Browser pflegen diese, um dem Nutzer zu helfen, leicht zu diesen Orten zurückzukehren. Beispielsweise bietet Firefox standardmäßig eine Liste der am häufigsten besuchten Seiten auf der „Neuer Tab“-Seite.

Um die topSites API zu verwenden, müssen Sie die "topSites" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Typen

- {{WebExtAPIRef("topSites.MostVisitedURL")}}
  - : Ein Objekt, das den Titel und die URL einer Website enthält.

## Methoden

- {{WebExtAPIRef("topSites.get()")}}
  - : Ruft ein Array mit allen in der „Neuer Tab“-Seite des Browsers gelisteten Seiten ab. Beachten Sie, dass die Anzahl der hier zurückgegebenen Seiten browser-spezifisch ist und die zurückgegebenen Seiten wahrscheinlich spezifisch für den Nutzer sind, basierend auf seinem Browserverlauf.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/api/topSites) API.
