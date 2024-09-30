---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Befehl mit dem zugeordneten Tastaturkürzel ausgeführt wird.

Dem Listener wird der Name des Befehls übergeben. Dieser stimmt mit dem Namen überein, der dem Befehl in seinem [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) gegeben wurde.

## Syntax

```js-nolint
browser.commands.onCommand.addListener(listener)
browser.commands.onCommand.removeListener(listener)
browser.commands.onCommand.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn ein Benutzer das Tastenkürzel des Befehls eingibt. Der Funktion werden diese Argumente übergeben:

    - `name`
      - : `string`. Name des Befehls. Dieser stimmt mit dem Namen überein, der dem Befehl in seinem [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) gegeben wurde.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als das Befehls-Tastenkürzel eingegeben wurde.

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

Könnten Sie auf diesen speziellen Befehl wie folgt hören:

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
> Diese API basiert auf Chromium's [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.
