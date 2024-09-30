---
title: "Touch: force-Eigenschaft"
short-title: force
slug: Web/API/Touch/force
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`Touch.force`**-Eigenschaft gibt den Druck zurück, den der Benutzer auf die Touch-Oberfläche für einen [`Touch`](/de/docs/Web/API/Touch)-Punkt ausübt.

## Wert

Ein `float`, der den Druck darstellt, den der Benutzer auf die Touch-Oberfläche ausübt. Dies ist ein Wert zwischen `0.0` (kein Druck) und `1.0` (der maximale Druck, den die Hardware erkennen kann). Ein Wert von `0.0` wird zurückgegeben, wenn kein Wert bekannt ist (zum Beispiel, wenn das Touch-Gerät diese Eigenschaft nicht unterstützt). In Umgebungen, in denen der Druck bekannt ist, können der absolute Druck, der durch das force-Attribut dargestellt wird, und die Empfindlichkeit in Druckstufen variieren.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `Touch.force`-Eigenschaft der [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle. Diese Eigenschaft ist ein relativer Druckwert im Bereich von `0.0` bis `1.0`, wobei `0.0` keinen Druck bedeutet und `1.0` das höchste Druckniveau darstellt, das das Touch-Gerät erfassen kann.

Im folgenden Codebeispiel durchläuft der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler die Liste der `targetTouches` und protokolliert den `force`-Wert jedes Berührungspunktes, aber der Code könnte auch unterschiedliche Verarbeitung in Abhängigkeit vom Wert aufrufen.

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // Iterate through the list of touch points and log each touch
    // point's force.
    for (let i = 0; i < e.targetTouches.length; i++) {
      // Add code to "switch" based on the force value. For example
      // minimum pressure vs. maximum pressure could result in
      // different handling of the user's input.
      console.log(`targetTouches[${i}].force = ${e.targetTouches[i].force}`);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
