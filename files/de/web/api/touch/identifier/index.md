---
title: "Touch: identifier-Eigenschaft"
short-title: identifier
slug: Web/API/Touch/identifier
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`identifier`** der Schnittstelle [`Touch`](/de/docs/Web/API/Touch) gibt einen Wert zurück, der diesen Berührungspunkt auf der Touch-Oberfläche eindeutig identifiziert. Dieser Wert bleibt bei jedem Event, das die Bewegung dieses Fingers (oder Eingabestifts) auf der Oberfläche betrifft, gleich, bis der Finger (oder Eingabestift) von der Oberfläche abgehoben wird.

## Wert

Ein `long`, der die eindeutige ID des [`Touch`](/de/docs/Web/API/Touch)-Objekts darstellt.

## Beispiele

```js
someElement.addEventListener("touchmove", (e) => {
  // Iterate through the list of touch points that changed
  // since the last event and print each touch point's identifier.
  for (let i = 0; i < e.changedTouches.length; i++) {
    console.log(
      `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
    );
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
