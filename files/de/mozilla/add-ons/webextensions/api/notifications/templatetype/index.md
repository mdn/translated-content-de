---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dies ist ein String und stellt den Typ der Benachrichtigung dar, die erstellt werden soll. Es gibt vier Typen von Benachrichtigungen: "basic", "image", "list", "progress".

Dies wird als `type`-Eigenschaft von {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}} an {{WebExtAPIRef("notifications.create()")}} und {{WebExtAPIRef("notifications.update()")}} übergeben.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `"basic"`: die Benachrichtigung beinhaltet:
  - einen Titel (`NotificationOptions.title`)
  - eine Nachricht (`NotificationOptions.message`)
  - ein Symbol (`NotificationOptions.iconUrl`) {{optional_inline}}
  - eine zusätzliche Nachricht (`NotificationOptions.contextMessage`) {{optional_inline}}
  - bis zu zwei Schaltflächen (`NotificationOptions.buttons`) {{optional_inline}}

- `"image"`: alles wie bei `"basic"` und zusätzlich:
  - ein Bild (`NotificationOptions.imageUrl`)

- `"list"`: alles wie bei `"basic"` und zusätzlich:
  - eine Liste von Elementen (`NotificationOptions.items`)

- `"progress"`: alles wie bei `"basic"` und zusätzlich:
  - eine Fortschrittsanzeige (`NotificationOptions.progress`)

Aktuell unterstützt Firefox hier nur "basic".

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
