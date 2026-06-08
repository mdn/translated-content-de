---
title: "CSSPseudoElement: parent-Eigenschaft"
short-title: parent
slug: Web/API/CSSPseudoElement/parent
l10n:
  sourceCommit: 55fa0e2b797b1358464b42ceb32167675a03ca8d
---

{{APIRef}}{{SeeCompatTable}}

Die **`parent`**-Eigenschaft der [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle gibt eine Referenz auf das ursprüngliche Quell-Element des Pseudo-Elements zurück, welches ein [`Element`](/de/docs/Web/API/Element) oder ein `CSSPseudoElement` im Falle eines [verschachtelten Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) sein kann.

Dies unterscheidet sich von der [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) Eigenschaft, die immer ein `Element` zurückgibt: Eine Referenz auf das ursprüngliche Quell-Element des Pseudo-Elements.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder ein [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement), das den unmittelbaren Elternteil des Pseudo-Elements darstellt.

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel demonstrieren wir den Unterschied zwischen den Eigenschaften `parent` und [`element`](/de/docs/Web/API/CSSPseudoElement/element).

#### HTML

Wir fügen ein {{htmlelement("p")}}-Element mit Text und ein {{htmlelement("output")}}-Element hinzu, um Ausgaben aus JavaScript zu protokollieren.

```html live-sample___basic
<p>New York's hottest club is...</p>
<output></output>
```

#### CSS

Wir geben dem `<p>`-Element ein {{cssxref("::after")}} Pseudo-Element mit etwas {{cssxref("content")}} und setzen dessen {{cssxref("display")}} auf `list-item`, damit es einen `::marker` generiert. Wir wenden auch einige grundlegende Stile an.

```css hidden live-sample___basic
body {
  width: 80%;
  margin: 0 auto;
}
```

```css live-sample___basic
p {
  background-color: violet;
  padding: 20px;
}

p::after {
  content: "Crease";
  background-color: cadetblue;
  padding: 20px;
  display: list-item;
}

p::after::marker {
  content: "🔹";
}
```

#### JavaScript

In unserem Skript holen wir Referenzen zu unserem `<p>`- und `<output>`-Element und rufen mittels der `pseudo()` Methode `CSSPseudoElement` Objekte ab, die das `::after`-Pseudo-Element des `<p>`-Elements und das `::marker`-Pseudo-Element des `::after`-Pseudo-Elements repräsentieren. Wir protokollieren dann einige Details des Kinder-Pseudo-Elements zu unserem `<output>`-Element. Außerdem fügen wir eine grundlegende Fehlerbehandlung über eine [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Struktur hinzu, um eine Fehlermeldung in nicht unterstützenden Browsern auszugeben.

```js live-sample___basic
const pElem = document.querySelector("p");
const output = document.querySelector("output");

try {
  const pseudoElem = pElem.pseudo("::after");
  const pseudoPseudoElem = pseudoElem.pseudo("::marker");
  output.textContent = `${pseudoPseudoElem.type} pseudo-element. Parent: ${pseudoPseudoElem.parent.type}. Ultimate originating element: <${pseudoPseudoElem.element.tagName.toLowerCase()}>`;
} catch (e) {
  output.textContent = `Your browser doesn't support CSSPseudoElement and/or the pseudo() method: ${e}`;
}
```

#### Ergebnis

{{embedlivesample("basic", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element)
- [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo)
- [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo)
