---
title: First-Class-Funktion
slug: Glossary/First-class_Function
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine Programmiersprache wird als solche bezeichnet, die **First-Class-Funktionen** enthält, wenn Funktionen in dieser Sprache wie jede andere Variable behandelt werden. Zum Beispiel kann in einer solchen Sprache eine Funktion als Argument an andere Funktionen übergeben werden, von einer anderen Funktion zurückgegeben werden und als Wert einer Variablen zugewiesen werden.

## Beispiele

### Eine Funktion einer Variablen zuweisen

```js
const foo = () => {
  console.log("foobar");
};
foo(); // Aufruf über die Variable
// foobar
```

Wir haben eine _anonyme Funktion_ in einer {{glossary("Variable")}} zugewiesen und dann diese Variable verwendet, um die Funktion durch Hinzufügen von Klammern `()` am Ende aufzurufen.

> [!NOTE]
> Auch wenn Ihre Funktion benannt wurde, können Sie den Variablennamen verwenden, um sie aufzurufen. Das Benennen ist beim Debuggen Ihres Codes hilfreich. _Aber es hat keinen Einfluss darauf, wie wir sie aufrufen._

### Eine Funktion als Argument übergeben

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// `sayHello` als Argument an die `greeting`-Funktion übergeben
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

Wir übergeben unsere `sayHello()`-Funktion als Argument an die `greeting()`-Funktion, dies zeigt, wie wir die Funktion als Wert behandeln.

> [!NOTE]
> Die Funktion, die wir als Argument an eine andere Funktion übergeben, wird _{{glossary("callback function")}}_ genannt. _`sayHello()` ist eine Callback-Funktion._

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
> Eine Funktion, die eine Funktion zurückgibt oder andere Funktionen als Argumente annimmt, wird _higher-order function_ genannt.

## Siehe auch

- [First-class functions](https://en.wikipedia.org/wiki/First-class_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{glossary("Callback function")}}
  - {{glossary("Function")}}
  - {{glossary("Variable")}}
