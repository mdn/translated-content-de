---
title: tabGroups.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onRemoved
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Tab-Gruppe entfernt wird. Dies geschieht, wenn ein Benutzer eine Tab-Gruppe schließt oder eine Tab-Gruppe automatisch geschlossen wird, weil eine andere Änderung bedeutet, dass sie keine Tabs mehr enthält.

## Syntax

```js-nolint
browser.tabGroups.onRemoved.addListener(listener)
browser.tabGroups.onRemoved.removeListener(listener)
browser.tabGroups.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Zuhörer zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Zuhörer.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum Status der entfernten Tab-Gruppe.
    - `removeInfo`
      - : `object`. Informationen darüber, warum die Tab-Gruppe geschlossen wird.
        - `isWindowClosing`
          - : `boolean`. `true`, wenn die Tab-Gruppe entfernt wird, weil ihr Fenster geschlossen wird.

## Beispiele

Hören Sie zu und protokollieren Sie das Entfernen von Tab-Gruppen:

```js
function tabGroupRemoved(group) {
  console.log(`Tab group with ID ${group.id} was removed.`);
}

browser.tabGroups.onRemoved.addListener(tabGroupRemoved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
