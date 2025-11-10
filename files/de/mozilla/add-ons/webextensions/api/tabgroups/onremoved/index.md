---
title: tabGroups.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onRemoved
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn eine Tab-Gruppe entfernt wird. Dies geschieht, wenn ein Benutzer eine Tab-Gruppe schließt oder eine Tab-Gruppe automatisch geschlossen wird, da eine andere Änderung bedeutet, dass sie keine Tabs mehr enthält.

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
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es abhört, `false` andernfalls.

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

Auf das Entfernen von Tab-Gruppen hören und diese protokollieren:

```js
function tabGroupRemoved(group) {
  console.log(`Tab group with ID ${group.id} was removed.`);
}

browser.tabGroups.onRemoved.addListener(tabGroupRemoved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
