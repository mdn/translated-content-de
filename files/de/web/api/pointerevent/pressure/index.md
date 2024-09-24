---
title: "PointerEvent: pressure-Eigenschaft"
short-title: pressure
slug: Web/API/PointerEvent/pressure
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`pressure`** der
{{domxref("PointerEvent")}}-Schnittstelle gibt den normalisierten Druck der Zeigereingabe an.

## Wert

Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, einschließlich, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann. Für Hardware, die keinen Druck unterstützt, wie z.B. eine Maus, beträgt der Wert `0.5`, wenn der Zeiger im aktiven Tastenstatus ist, und ansonsten `0`.

## Beispiele

In diesem Codebeispiel werden bei einem {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignis unterschiedliche Funktionen aufgerufen, abhängig vom Wert der `pressure`-Eigenschaft des Ereignisses.

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.pressure === 0) {
      // Kein Druck
      process_no_pressure(event);
    } else if (event.pressure === 1) {
      // Maximaler Druck
      process_max_pressure(event);
    } else {
      // Standard
      process_pressure(event);
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
