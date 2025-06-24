---
title: "Dokument: createProcessingInstruction() Methode"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

`createProcessingInstruction()` erzeugt ein neues [Verarbeitungsanweisungs](/de/docs/Web/API/ProcessingInstruction)-Knoten und gibt es zurück.

Der neue Knoten wird normalerweise in ein XML-Dokument eingefügt, um damit etwas zu erreichen, wie zum Beispiel mit [`node.insertBefore`](/de/docs/Web/API/Node/insertBefore).

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameter

- `piNode`
  - : Der resultierende [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten.
- `target`
  - : Ein String, der den ersten Teil der Verarbeitungsanweisung enthält (d.h. `<?target … ?>`)
- `data`
  - : Ein String, der alle Informationen enthält, die die Verarbeitungsanweisung transportieren soll, nach dem Ziel. Die Daten liegen bei Ihnen, aber sie können nicht `?>` enthalten, da das die Verarbeitungsanweisung schließt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der folgenden zutrifft:
    - Der [`target`](#target)-Wert ist kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name); beispielsweise beginnt er mit einer Zahl, einem Bindestrich oder Punkt oder enthält andere Zeichen als alphanumerische Zeichen, Unterstriche, Bindestriche oder Punkte.
    - Die _abschließende Verarbeitungsanweisungssequenz_ (`?>`) ist Teil des [`data`](#data)-Wertes.

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
