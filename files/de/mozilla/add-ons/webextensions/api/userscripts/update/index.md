---
title: userScripts.update()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/update
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Aktualisiert von der Erweiterung registrierte Benutzer-Skripte.

## Syntax

```js-nolint
let updatingUserScript = browser.userScripts.update(
  scripts       // array of objects
);
```

### Parameter

- `scripts`

  - : `array` von {{WebExtAPIRef("userScripts.RegisteredUserScript")}}. Details zu den zu aktualisierenden Benutzer-Skripten.

    Eigenschaften, die `null` sind oder weggelassen werden, werden nicht geändert. Das Übergeben eines leeren Arrays an `matches`, `excludeMatches`, `globs` und `excludeGlobs` löscht diese Eigenschaften.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn alle angeforderten Benutzer-Skripte aktualisiert sind. Wenn ein Benutzer-Skript nicht aktualisiert wird oder die Anfrage aus einem anderen Grund fehlschlägt, wird keines der Skripte aktualisiert, und das Promise wird mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Dieses Beispiel zeigt zwei Aktualisierungen von Benutzer-Skripten. Das erste Update schlägt fehl, da es versucht, eine ungültige Skriptregistrierung zu erstellen. Das zweite Beispiel zeigt ein erfolgreiches Update.

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
