---
title: "MathMLAnchorElement: Eigenschaft relList"
short-title: relList
slug: Web/API/MathMLAnchorElement/relList
l10n:
  sourceCommit: 85577061e99da7082b48263fa19f9b1ef4187eda
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`relList`** der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) gibt ein aktives [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück. Es enthält die Linktypen, die die Beziehung zwischen der durch den Link repräsentierten Ressource und dem aktuellen Dokument angeben.

## Wert

Ein aktives [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Die Eigenschaft `relList` ist insofern schreibgeschützt, als Sie das `DOMTokenList`-Objekt nicht ersetzen können. Sie können `relList` jedoch direkt einen Wert zuweisen. Dies entspricht einer Zuweisung an die Eigenschaft [`value`](/de/docs/Web/API/DOMTokenList/value) des Objekts. Außerdem können Sie das `DOMTokenList`-Objekt mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" rel="help alternate">...</a>
</math>
```

Mit der Eigenschaft `relList` können Sie wie folgt auf die einzelnen Werte von [`rel`](/de/docs/Web/API/MathMLAnchorElement/rel) zugreifen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.relList[0]; // "help"
mathAnchor.relList[1]; // "alternate"
```

Sie können die enthaltenen Werte auch mithilfe der Funktionen von `DOMTokenList` ändern:

```js
mathAnchor.relList.value = "author bookmark";
mathAnchor.relList.add("me");
```

Da `DOMTokenList` aktiv ist, gibt `mathAnchor.rel` nun den Wert `author bookmark me` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
- [`MathMLAnchorElement.rel`](/de/docs/Web/API/MathMLAnchorElement/rel)
- [Das HTML-Attribut `rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
