---
title: "HTMLOListElement: start Eigenschaft"
short-title: start
slug: Web/API/HTMLOListElement/start
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

Die **`start`**-Eigenschaft der {{domxref("HTMLOListElement")}}-Schnittstelle gibt den Startwert der nummerierten Liste an, mit einem Standardwert von 1.

Sie spiegelt das [`start`](/de/docs/Web/HTML/Element/ol#start)-Attribut des {{HTMLElement("ol")}}-Elements wider.

> [!NOTE]
> Der Wert der `start`-Eigenschaft ist unabhängig von der {{domxref("HTMLOListElement.type")}}-Eigenschaft; er ist immer numerisch, auch wenn der Typ Buchstaben oder römische Ziffern sind.

## Wert

Ein `long`-Wert.

## Beispiele

### HTML

```html
<ol id="order-list">
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

### JavaScript

```js
const olElement = document.querySelector("#order-list");
console.log(olElement.start); // Ausgabe: "1"
olElement.start = "11";
console.log(olElement.start); // Ausgabe: "11"
```

### Ergebnis

{{EmbedLiveSample("Examples", 400, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
