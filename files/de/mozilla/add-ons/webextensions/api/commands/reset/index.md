---
title: commands.reset()
slug: Mozilla/Add-ons/WebExtensions/API/commands/reset
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Setzt die Beschreibung und die Tastenkombination des angegebenen Befehls auf die Werte zurück, die im [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) der Erweiterung angegeben sind.

Dies setzt effektiv alle Änderungen am Befehl rückgängig, die mithilfe der Funktion {{WEbExtAPIRef("commands.update()")}} vorgenommen wurden.

## Syntax

```js-nolint
browser.commands.reset(
  name // string
);
```

### Parameter

- `name`
  - : `string`. Name des Befehls, der zurückgesetzt werden soll, wie er durch die `name`-Eigenschaft des {{WebExtAPIRef("commands.Command")}} Objekts angegeben ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der ohne Argumente erfüllt wird, wenn die Tastenkombination zurückgesetzt wurde.

## Beispiele

Setzt den Befehl mit dem Namen "my-command" zurück, wenn der Benutzer die "Reset"-Schaltfläche anklickt:

```js
const commandName = "my-command";

function resetShortcut() {
  browser.commands.reset(commandName);
}

document.querySelector("#reset").addEventListener("click", resetShortcut);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
