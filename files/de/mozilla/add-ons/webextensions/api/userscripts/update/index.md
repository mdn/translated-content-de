---
title: userScripts.update()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/update
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Aktualisiert von der Erweiterung registrierte Benutzerskripte.

## Syntax

```js-nolint
let updatingUserScript = browser.userScripts.update(
  scripts       // array of objects
);
```

### Parameter

- `scripts`
  - : `Array` von {{WebExtAPIRef("userScripts.RegisteredUserScript")}}. Details zu den Benutzerskripten, die aktualisiert werden sollen.

    Eigenschaften, die `null` sind oder weggelassen werden, bleiben unverändert. Das Übergeben eines leeren Arrays an `matches`, `excludeMatches`, `globs` und `excludeGlobs` löscht diese Eigenschaften.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn alle angeforderten Benutzerskripte aktualisiert werden. Wenn ein Benutzerskript nicht aktualisiert werden kann oder die Anfrage aus einem anderen Grund fehlschlägt, werden keine der Skripte aktualisiert und das Versprechen wird mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Codebeispiel zeigt zwei Aktualisierungsbeispiele von Benutzerskripten. Das erste Update schlägt fehl, weil es versucht, eine ungültige Skriptregistrierung zu erstellen. Das zweite Beispiel zeigt ein erfolgreiches Update.

```js
// Valid registration:
await browser.userScripts.register([
  {
    worldId: "myScriptId",
    js: [{ code: "console.log('Hello world!');" }],
    matches: ["*://example.com/*"],
  },
]);

// Invalid! Would result in script without matches or includeGlobs!
await browser.userScripts.update([{ matches: [] }]);

// Valid: replaces matches with includeGlobs.
await browser.userScripts.update([
  {
    matches: [],
    includeGlobs: ["*example*"],
  },
]);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
