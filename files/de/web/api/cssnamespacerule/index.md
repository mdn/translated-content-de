---
title: CSSNamespaceRule
slug: Web/API/CSSNamespaceRule
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("CSSOM")}}

Die Schnittstelle **`CSSNamespaceRule`** beschreibt ein Objekt, das eine einzelne CSS-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) vom Typ {{ cssxref("@namespace") }} repräsentiert.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSNamespaceRule.namespaceURI`](/de/docs/Web/API/CSSNamespaceRule/namespaceURI) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den URI des angegebenen Namensraums enthält.
- [`CSSNamespaceRule.prefix`](/de/docs/Web/API/CSSNamespaceRule/prefix) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des Präfixes zurück, das diesem Namensraum zugeordnet ist. Wenn kein solches Präfix vorhanden ist, wird ein leerer String zurückgegeben.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das Stylesheet enthält einen Namensraum als einzige Regel. Daher ist die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) eine `CSSNamespaceRule`.

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
