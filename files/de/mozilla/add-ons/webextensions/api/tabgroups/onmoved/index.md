---
title: tabGroups.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onMoved
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Wird ausgelöst, wenn eine Tab-Gruppe innerhalb eines Fensters oder zu einem anderen Fenster verschoben wird. {{WebExtAPIRef("tabs.onMoved")}} wird ebenfalls für die Tabs innerhalb der Gruppe ausgelöst.

Das Ereignis erhält ein {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt. Dieses enthält die `windowId`, jedoch nicht die Position der Tab-Gruppe. Um die Position der Tab-Gruppe zu bestimmen, verwenden Sie {{WebExtAPIRef("tabs.query()")}} mit der `groupId` und lesen Sie die `index`-Eigenschaft des zurückgegebenen Tabs.

In Chrome wird dieses Ereignis nicht ausgelöst, wenn eine Tab-Gruppe zwischen Fenstern verschoben wird; stattdessen wird die Gruppe aus einem Fenster entfernt und in einem anderen erstellt (dabei werden {{WebExtAPIRef("tabGroups.onRemoved")}} und {{WebExtAPIRef("tabGroups.onCreated")}} ausgelöst).

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn darauf gehört wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details zum Zustand der verschobenen Tab-Gruppe.

## Beispiele

Lauschen und Protokollieren der Bewegung von Tab-Gruppen:

```js
function tabGroupMoved(group) {
  console.log(
    `Tab group with ID ${group.id} was moved to window ${group.windowId}.`,
  );
}

browser.tabGroups.onMoved.addListener(tabGroupMoved);
```

Lokalisieren einer Tab-Gruppe, die in ein anderes Fenster verschoben wurde.

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
