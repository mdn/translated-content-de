---
title: userScripts.getScripts()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getScripts
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Gibt Benutzer-Skripte zurück, die von der Erweiterung registriert wurden.

## Syntax

```js-nolint
const gettingUserScripts = await browser.userScripts.getScripts(
  filter       // object
);
```

### Parameter

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}. Eine Liste von Benutzer-Skript-IDs, die zurückgegeben werden sollen.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von {{WebExtAPIRef("userScripts.RegisteredUserScript")}}-Objekten erfüllt wird. Wenn keine übereinstimmenden Benutzer-Skripte gefunden werden, ist das Array leer. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
