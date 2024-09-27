---
title: "KeyboardEvent: initKeyboardEvent()-Methode"
short-title: initKeyboardEvent()
slug: Web/API/KeyboardEvent/initKeyboardEvent
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`KeyboardEvent.initKeyboardEvent()`**-Methode initialisiert die Attribute eines Keyboard-Event-Objekts. Diese Methode wurde im Entwurf der DOM Level 3 Events eingeführt, aber in neueren Entwürfen als veraltet eingestuft. Gecko wird dieses Feature nicht unterstützen, da die Implementierung dieser Methode als experimentell bestehende Webanwendungen beschädigte (siehe [Firefox Bug 999645](https://bugzil.la/999645)). Webanwendungen sollten stattdessen den Konstruktor verwenden, wenn dieser verfügbar ist.

## Syntax

```js-nolint
initKeyboardEvent(type, canBubble, cancelable,
                  view, key, location, ctrlKey,
                  altKey, shiftKey, metaKey)
```

### Parameter

- `type`
  - : Der Typ des Keyboard-Events; Browser setzen ihn immer auf einen der Werte `keydown`, `keypress` oder `keyup`.
- `canBubble` {{optional_inline}}
  - : Gibt an, ob das Ereignis hochblasen kann oder nicht. Standardmäßig `false`.
- `cancelable` {{optional_inline}}
  - : Gibt an, ob das Ereignis abgebrochen werden kann oder nicht. Standardmäßig `false`.
- `view` {{optional_inline}}
  - : Der [WindowProxy](/de/docs/Glossary/WindowProxy), mit dem es verknüpft ist. Standardmäßig `null`.
- `key` {{optional_inline}}
  - : Der Wert des key-Attributs. Standardmäßig `""`.
- `location` {{optional_inline}}
  - : Der Wert des location-Attributs. Standardmäßig `0`.
- `ctrlKey` {{optional_inline}}
  - : Gibt an, ob der Steuerungstastenmodifikator aktiv ist. Standardmäßig `false`.
- `altKey` {{optional_inline}}
  - : Gibt an, ob der Alt-Tasten-Modifikator aktiv ist. Standardmäßig `false`.
- `shiftKey` {{optional_inline}}
  - : Gibt an, ob der Umschalttastenmodifikator aktiv ist. Standardmäßig `false`.
- `metaKey` {{optional_inline}}
  - : Gibt an, ob der Meta-Tasten-Modifikator aktiv ist. Standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

Die `KeyboardEvent`-Schnittstellenspezifikation durchlief zahlreiche Entwurfsphasen, zuerst unter DOM Events Level 2, wo sie fallengelassen wurde, da kein Konsens erreicht wurde, dann unter DOM Events Level 3. Dies führte zur Implementierung nicht standardmäßiger Initialisierungsmethoden, der frühen DOM Events Level 2-Version, [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) von Gecko-Browsern und der frühen DOM Events Level 3-Version, `KeyboardEvent.initKeyboardEvent()` von anderen. Beide wurden durch die moderne Nutzung eines Konstruktors ersetzt: [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent).

## Browser-Kompatibilität

{{Compat}}
