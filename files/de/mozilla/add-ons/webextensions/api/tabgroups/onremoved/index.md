---
title: tabGroups.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onRemoved
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Tab-Gruppe entfernt wird. Dies geschieht, wenn ein Benutzer eine Tab-Gruppe schließt oder eine Tab-Gruppe automatisch geschlossen wird, weil durch eine andere Änderung keine Tabs mehr enthalten sind.

## Syntax

```js-nolint
browser.tabGroups.onRemoved.addListener(listener)
browser.tabGroups.onRemoved.removeListener(listener)
browser.tabGroups.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum Zustand der entfernten Tab-Gruppe.
    - `removeInfo`
      - : `object`. Informationen darüber, warum die Tab-Gruppe geschlossen wird.
        - `isWindowClosing`
          - : `boolean`. `true`, wenn die Tab-Gruppe entfernt wird, weil ihr Fenster geschlossen wird.

## Beispiele

Lauschen und protokollieren von Entfernungen von Tab-Gruppen:

```js
function tabGroupRemoved(group) {
  console.log(`Tab group with ID ${group.id} was removed.`);
}

browser.tabGroups.onRemoved.addListener(tabGroupRemoved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
