---
title: "console: dir() statische Methode"
short-title: dir()
slug: Web/API/console/dir_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.dir()`** zeigt eine Liste der Eigenschaften des angegebenen JavaScript-Objekts an. In Browserkonsolen wird die Ausgabe als hierarchische Liste mit Aufklapppfeilen dargestellt, die es Ihnen ermöglichen, den Inhalt von untergeordneten Objekten anzuzeigen.

Im Gegensatz zu anderen Logging-Methoden versucht `console.dir()` nicht, das Objekt ansprechend zu formatieren. Wenn Sie beispielsweise ein DOM-Element an `console.dir()` übergeben, wird es nicht wie im Elementinspektor angezeigt, sondern es wird eine Liste der Eigenschaften gezeigt.

![Ein Screenshot der Firefox-Konsole, in der console.dir(document.location) ausgeführt wird. Wir sehen die URL der Seite, gefolgt von einem Block mit Eigenschaften. Wenn die Eigenschaft eine Funktion oder ein Objekt ist, wird ein Aufklapppfeil vorangestellt.](console-dir.png)

In Laufzeitumgebungen wie {{Glossary("Node.js", "Node")}} und {{Glossary("Deno", "Deno")}}, wo die Konsolenausgabe im Terminal erfolgt und daher nicht interaktiv ist, bietet der Parameter `options` eine Möglichkeit, die Darstellung des Objekts anzupassen.

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
      - : Ein boolescher Wert: Wenn `true`, werden die Eigenschaften des Objekts entsprechend ihrem Typ gestaltet. Standardmäßig `true`.
    - `depth` {{non-standard_inline}} {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Ausführungsstufen angibt, wenn ein Objekt andere Objekte oder Arrays enthält. Der Wert `null` bedeutet: alle Ebenen drucken. Standardmäßig 2.
    - `showHidden` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: Wenn `true`, werden die nicht enumerierbaren und symbolischen Eigenschaften des Objekts gedruckt. Standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Node.js-Dokumentation für `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Dokumentation von Google Chrome für `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
