---
title: "MathMLAnchorElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/MathMLAnchorElement/relList
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`relList`** der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück. Es enthält die Linktypen, die die Beziehung zwischen der durch den Link repräsentierten Ressource und dem aktuellen Dokument angeben.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Die Eigenschaft `relList` ist insofern schreibgeschützt, als Sie das `DOMTokenList`-Objekt nicht ersetzen können. Sie können `relList` jedoch direkt einen Wert zuweisen. Dies entspricht einer Zuweisung an die Eigenschaft [`value`](/de/docs/Web/API/DOMTokenList/value) des Objekts. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" rel="help alternate">...</a>
</math>
```

Mit der Eigenschaft `relList` können Sie wie folgt auf die einzelnen [`rel`](/de/docs/Web/API/MathMLAnchorElement/rel)-Werte zugreifen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.relList[0]; // "help"
mathAnchor.relList[1]; // "alternate"
```

Sie können die enthaltenen Werte auch mithilfe von `DOMTokenList`-Methoden ändern:

```js
mathAnchor.relList.value = "author bookmark";
mathAnchor.relList.add("me");
```

Da die `DOMTokenList` dynamisch ist, gibt `mathAnchor.rel` nun den Wert `author bookmark me` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
- [`MathMLAnchorElement.rel`](/de/docs/Web/API/MathMLAnchorElement/rel)
- Das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
