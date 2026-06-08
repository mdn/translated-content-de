---
title: "Element: pseudo()-Methode"
short-title: pseudo()
slug: Web/API/Element/pseudo
l10n:
  sourceCommit: 55fa0e2b797b1358464b42ceb32167675a03ca8d
---

{{APIRef("DOM")}}.

Die **`pseudo()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt ein [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Objekt zurück, das das [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) des angegebenen Typs darstellt, das mit dem Element verknüpft ist.

Vorausgesetzt, dass der `type`-Parameter einen gültigen Pseudo-Element-Typ enthält, wird `pseudo()` immer eine `CSSPseudoElement`-Instanz zurückgeben, selbst wenn dieses Pseudo-Element nicht auf dem aufrufenden Element generiert wurde.

## Syntax

```js-nolint
pseudo(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Pseudo-Elements angibt, für das eine Repräsentation zurückgegeben werden soll. Gültige Werte sind:
    - {{cssxref("::after")}}
    - {{cssxref("::before")}}
    - {{cssxref("::marker")}}

### Rückgabewert

Eine `CSSPseudoElement`-Objektinstanz oder `null`, wenn `type` nicht einem gültigen Pseudo-Element-Typ entspricht.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel demonstrieren wir die grundlegende Verwendung der `pseudo()`-Methode.

#### HTML

Wir fügen ein {{htmlelement("p")}}-Element mit Text und ein {{htmlelement("output")}}-Element ein, um Ausgaben von JavaScript zu protokollieren.

```html live-sample___basic
<p>New York's hottest club is...</p>
<output></output>
```

#### CSS

Wir geben dem `<p>`-Element's {{cssxref("::after")}} Pseudo-Element etwas {{cssxref("content")}} und wenden einige grundlegende Stile auf beide an.

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

In unserem Skript holen wir Referenzen zu unseren `<p>` und `<output>`-Elementen und rufen ein `CSSPseudoElement` auf, das das `<p>`-Element's `::after` Pseudo-Element über die `pseudo()`-Methode darstellt. Wir protokollieren dann einige Details des Pseudo-Elements in unser `<output>`-Element. Wir fügen auch eine grundlegende Fehlerbehandlung über eine [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Struktur hinzu, um eine Fehlermeldung in nicht unterstützenden Browsern auszugeben.

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
