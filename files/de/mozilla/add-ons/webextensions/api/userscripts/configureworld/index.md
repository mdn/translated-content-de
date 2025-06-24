---
title: userScripts.configureWorld()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/configureWorld
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Konfiguriert die Ausführungsumgebungen von `USER_SCRIPT` für die Erweiterung.

Änderungen an Weltkonfigurationen gelten nur für neue Instanzen der Welt: Eine Konfiguration wird nicht auf eine Welt angewendet, die durch die Ausführung eines Benutzerskripts in einem Dokument initialisiert wurde, bis das Dokument neu geladen wird. Der Browser kann jedoch bestimmte Privilegien widerrufen, wenn eine Konfiguration aktualisiert wird. Beispielsweise können Nachrichtenaufrufe aus einer `USER_SCRIPT`-Welt fehlschlagen, wenn die Erweiterung `messaging` auf `false` setzt.

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

    Wenn `worldId` weggelassen oder die Zeichenfolge leer ist, wird das Update auf die Standardwelt und alle Welten ohne explizite Konfiguration angewendet. Wenn `worldId` angegeben ist, wird nur diese Welt konfiguriert.

    Beim Aktualisieren der Standardwelt und der Welten ohne explizite Konfiguration werden, wenn Eigenschaften weggelassen werden, die Standardwerte von {{WebExtAPIRef("userScripts.WorldProperties")}} verwendet.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der ohne Argumente erfüllt wird, wenn die Anfrage erfolgreich ist. Wenn die Anfrage fehlschlägt, wird das Versprechen mit einer Fehlermeldung zurückgewiesen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
