---
title: "Element: after()-Methode"
short-title: after()
slug: Web/API/Element/after
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`after()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Liste der Kindknoten des übergeordneten Knotens des `Element` ein, unmittelbar nach dem `Element`. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

## Syntax

```js-nolint
after(param1)
after(param1, param2)
after(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Element einfügen

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

### Text einfügen

```js
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "<div><p></p>Text</div>"
```

### Ein Element und Text einfügen

```js
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);
const span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.before()`](/de/docs/Web/API/Element/before)
- [`Element.append()`](/de/docs/Web/API/Element/append)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`CharacterData.after()`](/de/docs/Web/API/CharacterData/after)
- [`DocumentType.after()`](/de/docs/Web/API/DocumentType/after)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`NodeList`](/de/docs/Web/API/NodeList)
