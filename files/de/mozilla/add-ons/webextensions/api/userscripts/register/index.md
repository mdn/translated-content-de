---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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

    Jedes {{WebExtAPIRef("userScripts.RegisteredUserScript")}} Objekt muss die Eigenschaft `js` als nicht-leeres Array und ein nicht-leeres Array in `matches` oder `includeGlobs` enthalten.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn alle angeforderten Benutzerskripte registriert sind. Wenn ein Benutzerskript nicht registriert werden kann oder die Anfrage aus einem anderen Grund fehlschlägt, wird keines der Skripte registriert und das Promise wird mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Snippet registriert den Hello-World-Code in der Ausführungswelt `"myScriptId"`, der auf allen Websites ausgeführt wird, die mit `"*://example.com/*"` übereinstimmen.

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
