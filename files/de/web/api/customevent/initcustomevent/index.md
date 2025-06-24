---
title: "CustomEvent: initCustomEvent() Methode"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}{{Deprecated_header}}{{AvailableInWorkers}}

Die **`CustomEvent.initCustomEvent()`** Methode initialisiert ein [`CustomEvent`](/de/docs/Web/API/CustomEvent) Objekt.
Falls das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein.
Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.
Einmal ausgelöst, tut es nichts mehr.

> [!NOTE] > **Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.**
>
> Anstatt diese Funktion zu nutzen, verwenden Sie spezifische Ereigniskonstruktoren, wie [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
> Die Seite über [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen darüber, wie diese verwendet werden.

## Syntax

```js-nolint
initCustomEvent(type, canBubble, cancelable, detail)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis sich durch das DOM nach oben fortpflanzt oder nicht.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `detail`
  - : Beliebige Daten, die dem Handler über die Eigenschaft [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) zur Verfügung stehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- Der Konstruktor, der anstelle dieser veralteten Methode zu verwenden ist: [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
