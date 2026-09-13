---
title: "KeyboardEvent: initKeyboardEvent() Methode"
short-title: initKeyboardEvent()
slug: Web/API/KeyboardEvent/initKeyboardEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

Die **`KeyboardEvent.initKeyboardEvent()`** Methode initialisiert
die Attribute eines Tastaturereignis-Objekts. Diese Methode wurde im Entwurf von DOM Level 3 Events eingeführt, ist aber in neueren Entwürfen veraltet. Gecko wird diese Funktion nicht unterstützen, da die Implementierung dieser Methode als experimentell bestehende Web-Apps störte (siehe [Firefox-Bug 999645](https://bugzil.la/999645)).
Webanwendungen sollten stattdessen den Konstruktor verwenden, falls dieser verfügbar ist.

## Syntax

```js-nolint
initKeyboardEvent(type, canBubble, cancelable,
                  view, key, location, ctrlKey,
                  altKey, shiftKey, metaKey)
```

### Parameter

- `type`
  - : Der Typ des Tastaturereignisses; Browser setzen diesen immer auf einen von `keydown`, `keypress` oder `keyup`.
- `canBubble` {{optional_inline}}
  - : Gibt an, ob das Ereignis propagieren kann oder nicht. Standardmäßig `false`.
- `cancelable` {{optional_inline}}
  - : Gibt an, ob das Ereignis abgebrochen werden kann oder nicht. Standardmäßig `false`.
- `view` {{optional_inline}}
  - : Der {{Glossary("WindowProxy", "WindowProxy")}}, mit dem es verbunden ist. Standardmäßig `null`.
- `key` {{optional_inline}}
  - : Der Wert des key-Attributes. Standardmäßig `""`.
- `location` {{optional_inline}}
  - : Der Wert des location-Attributes. Standardmäßig `0`.
- `ctrlKey` {{optional_inline}}
  - : Gibt an, ob die Strg-Tastenmodifikation aktiv ist. Standardmäßig `false`.
- `altKey` {{optional_inline}}
  - : Gibt an, ob die Alt-Tastenmodifikation aktiv ist. Standardmäßig `false`.
- `shiftKey` {{optional_inline}}
  - : Gibt an, ob die Umschalttastenmodifikation aktiv ist. Standardmäßig `false`.
- `metaKey` {{optional_inline}}
  - : Gibt an, ob die Meta-Tastenmodifikation aktiv ist. Standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

Die `KeyboardEvent` Schnittstellenspezifikation hat zahlreiche Entwurfsstadien durchlaufen, zuerst unter DOM Events Level 2, wo sie fallen gelassen wurde, da kein Konsens bestand, dann unter DOM Events Level 3. Dies führte zur Implementierung nicht standardisierter Initialisierungsmethoden, der frühen DOM Events Level 2 Version, `KeyboardEvent.initKeyEvent()` durch Gecko-Browser und der frühen DOM Events Level 3 Version, `KeyboardEvent.initKeyboardEvent()` durch andere. Beide wurden durch die moderne Nutzung eines Konstruktors ersetzt: [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent).

## Browser-Kompatibilität

{{Compat}}
