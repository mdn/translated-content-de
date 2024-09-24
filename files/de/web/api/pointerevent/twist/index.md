---
title: "PointerEvent: twist-Eigenschaft"
short-title: twist
slug: Web/API/PointerEvent/twist
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`twist`**-Eigenschaft der {{domxref("PointerEvent")}}-Schnittstelle repräsentiert die Drehung des Zeigers (z.B. eines Stiftstylus) im oder gegen den Uhrzeigersinn um seine Hauptachse, in Grad.

## Wert

Ein `long`-Wert, der die Menge der Drehung in Grad angibt, die auf den Transducer (Zeiger) angewendet wird. Der Wert liegt im Bereich von `0` bis `359`, einschließlich. Für Geräte, die keinen `twist` melden, beträgt der Wert `0`.

## Beispiele

Wenn ein {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignis ausgelöst wird, werden je nach dem Wert der `twist`-Eigenschaft des Ereignisses unterschiedliche Funktionen aufgerufen.

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.twist === 0) {
      // Keine Drehung
      process_no_twist(event);
    } else {
      // Standard
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

- {{ domxref("Touch.force") }}
