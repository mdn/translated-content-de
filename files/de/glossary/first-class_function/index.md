---
title: First-class function
slug: Glossary/First-class_Function
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Eine Programmiersprache wird als **First-class Funktionen** besitzend beschrieben, wenn Funktionen in dieser Sprache wie jede andere Variable behandelt werden. Beispielsweise kann in einer solchen Sprache eine Funktion als Argument an andere Funktionen übergeben, von einer anderen Funktion zurückgegeben und als Wert einer Variablen zugewiesen werden.

## Beispiele

### Zuordnen einer Funktion zu einer Variablen

```js
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
```

Wir haben eine _anonyme Funktion_ einer {{Glossary("Variable", "Variablen")}} zugewiesen und dann diese Variable verwendet, um die Funktion durch Hinzufügen von Klammern `()` am Ende aufzurufen.

> [!NOTE]
> Selbst wenn Ihre Funktion benannt wurde, können Sie den Variablennamen verwenden, um sie aufzurufen. Die Benennung ist beim Debuggen Ihres Codes hilfreich. _Aber sie beeinflusst nicht, wie wir sie aufrufen._

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
> Die Funktion, die wir als Argument an eine andere Funktion übergeben, wird als _{{Glossary("callback_function", "Callback-Funktion")}}_ bezeichnet. _`sayHello()` ist eine Callback-Funktion._

### Zurückgeben einer Funktion

```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

In diesem Beispiel geben wir eine Funktion aus einer anderen Funktion zurück - _Wir können eine Funktion zurückgeben, weil Funktionen in JavaScript als Werte behandelt werden._

> [!NOTE]
> Eine Funktion, die eine Funktion zurückgibt oder andere Funktionen als Argumente nimmt, wird als _höherwertige Funktion_ bezeichnet.

## Siehe auch

- [First-class functions](https://en.wikipedia.org/wiki/First-class_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Callback_function", "Callback-Funktion")}}
  - {{Glossary("Function", "Funktion")}}
  - {{Glossary("Variable", "Variable")}}
