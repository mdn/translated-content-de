---
title: userScripts.getWorldConfigurations()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getWorldConfigurations
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt alle `USER_SCRIPT`-Weltkonfigurationen zurück, die von der Erweiterung mit {{WebExtAPIRef("userScripts.configureWorld()")}} registriert wurden.

## Syntax

```js-nolint
const gettingWorldConfigurations = await browser.userScripts.getWorldConfigurations();
```

### Parameter

Diese Funktion nimmt keine Parameter an.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von {{WebExtAPIRef("userScripts.WorldProperties")}} Objekten erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
