---
title: "Konsole: dir() statische Methode"
short-title: dir()
slug: Web/API/console/dir_static
l10n:
  sourceCommit: c607327eeabe92adedfb45e37e35d24f320d3e88
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.dir()`** statische Methode zeigt eine Liste der Eigenschaften des angegebenen JavaScript-Objekts an. In Browser-Konsolen wird die Ausgabe als hierarchische Liste mit Aufklappdreiecken dargestellt, die es Ihnen ermöglichen, den Inhalt von Kindobjekten zu sehen.

Im Gegensatz zu anderen Logging-Methoden versucht `console.dir()` nicht, das Objekt schön zu formatieren. Zum Beispiel, wenn Sie ein DOM-Element an `console.dir()` übergeben, wird es nicht wie im Element-Inspektor angezeigt, sondern zeigt stattdessen eine Liste von Eigenschaften.

![Ein Screenshot der Firefox-Konsole, in der console.dir(document.location) ausgeführt wird. Wir sehen die URL der Seite, gefolgt von einem Block von Eigenschaften. Wenn die Eigenschaft eine Funktion oder ein Objekt ist, wird ein Aufklappdreieck vorangestellt.](console-dir.png)

In Laufzeiten wie {{glossary("Node.js", "Node")}} und {{glossary("Deno")}}, in denen Konsolenausgaben an das Terminal gehen und daher nicht interaktiv sind, bietet der `options`-Parameter eine Möglichkeit, die Darstellung des Objekts anzupassen.

## Syntax

```js-nolint
dir(object)
dir(object, options)
```

### Parameter

- `object`
  - : Ein JavaScript-Objekt, dessen Eigenschaften gedruckt werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften, alle optional:
    - `colors` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: wenn `true`, stylen Sie die Eigenschaften des Objekts entsprechend ihrem Typ. Standard ist `true`.
    - `depth` {{non-standard_inline}} {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Verschachtelungsstufen darstellt, die gedruckt werden sollen, wenn ein Objekt andere Objekte oder Arrays enthält. Der Wert `null` bedeutet: alle Ebenen drucken. Standard ist 2.
    - `showHidden` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: wenn `true`, drucken Sie die nicht aufzählbaren und Symbol-Eigenschaften des Objekts. Standard ist `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Node.JS-Dokumentation für `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Google Chrome-Dokumentation für `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
