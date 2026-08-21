---
title: "UIEvent: initUIEvent() Methode"
short-title: initUIEvent()
slug: Web/API/UIEvent/initUIEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

Die **`UIEvent.initUIEvent()`** Methode initialisiert ein UI-Event, nachdem es erstellt wurde.

Auf diese Weise initialisierte Events müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Event festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Einmal ausgelöst, macht sie nichts mehr.

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezielle Event-Konstruktoren wie [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Die Seite [Ereignisse erstellen und auslösen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) gibt weitere Informationen darüber, wie diese verwendet werden können.

## Syntax

```js-nolint
initUIEvent(type, canBubble, cancelable, view, detail)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Events definiert.
- `canBubble`
  - : Ein boolescher Wert, der entscheidet, ob das Event in der Ereigniskette nach oben weitergegeben werden soll oder nicht. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) seinen Wert zurück.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Event abgebrochen werden kann. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) seinen Wert zurück.
- `view`
  - : Ist das mit dem Event assoziierte {{Glossary("WindowProxy", "WindowProxy")}}.
- `detail`
  - : Ein `unsigned long`, der einige Detailinformationen über das Event angibt, abhängig vom Typ des Events. Für Maus-Events gibt es an, wie oft die Maus an einer bestimmten Bildschirmposition geklickt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const e = document.createEvent("UIEvent");
// creates a click event that bubbles, can be cancelled,
// and with its view and detail property initialized to window and 1,
// respectively
e.initUIEvent("click", true, true, window, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UIEvent`](/de/docs/Web/API/UIEvent)
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte:
  [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Es können auch spezifischere Konstruktoren verwendet werden.
