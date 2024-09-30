---
title: "ProcessingInstruction: target Eigenschaft"
short-title: target
slug: Web/API/ProcessingInstruction/target
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("DOM")}}

Die schreibgeschützte **`target`**-Eigenschaft der [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Schnittstelle repräsentiert die Anwendung, auf die die `ProcessingInstruction` abzielt.

Zum Beispiel:

```html
<?xml version="1.0"?>
```

ist eine Verarbeitungsvorschrift, deren `target` `xml` ist.

## Wert

Ein String, der den Namen der Anwendung enthält.

## Beispiel

### In einem XML-Dokument

```html hidden
<output></output>
```

```js
let parser = new DOMParser();
const doc = parser.parseFromString(
  '<?xml version="1.0"?><test/>',
  "application/xml",
);
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css" type="text/css"',
);
doc.insertBefore(pi, doc.firstChild);

const output = document.querySelector("output");
output.textContent = `This processing instruction's target is: ${doc.firstChild.target}`;
```

{{EmbedLiveSample("In einem XML-Dokument", "100%", 50)}}

### In einem HTML-Dokument

Die Verarbeitungsvorschriftzeile wird als [`Comment`](/de/docs/Web/API/Comment)-Objekt betrachtet und dargestellt.

```html
<?xml version="1.0"?>
<pre></pre>
```

```js
const node = document.querySelector("pre").previousSibling.previousSibling;
const result = `Node with the processing instruction: ${node.nodeName}: ${node.nodeValue}\n`;
document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("In einem HTML-Dokument", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [DOM API](/de/docs/Web/API/Document_Object_Model)
