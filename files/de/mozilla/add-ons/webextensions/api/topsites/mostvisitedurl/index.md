---
title: topSites.MostVisitedURL
slug: Mozilla/Add-ons/WebExtensions/API/topSites/MostVisitedURL
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der `MostVisitedURL`-Typ enthält zwei Eigenschaften: den Titel einer Seite und ihre URL.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `favicon` {{optional_inline}}
  - : `String`. Eine data: URL, die das Favicon der Seite enthält, falls `includeFavicon` in {{WebExtAPIRef("topSites.get()")}} angegeben wurde und das Favicon verfügbar war.
- `title`
  - : `String`. Der Titel der Seite.
- `url`
  - : `String`. Die URL der Seite.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/api/topSites) API von Chromium.
