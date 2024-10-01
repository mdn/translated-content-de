---
title: "console: dir() statische Methode"
short-title: dir()
slug: Web/API/console/dir_static
l10n:
  sourceCommit: c607327eeabe92adedfb45e37e35d24f320d3e88
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.dir()`** zeigt eine Liste der Eigenschaften des angegebenen JavaScript-Objekts an. In Browser-Konsolen wird die Ausgabe als hierarchische Liste mit Aufklappdreiecken präsentiert, die es Ihnen ermöglichen, die Inhalte von Kindobjekten zu sehen.

Im Gegensatz zu anderen Protokollierungsmethoden versucht `console.dir()` nicht, das Objekt schön darzustellen. Wenn Sie zum Beispiel ein DOM-Element an `console.dir()` übergeben, wird es nicht wie im Elementinspektor angezeigt, sondern es wird stattdessen eine Liste von Eigenschaften angezeigt.

![Ein Screenshot der Firefox-Konsole, in dem console.dir(document.location) ausgeführt wird. Wir können die URL der Seite sehen, gefolgt von einem Block von Eigenschaften. Wenn die Eigenschaft eine Funktion oder ein Objekt ist, wird ein Aufklappdreieck vorangestellt.](console-dir.png)

In Laufzeitumgebungen wie {{Glossary("Node.js", "Node")}} und {{Glossary("Deno", "Deno")}}, wo Konsolenausgaben an das Terminal gehen und daher nicht interaktiv sind, bietet der `options`-Parameter eine Möglichkeit, die Darstellung des Objekts anzupassen.

## Syntax

```js-nolint
dir(object)
dir(object, options)
```

### Parameter

- `object`
  - : Ein JavaScript-Objekt, dessen Eigenschaften ausgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften, alle optional:
    - `colors` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: Wenn `true`, werden die Eigenschaften des Objekts entsprechend ihrem Typ formatiert. Standard ist `true`.
    - `depth` {{non-standard_inline}} {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Verschachtelungsebenen angibt, die gedruckt werden sollen, wenn ein Objekt andere Objekte oder Arrays enthält. Der Wert `null` bedeutet: alle Ebenen drucken. Standard ist 2.
    - `showHidden` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: Wenn `true`, werden nicht aufzählbare und Symbol-Eigenschaften des Objekts gedruckt. Standard ist `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation zu `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Node.JS-Dokumentation zu `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Google Chrome-Dokumentation zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
