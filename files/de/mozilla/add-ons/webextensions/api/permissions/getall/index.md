---
title: permissions.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/getAll
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Gibt ein {{WebExtAPIRef("permissions.Permissions")}}-Objekt zurück, das alle derzeit der Erweiterung gewährten Berechtigungen enthält.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingAll = browser.permissions.getAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("permissions.Permissions")}}-Objekt erfüllt wird, welches alle der Erweiterung derzeit gewährten Berechtigungen enthält. Dies beinhaltet alle Berechtigungen, die die Erweiterung im [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel angegeben hat, und alle im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aufgeführten Berechtigungen, die der Erweiterung durch Aufruf von {{WebExtAPIRef("permissions.request()")}} gewährt wurden.

## Beispiele

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*"

const currentPermissions = await browser.permissions.getAll();

console.log(currentPermissions.permissions); // [ "webRequest", "tabs" ]
console.log(currentPermissions.origins); // [ "*://*.mozilla.org/*" ]
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)-API von Chromium.
