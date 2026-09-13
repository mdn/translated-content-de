---
title: "ProcessingInstruction: setAttribute() Methode"
short-title: setAttribute()
slug: Web/API/ProcessingInstruction/setAttribute
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`setAttribute()`** Methode der [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Schnittstelle setzt den Wert eines Attributs in der Verarbeitungsanweisung.
Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

## Syntax

```js-nolint
setAttribute(qualifiedName, value)
```

### Parameter

- `qualifiedName`
  - : Ein String, der den qualifizierten Namen des Attributs enthält, dessen Wert gesetzt werden soll.

    Das Format des qualifizierten Namens ist `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein "kurzes Alias" für den Namensraum, wie es von der [`Attr.prefix`](/de/docs/Web/API/Attr/prefix) Eigenschaft zurückgegeben wird.
    - `localName`
      - : Der lokale Name des Attributs, wie es von der [`Attr.localName`](/de/docs/Web/API/Attr/localName) Eigenschaft zurückgegeben wird.

- `value`
  - : Ein String, der den Wert enthält, der dem Attribut zugewiesen werden soll.

    Angegebene Nicht-String-Werte werden automatisch in Strings konvertiert.

    Für boolesche Attribute sollten Sie den `value` konventionell auf den leeren String (`""`) oder den Namen des Attributs setzen, ohne führende oder nachfolgende Leerzeichen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder das [`prefix`](#prefix) oder [`localName`](#localname) nicht gültig ist:
    - Das `prefix` muss mindestens ein Zeichen haben und darf keine ASCII-Leerzeichen, `NULL`, `/`, oder `>` (U+0000, U+002F, oder U+003E, jeweils) enthalten.
    - Das `localName` muss mindestens ein Zeichen haben und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` (U+0000, U+002F, U+003D, oder U+003E, jeweils) enthalten.

## Beschreibung

**`setAttribute()`** setzt den Wert eines Attributs in der angegebenen Verarbeitungsanweisung.
Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den Wert eines booleschen Attributs, wie `disabled`, zu setzen, können Sie einen beliebigen Wert angeben.
Es spielt keine Rolle, welchen Wert Sie verwenden; wenn das Attribut vorhanden ist, wird sein Wert als `true` betrachtet.
Nach Konvention aktivieren wir boolesche Attribute, indem wir ihren Wert entweder auf den Namen des Attributs oder den leeren String (`""`) setzen.
Das Fehlen eines booleschen Attributs bedeutet, dass sein Wert `false` ist; Sie müssen [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) aufrufen, um die Wirkung der Aktivierung eines booleschen Attributs "rückgängig zu machen".

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) auf.

## Beispiele

### Grundlegende Verwendung

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
