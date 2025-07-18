---
title: userScripts.getScripts()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getScripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt Benutzerskripte zurück, die von der Erweiterung registriert wurden.

## Syntax

```js-nolint
const gettingUserScripts = await browser.userScripts.getScripts(
  filter       // object
);
```

### Parameter

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}. Eine Liste von Benutzerskript-IDs, die zurückgegeben werden sollen.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der mit einem Array von {{WebExtAPIRef("userScripts.RegisteredUserScript")}}-Objekten erfüllt wird. Wenn keine passenden Benutzerskripte gefunden werden, ist das Array leer. Falls die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
