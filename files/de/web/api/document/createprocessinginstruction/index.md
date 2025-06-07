---
title: "Dokumentation: Methoden createProcessingInstruction()"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}

`createProcessingInstruction()` generiert einen neuen [Verarbeitungsanweisungs-](/de/docs/Web/API/ProcessingInstruction) Knoten und gibt ihn zurück.

Der neue Knoten wird normalerweise in ein XML-Dokument eingefügt, um damit etwas zu erreichen, beispielsweise mit [`node.insertBefore`](/de/docs/Web/API/Node/insertBefore).

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameter

- `piNode`
  - : Der resultierende [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten.
- `target`
  - : Ein String, der den ersten Teil der Verarbeitungsanweisung enthält (d.h. `<?target … ?>`).
- `data`
  - : Ein String, der alle Informationen enthält, die die Verarbeitungsanweisung nach dem Ziel tragen soll. Die Daten sind Ihnen überlassen, aber sie dürfen nicht `?>` enthalten, da dies die Verarbeitungsanweisung schließt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn eine der folgenden Bedingungen zutrifft:

    - Der [`target`](#target) Wert ist kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name); zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt, oder Zeichen enthält, die nicht alphanumerisch, Unterstriche, Bindestriche oder Punkte sind.
    - Die _schließende Verarbeitungsanweisungssequenz_ (`?>`) ist Teil des [`data`](#data) Wertes.

## Beispiele

```js
const doc = new DOMParser().parseFromString("<foo />", "application/xml");
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css"',
);

doc.insertBefore(pi, doc.firstChild);

console.log(new XMLSerializer().serializeToString(doc));
// Displays: <?xml-stylesheet href="mycss.css" type="text/css"?><foo/>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
