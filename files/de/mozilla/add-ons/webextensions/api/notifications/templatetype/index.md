---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dies ist ein String und repräsentiert den Typ der Benachrichtigung, die erstellt werden soll. Es gibt vier Arten von Benachrichtigungen: "basic", "image", "list", "progress".

Dies wird an {{WebExtAPIRef("notifications.create()")}} und {{WebExtAPIRef("notifications.update()")}} als Eigenschaft `type` von {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}} übergeben.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `"basic"`: Die Benachrichtigung enthält:

  - einen Titel (`NotificationOptions.title`)
  - eine Nachricht (`NotificationOptions.message`)
  - ein Symbol (`NotificationOptions.iconUrl`) {{optional_inline}}
  - eine zusätzliche Nachricht (`NotificationOptions.contextMessage`) {{optional_inline}}
  - bis zu zwei Schaltflächen (`NotificationOptions.buttons`) {{optional_inline}}

- `"image"`: alles in `"basic"` und zusätzlich:

  - ein Bild (`NotificationOptions.imageUrl`)

- `"list"`: alles in `"basic"` und zusätzlich:

  - eine Liste von Elementen (`NotificationOptions.items`)

- `"progress"`: alles in `"basic"` und zusätzlich:

  - einen Fortschrittsanzeiger (`NotificationOptions.progress`)

Derzeit unterstützt Firefox hier nur "basic".

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
