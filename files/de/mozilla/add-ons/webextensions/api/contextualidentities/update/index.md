---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
  - : `string`. Die ID des Cookie-Stores dieser kontextuellen Identität. Da kontextuelle Identitäten jeweils ihren eigenen Cookie-Store haben, dient dies als Identifikator für die kontextuelle Identität selbst.
- `details`
  - : `object`. Ein Objekt, das neue Werte für die Eigenschaften enthält, die Sie ändern möchten. Es kann folgende Eigenschaften enthalten:
    - `name` {{optional_inline}}
      - : `string`. Ein neuer Name für die Identität. Dieser wird in der Benutzeroberfläche des Browsers angezeigt und ermöglicht es ihnen, einen neuen Tab in der Identität zu öffnen. Er wird auch in der URL-Leiste für Tabs angezeigt, die zu dieser Identität gehören.
    - `color` {{optional_inline}}
      - : `string`. Eine neue Farbe für die Identität. Diese wird verwendet, um Tabs hervorzuheben, die zu dieser Identität gehören. Sie können einen der folgenden Werte angeben:
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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, das die aktualisierte Identität beschreibt. Wenn die Identität nicht gefunden werden konnte oder die Funktionalität für kontextuelle Identitäten nicht aktiviert ist, wird das Versprechen abgelehnt.

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
