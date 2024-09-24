---
title: "MutationRecord: oldValue-Eigenschaft"
short-title: oldValue
slug: Web/API/MutationRecord/oldValue
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`oldValue`** von {{domxref("MutationRecord")}} enthält die Zeichenfolgendaten oder den Attributwert eines beobachteten Knotens, bevor er geändert wurde.

## Wert

Ein String, der den alten Wert eines geänderten Attributs darstellt, wenn:

- der `attributeOldValue`-Parameter in {{domxref("MutationObserver.observe()")}} `true` ist
- der `attributes`-Parameter in {{domxref("MutationObserver.observe()")}} `true` ist oder weggelassen wurde
- die Mutation vom {{domxref("MutationRecord.type", "type")}} `attributes` ist.

Ein String, der den alten Wert eines geänderten {{domxref("CharacterData")}}-Knotens darstellt, wenn:

- der `characterDataOldValue`-Parameter in {{domxref("MutationObserver.observe()")}} `true` ist
- der `characterData`-Parameter in {{domxref("MutationObserver.observe()")}} `true` ist oder weggelassen wurde
- die Mutation vom {{domxref("MutationRecord.type", "type")}} `characterData` ist.

Andernfalls ist diese Eigenschaft `null`.

## Beispiele

### Alten Farbwert anzeigen

Im folgenden Beispiel gibt es einen Button, der die Farbe eines `h1` zu einer zufälligen neuen Farbe ändert. Ein {{domxref("MutationObserver")}} wird verwendet, um den Zielknoten (`h1`) auf Änderungen des Attributs zu überwachen; wenn eine Änderung erkannt wird, ruft der Beobachter eine Funktion `logOldValue()` auf.

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
  // Zufällige 6-stellige hexadezimale Zahl zur Verwendung als Hex-Farbwert
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
