---
title: tabs.ungroup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ungroup
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Entfernt einen oder mehrere Tabs aus ihren jeweiligen Tab-Gruppen. Wenn eine der Gruppen leer wird, wird sie gelöscht.

Alle Tabs in einer Tab-Gruppe müssen nebeneinander liegen. Falls erforderlich, wird ein nicht gruppierter Tab vor oder nach der Tab-Gruppe verschoben, um diese Anforderung zu erfüllen.

> [!NOTE]
> Die Methode `tabs.ungroup()` ist nicht der einzige Weg, um Tabs zu entgruppieren. Ein Tab wird auch entgruppiert, wenn er durch Aufrufen von {{WebExtAPIRef("tabs.move")}} mit einem `index` verschoben wird, der außerhalb einer Tab-Gruppe liegt.

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

Wenn eine der `tabIds` ungültig ist, wird das Promise abgelehnt, ohne die Tabs zu ändern.

## Beispiele

Den aktuellen Tab aus seiner Tab-Gruppe, falls vorhanden, entfernen:

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
