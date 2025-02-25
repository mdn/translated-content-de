---
title: userScripts.update()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/update
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Aktualisiert von der Erweiterung registrierte Benutzerskripte.

## Syntax

```js-nolint
let updatingUserScript = browser.userScripts.update(
  scripts       // array of objects
);
```

### Parameter

- `scripts`

  - : `array` von {{WebExtAPIRef("userScripts.RegisteredUserScript")}}. Details der zu aktualisierenden Benutzerskripte.

    Eigenschaften, die `null` sind oder weggelassen werden, werden nicht geändert. Das Übergeben eines leeren Arrays an `matches`, `excludeMatches`, `globs` und `excludeGlobs` löscht diese Eigenschaften.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn alle angeforderten Benutzerskripte aktualisiert werden. Wenn das Aktualisieren eines Benutzerskripts fehlschlägt oder die Anforderung aus einem anderen Grund fehlschlägt, werden keine Skripte aktualisiert, und das Promise wird mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Dieses Beispiel zeigt zwei Aktualisierungen von Benutzerskripten. Die erste Aktualisierung schlägt fehl, da versucht wird, eine ungültige Skriptregistrierung zu erstellen. Das zweite Beispiel zeigt eine erfolgreiche Aktualisierung.

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
