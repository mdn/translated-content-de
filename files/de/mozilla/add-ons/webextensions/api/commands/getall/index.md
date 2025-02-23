---
title: getAll()
slug: Mozilla/Add-ons/WebExtensions/API/commands/getAll
l10n:
  sourceCommit: fa98e7a82bde55434e22f26e72bdcb509e7d169f
---

{{AddonSidebar}}

Ruft alle Befehle für die Erweiterung ab, die Sie mithilfe des [`commands` manifest.json-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) registriert haben.

Die Befehle werden als Array von {{WebExtAPIRef('commands.Command')}}-Objekten zurückgegeben. Alternativ, wenn Sie die version mit Promise der API verwenden, `browser.commands.getAll()`, werden die Befehle in das `onFulfilled`-Argument von [`Promise.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben.

## Syntax

```js-nolint
let getCommands = browser.commands.getAll();
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `{{WebExtAPIRef('commands.Command')}}`-Objekten erfüllt wird, eines für jeden registrierten Befehl der Erweiterung. Wenn keine Befehle registriert wurden, ist das Array leer.

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
