---
title: sessions.Filter
slug: Mozilla/Add-ons/WebExtensions/API/sessions/Filter
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Das `Filter`-Objekt ermöglicht es Ihnen, die Anzahl der {{WebExtAPIRef("sessions.Session", "Session")}}-Objekte einzuschränken, die durch einen Aufruf von {{WebExtAPIRef("sessions.getRecentlyClosed()")}} zurückgegeben werden.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `maxResults` {{optional_inline}}
  - : `number`. Die maximale Anzahl der zurückzugebenden Ergebnisse.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API von Chromium.
