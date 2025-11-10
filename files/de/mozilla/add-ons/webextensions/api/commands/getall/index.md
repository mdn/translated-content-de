---
title: getAll()
slug: Mozilla/Add-ons/WebExtensions/API/commands/getAll
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erhält alle Befehle der Erweiterung, die Sie mit dem [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) registriert haben.

Die Befehle werden als ein Array von {{WebExtAPIRef('commands.Command')}} Objekten zurückgegeben. Alternativ, wenn Sie die auf Versprechen basierende Version der API verwenden, `browser.commands.getAll()`, werden die Befehle an das `onFulfilled` Argument von [`Promise.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben.

## Syntax

```js-nolint
let getCommands = browser.commands.getAll();
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('commands.Command')}} Objekten erfüllt wird, eines für jeden Befehl, der für die Erweiterung registriert wurde. Wenn keine Befehle registriert wurden, ist das Array leer.

## Beispiele

```js
function logCommands(commands) {
  commands.forEach((command) => {
    console.log(command);
  });
}

let getCommands = browser.commands.getAll();
getCommands.then(logCommands);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API von Chromium.
