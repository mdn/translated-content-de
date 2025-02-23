---
title: commands.reset()
slug: Mozilla/Add-ons/WebExtensions/API/commands/reset
l10n:
  sourceCommit: fa98e7a82bde55434e22f26e72bdcb509e7d169f
---

{{AddonSidebar}}

Setzt die Beschreibung und die Tastenkombination des angegebenen Befehls auf die Werte zurück, die im [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) der Erweiterung festgelegt sind.

Dies macht effektiv alle Änderungen rückgängig, die am Befehl mit der Funktion {{WEbExtAPIRef("commands.update()")}} vorgenommen wurden.

## Syntax

```js-nolint
browser.commands.reset(
  name // string
);
```

### Parameter

- `name`
  - : `string`. Name des Befehls, der zurückgesetzt werden soll, wie durch die `name`-Eigenschaft des Objekts {{WebExtAPIRef("commands.Command")}} angegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Tastenkombination zurückgesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzt den Befehl mit dem Namen "my-command" zurück, wenn der Benutzer auf die Schaltfläche "reset" klickt:

```js
const commandName = "my-command";

function resetShortcut() {
  browser.commands.reset(commandName);
}

document.querySelector("#reset").addEventListener("click", resetShortcut);
```

{{WebExtExamples}}
