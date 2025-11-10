---
title: "MutationRecord: `attributeName`-Eigenschaft"
short-title: attributeName
slug: Web/API/MutationRecord/attributeName
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`attributeName`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) enthält den Namen eines geänderten Attributs, das zu einem Knoten gehört, der von einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wird.

## Wert

Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Eintrags `attributes` ist, stellt dies einen String dar, der den Namen des mutierten Attributs des Mutationsziels darstellt.

Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Eintrags nicht `attributes` ist, ist dies `null`.

## Beispiele

### Zuletzt aktualisierten Attributnamen erhalten

Im folgenden Beispiel gibt es vier Schaltflächen: zwei ändern das `style`-Attribut des `h1`-Elements, und zwei ändern das `class`-Attribut des `h1`-Elements. Das Skript verwendet einen [`MutationObserver`](/de/docs/Web/API/MutationObserver), um die Änderungen zu erkennen und wird den untenstehenden Text mit dem Namen des letzten geänderten Attributs aktualisieren.

#### HTML

```html
<h1 class="blue" id="hiMom">Hi, Mom!</h1>

<button id="redButton">Set class to "red"</button>
<button id="blueButton">Set class to "blue"</button>
<button id="whiteButton">Set style to "color:white;"</button>
<button id="blackButton">Set style to "color:black;"</button>

<p id="log">Updated attribute name:</p>
```

#### CSS

```css
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
```

#### JavaScript

```js
const hiMom = document.querySelector("#hiMom");
const redButton = document.querySelector("#redButton");
const blueButton = document.querySelector("#blueButton ");
const whiteButton = document.querySelector("#whiteButton");
const blackButton = document.querySelector("#blackButton");
const log = document.querySelector("#log");

redButton.addEventListener("click", () => {
  hiMom.classList.add("red");
  hiMom.classList.remove("blue");
});

blueButton.addEventListener("click", () => {
  hiMom.classList.add("blue");
  hiMom.classList.remove("red");
});

whiteButton.addEventListener("click", () => {
  hiMom.style.color = "white";
});

blackButton.addEventListener("click", () => {
  hiMom.style.color = "black";
});

function logLastAttr(mutationRecordArray) {
  for (const record of mutationRecordArray) {
    if (record.type === "attributes") {
      log.textContent = `Updated attribute name: ${record.attributeName}`;
    }
  }
}

const observer = new MutationObserver(logLastAttr);
observer.observe(hiMom, { attributes: true });
```

#### Ergebnis

{{EmbedLiveSample("Zuletzt aktualisierten Attributnamen erhalten", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
