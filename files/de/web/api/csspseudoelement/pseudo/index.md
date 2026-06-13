---
title: "CSSPseudoElement: pseudo() Methode"
short-title: pseudo()
slug: Web/API/CSSPseudoElement/pseudo
l10n:
  sourceCommit: b0db98a5c5a6cc7dbc519c272ab0572f6481afc6
---

{{APIRef}}{{SeeCompatTable}}

Die **`pseudo()`** Methode der [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle gibt eine `CSSPseudoElement` Instanz zurück, die ein bestimmtes [verschachteltes Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) repräsentiert.

## Syntax

```js-nolint
pseudo(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Pseudo-Elements repräsentiert, von dem eine Repräsentation zurückgegeben werden soll. Gültige Werte sind:
    - {{cssxref("::after")}}
    - {{cssxref("::before")}}
    - {{cssxref("::marker")}}

### Rückgabewert

Eine [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Objektinstanz oder `null`, wenn `type` nicht einem gültigen Pseudo-Element-Typ entspricht.

## Beschreibung

Die `CSSPseudoElement.pseudo()` Methode wird verwendet, um ein Pseudo-Element zu adressieren, das an ein anderes Pseudo-Element angehängt ist, anstatt direkt an ein Standard-DOM-Element. Wenn beispielsweise ein `::before` Pseudo-Element einen Listenmarker generiert — auswählbar über `::before::marker` — kann diese Methode das `::marker` verschachtelt in diesem `::before` abrufen. Sie rufen die Methode auf dem übergeordneten Pseudo-Element auf und übergeben den Typ des verschachtelten untergeordneten Pseudo-Elements als Argument.

Wenn der `type`-Parameter einen gültigen Pseudo-Element-Typ enthält, gibt `pseudo()` immer eine `CSSPseudoElement` Instanz zurück, auch wenn dieses Pseudo-Element nicht auf dem aufrufenden Pseudo-Element generiert wurde.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel demonstrieren wir die grundsätzliche Verwendung der `pseudo()` Methode.

#### HTML

Wir fügen ein {{htmlelement("p")}} Element mit Text und ein {{htmlelement("output")}} Element hinzu, um die Ausgabe von JavaScript zu protokollieren.

```html live-sample___basic
<p>New York's hottest club is...</p>
<output></output>
```

#### CSS

Wir geben dem `<p>` Element's {{cssxref("::after")}} Pseudo-Element etwas {{cssxref("content")}} und setzen dessen {{cssxref("display")}} auf `list-item`, damit es ein `::marker` generiert. Wir wenden auch einige grundlegende Stile an.

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

In unserem Skript greifen wir auf unsere `<p>` und `<output>` Elemente zu und rufen `CSSPseudoElement` Objekte über die `pseudo()` Methode ab, die das `::after` Pseudo-Element des `<p>` Elements und das `::marker` Pseudo-Element des `::after` Pseudo-Elements repräsentieren. Wir protokollieren dann einige Details des untergeordneten Pseudo-Elements in unser `<output>` Element. Wir fügen auch eine rudimentäre Fehlerbehandlung über eine [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Struktur hinzu, um eine Fehlermeldung in nicht unterstützenden Browsern zu drucken.

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
