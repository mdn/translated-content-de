---
title: RegisteredUserScript.unregister() (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/RegisteredUserScript/unregister
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Für Funktionalität mit Benutzerskripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Die Methode `unregister()` des Objekts {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}} hebt die Registrierung der durch das Objekt repräsentierten Benutzerskripte auf. Diese Skripte wurden mit {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} registriert.

> [!NOTE]
> Benutzerskripte werden automatisch abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird. Sie sollten daher ein Benutzerskript von einer Erweiterungsseite aus registrieren, die mindestens so lange besteht, wie Sie möchten, dass die Benutzerskripte registriert bleiben.

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

Ein {{JSxRef("Promise")}}, der aufgelöst wird, sobald die Benutzerskripte abgemeldet sind. Der Promise gibt keinen Wert zurück.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}
