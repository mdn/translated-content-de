---
title: Konstruktor
slug: Glossary/Constructor
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Konstruktor** gehört zu einer bestimmten Klasse von [Objekten](/de/docs/Glossary/object), die instanziiert wird. Der Konstruktor initialisiert dieses Objekt und kann den Zugriff auf dessen private Informationen ermöglichen. Das Konzept eines Konstruktors kann auf die meisten [objektorientierten Programmier](/de/docs/Glossary/OOP)-Sprachen angewendet werden. Im Wesentlichen wird ein Konstruktor in [JavaScript](/de/docs/Glossary/JavaScript) normalerweise bei der Instanzierung einer [Klasse](/de/docs/Glossary/class) deklariert.

## Syntax

```js
// This is a generic default constructor class Default
function Default() {}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, /* …, */ argN) {}
```

Um den Konstruktor der Klasse in JavaScript aufzurufen, verwenden Sie einen `new` Operator, um eine neue [Objektreferenz](/de/docs/Glossary/object_reference) einer [Variable](/de/docs/Glossary/variable) zuzuweisen.

```js
function Default() {}

// A new reference of a Default object assigned to a
// local variable defaultReference
const defaultReference = new Default();
```

## Siehe auch

- [Klassen und Konstruktoren in JavaScript](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#classes_and_constructors)
- [`new` Operator in JavaScript](/de/docs/Web/JavaScript/Reference/Operators/new)
- [Konstruktor](https://en.wikipedia.org/wiki/Constructor_%28object-oriented_programming%29) auf Wikipedia
