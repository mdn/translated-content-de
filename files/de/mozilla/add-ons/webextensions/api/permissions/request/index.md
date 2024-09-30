---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fordern Sie die im angegebenen {{WebExtAPIRef("permissions.Permissions")}} Objekt aufgeführten Berechtigungen an.

Das `Permissions`-Argument kann entweder eine `origins`-Eigenschaft enthalten, die ein Array von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist, oder eine `permissions`-Eigenschaft, die ein Array von [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) ist, oder beides. Berechtigungen müssen aus dem Satz von Berechtigungen stammen, die im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Schlüssel von manifest.json definiert sind. Die `origins`-Eigenschaft kann Berechtigungen enthalten, die mit einer Teilmenge der Hosts übereinstimmen, die durch eine optionale Berechtigung übereinstimmen: Zum Beispiel kann, wenn optional_permissions "\*://mozilla.org/" enthalten, `permissions.origins` "https://developer.mozilla.org/" enthalten.

Die Anfrage kann nur im Handler für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) gestellt werden.

Je nach Umstand wird der Browser die Anfrage wahrscheinlich bearbeiten, indem er den Benutzer fragt, ob die angeforderten Berechtigungen gewährt werden sollen. Es wird nur eine einzige Anfrage für alle angeforderten Berechtigungen gestellt: Entweder werden also alle Berechtigungen gewährt oder keine.

Alle gewährten Berechtigungen werden von der Erweiterung beibehalten, auch über Upgrade und Deaktivierung/Aktivierung hinweg.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn der Erweiterung jetzt alle im `permissions` Argument aufgelisteten Berechtigungen gewährt wurden, oder `false` andernfalls.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fügt einen Klick-Handler hinzu, der verschiedene Berechtigungen anfordert, dann das Ergebnis der Anfrage und die Berechtigungen der Erweiterung nach Abschluss der Anfrage protokolliert.

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
> Derzeit gibt es einen [Fehler beim Anfragen von Origins](https://bugzil.la/1411873) und [beim Anfragen von Berechtigungen auf der about:addons Seite](https://bugzil.la/1382953).

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
