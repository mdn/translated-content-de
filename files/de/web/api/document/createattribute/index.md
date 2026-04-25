---
title: "Dokument: createAttribute()-Methode"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{ ApiRef("DOM") }}

Die **`createAttribute()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle erstellt einen neuen Attribut-Knoten.

Das erstellte Objekt ist ein Knoten, der die [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle implementiert. Das DOM erzwingt nicht, welche Art von Attributen auf diese Weise zu einem bestimmten Element hinzugefügt werden können.

> [!NOTE]
> Die im Parameter angegebene Zeichenfolge wird in Kleinbuchstaben umgewandelt.

## Syntax

```js-nolint
createAttribute(localName)
```

### Parameter

- `localName`
  - : Eine Zeichenkette, die den Namen des Attributs enthält. Der Wert wird verwendet, um die [`localName`](/de/docs/Web/API/Attr/localName)-Eigenschaft des neuen Attributs zu initialisieren.

### Rückgabewert

Ein [`Attr`](/de/docs/Web/API/Attr)-Knoten.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`localName`](#localname)-Wert kein gültiger Attributname ist. Er muss mindestens ein Zeichen haben und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` (U+0000, U+002F, U+003D, oder U+003E, jeweils) enthalten.

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und erforderten, dass der `localName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

## Beispiele

### Einfaches Beispiel

```js
const node = document.getElementById("div1");
const a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
