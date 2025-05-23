---
title: tabGroups.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onMoved
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Tab-Gruppe innerhalb eines Fensters oder in ein anderes Fenster verschoben wird. Auch {{WebExtAPIRef("tabs.onMoved")}} wird für die Tabs innerhalb der Gruppe ausgelöst.

Das Ereignis enthält ein {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt. Dies beinhaltet die `windowId`, jedoch nicht die Position der Tab-Gruppe. Um die Position der Tab-Gruppe zu bestimmen, verwenden Sie {{WebExtAPIRef("tabs.query()")}} mit der `groupId` und lesen Sie die `index`-Eigenschaft der zurückgegebenen Tabs.

In Chrome wird dieses Ereignis nicht ausgelöst, wenn eine Tab-Gruppe zwischen Fenstern verschoben wird; stattdessen wird die Gruppe von einem Fenster entfernt und in einem anderen erstellt (wobei {{WebExtAPIRef("tabGroups.onRemoved")}} und {{WebExtAPIRef("tabGroups.onCreated")}} ausgelöst werden).

## Syntax

```js-nolint
browser.tabGroups.onMoved.addListener(listener)
browser.tabGroups.onMoved.removeListener(listener)
browser.tabGroups.onMoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum Zustand der verschobenen Tab-Gruppe.

## Beispiele

Auf Tab-Gruppenbewegungen lauschen und protokollieren:

```js
function tabGroupMoved(group) {
  console.log(
    `Tab group with ID ${group.id} was moved to window ${group.windowId}.`,
  );
}

browser.tabGroups.onMoved.addListener(tabGroupMoved);
```

Eine in ein anderes Fenster verschobene Tab-Gruppe lokalisieren.

```js
browser.tabGroups.onMoved.addListener(group => {
  let tabs = await browser.tabs.query({
    groupId: group.id,
  });
  console.log(`Moved tab group to ${tabs[0].index} in window ${group.windowId}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
