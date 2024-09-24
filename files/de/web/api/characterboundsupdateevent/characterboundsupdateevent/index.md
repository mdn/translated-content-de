---
title: "CharacterBoundsUpdateEvent: CharacterBoundsUpdateEvent() Konstruktor"
short-title: CharacterBoundsUpdateEvent()
slug: Web/API/CharacterBoundsUpdateEvent/CharacterBoundsUpdateEvent
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("CharacterBoundsUpdateEvent API")}}{{SeeCompatTable}}

Der **`CharacterBoundsUpdateEvent()`** Konstruktor gibt ein neues {{DOMxRef("CharacterBoundsUpdateEvent")}} Objekt zurück.

## Syntax

```js-nolint
new CharacterBoundsUpdateEvent(type)
new CharacterBoundsUpdateEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Mögliche Werte: `"characterboundsupdate"`.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `rangeStart`
      - : Eine Zahl, um den Offset des ersten Zeichens innerhalb des bearbeitbaren Textbereichs festzulegen, auf den sich dieses Ereignis bezieht.
    - `rangeEnd`
      - : Eine Zahl, um den Offset des letzten Zeichens innerhalb des bearbeitbaren Textbereichs festzulegen, auf den sich dieses Ereignis bezieht.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- Das zugehörige {{DOMxRef("CharacterBoundsUpdateEvent")}} Interface.
