---
title: "KeyboardEvent: initKeyboardEvent() Methode"
short-title: initKeyboardEvent()
slug: Web/API/KeyboardEvent/initKeyboardEvent
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die Methode **`KeyboardEvent.initKeyboardEvent()`** initialisiert die Attribute eines Keyboard-Event-Objekts. Diese Methode wurde in einem Entwurf von DOM Level 3 Events eingeführt, aber in neueren Entwürfen als veraltet markiert. Gecko wird diese Funktion nicht unterstützen, da die Implementierung dieser Methode als experimentelles Feature bestehende Webanwendungen zerstörte (siehe [Firefox Bug 999645](https://bugzil.la/999645)). Webanwendungen sollten stattdessen den Konstruktor verwenden, falls verfügbar.

## Syntax

```js-nolint
initKeyboardEvent(type, canBubble, cancelable,
                  view, key, location, ctrlKey,
                  altKey, shiftKey, metaKey)
```

### Parameter

- `type`
  - : Der Typ des Tastaturereignisses; Browser setzen diesen immer auf einen der Werte `keydown`, `keypress` oder `keyup`.
- `canBubble` {{optional_inline}}
  - : Gibt an, ob das Ereignis sprudeln kann oder nicht. Standardwert ist `false`.
- `cancelable` {{optional_inline}}
  - : Gibt an, ob das Ereignis abgebrochen werden kann oder nicht. Standardwert ist `false`.
- `view` {{optional_inline}}
  - : Das zugeordnete {{glossary("WindowProxy")}}. Standardwert ist `null`.
- `key` {{optional_inline}}
  - : Der Wert des Schlüsselattributs. Standardwert ist `""`.
- `location` {{optional_inline}}
  - : Der Wert des Standortattributs. Standardwert ist `0`.
- `ctrlKey` {{optional_inline}}
  - : Gibt an, ob die Steuerungstaste aktiv ist. Standardwert ist `false`.
- `altKey` {{optional_inline}}
  - : Gibt an, ob die Alt-Taste aktiv ist. Standardwert ist `false`.
- `shiftKey` {{optional_inline}}
  - : Gibt an, ob die Umschalttaste aktiv ist. Standardwert ist `false`.
- `metaKey` {{optional_inline}}
  - : Gibt an, ob die Meta-Taste aktiv ist. Standardwert ist `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

Die `KeyboardEvent`-Schnittstellenspezifikation durchlief zahlreiche Entwurfsstadien, zunächst unter DOM Events Level 2, wo sie fallen gelassen wurde, da kein Konsens erzielt wurde, und dann unter DOM Events Level 3. Dies führte zur Implementierung von nicht standardisierten Initialisierungsmethoden, der frühen DOM Events Level 2 Version, {{domxref("KeyboardEvent.initKeyEvent()")}} durch Gecko-Browser und der frühen DOM Events Level 3 Version, `KeyboardEvent.initKeyboardEvent()` durch andere. Beide wurden durch die moderne Verwendung eines Konstruktors ersetzt: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Browser-Kompatibilität

{{Compat}}
