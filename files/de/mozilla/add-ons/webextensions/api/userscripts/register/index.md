---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Registriert Benutzerskripte für die Erweiterung.

## Syntax

```js-nolint
let registeredUserScript = browser.userScripts.register(
  scripts       // array of objects
)
```

### Parameter

- `scripts`

  - : `Array` von {{WebExtAPIRef("userScripts.RegisteredUserScript")}}. Details der zu registrierenden Benutzerskripte.

    Jedes {{WebExtAPIRef("userScripts.RegisteredUserScript")}}-Objekt muss die `js`-Eigenschaft als nicht-leeres Array und ein nicht-leeres Array in entweder `matches` oder `includeGlobs` enthalten.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn alle angeforderten Benutzerskripte registriert sind. Wenn es einem der Benutzerskripte nicht gelingt, sich zu registrieren, oder wenn die Anforderung aus einem anderen Grund fehlschlägt, werden keine Skripte registriert und das Promise wird mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Snippet registriert einen Hallo-Welt-Code in der Ausführungswelt `"myScriptId"`, um auf allen Websites auszuführen, die mit `"*://example.com/*"` übereinstimmen.

```js
await browser.userScripts.register([
  {
    worldId: "myScriptId",
    js: [{ code: "console.log('Hello world!');" }],
    matches: ["*://example.com/*"],
  },
]);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
