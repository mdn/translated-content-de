---
title: tabGroups.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onMoved
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Tab-Gruppe innerhalb eines Fensters oder in ein anderes Fenster verschoben wird. {{WebExtAPIRef("tabs.onMoved")}} wird auch für die Tabs innerhalb der Gruppe ausgelöst.

Dem Ereignis wird ein {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt übergeben. Dieses enthält die `windowId`, jedoch nicht die Position der Tab-Gruppe. Um die Position der Tab-Gruppe zu bestimmen, verwenden Sie {{WebExtAPIRef("tabs.query()")}} mit der `groupId` und lesen Sie die `index`-Eigenschaft des zurückgegebenen Tabs.

In Chrome wird dieses Ereignis nicht ausgelöst, wenn eine Tab-Gruppe zwischen Fenstern verschoben wird; stattdessen wird die Gruppe aus einem Fenster entfernt und in einem anderen erstellt (löst {{WebExtAPIRef("tabGroups.onRemoved")}} und {{WebExtAPIRef("tabGroups.onCreated")}} aus).

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
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum Zustand der verschobenen Tab-Gruppe.

## Beispiele

Hören Sie auf die Bewegung von Tab-Gruppen und protokollieren Sie sie:

```js
function tabGroupMoved(group) {
  console.log(
    `Tab group with ID ${group.id} was moved to window ${group.windowId}.`,
  );
}

browser.tabGroups.onMoved.addListener(tabGroupMoved);
```

Finden Sie eine Tab-Gruppe, die in ein anderes Fenster verschoben wurde.

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
