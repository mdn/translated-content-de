---
title: "SyntaxError: Ein getaggtes Template kann nicht mit optionaler Verkettung verwendet werden"
slug: Web/JavaScript/Reference/Errors/Bad_optional_template
l10n:
  sourceCommit: 7ca1d16101f5f4a1adf7293f2ad295ca337c59b2
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Ein getaggtes Template kann nicht mit optionaler Verkettung verwendet werden" tritt auf, wenn der Ausdruck eines [getaggten Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) eine [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist oder wenn eine optionale Verkettung zwischen dem Tag und dem Template besteht.

## Meldung

```plain
SyntaxError: Invalid tagged template on optional chain (V8-based)
SyntaxError: tagged template cannot be used with optional chain (Firefox)
SyntaxError: Cannot use tagged templates in an optional chain. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Möglichkeiten, diesen Fehler zu erhalten. Die erste ist, wenn der Tag-Ausdruck eine optionale Verkettung ist, wie in diesem Beispiel:

```js-nolint example-bad
String?.raw`Hello, world!`;
console.log?.()`Hello, world!`;
Number?.[parseMethod]`Hello, world!`;
```

Die zweite Möglichkeit ist, wenn `?.` zwischen dem Tag und dem Template auftritt, wie in diesem Beispiel:

```js-nolint example-bad
String.raw?.`Hello, world!`;
```

Optionale Verkettungen im Tag sind ausdrücklich verboten, da es dafür keinen großen Anwendungsfall gibt und unklar ist, was das erwartete Ergebnis sein sollte (sollte es `undefined` sein oder der Wert des Templates, als ob es nicht getaggt wäre?). Sie müssen die optionale Verkettung in ihre zugrunde liegende Bedingung übersetzen (siehe [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für weitere Informationen).

```js example-good
const result =
  String.raw === null || String.raw === undefined
    ? undefined
    : String.raw`Hello, world!`;
```

Denken Sie daran, dass die optionale Verkettung nur innerhalb einer klammergeschlossenen Einheit unterbricht. Wenn Sie Ihren Tag-Ausdruck einklammern, wird die optionale Verkettung keinen Fehler verursachen, da der Tag jetzt nicht unterbricht und das Ergebnis klar ist (der Tag wird `undefined` erzeugen und dann dazu führen, dass das getaggte Template auslöst).

```js-nolint
(console?.log)`Hello, world!`; // Löst aus, wenn console?.log undefined ist
```

Dies ist jedoch sowieso etwas unsinnig, weil die optionale Verkettung Fehler innerhalb der Eigenschaftszugriffskette verhindert, dann aber garantiert einen Fehler generiert, wenn das Template-Tag aufgerufen wird. Sie möchten wahrscheinlich immer noch eine bedingte Überprüfung verwenden.

Beachten Sie, dass optionale Verkettung nur im Tag-Ausdruck verboten ist. Sie können optionale Verkettung innerhalb der eingebetteten Ausdrücke verwenden oder die optionale Verkettung auf den gesamten getaggten Template-Ausdruck anwenden.

```js example-good
console.log`Hello, ${true.constructor?.name}!`; // ['Hello, ', '!', raw: Array(2)] 'Boolean'
console.log`Hello`?.toString(); // undefined
```

## Siehe auch

- [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals)
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Ursprüngliche Diskussion darüber, ob optionale Verkettung in getaggten Template-Literals erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/54)
