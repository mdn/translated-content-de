---
title: management.getSelf()
slug: Mozilla/Add-ons/WebExtensions/API/management/getSelf
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft ein {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}}-Objekt ab, das Informationen über das aufrufende Add-on enthält.

Diese API _erfordert nicht_ die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSelf = browser.management.getSelf()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}}-Objekt erfüllt wird, das Informationen über das Add-on enthält.

## Kompatibilität mit Browsern

{{Compat}}

## Beispiele

Das Protokoll des Add-on-Namens:

```js
function gotSelf(info) {
  console.log(`Add-on name: ${info.name}`);
}

const gettingSelf = browser.management.getSelf();
gettingSelf.then(gotSelf);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-getSelf) API. Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.
