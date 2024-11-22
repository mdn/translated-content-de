---
title: "console: dir() statische Methode"
short-title: dir()
slug: Web/API/console/dir_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.dir()`** statische Methode zeigt eine Liste der Eigenschaften des angegebenen JavaScript-Objekts an. In Browserkonsolen wird die Ausgabe als hierarchische Liste mit aufklappbaren Dreiecken präsentiert, die es Ihnen ermöglichen, die Inhalte von Kindobjekten zu sehen.

Im Gegensatz zu anderen Logging-Methoden versucht `console.dir()` nicht, das Objekt hübsch zu formatieren. Wenn Sie beispielsweise ein DOM-Element an `console.dir()` übergeben, wird es nicht wie im Elementinspektor angezeigt, sondern es wird eine Liste von Eigenschaften angezeigt.

![Ein Screenshot der Firefox-Konsole, in der console.dir(document.location) ausgeführt wird. Wir sehen die URL der Seite, gefolgt von einem Block mit Eigenschaften. Wenn die Eigenschaft eine Funktion oder ein Objekt ist, wird ein aufklappbares Dreieck vorangestellt.](console-dir.png)

In Laufzeiten wie {{Glossary("Node.js", "Node")}} und {{Glossary("Deno", "Deno")}}, bei denen die Konsolenausgabe auf das Terminal geht und daher nicht interaktiv ist, bietet der `options`-Parameter eine Möglichkeit, die Darstellung des Objekts anzupassen.

## Syntax

```js-nolint
console.dir(object)
console.dir(object, options)
```

### Parameter

- `object`
  - : Ein JavaScript-Objekt, dessen Eigenschaften gedruckt werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften, alle optional:
    - `colors` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: wenn `true`, werden die Eigenschaften des Objekts entsprechend ihrem Typ formatiert. Standardwert ist `true`.
    - `depth` {{non-standard_inline}} {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Nested Levels angibt, die gedruckt werden sollen, wenn ein Objekt andere Objekte oder Arrays enthält. Der Wert `null` bedeutet: alle Ebenen drucken. Standardwert ist 2.
    - `showHidden` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: wenn `true`, werden auch nicht aufzählbare und Symbol-Eigenschaften des Objekts gedruckt. Standardwert ist `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Dokumentation von Microsoft Edge zu `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Node.js-Dokumentation zu `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Die Dokumentation von Google Chrome zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
