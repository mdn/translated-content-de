---
title: getLastChecked
slug: Mozilla/Add-ons/WebExtensions/API/captivePortal/getLastChecked
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Gibt die Zeit seit Abschluss der letzten Anfrage zurück.

## Syntax

```js-nolint
let state = browser.captivePortal.getLastChecked()
```

### Rückgabewert

Ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Ganzzahl erfüllt wird, die die Zeit in Millisekunden darstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
