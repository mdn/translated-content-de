---
title: "CompositionEvent: CompositionEvent() Konstruktor"
short-title: CompositionEvent()
slug: Web/API/CompositionEvent/CompositionEvent
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("UI Events")}}

Der **`CompositionEvent()`** Konstruktor erstellt ein neues [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) Objekt.

## Syntax

```js-nolint
new CompositionEvent(type)
new CompositionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es unterscheidet zwischen Groß- und Kleinschreibung und Browser setzen es auf `compositionstart`, `compositionupdate` oder `compositionend`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften_, die folgenden Eigenschaften hat:
    - `data` {{optional_inline}}
      - : Ein String, der verwendet wird, um die [`data`](/de/docs/Web/API/CompositionEvent/data) Eigenschaft des neuen
        [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) zu initialisieren. Von Browsern generierte Ereignisse setzen es auf die von der IME
        Komposition erzeugten Zeichen.

### Rückgabewert

Ein neues [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), das Interface der Objekte, die es konstruiert.
