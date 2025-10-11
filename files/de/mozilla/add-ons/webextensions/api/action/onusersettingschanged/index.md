---
title: action.onUserSettingsChanged
slug: Mozilla/Add-ons/WebExtensions/API/action/onUserSettingsChanged
l10n:
  sourceCommit: 0bbc83440e89ae434a8d798453511e82de79a356
---

Wird ausgelöst, wenn eine Änderung in den benutzerspezifischen Einstellungen erfolgt, die die Aktion einer Erweiterung betreffen.

## Syntax

```js-nolint
browser.action.onUserSettingsChanged.addListener(listener)
browser.action.onUserSettingsChanged.removeListener(listener)
browser.action.onUserSettingsChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zu lauschen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `change`
      - : 'object'. Details der geänderten benutzerspezifischen Einstellungen.
        - `isOnToolbar`
          - : `boolean`. Ob das Aktionssymbol der Erweiterung in der obersten Symbolleiste der Browserfenster sichtbar ist (d.h. ob die Erweiterung vom Benutzer 'angeheftet' wurde).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
