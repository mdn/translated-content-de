---
title: onChanged
slug: Mozilla/Add-ons/WebExtensions/API/commands/onChanged
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn die Tastenkombination für einen Befehl geändert wird.

Der Listener erhält ein Objekt, das den Namen des Befehls, seine neue aktive Tastenkombination und seine alte Tastenkombination enthält.

## Syntax

```js-nolint
browser.commands.onChanged.addListener(listener)
browser.commands.onChanged.removeListener(listener)
browser.commands.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Der `listener`-Parameter ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn sich die Tastenkombination eines Befehls ändert. Der Funktion werden diese Argumente übergeben:
    - `changeInfo`
      - : `object`. Ein Objekt, das den Namen des Befehls, seine neue aktive Tastenkombination und seine alte Tastenkombination enthält.
        - `name`
          - : `string`. Name des Befehls. Dieser entspricht dem Namen, der dem Befehl in seinem [manifest.json-Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) gegeben wurde.
        - `newShortcut`
          - : `string`. Die neue aktive Tastenkombination für diesen Befehl oder leer, wenn keine Tastenkombination aktiv ist.
        - `oldShortcut`
          - : `string`. Die Tastenkombination, die für diesen Befehl aktiv war, oder leer, wenn keine Tastenkombination aktiv war.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Sie könnten Änderungen an den Tastenkombinationen von Befehlen auf diese Weise protokollieren:

```js
function handleChanged(changeInfo) {
  console.log(`Shortcut for: ${changeInfo.name} changed`);
  console.log(`From: ${changeInfo.oldShortcut}`);
  console.log(`To: ${changeInfo.newShortcut}`);
}

browser.commands.onChanged.addListener(handleChanged);
```

{{WebExtExamples}}
