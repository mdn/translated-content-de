---
title: tabGroups.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onUpdated
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich der Zustand einer Tab-Gruppe ändert.

Dieses Ereignis wird nicht ausgelöst, wenn sich die Mitgliedschaft der Gruppe ändert oder wenn eine Tab-Gruppe verschoben wird. Diese Aktualisierungen werden jeweils von {{WebExtAPIRef("tabs.onUpdated")}} und {{WebExtAPIRef("tabGroups.onMoved")}} abgedeckt.

Um `windowId`-Änderungen zu erkennen, verwenden Sie stattdessen {{WebExtAPIRef("tabGroups.onMoved")}}.

## Syntax

```js-nolint
browser.tabGroups.onUpdated.addListener(listener)
browser.tabGroups.onUpdated.removeListener(listener)
browser.tabGroups.onUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener für dieses Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören bei diesem Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:
    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum aktualisierten Zustand der Tab-Gruppe.

## Beispiele

Auf Tab-Gruppen-Updates hören und diese protokollieren:

```js
function tabGroupUpdated(group) {
  console.log(`Tab group with ID ${group.id} was updated.`, group);
}

browser.tabGroups.onUpdated.addListener(tabGroupUpdated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
