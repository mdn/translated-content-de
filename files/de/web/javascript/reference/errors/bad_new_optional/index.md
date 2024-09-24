---
title: "SyntaxError: Das Schlüsselwort new kann nicht mit einer optionalen Kette verwendet werden"
slug: Web/JavaScript/Reference/Errors/Bad_new_optional
l10n:
  sourceCommit: 7ca1d16101f5f4a1adf7293f2ad295ca337c59b2
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "Das Schlüsselwort new kann nicht mit einer optionalen Kette verwendet werden" tritt auf, wenn der Konstruktor eines {{jsxref("Operators/new", "new")}}-Ausdrucks eine [optionale Kette](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist oder wenn es eine optionale Kette zwischen dem Konstruktor und der geklammerten Argumentliste gibt.

## Meldung

```plain
SyntaxError: Invalid optional chain from new expression (V8-based)
SyntaxError: new keyword cannot be used with an optional chain (Firefox)
SyntaxError: Cannot call constructor in an optional chain. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Möglichkeiten, diesen Fehler zu bekommen. Die erste Möglichkeit ist, wenn der Konstruktor-Ausdruck eine optionale Kettenausdruck ist, wie in folgendem Beispiel:

```js-nolint example-bad
new Intl?.DateTimeFormat();
Number?.[parseMethod]`Hello, world!`;
```

Die zweite Möglichkeit ist, wenn `?.` zwischen dem Konstruktor und der Argumentliste auftritt, wie in folgendem Beispiel:

```js-nolint
new Intl.DateTimeFormat?.();
```

Ein optionales `new` ist speziell verboten, weil seine Syntax kompliziert ist (`new` mit und ohne Argumenten) und das Ergebnis unklar ist (es wäre der einzige Fall, in dem `new` nicht zu einem Objektwert ausgewertet wird). Sie müssen die optionale Verkettung in ihre zugrunde liegende Bedingung übersetzen (siehe [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für weitere Informationen).

```js
const result =
  Intl.DateTimeFormat === null || Intl.DateTimeFormat === undefined
    ? undefined
    : new Intl.DateTimeFormat();
```

Denken Sie daran, dass optionale Verkettung nur innerhalb einer geklammerten Einheit kurzschließt. Wenn Sie Ihren Konstruktor-Ausdruck klammern, wird die optionale Verkettung keinen Fehler verursachen, da der Konstruktor jetzt nicht kurzschließt und das Ergebnis klar ist (der Konstruktor wird `undefined` erzeugen und dann den `new`-Ausdruck zum Auslösen eines Fehlers veranlassen).

```js-nolint
new (Intl?.DateTimeFormat)(); // Löst einen Fehler aus, wenn Intl?.DateTimeFormat undefined ist
```

Dies ist jedoch ohnehin etwas unsinnig, da optionale Verkettung Fehler innerhalb der Zugriffskette vermeidet, aber dann garantiert einen Fehler beim Aufruf von `new` erzeugt. Sie würden wahrscheinlich trotzdem eine bedingte Überprüfung verwenden wollen.

Beachten Sie, dass optionale Verkettung nur als Konstruktor-Ausdruck verboten ist. Sie können optionale Verkettung innerhalb der Argumentliste verwenden oder optionale Verkettung auf den gesamten `new`-Ausdruck anwenden.

```js example-good
new Intl.DateTimeFormat(navigator?.languages);
new Intl.DateTimeFormat().resolvedOptions?.();
```

Beachten Sie, dass es nicht notwendig ist, `?.` auf dem `new`-Ausdruck selbst zu verwenden: `new a()?.b`, da `new` garantiert einen nicht-nullish Objektwert erzeugt.

## Siehe auch

- {{jsxref("Operators/new", "new")}}
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Ursprüngliche Diskussion darüber, ob "optionales new" erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/22)
