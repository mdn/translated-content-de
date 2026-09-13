---
title: "Dokument: Methode createProcessingInstruction()"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: b449f4c0a3d1a9cf33ac0c49c685cbf000cc829e
---

{{APIRef("DOM")}}

Die **`createProcessingInstruction()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle erstellt ein neues [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Objekt und gibt es zurück.

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameter

- `target`
  - : Ein String, der den ersten Teil der Verarbeitungsanweisung enthält (d.h. `<?target … ?>`)
- `data`
  - : Ein String, der alle Informationen enthält, die die Verarbeitungsanweisung nach dem Target tragen sollte. Die Daten können jedes Zeichenmuster enthalten, außer dass sie nicht `?>` enthalten dürfen, da dies die Verarbeitungsanweisung schließt.

### Rückgabewert

- Ein [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der folgenden zutrifft:
    - Der [`target`](#target)-Wert ist kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name); zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.
    - Die _abschließende Verarbeitungsanweisungssequenz_ (`?>`) ist als Teil des [`data`](#data)-Wertes enthalten.

## Beschreibung

Die Methode `createProcessingInstruction()` erstellt eine neue Verarbeitungsanweisung. Der neue Knoten wird üblicherweise in ein Dokument eingefügt, um eine Aufgabe damit zu erledigen, mit einer Methode wie [`node.insertBefore`](/de/docs/Web/API/Node/insertBefore).

Ursprünglich wurden `ProcessingInstruction`-Knoten nur in XML-Dokumenten unterstützt, nicht in HTML-Dokumenten. In nicht unterstützenden Browsern wird eine Verarbeitungsanweisung als Kommentar interpretiert und im DOM-Baum als [`Comment`](/de/docs/Web/API/Comment)-Objekt dargestellt.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel erstellt eine `<xml-stylesheet>`-Verarbeitungsanweisung und fügt sie oben in ein Beispiel-XML-Dokument ein.

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
