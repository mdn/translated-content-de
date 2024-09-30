---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dies ist eine Zeichenkette und repräsentiert den Typ der Benachrichtigung, die erstellt werden soll. Es gibt vier Typen von Benachrichtigungen: "basic", "image", "list", "progress".

Dies wird in {{WebExtAPIRef("notifications.create()")}} und {{WebExtAPIRef("notifications.update()")}} als `type`-Eigenschaft von {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}} übergeben.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `"basic"`: Die Benachrichtigung umfasst:

  - einen Titel (`NotificationOptions.title`)
  - eine Nachricht (`NotificationOptions.message`)
  - ein Symbol (`NotificationOptions.iconUrl`) {{optional_inline}}
  - eine zusätzliche Nachricht (`NotificationOptions.contextMessage`) {{optional_inline}}
  - bis zu zwei Schaltflächen (`NotificationOptions.buttons`) {{optional_inline}}

- `"image"`: alles in `"basic"` und außerdem:

  - ein Bild (`NotificationOptions.imageUrl`)

- `"list"`: alles in `"basic"` und außerdem:

  - eine Liste von Elementen (`NotificationOptions.items`)

- `"progress"`: alles in `"basic"` und außerdem:

  - einen Fortschrittsindikator (`NotificationOptions.progress`)

Aktuell unterstützt Firefox nur "basic" hier.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
