---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dies ist ein String und repräsentiert den Typ der zu erstellenden Benachrichtigung. Es gibt vier Arten von Benachrichtigungen: "basic", "image", "list" und "progress".

Dies wird als `type`-Eigenschaft in {{WebExtAPIRef("notifications.create()")}} und {{WebExtAPIRef("notifications.update()")}} an {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}} übergeben.

## Typ

Die Werte dieses Typs sind Strings. Mögliche Werte sind:

- `"basic"`: die Benachrichtigung umfasst:

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

  - einen Fortschrittsindikator (`NotificationOptions.progress`)

Derzeit unterstützt Firefox hier nur "basic".

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) von Chromium.
