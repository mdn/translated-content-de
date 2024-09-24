---
title: RegisteredUserScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Die Methode `unregister()` des {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} Objekts hebt die Registrierung der durch das Objekt repräsentierten Benutzer-Skripte auf, die mittels {{WebExtAPIRef("userScripts.register","userScripts.register()")}} registriert wurden.

> [!NOTE]
> Benutzer-Skripte werden automatisch abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzer-Skripte registriert wurden) entladen wird. Sie sollten ein Benutzer-Skript von einer Erweiterungsseite aus registrieren, die mindestens so lange bestehen bleibt, wie die Benutzer-Skripte registriert bleiben sollen.

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

Ein {{JSxRef("Promise")}}, das aufgelöst wird, sobald die Benutzer-Skripte abgemeldet sind. Das Promise liefert keinen Wert zurück.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("userScripts.register","userScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}
