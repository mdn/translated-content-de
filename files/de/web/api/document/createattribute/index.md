---
title: "Dokumentation: createAttribute() Methode"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{ ApiRef("DOM") }}

Die **`createAttribute()`** Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces erstellt einen neuen Attributknoten.

Das erstellte Objekt ist ein Knoten, der das [`Attr`](/de/docs/Web/API/Attr)-Interface implementiert. Das DOM erzwingt nicht, welche Art von Attributen auf diese Weise zu einem bestimmten Element hinzugefügt werden können.

> [!NOTE]
> Der im Parameter angegebene String wird in Kleinbuchstaben umgewandelt.

## Syntax

```js-nolint
createAttribute(localName)
```

### Parameter

- `localName`
  - : Ein String, der den Namen des Attributs enthält.
    Der Wert wird verwendet, um die [`localName`](/de/docs/Web/API/Attr/localName)-Eigenschaft des neuen Attributs zu initialisieren.

### Rückgabewert

Ein [`Attr`](/de/docs/Web/API/Attr)-Knoten.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`localName`](#localName) kein gültiger Attributname ist.
    Es muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` enthalten (jeweils U+0000, U+002F, U+003D oder U+003E).

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und verlangten, dass der `localName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) sein muss.

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
