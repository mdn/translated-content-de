---
title: "HTMLTemplateElement: content-Eigenschaft"
short-title: content
slug: Web/API/HTMLTemplateElement/content
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("Web Components")}}

Die **`content`**-Eigenschaft des [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interfaces gibt den Inhalt des `<template>`-Elements als ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück. Das [`ownerDocument`](/de/docs/Web/API/Node/ownerDocument) dieses Inhalts ist ein separates [`Document`](/de/docs/Web/API/Document) von demjenigen, das das `<template>`-Element selbst enthält — es sei denn, das enthaltende Dokument wurde eigens für den Zweck erstellt, Template-Inhalte zu halten.

Die Methoden [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) und [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellen beide eine Kopie eines Knotens. Der Unterschied ist, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des zu klonenden Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Konstruktion von benutzerdefinierten Elementen. Aus diesem Grund sollte `document.importNode()` verwendet werden, um das `content`-Fragment zu klonen, damit benutzerdefinierte Element-Nachkommen mithilfe der Definitionen im aktuellen Dokument und nicht dem separaten Dokument, das den Template-Inhalt besitzt, konstruiert werden. Weitere Details finden Sie in den Beispielen auf der Seite zu [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode).

## Wert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

## Beispiele

### Verwendung von importNode() mit Template-Inhalten

```js
const templateElement = document.querySelector("#foo");
const documentFragment = document.importNode(templateElement.content, true);
// Now you can insert the documentFragment into the DOM
```

### Das ownerDocument von Template-Inhalten

Für `<template>`-Elemente, die im Kontext eines normalen HTML-Dokuments erstellt werden, ist das `ownerDocument` des `content` ein separates, neu erstelltes Dokument:

```js
const template = document.createElement("template");
console.log(template.content.ownerDocument === document); // false
console.log(template.content.ownerDocument.URL); // "about:blank"
```

Wenn das `<template>`-Element im Kontext eines Dokuments erstellt wird, das selbst für den Zweck des Haltens von Template-Inhalten erstellt wurde, dann ist das `ownerDocument` des `content` dasselbe wie das des enthaltenden Dokuments:

```js
const template1 = document.createElement("template");
const docForTemplate = template1.content.ownerDocument;
const template2 = docForTemplate.createElement("template");
console.log(template2.content.ownerDocument === docForTemplate); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)
