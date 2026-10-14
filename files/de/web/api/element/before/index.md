---
title: "Element: before()-Methode"
short-title: before()
slug: Web/API/Element/before
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`before()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Liste der Kindknoten des Elternelements dieses `Element` ein, unmittelbar vor diesem `Element`. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

## Syntax

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Element einfügen

```js
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);
const span = document.createElement("span");

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### Text einfügen

```js
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);

p.before("Text");

console.log(container.outerHTML);
// "<div>Text<p></p></div>"
```

### Ein Element und Text einfügen

```js
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);
const span = document.createElement("span");

p.before(span, "Text");

console.log(container.outerHTML);
// "<div><span></span>Text<p></p></div>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.after()`](/de/docs/Web/API/Element/after)
- [`Element.append()`](/de/docs/Web/API/Element/append)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`CharacterData.before()`](/de/docs/Web/API/CharacterData/before)
- [`DocumentType.before()`](/de/docs/Web/API/DocumentType/before)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
- [`NodeList`](/de/docs/Web/API/NodeList)
