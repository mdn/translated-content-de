---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
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

  - : `array` von {{WebExtAPIRef("userScripts.RegisteredUserScript")}}. Details der zu registrierenden Benutzerskripte.

    Jedes {{WebExtAPIRef("userScripts.RegisteredUserScript")}} Objekt muss die `js` Eigenschaft als nicht-leeres Array und ein nicht-leeres Array entweder in `matches` oder `includeGlobs` enthalten.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn alle angeforderten Benutzerskripte registriert sind. Wenn es nicht gelingt, eines der Benutzerskripte zu registrieren oder die Anfrage aus einem anderen Grund fehlschlägt, werden keine Skripte registriert, und das Promise wird mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Snippet registriert den Hello-World-Code in der `"myScriptId"` Ausführungswelt, um auf allen Websites ausgeführt zu werden, die mit `"*://example.com/*"` übereinstimmen.

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
