---
title: "BufferedChangeEvent: BufferedChangeEvent() Konstruktor"
short-title: BufferedChangeEvent()
slug: Web/API/BufferedChangeEvent/BufferedChangeEvent
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Der **`BufferedChangeEvent()`** Konstruktor der [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent) Schnittstelle erstellt eine neue Instanz eines `BufferedChangeEvent` Objekt.

## Syntax

```js-nolint
new BufferedChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Bei einem `BufferedChangeEvent` ist dies immer `bufferedchange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:

    > [!NOTE]
    > Obwohl die Spezifikation `options` als optional markiert, wirft Safari (derzeit die einzige Implementierung) einen `TypeError`, wenn das Argument vollständig weggelassen wird. Das Übergeben eines leeren Objekts (`{}`) funktioniert korrekt.
    - `addedRanges` {{optional_inline}}
      - : Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt, das die Zeitbereiche darstellt, die dem Puffer hinzugefügt wurden.
    - `removedRanges` {{optional_inline}}
      - : Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt, das die Zeitbereiche darstellt, die aus dem Puffer entfernt wurden.

### Rückgabewert

Eine neue Instanz eines [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent) Objekts.

## Beispiele

### Untersuchen eines bufferedchange Ereignisses

Der `BufferedChangeEvent()` Konstruktor wird in der Regel nicht manuell aufgerufen. Wenn ein [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) `bufferedchange` Ereignis ausgelöst wird (was bedeutet, dass sich seine gepufferten Bereiche ändern), wird der Browser ein `BufferedChangeEvent` Objekt erstellen, das als Ereignisobjekt verwendet wird.

Die Eigenschaften des Ereignisses beschreiben, was sich geändert hat:

```js
sourceBuffer.addEventListener("bufferedchange", (event) => {
  console.log(event instanceof BufferedChangeEvent); // true
  console.log(event.type); // "bufferedchange"
  console.log(event.addedRanges); // TimeRanges — ranges added to the buffer
  console.log(event.removedRanges); // TimeRanges — ranges removed from the buffer
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event) Ereignis
