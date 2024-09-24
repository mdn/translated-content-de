---
title: Datenschutz
slug: Mozilla/Add-ons/WebExtensions/API/privacy
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Zugriff auf verschiedene datenschutzbezogene Browsereinstellungen und deren Modifikation.

Um die Datenschutz-API zu verwenden, müssen Sie die "privacy" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Eigenschaften

- {{WebExtAPIRef("privacy.network")}}
  - : Zugriff auf und Modifikation von Datenschutzeinstellungen, die das Netzwerk betreffen.
- {{WebExtAPIRef("privacy.services")}}
  - : Zugriff auf und Modifikation von Datenschutzeinstellungen, die sich auf die vom Browser oder Dritten bereitgestellten Dienste beziehen.
- {{WebExtAPIRef("privacy.websites")}}
  - : Zugriff auf und Modifikation von Datenschutzeinstellungen, die das Verhalten von Websites betreffen.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy)-API von Chromium.
