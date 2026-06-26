---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
l10n:
  sourceCommit: 8ede916a8af8537114db737b914cef1d721fda84
---

Aktualisiert die Eigenschaften einer kontextuellen Identität anhand ihrer Cookie-Store-ID.

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.update(
  cookieStoreId,           // string
  details                  // object
)
```

### Parameter

- `cookieStoreId`
  - : `string`. Die ID des Cookie-Stores dieser kontextuellen Identität. Da jede kontextuelle Identität ihren eigenen Cookie-Store hat, dient dies als Identifikator für diese kontextuelle Identität.
- `details`
  - : `object`. Ein Objekt, das neue Werte für die Eigenschaften enthält, die Sie ändern möchten. Dieses Objekt kann jede dieser Eigenschaften enthalten:
    - `name` {{optional_inline}}
      - : `string`. Ein neuer Name für die Identität. Dieser Name wird in der Benutzeroberfläche des Browsers angezeigt und ermöglicht es den Benutzern, eine neue Registerkarte in der Identität zu öffnen. Er wird auch in der URL-Leiste für Registerkarten angezeigt, die zu dieser Identität gehören.
    - `color` {{optional_inline}}
      - : `string`. Eine neue Farbe für die Identität. Diese Farbe wird verwendet, um Registerkarten zu kennzeichnen, die zu dieser Identität gehören. Siehe {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} für Details zu den unterstützten Farbwerten.
    - `icon` {{optional_inline}}
      - : `string`. Ein neues Symbol für die Identität. Siehe {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} für Details zu den unterstützten Symbolwerten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} erfüllt wird, die die aktualisierte Identität beschreibt. Wenn die Identität nicht gefunden werden konnte oder die kontextuellen Identitätsfunktionen nicht aktiviert sind, wird das Promise abgelehnt.

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
