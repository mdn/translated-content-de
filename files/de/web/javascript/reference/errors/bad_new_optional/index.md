---
title: "SyntaxError: new keyword kann nicht mit einer optionalen Kette verwendet werden"
slug: Web/JavaScript/Reference/Errors/Bad_new_optional
l10n:
  sourceCommit: 7ca1d16101f5f4a1adf7293f2ad295ca337c59b2
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "new keyword cannot be used with an optional chain" tritt auf, wenn der Konstruktor eines {{jsxref("Operators/new", "new")}}-Ausdrucks eine [optionale Kette](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist oder wenn eine optionale Kette zwischen dem Konstruktor und der geklammerten Liste der Argumente steht.

## Meldung

```plain
SyntaxError: Invalid optional chain from new expression (V8-based)
SyntaxError: new keyword cannot be used with an optional chain (Firefox)
SyntaxError: Cannot call constructor in an optional chain. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Möglichkeiten, diesen Fehler zu erhalten. Die erste besteht darin, dass der Konstruktor-Ausdruck eine optionale Ketten-Ausdruck ist, wie hier:

```js-nolint example-bad
new Intl?.DateTimeFormat();
Number?.[parseMethod]`Hello, world!`;
```

Die zweite besteht darin, wenn `?.` zwischen dem Konstruktor und der Argumenten-Liste auftritt, wie hier:

```js-nolint
new Intl.DateTimeFormat?.();
```

Optionales `new` ist ausdrücklich verboten, da seine Syntax kompliziert ist (`new` mit und ohne Argumente), und das Ergebnis unklar ist (es wäre der einzige Fall, in dem `new` nicht zu einem Objektwert evaluiert). Sie müssen die optionale Kettenschleife in ihre zugrunde liegende Bedingung übersetzen (siehe [optionale Kettenschleife](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für mehr Informationen).

```js
const result =
  Intl.DateTimeFormat === null || Intl.DateTimeFormat === undefined
    ? undefined
    : new Intl.DateTimeFormat();
```

Denken Sie daran, dass die optionale Kettenschleife nur innerhalb einer geklammerten Einheit kurzgeschlossen wird. Wenn Sie Ihren Konstruktor-Ausdruck klammern, wird die optionale Kettenschleife keinen Fehler verursachen, da nun der Konstruktor nicht kurzgeschlossen wird und das Ergebnis klar ist (der Konstruktor wird `undefined` erzeugen und dann den `new`-Ausdruck werfen lassen).

```js-nolint
new (Intl?.DateTimeFormat)(); // Throws if Intl?.DateTimeFormat is undefined
```

Dies ist jedoch ohnehin ein wenig unsinnig, da die optionale Kettenschleife Fehler innerhalb der Eigenschaftszugriffskette verhindert, dann jedoch garantiert einen Fehler beim Aufrufen von `new` erzeugt. Sie möchten wahrscheinlich dennoch eine Bedingungsprüfung verwenden.

Beachten Sie, dass die optionale Kettenschleife nur als Konstruktor-Ausdruck verboten ist. Sie können die optionale Kettenschleife innerhalb der Argumentenliste verwenden oder die optionale Kettenschleife auf den gesamten `new`-Ausdruck anwenden.

```js example-good
new Intl.DateTimeFormat(navigator?.languages);
new Intl.DateTimeFormat().resolvedOptions?.();
```

Beachten Sie, dass es nicht notwendig ist, `?.` auf den `new`-Ausdruck selbst anzuwenden: `new a()?.b`, da `new` garantiert einen nicht-nullish Objektwert erzeugt.

## Siehe auch

- {{jsxref("Operators/new", "new")}}
- [Optionale Kette (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Ursprüngliche Diskussion darüber, ob "optional new" erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/22)
