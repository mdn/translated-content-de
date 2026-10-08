---
title: tabGroups.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onMoved
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Wird ausgelöst, wenn eine Tab-Gruppe innerhalb eines Fensters oder in ein anderes Fenster verschoben wird. {{WebExtAPIRef("tabs.onMoved")}} wird auch für die Tabs innerhalb der Gruppe ausgelöst.

Dem Ereignis wird ein {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt übergeben. Dieses enthält die `windowId`, aber nicht die Position der Tab-Gruppe. Um die Position der Tab-Gruppe zu ermitteln, verwenden Sie {{WebExtAPIRef("tabs.query()")}} mit der `groupId` und lesen Sie die `index`-Eigenschaft des zurückgegebenen Tabs aus.

In Chrome wird dieses Ereignis nicht ausgelöst, wenn eine Tab-Gruppe zwischen Fenstern verschoben wird. Stattdessen wird die Gruppe aus einem Fenster entfernt und in einem anderen erstellt (wodurch {{WebExtAPIRef("tabGroups.onRemoved")}} und {{WebExtAPIRef("tabGroups.onCreated")}} ausgelöst werden).

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` bezeichnet den zu entfernenden Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn dies der Fall ist, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die beim Auftreten dieses Ereignisses aufgerufen wird. Ihr wird folgendes Argument übergeben:
    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum Zustand der verschobenen Tab-Gruppe.

## Beispiele

Verschiebungen von Tab-Gruppen erfassen und protokollieren:

```js
function tabGroupMoved(group) {
  console.log(
    `Tab group with ID ${group.id} was moved to window ${group.windowId}.`,
  );
}

browser.tabGroups.onMoved.addListener(tabGroupMoved);
```

Eine Tab-Gruppe finden, die in ein anderes Fenster verschoben wurde:

```js
browser.tabGroups.onMoved.addListener(async (group) => {
  let tabs = await browser.tabs.query({
    groupId: group.id,
  });
  console.log(
    `Moved tab group to ${tabs[0].index} in window ${group.windowId}`,
  );
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
