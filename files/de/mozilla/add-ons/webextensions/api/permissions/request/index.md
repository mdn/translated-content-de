---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fragen Sie nach dem Satz von Berechtigungen, der im angegebenen {{WebExtAPIRef("permissions.Permissions")}}-Objekt aufgeführt ist.

Das `Permissions`-Argument kann entweder eine `origins`-Eigenschaft enthalten, die ein Array von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist, oder eine `permissions`-Eigenschaft, die ein Array von [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) ist, oder beides. Berechtigungen müssen aus dem Satz von Berechtigungen stammen, die im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Schlüssel der manifest.json definiert sind. Die `origins`-Eigenschaft kann Berechtigungen enthalten, die mit einer Teilmenge der von einer optionalen Berechtigung abgedeckten Hosts übereinstimmen: Zum Beispiel, wenn `optional_permissions` "\*://mozilla.org/" umfasst, dann kann `permissions.origins` "https\://developer.mozilla.org/" enthalten.

Die Anfrage kann nur innerhalb des Handlers für eine [Nutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) gestellt werden.

Je nach den Umständen wird der Browser die Anfrage wahrscheinlich bearbeiten, indem er den Nutzer fragt, ob die angeforderten Berechtigungen gewährt werden sollen. Es wird nur eine einzige Anfrage für alle angeforderten Berechtigungen gestellt: somit werden entweder alle Berechtigungen gewährt oder keine.

Alle gewährten Berechtigungen verbleiben bei der Erweiterung, auch bei Upgrade und beim Deaktivieren/Aktivieren-Zyklus.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn der Erweiterung nun alle im `permissions`-Argument aufgeführten Berechtigungen gewährt werden, oder andernfalls `false`.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Derzeit gibt es einen [Fehler beim Anfordern von Ursprüngen](https://bugzil.la/1411873) und [beim Anfordern von Berechtigungen auf der about:addons-Seite](https://bugzil.la/1382953).

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
