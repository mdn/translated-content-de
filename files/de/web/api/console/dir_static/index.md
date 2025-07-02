---
title: "console: dir() statische Methode"
short-title: dir()
slug: Web/API/console/dir_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.dir()`** statische Methode zeigt eine Liste der Eigenschaften des angegebenen JavaScript-Objekts. In Browser-Konsolen wird die Ausgabe als hierarchische Liste mit aufklappbaren Dreiecken präsentiert, die es Ihnen ermöglichen, die Inhalte von Kindobjekten zu sehen.

Im Gegensatz zu anderen Logging-Methoden versucht `console.dir()` nicht, das Objekt lesefreundlich darzustellen. Wenn Sie zum Beispiel ein DOM-Element an `console.dir()` übergeben, wird es nicht wie im Element-Inspektor angezeigt, sondern als Liste von Eigenschaften.

![Ein Screenshot der Firefox-Konsole, in der console.dir(document.location) ausgeführt wird. Wir sehen die URL der Seite, gefolgt von einem Block von Eigenschaften. Wenn die Eigenschaft eine Funktion oder ein Objekt ist, wird ein Aufklappdreieck vorangestellt.](console-dir.png)

In Laufzeitumgebungen wie {{Glossary("Node.js", "Node")}} und {{Glossary("Deno", "Deno")}}, bei denen die Konsolenausgabe an das Terminal gesendet wird und daher nicht interaktiv ist, bietet der `options` Parameter eine Möglichkeit, die Darstellung des Objekts anzupassen.

## Syntax

```js-nolint
console.dir(object)
console.dir(object, options)
```

### Parameter

- `object`
  - : Ein JavaScript-Objekt, dessen Eigenschaften gedruckt werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt mit folgenden Eigenschaften, die alle optional sind:
    - `colors` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: wenn `true`, werden die Eigenschaften des Objekts entsprechend ihrem Typ gestylt. Standardmäßig `true`.
    - `depth` {{non-standard_inline}} {{optional_inline}}
      - : Eine Zahl, die die Anzahl der zu druckenden Verschachtelungsebenen angibt, wenn ein Objekt andere Objekte oder Arrays enthält. Der Wert `null` bedeutet: alle Ebenen drucken. Standardmäßig 2.
    - `showHidden` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: wenn `true`, werden die nicht aufzählbaren und Symbol-Eigenschaften des Objekts gedruckt. Standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#dir)
- [Node.js-Dokumentation für `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Google Chrome-Dokumentation für `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
