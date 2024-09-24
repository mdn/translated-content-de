---
title: "MutationRecord: Eigenschaft attributeName"
short-title: attributeName
slug: Web/API/MutationRecord/attributeName
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`attributeName`** von {{domxref("MutationRecord")}} enthält den Namen eines geänderten Attributs, das zu einem Knoten gehört, der von einem {{domxref("MutationObserver")}} beobachtet wird.

## Wert

Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Records `attributes` ist, handelt es sich um einen String, der den Namen des mutierten Attributs des Mutationsziels darstellt.

Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Records nicht `attributes` ist, ist dieser `null`.

## Beispiele

### Namen des zuletzt aktualisierten Attributs abrufen

Im folgenden Beispiel gibt es vier Schaltflächen: Zwei ändern das `style`-Attribut des `h1`-Elements, und zwei ändern das `class`-Attribut des `h1`-Elements. Das Skript verwendet einen {{domxref("MutationObserver")}}, um die Änderungen zu erkennen und den untenstehenden Text auf den Namen des zuletzt geänderten Attributs zu aktualisieren.

#### HTML

```html
<h1 class="blue" style="color:black;" id="hiMom">Hi, Mom!</h1>

<button id="redButton">Setze Klasse auf "red"</button>
<button id="blueButton">Setze Klasse auf "blue"</button>
<button id="whiteButton">Setze Stil auf "color:white;"</button>
<button id="blackButton">Setze Stil auf "color:black;"</button>

<p id="log">Aktualisierter Attributname:</p>
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
      log.textContent = `Aktualisierter Attributname: ${record.attributeName}`;
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
