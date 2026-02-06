---
title: permissions.contains()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/contains
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

Prüft, ob die Erweiterung über spezifische Berechtigungen verfügt.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Erweiterung alle im `permissions` Argument aufgeführten Berechtigungen hat, oder mit `false` ansonsten. Für Host-Berechtigungen gilt, wenn die Berechtigungen der Erweiterung die Berechtigungen in `origins` [musterartig übereinstimmen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), dann werden sie als übereinstimmend betrachtet.

## Beispiele

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*", and "healthInfo" in "data_collection"

let testPermissions1 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs"],
  data_collection: ["healthInfo"],
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

let testPermissions5 = {
  data_collection: ["searchTerms"],
};

const testResult5 = await browser.permissions.contains(testPermissions4);
console.log(testResult5); // false: "searchTerms" doesn't match data type in `data_collection`
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
