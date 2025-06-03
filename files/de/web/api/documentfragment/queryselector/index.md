---
title: "DocumentFragment: querySelector() Methode"
short-title: querySelector()
slug: Web/API/DocumentFragment/querySelector
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ApiRef("DOM")}}

Die **`DocumentFragment.querySelector()`**-Methode gibt das erste Element zurück oder `null`, wenn keine Übereinstimmungen gefunden werden, innerhalb des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) (unter Verwendung der Tiefenpriorität im Vorabreiterdurchlauf der Knotensequenz des Dokuments), das der angegebenen Gruppe von Selektoren entspricht.

Falls der Selektor einer ID entspricht und diese ID fälschlicherweise mehrmals im Dokument verwendet wird, wird das erste übereinstimmende Element zurückgegeben.

Falls die im Parameter angegebenen Selektoren ungültig sind, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR`-Wert ausgelöst.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`
  - : Ein Zeichenfolgenwert, der einen oder mehrere durch Kommas getrennte CSS-Selektoren enthält.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das erste Element im Dokument darstellt, das der angegebenen Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) entspricht, oder es wird `null` zurückgegeben, wenn keine Übereinstimmungen vorhanden sind.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel wird das erste Element im [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit der Klasse `myclass` zurückgegeben:

```js
const el = documentfragment.querySelector(".myclass");
```

### CSS-Syntax und das Argument der Methode

Das an `querySelector` übergebene Zeichenkettenargument muss der CSS-Syntax entsprechen. Um IDs oder Selektoren abzugleichen, die nicht der CSS-Syntax entsprechen (zum Beispiel durch unangemessene Verwendung von Semikolon oder Leerzeichen), ist es zwingend erforderlich, das falsche Zeichen mit einem doppelten Rückstrich zu maskieren:

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>
```

```js
document.querySelector("#foo\bar"); // Does not match anything
document.querySelector("#foo\\\\bar"); // Match the first div
document.querySelector("#foo:bar"); // Does not match anything
document.querySelector("#foo\\:bar"); // Match the second div
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Interface, zu dem es gehört.
