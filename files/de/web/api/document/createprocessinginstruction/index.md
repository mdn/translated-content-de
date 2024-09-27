---
title: "Dokument: createProcessingInstruction() Methode"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("DOM")}}

Die Methode `createProcessingInstruction()` erzeugt einen neuen [Verarbeitungsanweisungs-Node](/de/docs/Web/API/ProcessingInstruction) und gibt ihn zurück.

Der neue Node wird üblicherweise in ein XML-Dokument eingefügt, um damit etwas zu erreichen, z. B. mit [`node.insertBefore`](/de/docs/Web/API/Node/insertBefore).

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameter

- `piNode`
  - : Der resultierende [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Node.
- `target`
  - : Ein String, der den ersten Teil der Verarbeitungsanweisung enthält (d. h. `<?target … ?>`).
- `data`
  - : Ein String, der alle Informationen enthält, die die Verarbeitungsanweisung nach dem Ziel tragen soll. Die Daten sind frei wählbar, dürfen jedoch nicht `?>` enthalten, da dadurch die Verarbeitungsanweisung geschlossen wird.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Tritt auf, wenn eines der folgenden zutrifft:

    - Der [`target`](#target)-Wert ist kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name); zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.
    - Die _abschließende Verarbeitungsanweisungssequenz_ (`?>`) ist Teil des [`data`](#data) Wertes.

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
