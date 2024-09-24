---
title: "Document: Methode createProcessingInstruction()"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("DOM")}}

`createProcessingInstruction()` erzeugt ein neues [Verarbeitungshinweis](/de/docs/Web/API/ProcessingInstruction)-Knoten und gibt diesen zurück.

Der neue Knoten wird normalerweise in ein XML-Dokument eingefügt, um etwas damit zu erreichen, beispielsweise mit {{ domxref("node.insertBefore") }}.

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameter

- `piNode`
  - : Der resultierende {{ domxref("ProcessingInstruction") }}-Knoten.
- `target`
  - : Ein String, der den ersten Teil des Verarbeitungshinweises enthält (d.h. `<?target … ?>`)
- `data`
  - : Ein String, der jegliche Informationen enthält, die der Verarbeitungshinweis tragen soll, nach dem Ziel. Die Daten sind Ihnen überlassen, sie dürfen jedoch nicht `?>` enthalten, da dies den Verarbeitungshinweis schließt.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn eines der folgenden zutrifft:

    - Der Wert von [`target`](#target) ist kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name); beispielsweise beginnt er mit einer Zahl, einem Bindestrich oder einem Punkt oder enthält andere Zeichen als alphanumerische Zeichen, Unterstriche, Bindestriche oder Punkte.
    - Die _abschließende Verarbeitungshinweis-Sequenz_ (`?>`) ist Teil des [`data`](#data)-Werts.

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
