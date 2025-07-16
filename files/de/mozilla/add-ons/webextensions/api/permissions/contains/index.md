---
title: permissions.contains()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/contains
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Prüfen Sie, ob die Erweiterung die Berechtigungen hat, die im angegebenen {{WebExtAPIRef("permissions.Permissions")}} Objekt aufgelistet sind.

Das `Permissions`-Argument kann entweder eine `origins`-Eigenschaft enthalten, die ein Array von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist, oder eine `permissions`-Eigenschaft, die ein Array von [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) ist, oder beides.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt. Das Promise löst sich zu `true` auf, wenn die Erweiterung alle angegebenen Berechtigungen besitzt. Bei den Host-Berechtigungen gelten die Berechtigungen als übereinstimmend, wenn die Berechtigungen der Erweiterung [Musterübereinstimmung](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) mit den in `origins` aufgelisteten Berechtigungen haben.

## Syntax

```js-nolint
let getContains = browser.permissions.contains(
  permissions                // Permissions object
)
```

### Parameter

- `permissions`
  - : Ein {{WebExtAPIRef("permissions.Permissions")}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Erweiterung bereits alle im `permissions`-Argument aufgelisteten Berechtigungen hat, oder andernfalls mit `false`.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
