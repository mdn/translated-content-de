---
title: "console: dir() statische Methode"
short-title: dir()
slug: Web/API/console/dir_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.dir()`** zeigt eine Liste der Eigenschaften des angegebenen JavaScript-Objekts an. In Browser-Konsolen wird die Ausgabe als hierarchische Liste mit Aufklappdreiecken dargestellt, über die Sie die Inhalte von Kinderobjekten einsehen können.

Im Gegensatz zu anderen Logging-Methoden versucht `console.dir()` nicht, das Objekt ansprechend darzustellen. Wenn Sie beispielsweise ein DOM-Element an `console.dir()` übergeben, wird es nicht wie im Element-Inspektor angezeigt, sondern es wird stattdessen eine Liste von Eigenschaften gezeigt.

![Ein Screenshot der Firefox-Konsole, in dem console.dir(document.location) ausgeführt wird. Wir sehen die URL der Seite, gefolgt von einem Block von Eigenschaften. Wenn die Eigenschaft eine Funktion oder ein Objekt ist, wird ein Aufklappdreieck vorangestellt.](console-dir.png)

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
      - : Ein boolescher Wert: Wenn `true`, werden die Eigenschaften des Objekts abhängig von ihrem Typ gestylt. Standardmäßig `true`.
    - `depth` {{non-standard_inline}} {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Verschachtelungsebenen angibt, die gedruckt werden sollen, wenn ein Objekt andere Objekte oder Arrays enthält. Der Wert `null` bedeutet: alle Ebenen drucken. Standardwert ist 2.
    - `showHidden` {{non-standard_inline}} {{optional_inline}}
      - : Ein boolescher Wert: Wenn `true`, druckt die nicht aufzählbaren und Symbol-Eigenschaften des Objekts. Standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#dir)
- [Node.js Dokumentation zu `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Google Chromes Dokumentation zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
