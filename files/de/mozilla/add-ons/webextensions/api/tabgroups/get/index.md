---
title: tabGroups.get
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt Details zu einer Tab-Gruppe zurück.

## Syntax

```js-nolint
let tabGroupDetails = await browser.tabGroups.get(
    groupId                // integer
);
```

### Parameter

- `groupId`
  - : `integer`. Die ID der Tab-Gruppe, für die Details zurückgegeben werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
