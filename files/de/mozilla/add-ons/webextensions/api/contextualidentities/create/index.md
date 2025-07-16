---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Erstellt eine neue kontextbezogene Identität. Sobald sie erstellt ist, wird der Benutzer in der Lage sein, neue Tabs zu erstellen, die zu dieser kontextbezogenen Identität gehören, genau wie bei den eingebauten Identitäten.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.create(
  details                  // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das Eigenschaften für die neue kontextbezogene Identität enthält. Dies umfasst folgende Eigenschaften:
    - `name`
      - : `string`. Der Name der neuen Identität. Dieser wird in der Benutzeroberfläche des Browsers angezeigt und ermöglicht es, einen neuen Tab zu öffnen, der zu dieser Identität gehört. Er wird auch in der URL-Leiste für Tabs angezeigt, die zu dieser Identität gehören.
    - `color`
      - : `string`. Die Farbe, die mit der neuen Identität verbunden ist. Diese wird verwendet, um Tabs hervorzuheben, die zu dieser Identität gehören. Sie können einen der folgenden Werte angeben:
        - "blue"
        - "turquoise"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "toolbar"

    - `icon`
      - : `string`. Der Name eines Symbols, das in der URL-Leiste für Tabs angezeigt wird, die zu dieser Identität gehören. Sie können einen der folgenden Werte angeben:
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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die neue Identität beschreibt. Wenn die Funktion für kontextbezogene Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel erstellt eine neue kontextbezogene Identität und protokolliert deren Cookie-Store-ID:

```js
function onCreated(context) {
  console.log(`New identity's ID: ${context.cookieStoreId}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .create({
    name: "my-thing",
    color: "purple",
    icon: "briefcase",
  })
  .then(onCreated, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
