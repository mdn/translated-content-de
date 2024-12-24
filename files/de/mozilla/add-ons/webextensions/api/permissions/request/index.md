---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
l10n:
  sourceCommit: 509fa54c6dd5ff8c4719a3a7db45917a68718765
---

{{AddonSidebar}}

Fordert den Benutzer auf, die im {{WebExtAPIRef("permissions.Permissions")}}-Objekt aufgelisteten Berechtigungen zu erteilen.

Das `Permissions`-Argument kann eine `origins`-Eigenschaft, ein Array von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), eine `permissions`-Eigenschaft, ein Array von [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) oder beides enthalten.

Angeforderte Berechtigungen müssen im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Schlüssel der manifest.json definiert sein. Die `origins`-Eigenschaft kann Berechtigungen enthalten, die mit einem Unterabschnitt der Hosts übereinstimmen, die von einer optionalen Berechtigung abgedeckt werden. Zum Beispiel, wenn `optional_permissions` `"*://mozilla.org/"` enthält, dann kann `permissions.origins` `"https://developer.mozilla.org/"` enthalten.

Anfragen für [ausschließlich optionale Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions) dürfen keine anderen optionalen Berechtigungen enthalten.

Die Anfrage kann nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) gestellt werden. Es sei denn, alle angeforderten Berechtigungen sind solche, die stillschweigend gewährt werden, fragt der Browser den Benutzer, ob die angeforderten Berechtigungen gewährt werden sollen. Eine Anfrage wird für alle angeforderten Berechtigungen gestellt: Entweder werden alle Berechtigungen gewährt oder keine.

Die Erweiterung behält alle gewährten Berechtigungen, selbst bei Upgrades sowie Deaktivierungs- und Aktivierungszyklen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let requesting = browser.permissions.request(
  permissions                // Permissions object
)
```

### Parameter

- `permissions`
  - : Ein {{WebExtAPIRef("permissions.Permissions")}}-Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn der Erweiterung die im `permissions`-Argument genannten Berechtigungen gewährt werden, oder andernfalls `false`.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fügt einen Klick-Handler hinzu, der verschiedene Berechtigungen anfragt, dann das Ergebnis der Anfrage und die Berechtigungen der Erweiterung nach Abschluss der Anfrage protokolliert.

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

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)-API von Chromium.
