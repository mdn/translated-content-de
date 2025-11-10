---
title: tabGroups.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onUpdated
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn sich der Zustand einer Tab-Gruppe ändert.

Dieses Ereignis wird nicht ausgelöst, wenn sich die Mitgliedschaft der Gruppe ändert oder wenn eine Tab-Gruppe verschoben wird. Diese Aktualisierungen werden durch {{WebExtAPIRef("tabs.onUpdated")}} und {{WebExtAPIRef("tabGroups.onMoved")}} abgedeckt.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum aktualisierten Zustand der Tab-Gruppe.

## Beispiele

Hören Sie auf Aktualisierungen von Tab-Gruppen und protokollieren Sie sie:

```js
function tabGroupUpdated(group) {
  console.log(`Tab group with ID ${group.id} was updated.`, group);
}

browser.tabGroups.onUpdated.addListener(tabGroupUpdated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
