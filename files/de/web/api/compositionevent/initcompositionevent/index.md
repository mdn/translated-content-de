---
title: "CompositionEvent: initCompositionEvent() Methode"
short-title: initCompositionEvent()
slug: Web/API/CompositionEvent/initCompositionEvent
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{deprecated_header}}{{APIRef("UI Events")}}

Die **`initCompositionEvent()`**-Methode der {{domxref("CompositionEvent")}}-Schnittstelle initialisiert die Attribute eines `CompositionEvent`-Objektinstanz.

> [!NOTE]
> Der korrekte Weg, ein {{domxref("CompositionEvent")}} zu erstellen, ist die Verwendung des Konstruktors {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent()")}}.

## Syntax

```js-nolint
initCompositionEvent(type, canBubble, cancelable, view, data, locale)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Textkompositionsereignisses darstellt; dies wird einer der folgenden sein: `compositionstart`, `compositionupdate` oder `compositionend`.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis blubbern kann oder nicht.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann oder nicht.
- `view`
  - : Das {{domxref("Window")}}-Objekt, von dem das Ereignis generiert wurde.
- `data`
  - : Ein String, der den Wert des `data`-Attributs repräsentiert.
- `locale`
  - : Ein String, der den Wert des `locale`-Attributs repräsentiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CompositionEvent")}}
