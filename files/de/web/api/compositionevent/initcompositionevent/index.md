---
title: "CompositionEvent: initCompositionEvent() Methode"
short-title: initCompositionEvent()
slug: Web/API/CompositionEvent/initCompositionEvent
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{deprecated_header}}{{APIRef("UI Events")}}

Die **`initCompositionEvent()`** Methode der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) Schnittstelle initialisiert die Attribute eines `CompositionEvent`-Objektinstanz.

> [!NOTE]
> Der korrekte Weg, ein [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) zu erstellen, ist die Verwendung des Konstruktors [`CompositionEvent()`](/de/docs/Web/API/CompositionEvent/CompositionEvent).

## Syntax

```js-nolint
initCompositionEvent(type, canBubble, cancelable, view, data, locale)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Zusammensetzungsereignisses darstellt; dies wird eines von `compositionstart`, `compositionupdate` oder `compositionend` sein.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis aufsteigen kann oder nicht.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann oder nicht.
- `view`
  - : Das [`Window`](/de/docs/Web/API/Window) Objekt, von dem das Ereignis generiert wurde.
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
