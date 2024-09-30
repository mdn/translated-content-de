---
title: tabs.reload()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/reload
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lädt einen Tab neu, optional unter Umgehung des lokalen Webcaches.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let reloading = browser.tabs.reload(
  tabId,            // optional integer
  reloadProperties  // optional object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der neu geladen werden soll. Standardmäßig der ausgewählte Tab des aktuellen Fensters.
- `reloadProperties` {{optional_inline}}

  - : Ein Objekt mit folgenden Eigenschaften:

    - `bypassCache` {{optional_inline}}
      - : `boolean`. Umgeht den lokalen Webcache. Standard ist `false`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der Tab neu geladen wurde. Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Lädt den aktiven Tab des aktuellen Fensters neu:

```js
browser.tabs.reload();
```

Lädt den aktiven Tab des aktuellen Fensters neu, unter Umgehung des Cache:

```js
browser.tabs.reload({ bypassCache: true });
```

Lädt den Tab mit der ID 2 neu, umgeht den Cache und ruft einen Callback auf, wenn fertig:

```js
function onReloaded() {
  console.log(`Reloaded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let reloading = browser.tabs.reload(2, { bypassCache: true });
reloading.then(onReloaded, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-reload) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
