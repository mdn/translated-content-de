---
title: First-class Function
slug: Glossary/First-class_Function
l10n:
  sourceCommit: 12ff9f022472a6747b6b67946010058fe58ac9c4
---

In einer Programmiersprache gibt es **First-class functions**, wenn Funktionen in dieser Sprache wie jede andere Variable behandelt werden. In einer solchen Sprache kann eine Funktion beispielsweise als Argument an andere Funktionen übergeben, von einer anderen Funktion zurückgegeben oder als Wert einer Variable zugewiesen werden.

## Beispiele

### Zuweisung einer Funktion zu einer Variablen

```js
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
```

Wir haben eine _Anonyme Funktion_ einer {{Glossary("Variable", "Variablen")}} zugewiesen und dann diese Variable verwendet, um die Funktion durch das Hinzufügen von Klammern `()` am Ende aufzurufen.

> [!NOTE]
> Selbst wenn Ihre Funktion benannt ist, können Sie den Variablennamen verwenden, um sie aufzurufen. Eine Benennung ist hilfreich beim Debuggen Ihres Codes. _Aber es beeinflusst nicht die Art und Weise, wie wir sie aufrufen._

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

Wir übergeben unsere `sayHello()`-Funktion als Argument an die `greeting()`-Funktion. Dies zeigt, wie wir die Funktion als Wert behandeln.

> [!NOTE]
> Die Funktion, die wir als Argument an eine andere Funktion übergeben, wird als _{{Glossary("callback_function", "Callback-Funktion")}}_ bezeichnet. _`sayHello()` ist eine Callback-Funktion._

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
> Eine Funktion, die eine Funktion zurückgibt oder andere Funktionen als Argumente entgegennimmt, wird als _höherwertige Funktion_ bezeichnet.

## Siehe auch

- [First-class functions](https://en.wikipedia.org/wiki/First-class_function) auf Wikipedia
- Verwandte Glossareinträge:
  - {{Glossary("Callback_function", "Callback-Funktion")}}
  - {{Glossary("Function", "Funktion")}}
  - {{Glossary("Variable", "Variable")}}
