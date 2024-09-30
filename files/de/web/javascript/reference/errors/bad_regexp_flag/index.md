---
title: "SyntaxError: invalid regular expression flag \"x\""
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "invalid regular expression flag" tritt auf, wenn die Flags in einem regulären Ausdruck ein Flag enthalten, das nicht eines der folgenden ist: `d`, `g`, `i`, `m`, `s`, `u`, `v` oder `y`. Sie kann auch ausgelöst werden, wenn der Ausdruck mehr als eine Instanz eines gültigen Flags enthält oder wenn die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags zusammen verwendet werden.

## Meldung

```plain
SyntaxError: Invalid flags supplied to RegExp constructor 'x' (V8-based)
SyntaxError: Invalid regular expression flags (V8-based)
SyntaxError: invalid regular expression flag x (Firefox)
SyntaxError: Invalid flags supplied to RegExp constructor. (Safari)
SyntaxError: Invalid regular expression: invalid flags (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der reguläre Ausdruck enthält ungültige Flags oder gültige Flags wurden mehrmals im Ausdruck verwendet.

Die gültigen (erlaubten) Flags sind `d`, `g`, `i`, `m`, `s`, `u`, `v` und `y`. Sie werden detaillierter in [Reguläre Ausdrücke > Erweitertes Suchen mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) eingeführt.

Die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags schließen sich gegenseitig aus und können daher nicht zusammen verwendet werden. Sie können die Referenzen lesen, um die Unterschiede in ihrem Verhalten zu verstehen.

## Beispiele

In einem regulären Ausdrückliteral, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, werden die Flags nach dem zweiten Schrägstrich definiert.
Reguläre Ausdrucksflags können separat oder zusammen in beliebiger Reihenfolge verwendet werden.
Diese Syntax zeigt, wie die Flags mit dem regulären Ausdrucksliteral deklariert werden:

```js
const re = /pattern/flags;
```

Sie können auch in der Konstruktorfunktion des {{jsxref("RegExp")}}-Objekts (zweiter Parameter) definiert werden:

```js
const re = new RegExp("pattern", "flags");
```

Hier ist ein Beispiel, das nur die korrekten Flags zeigt.

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

Unten ist ein Beispiel für die Verwendung einiger ungültiger Flags `b`, `a` und `r`:

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

Der folgende Code ist falsch, da `W`, `e` und `b` keine gültigen Flags sind.

```js example-bad
const obj = {
  url: /docs/Web,
};

// SyntaxError: invalid regular expression flag "W"
```

Ein Ausdruck, der zwei Schrägstriche enthält, wird als reguläres Ausdrückliteral interpretiert.
Höchstwahrscheinlich war die Absicht, ein Zeichenfolgenliteral zu erstellen, indem einfache oder doppelte Anführungszeichen wie unten gezeigt verwendet werden:

```js example-good
const obj = {
  url: "/docs/Web",
};
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
