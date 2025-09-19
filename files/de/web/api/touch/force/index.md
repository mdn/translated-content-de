---
title: "Touch: force-Eigenschaft"
short-title: force
slug: Web/API/Touch/force
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die **`Touch.force`**-Eigenschaft nur lesbar gibt die Menge an Druck zurück, die der Benutzer auf die Berührungsoberfläche für einen [`Touch`](/de/docs/Web/API/Touch)-Punkt ausübt.

## Wert

Ein `float`, der die Menge Druck darstellt, die der Benutzer auf die Berührungsoberfläche ausübt. Dies ist ein Wert zwischen `0.0` (kein Druck) und `1.0` (der maximale Druck, den die Hardware erkennen kann). Ein Wert von `0.0` wird zurückgegeben, wenn kein Wert bekannt ist (zum Beispiel wenn das Touch-Gerät diese Eigenschaft nicht unterstützt). In Umgebungen, in denen die Druckkraft bekannt ist, kann der absolute Druck, der durch das force-Attribut repräsentiert wird, sowie die Empfindlichkeit in Druckstufen variieren.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `Touch.force`-Eigenschaft des [`Touch`](/de/docs/Web/API/Touch)-Interfaces. Diese Eigenschaft ist ein relativer Druckwert im Bereich von `0.0` bis `1.0`, wobei `0.0` keinen Druck und `1.0` den höchsten Druckwert darstellt, den das Touch-Gerät erkennen kann.

Im folgenden Code-Ausschnitt durchläuft der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler die Liste `targetTouches` und protokolliert den `force`-Wert jedes Berührungspunktes, aber der Code könnte unterschiedliche Prozessen ausführen, abhängig vom Wert.

```js
someElement.addEventListener("touchstart", (e) => {
  // Iterate through the list of touch points and log each touch
  // point's force.
  for (let i = 0; i < e.targetTouches.length; i++) {
    // Add code to "switch" based on the force value. For example
    // minimum pressure vs. maximum pressure could result in
    // different handling of the user's input.
    console.log(`targetTouches[${i}].force = ${e.targetTouches[i].force}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
