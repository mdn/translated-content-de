---
title: permissions.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Rufen Sie ein {{WebExtAPIRef("permissions.Permissions")}}-Objekt ab, das alle momentan der Erweiterung gewährten Berechtigungen enthält.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingAll = browser.permissions.getAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("permissions.Permissions")}}-Objekt erfüllt wird, das alle derzeit der Erweiterung gewährten Berechtigungen enthält. Dies umfasst alle Berechtigungen, die die Erweiterung im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel aufgeführt hat, sowie alle im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aufgeführten Berechtigungen, die der Erweiterung durch den Aufruf von {{WebExtAPIRef("permissions.request()")}} gewährt wurden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*"

const currentPermissions = await browser.permissions.getAll();

console.log(currentPermissions.permissions); // [ "webRequest", "tabs" ]
console.log(currentPermissions.origins); // [ "*://*.mozilla.org/*" ]
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)-API von Chromium.
