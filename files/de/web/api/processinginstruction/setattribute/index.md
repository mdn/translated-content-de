---
title: "ProcessingInstruction: setAttribute() Methode"
short-title: setAttribute()
slug: Web/API/ProcessingInstruction/setAttribute
l10n:
  sourceCommit: b449f4c0a3d1a9cf33ac0c49c685cbf000cc829e
---

{{APIRef("DOM")}}

Die **`setAttribute()`**-Methode des [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Interfaces setzt den Wert eines Attributs auf der Verarbeitungsanweisung.
Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

## Syntax

```js-nolint
setAttribute(qualifiedName, value)
```

### Parameter

- `qualifiedName`
  - : Ein String, der den qualifizierten Namen des Attributs enthält, dessen Wert festgelegt werden soll.

    Das Format des qualifizierten Namens ist `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein "kurzer Alias" für den Namespace, wie er von der [`Attr.prefix`](/de/docs/Web/API/Attr/prefix) Eigenschaft zurückgegeben wird.
    - `localName`
      - : Der lokale Name des Attributs, wie er von der [`Attr.localName`](/de/docs/Web/API/Attr/localName) Eigenschaft zurückgegeben wird.

- `value`
  - : Ein String, der den Wert enthält, der dem Attribut zugewiesen werden soll.

    Angegebene Nicht-String-Werte werden automatisch in Strings konvertiert.

    Für boolesche Attribute sollten Sie konventionell `value` auf den leeren String (`""`) oder den Namen des Attributs setzen, ohne führende oder nachfolgende Leerzeichen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder das [`prefix`](#prefix) oder [`localName`](#localname) ungültig ist:
    - Der `prefix` muss mindestens ein Zeichen enthalten und darf kein ASCII-Leerzeichen, `NULL`, `/`, oder `>` (U+0000, U+002F, oder U+003E, jeweils) enthalten.
    - Der `localName` muss mindestens ein Zeichen lang sein und darf kein ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` (U+0000, U+002F, U+003D, oder U+003E, jeweils) enthalten.

## Beschreibung

**`setAttribute()`** setzt den Wert eines Attributs auf der angegebenen Verarbeitungsanweisung.
Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den Wert eines booleschen Attributs, wie `disabled`, festzulegen, können Sie einen beliebigen Wert angeben.
Es spielt keine Rolle, welchen Wert Sie verwenden; wenn das Attribut vorhanden ist, wird sein Wert als `true` angesehen.
Konventionell aktivieren wir boolesche Attribute, indem wir ihren Wert entweder auf den Namen des Attributs oder den leeren String (`""`) setzen.
Das Fehlen eines booleschen Attributs bedeutet, dass sein Wert `false` ist; Sie müssen [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) aufrufen, um die Wirkung des Aktivierens eines booleschen Attributs "rückgängig zu machen".

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) auf.

## Beispiele

### Grundlegende Nutzung

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

pi.setAttribute("name", "new text");
console.log(pi);
// logs:
// <?start name="new text"?>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute)
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes)
- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute)
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames)
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute)
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute)
