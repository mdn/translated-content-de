---
title: CSSNamespaceRule
slug: Web/API/CSSNamespaceRule
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

Die **`CSSNamespaceRule`**-Schnittstelle beschreibt ein Objekt, das eine einzelne CSS {{ cssxref("@namespace") }} [At-Regel](/de/docs/Web/CSS/At-rule) darstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren {{domxref("CSSRule")}}._

- {{domxref("CSSNamespaceRule.namespaceURI")}}
  - : Gibt einen String zurück, der den Text der URI des gegebenen Namensraums enthält.
- {{domxref("CSSNamespaceRule.prefix")}}
  - : Gibt einen String mit dem Namen des Präfixes zurück, das diesem Namensraum zugeordnet ist. Wenn es kein solches Präfix gibt, wird ein leerer String zurückgegeben.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren {{domxref("CSSRule")}}._

## Beispiele

Das Stylesheet enthält einen Namensraum als einzige Regel. Daher wird die erste {{domxref("CSSRule")}}, die zurückgegeben wird, eine `CSSNamespaceRule` sein.

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); //a CSSNamespaceRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
