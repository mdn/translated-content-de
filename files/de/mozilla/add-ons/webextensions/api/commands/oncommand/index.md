---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn ein Befehl über seine zugeordnete Tastenkombination ausgeführt wird.

Dem Listener wird der Name des Befehls übergeben. Dieser stimmt mit dem im [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegebenen Namen überein.

## Syntax

```js-nolint
browser.commands.onCommand.addListener(listener)
browser.commands.onCommand.removeListener(listener)
browser.commands.onCommand.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn ein Benutzer die Tastenkombination für den Befehl eingibt. Die Funktion erhält folgende Argumente:
    - `name`
      - : `string`. Name des Befehls. Dieser stimmt mit dem im [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegebenen Namen überein.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als die Tastenkombination für den Befehl eingegeben wurde.

## Beispiele

Angenommen, ein manifest.json-Eintrag sieht folgendermaßen aus:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Send a 'toggle-feature' event"
  }
}
```

Sie könnten für diesen bestimmten Befehl wie folgt lauschen:

```js
browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-feature") {
    console.log("toggling the feature!");
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands).
