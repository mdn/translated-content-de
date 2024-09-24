---
title: contextualIdentities.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine neue kontextuelle Identität entfernt wird. Kontextuelle Identitäten können von Erweiterungen mit der `contextualIdentities`-API oder direkt vom Benutzer über die Benutzeroberfläche des Browsers entfernt werden.

## Syntax

```js-nolint
browser.contextualIdentities.onRemoved.addListener(listener)
browser.contextualIdentities.onRemoved.removeListener(listener)
browser.contextualIdentities.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `changeInfo`
      - : `object`. Ein Objekt, das eine einzelne Eigenschaft `contextualIdentity` enthält, welche ein {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}-Objekt darstellt, das die entfernte Identität repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleRemoved(changeInfo) {
  console.log(`Removed: ${changeInfo.contextualIdentity.name}`);
}

browser.contextualIdentities.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}
