---
title: "ProcessingInstruction: ProcessingInstruction() Konstruktor"
short-title: ProcessingInstruction()
slug: Web/API/ProcessingInstruction/ProcessingInstruction
l10n:
  sourceCommit: b449f4c0a3d1a9cf33ac0c49c685cbf000cc829e
---

{{APIRef("DOM")}}

Der **`ProcessingInstruction()`** Konstruktor erstellt eine neue Instanz eines [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Objekts.

## Syntax

```js-nolint
new ProcessingInstruction(target, data)
```

### Parameter

- `target`
  - : Ein String, der den Typ des Ereignisses beschreibt.
- `data`
  - : Ein String, der jegliche Informationen enthält, die die Verarbeitungshinweisung nach dem Ziel enthalten soll. Die Daten liegen bei Ihnen, dürfen jedoch nicht `?>` enthalten, da dies die Verarbeitungsanweisung schließt.

### Rückgabewert

Verarbeitungsanweisungen sind, wie der Name schon sagt, Anweisungen darüber, wie das Dokument zu verarbeiten ist. Sie können Stylesheets für XML-Dokumente, Platzhalter für HTML-Dokumente oder andere Verarbeitungsanweisungen enthalten.

Ein neues [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Objekt, wenn es intern vom Browser verwendet wird.

Entwickler können den `ProcessingInstruction()` Konstruktor nicht direkt nutzen, um eine neue `ProcessingInstruction` Instanz zu erstellen, und müssen stattdessen die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) verwenden. Der direkte Versuch, den `ProcessingInstruction()` Konstruktor zu verwenden, führt zu einem "illegal constructor" Fehler.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der folgenden zutrifft:
    - Der [`target`](#target) Wert ist kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name); zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die nicht alphanumerisch, Unterstriche, Bindestriche oder Punkte sind.
    - Die _abschließende Verarbeitungsanweisungssequenz_ (`?>`) ist Teil des [`data`](#data) Wertes.

- {{jsxref("TypeError")}}
  - : Wird mit der Nachricht `"Illegal constructor"` ausgelöst, wenn direkt verwendet.

## Beispiele

```js
const doc = new DOMParser().parseFromString("<foo />", "application/xml");
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css"',
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [document.createProcessingInstruction()](/de/docs/Web/API/Document/createProcessingInstruction)
- Die [DOM API](/de/docs/Web/API/Document_Object_Model)
