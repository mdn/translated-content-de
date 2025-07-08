---
title: 'SyntaxError: ungültiges reguläres Ausdrucks-Flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "ungültiges reguläres Ausdrucks-Flag" tritt auf, wenn die Flags in einem regulären Ausdruck ein Flag enthalten, das nicht eines der folgenden ist: `d`, `g`, `i`, `m`, `s`, `u`, `v` oder `y`. Es kann auch ausgelöst werden, wenn der Ausdruck mehr als eine Instanz eines gültigen Flags enthält oder wenn die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)- und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flags zusammen verwendet werden.

## Nachricht

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

Der reguläre Ausdruck enthält ungültige Flags, oder gültige Flags wurden mehr als einmal im Ausdruck verwendet.

Die gültigen (erlaubten) Flags sind `d`, `g`, `i`, `m`, `s`, `u`, `v` und `y`. Sie werden im Detail im [Reguläre Ausdrücke > Erweiterte Suche mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) erklärt.

Die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)- und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flags schließen sich gegenseitig aus, daher können sie nicht zusammen verwendet werden. Sie können die Referenzen lesen, um die Unterschiede in ihrem Verhalten zu verstehen.

## Beispiele

In einem regulären Ausdrucks-Literal, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, werden die Flags nach dem zweiten Schrägstrich definiert. Reguläre Ausdrucks-Flags können separat oder zusammen in beliebiger Reihenfolge verwendet werden. Diese Syntax zeigt, wie die Flags mit dem regulären Ausdrucks-Literal deklariert werden:

```js
const re = /pattern/flags;
```

Sie können auch in der Konstruktorfunktion des {{jsxref("RegExp")}}-Objekts (zweiter Parameter) definiert werden:

```js
const re = new RegExp("pattern", "flags");
```

Hier ist ein Beispiel, das nur korrekte Flags verwendet.

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

Unten ist ein Beispiel, das die Verwendung einiger ungültiger Flags `b`, `a` und `r` zeigt:

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

Der untenstehende Code ist falsch, da `W`, `e` und `b` keine gültigen Flags sind.

```js example-bad
const obj = {
  url: /docs/Web,
};

// SyntaxError: invalid regular expression flag "W"
```

Ein Ausdruck, der zwei Schrägstriche enthält, wird als reguläres Ausdrucks-Literal interpretiert. Wahrscheinlich war beabsichtigt, ein String-Literal zu erstellen, das mit einfachen oder doppelten Anführungszeichen dargestellt wird, wie unten gezeigt:

```js example-good
const obj = {
  url: "/docs/Web",
};
```

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
