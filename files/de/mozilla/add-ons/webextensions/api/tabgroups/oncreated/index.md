---
title: tabGroups.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onCreated
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Tab-Gruppe erstellt wird.

In Chrome wird dieses Ereignis auch ausgelöst, wenn eine Tab-Gruppe zwischen Fenstern verschoben wird, anstatt {{WebExtAPIRef("tabGroups.onMoved")}}.

## Syntax

```js-nolint
browser.tabGroups.onCreated.addListener(listener)
browser.tabGroups.onCreated.removeListener(listener)
browser.tabGroups.onCreated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiv ist, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details des Zustands der erstellten Tab-Gruppe.

## Beispiele

Überwachen und protokollieren der Erstellung von Tab-Gruppen:

```js
function tabGroupCreated(group) {
  console.log(
    `Tab group with ID ${group.id} was created in window ${group.windowId}.`,
  );
}

browser.tabGroups.onCreated.addListener(tabGroupCreated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
