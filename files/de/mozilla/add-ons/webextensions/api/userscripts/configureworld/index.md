---
title: userScripts.configureWorld()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/configureWorld
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Konfiguriert die Ausführungsumgebungen von `USER_SCRIPT` für die Erweiterung.

Änderungen an Weltkonfigurationen gelten nur für neue Instanzen der Welt: Eine Konfiguration wird nicht auf eine Welt angewendet, die durch die Ausführung eines Benutzerskripts in einem Dokument initialisiert wurde, bis das Dokument neu geladen wird. Der Browser kann jedoch bestimmte Rechte entziehen, wenn eine Konfiguration aktualisiert wird. Zum Beispiel können Nachrichtenaufrufe aus einer `USER_SCRIPT`-Welt fehlschlagen, wenn die Erweiterung `messaging` auf `false` setzt.

Weltkonfigurationen bleiben bestehen, bis die Erweiterung aktualisiert oder die Konfiguration durch {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}} zurückgesetzt wird.

## Syntax

```js-nolint
let configuredWorld = browser.userScripts.configureWorld(
  properties       // object
);
```

### Parameter

- `properties`

  - : {{WebExtAPIRef("userScripts.WorldProperties")}}. Details der Konfiguration für eine `USER_SCRIPT`-Welt.

    Wenn `worldId` weggelassen wird oder die Zeichenkette leer ist, wird das Update auf die Standardwelt und alle Welten ohne explizite Konfiguration angewendet. Wenn `worldId` spezifiziert wird, wird nur diese Welt konfiguriert.

    Beim Aktualisieren der Standardwelt und Welten ohne explizite Konfiguration werden bei Weglassen der Eigenschaften die Standardwerte von {{WebExtAPIRef("userScripts.WorldProperties")}} verwendet.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn die Anfrage erfolgreich ist. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
