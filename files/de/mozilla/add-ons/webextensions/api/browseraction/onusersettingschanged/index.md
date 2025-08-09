---
title: browserAction.onUserSettingsChanged
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onUserSettingsChanged
l10n:
  sourceCommit: 0bbc83440e89ae434a8d798453511e82de79a356
---

Ausgelöst, wenn eine Änderung in den benutzerspezifischen Einstellungen auftritt, die die Browser-Aktion einer Erweiterung betrifft.

## Syntax

```js-nolint
browser.browserAction.onUserSettingsChanged.addListener(listener)
browser.browserAction.onUserSettingsChanged.removeListener(listener)
browser.browserAction.onUserSettingsChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden diese Argumente übergeben:
    - `change`
      - : 'object'. Details der geänderten benutzerspezifischen Einstellungen.
        - `isOnToolbar`
          - : `boolean`. Ob das Browser-Aktionssymbol der Erweiterung in der obersten Symbolleiste der Browserfenster sichtbar ist (d. h., ob die Erweiterung vom Benutzer "angeheftet" wurde).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
