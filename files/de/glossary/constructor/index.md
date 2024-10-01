---
title: Constructor
slug: Glossary/Constructor
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Constructor** gehört zu einem bestimmten {{Glossary("object", "Objekt")}}, das instanziiert wird. Der Constructor initialisiert dieses Objekt und kann Zugriff auf seine privaten Informationen gewähren. Das Konzept eines Constructors kann auf die meisten {{Glossary("OOP", "objektorientierten Programmiersprachen")}} angewendet werden. Im Wesentlichen wird ein Constructor in {{Glossary("JavaScript", "JavaScript")}} normalerweise beim Instanziieren einer {{Glossary("class", "Klasse")}} deklariert.

## Syntax

```js
// This is a generic default constructor class Default
function Default() {}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, /* …, */ argN) {}
```

Um den Constructor der Klasse in JavaScript aufzurufen, verwenden Sie einen `new` Operator, um eine neue {{Glossary("object_reference", "Objektreferenz")}} einer {{Glossary("variable", "Variablen")}} zuzuweisen.

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
