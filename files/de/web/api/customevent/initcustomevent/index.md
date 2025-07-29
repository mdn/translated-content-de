---
title: "CustomEvent: initCustomEvent() Methode"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{Deprecated_header}}{{AvailableInWorkers}}

Die **`CustomEvent.initCustomEvent()`** Methode initialisiert ein [`CustomEvent`](/de/docs/Web/API/CustomEvent) Objekt. Wenn das Ereignis bereits ausgelöst wurde, hat diese Methode keine Funktion mehr.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Sobald es ausgelöst wurde, hat es keine Funktion mehr.

> [!NOTE]
> **Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.**
>
> Statt diese Funktion zu nutzen, verwenden Sie spezifische Ereignis-Konstruktoren, wie [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
> Der Abschnitt über [Ereignisse erstellen und auslösen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) gibt weitere Informationen zur Verwendung dieser Konstruktoren.

## Syntax

```js-nolint
initCustomEvent(type, canBubble, cancelable, detail)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis im DOM aufsteigt oder nicht.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `detail`
  - : Alle Daten, die dem Handler über die [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) Eigenschaft zur Verfügung stehen.

### Rückgabewert

Keiner (`undefined`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte: [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
