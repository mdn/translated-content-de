---
title: commands.reset()
slug: Mozilla/Add-ons/WebExtensions/API/commands/reset
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Setzt die Beschreibung und Tastenkombination des angegebenen Befehls auf die Werte zurück, die im [`commands`-Schlüssel der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) der Erweiterung angegeben sind.

Dies macht effektiv alle Änderungen rückgängig, die mit der Funktion {{WEbExtAPIRef("commands.update()")}} am Befehl vorgenommen wurden.

Diese Funktion ist asynchron und gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück.

## Syntax

```js-nolint
browser.commands.reset(
  name // string
);
```

### Parameter

- `name`
  - : `string`. Name des zurückzusetzenden Befehls, wie er durch die `name`-Eigenschaft des {{WebExtAPIRef("commands.Command")}} Objekts angegeben ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Tastenkombination zurückgesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzt den Befehl mit dem Namen "my-command" zurück, wenn der Benutzer auf die Schaltfläche "Zurücksetzen" klickt:

```js
const commandName = "my-command";

function resetShortcut() {
  browser.commands.reset(commandName);
}

document.querySelector("#reset").addEventListener("click", resetShortcut);
```

{{WebExtExamples}}
