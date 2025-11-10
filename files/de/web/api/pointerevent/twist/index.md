---
title: "PointerEvent: twist-Eigenschaft"
short-title: twist
slug: Web/API/PointerEvent/twist
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die **`twist`**-Schreibgeschützte Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces repräsentiert die Drehung des Zeigegeräts (z.B. eines Stifts) im Uhrzeigersinn um seine Hauptachse, in Grad.

## Wert

Ein `long`-Wert, der die Drehung in Grad darstellt, die auf den Transducer (Zeigegerät) angewendet wird. Der Wert liegt im Bereich von `0` bis `359`, einschließlich. Für Geräte, die `twist` nicht melden, ist der Wert `0`.

## Beispiele

Wenn ein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wird, werden je nach Wert der `twist`-Eigenschaft des Ereignisses unterschiedliche Funktionen aufgerufen.

```js
someElement.addEventListener("pointerdown", (event) => {
  if (event.twist === 0) {
    // No twist
    process_no_twist(event);
  } else {
    // Default
    process_twist(event);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Touch.force`](/de/docs/Web/API/Touch/force)
