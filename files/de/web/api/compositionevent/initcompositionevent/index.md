---
title: "CompositionEvent: Methode initCompositionEvent()"
short-title: initCompositionEvent()
slug: Web/API/CompositionEvent/initCompositionEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

Die **`initCompositionEvent()`**-Methode der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)-Schnittstelle initialisiert die Attribute einer `CompositionEvent`-Objektinstanz.

> [!NOTE]
> Die korrekte Methode zum Erstellen eines [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) ist die Verwendung des Konstruktors [`CompositionEvent()`](/de/docs/Web/API/CompositionEvent/CompositionEvent).

## Syntax

```js-nolint
initCompositionEvent(type, canBubble, cancelable, view, data, locale)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Kompositionsereignisses darstellt; dies wird eines von `compositionstart`, `compositionupdate` oder `compositionend` sein.
- `canBubble`
  - : Ein Boolean-Wert, der angibt, ob das Ereignis eine Bubbling-Fähigkeit hat.
- `cancelable`
  - : Ein Boolean-Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `view`
  - : Das [`Window`](/de/docs/Web/API/Window)-Objekt, von dem das Ereignis ausgelöst wurde.
- `data`
  - : Ein String, der den Wert des `data`-Attributs darstellt.
- `locale`
  - : Ein String, der den Wert des `locale`-Attributs darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
