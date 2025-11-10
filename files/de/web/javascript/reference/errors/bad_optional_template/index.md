---
title: "SyntaxError: Getaggte Vorlage kann nicht mit optionaler Verkettung verwendet werden"
slug: Web/JavaScript/Reference/Errors/Bad_optional_template
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "getaggte Vorlage kann nicht mit optionaler Verkettung verwendet werden" tritt auf, wenn der Ausdruck des Tags eines [getaggten Vorlagenliteral](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) eine [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist oder wenn es eine optionale Verkettung zwischen dem Tag und der Vorlage gibt.

## Meldung

```plain
SyntaxError: Invalid tagged template on optional chain (V8-based)
SyntaxError: tagged template cannot be used with optional chain (Firefox)
SyntaxError: Cannot use tagged templates in an optional chain. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Möglichkeiten, diesen Fehler zu erhalten. Die erste Möglichkeit ist, wenn der Ausdruck des Tags eine Ausdruck der optionalen Verkettung ist, wie hier:

```js-nolint example-bad
String?.raw`Hello, world!`;
console.log?.()`Hello, world!`;
Number?.[parseMethod]`Hello, world!`;
```

Die zweite Möglichkeit ist, wenn `?.` zwischen dem Tag und der Vorlage auftritt, wie hier:

```js-nolint example-bad
String.raw?.`Hello, world!`;
```

Optionale Verkettung im Tag ist speziell verboten, da es keinen klaren Anwendungsfall dafür gibt und unklar ist, was das erwartete Ergebnis sein soll (soll es `undefined` sein oder der Wert der Vorlage so, als wäre sie nicht getaggt?). Sie müssen die optionale Verkettung in ihre zugrunde liegende Bedingung übersetzen (siehe [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für weitere Informationen).

```js example-good
const result =
  String.raw === null || String.raw === undefined
    ? undefined
    : String.raw`Hello, world!`;
```

Denken Sie daran, dass die optionale Verkettung nur innerhalb einer geklammerten Einheit abgebrochen wird. Wenn Sie Ihren Ausdruck des Tags klammern, führt die optionale Verkettung nicht zu einem Fehler, da der Tag nun nicht abgebrochen wird und das Ergebnis klar ist (der Tag produziert `undefined` und führt dann zu einem Fehler in der getaggten Vorlage).

```js-nolint
(console?.log)`Hello, world!`; // Throws if console?.log is undefined
```

Dies ist jedoch etwas unsinnig, da die optionale Verkettung Fehler innerhalb der Eigenschaftszugriffskette verhindert, aber dann garantiert einen Fehler beim Aufrufen des Vorlagen-Tags erzeugt. Wahrscheinlich möchten Sie trotzdem einen bedingten Check verwenden.

Beachten Sie, dass die optionale Verkettung nur als Ausdruck des Tags verboten ist. Sie können die optionale Verkettung innerhalb der eingebetteten Ausdrücke verwenden oder die optionale Verkettung auf den gesamten Ausdruck der getaggten Vorlage anwenden.

```js example-good
console.log`Hello, ${true.constructor?.name}!`; // ['Hello, ', '!', raw: Array(2)] 'Boolean'
console.log`Hello`?.toString(); // undefined
```

## Siehe auch

- [Vorlagenliteral](/de/docs/Web/JavaScript/Reference/Template_literals)
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Ursprüngliche Diskussion darüber, ob die optionale Verkettung in getaggten Vorlagenliteralen erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/54)
