---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Aktualisiert Eigenschaften einer kontextuellen Identität anhand ihrer Cookie-Store-ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.update(
  cookieStoreId,           // string
  details                  // object
)
```

### Parameter

- `cookieStoreId`
  - : `string`. Die ID des Cookie-Stores dieser kontextuellen Identität. Da kontextuelle Identitäten jeweils ihren eigenen Cookie-Store haben, dient dies als Bezeichner für die kontextuelle Identität selbst.
- `details`

  - : `object`. Ein Objekt, das neue Werte für die Eigenschaften enthält, die Sie ändern möchten. Dies kann die folgenden Eigenschaften enthalten:

    - `name` {{optional_inline}}
      - : `string`. Ein neuer Name für die Identität. Dieser wird in der Benutzeroberfläche des Browsers angezeigt und ermöglicht das Öffnen eines neuen Tabs in der Identität. Er wird auch in der URL-Leiste für Tabs angezeigt, die zu dieser Identität gehören.
    - `color` {{optional_inline}}

      - : `string`. Eine neue Farbe für die Identität. Diese wird verwendet, um Tabs hervorzuheben, die zu dieser Identität gehören. Sie können hier einen der folgenden Werte angeben:
        - "blue"
        - "turquoise"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "toolbar"

    - `icon` {{optional_inline}}
      - : `string`. Ein neues Symbol für die Identität. Sie können hier einen der folgenden Werte angeben:
        - "fingerprint"
        - "briefcase"
        - "dollar"
        - "cart"
        - "circle"
        - "gift"
        - "vacation"
        - "food"
        - "fruit"
        - "pet"
        - "tree"
        - "chill"
        - "fence"

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die aktualisierte Identität beschreibt. Wenn die Identität nicht gefunden werden konnte oder das Feature für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel aktualisiert die kontextuelle Identität, deren ID "firefox-container-1" ist, mit einem neuen Namen, einer neuen Farbe und einem neuen Symbol:

```js
function onUpdated(context) {
  console.log(`New identity's name: ${context.name}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .update("firefox-container-1", {
    name: "my-thing",
    color: "purple",
    icon: "briefcase",
  })
  .then(onUpdated, onError);
```

{{WebExtExamples}}
