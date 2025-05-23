---
title: tabs.ungroup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ungroup
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Entfernt einen oder mehrere Tabs aus ihren jeweiligen Tab-Gruppen. Wenn Gruppen leer werden, werden sie gelöscht.

Alle Tabs in einer Tab-Gruppe müssen aneinander angrenzen. Falls erforderlich, wird ein nicht gruppierter Tab vor oder nach der Tab-Gruppe verschoben, um diese Anforderung zu erfüllen.

> [!NOTE]
> Die Methode `tabs.ungroup()` ist nicht der einzige Weg, um Tabs zu entgruppieren. Ein Tab wird auch dann entgruppiert, wenn er verschoben wird, indem {{WebExtAPIRef("tabs.move")}} mit einem `index` aufgerufen wird, der außerhalb einer Tab-Gruppe liegt.

Weitere Informationen zu Tab-Gruppen finden Sie unter {{WebExtAPIRef("tabGroups")}}.

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

Wenn eine der `tabIds` ungültig ist, wird das Promise abgelehnt, ohne die Tabs zu verändern.

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
