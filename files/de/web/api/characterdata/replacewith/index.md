---
title: "CharacterData: Methode replaceWith()"
short-title: replaceWith()
slug: Web/API/CharacterData/replaceWith
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`replaceWith()`** der Schnittstelle [`CharacterData`](/de/docs/Web/API/CharacterData) ersetzt dieses `CharacterData`-Objekt in der Liste der Kindelemente seines Elternknotens durch eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

## Syntax

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

```html
<p id="myText">Some text</p>
```

```js
const text = document.getElementById("myText").firstChild;
const em = document.createElement("em");
em.textContent = "Italic text";

text.replaceWith(em); // Replace `Some text` by `Italic text`
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
- [`DocumentType.replaceWith()`](/de/docs/Web/API/DocumentType/replaceWith)
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
