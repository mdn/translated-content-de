---
title: permissions.contains()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/contains
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Überprüfen Sie, ob die Erweiterung die im angegebenen {{WebExtAPIRef("permissions.Permissions")}}-Objekt aufgeführten Berechtigungen besitzt.

Das `Permissions`-Argument kann entweder eine `origins`-Eigenschaft enthalten, die ein Array von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist, oder eine `permissions`-Eigenschaft, die ein Array von [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) ist, oder beides.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt. Das Promise wird nur dann mit `true` erfüllt, wenn die Erweiterung derzeit alle angegebenen Berechtigungen hat. Für Host-Berechtigungen, wenn die Berechtigungen der Erweiterung [Muster-Übereinstimmungen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) mit den in `origins` aufgelisteten Berechtigungen haben, werden sie als übereinstimmend angesehen.

## Syntax

```js-nolint
let getContains = browser.permissions.contains(
  permissions                // Permissions object
)
```

### Parameter

- `permissions`
  - : Ein {{WebExtAPIRef("permissions.Permissions")}}-Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Erweiterung bereits alle im `permissions`-Argument aufgelisteten Berechtigungen besitzt, oder `false` andernfalls.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*"

let testPermissions1 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs"],
};

const testResult1 = await browser.permissions.contains(testPermissions1);
console.log(testResult1); // true

let testPermissions2 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs", "alarms"],
};

const testResult2 = await browser.permissions.contains(testPermissions2);
console.log(testResult2); // false, "alarms" doesn't match

let testPermissions3 = {
  origins: ["https://developer.mozilla.org/"],
  permissions: ["tabs", "webRequest"],
};

const testResult3 = await browser.permissions.contains(testPermissions3);
console.log(testResult3); // true: "https://developer.mozilla.org/", matches: "*://*.mozilla.org/*"

let testPermissions4 = {
  origins: ["https://example.org/"],
};

const testResult4 = await browser.permissions.contains(testPermissions4);
console.log(testResult4); // false: "https://example.org/", `origins` doesn't match
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
