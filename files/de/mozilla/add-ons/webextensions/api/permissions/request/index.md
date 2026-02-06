---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

Fragt den Benutzer nach den im {{WebExtAPIRef("permissions.Permissions")}} Objekt aufgeführten Berechtigungen.

Die angeforderten Berechtigungen müssen im Manifest der Erweiterung aufgelistet sein:

- Im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Schlüssel in der Datei manifest.json für `origins` und `permissions`. Die `origins` Eigenschaft kann Berechtigungen enthalten, die eine Teilmenge der Hosts abdecken, die durch eine optionale Berechtigung abgedeckt sind. Wenn zum Beispiel `"*://mozilla.org/"` in `optional_permissions` enthalten ist, kann `permissions.origins` `"https://developer.mozilla.org/"` beinhalten.
- In der [`gecko.data_collection_permissions.optional`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional) Eigenschaft des `browser_specific_settings` Schlüssels in der manifest.json Datei für `data_collection`.

Anfragen für [nur-optionale Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions) dürfen keine weiteren optionalen Berechtigungen beinhalten.

Die Erweiterung kann die Anfrage nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) stellen. Sofern der Browser nicht in der Lage ist, alle angeforderten Berechtigungen stillschweigend zu gewähren, wird der Benutzer aufgefordert, diese zu gewähren. Der Browser stellt eine Anfrage für alle angeforderten Berechtigungen: Entweder werden alle gewährt oder keine.

Die Erweiterung behält alle gewährten Berechtigungen, auch bei Upgrade und Deaktivierung sowie Aktivierungs- und Deaktivierungszyklen.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn der Browser der Erweiterung die im `permissions` Argument aufgelisteten Berechtigungen gewährt, oder `false` andernfalls.

## Beispiele

Dieser Code fügt einen Klick-Handler hinzu, der den Benutzer um verschiedene Berechtigungen bittet, dann das Ergebnis der Anfrage und die Berechtigungen der Erweiterung nach Abschluss der Anfrage protokolliert.

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
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
