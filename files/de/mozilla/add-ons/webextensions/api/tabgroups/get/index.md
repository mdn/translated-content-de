---
title: tabGroups.get()
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/get
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Gibt Details zu einer Tabgruppe zurück.

## Syntax

```js-nolint
let tabGroupDetails = await browser.tabGroups.get(
    groupId                // integer
);
```

### Parameter

- `groupId`
  - : `integer`. Die ID der Tabgruppe, deren Details zurückgegeben werden sollen.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekt erfüllt wird. Wenn die Anfrage fehlschlägt, wird die Promise mit einer Fehlermeldung zurückgewiesen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
