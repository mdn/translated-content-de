---
title: contextualIdentities.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ausgelöst, wenn die Eigenschaften einer kontextuellen Identität, wie ihr Name, Symbol oder ihre Farbe, geändert werden. Kontextuelle Identitäten können durch Erweiterungen über die `contextualIdentities` API oder direkt durch den Benutzer über die Benutzeroberfläche des Browsers aktualisiert werden.

## Syntax

```js-nolint
browser.contextualIdentities.onUpdated.addListener(listener)
browser.contextualIdentities.onUpdated.removeListener(listener)
browser.contextualIdentities.onUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `changeInfo`
      - : `object`. Ein Objekt, das eine einzelne Eigenschaft enthält, `contextualIdentity`, welches ein {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} Objekt ist, das die Identität repräsentiert, deren Eigenschaften aktualisiert wurden.

## Beispiele

```js
function handleUpdated(changeInfo) {
  console.log(`Updated: ${changeInfo.contextualIdentity.name}`);
}

browser.contextualIdentities.onUpdated.addListener(handleUpdated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
