---
title: CSSNamespaceRule
slug: Web/API/CSSNamespaceRule
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Die **`CSSNamespaceRule`**-Schnittstelle beschreibt ein Objekt, das eine einzelne CSS {{ cssxref("@namespace") }} [At-Rule](/de/docs/Web/CSS/CSS_syntax/At-rule) darstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSNamespaceRule.namespaceURI`](/de/docs/Web/API/CSSNamespaceRule/namespaceURI)
  - : Gibt einen String zurück, der den Text der URI des gegebenen Namensraums enthält.
- [`CSSNamespaceRule.prefix`](/de/docs/Web/API/CSSNamespaceRule/prefix)
  - : Gibt einen String mit dem Namen des Präfixes zurück, das mit diesem Namensraum assoziiert ist. Wenn es kein solches Präfix gibt, wird ein leerer String zurückgegeben.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das Stylesheet enthält ein Namespace als einzige Regel. Daher wird die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) eine `CSSNamespaceRule` sein.

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // A CSSNamespaceRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
