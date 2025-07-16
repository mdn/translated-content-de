---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Aktualisiert Eigenschaften einer kontextuellen Identität mithilfe ihrer Cookie-Store-ID.

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
  - : `string`. Die ID des Cookie-Stores dieser kontextuellen Identität. Da kontextuelle Identitäten jeweils ihren eigenen Cookie-Store haben, dient dies als Kennzeichnung für die kontextuelle Identität selbst.
- `details`
  - : `object`. Ein Objekt, das neue Werte für die Eigenschaften enthält, die Sie ändern möchten. Dies kann alle folgenden Eigenschaften enthalten:
    - `name` {{optional_inline}}
      - : `string`. Ein neuer Name für die Identität. Dieser wird in der Benutzeroberfläche des Browsers angezeigt, wodurch sie einen neuen Tab in der Identität öffnen können. Er wird auch in der URL-Leiste für Tabs angezeigt, die zu dieser Identität gehören.
    - `color` {{optional_inline}}
      - : `string`. Eine neue Farbe für die Identität. Diese wird verwendet, um Tabs, die zu dieser Identität gehören, hervorzuheben. Sie können einen der folgenden Werte angeben:
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
      - : `string`. Ein neues Symbol für die Identität. Sie können einen der folgenden Werte angeben:
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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}}, die die aktualisierte Identität beschreibt. Falls die Identität nicht gefunden werden konnte oder die Funktion für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel aktualisiert die kontextuelle Identität, deren ID "firefox-container-1" ist, um einen neuen Namen, eine neue Farbe und ein neues Symbol zu erhalten:

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

## Browser-Kompatibilität

{{Compat}}
