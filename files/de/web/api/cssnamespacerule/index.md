---
title: CSSNamespaceRule
slug: Web/API/CSSNamespaceRule
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

Die **`CSSNamespaceRule`**-Schnittstelle beschreibt ein Objekt, das eine einzelne CSS-{{ cssxref("@namespace") }}-[at-rule](/de/docs/Web/CSS/At-rule) darstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSNamespaceRule.namespaceURI`](/de/docs/Web/API/CSSNamespaceRule/namespaceURI)
  - : Gibt einen String zurück, der den Text der URI des angegebenen Namespace enthält.
- [`CSSNamespaceRule.prefix`](/de/docs/Web/API/CSSNamespaceRule/prefix)
  - : Gibt einen String mit dem Namen des Präfixes zurück, das mit diesem Namespace verknüpft ist. Wenn es kein solches Präfix gibt, wird ein leerer String zurückgegeben.

## Instanzmethoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das Stylesheet enthält einen Namespace als einzige Regel. Daher wird die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) eine `CSSNamespaceRule` sein.

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
