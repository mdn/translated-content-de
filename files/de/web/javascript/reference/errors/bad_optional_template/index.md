---
title: "SyntaxError: getaggtes Template kann nicht mit optionaler Verkettung verwendet werden"
slug: Web/JavaScript/Reference/Errors/Bad_optional_template
l10n:
  sourceCommit: 7ca1d16101f5f4a1adf7293f2ad295ca337c59b2
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "tagged template cannot be used with optional chain" tritt auf, wenn der Tag-Ausdruck eines [getaggten Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) eine [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist oder wenn es eine optionale Verkettung zwischen dem Tag und dem Template gibt.

## Meldung

```plain
SyntaxError: Invalid tagged template on optional chain (V8-based)
SyntaxError: tagged template cannot be used with optional chain (Firefox)
SyntaxError: Cannot use tagged templates in an optional chain. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Wege, diesen Fehler zu erhalten. Der erste ist, wenn der Tag-Ausdruck ein Ausdruck mit optionaler Verkettung ist, wie hier:

```js-nolint example-bad
String?.raw`Hello, world!`;
console.log?.()`Hello, world!`;
Number?.[parseMethod]`Hello, world!`;
```

Der zweite ist, wenn `?.` zwischen dem Tag und dem Template auftritt, wie hier:

```js-nolint example-bad
String.raw?.`Hello, world!`;
```

Optionale Verkettung im Tag ist ausdrücklich verboten, da es dafür keinen überzeugenden Anwendungsfall gibt und unklar ist, was das erwartete Ergebnis sein soll (sollte es `undefined` sein oder der Wert des Templates, als wäre es nicht getaggt?). Sie müssen die optionale Verkettung in ihre zugrunde liegende Bedingung übersetzen (siehe [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für weitere Informationen).

```js example-good
const result =
  String.raw === null || String.raw === undefined
    ? undefined
    : String.raw`Hello, world!`;
```

Denken Sie daran, dass optionale Verkettung nur innerhalb einer geklammerten Einheit kurzgeschlossen wird. Wenn Sie Ihren Tag-Ausdruck klammern, wird die optionale Verkettung keinen Fehler verursachen, da der Tag jetzt nicht mehr kurzschließt und das Ergebnis klar ist (der Tag wird `undefined` erzeugen und dann das getaggte Template einen Fehler werfen lassen).

```js-nolint
(console?.log)`Hello, world!`; // Throws if console?.log is undefined
```

Dies ist allerdings etwas unsinnig, da die optionale Verkettung Fehler innerhalb der Eigenschaftszugriffs-Kette verhindert, aber dann garantiert einen Fehler beim Aufruf des Template-Tags erzeugt. Sie möchten wahrscheinlich immer noch eine bedingte Prüfung verwenden.

Bitte beachten Sie, dass optionale Verkettung nur als Tag-Ausdruck verboten ist. Sie können optionale Verkettung innerhalb der eingebetteten Ausdrücke verwenden oder die optionale Verkettung auf den gesamten getaggten Template-Ausdruck anwenden.

```js example-good
console.log`Hello, ${true.constructor?.name}!`; // ['Hello, ', '!', raw: Array(2)] 'Boolean'
console.log`Hello`?.toString(); // undefined
```

## Siehe auch

- [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Originaldiskussion darüber, ob optionale Verkettung in getaggten Template-Literalen erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/54)
