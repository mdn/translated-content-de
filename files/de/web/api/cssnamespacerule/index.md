---
title: CSSNamespaceRule
slug: Web/API/CSSNamespaceRule
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSSOM")}}

Das **`CSSNamespaceRule`** Interface beschreibt ein Objekt, das eine einzelne CSS {{ cssxref("@namespace") }} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) repräsentiert.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSNamespaceRule.namespaceURI`](/de/docs/Web/API/CSSNamespaceRule/namespaceURI)
  - : Gibt einen String zurück, der den Text der URI des angegebenen Namespace enthält.
- [`CSSNamespaceRule.prefix`](/de/docs/Web/API/CSSNamespaceRule/prefix)
  - : Gibt einen String mit dem Namen des Präfixes zurück, das diesem Namespace zugeordnet ist. Wenn es kein solches Präfix gibt, wird ein leerer String zurückgegeben.

## Instanzmethoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das Stylesheet enthält einen Namespace als die einzige Regel. Daher wird die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) ein `CSSNamespaceRule` sein.

```css
@namespace url("http://www.w3.org/1999/xhtml");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // A CSSNamespaceRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
