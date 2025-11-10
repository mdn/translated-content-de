---
title: "KeyboardEvent: initKeyboardEvent()-Methode"
short-title: initKeyboardEvent()
slug: Web/API/KeyboardEvent/initKeyboardEvent
l10n:
  sourceCommit: f61d0fd1f98f5c6bd8e8db987641e4a6e6155a0b
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`KeyboardEvent.initKeyboardEvent()`**-Methode initialisiert
die Attribute eines Keyboard-Event-Objekts. Diese Methode wurde im Entwurf der DOM Level 3 Events eingeführt, jedoch in neueren Entwürfen abgelehnt. Gecko wird diese Funktion nicht unterstützen, da die Implementierung dieser Methode als experimentell bestehende Webanwendungen beeinträchtigte (siehe [Firefox-Bug 999645](https://bugzil.la/999645)). Webanwendungen sollten stattdessen einen Konstruktor verwenden, wenn dieser verfügbar ist.

## Syntax

```js-nolint
initKeyboardEvent(type, canBubble, cancelable,
                  view, key, location, ctrlKey,
                  altKey, shiftKey, metaKey)
```

### Parameter

- `type`
  - : Der Typ des Keyboard-Events; Browser setzen diesen immer auf einen der Werte `keydown`, `keypress` oder `keyup`.
- `canBubble` {{optional_inline}}
  - : Gibt an, ob das Ereignis aufsteigen kann oder nicht. Standardmäßig `false`.
- `cancelable` {{optional_inline}}
  - : Gibt an, ob das Ereignis abgebrochen werden kann oder nicht. Standardmäßig `false`.
- `view` {{optional_inline}}
  - : Der {{Glossary("WindowProxy", "WindowProxy")}}, mit dem es verbunden ist. Standardmäßig `null`.
- `key` {{optional_inline}}
  - : Der Wert des `key`-Attributs. Standardmäßig `""`.
- `location` {{optional_inline}}
  - : Der Wert des `location`-Attributs. Standardmäßig `0`.
- `ctrlKey` {{optional_inline}}
  - : Gibt an, ob der Steuerungstastenmodifikator aktiv ist. Standardmäßig `false`.
- `altKey` {{optional_inline}}
  - : Gibt an, ob der Alt-Tastenmodifikator aktiv ist. Standardmäßig `false`.
- `shiftKey` {{optional_inline}}
  - : Gibt an, ob der Umschalttastenmodifikator aktiv ist. Standardmäßig `false`.
- `metaKey` {{optional_inline}}
  - : Gibt an, ob der Meta-Tastenmodifikator aktiv ist. Standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

Die Spezifikation der `KeyboardEvent`-Schnittstelle durchlief zahlreiche Entwurfsstadien, zunächst unter DOM Events Level 2, wo sie verworfen wurde, da kein Konsens erzielt wurde, dann unter DOM Events Level 3. Dies führte zur Implementierung nicht-standardmäßiger Initialisierungsmethoden, der frühen DOM Events Level 2-Version, `KeyboardEvent.initKeyEvent()` durch Gecko-Browser und der frühen DOM Events Level 3-Version, `KeyboardEvent.initKeyboardEvent()` durch andere. Beide wurden durch die moderne Verwendung eines Konstruktors ersetzt: [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent).

## Browser-Kompatibilität

{{Compat}}
