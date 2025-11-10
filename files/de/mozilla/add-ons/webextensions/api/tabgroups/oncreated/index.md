---
title: tabGroups.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onCreated
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiv lauscht, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum Zustand der erstellten Tab-Gruppe.

## Beispiele

Lauschen und Protokollieren der Erstellung einer Tab-Gruppe:

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
