---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Wird ausgelöst, wenn ein Befehl über das zugehörige Tastenkürzel ausgeführt wird.

Das Ereignis übergibt dem Listener den Namen des Befehls. Dieser Name entspricht dem Namen, der für den Befehl in seinem [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegeben ist.

Wenn die Erweiterung über die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) verfügt, gilt das Auslösen eines Tastenkürzels für einen Befehl als Benutzeraktion, die der Erweiterung vorübergehend Zugriff auf den aktiven Tab gewährt.

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
  - : Entfernt einen Listener für dieses Ereignis. Das Argument `listener` gibt den zu entfernenden Listener an.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er registriert ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn ein Benutzer das Tastenkürzel des Befehls eingibt. Der Funktion werden folgende Argumente übergeben:
    - `name`
      - : `string`. Name des Befehls. Dieser Name entspricht dem Namen, der für den Befehl in seinem [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) angegeben ist.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als das Tastenkürzel des Befehls eingegeben wurde.

## Beispiele

Angenommen, es gibt einen manifest.json-Eintrag wie diesen:

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

Sie können auf diesen Befehl reagieren und den an den Listener übergebenen `tab` verwenden, um den aktiven Tab zu duplizieren:

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
> Diese API basiert auf Chromiums [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands)-API.
