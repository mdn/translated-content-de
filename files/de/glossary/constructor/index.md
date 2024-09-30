---
title: Constructor
slug: Glossary/Constructor
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Constructor** gehört zu einem bestimmten [Objekt](/de/docs/Glossary/object), das instanziiert wird. Der Constructor initialisiert dieses Objekt und kann Zugriff auf seine privaten Informationen gewähren. Das Konzept eines Constructors kann auf die meisten [objektorientierten Programmiersprachen](/de/docs/Glossary/OOP) angewendet werden. Im Wesentlichen wird ein Constructor in [JavaScript](/de/docs/Glossary/JavaScript) normalerweise beim Instanziieren einer [Klasse](/de/docs/Glossary/class) deklariert.

## Syntax

```js
// This is a generic default constructor class Default
function Default() {}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, /* …, */ argN) {}
```

Um den Constructor der Klasse in JavaScript aufzurufen, verwenden Sie einen `new` Operator, um eine neue [Objektreferenz](/de/docs/Glossary/object_reference) einer [Variablen](/de/docs/Glossary/variable) zuzuweisen.

```js
function Default() {}

// A new reference of a Default object assigned to a
// local variable defaultReference
const defaultReference = new Default();
```

## Siehe auch

- [Klassen und Konstruktoren in JavaScript](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#classes_and_constructors)
- [`new` Operator in JavaScript](/de/docs/Web/JavaScript/Reference/Operators/new)
- [Constructor](https://en.wikipedia.org/wiki/Constructor_%28object-oriented_programming%29) auf Wikipedia
