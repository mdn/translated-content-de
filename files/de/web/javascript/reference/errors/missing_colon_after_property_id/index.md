---
title: "SyntaxError: missing : after property id"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing : after property id" tritt auf, wenn Objekte mit der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax erstellt werden. Ein Doppelpunkt (`:`) trennt Schlüssel und Werte für die Eigenschaften des Objekts. Irgendwie fehlt dieser Doppelpunkt oder er ist fehl am Platz.

## Meldung

```plain
SyntaxError: Invalid shorthand property initializer (V8-based)
SyntaxError: missing : after property id (Firefox)
SyntaxError: Unexpected token '='. Expected a ':' following the property name 'x'. (Safari)
SyntaxError: Unexpected token '+'. Expected an identifier as property name. (Safari)
```

## Fehler-Typ

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Beim Erstellen von Objekten mit der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax trennt ein Doppelpunkt (`:`) die Schlüssel und Werte für die Eigenschaften des Objekts.

```js
const obj = { propertyKey: "value" };
```

## Beispiele

### Doppelpunkte vs. Gleichheitszeichen

Dieser Code schlägt fehl, da das Gleichheitszeichen in dieser Objektinitialisierer-Syntax nicht auf diese Weise verwendet werden kann.

```js-nolint example-bad
const obj = { propertyKey = "value" };
// SyntaxError: missing : after property id
```

Korrekt wäre es, einen Doppelpunkt zu verwenden oder eckige Klammern zu nutzen, um eine neue Eigenschaft zuzuweisen, nachdem das Objekt bereits erstellt wurde.

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

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
