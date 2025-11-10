---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzt die Konfiguration einer `USER_SCRIPT`-Welt, die durch {{WebExtAPIRef("userScripts.configureWorld")}} festgelegt wurde, auf die in {{WebExtAPIRef("userScripts.WorldProperties")}} angegebenen Standardwerte zurück. Wenn die Standardwelt zurückgesetzt wird, werden auch alle Welten ohne explizite Konfiguration zurückgesetzt.

Änderungen an Weltkonfigurationen gelten nur für neue Instanzen der Welt: Eine Konfiguration wird nicht auf eine bereits durch das Ausführen eines Benutzerskripts in einem Dokument initialisierte Welt angewendet, bis das Dokument neu geladen wird. Der Browser kann jedoch bestimmte Berechtigungen widerrufen, wenn eine Konfiguration aktualisiert wird. Beispielsweise können Message-Calls aus einer `USER_SCRIPT`-Welt fehlschlagen, wenn `messaging` auf `false` zurückgesetzt wird.

## Syntax

```js-nolint
let resettingWorldConfiguration = browser.userScripts.resetWorldConfiguration(
  worldId       // optional string
);
```

### Parameter

- `worldId` {{optional_inline}}
  - : `string` Die ID der `USER_SCRIPT`-Welt, die zurückgesetzt werden soll. Wenn sie weggelassen wird oder leer ist, wird die Konfiguration der Standardwelt und aller Welten ohne eine durch {{WebExtAPIRef("userScripts.configureWorld")}} festgelegte Konfiguration zurückgesetzt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der ohne Argumente erfüllt wird, wenn die Weltkonfiguration zurückgesetzt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
