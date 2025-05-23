---
title: tabGroups.get
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/get
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Gibt Details über eine Tab-Gruppe zurück.

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
