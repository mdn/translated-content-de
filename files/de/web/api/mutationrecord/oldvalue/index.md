---
title: "MutationRecord: oldValue-Eigenschaft"
short-title: oldValue
slug: Web/API/MutationRecord/oldValue
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`oldValue`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) enthält die Zeichendaten oder Attributwerte eines beobachteten Knotens, bevor er geändert wurde.

## Wert

Ein String, der den alten Wert eines Attributs darstellt, das geändert wurde, falls:

- der Parameter `attributeOldValue` von [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) `true` ist
- der Parameter `attributes` von [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) `true` ist oder weggelassen wird
- der Mutation [`type`](/de/docs/Web/API/MutationRecord/type) `attributes` ist.

Ein String, der den alten Wert eines [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens darstellt, der geändert wurde, falls:

- der Parameter `characterDataOldValue` von [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) `true` ist
- der Parameter `characterData` von [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) `true` ist oder weggelassen wird
- der Mutation [`type`](/de/docs/Web/API/MutationRecord/type) `characterData` ist.

Andernfalls ist diese Eigenschaft `null`.

## Beispiele

### Alten Farbwert anzeigen

Im folgenden Beispiel gibt es einen Button, der die Farbe eines `h1`-Elements in eine zufällige neue Farbe ändert. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird verwendet, um den Zielknoten (`h1`) auf Änderungen des Attributs zu beobachten. Wenn eine Änderung erkannt wird, ruft der Beobachter eine Funktion auf, die `logOldValue()`.

Die Funktion `logOldValue()` wird mit dem Array `mutationRecords` aufgerufen, das die `MutationRecord`-Objekte enthält. Die `oldValue`-Eigenschaft des `MutationRecord`-Objekts wird dann in der Farbe des alten Wertes angezeigt.

#### HTML

```html
<h1 id="h1">Hi, Mom!</h1>
<button id="changeColorButton">Change color</button>
<p id="log"></p>
```

#### JavaScript

```js
const h1 = document.getElementById("h1");
const changeValueButton = document.getElementById("changeColorButton");
const log = document.getElementById("log");

changeColorButton.addEventListener("click", () => {
  // Random 6 character hexadecimal number to use as the hex color value
  const newColor = Math.floor(Math.random() * 16777215).toString(16);
  h1.style.color = `#${newColor}`;
});

function logOldValue(mutationRecordArray) {
  for (const record of mutationRecordArray) {
    log.textContent = `Old value: ${record.oldValue}`;
    log.style.cssText = record.oldValue;
  }
}

const observer = new MutationObserver(logOldValue);
observer.observe(h1, {
  attributes: true,
  attributeOldValue: true,
});
```

#### Ergebnis

{{EmbedLiveSample("Show old color value", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
