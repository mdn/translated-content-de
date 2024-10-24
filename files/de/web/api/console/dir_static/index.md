---
title: "console: dir() statische Methode"
short-title: dir()
slug: Web/API/console/dir_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.dir()`** zeigt eine Liste der Eigenschaften des angegebenen JavaScript-Objekts an. In Browserkonsolen wird die Ausgabe als hierarchische Liste mit Aufklappdreiecken präsentiert, die es Ihnen ermöglichen, die Inhalte von Kind-Objekten einzusehen.

Anders als andere Protokollierungsmethoden versucht `console.dir()` nicht, das Objekt formatiert darzustellen. Wenn Sie zum Beispiel ein DOM-Element an `console.dir()` übergeben, wird es nicht wie im Element-Inspektor angezeigt, sondern es wird eine Liste der Eigenschaften gezeigt.

![Ein Screenshot der Firefox-Konsole, in der console.dir(document.location) ausgeführt wird. Wir sehen die URL der Seite, gefolgt von einem Block von Eigenschaften. Wenn die Eigenschaft eine Funktion oder ein Objekt ist, wird ein Aufklappdreieck vorangestellt.](console-dir.png)

In Laufzeitumgebungen wie {{Glossary("Node.js", "Node")}} und {{Glossary("Deno", "Deno")}}, wo die Konsolenausgabe an das Terminal geht und daher nicht interaktiv ist, bietet der `options`-Parameter eine Möglichkeit, die Darstellung des Objekts anzupassen.

## Syntax

```js-nolint
console.dir(object)
console.dir(object, options)
```

### Parameter

- `object`
  - : Ein JavaScript-Objekt, dessen Eigenschaften ausgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften, alle optional:
    - `colors` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: Wenn `true`, werden die Eigenschaften des Objekts entsprechend ihrem Typ stilisiert. Standardmäßig `true`.
    - `depth` {{non-standard_inline}} {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Verschachtelungsebenen repräsentiert, die gedruckt werden, wenn ein Objekt andere Objekte oder Arrays enthält. Der Wert `null` bedeutet: alle Ebenen drucken. Standardmäßig 2.
    - `showHidden` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: Wenn `true`, werden die nicht aufzählbaren und Symbol-Eigenschaften des Objekts angezeigt. Standardmäßig `false`.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge Dokumentation für `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Node.JS Dokumentation für `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Google Chrome Dokumentation für `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
