---
title: First-class Function
slug: Glossary/First-class_Function
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine Programmiersprache wird als solche mit **First-class functions** bezeichnet, wenn Funktionen in dieser Sprache wie jede andere Variable behandelt werden. Zum Beispiel kann in einer solchen Sprache eine Funktion als Argument an andere Funktionen übergeben werden, von einer anderen Funktion zurückgegeben werden und als Wert einer Variablen zugewiesen werden.

## Beispiele

### Zuweisen einer Funktion zu einer Variablen

```js
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
```

Wir haben eine _Anonymous Function_ in einer [Variable](/de/docs/Glossary/Variable) zugewiesen und dann diese Variable verwendet, um die Funktion durch Hinzufügen von Klammern `()` am Ende aufzurufen.

> [!NOTE]
> Auch wenn Ihre Funktion benannt wurde, können Sie den Variablennamen verwenden, um sie aufzurufen. Das Benennen wird beim Debuggen des Codes hilfreich sein. _Aber es beeinflusst nicht die Art und Weise, wie wir sie aufrufen._

### Übergeben einer Funktion als Argument

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

Wir übergeben unsere `sayHello()` Funktion als Argument an die `greeting()` Funktion, was erklärt, wie wir die Funktion als Wert behandeln.

> [!NOTE]
> Die Funktion, die wir als Argument an eine andere Funktion übergeben, wird _[Callback-Funktion](/de/docs/Glossary/callback_function)_ genannt. _`sayHello()` ist eine Callback-Funktion._

### Rückgabe einer Funktion

```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

In diesem Beispiel geben wir eine Funktion aus einer anderen Funktion zurück - _Wir können eine Funktion zurückgeben, weil Funktionen in JavaScript als Werte behandelt werden._

> [!NOTE]
> Eine Funktion, die eine Funktion zurückgibt oder andere Funktionen als Argumente nimmt, wird als _höhere Ordnungsfunktion_ bezeichnet.

## Siehe auch

- [First-class functions](https://en.wikipedia.org/wiki/First-class_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - [Callback-Funktion](/de/docs/Glossary/Callback_function)
  - [Funktion](/de/docs/Glossary/Function)
  - [Variable](/de/docs/Glossary/Variable)
