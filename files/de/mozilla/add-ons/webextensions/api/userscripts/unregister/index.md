---
title: userScripts.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/unregister
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Hebt die Registrierung von Benutzerskripten auf, die von der Erweiterung registriert wurden.

## Syntax

```js-nolint
let unregisteringUserScripts = browser.userScripts.unregister(
  filter       // optional object
);
```

### Parameter

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}. Eine Liste von IDs der Benutzerskripte, die abgemeldet werden sollen. Wenn nicht angegeben, werden alle Benutzerskripte abgemeldet.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn die Benutzerskripte abgemeldet sind. Wenn die Anfrage fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
