---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
l10n:
  sourceCommit: 0630d0cb464c0b8bd352d4ecd6bead43864ac78f
---

Ausgelöst, wenn ein Befehl über sein zugehöriges Tastenkürzel ausgeführt wird.

Das Ereignis übergibt dem Listener den Namen des Befehls. Dieser Name entspricht dem Namen, der dem Befehl in seinem [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zugewiesen wurde.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn ein Benutzer das Tastenkürzel des Befehls eingibt. Die Funktion erhält folgende Argumente:
    - `name`
      - : `string`. Name des Befehls. Dieser Name entspricht dem Namen, der dem Befehl in seinem [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zugewiesen wurde.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als das Befehls-Tastenkürzel eingegeben wurde.

## Beispiele

Bei einem solchen manifest.json-Eintrag:

```json
"commands": {
  "duplicate-tab": {
    "suggested_key": {
      "default": "Ctrl+Shift+D"
    },
    "description": "Duplicate the active tab"
  }
}
```

Können Sie auf diesen Befehl lauschen und den `tab`, der an den Listener übergeben wird, verwenden, um den aktiven Tab zu duplizieren, wie folgt:

```js
browser.commands.onCommand.addListener((command, tab) => {
  if (command === "duplicate-tab") {
    browser.tabs.duplicate(tab.id);
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API von Chromium.
