---
title: RegisteredUserScript.unregister() (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/RegisteredUserScript/unregister
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die Legacy-API `userScripts`. Sie ist in Firefox für Manifest V2 verfügbar. Für Funktionalitäten mit User Scripts in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Die Methode `unregister()` des Objekts {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}} hebt die Registrierung der von diesem Objekt repräsentierten User Scripts auf, also der User Scripts, die mit {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} registriert wurden.

> [!NOTE]
> User Scripts werden automatisch abgemeldet, wenn die zugehörige Erweiterungsseite (von der die User Scripts registriert wurden) entladen wird. Deshalb sollten Sie ein User Script von einer Erweiterungsseite aus registrieren, die mindestens so lange besteht, wie Sie möchten, dass die User Scripts registriert bleiben.

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

Ein {{JSxRef("Promise")}}, das aufgelöst wird, sobald die User Scripts abgemeldet sind. Das Versprechen gibt keinen Wert zurück.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}
