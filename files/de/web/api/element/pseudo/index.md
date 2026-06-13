---
title: "Element: pseudo() Methode"
short-title: pseudo()
slug: Web/API/Element/pseudo
l10n:
  sourceCommit: b0db98a5c5a6cc7dbc519c272ab0572f6481afc6
---

{{SeeCompatTable}}

{{APIRef("DOM")}}.

Die **`pseudo()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle gibt ein [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Objekt zurück, das das [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) des angegebenen Typs darstellt, das dem Element zugeordnet ist.

Sofern der `type`-Parameter einen gültigen Pseudo-Element-Typ enthält, gibt `pseudo()` immer eine `CSSPseudoElement` Instanz zurück, selbst wenn dieses Pseudo-Element nicht am aufrufenden Element generiert wurde.

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

Ein [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Objekt, oder `null`, wenn `type` nicht gleich einem gültigen Pseudo-Element-Typ ist.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel demonstrieren wir die grundlegende Verwendung der `pseudo()` Methode.

#### HTML

Wir fügen ein {{htmlelement("p")}} Element mit Text und ein {{htmlelement("output")}} Element zum Protokollieren von Ausgaben aus JavaScript ein.

```html live-sample___basic
<p>New York's hottest club is...</p>
<output></output>
```

#### CSS

Wir geben dem `<p>` Element's {{cssxref("::after")}} Pseudo-Element etwas {{cssxref("content")}} und wenden einige grundlegende Stile auf beide an.

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

In unserem Skript holen wir uns Referenzen zu unseren `<p>` und `<output>` Elementen und erhalten ein `CSSPseudoElement`, das das `::after` Pseudo-Element des `<p>` Elements über die `pseudo()` Methode darstellt. Wir protokollieren dann einige Details des Pseudo-Elements in unser `<output>` Element. Wir beinhalten auch eine rudimentäre Fehlerbehandlung durch eine [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Struktur, um eine Fehlermeldung in nicht unterstützenden Browsern auszugeben.

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
