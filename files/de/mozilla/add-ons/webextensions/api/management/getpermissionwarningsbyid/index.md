---
title: management.getPermissionWarningsById()
slug: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsById
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wenn der Benutzer ein Add-on installiert oder aktualisiert, kann der Browser den Benutzer auf besonders mächtige [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hinweisen, die das Add-on angefordert hat. Nicht alle Berechtigungen führen zu Warnungen, und dieses Verhalten ist nicht in allen Browsern standardisiert.

Mit der ID eines Add-ons gibt diese Funktion die Berechtigungswarnungen dafür als ein Array von Zeichenketten zurück.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingWarnings = browser.management.getPermissionWarningsById(
  id                  // string
)
```

### Parameter

- `id`
  - : `string`. ID des Add-ons, dessen Berechtigungswarnungen Sie abrufen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Zeichenketten erfüllt wird, von denen jede den Text einer Berechtigungswarnung enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die Berechtigungswarnungen für das Add-on, dessen ID "my-add-on" ist:

```js
let id = "my-add-on";

function gotWarnings(warnings) {
  for (const warning of warnings) {
    console.log(warning);
  }
}

browser.management.getPermissionWarningsById(id).then(gotWarnings);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-getPermissionWarningsById). Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.
