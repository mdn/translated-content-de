---
title: "CustomEvent: Methode initCustomEvent()"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`CustomEvent.initCustomEvent()`**-Methode initialisiert ein [`CustomEvent`](/de/docs/Web/API/CustomEvent)-Objekt.
Wenn das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein.
Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mithilfe von [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.
Nach dem Auslösen hat sie keine Wirkung mehr.

> [!NOTE]
> **Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.**
>
> Verwenden Sie stattdessen spezifische Ereignis-Konstruktoren, wie [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
> Der Abschnitt [Ereignisse erstellen und auslösen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) gibt weitere Informationen über die Nutzung dieser.

## Syntax

```js-nolint
initCustomEvent(type, canBubble, cancelable, detail)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM nach oben blubbern kann oder nicht.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `detail`
  - : Beliebige Daten, die dem Handler über die Eigenschaft [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) zur Verfügung stehen.

### Rückgabewert

Keiner (`undefined`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden soll: [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
