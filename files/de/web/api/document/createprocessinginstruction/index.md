---
title: "Document: createProcessingInstruction()-Methode"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("DOM")}}

`createProcessingInstruction()` erzeugt einen neuen [Verarbeitungsanweisungs-](/de/docs/Web/API/ProcessingInstruction) Knoten und gibt ihn zurück.

Der neue Knoten wird normalerweise in ein XML-Dokument eingefügt, um damit etwas zu erreichen, wie beispielsweise mit [`node.insertBefore`](/de/docs/Web/API/Node/insertBefore).

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameter

- `piNode`
  - : Der resultierende [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten.
- `target`
  - : Ein String, der den ersten Teil der Verarbeitungsanweisung enthält (z.B. `<?target … ?>`).
- `data`
  - : Ein String, der alle Informationen enthält, die die Verarbeitungsanweisung nach dem Ziel tragen soll. Die Daten können Sie frei definieren, aber sie dürfen nicht `?>` enthalten, da dies die Verarbeitungsanweisung abschließt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn eines der folgenden zutrifft:

    - Der Wert von [`target`](#target) ist kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name); zum Beispiel beginnt er mit einer Zahl, einem Bindestrich oder einem Punkt oder enthält Zeichen, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.
    - Die _schließende Verarbeitungsanweisungssequenz_ (`?>`) ist Teil des [`data`](#data) Werts.

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
