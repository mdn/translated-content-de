---
title: "CharacterData: Methode replaceWith()"
short-title: replaceWith()
slug: Web/API/CharacterData/replaceWith
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`replaceWith()`** Methode der {{domxref("CharacterData")}} Schnittstelle
ersetzt diesen Knoten in der Kindliste seines übergeordneten Elements
durch eine Gruppe von {{domxref("Node")}} Objekten oder Zeichenfolgen.

Zeichenfolgen werden als {{domxref("Text")}} Knoten eingefügt; die Zeichenfolge wird als Argument an den {{domxref("Text/Text", "Text()")}} Konstruktor übergeben.

## Syntax

```js-nolint
replaceWith(...nodes)
```

### Parameter

- `nodes` {{optional_inline}}
  - : Eine durch Kommas getrennte Liste von {{domxref("Node")}} Objekten oder Zeichenfolgen, die den aktuellen Knoten ersetzen werden.

> [!NOTE]
> Wenn keine Argumente übergeben werden, entfernt diese Methode den Knoten aus dem DOM-Baum.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

```html
<p id="myText">Some text</p>
```

```js
let text = document.getElementById("myText").firstChild;
let em = document.createElement("em");
em.textContent = "Italic text";

text.replaceWith(em); // Ersetzt `Some text` durch `Italic text`
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CharacterData.replaceData()")}}
- {{domxref("DocumentType.replaceWith()")}}
- {{domxref("Element.replaceWith()")}}
