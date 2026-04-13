---
title: "TimeEvent: Methode initTimeEvent()"
short-title: initTimeEvent()
slug: Web/API/TimeEvent/initTimeEvent
l10n:
  sourceCommit: b57f79da1b90404fd0af82730cde8a0cdae51713
---

{{APIRef("SVG")}}

Die Methode **`TimeEvent.initTimeEvent()`** initialisiert den Wert eines [`TimeEvent`](/de/docs/Web/API/TimeEvent), der mit [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt wurde.

Diese Methode darf nur aufgerufen werden, bevor das Ereignis über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wurde. Wenn sie mehrmals aufgerufen wird, hat der letzte Aufruf Vorrang.

> [!NOTE]
> [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) ist zugunsten von Ereignis-Konstruktoren veraltet, aber `TimeEvent` hat keinen eigenen Konstruktor. [`CustomEvent`](/de/docs/Web/API/CustomEvent) ist kein gültiger Ersatz, da es keine `TimeEvent`-Instanz mit den `view`- und `detail`-Attributen des Interfaces erzeugt.

## Syntax

```js-nolint
initTimeEvent(type)
initTimeEvent(type, view)
initTimeEvent(type, view, detail)
```

### Parameter

- `type`
  - : Ein String, der den Ereignistyp angibt.
- `view` {{optional_inline}}
  - : Das [`Window`](/de/docs/Web/API/Window), von dem das Ereignis generiert wurde. Wenn `null` oder ausgelassen, wird das Attribut [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) des Ereignisses `null` sein. Standardwert ist `null`.
- `detail` {{optional_inline}}
  - : Ein `long`, der kontextbezogene Informationen über das Ereignis bereitstellt. Standardwert ist `0`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ein repeatEvent auslösen

```js
const evt = document.createEvent("TimeEvent");
evt.initTimeEvent("repeatEvent", window, 2);
svgElement.dispatchEvent(evt);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TimeEvent`](/de/docs/Web/API/TimeEvent)
- [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)
- [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)
