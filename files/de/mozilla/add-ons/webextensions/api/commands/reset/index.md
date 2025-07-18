---
title: commands.reset()
slug: Mozilla/Add-ons/WebExtensions/API/commands/reset
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzt die Beschreibung und die Tastenkombination des angegebenen Befehls auf die Werte zurück, die im [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) der Erweiterung festgelegt sind.

Dies hebt effektiv alle Änderungen am Befehl auf, die mit der {{WEbExtAPIRef("commands.update()")}}-Funktion vorgenommen wurden.

## Syntax

```js-nolint
browser.commands.reset(
  name // string
);
```

### Parameter

- `name`
  - : `string`. Der Name des Befehls, der zurückgesetzt werden soll, wie er durch die `name`-Eigenschaft des {{WebExtAPIRef("commands.Command")}}-Objekts angegeben ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der ohne Argumente erfüllt wird, wenn die Tastenkombination zurückgesetzt wurde.

## Beispiele

Setzt den Befehl mit dem Namen "my-command" zurück, wenn der Benutzer auf die Schaltfläche "zurücksetzen" klickt:

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
