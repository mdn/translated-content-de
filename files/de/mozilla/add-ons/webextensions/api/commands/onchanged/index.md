---
title: onChanged
slug: Mozilla/Add-ons/WebExtensions/API/commands/onChanged
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn die Tastenkombination für einen Befehl geändert wird.

Dem Listener wird ein Objekt übergeben, das den Namen des Befehls, seine neue aktive Tastenkombination und seine alte Tastenkombination enthält.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es hört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn sich die Tastenkombination eines Befehls ändert. Die Funktion erhält diese Argumente:

    - `changeInfo`

      - : `object`. Ein Objekt, das den Namen des Befehls, seine neue aktive Tastenkombination und seine alte Tastenkombination enthält.

        - `name`
          - : `string`. Name des Befehls. Dies entspricht dem Namen, der dem Befehl in seinem [manifest.json Eintrag](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) gegeben wurde.
        - `newShortcut`
          - : `string`. Die neue aktive Tastenkombination für diesen Befehl oder leer, wenn keine Tastenkombination aktiv ist.
        - `oldShortcut`
          - : `string`. Die Tastenkombination, die für diesen Befehl aktiv war, oder leer, wenn keine Tastenkombination aktiv war.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Sie könnten Änderungen an Befehls-Tastenkombinationen wie folgt protokollieren:

```js
function handleChanged(changeInfo) {
  console.log(`Shortcut for: ${changeInfo.name} changed`);
  console.log(`From: ${changeInfo.oldShortcut}`);
  console.log(`To: ${changeInfo.newShortcut}`);
}

browser.commands.onChanged.addListener(handleChanged);
```

{{WebExtExamples}}
