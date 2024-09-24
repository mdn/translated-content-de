---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
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
  - : `string`. Die ID des Cookie-Stores dieser kontextuellen Identität. Da jede kontextuelle Identität einen eigenen Cookie-Store hat, dient dies als Identifikator für die kontextuelle Identität selbst.
- `details`

  - : `object`. Ein Objekt mit neuen Werten für die Eigenschaften, die Sie ändern möchten. Dies kann jede der folgenden Eigenschaften enthalten:

    - `name` {{optional_inline}}
      - : `string`. Ein neuer Name für die Identität. Dieser wird in der Benutzeroberfläche des Browsers angezeigt und ermöglicht das Öffnen eines neuen Tabs in der Identität. Er wird auch in der URL-Leiste für Tabs angezeigt, die zu dieser Identität gehören.
    - `color` {{optional_inline}}

      - : `string`. Eine neue Farbe für die Identität. Diese wird verwendet, um Tabs zu markieren, die zu dieser Identität gehören. Sie können hier einen der folgenden Werte angeben:

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

      - : `string`. Ein neues Icon für die Identität. Sie können hier einen der folgenden Werte angeben:

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die aktualisierte Identität beschreibt. Wenn die Identität nicht gefunden werden konnte oder das kontextuelle Identitäten-Feature nicht aktiviert ist, wird das Promise abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel aktualisiert die kontextuelle Identität, deren ID "firefox-container-1" ist, um einen neuen Namen, eine neue Farbe und ein neues Icon zu haben:

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
