---
title: "Element: pseudo()-Methode"
short-title: pseudo()
slug: Web/API/Element/pseudo
l10n:
  sourceCommit: 1b1802abb7dc82aba2a13c429d25a34aaa945acf
---

{{SeeCompatTable}}

{{APIRef("DOM")}}

Die **`pseudo()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt ein [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Objekt zurück, das das dem Element zugeordnete [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) des angegebenen Typs repräsentiert.

Wenn der Parameter `type` einen gültigen Pseudoelementtyp enthält, gibt `pseudo()` immer eine `CSSPseudoElement`-Instanz zurück – auch wenn dieses Pseudoelement für das aufrufende Element nicht generiert wurde.

## Syntax

```js-nolint
pseudo(type)
```

### Parameter

- `type`
  - : Eine Zeichenfolge, die den Typ des Pseudoelements angibt, für das eine Repräsentation zurückgegeben werden soll. Gültige Werte sind:
    - {{cssxref("::after")}}
    - {{cssxref("::before")}}
    - {{cssxref("::marker")}}

### Rückgabewert

Eine [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Objektinstanz oder `null`, wenn `type` keinem gültigen Pseudoelementtyp entspricht.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der `pseudo()`-Methode.

#### HTML

Wir fügen ein {{htmlelement("p")}}-Element mit Text und ein {{htmlelement("output")}}-Element zur Ausgabe von JavaScript-Ergebnissen ein.

```html live-sample___basic
<p>New York's hottest club is...</p>
<output></output>
```

#### CSS

Wir weisen dem {{cssxref("::after")}}-Pseudoelement des `<p>`-Elements einen {{cssxref("content")}}-Wert zu und versehen beide mit einfachen Stilen.

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
}
```

#### JavaScript

In unserem Skript rufen wir Referenzen auf die Elemente `<p>` und `<output>` ab. Mithilfe der `pseudo()`-Methode erhalten wir ein `CSSPseudoElement`, das das `::after`-Pseudoelement des `<p>`-Elements repräsentiert. Anschließend geben wir einige Details zum Pseudoelement im `<output>`-Element aus. Außerdem verwenden wir eine einfache Fehlerbehandlung mit einer [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Struktur, um in Browsern ohne Unterstützung eine Fehlermeldung auszugeben.

```js live-sample___basic
const pElem = document.querySelector("p");
const output = document.querySelector("output");

try {
  const pseudoElem = pElem.pseudo("::after");
  output.textContent = `${pseudoElem.type} pseudo-element. Parent: <${pseudoElem.parent.tagName.toLowerCase()}>`;
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

- [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo)
