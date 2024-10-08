---
title: "PointerEvent: twist-Eigenschaft"
short-title: twist
slug: Web/API/PointerEvent/twist
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`twist`** des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces repräsentiert die im Uhrzeigersinn gemessene Rotation des Zeigers (z.B. eines Stiftstylus) um seine Hauptachse in Grad.

## Wert

Ein `long`-Wert, der den Betrag der Verdrehung in Grad darstellt, der auf den Transducer (Zeiger) angewendet wird. Der Wert liegt im Bereich von `0` bis `359`, einschließlich. Für Geräte, die `twist` nicht melden, beträgt der Wert `0`.

## Beispiele

Wenn ein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wird, werden je nach Wert der `twist`-Eigenschaft des Ereignisses unterschiedliche Funktionen aufgerufen.

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.twist === 0) {
      // No twist
      process_no_twist(event);
    } else {
      // Default
      process_twist(event);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Touch.force`](/de/docs/Web/API/Touch/force)
