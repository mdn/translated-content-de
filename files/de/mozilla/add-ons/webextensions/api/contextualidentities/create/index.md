---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erstellt eine neue kontextuelle Identität. Nachdem sie erstellt wurde, kann der Benutzer neue Tabs erstellen, die zu dieser kontextuellen Identität gehören, genau wie bei den eingebauten Identitäten.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.create(
  details                  // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das Eigenschaften für die neue kontextuelle Identität enthält. Dieses Objekt enthält die folgenden Eigenschaften:
    - `name`
      - : `string`. Der Name der neuen Identität. Dieser wird in der Benutzeroberfläche des Browsers angezeigt, sodass der Benutzer einen neuen Tab öffnen kann, der zu der Identität gehört. Er wird auch in der Adressleiste für Tabs angezeigt, die zu dieser Identität gehören.
    - `color`
      - : `string`. Die Farbe, die mit der neuen Identität verbunden ist. Diese wird verwendet, um Tabs hervorzuheben, die zu dieser Identität gehören. Sie können hier einen der folgenden Werte angeben:
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
      - : `string`. Der Name eines Symbols, das in der Adressleiste für Tabs angezeigt wird, die zu dieser Identität gehören. Sie können hier einen der folgenden Werte angeben:
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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} aufgelöst wird, der die neue Identität beschreibt. Wenn das Feature für kontextuelle Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel erstellt eine neue kontextuelle Identität und protokolliert deren Cookie Store ID:

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
