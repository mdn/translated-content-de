---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dies ist ein String und repräsentiert den Typ der Benachrichtigung, die erstellt werden soll. Es gibt vier Typen von Benachrichtigungen: "basic", "image", "list", "progress".

Dies wird in {{WebExtAPIRef("notifications.create()")}} und {{WebExtAPIRef("notifications.update()")}} als die Eigenschaft `type` von {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}} übergeben.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `"basic"`: die Benachrichtigung beinhaltet:
  - einen Titel (`NotificationOptions.title`)
  - eine Nachricht (`NotificationOptions.message`)
  - ein Icon (`NotificationOptions.iconUrl`) {{optional_inline}}
  - eine zusätzliche Nachricht (`NotificationOptions.contextMessage`) {{optional_inline}}
  - bis zu zwei Schaltflächen (`NotificationOptions.buttons`) {{optional_inline}}

- `"image"`: alles in `"basic"` und zusätzlich:
  - ein Bild (`NotificationOptions.imageUrl`)

- `"list"`: alles in `"basic"` und zusätzlich:
  - eine Liste von Elementen (`NotificationOptions.items`)

- `"progress"`: alles in `"basic"` und zusätzlich:
  - einen Fortschrittsanzeiger (`NotificationOptions.progress`)

Aktuell unterstützt Firefox hier nur "basic".

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
