---
title: "BufferedChangeEvent: BufferedChangeEvent() Konstruktor"
short-title: BufferedChangeEvent()
slug: Web/API/BufferedChangeEvent/BufferedChangeEvent
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`BufferedChangeEvent()`**-Konstruktor des [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent) Interfaces erzeugt eine neue Instanz eines `BufferedChangeEvent`-Objekts.

## Syntax

```js-nolint
new BufferedChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Im Fall von `BufferedChangeEvent` ist dies immer `bufferedchange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:

    > [!NOTE]
    > Obwohl die Spezifikation `options` als optional kennzeichnet, wirft Safari (derzeit die einzige Implementierung) einen `TypeError`, wenn das Argument vollständig weggelassen wird. Das Übergeben eines leeren Objekts (`{}`) funktioniert korrekt.
    - `addedRanges` {{optional_inline}}
      - : Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt, das die dem Puffer hinzugefügten Zeitbereiche darstellt.
    - `removedRanges` {{optional_inline}}
      - : Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt, das die aus dem Puffer entfernten Zeitbereiche darstellt.

### Rückgabewert

Eine neue Instanz eines [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent) Objekts.

## Beispiele

### Untersuchen eines bufferedchange-Ereignisses

Der `BufferedChangeEvent()`-Konstruktor wird im Allgemeinen nicht manuell aufgerufen. Wenn ein [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)'s `bufferedchange`-Ereignis ausgelöst wird (was bedeutet, dass sich seine gepufferten Bereiche ändern), erstellt der Browser ein `BufferedChangeEvent`-Objekt, um es als Ereignisobjekt zu verwenden.

Die Eigenschaften des Ereignisses beschreiben die Änderungen:

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
