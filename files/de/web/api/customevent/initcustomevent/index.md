---
title: "CustomEvent: initCustomEvent() Methode"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{Deprecated_header}}{{AvailableInWorkers}}

Die **`CustomEvent.initCustomEvent()`** Methode initialisiert ein {{domxref("CustomEvent")}}-Objekt.
Wenn das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode {{domxref("Document.createEvent()")}} erstellt worden sein.
Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mit {{ domxref("EventTarget.dispatchEvent()") }} ausgelöst wird.
Einmal ausgelöst, hat sie keine Wirkung mehr.

> **Note:** **Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.**
>
> Anstatt diese Funktion zu verwenden, nutzen Sie spezifische Ereigniskonstruktoren wie {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}.
> Die Seite zu [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen über die Verwendung dieser.

## Syntax

```js-nolint
event.initCustomEvent(type, canBubble, cancelable, detail)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM aufsteigt oder nicht.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abbrechbar ist.
- `detail`
  - : Beliebige Daten, die dem Handler über die {{domxref("CustomEvent.detail")}}-Eigenschaft zur Verfügung stehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CustomEvent")}}
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte: {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}.
