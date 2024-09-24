---
title: "UIEvent: initUIEvent()-Methode"
short-title: initUIEvent()
slug: Web/API/UIEvent/initUIEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}} {{deprecated_header}}

Die **`UIEvent.initUIEvent()`** Methode initialisiert ein UI-Ereignis,
nachdem es erstellt wurde.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode {{domxref("Document.createEvent()")}} erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis einzustellen, bevor es mit {{ domxref("EventTarget.dispatchEvent()") }} ausgelöst wird. Einmal ausgelöst, tut sie nichts mehr.

> [!WARNING]
> Diese Methode sollte nicht mehr verwendet werden, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereigniskonstruktoren wie {{domxref("UIEvent.UIEvent", "UIEvent()")}}. Die Seite über [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen darüber, wie diese verwendet werden.

## Syntax

```js-nolint
initUIEvent(type, canBubble, cancelable, view, detail)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses definiert.
- `canBubble`
  - : Ein boolescher Wert, der entscheidet, ob das Ereignis die Ereigniskette
    hinaufsteigen soll oder nicht. Sobald festgelegt, gibt die schreibgeschützte
    Eigenschaft {{ domxref("Event.bubbles") }} ihren Wert an.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Ereignis abgebrochen werden kann.
    Sobald festgelegt, gibt die schreibgeschützte Eigenschaft {{ domxref("Event.cancelable") }} ihren Wert an.
- `view`
  - : Das {{glossary("WindowProxy")}}, das dem Ereignis zugeordnet ist.
- `detail`
  - : Ein `unsigned long`, das je nach Ereignistyp einige Detailinformationen
    über das Ereignis angibt. Bei Mausevents zeigt es an, wie oft die Maus an einer bestimmten Bildschirmposition geklickt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const e = document.createEvent("UIEvent");
// erstellt ein Klickereignis, das aufsteigt, abgebrochen werden kann
// und dessen view- und detail-Eigenschaft auf window und 1 initialisiert wird,
// jeweils
e.initUIEvent("click", true, true, window, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("UIEvent") }}
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden soll:
  {{domxref("UIEvent.UIEvent", "UIEvent()")}}. Es können auch speziellere Konstruktoren verwendet werden.
