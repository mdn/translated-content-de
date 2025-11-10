---
title: contextualIdentities.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onCreated
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn eine neue kontextbezogene Identität erstellt wird. Kontextbezogene Identitäten können durch Erweiterungen mit der `contextualIdentities` API oder direkt durch den Benutzer über die Benutzeroberfläche des Browsers erstellt werden.

## Syntax

```js-nolint
browser.contextualIdentities.onCreated.addListener(listener)
browser.contextualIdentities.onCreated.removeListener(listener)
browser.contextualIdentities.onCreated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu lauschen. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `changeInfo`
      - : `object`. Ein Objekt, das eine einzige Eigenschaft enthält, `contextualIdentity`, welches ein {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} Objekt ist, das die erstellte Identität darstellt.

## Beispiele

```js
function handleCreated(changeInfo) {
  console.log(`Created: ${changeInfo.contextualIdentity.name}`);
}

browser.contextualIdentities.onCreated.addListener(handleCreated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
