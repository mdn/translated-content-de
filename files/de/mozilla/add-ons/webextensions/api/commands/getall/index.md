---
title: getAll()
slug: Mozilla/Add-ons/WebExtensions/API/commands/getAll
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Ruft alle Befehle für die Erweiterung ab, die Sie mit dem [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) registriert haben.

Die Befehle werden als ein Array von {{WebExtAPIRef('commands.Command')}}-Objekten zurückgegeben. Alternativ werden bei der Nutzung der auf Versprechen basierenden Version der API `browser.commands.getAll()` die Befehle an das `onFulfilled`-Argument von [`Promise.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben.

## Syntax

```js-nolint
let getCommands = browser.commands.getAll();
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('commands.Command')}}-Objekten erfüllt wird, eines für jeden Befehl, der für die Erweiterung registriert wurde. Wenn keine Befehle registriert wurden, wird das Array leer sein.

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
> Diese API basiert auf der [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API von Chromium.

## Browser-Kompatibilität

{{Compat}}
