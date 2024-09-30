---
title: RegisteredUserScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Die `unregister()`-Methode des {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}-Objekts hebt die Registrierung der Benutzerskripte auf, die durch das Objekt dargestellt werden, Benutzerskripte, die mit {{WebExtAPIRef("userScripts.register","userScripts.register()")}} registriert wurden.

> [!NOTE]
> Benutzerskripte werden automatisch abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird. Daher sollten Sie ein Benutzerskript von einer Erweiterungsseite aus registrieren, die mindestens so lange bestehen bleibt, wie Sie möchten, dass die Benutzerskripte registriert bleiben.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // object
);
// …
await registeredUserScript.unregister()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das aufgelöst wird, sobald die Benutzerskripte abgemeldet sind. Das Versprechen gibt keinen Wert zurück.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("userScripts.register","userScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}
