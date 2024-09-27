---
title: "MutationRecord: oldValue-Eigenschaft"
short-title: oldValue
slug: Web/API/MutationRecord/oldValue
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`oldValue`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) enthält die Zeichendaten oder Attributwerte eines beobachteten Knotens, bevor dieser geändert wurde.

## Wert

Ein String, der den alten Wert eines Attributs darstellt, welches geändert wurde, wenn:

- der Parameter `attributeOldValue` bei [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) `true` ist
- der Parameter `attributes` bei [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) `true` oder weggelassen ist
- die Mutation [`type`](/de/docs/Web/API/MutationRecord/type) `attributes` ist.

Ein String, der den alten Wert eines [`CharacterData`](/de/docs/Web/API/CharacterData) Knotens darstellt, der geändert wurde, wenn:

- der Parameter `characterDataOldValue` bei [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) `true` ist
- der Parameter `characterData` bei [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) `true` oder weggelassen ist
- die Mutation [`type`](/de/docs/Web/API/MutationRecord/type) `characterData` ist.

Andernfalls ist diese Eigenschaft `null`.

## Beispiele

### Alten Farbwert anzeigen

Im folgenden Beispiel gibt es einen Button, der die Farbe eines `h1` zu einer zufälligen neuen Farbe ändert. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird verwendet, um den Zielknoten (`h1`) auf Änderungen am Attribut zu beobachten; wenn eine Änderung erkannt wird, ruft der Observer eine Funktion, `logOldValue()`, auf.

Die `logOldValue()`-Funktion erhält das `mutationRecords`-Array, das die `MutationRecord`-Objekte enthält. Die `oldValue`-Eigenschaft des `MutationRecord`-Objekts wird dann in der Farbe des alten Wertes angezeigt.

#### HTML

```html
<h1 id="h1" style="color: rgb(0 0 0);">Hi, Mom!</h1>
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
