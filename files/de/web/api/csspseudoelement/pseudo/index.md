---
title: "CSSPseudoElement: pseudo() Methode"
short-title: pseudo()
slug: Web/API/CSSPseudoElement/pseudo
l10n:
  sourceCommit: 55fa0e2b797b1358464b42ceb32167675a03ca8d
---

{{APIRef}}

Die **`pseudo()`**-Methode der [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle gibt eine `CSSPseudoElement`-Instanz zurück, die ein bestimmtes [verschachteltes Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) repräsentiert.

## Syntax

```js-nolint
pseudo(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Pseudoelements angibt, von dem eine Darstellung zurückgegeben werden soll. Gültige Werte sind:
    - {{cssxref("::after")}}
    - {{cssxref("::before")}}
    - {{cssxref("::marker")}}

### Rückgabewert

Ein [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Objektinstanz oder `null`, wenn `type` nicht gleich einem gültigen Pseudoelement-Typ ist.

## Beschreibung

Die Methode `CSSPseudoElement.pseudo()` wird verwendet, um ein Pseudoelement zu adressieren, das an ein anderes Pseudoelement angehängt ist, anstatt direkt an ein standardmäßiges DOM-Element. Wenn zum Beispiel ein `::before`-Pseudoelement eine Listenmarkierung erzeugt — auswählbar über `::before::marker` — kann diese Methode das `::marker` abrufen, das innerhalb dieses `::before` verschachtelt ist. Sie rufen die Methode auf dem übergeordneten Pseudoelement auf und übergeben den Typ des verschachtelten Kinderpseudoelements als Argument.

Solange der `type`-Parameter einen gültigen Pseudoelementtyp enthält, wird `pseudo()` immer eine `CSSPseudoElement`-Instanz zurückgeben, auch wenn dieses Pseudoelement auf dem aufrufenden Pseudoelement nicht erzeugt wurde.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel zeigen wir die grundlegende Verwendung der `pseudo()`-Methode.

#### HTML

Wir fügen ein {{htmlelement("p")}}-Element mit Text ein und ein {{htmlelement("output")}}-Element, um die Ausgabe von JavaScript aufzuzeichnen.

```html live-sample___basic
<p>New York's hottest club is...</p>
<output></output>
```

#### CSS

Wir geben dem `<p>`-Element das {{cssxref("::after")}}-Pseudoelement mit etwas {{cssxref("content")}} und setzen dessen {{cssxref("display")}} auf `list-item`, sodass es einen `::marker` erzeugt. Außerdem wenden wir einige grundlegende Stile an.

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

In unserem Skript greifen wir auf unsere `<p>`- und `<output>`-Elemente und beziehen `CSSPseudoElement`-Objekte über die `pseudo()`-Methode, die das `::after`-Pseudoelement des `<p>`-Elements und das `::marker`-Pseudoelement des `::after`-Pseudoelements darstellen. Dann protokollieren wir einige Details des Kinderpseudoelements in unser `<output>`-Element. Wir fügen auch eine grundlegende Fehlerbehandlung über eine [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Struktur hinzu, um eine Fehlermeldung in nicht unterstützenden Browsern auszugeben.

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
- [`CSSPseudoElement.parent`](/de/docs/Web/API/CSSPseudoElement/parent)
- [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo)
