---
title: permissions.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/getAll
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

Ruft ein {{WebExtAPIRef("permissions.Permissions")}}-Objekt ab, das alle aktuell der Erweiterung gewährten Berechtigungen enthält.

## Syntax

```js-nolint
let gettingAll = browser.permissions.getAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("permissions.Permissions")}}-Objekt erfüllt wird, das alle aktuell der Erweiterung gewährten Berechtigungen enthält. Dazu gehören alle Berechtigungen, die die Erweiterung unter dem Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aufgelistet hat, sowie alle Berechtigungen, die unter [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aufgelistet sind und die der Erweiterung durch den Aufruf von {{WebExtAPIRef("permissions.request()")}} gewährt wurden.

## Beispiele

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*", and "healthInfo" in "data_collection"

const currentPermissions = await browser.permissions.getAll();

console.log(currentPermissions.permissions); // [ "webRequest", "tabs" ]
console.log(currentPermissions.origins); // [ "*://*.mozilla.org/*" ]
console.log(currentPermissions.data_collection); // [ healthInfo" ]
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)-API von Chromium.
