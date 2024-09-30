---
title: "SyntaxError: new-Schlüsselwort kann nicht mit einer Optionalen Kette verwendet werden"
slug: Web/JavaScript/Reference/Errors/Bad_new_optional
l10n:
  sourceCommit: 7ca1d16101f5f4a1adf7293f2ad295ca337c59b2
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "new-Schlüsselwort kann nicht mit einer Optionalen Kette verwendet werden" tritt auf, wenn der Konstruktor eines {{jsxref("Operators/new", "new")}}-Ausdrucks eine [Optionale Kette](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist oder wenn sich eine Optionale Kette zwischen dem Konstruktor und der geklammerten Argumentliste befindet.

## Nachricht

```plain
SyntaxError: Invalid optional chain from new expression (V8-based)
SyntaxError: new keyword cannot be used with an optional chain (Firefox)
SyntaxError: Cannot call constructor in an optional chain. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Möglichkeiten, diesen Fehler zu erhalten. Die erste ist, wenn der Konstruktor-Ausdruck eine Optionale-Kette-Ausdruck ist, wie hier:

```js-nolint example-bad
new Intl?.DateTimeFormat();
Number?.[parseMethod]`Hello, world!`;
```

Die zweite Möglichkeit ist, wenn `?.` zwischen dem Konstruktor und der Argumentliste auftritt, wie hier:

```js-nolint
new Intl.DateTimeFormat?.();
```

Optionales `new` ist speziell verboten, da seine Syntax kompliziert ist (`new` mit und ohne Argumente), und das Ergebnis unklar ist (es wäre der einzige Fall, in dem `new` nicht zu einem Objektwert ausgewertet wird). Sie müssen die Optionale-Kette in ihre zugrunde liegende Bedingung übersetzen (siehe [Optionale Kette](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für weitere Informationen).

```js
const result =
  Intl.DateTimeFormat === null || Intl.DateTimeFormat === undefined
    ? undefined
    : new Intl.DateTimeFormat();
```

Denken Sie daran, dass die Optionale Kette nur innerhalb einer geklammerten Einheit abgekürzt wird. Wenn Sie Ihren Konstruktor-Ausdruck klammern, wird die Optionale Kette keinen Fehler verursachen, da der Konstruktor nicht abkürzt und das Ergebnis klar ist (der Konstruktor liefert `undefined` und verursacht dann, dass der `new`-Ausdruck einen Fehler wirft).

```js-nolint
new (Intl?.DateTimeFormat)(); // Throws if Intl?.DateTimeFormat is undefined
```

Dies ist jedoch ohnehin etwas unsinnig, da die Optionale Kette Fehler innerhalb der Eigenschaftszugriffskette verhindert, aber garantiert einen Fehler erzeugt, wenn `new` aufgerufen wird. Sie möchten wahrscheinlich trotzdem eine Bedingungsüberprüfung verwenden.

Beachten Sie, dass die Optionale Kette nur als Konstruktor-Ausdruck verboten ist. Sie können die Optionale Kette innerhalb der Argumentliste verwenden oder die Optionale Kette auf den gesamten `new`-Ausdruck anwenden.

```js example-good
new Intl.DateTimeFormat(navigator?.languages);
new Intl.DateTimeFormat().resolvedOptions?.();
```

Beachten Sie, dass es nicht erforderlich ist, `?.` auf den `new`-Ausdruck selbst anzuwenden: `new a()?.b`, da `new` garantiert einen nicht-nullish Objektwert produziert.

## Siehe auch

- {{jsxref("Operators/new", "new")}}
- [Optionale Kette (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Originaldiskussion darüber, ob "optionales new" erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/22)
