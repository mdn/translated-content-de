---
title: First-class Function
slug: Glossary/First-class_Function
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine Programmiersprache wird als Sprache mit **First-class functions** bezeichnet, wenn Funktionen in dieser Sprache wie jede andere Variable behandelt werden. Zum Beispiel kann in einer solchen Sprache eine Funktion als Argument an andere Funktionen übergeben werden, von einer anderen Funktion zurückgegeben und als Wert einer Variable zugewiesen werden.

## Beispiele

### Zuweisen einer Funktion zu einer Variablen

```js
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
```

Wir haben eine _Anonyme Funktion_ in einer {{Glossary("Variable", "Variablen")}} zugewiesen und dann diese Variable verwendet, um die Funktion durch Hinzufügen von Klammern `()` am Ende aufzurufen.

> [!NOTE]
> Auch wenn Ihre Funktion benannt wurde, können Sie den Variablennamen verwenden, um sie aufzurufen. Das Benennen ist hilfreich, wenn Sie Ihren Code debuggen. _Aber es beeinflusst nicht, wie wir sie aufrufen._

### Eine Funktion als Argument übergeben

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
> Die Funktion, die wir als Argument an eine andere Funktion übergeben, wird _{{Glossary("callback_function", "Callback-Funktion")}}_ genannt. _`sayHello()` ist eine Callback-Funktion._

### Eine Funktion zurückgeben

```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

In diesem Beispiel geben wir eine Funktion von einer anderen Funktion zurück - _Wir können eine Funktion zurückgeben, weil Funktionen in JavaScript als Werte behandelt werden._

> [!NOTE]
> Eine Funktion, die eine andere Funktion zurückgibt oder andere Funktionen als Argumente verwendet, wird _höhere Ordnung Funktion_ genannt.

## Siehe auch

- [First-class functions](https://en.wikipedia.org/wiki/First-class_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Callback_function", "Callback-Funktion")}}
  - {{Glossary("Function", "Funktion")}}
  - {{Glossary("Variable", "Variable")}}
