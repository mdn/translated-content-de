---
title: "CharacterData: replaceWith()-Methode"
short-title: replaceWith()
slug: Web/API/CharacterData/replaceWith
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`replaceWith()`**-Methode des [`CharacterData`](/de/docs/Web/API/CharacterData)-Interfaces ersetzt diesen Knoten in der Kinderliste seines Elternteils mit einer Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen.

Zeichenfolgen werden als [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt; die Zeichenfolge wird als Argument an den [`Text()`](/de/docs/Web/API/Text/Text)-Konstruktor übergeben.

## Syntax

```js-nolint
replaceWith(...nodes)
```

### Parameter

- `nodes` {{optional_inline}}
  - : Eine durch Kommas getrennte Liste von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die den aktuellen Knoten ersetzen werden.

> [!NOTE]
> Wenn keine Argumente übergeben werden, entfernt diese Methode den Knoten aus dem DOM-Baum.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

```html
<p id="myText">Some text</p>
```

```js
let text = document.getElementById("myText").firstChild;
let em = document.createElement("em");
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
