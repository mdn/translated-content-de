---
title: userScripts.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/unregister
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Hebt die Registrierung von Benutzer-Skripten auf, die durch die Erweiterung registriert wurden.

## Syntax

```js-nolint
let unregisteringUserScripts = browser.userScripts.unregister(
  filter       // optional object
);
```

### Parameter

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}. Eine Liste von Benutzer-Skript-IDs, die aufgehoben werden sollen. Wird kein Wert angegeben, werden alle Benutzer-Skripte abgemeldet.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn die Benutzer-Skripte abgemeldet sind. Scheitert die Anforderung, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
