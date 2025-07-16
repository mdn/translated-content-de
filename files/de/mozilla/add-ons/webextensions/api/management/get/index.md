---
title: management.get()
slug: Mozilla/Add-ons/WebExtensions/API/management/get
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
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
  - : `string`. ID des Add-ons, dessen Informationen Sie abrufen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}} Objekt erfüllt wird, das Informationen über das Add-on enthält. Das Promise wird abgelehnt, wenn keine Erweiterung mit der angegebenen ID installiert ist oder wenn der Zugriff auf die Erweiterung dem Anrufer nicht gestattet ist.

## Beispiele

Geben Sie den Namen des Add-ons aus, dessen ID "my-add-on" ist:

```js
let id = "my-add-on";

function got(info) {
  console.log(info.name);
}

let getting = browser.management.get(id);
getting.then(got);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-get) API von Chromium. Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.
