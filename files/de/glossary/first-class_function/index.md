---
title: First-Class Function
slug: Glossary/First-class_Function
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Man sagt, eine Programmiersprache hat **First-Class-Funktionen**, wenn Funktionen in dieser Sprache wie jede andere Variable behandelt werden. In einer solchen Sprache kann eine Funktion beispielsweise als Argument an andere Funktionen übergeben, von einer anderen Funktion zurückgegeben und als Wert einer Variable zugewiesen werden.

## Beispiele

### Zuweisen einer Funktion zu einer Variable

```js
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
```

Wir haben eine _anonyme Funktion_ in eine {{Glossary("Variable", "Variable")}} zugewiesen und dann diese Variable verwendet, um die Funktion durch Hinzufügen von Klammern `()` am Ende aufzurufen.

> [!NOTE]
> Auch wenn Ihre Funktion benannt war, können Sie den Variablennamen verwenden, um sie aufzurufen. Das Benennen wird beim Debuggen Ihres Codes hilfreich sein. _Aber es wird die Art und Weise des Aufrufs nicht beeinflussen._

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

Wir übergeben unsere `sayHello()`-Funktion als Argument an die `greeting()`-Funktion, dies verdeutlicht, wie wir die Funktion als Wert behandeln.

> [!NOTE]
> Die Funktion, die wir als Argument an eine andere Funktion übergeben, nennt man eine _{{Glossary("callback_function", "Callback-Funktion")}}_. _`sayHello()` ist eine Callback-Funktion._

### Zurückgeben einer Funktion

```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

In diesem Beispiel geben wir eine Funktion von einer anderen Funktion zurück - _Wir können eine Funktion zurückgeben, weil Funktionen in JavaScript als Werte behandelt werden._

> [!NOTE]
> Eine Funktion, die eine Funktion zurückgibt oder andere Funktionen als Argumente nimmt, nennt man eine _höherwertige Funktion_.

## Siehe auch

- [First-Class-Funktionen](https://en.wikipedia.org/wiki/First-class_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Callback_function", "Callback-Funktion")}}
  - {{Glossary("Function", "Funktion")}}
  - {{Glossary("Variable", "Variable")}}
