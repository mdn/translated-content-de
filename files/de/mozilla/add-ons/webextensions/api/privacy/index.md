---
title: privacy
slug: Mozilla/Add-ons/WebExtensions/API/privacy
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Greifen Sie auf verschiedene datenschutzbezogene Browsereinstellungen zu und ändern Sie diese.

Um die Datenschutz-API zu verwenden, müssen Sie die "privacy" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Eigenschaften

- {{WebExtAPIRef("privacy.network")}}
  - : Greifen Sie auf Datenschutzeinstellungen zu und ändern Sie diese, die sich auf das Netzwerk beziehen.
- {{WebExtAPIRef("privacy.services")}}
  - : Greifen Sie auf Datenschutzeinstellungen zu und ändern Sie diese, die sich auf die vom Browser oder von Dritten bereitgestellten Dienste beziehen.
- {{WebExtAPIRef("privacy.websites")}}
  - : Greifen Sie auf Datenschutzeinstellungen zu und ändern Sie diese, die sich auf das Verhalten von Websites beziehen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) von Chromium.
