---
title: sessions.Filter
slug: Mozilla/Add-ons/WebExtensions/API/sessions/Filter
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das `Filter`-Objekt ermöglicht es Ihnen, die Anzahl der von einem Aufruf von {{WebExtAPIRef("sessions.Session", "Session")}} zurückgegebenen Objekte durch {{WebExtAPIRef("sessions.getRecentlyClosed()")}} zu beschränken.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `maxResults` {{optional_inline}}
  - : `number`. Die maximale Anzahl der zurückzugebenden Ergebnisse.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions)-API.
