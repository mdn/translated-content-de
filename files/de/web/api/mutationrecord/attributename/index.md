---
title: "MutationRecord: Eigenschaft attributeName"
short-title: attributeName
slug: Web/API/MutationRecord/attributeName
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`attributeName`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) enthält den Namen eines geänderten Attributs eines Knotens, der von einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wird.

## Wert

Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Datensatzes `attributes` ist, stellt dies eine Zeichenkette dar, die den Namen des mutierten Attributs des Mutationsziels repräsentiert.

Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Datensatzes nicht `attributes` ist, ist dies `null`.

## Beispiele

### Namen des zuletzt aktualisierten Attributs abrufen

Im folgenden Beispiel gibt es vier Schaltflächen: Zwei ändern das `style`-Attribut des `<h1>`-Elements, und zwei ändern das `class`-Attribut des `<h1>`-Elements. Das Skript verwendet einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) zur Erkennung der Änderungen und aktualisiert den darunter liegenden Text mit dem Namen des zuletzt geänderten Attributs.

#### HTML

```html
<h1 class="blue" style="color:black;" id="hiMom">Hi, Mom!</h1>

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

{{EmbedLiveSample("Get last updated attribute name", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
