---
title: userScripts.configureWorld()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/configureWorld
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Konfiguriert `USER_SCRIPT` Ausführungsumgebungen für die Erweiterung.

Änderungen an Konfigurationen der Welt gelten nur für neue Instanzen der Welt: Eine Konfiguration wird nicht auf eine Welt angewendet, die durch die Ausführung eines Benutzerskripts in einem Dokument initialisiert wurde, bis das Dokument neu geladen wird. Der Browser kann jedoch bestimmte Berechtigungen widerrufen, wenn eine Konfiguration aktualisiert wird. Zum Beispiel können Nachrichtenaufrufe aus einer `USER_SCRIPT`-Welt fehlschlagen, wenn die Erweiterung `messaging` auf `false` setzt.

Weltkonfigurationen bleiben erhalten, bis die Erweiterung aktualisiert oder die Konfiguration durch {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}} zurückgesetzt wird.

## Syntax

```js-nolint
let configuredWorld = browser.userScripts.configureWorld(
  properties       // object
);
```

### Parameter

- `properties`
  - : {{WebExtAPIRef("userScripts.WorldProperties")}}. Details der Konfiguration für eine `USER_SCRIPT` Welt.

    Wenn `worldId` weggelassen wird oder die Zeichenkette leer ist, wird das Update auf die Standardwelt und alle Welten ohne explizite Konfiguration angewendet. Wenn `worldId` angegeben ist, wird nur diese Welt konfiguriert.

    Beim Aktualisieren der Standardwelt und Welten ohne explizite Konfiguration, werden die {{WebExtAPIRef("userScripts.WorldProperties")}}-Standards verwendet, wenn Eigenschaften weggelassen werden.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der ohne Argumente erfüllt wird, wenn die Anfrage erfolgreich ist. Wenn die Anfrage fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
