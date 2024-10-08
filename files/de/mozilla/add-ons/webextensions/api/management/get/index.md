---
title: management.get()
slug: Mozilla/Add-ons/WebExtensions/API/management/get
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft ein {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}} Objekt ab, das Informationen über das angegebene Add-on enthält.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingInfo = browser.management.get(
  id                  // string
)
```

### Parameter

- `id`
  - : `string`. ID des Add-ons, dessen Informationen abgerufen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}} Objekt erfüllt wird, das Informationen über das Add-on enthält. Das Promise wird abgelehnt, wenn keine Erweiterung mit der angegebenen ID installiert ist oder die Erweiterung vom Aufrufer nicht zugänglich ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie den Namen des Add-ons, dessen ID "my-add-on" ist:

```js
let id = "my-add-on";

function got(info) {
  console.log(info.name);
}

let getting = browser.management.get(id);
getting.then(got);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-get) API. Diese Dokumentation leitet sich von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code ab.
