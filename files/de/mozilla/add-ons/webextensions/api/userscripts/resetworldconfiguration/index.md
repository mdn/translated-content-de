---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Setzt die Konfiguration einer `USER_SCRIPT`-Welt, die durch {{WebExtAPIRef("userScripts.configureWorld")}} festgelegt wurde, auf die in {{WebExtAPIRef("userScripts.WorldProperties")}} spezifizierten Standardwerte zurück. Wenn die Standardwelt zurückgesetzt wird, werden auch alle Welten ohne explizite Konfiguration zurückgesetzt.

Änderungen an Weltkonfigurationen gelten nur für neue Instanzen der Welt: Eine Konfiguration wird erst dann auf eine Welt angewendet, die durch die Ausführung eines Benutzerskripts in einem Dokument initialisiert wurde, wenn das Dokument neu geladen wird. Der Browser kann jedoch bestimmte Berechtigungen widerrufen, wenn eine Konfiguration aktualisiert wird. Beispielsweise können Nachrichtenaufrufe aus einer `USER_SCRIPT`-Welt fehlschlagen, wenn `messaging` auf `false` zurückgesetzt wird.

## Syntax

```js-nolint
let resettingWorldConfiguration = browser.userScripts.resetWorldConfiguration(
  worldId       // optional string
);
```

### Parameter

- `worldId` {{optional_inline}}
  - : `string` Die ID der `USER_SCRIPT`-Welt, die zurückgesetzt werden soll. Wenn weggelassen oder leer, wird die Konfiguration der Standardwelt und aller Welten ohne eine durch {{WebExtAPIRef("userScripts.configureWorld")}} gesetzte Konfiguration zurückgesetzt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn die Weltkonfiguration zurückgesetzt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
