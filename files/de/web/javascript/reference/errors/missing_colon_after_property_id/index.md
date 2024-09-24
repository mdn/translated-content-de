---
title: "SyntaxError: Fehlendes ':' nach Eigenschafts-ID"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "missing : after property id" tritt auf, wenn Objekte mit der [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax erstellt werden. Ein Doppelpunkt (`:`) trennt die Schlüssel und Werte der Eigenschaften des Objekts. Irgendwie fehlt oder ist dieser Doppelpunkt falsch platziert.

## Meldung

```plain
SyntaxError: Invalid shorthand property initializer (V8-based)
SyntaxError: missing : after property id (Firefox)
SyntaxError: Unexpected token '='. Expected a ':' following the property name 'x'. (Safari)
SyntaxError: Unexpected token '+'. Expected an identifier as property name. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Beim Erstellen von Objekten mit der [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax trennt ein Doppelpunkt (`:`) die Schlüssel und Werte der Eigenschaften des Objekts.

```js
const obj = { propertyKey: "value" };
```

## Beispiele

### Doppelpunkte vs. Gleichheitszeichen

Dieser Code schlägt fehl, da das Gleichheitszeichen nicht auf diese Weise in dieser Objekt-Initialisierer-Syntax verwendet werden kann.

```js-nolint example-bad
const obj = { propertyKey = "value" };
// SyntaxError: missing : after property id
```

Richtig wäre es, einen Doppelpunkt zu verwenden, oder eckige Klammern zu nutzen, um ein neues Attribut zuzuweisen, nachdem das Objekt bereits erstellt wurde.

```js example-good
const obj = { propertyKey: "value" };
```

Oder alternativ:

```js
const obj = {};
obj.propertyKey = "value";
```

### Berechnete Eigenschaften

Wenn Sie einen Eigenschaftsschlüssel aus einem Ausdruck erstellen, müssen Sie eckige Klammern verwenden. Andernfalls kann der Eigenschaftsname nicht berechnet werden:

```js-nolint example-bad
const obj = { "b"+"ar": "foo" };
// SyntaxError: missing : after property id
```

Setzen Sie den Ausdruck in eckige Klammern `[]`:

```js example-good
const obj = { ["b" + "ar"]: "foo" };
```

## Siehe auch

- [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
