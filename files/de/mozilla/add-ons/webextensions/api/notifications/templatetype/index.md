---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Dies ist ein String und repräsentiert den Typ der Benachrichtigung, die erstellt werden soll. Es gibt vier Arten von Benachrichtigungen: "basic", "image", "list", "progress".

Dies wird als `type`-Eigenschaft von {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}} in {{WebExtAPIRef("notifications.create()")}} und {{WebExtAPIRef("notifications.update()")}} übergeben.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `"basic"`: Die Benachrichtigung enthält:

  - einen Titel (`NotificationOptions.title`)
  - eine Nachricht (`NotificationOptions.message`)
  - ein Symbol (`NotificationOptions.iconUrl`) {{optional_inline}}
  - eine zusätzliche Nachricht (`NotificationOptions.contextMessage`) {{optional_inline}}
  - bis zu zwei Schaltflächen (`NotificationOptions.buttons`) {{optional_inline}}

- `"image"`: alles von `"basic"` und zusätzlich:

  - ein Bild (`NotificationOptions.imageUrl`)

- `"list"`: alles von `"basic"` und zusätzlich:

  - eine Liste von Elementen (`NotificationOptions.items`)

- `"progress"`: alles von `"basic"` und zusätzlich:
  - einen Fortschrittsindikator (`NotificationOptions.progress`)

Derzeit unterstützt Firefox hier nur "basic".

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
