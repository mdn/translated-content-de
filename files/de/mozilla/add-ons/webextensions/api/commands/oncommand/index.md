---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Befehl über die zugehörige Tastenkombination ausgeführt wird.

Dem Listener wird der Name des Befehls übergeben. Dieser entspricht dem im [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegebenen Namen.

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
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn ein Benutzer die Tastenkombination für den Befehl eingibt. Der Funktion werden folgende Argumente übergeben:
    - `name`
      - : `string`. Name des Befehls. Dieser entspricht dem Namen, der im [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegeben ist.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als die Befehlstastenkombination eingegeben wurde.

## Beispiele

Bei einem manifest.json-Eintrag wie diesem:

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

Könnten Sie auf diesen bestimmten Befehl wie folgt lauschen:

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
> Diese API basiert auf Chromiums [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.
