---
title: "DocumentFragment: querySelector() Methode"
short-title: querySelector()
slug: Web/API/DocumentFragment/querySelector
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ApiRef("DOM")}}

Die **`DocumentFragment.querySelector()`** Methode gibt das erste Element innerhalb des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das der angegebenen Gruppe von Selektoren entspricht, oder `null`, wenn keine Übereinstimmungen gefunden werden (unter Verwendung einer tiefenorientierten Vorordnungstraversierung der Knoten des Dokuments).

Wenn der Selektor mit einer ID übereinstimmt und diese ID irrtümlicherweise mehrmals im Dokument verwendet wird, gibt sie das erste übereinstimmende Element zurück.

Wenn die im Parameter angegebenen Selektoren ungültig sind, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` Wert ausgelöst.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere durch Kommas getrennte CSS-Selektoren enthält.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element) Objekt, das das erste Element im Dokument darstellt, das mit dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) übereinstimmt, oder `null`, wenn es keine Übereinstimmungen gibt.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel wird das erste Element im [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit der Klasse `myclass` zurückgegeben:

```js
const el = documentfragment.querySelector(".myclass");
```

### CSS-Syntax und das Argument der Methode

Das an `querySelector` übergebene String-Argument muss der CSS-Syntax folgen. Um eine Übereinstimmung mit IDs oder Selektoren zu erzielen, die der CSS-Syntax nicht folgen (beispielsweise durch unangemessene Verwendung von Semikolon oder Leerzeichen), ist es erforderlich, das falsche Zeichen mit einem doppelten Backslash zu maskieren:

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

- Das [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Interface, zu dem es gehört.
