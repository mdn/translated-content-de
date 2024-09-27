---
title: getAll()
slug: Mozilla/Add-ons/WebExtensions/API/commands/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft alle Befehle für die Erweiterung ab, die Sie mit dem [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) registriert haben.

Die Befehle werden als ein Array von {{WebExtAPIRef('commands.Command')}}-Objekten zurückgegeben. Alternativ, wenn Sie die auf `Promise` basierende Version der API verwenden, `browser.commands.getAll()`, werden die Befehle in das `onFulfilled` Argument von [`Promise.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getCommands = browser.commands.getAll();
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `{{WebExtAPIRef('commands.Command')}}`-Objekten erfüllt wird, eines für jeden Befehl, der für die Erweiterung registriert wurde. Wenn keine Befehle registriert wurden, ist das Array leer.

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.

## Browser-Kompatibilität

{{Compat}}
