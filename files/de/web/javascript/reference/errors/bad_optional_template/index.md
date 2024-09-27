---
title: "SyntaxError: getaggte Vorlage kann nicht mit optionalem Chaining verwendet werden"
slug: Web/JavaScript/Reference/Errors/Bad_optional_template
l10n:
  sourceCommit: 7ca1d16101f5f4a1adf7293f2ad295ca337c59b2
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "tagged template cannot be used with optional chain" tritt auf, wenn der Tag-Ausdruck eines [getaggten Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) ein [Optional Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist, oder wenn zwischen dem Tag und dem Template ein Optional Chaining vorhanden ist.

## Meldung

```plain
SyntaxError: Invalid tagged template on optional chain (V8-based)
SyntaxError: tagged template cannot be used with optional chain (Firefox)
SyntaxError: Cannot use tagged templates in an optional chain. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Möglichkeiten, diesen Fehler zu erhalten. Die erste ist, wenn der Tag-Ausdruck ein Optional Chaining-Ausdruck ist, wie hier:

```js-nolint example-bad
String?.raw`Hello, world!`;
console.log?.()`Hello, world!`;
Number?.[parseMethod]`Hello, world!`;
```

Die zweite ist, wenn `?.` zwischen dem Tag und dem Template auftritt, wie hier:

```js-nolint example-bad
String.raw?.`Hello, world!`;
```

Optionales Chaining im Tag ist speziell verboten, da es keinen sinnvollen Anwendungsfall dafür gibt und unklar ist, was das erwartete Ergebnis sein sollte (sollte es `undefined` sein oder der Wert des Templates, als ob es nicht getaggt wäre?). Sie müssen das optionale Chaining in seine zugrunde liegende Bedingung übersetzen (siehe [Optionales Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für weitere Informationen).

```js example-good
const result =
  String.raw === null || String.raw === undefined
    ? undefined
    : String.raw`Hello, world!`;
```

Denken Sie daran, dass optionales Chaining nur innerhalb einer geklammerten Einheit abbricht. Wenn Sie Ihren Tag-Ausdruck in Klammern setzen, wird das optionale Chaining keinen Fehler verursachen, da nun der Tag nicht abbricht und das Ergebnis klar ist (der Tag wird `undefined` erzeugen und dann dazu führen, dass das getaggte Template eine Ausnahme wirft).

```js-nolint
(console?.log)`Hello, world!`; // Throws if console?.log is undefined
```

Dies ist jedoch ohnehin etwas unsinnig, da optionales Chaining Fehler innerhalb der Zugriffs-Kette verhindert, aber dann garantiert einen Fehler beim Aufruf des Template-Tags erzeugt. Vermutlich möchten Sie immer noch eine bedingte Überprüfung verwenden.

Beachten Sie, dass optionales Chaining nur als Tag-Ausdruck verboten ist. Sie können optionales Chaining innerhalb der eingebetteten Ausdrücke verwenden oder optionales Chaining auf den getaggten Template-Ausdruck als Ganzes anwenden.

```js example-good
console.log`Hello, ${true.constructor?.name}!`; // ['Hello, ', '!', raw: Array(2)] 'Boolean'
console.log`Hello`?.toString(); // undefined
```

## Siehe auch

- [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
- [Optionales Chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Ursprüngliche Diskussion darüber, ob optionales Chaining in getaggten Template-Literalen erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/54)
