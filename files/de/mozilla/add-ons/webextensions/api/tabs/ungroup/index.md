---
title: tabs.ungroup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ungroup
l10n:
  sourceCommit: da342187abedb56612c08b166eb5594552b670e4
---

{{AddonSidebar}}

Entfernt einen oder mehrere Tabs aus ihren jeweiligen Tab-Gruppen. Falls Gruppen leer werden, werden sie gelöscht.

Alle Tabs in einer Tab-Gruppe müssen benachbart sein. Falls nötig, wird ein nicht gruppierter Tab vor oder nach der Tab-Gruppe verschoben, um diese Anforderung zu erfüllen.

> [!NOTE]
> Die Methode `tabs.ungroup()` ist nicht der einzige Weg, Tabs zu entgruppieren. Ein Tab wird auch entgruppiert, wenn es durch einen Aufruf von {{WebExtAPIRef("tabs.move")}} mit einem `index`, der außerhalb einer Tab-Gruppe liegt, verschoben wird.

## Syntax

```js-nolint
let ungrouping = browser.tabs.ungroup(
  tabIds              // array
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. Die Tab-ID oder Liste von Tab-IDs, die aus Gruppen entfernt werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

Wenn einige der `tabIds` ungültig sind, wird das Promise abgelehnt, ohne die Tabs zu ändern.

## Beispiele

Entfernen Sie den aktuellen Tab aus seiner Tab-Gruppe, falls vorhanden:

```js
let tabs = await browser.tabs.query({
  active: true,
  lastFocusedWindow: true,
});

await browser.tabs.ungroup([tabs[0].id]);
console.log("Current tab is ungrouped");
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
