---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Erstellt eine neue kontextbezogene Identität. Sobald sie erstellt wurde, kann der Benutzer neue Tabs erstellen, die zu dieser kontextbezogenen Identität gehören, genauso wie bei den integrierten Identitäten.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.create(
  details                  // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das Eigenschaften für die neue kontextbezogene Identität enthält. Dies umfasst die folgenden Eigenschaften:

    - `name`
      - : `string`. Der Name der neuen Identität. Dieser wird in der Benutzeroberfläche des Browsers angezeigt und ermöglicht das Öffnen eines neuen Tabs, der zu der Identität gehört. Er wird auch in der Adressleiste für Tabs, die zu dieser Identität gehören, angezeigt.
    - `color`

      - : `string`. Die Farbe, die mit der neuen Identität verbunden ist. Diese wird verwendet, um Tabs, die zu dieser Identität gehören, hervorzuheben. Sie können hier einen der folgenden Werte angeben:

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, der die neue Identität beschreibt. Wenn die Funktion für kontextbezogene Identitäten nicht aktiviert ist, wird das Promise abgelehnt.

## Browser-Kompatibilität

{{Compat}}

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
