---
title: "SyntaxError: JSON.parse: bad parsing"
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahmen, die durch {{jsxref("JSON.parse()")}} ausgelöst werden, treten auf, wenn ein String nicht als JSON analysiert werden konnte.

## Nachricht

```plain
SyntaxError: JSON.parse: unterminated string literal
SyntaxError: JSON.parse: bad control character in string literal
SyntaxError: JSON.parse: bad character in string literal
SyntaxError: JSON.parse: bad Unicode escape
SyntaxError: JSON.parse: bad escape character
SyntaxError: JSON.parse: unterminated string
SyntaxError: JSON.parse: no number after minus sign
SyntaxError: JSON.parse: unexpected non-digit
SyntaxError: JSON.parse: missing digits after decimal point
SyntaxError: JSON.parse: unterminated fractional number
SyntaxError: JSON.parse: missing digits after exponent indicator
SyntaxError: JSON.parse: missing digits after exponent sign
SyntaxError: JSON.parse: exponent part is missing a number
SyntaxError: JSON.parse: unexpected end of data
SyntaxError: JSON.parse: unexpected keyword
SyntaxError: JSON.parse: unexpected character
SyntaxError: JSON.parse: end of data while reading object contents
SyntaxError: JSON.parse: expected property name or '}'
SyntaxError: JSON.parse: end of data when ',' or ']' was expected
SyntaxError: JSON.parse: expected ',' or ']' after array element
SyntaxError: JSON.parse: end of data when property name was expected
SyntaxError: JSON.parse: expected double-quoted property name
SyntaxError: JSON.parse: end of data after property name when ':' was expected
SyntaxError: JSON.parse: expected ':' after property name in object
SyntaxError: JSON.parse: end of data after property value in object
SyntaxError: JSON.parse: expected ',' or '}' after property value in object
SyntaxError: JSON.parse: expected ',' or '}' after property-value pair in object literal
SyntaxError: JSON.parse: property names must be double-quoted strings
SyntaxError: JSON.parse: expected property name or '}'
SyntaxError: JSON.parse: unexpected character
SyntaxError: JSON.parse: unexpected non-whitespace character after JSON data
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

{{jsxref("JSON.parse()")}} analysiert einen String als JSON. Dieser String muss gültiges JSON sein und wird diesen Fehler auslösen, wenn falsche Syntax gefunden wurde.

## Beispiele

### JSON.parse() erlaubt keine nachgestellten Kommata

Beide Zeilen werden einen SyntaxError auslösen:

```js example-bad
JSON.parse("[1, 2, 3, 4,]");
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Lassen Sie die nachgestellten Kommata weg, um das JSON korrekt zu analysieren:

```js example-good
JSON.parse("[1, 2, 3, 4]");
JSON.parse('{"foo": 1}');
```

### Eigenschaftsnamen müssen doppelt-angeführte Strings sein

Sie können keine einfachen Anführungszeichen um Eigenschaften verwenden, wie 'foo'.

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

Verwenden Sie stattdessen "foo":

```js example-good
JSON.parse('{"foo": 1}');
```

### Führende Nullen und Dezimalpunkte

Sie können keine führenden Nullen verwenden, wie 01, und Dezimalpunkte müssen von mindestens einer Ziffer gefolgt werden.

```js example-bad
JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

Schreiben Sie stattdessen einfach 1 ohne eine Null und verwenden Sie mindestens eine Ziffer nach einem Dezimalpunkt:

```js example-good
JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
```

## Siehe auch

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
