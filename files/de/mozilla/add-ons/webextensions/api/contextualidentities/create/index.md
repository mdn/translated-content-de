---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
l10n:
  sourceCommit: 8ede916a8af8537114db737b914cef1d721fda84
---

Erstellt eine kontextbezogene Identität. Sobald erstellt, kann der Benutzer Tabs erstellen, die zu dieser kontextbezogenen Identität gehören, ebenso wie bei den eingebauten Identitäten.

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.create(
  details                  // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das Eigenschaften für die neue kontextbezogene Identität enthält. Dieses Objekt enthält die folgenden Eigenschaften:
    - `name`
      - : `string`. Der Name der neuen Identität. Dieser Name wird in der Benutzeroberfläche des Browsers angezeigt und ermöglicht es den Benutzern, einen neuen Tab zu öffnen, der zu der Identität gehört. Er wird auch in der URL-Leiste für Tabs angezeigt, die zu dieser Identität gehören.
    - `color`
      - : `string`. Die Farbe, die mit der neuen Identität verknüpft ist. Diese Farbe wird verwendet, um Tabs hervorzuheben, die zu dieser Identität gehören. Siehe {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} für Details zu den unterstützten Farbwerten.
    - `icon`
      - : `string`. Der Name eines Symbols, das in der URL-Leiste für Tabs angezeigt wird, die zu dieser Identität gehören. Siehe {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} für Details zu den unterstützten Symbolwerten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die neue Identität beschreibt. Wenn das Feature für kontextbezogene Identitäten nicht aktiviert ist, wird das Versprechen abgelehnt.

## Beispiele

Dieses Beispiel erstellt eine kontextbezogene Identität und protokolliert ihre Cookie-Store-ID:

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
