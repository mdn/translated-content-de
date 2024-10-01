---
title: "KeyboardEvent: Methode initKeyboardEvent()"
short-title: initKeyboardEvent()
slug: Web/API/KeyboardEvent/initKeyboardEvent
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`KeyboardEvent.initKeyboardEvent()`** Methode initialisiert
die Attribute eines Keyboard-Event-Objekts. Diese Methode wurde im Entwurf von DOM
Level 3 Events eingeführt, aber in neueren Entwürfen verworfen. Gecko wird diese Funktion nicht unterstützen, da die Implementierung dieser Methode als experimentell bestehende Webanwendungen zerstörte (siehe [Firefox bug 999645](https://bugzil.la/999645)).
Webanwendungen sollten stattdessen den Konstruktor verwenden, wenn er verfügbar ist.

## Syntax

```js-nolint
initKeyboardEvent(type, canBubble, cancelable,
                  view, key, location, ctrlKey,
                  altKey, shiftKey, metaKey)
```

### Parameter

- `type`
  - : Der Typ des Keyboard-Events; Browser setzen dies immer auf `keydown`,
    `keypress` oder `keyup`.
- `canBubble` {{optional_inline}}
  - : Gibt an, ob das Ereignis aufsteigen kann oder nicht. Standardmäßig `false`.
- `cancelable` {{optional_inline}}
  - : Gibt an, ob das Ereignis abgebrochen werden kann oder nicht. Standardmäßig `false`.
- `view` {{optional_inline}}
  - : Das {{Glossary("WindowProxy", "WindowProxy")}}, mit dem es verknüpft ist. Standardmäßig `null`.
- `key` {{optional_inline}}
  - : Der Wert des key-Attributs. Standardmäßig `""`.
- `location` {{optional_inline}}
  - : Der Wert des location-Attributs. Standardmäßig `0`.
- `ctrlKey` {{optional_inline}}
  - : Gibt an, ob der Steuerungs-Tastenmodifikator aktiv ist. Standardmäßig `false`.
- `altKey` {{optional_inline}}
  - : Gibt an, ob der Alt-Tastenmodifikator aktiv ist. Standardmäßig `false`.
- `shiftKey` {{optional_inline}}
  - : Gibt an, ob der Shift-Tastenmodifikator aktiv ist. Standardmäßig `false`.
- `metaKey` {{optional_inline}}
  - : Gibt an, ob der Meta-Tastenmodifikator aktiv ist. Standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

Die `KeyboardEvent` Interface-Spezifikation durchlief zahlreiche Entwurfsfassungen, zunächst unter DOM Events Level 2, wo sie fallen gelassen wurde, da kein Konsens erreicht wurde, dann unter DOM Events Level 3. Dies führte zu der Implementierung von nicht standardisierten Initialisierungsmethoden, der frühen DOM Events Level 2 Version, [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) durch Gecko-Browser und der frühen DOM Events Level 3 Version, `KeyboardEvent.initKeyboardEvent()` durch andere. Beide wurden durch die moderne Verwendung eines Konstruktors ersetzt: [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent).

## Browser-Kompatibilität

{{Compat}}
