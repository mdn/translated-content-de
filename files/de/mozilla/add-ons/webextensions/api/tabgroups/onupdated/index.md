---
title: tabGroups.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onUpdated
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
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
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum aktualisierten Zustand der Tab-Gruppe.

## Beispiele

Auf Tab-Gruppen-Aktualisierungen hören und diese protokollieren:

```js
function tabGroupUpdated(group) {
  console.log(`Tab group with ID ${group.id} was updated.`, group);
}

browser.tabGroups.onUpdated.addListener(tabGroupUpdated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
