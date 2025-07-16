---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Fragt den Benutzer nach den in dem {{WebExtAPIRef("permissions.Permissions")}} Objekt aufgelisteten Berechtigungen.

Das `Permissions`-Argument kann eine `origins`-Eigenschaft enthalten, ein Array von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), eine `permissions`-Eigenschaft, ein Array von [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), oder beides.

Angeforderte Berechtigungen müssen im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Schlüssel der manifest.json definiert sein. Die `origins`-Eigenschaft kann Berechtigungen enthalten, die einem Teil der Hosts entsprechen, die durch eine optionale Berechtigung abgedeckt sind. Zum Beispiel, wenn `optional_permissions` `"*://mozilla.org/"` enthalten, dann kann `permissions.origins` `"https://developer.mozilla.org/"` enthalten.

Anfragen für [nur optionale Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions) dürfen keine anderen optionalen Berechtigungen enthalten.

Die Anfrage kann nur im Handler für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) gestellt werden. Es sei denn, alle angeforderten Berechtigungen werden leise gewährt, fragt der Browser den Benutzer, ob die angeforderten Berechtigungen gewährt werden sollen. Eine einzige Anfrage wird für alle angeforderten Berechtigungen gestellt: entweder werden alle Berechtigungen gewährt oder keine.

Die Erweiterung behält alle gewährten Berechtigungen, selbst bei Upgrade und Deaktivieren und erneutes Aktivieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let requesting = browser.permissions.request(
  permissions                // Permissions object
)
```

### Parameter

- `permissions`
  - : Ein {{WebExtAPIRef("permissions.Permissions")}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn der Erweiterung die im `permissions` Argument aufgelisteten Berechtigungen gewährt werden, oder `false` andernfalls.

## Beispiele

Dieser Code fügt einen Klick-Handler hinzu, der nach verschiedenen Berechtigungen fragt, dann das Ergebnis der Anfrage und die Berechtigungen der Erweiterung nach Abschluss der Anfrage protokolliert.

```js
const permissionsToRequest = {
  permissions: ["bookmarks", "history"],
  origins: ["https://developer.mozilla.org/"],
};

async function requestPermissions() {
  function onResponse(response) {
    if (response) {
      console.log("Permission was granted");
    } else {
      console.log("Permission was refused");
    }
    return browser.permissions.getAll();
  }

  const response = await browser.permissions.request(permissionsToRequest);
  const currentPermissions = await onResponse(response);

  console.log(`Current permissions:`, currentPermissions);
}

document
  .querySelector("#request")
  .addEventListener("click", requestPermissions);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
