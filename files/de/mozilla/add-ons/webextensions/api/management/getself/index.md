---
title: management.getSelf()
slug: Mozilla/Add-ons/WebExtensions/API/management/getSelf
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft ein {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}}-Objekt ab, das Informationen über das aufrufende Add-on enthält.

Diese API _erfordert nicht_ die "management"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSelf = browser.management.getSelf()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}}-Objekt erfüllt wird, das Informationen über das Add-on enthält.

## Beispiele

Protokollieren Sie den Namen des Add-ons:

```js
function gotSelf(info) {
  console.log(`Add-on name: ${info.name}`);
}

const gettingSelf = browser.management.getSelf();
gettingSelf.then(gotSelf);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-getSelf)-API von Chromium. Diese Dokumentation ist von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code abgeleitet.
