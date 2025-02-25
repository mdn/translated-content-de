---
title: userScripts.getWorldConfigurations()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getWorldConfigurations
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Gibt alle im `USER_SCRIPT`-World registrierten Konfigurationen zurück, die von der Erweiterung mit {{WebExtAPIRef("userScripts.configureWorld()")}} registriert wurden.

## Syntax

```js-nolint
const gettingWorldConfigurations = await browser.userScripts.getWorldConfigurations();
```

### Parameter

Diese Funktion nimmt keine Parameter.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von {{WebExtAPIRef("userScripts.WorldProperties")}} Objekten erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
