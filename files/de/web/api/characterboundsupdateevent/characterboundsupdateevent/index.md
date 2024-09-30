---
title: "CharacterBoundsUpdateEvent: CharacterBoundsUpdateEvent()-Konstruktor"
short-title: CharacterBoundsUpdateEvent()
slug: Web/API/CharacterBoundsUpdateEvent/CharacterBoundsUpdateEvent
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("CharacterBoundsUpdateEvent API")}}{{SeeCompatTable}}

Der **`CharacterBoundsUpdateEvent()`**-Konstruktor gibt ein neues [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent)-Objekt zurück.

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
      - : Eine Zahl, die den Versatz des ersten Zeichens im editierbaren Textbereich angibt, auf den sich dieses Ereignis bezieht.
    - `rangeEnd`
      - : Eine Zahl, die den Versatz des letzten Zeichens im editierbaren Textbereich angibt, auf den sich dieses Ereignis bezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent)-Schnittstelle, zu der es gehört.
