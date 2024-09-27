---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Befehl mithilfe seiner zugeordneten Tastenkombination ausgeführt wird.

Dem Listener wird der Name des Befehls übergeben. Dieser Name entspricht dem im [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegebenen Namen des Befehls.

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
  - : Hört auf, dieses Ereignis abzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn ein Benutzer die Tastenkombination des Befehls eingibt. Der Funktion werden diese Argumente übergeben:

    - `name`
      - : `string`. Name des Befehls. Dieser Name entspricht dem im [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegebenen Namen des Befehls.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als die Tastenkombination des Befehls eingegeben wurde.

## Beispiele

Angenommen, ein manifest.json-Eintrag sieht so aus:

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

Könnten Sie für diesen besonderen Befehl wie folgt einen Listener hinzufügen:

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
